let port;
const connectButton = document.getElementById("connect");
var arr = [];
var isConnected = false;
var macAddress = "";
var newAction = false;
connectButton.addEventListener("click", async () => {
  try {
    port = await navigator.serial.requestPort();
    await port.open({ baudRate: 9600 });
    document.getElementById("terminal").innerHTML =
      "Connected to serial port." + "<br/>";
    document.getElementById("configSection").style.display = "block";
    document.getElementById("connect").style.display = "none";
    readData();
  } catch (error) {
    console.log(error);
  }
});

document
  .getElementById("connectToBoardID")
  .addEventListener("click", async () => {
    try {
      let theID = document.getElementById("BOARDIDTOCONNECT").value;
      const writer = port.writable.getWriter();
      const encoder = new TextEncoder();
      writer
        .write(encoder.encode("AT+CANCELCONNECT\r\n"))
        .then(() => {
          writer.write(encoder.encode("AT+GAPDISCONNECTALL\r\n"));
        })
        .then(() => {
          writer.write(encoder.encode("AT+DUAL\r\n"));
        })
        .then(() => {
          writer.write(encoder.encode("ATV1\r\n"));
        })
        .then(() => {
          writer.write(
            encoder.encode("AT+FINDSCANDATA=5B070614" + theID + "=3\r\n")
          );
          setTimeout(() => {
            let lastVal = arr[arr.length - 2];
            if (lastVal.includes("addr")) {
              lastVal = arr[arr.length - 2];
            } else if (
              arr[arr.length - 3].includes("addr") &&
              macAddress.length == 17
            ) {
              lastVal = arr[arr.length - 3];
            } else if (
              arr[arr.length - 3].includes("addr") &&
              macAddress.length != 17
            ) {
              lastVal = arr[arr.length - 4];
            } else {
              document.getElementById("theMacAddress").innerHTML =
                "Mac address : CANNOT FIND TO MATRIX. Please make sure the Matrix is advertising or the ID is correct then try again.";
              console.log(
                "CANNOT FIND TO MATRIX. Please make sure the Matrix is advertising or the ID is correct then try again."
              );
            }
            if (lastVal.includes("addr")) {
              let idx = lastVal.indexOf("addr");
              macAddress = lastVal.substring(idx + 7, idx + 24);
              console.log("ml", macAddress.length);
              document.getElementById("theMacAddress").innerHTML =
                "Mac address : " + macAddress;
              writer.write(
                encoder.encode("AT+GAPCONNECT=[0]" + macAddress + "\r\n")
              );
              setTimeout(() => {
                console.log(arr[arr.length - 1]);
                if (arr[arr.length - 1].includes("terminated."))
                  console.log("terminated");
                else {
                  writer
                    .write(encoder.encode("AT+SPSSEND=P=477432     \r\n"))
                    .then(() => {
                      isConnected = true;
                      document.getElementById("configTable").style.display =
                        "table";
                    })
                    .then(async () => {
                      arr = [];
                      await writer.close();
                    });
                }
              }, 2000);
            }
          }, 4000);
        });

      /* .then(async () => {
          await writer.close();
        }); */
    } catch (error) {
      console.log(error);
    }
  });
// board id read button
/* document
  .getElementById("BOARDID_READ_BTN")
  .addEventListener("click", async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  }); */
// BOARDID read button
document
  .getElementById("BOARDID_READ_BTN")
  .addEventListener("click", async () => {
    try {
      newAction = true;
      const writer = port.writable.getWriter();
      const encoder = new TextEncoder();
      writer
        .write(encoder.encode("AT+SPSSEND=AREV=0 \r\n"))
        .then(() => {
          console.log("readbtn", arr);
          document.getElementById("BOARDID_READ_DATA").innerHTML =
            arr[arr.length - 1];
        })
        .then(async () => {
          newAction = false;
          await writer.close();
        });
    } catch (error) {
      console.log(error);
    }
  });

// BOARDID write button
document
  .getElementById("BOARDID_COF_BTN")
  .addEventListener("click", async () => {
    try {
      const writer = port.writable.getWriter();
      const encoder = new TextEncoder();
      writer.write(encoder.encode("AT+SPSSEND=AREV=0 \r\n")).then(() => {
        console.log("readbtn", arr);
      });
    } catch (error) {
      console.log(error);
    }
  });

async function readData() {
  while (port.readable) {
    const reader = port.readable.getReader();
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          // |reader| has been canceled.
          break;
        }
        let vl = new TextDecoder().decode(value);

        document.getElementById("terminal").innerHTML += vl + "<br/>";
        arr.push(vl);
        console.log("resp", vl);
      }
    } catch (error) {
      console.log(error);
    } finally {
      reader.releaseLock();
    }
  }
}
