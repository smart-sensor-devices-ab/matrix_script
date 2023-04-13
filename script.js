import * as my_dongle from "bleuio";
function decimalToHex2ByteLittleEndian(decimal) {
  decimal = parseInt(decimal) * 100;
  if (decimal >= 0 && decimal <= 4294967295) {
    // Ensure decimal is within 4-byte range
    const hex = decimal.toString(16).padStart(4, "0").toUpperCase();
    const hexBytes = [
      hex.substr(0, 2),
      hex.substr(2, 2),
      hex.substr(4, 2),
      hex.substr(6, 2),
    ];
    return hexBytes.reverse().join("");
  } else {
    console.error(
      "Decimal number must be between 0 and 4294967295 (inclusive)."
    );
    return null;
  }
}
function hex2LittleEndian(decimal) {
  const hex = decimal.padStart(4, "0").toUpperCase();
  const hexBytes = [
    hex.substr(0, 2),
    hex.substr(2, 2),
    hex.substr(4, 2),
    hex.substr(6, 2),
  ];
  return hexBytes.reverse().join("");
}
function decimalToHex2ByteBigEndian(decimal) {
  decimal = parseInt(decimal) * 100;
  if (decimal >= 0 && decimal <= 4294967295) {
    // Ensure decimal is within 4-byte range
    const hex = decimal.toString(16);
    return "0".repeat(4 - hex.length) + hex.toUpperCase();
  } else {
    console.error(
      "Decimal number must be between 0 and 4294967295 (inclusive)."
    );
    return null;
  }
}
function decimalToHex(decimal, size) {
  decimal = parseInt(decimal);
  let theSize = size * 2;
  // Ensure decimal is within 4-byte range
  const hex = decimal.toString(16);
  return "0".repeat(theSize - hex.length) + hex.toUpperCase();
}

document.getElementById("connect").addEventListener("click", function () {
  my_dongle.at_connect().then((x) => {
    document.getElementById("terminal").innerHTML = x + "<br/>";
    document.getElementById("configSection").style.display = "block";
    document.getElementById("connect").style.display = "none";
  });
});
document.getElementById("resetDongle").addEventListener("click", function () {
  my_dongle.atr().then(() => {
    location.reload();
  });
});
var macAddress = "";
var isConnected = false;
document
  .getElementById("connectToBoardID")
  .addEventListener("click", function () {
    document.getElementById("loader").style.display = "block";
    let theID = document.getElementById("BOARDIDTOCONNECT").value;
    my_dongle.at_cancelconnect().then((x) => {
      console.log(x);
      document.getElementById("terminal").innerHTML += x + "<br/>";
      my_dongle.at_gapdisconnectall();
      my_dongle.at_dual().then((y) => {
        document.getElementById("terminal").innerHTML += y + "<br/>";

        my_dongle.at_findscandata("5B070614" + theID, 3).then((z) => {
          let lastVal = z[z.length - 2];
          if (lastVal.includes("[")) {
            macAddress = lastVal.substring(1, 18);
            console.log("macaddress:", macAddress);
            document.getElementById("theMacAddress").innerHTML =
              "Mac address : " + macAddress;
            my_dongle.at_gapconnect("[0]" + macAddress).then((res) => {
              if (res[2] == "CONNECTED.") {
                document.getElementById("terminal").innerHTML += res + "<br/>";
                my_dongle.at_spssend2("P=477432     ").then((res2) => {
                  console.log(res2);
                  document.getElementById("terminal").innerHTML +=
                    res2 + "<br/>";
                  isConnected = true;
                  document.getElementById("configTable").style.display =
                    "table";
                  document.getElementById("loader").style.display = "none";
                });
              } else {
                console.log("Couldnot connect. Please try again");
                document.getElementById("terminal").innerHTML +=
                  "Couldnot connect. Please try again<br/>";
              }
            });
          } else {
            console.log(
              "CANNOT FIND TO MATRIX. Please make sure the Matrix is advertising or the ID is correct then try again."
            );
          }
          //console.log(lastVal);
        });
      });
    });
  });

const readBtn = (msgID, btnName) => {
  document.getElementById("loader").style.display = "block";
  my_dongle.at_spssend("AREV=" + msgID).then((x) => {
    console.log(x);
    setTimeout(() => {
      my_dongle.at_spssend("AREV=" + msgID).then((y) => {
        console.log(y);
        setTimeout(() => {
          my_dongle.at_spssend("AREV=" + msgID).then((z) => {
            console.log(z);
            document.getElementById("terminal").innerHTML += z + "<br/>";
            document.getElementById(btnName + "_READ_DATA").innerHTML =
              z[z.length - 1];
            document.getElementById("loader").style.display = "none";
          });
        }, 500);
      });
    }, 500);
  });
};

const confBtn = (writeID, readID, btnName) => {
  let theVal = document.getElementById(btnName + "_VALUE").value;
  if (theVal) {
    my_dongle.at_spssend("CFGE=" + writeID + "=" + theVal).then((res) => {
      document.getElementById("terminal").innerHTML += res + "<br/>";
      readBtn(readID, btnName);
    });
  }
};
const confBtnLittleEndian = (writeID, readID, btnName) => {
  let theVal = document.getElementById(btnName + "_VALUE").value;
  if (theVal) {
    theVal = hex2LittleEndian(theVal);
    my_dongle.at_spssend("CFGE=" + writeID + "=" + theVal).then((res) => {
      document.getElementById("terminal").innerHTML += res + "<br/>";
      readBtn(readID, btnName);
    });
  }
};
const confBtnDec2 = (writeID, readID, btnName) => {
  let theVal = document.getElementById(btnName + "_VALUE").value;
  if (theVal) {
    theVal = decimalToHex2ByteLittleEndian(theVal);
    console.log(theVal);
    my_dongle.at_spssend("CFGE=" + writeID + "=" + theVal).then((res) => {
      document.getElementById("terminal").innerHTML += res + "<br/>";
      readBtn(readID, btnName);
    });
  }
};
const confBtnDec2BigEndian = (writeID, readID, btnName) => {
  let theVal = document.getElementById(btnName + "_VALUE").value;
  if (theVal) {
    theVal = decimalToHex2ByteBigEndian(theVal);
    my_dongle.at_spssend("CFGE=" + writeID + "=" + theVal).then((res) => {
      document.getElementById("terminal").innerHTML += res + "<br/>";
      readBtn(readID, btnName);
    });
  }
};

const confBtnDec2Hex = (writeID, readID, btnName, size) => {
  let theVal = document.getElementById(btnName + "_VALUE").value;
  if (theVal) {
    theVal = decimalToHex(theVal, size);
    console.log(theVal);
    my_dongle.at_spssend("CFGE=" + writeID + "=" + theVal).then((res) => {
      document.getElementById("terminal").innerHTML += res + "<br/>";
      readBtn(readID, btnName);
    });
  }
};
//board id
document.getElementById("BOARDID_READ_BTN").addEventListener("click", () => {
  readBtn("0 ", "BOARDID");
});

document.getElementById("BOARDID_CONF_BTN").addEventListener("click", () => {
  confBtn("0", "0 ", "BOARDID");
});
//PRODUCTID id
document.getElementById("PRODUCTID_READ_BTN").addEventListener("click", () => {
  readBtn("1 ", "PRODUCTID");
});
document.getElementById("PRODUCTID_CONF_BTN").addEventListener("click", () => {
  confBtn("1", "1 ", "PRODUCTID");
});

//SERIAL NUMBER
document
  .getElementById("SERIAL_NUMBER_READ_BTN")
  .addEventListener("click", () => {
    readBtn("2 ", "SERIAL_NUMBER");
  });
document
  .getElementById("SERIAL_NUMBER_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("2", "2 ", "SERIAL_NUMBER");
  });

//FIRMWARE_REV

document
  .getElementById("FIRMWARE_REV_READ_BTN")
  .addEventListener("click", () => {
    readBtn("3 ", "FIRMWARE_REV");
  });
document
  .getElementById("FIRMWARE_REV_CONF_BTN")
  .addEventListener("click", () => {
    confBtnDec2("3", "3 ", "FIRMWARE_REV");
  });

//ARTICLE_NUMBER

document
  .getElementById("ARTICLE_NUMBER_READ_BTN")
  .addEventListener("click", () => {
    readBtn("4 ", "ARTICLE_NUMBER");
  });
document
  .getElementById("ARTICLE_NUMBER_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("4", "4 ", "ARTICLE_NUMBER");
  });

//K_FACTOR
document.getElementById("K_FACTOR_READ_BTN").addEventListener("click", () => {
  readBtn("5 ", "K_FACTOR");
});
document.getElementById("K_FACTOR_CONF_BTN").addEventListener("click", () => {
  confBtnDec2BigEndian("5", "5 ", "K_FACTOR");
});

//FACTORY_RESET
document
  .getElementById("FACTORY_RESET_READ_BTN")
  .addEventListener("click", () => {
    readBtn("6 ", "FACTORY_RESET");
  });
document
  .getElementById("FACTORY_RESET_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("6", "6 ", "FACTORY_RESET");
  });

//ACTUAL_POS
document.getElementById("ACTUAL_POS_READ_BTN").addEventListener("click", () => {
  readBtn("7 ", "ACTUAL_POS");
});
document.getElementById("ACTUAL_POS_CONF_BTN").addEventListener("click", () => {
  confBtnDec2Hex("7", "7 ", "ACTUAL_POS", 4);
});

//RESET_COUNTER
document
  .getElementById("RESET_COUNTER_READ_BTN")
  .addEventListener("click", () => {
    readBtn("8 ", "RESET_COUNTER");
  });
document
  .getElementById("RESET_COUNTER_CONF_BTN")
  .addEventListener("click", () => {
    confBtnDec2("8", "8 ", "RESET_COUNTER");
  });
//FLOOR_TH
document.getElementById("FLOOR_TH_READ_BTN").addEventListener("click", () => {
  readBtn("9 ", "FLOOR_TH");
});
document.getElementById("FLOOR_TH_CONF_BTN").addEventListener("click", () => {
  confBtnDec2Hex("9", "9 ", "FLOOR_TH", 1);
});
//ROOF_TH
document.getElementById("ROOF_TH_READ_BTN").addEventListener("click", () => {
  readBtn("10 ", "ROOF_TH");
});
document.getElementById("ROOF_TH_CONF_BTN").addEventListener("click", () => {
  confBtnDec2Hex("10", "10 ", "ROOF_TH", 1);
});
//MAX_STEP_POS
document
  .getElementById("MAX_STEP_POS_READ_BTN")
  .addEventListener("click", () => {
    readBtn("11 ", "MAX_STEP_POS");
  });
document
  .getElementById("MAX_STEP_POS_CONF_BTN")
  .addEventListener("click", () => {
    confBtnDec2("11", "11 ", "MAX_STEP_POS");
  });
//V_MAX
document.getElementById("V_MAX_READ_BTN").addEventListener("click", () => {
  readBtn("12 ", "V_MAX");
});
document.getElementById("V_MAX_CONF_BTN").addEventListener("click", () => {
  confBtnDec2("12", "12 ", "V_MAX");
});
//I_RUN
document.getElementById("I_RUN_READ_BTN").addEventListener("click", () => {
  readBtn("13 ", "I_RUN");
});
document.getElementById("I_RUN_CONF_BTN").addEventListener("click", () => {
  confBtnDec2Hex("13", "13 ", "I_RUN", 1);
});
//TIME_MIN_TO_MAX
document
  .getElementById("TIME_MIN_TO_MAX_READ_BTN")
  .addEventListener("click", () => {
    readBtn("14 ", "TIME_MIN_TO_MAX");
  });
document
  .getElementById("TIME_MIN_TO_MAX_CONF_BTN")
  .addEventListener("click", () => {
    confBtnDec2Hex("14", "14 ", "TIME_MIN_TO_MAX", 1);
  });
//TIME_MAX_TO_MIN
document
  .getElementById("TIME_MAX_TO_MIN_READ_BTN")
  .addEventListener("click", () => {
    readBtn("15 ", "TIME_MAX_TO_MIN");
  });
document
  .getElementById("TIME_MAX_TO_MIN_CONF_BTN")
  .addEventListener("click", () => {
    confBtnDec2Hex("15", "15 ", "TIME_MAX_TO_MIN", 1);
  });
//FACTORY_SET_DATE
document
  .getElementById("FACTORY_SET_DATE_READ_BTN")
  .addEventListener("click", () => {
    readBtn("16 ", "FACTORY_SET_DATE");
  });
document
  .getElementById("FACTORY_SET_DATE_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("16", "16 ", "FACTORY_SET_DATE");
  });
//LAST_CONFIG
document
  .getElementById("LAST_CONFIG_READ_BTN")
  .addEventListener("click", () => {
    readBtn("17 ", "LAST_CONFIG");
  });
document
  .getElementById("LAST_CONFIG_CONF_BTN")
  .addEventListener("click", () => {
    confBtnLittleEndian("17", "17 ", "LAST_CONFIG");
  });
//PROJECT_NUMBER
document
  .getElementById("PROJECT_NUMBER_READ_BTN")
  .addEventListener("click", () => {
    readBtn("18 ", "PROJECT_NUMBER");
  });
document
  .getElementById("PROJECT_NUMBER_CONF_BTN")
  .addEventListener("click", () => {
    confBtnLittleEndian("18", "18 ", "PROJECT_NUMBER");
  });
//LAST_CALIBRATION
document
  .getElementById("LAST_CALIBRATION_READ_BTN")
  .addEventListener("click", () => {
    readBtn("19 ", "LAST_CALIBRATION");
  });
document
  .getElementById("LAST_CALIBRATION_CONF_BTN")
  .addEventListener("click", () => {
    confBtnLittleEndian("19", "19 ", "LAST_CALIBRATION");
  });
//NUM_MATRIX_PLATES
document
  .getElementById("NUM_MATRIX_PLATES_READ_BTN")
  .addEventListener("click", () => {
    readBtn("20 ", "NUM_MATRIX_PLATES");
  });
document
  .getElementById("NUM_MATRIX_PLATES_CONF_BTN")
  .addEventListener("click", () => {
    confBtnDec2("20", "20 ", "NUM_MATRIX_PLATES");
  });
//ERROR_MESSAGE
document
  .getElementById("ERROR_MESSAGE_READ_BTN")
  .addEventListener("click", () => {
    readBtn("21 ", "ERROR_MESSAGE");
  });
document
  .getElementById("ERROR_MESSAGE_CONF_BTN")
  .addEventListener("click", () => {
    confBtnLittleEndian("21", "21 ", "ERROR_MESSAGE");
  });
//MASTER_SLAVE_ROLE
document
  .getElementById("MASTER_SLAVE_ROLE_READ_BTN")
  .addEventListener("click", () => {
    readBtn("22 ", "MASTER_SLAVE_ROLE");
  });
document
  .getElementById("MASTER_SLAVE_ROLE_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("22", "22 ", "MASTER_SLAVE_ROLE");
  });
//INTERNAL_EXTERNAL
document
  .getElementById("INTERNAL_EXTERNAL_READ_BTN")
  .addEventListener("click", () => {
    readBtn("23 ", "INTERNAL_EXTERNAL");
  });
document
  .getElementById("INTERNAL_EXTERNAL_CONF_BTN")
  .addEventListener("click", () => {
    confBtnLittleEndian("23", "23 ", "INTERNAL_EXTERNAL");
  });
//ACT_FLOW
document.getElementById("ACT_FLOW_READ_BTN").addEventListener("click", () => {
  readBtn("24 ", "ACT_FLOW");
});
document.getElementById("ACT_FLOW_CONF_BTN").addEventListener("click", () => {
  confBtnDec2("24", "24 ", "ACT_FLOW");
});
//PRESSURE
document.getElementById("PRESSURE_READ_BTN").addEventListener("click", () => {
  readBtn("25 ", "PRESSURE");
});
document.getElementById("PRESSURE_CONF_BTN").addEventListener("click", () => {
  confBtnDec2("25", "25 ", "PRESSURE");
});
//SLAVE_MAC_ADDR1
document
  .getElementById("SLAVE_MAC_ADDR1_READ_BTN")
  .addEventListener("click", () => {
    readBtn("26 ", "SLAVE_MAC_ADDR1");
  });
document
  .getElementById("SLAVE_MAC_ADDR1_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("26", "26 ", "SLAVE_MAC_ADDR1");
  });
//SLAVE_MAC_ADDR2
document
  .getElementById("SLAVE_MAC_ADDR2_READ_BTN")
  .addEventListener("click", () => {
    readBtn("27 ", "SLAVE_MAC_ADDR2");
  });
document
  .getElementById("SLAVE_MAC_ADDR2_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("27", "27 ", "SLAVE_MAC_ADDR2");
  });
//SLAVE_MAC_ADDR3
document
  .getElementById("SLAVE_MAC_ADDR3_READ_BTN")
  .addEventListener("click", () => {
    readBtn("28 ", "SLAVE_MAC_ADDR3");
  });
document
  .getElementById("SLAVE_MAC_ADDR3_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("28", "28 ", "SLAVE_MAC_ADDR3");
  });
//SLAVE_MAC_ADDR4
document
  .getElementById("SLAVE_MAC_ADDR4_READ_BTN")
  .addEventListener("click", () => {
    readBtn("29 ", "SLAVE_MAC_ADDR4");
  });
document
  .getElementById("SLAVE_MAC_ADDR4_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("29", "29 ", "SLAVE_MAC_ADDR4");
  });
//SLAVE_MAC_ADDR5
document
  .getElementById("SLAVE_MAC_ADDR5_READ_BTN")
  .addEventListener("click", () => {
    readBtn("30 ", "SLAVE_MAC_ADDR5");
  });
document
  .getElementById("SLAVE_MAC_ADDR5_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("30", "30 ", "SLAVE_MAC_ADDR5");
  });
//SLAVE_MAC_ADDR6
document
  .getElementById("SLAVE_MAC_ADDR6_READ_BTN")
  .addEventListener("click", () => {
    readBtn("31 ", "SLAVE_MAC_ADDR6");
  });
document
  .getElementById("SLAVE_MAC_ADDR6_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("31", "31 ", "SLAVE_MAC_ADDR6");
  });
//SLAVE_MAC_ADDR7
document
  .getElementById("SLAVE_MAC_ADDR7_READ_BTN")
  .addEventListener("click", () => {
    readBtn("32 ", "SLAVE_MAC_ADDR7");
  });
document
  .getElementById("SLAVE_MAC_ADDR7_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("32", "32 ", "SLAVE_MAC_ADDR7");
  });
//MASTER_NUM_SLAVE_CONN
document
  .getElementById("MASTER_NUM_SLAVE_CONN_READ_BTN")
  .addEventListener("click", () => {
    readBtn("33 ", "MASTER_NUM_SLAVE_CONN");
  });
document
  .getElementById("MASTER_NUM_SLAVE_CONN_CONF_BTN")
  .addEventListener("click", () => {
    confBtnDec2Hex("33", "33 ", "MASTER_NUM_SLAVE_CONN", 1);
  });
//SLAVE_BOARDID_1
document
  .getElementById("SLAVE_BOARDID_1_READ_BTN")
  .addEventListener("click", () => {
    readBtn("34 ", "SLAVE_BOARDID_1");
  });
document
  .getElementById("SLAVE_BOARDID_1_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("34", "34 ", "SLAVE_BOARDID_1");
  });
//SLAVE_BOARDID_2
document
  .getElementById("SLAVE_BOARDID_2_READ_BTN")
  .addEventListener("click", () => {
    readBtn("35 ", "SLAVE_BOARDID_2");
  });
document
  .getElementById("SLAVE_BOARDID_2_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("35", "35 ", "SLAVE_BOARDID_2");
  });
//SLAVE_BOARDID_3
document
  .getElementById("SLAVE_BOARDID_3_READ_BTN")
  .addEventListener("click", () => {
    readBtn("36 ", "SLAVE_BOARDID_3");
  });
document
  .getElementById("SLAVE_BOARDID_3_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("36", "36 ", "SLAVE_BOARDID_3");
  });
//SLAVE_BOARDID_4
document
  .getElementById("SLAVE_BOARDID_4_READ_BTN")
  .addEventListener("click", () => {
    readBtn("37 ", "SLAVE_BOARDID_4");
  });
document
  .getElementById("SLAVE_BOARDID_4_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("37", "37 ", "SLAVE_BOARDID_4");
  });
//SLAVE_BOARDID_5
document
  .getElementById("SLAVE_BOARDID_5_READ_BTN")
  .addEventListener("click", () => {
    readBtn("38 ", "SLAVE_BOARDID_5");
  });
document
  .getElementById("SLAVE_BOARDID_5_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("38", "38 ", "SLAVE_BOARDID_5");
  });
//SLAVE_BOARDID_6
document
  .getElementById("SLAVE_BOARDID_6_READ_BTN")
  .addEventListener("click", () => {
    readBtn("39 ", "SLAVE_BOARDID_6");
  });
document
  .getElementById("SLAVE_BOARDID_6_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("39", "39 ", "SLAVE_BOARDID_6");
  });
//HAS_SENSOR
document.getElementById("HAS_SENSOR_READ_BTN").addEventListener("click", () => {
  readBtn("50 ", "HAS_SENSOR");
});
document.getElementById("HAS_SENSOR_CONF_BTN").addEventListener("click", () => {
  confBtn("50", "50 ", "HAS_SENSOR");
});
//HAS_MODEM
document.getElementById("HAS_MODEM_READ_BTN").addEventListener("click", () => {
  readBtn("51 ", "HAS_MODEM");
});
document.getElementById("HAS_MODEM_CONF_BTN").addEventListener("click", () => {
  confBtn("51", "51 ", "HAS_MODEM");
});
//MIN_FLOW
document.getElementById("MIN_FLOW_READ_BTN").addEventListener("click", () => {
  readBtn("52 ", "MIN_FLOW");
});
document.getElementById("MIN_FLOW_CONF_BTN").addEventListener("click", () => {
  confBtnDec2("52", "52 ", "MIN_FLOW");
});
//REQ_FLOW
document.getElementById("REQ_FLOW_READ_BTN").addEventListener("click", () => {
  readBtn("53 ", "REQ_FLOW");
});
document.getElementById("REQ_FLOW_CONF_BTN").addEventListener("click", () => {
  confBtnDec2("53", "53 ", "REQ_FLOW");
});
//TOL_FLOW
document.getElementById("TOL_FLOW_READ_BTN").addEventListener("click", () => {
  readBtn("54 ", "TOL_FLOW");
});
document.getElementById("TOL_FLOW_CONF_BTN").addEventListener("click", () => {
  confBtnDec2("54", "54 ", "TOL_FLOW");
});
//SIGNAL
document.getElementById("SIGNAL_READ_BTN").addEventListener("click", () => {
  readBtn("55 ", "SIGNAL");
});
document.getElementById("SIGNAL_CONF_BTN").addEventListener("click", () => {
  confBtnDec2("55", "55 ", "SIGNAL");
});
//O_PRESSURE
document.getElementById("O_PRESSURE_READ_BTN").addEventListener("click", () => {
  readBtn("56 ", "O_PRESSURE");
});
document.getElementById("O_PRESSURE_CONF_BTN").addEventListener("click", () => {
  confBtnDec2("56", "56 ", "O_PRESSURE");
});
//K_VALUE
document.getElementById("K_VALUE_READ_BTN").addEventListener("click", () => {
  readBtn("57 ", "K_VALUE");
});
document.getElementById("K_VALUE_CONF_BTN").addEventListener("click", () => {
  confBtnDec2("57", "57 ", "K_VALUE");
});
//CONTROL_TYPE
document
  .getElementById("CONTROL_TYPE_READ_BTN")
  .addEventListener("click", () => {
    readBtn("58 ", "CONTROL_TYPE");
  });
document
  .getElementById("CONTROL_TYPE_CONF_BTN")
  .addEventListener("click", () => {
    confBtn("58", "58 ", "CONTROL_TYPE");
  });
//MAX_FLOW
document.getElementById("MAX_FLOW_READ_BTN").addEventListener("click", () => {
  readBtn("59 ", "MAX_FLOW");
});
document.getElementById("MAX_FLOW_CONF_BTN").addEventListener("click", () => {
  confBtnDec2("59", "59 ", "MAX_FLOW");
});
//DAC_OUT_MIN_FLOW
document
  .getElementById("DAC_OUT_MIN_FLOW_READ_BTN")
  .addEventListener("click", () => {
    readBtn("60 ", "DAC_OUT_MIN_FLOW");
  });
document
  .getElementById("DAC_OUT_MIN_FLOW_CONF_BTN")
  .addEventListener("click", () => {
    confBtnDec2("60", "60 ", "DAC_OUT_MIN_FLOW");
  });
//DAC_OUT_MAX_FLOW
document
  .getElementById("DAC_OUT_MAX_FLOW_READ_BTN")
  .addEventListener("click", () => {
    readBtn("61 ", "DAC_OUT_MAX_FLOW");
  });
document
  .getElementById("DAC_OUT_MAX_FLOW_CONF_BTN")
  .addEventListener("click", () => {
    confBtnDec2("61", "61 ", "DAC_OUT_MAX_FLOW");
  });
