/**
 * @at_connect
 * Connects Device
*/ var $0a8d6484c996af74$export$f35259d22fab611;
/**
 * @at_connect
 * Disconnects Device
*/ var $0a8d6484c996af74$export$91541f028a184b3;
/**
 * @ata
 * Shows/hides ASCII values from notification/indication/read responses. 
 * ata(0) hides the ASCII values,
 * ata(1) shows the ASCII values.
 * @return {Promise} returns promise
 * 
*/ var $0a8d6484c996af74$export$b6b724bbd91c668e;
/**
 * @atasps
 * Toggle between ascii and hex responses received from SPS. 
 * atasps(0) shows hex values, atasps(1) shows ASCII. ASCII is on by default.
 * @return {Promise} returns promise
 * 
*/ var $0a8d6484c996af74$export$b56a9c521ede09bf;
/**
 * @atds
 * Turns auto discovery of services when connecting on/off. 
 * ATDS0 off, ATDS1 on. 
 * On by default. This command can be used in both central and peripheral role.
 * @return {Promise} returns promise
 * 
*/ var $0a8d6484c996af74$export$895285ab187bcc2f;
/**
 * @ati
 * Device information query.
 * @return {Promise} returns promise
 * 
*/ var $0a8d6484c996af74$export$1867a86a103bf04a;
/**
 * @at_central
 * Sets the device Bluetooth role to central role.
 * @return {Promise} returns promise
 * 
*/ /**
 * @ate
 * Turn echo on/off. (On per default). ex ate(0)
 * @param {number} status int (0 or 1, 0 for off 1 for on)
 * @return {Promise} returns promise
 * 
*/ var $0a8d6484c996af74$export$eec22ed08369cec7;
/**
 * @at_central
 * Sets the device Bluetooth role to central role.
 * @return {Promise} returns promise
 * 
*/ var $0a8d6484c996af74$export$f7189405e6f7cbbc;
/**
 * @at_dis
 * Shows the Device Information Service information to be used.
 * @return {Promise} returns promise
 * 
*/ var $0a8d6484c996af74$export$be0ded3b979e9ad6;
/**
 * @at_peripheral
 * Sets the device Bluetooth role to peripheral.
 * @return {Promise} returns promise
 * 
*/ var $0a8d6484c996af74$export$be0758e0250a5b2c;
/**
 * @atr
 * Trigger platform reset.
 * @return {Promise} returns promise
 * 
*/ var $0a8d6484c996af74$export$d707e62e41c2e637;
/**
 * @at_advstart
 * Starts advertising .
 * @return {Promise} returns promise
 * 
*/ var $0a8d6484c996af74$export$24b679427570ee75;
/**
 * @at_advstop
 * Stops advertising .
 * @return {Promise} returns promise
 * 
*/ var $0a8d6484c996af74$export$807ee2f7b9d84aaf;
/**
 * @at_advdata
 * Sets or queries the advertising data.if left empty it will query what advdata is set. 
 * @param {string} t hex str format: xx:xx:xx:xx:xx.. (max 31 bytes)
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$26628178cf1d948a;
/**
 * @at_advdatai
 * Sets advertising data in a way that lets it be used as an iBeacon.
        Format = (UUID)(MAJOR)(MINOR)(TX)
        Example: at_advdatai(5f2dd896-b886-4549-ae01-e41acd7a354a0203010400).
 * @param {string} t  if left empty it will query what advdata is set
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$87719cfa74e04b18;
/**
 * @at_advresp
 *  Sets or queries scan response data. Data must be provided as hex string.
 * @param {string} t if left empty it will query what advdata is set.hex str format: xx:xx:xx:xx:xx.. (max 31 bytes)
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$f5d6dcfe4c3211e8;
/**
 * @at_cancelconnect
 * While in Central Mode, cancels any ongoing connection attempts.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$7aa98c114312c742;
/**
 * @at_client
 * Only usable in Dual role. Sets the dongle role towards the targeted connection to client.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$53e1a7bbcc74c51c;
/**
 * @at_clearnoti
 * Disables notification for selected characteristic.
 * @param {string} t notification handle string.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$1012e28d9d94c29a;
/**
 * @at_dual
 * Sets the device Bluetooth role to dual role. This means it has the capabilities of both Central and Peripheral role. Advertising must be stopped and, any connection must be terminated before the role change is accepted.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$c1d8aeaf43388b4d;
/**
 * @at_enterpasskey
 * Enter the 6-digit passkey to continue the pairing and bodning request.
 * @param {string} t Enter the 6-digit passkey.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$d7737456c9838281;
/** @at_numcompa
* Used for accepting a numeric comparison authentication request or enabling/disabling auto-accepting numeric comparisons.
* @param {number} t 0 or 1. 0 for disabled 1 for enable. Enabled by default.
* @return {Promise} returns a promise
* 
*/ var $0a8d6484c996af74$export$f4ea3d0c700900ae;
/**
 * @at_gapiocap
 * Sets or queries what input and output capabilities the device has.
 * @param {number} t int between 0 to 4. 0 - Display only, 1 - Display + yes & no, 2 - Keyboard only, 3- No input no output, 4 - Keyboard + display
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$efb98c39e9c25602;
/**
 * @at_gappair
 * Starts a pairing or bonding procedure. Depending on whether the device is master or slave on the connection, it will send a pairing or a security request respectively.
Only usable when connected to a device.
 * @param {number} t leave blank for pairing and write BOND for bonding.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$eef313ee525d2b0;
/**
 * @at_gapunpair
 * Unpair paired devices. This will also remove the device bond data from BLE storage. Usable both when device is connected and when not. 
 * @param {number} t Leave blank to unpair all paired devices or selected paired device (device_mac_address). Public= [0] or private= [1] address type prefix required before mac address. ex: [x]xx:xx:xx:xx:xx:xx
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$18ade24e25bef8aa;
/**
 * @at_gapdisconnectall
 * Disconnects from all connected peer Bluetooth devices. This command can be used in both central and peripheral role.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$1994bcd1c6f789f1;
/**
 * @at_gapscan
 * Starts a Bluetooth device scan with or without timer set in seconds. If no timer is set, it will scan for only 1 second.
 * @param {number} t int (time in seconds)
 * @param {boolean} e true/false, true will show real time device in console
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$9795bc6dc9a03f1e;
/** @at_seclvl
* Sets or queries what minimum security level will be used when connected to other devices.
* @param {number} t leave blank for quering security level or set security level from 1 to 3. 1- No authentication and no encryption, 2-Unauthenticated pairing with encryption, 3 -Authenticated pairing with encryption
* @return {Promise} returns a promise
* 
*/ var $0a8d6484c996af74$export$c8a61fe1a89c2fca;
/** @at_setpasskey
* Setting or quering set passkey for passkey authentication.
* @param {string} t leave blank for quering passkey or set six digit passkey.
* @return {Promise} returns a promise
* 
*/ var $0a8d6484c996af74$export$419bda4092f88907;
/**
 * @at_findscandata
 * Scans for all advertising/response data which contains the search params. ex. at_findscandata('FF5',10)
 * @param {string} t search params.
 * @param {number} e number of seconds.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$84eb2cc27f02edba;
/**
 * @at_gapconnect
 * Initiates a connection with a specific slave device.
 * @param {string} t hex str format: xx:xx:xx:xx:xx:xx
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$3801b3c2c982dd5a;
/**
 * @at_gapdisconnect
 * Disconnects from a peer Bluetooth device.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$df94a12ce52fb3af;
/**
 * @at_getconn
 * Gets a list of currently connected devices along with their mac addresses, connection index, our role towards this connection and if it's bonded/paired.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$14d6e136d4a554ae;
/**
 * @at_getservices
 * Rediscovers a peripheral's services and characteristics.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$fca0cdbec14ffcdc;
/**
 * @at_getservicesonly
 * Discovers a peripherals services.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$f90adaf036adb9ba;
/**
 * @at_getservicesdetails
 * Discovers all characteristics and descriptors of a selected service. Must run at_getservicesonly() first to get the service handle.
 * Example : at_getservicesdetails('0001')
 * @param {string} t service param
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$ca49fc3358c0f65f;
/**
 * @at_indi
 * Shows list of set indication handles along with the connection index so you can see what indication you have enabled on which connected device.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$7633afa85ba91396;
/**
 * @at_noti
 * Shows list of set notification handles along with the connection index so you can see what notification you have enabled on which connected device.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$557c25996d0c3c42;
/**
 * @at_scantarget
 * Scan a target device. Displaying it's advertising and response data as it updates.
 * @param {string} t hex str format: xx:xx:xx:xx:xx:xx
 * @param {Number} e Number of responses
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$18e13032bc7d7621;
/**
 * @at_setdis
 * Sets the Device Information Service information. example at_setdis(MAN_NAME,MOD_NUM,HW_REV,FW_REV,SW_REV)
 * @param {string} name Manufacturer Name
 * @param {string} num Model Number
 * @param {string} serial Serial Number
 * @param {string} hrev Hardware revision
 * @param {string} frev Firmware revision
 * @param {string} srev Software revision
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$fc71ecf6bb9d9f15;
/**
 * @at_server
 * Only usable in Dual role. Sets the dongle role towards the targeted connection to server.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$7e44cc3730b01e48;
/**
 * @at_setnoti
 * Enable notification for selected characteristic.
 * @param {string} t notification handle
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$7ba2eacff43705b1;
/**
 * @at_setindi
 * Enable indication for selected characteristic.
 * @param {string} t indication  handle
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$57f42bd516dd6142;
/**
 * @at_spssend
 * Send a message or data via the SPS profile.Without parameters it opens a stream for continiously sending data.
 * @param {string} t if left empty it will open Streaming mode
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$4cc0d5d507dae573;
/**
 * @at_spssend2
 * Send a message or data via the SPS profile.Without parameters it opens a stream for continiously sending data.
 * @param {string} t if left empty it will open Streaming mode
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$f6211e4e6119f247;
/**
 * @at_targetconn
 * Setting or querying the connection index to use as the targeted connection.
When connected to several devices, the target connection decides which device you target when using commands such as AT+GATTCREAD, AT+GATTCWRITE, AT+GAPDISCONNECT, AT+GAPPAIR or AT+SPSSEND etc.
 * @param {string} t write connecton index of target device. if left empty it will show what device you are targeting at the momment.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$628e53bf421c376d;
/**
 * @at_gapstatus
 * Reports the Bluetooth role.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$fba372dfc4b31b4e;
/**
 * @at_gattcwrite
 * Write attribute to remote GATT server in ASCII. Can only be used in Central role and when connected to a peripheral. ex at_gattcwrite('001B','HELLO')
 * @param {string} handle_param pass handle param as string
 * @param {string} msg pass msg as string. 
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$26caebbe6b7759f2;
/**
 * @at_gattcwriteb
 * Write attribute to remote GATT server in Hex. Can only be used in Central role and when connected to a peripheral.ex at_gattcwriteb('001B','0101')
 * @param {string} handle_param pass handle param as string
 * @param {string} msg pass msg as string.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$63285a7a0b1cd477;
/**
 * @at_gattcwritewr
 * Write (without response) attribute to remote GATT server in ASCII. Can only be used in Central role and when connected to a peripheral.
 * @param {string} handle_param pass handle param as string
 * @param {string} msg pass msg as string.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$21443d50b895af1a;
/**
 * @at_gattcwritewrb
 * Write (without response) attribute to remote GATT server in Hex. Can only be used in Central role and when connected to a peripheral.
 * @param {string} handle_param pass handle param as string
 * @param {string} msg pass msg as string.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$9f2d783d1514e4ee;
/**
 * @at_gattcread
 * Read attribute of remote GATT server. Can only be used in Central role and when connected to a peripheral. ex at_gattcread('001B')
 * @param {string} handle_param pass handle param as string
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$933805b6617e41f9;
/**
 * @help
 * Shows all AT-Commands.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$34512e3b2db52a4e;
/**
 * @stop
 * Stops Current process.
 * @return {Promise} returns a promise
 * 
*/ var $0a8d6484c996af74$export$fa6813432f753b0d;
let $0a8d6484c996af74$var$port, $0a8d6484c996af74$var$reader, $0a8d6484c996af74$var$inputDone, $0a8d6484c996af74$var$outputDone, $0a8d6484c996af74$var$inputStream, $0a8d6484c996af74$var$outputStream, $0a8d6484c996af74$var$arr = [];
async function $0a8d6484c996af74$var$connect() {
    $0a8d6484c996af74$var$port = await navigator.serial.requestPort(), await $0a8d6484c996af74$var$port.open({
        baudRate: 9600
    });
    const t = new TextEncoderStream();
    $0a8d6484c996af74$var$outputDone = t.readable.pipeTo($0a8d6484c996af74$var$port.writable), $0a8d6484c996af74$var$outputStream = t.writable;
    let e = new TextDecoderStream();
    $0a8d6484c996af74$var$inputDone = $0a8d6484c996af74$var$port.readable.pipeTo(e.writable), $0a8d6484c996af74$var$inputStream = e.readable.pipeThrough(new TransformStream(new $0a8d6484c996af74$var$LineBreakTransformer())), $0a8d6484c996af74$var$reader = $0a8d6484c996af74$var$inputStream.getReader();
}
async function $0a8d6484c996af74$var$disconnect() {
    return $0a8d6484c996af74$var$reader && (await $0a8d6484c996af74$var$reader.cancel(), await $0a8d6484c996af74$var$inputDone.catch(()=>{}), $0a8d6484c996af74$var$reader = null, $0a8d6484c996af74$var$inputDone = null), $0a8d6484c996af74$var$outputStream && (await $0a8d6484c996af74$var$outputStream.getWriter().close(), await $0a8d6484c996af74$var$outputDone, $0a8d6484c996af74$var$outputStream = null, $0a8d6484c996af74$var$outputDone = null), await $0a8d6484c996af74$var$port.close(), $0a8d6484c996af74$var$port = null, "Dongle Disconnected!";
}
function $0a8d6484c996af74$var$writeCmd(t) {
    const e = $0a8d6484c996af74$var$outputStream.getWriter();
    //await port.close(),
    e.write(t), "\x03" !== t && e.write("\r"), e.releaseLock();
}
$0a8d6484c996af74$export$f35259d22fab611 = async function() {
    return await $0a8d6484c996af74$var$connect(), "device connected";
}, $0a8d6484c996af74$export$91541f028a184b3 = async function() {
    return await $0a8d6484c996af74$var$disconnect(), "device disconnected";
}, $0a8d6484c996af74$export$b6b724bbd91c668e = function(status) {
    return $0a8d6484c996af74$var$writeCmd("ATA" + status), $0a8d6484c996af74$var$readLoop("ata");
}, $0a8d6484c996af74$export$b56a9c521ede09bf = function(status) {
    return $0a8d6484c996af74$var$writeCmd("ATASPS" + status), $0a8d6484c996af74$var$readLoop("atasps");
}, $0a8d6484c996af74$export$895285ab187bcc2f = function(status) {
    return $0a8d6484c996af74$var$writeCmd("ATDS" + status), $0a8d6484c996af74$var$readLoop("atds");
}, $0a8d6484c996af74$export$1867a86a103bf04a = ()=>$0a8d6484c996af74$var$port ? ($0a8d6484c996af74$var$writeCmd("ATI"), $0a8d6484c996af74$var$readLoop("ati")) : "Device not connected.", $0a8d6484c996af74$export$eec22ed08369cec7 = function(status) {
    return $0a8d6484c996af74$var$writeCmd("ATE" + status), $0a8d6484c996af74$var$readLoop("ate");
}, $0a8d6484c996af74$export$f7189405e6f7cbbc = function() {
    return $0a8d6484c996af74$var$writeCmd("AT+CENTRAL"), $0a8d6484c996af74$var$readLoop("at_central");
}, $0a8d6484c996af74$export$be0ded3b979e9ad6 = function() {
    return $0a8d6484c996af74$var$writeCmd("AT+DIS"), $0a8d6484c996af74$var$readLoop("at_dis");
}, $0a8d6484c996af74$export$be0758e0250a5b2c = function() {
    return $0a8d6484c996af74$var$writeCmd("AT+PERIPHERAL"), $0a8d6484c996af74$var$readLoop("at_peripheral");
}, $0a8d6484c996af74$export$d707e62e41c2e637 = function() {
    return $0a8d6484c996af74$var$writeCmd("ATR"), $0a8d6484c996af74$var$readLoop("atr");
}, $0a8d6484c996af74$export$24b679427570ee75 = function() {
    return $0a8d6484c996af74$var$writeCmd("AT+ADVSTART"), $0a8d6484c996af74$var$readLoop("at_advstart");
}, $0a8d6484c996af74$export$807ee2f7b9d84aaf = function() {
    return $0a8d6484c996af74$var$writeCmd("AT+ADVSTOP"), $0a8d6484c996af74$var$readLoop("at_advstop");
}, $0a8d6484c996af74$export$26628178cf1d948a = (t)=>($0a8d6484c996af74$var$writeCmd(t ? "AT+ADVDATA=" + t : "AT+ADVDATA"), $0a8d6484c996af74$var$readLoop("at_advdata")), $0a8d6484c996af74$export$87719cfa74e04b18 = function(t) {
    return $0a8d6484c996af74$var$writeCmd("AT+ADVDATAI=" + t), $0a8d6484c996af74$var$readLoop("at_advdatai");
}, $0a8d6484c996af74$export$f5d6dcfe4c3211e8 = function(t) {
    return $0a8d6484c996af74$var$writeCmd(t ? "AT+ADVRESP=" + t : "AT+ADVRESP"), $0a8d6484c996af74$var$readLoop("at_advresp");
}, $0a8d6484c996af74$export$7aa98c114312c742 = function() {
    return $0a8d6484c996af74$var$writeCmd("AT+CANCELCONNECT"), $0a8d6484c996af74$var$readLoop("at_cancelconnect");
}, $0a8d6484c996af74$export$53e1a7bbcc74c51c = function() {
    return $0a8d6484c996af74$var$writeCmd("AT+CLIENT"), $0a8d6484c996af74$var$readLoop("at_client");
}, $0a8d6484c996af74$export$1012e28d9d94c29a = function(t) {
    return $0a8d6484c996af74$var$writeCmd("AT+CLEARNOTI=" + t), $0a8d6484c996af74$var$readLoop("at_clearnoti");
}, $0a8d6484c996af74$export$c1d8aeaf43388b4d = function() {
    return $0a8d6484c996af74$var$writeCmd("AT+DUAL"), $0a8d6484c996af74$var$readLoop("at_dual");
}, $0a8d6484c996af74$export$d7737456c9838281 = function(t = 123456) {
    return $0a8d6484c996af74$var$writeCmd("AT+ENTERPASSKEY=" + t), $0a8d6484c996af74$var$readLoop("at_enterpasskey");
}, $0a8d6484c996af74$export$f4ea3d0c700900ae = function(t) {
    return $0a8d6484c996af74$var$writeCmd(t ? "AT+NUMCOMPA=" + t : "AT+NUMCOMPA"), $0a8d6484c996af74$var$readLoop("at_numcompa");
}, $0a8d6484c996af74$export$efb98c39e9c25602 = function(t = 1) {
    return $0a8d6484c996af74$var$writeCmd("AT+GAPIOCAP=" + t), $0a8d6484c996af74$var$readLoop("at_gapiocap");
}, $0a8d6484c996af74$export$eef313ee525d2b0 = function(t) {
    return $0a8d6484c996af74$var$writeCmd(t ? "AT+GAPPAIR=" + t : "AT+GAPPAIR"), $0a8d6484c996af74$var$readLoop("at_gappair");
}, $0a8d6484c996af74$export$18ade24e25bef8aa = function(t) {
    return $0a8d6484c996af74$var$writeCmd(t ? "AT+GAPUNPAIR=" + t : "AT+GAPUNPAIR"), $0a8d6484c996af74$var$readLoop("at_gapunpair");
}, $0a8d6484c996af74$export$1994bcd1c6f789f1 = function() {
    return $0a8d6484c996af74$var$writeCmd("AT+GAPDISCONNECTALL"), $0a8d6484c996af74$var$readLoop("at_gapdisconnectall");
}, $0a8d6484c996af74$export$9795bc6dc9a03f1e = function(t = 1, e = true) {
    return $0a8d6484c996af74$var$writeCmd("AT+GAPSCAN=" + t), $0a8d6484c996af74$var$readLoop("at_gapscan", e);
}, $0a8d6484c996af74$export$c8a61fe1a89c2fca = function(t) {
    return $0a8d6484c996af74$var$writeCmd(t ? "AT+SECLVL=" + t : "AT+SECLVL"), $0a8d6484c996af74$var$readLoop("at_seclvl");
}, $0a8d6484c996af74$export$419bda4092f88907 = function(t) {
    return $0a8d6484c996af74$var$writeCmd(t ? "AT+SETPASSKEY=" + t : "AT+SETPASSKEY"), $0a8d6484c996af74$var$readLoop("at_setpasskey");
}, $0a8d6484c996af74$export$84eb2cc27f02edba = function(t = 1, e = 5) {
    return $0a8d6484c996af74$var$writeCmd("AT+FINDSCANDATA=" + t + "=" + e), $0a8d6484c996af74$var$readLoop("at_findscandata");
}, $0a8d6484c996af74$export$3801b3c2c982dd5a = function(t) {
    return $0a8d6484c996af74$var$writeCmd("AT+GAPCONNECT=" + t), $0a8d6484c996af74$var$readLoop("at_gapconnect");
}, $0a8d6484c996af74$export$df94a12ce52fb3af = function() {
    return $0a8d6484c996af74$var$writeCmd("AT+GAPDISCONNECT"), $0a8d6484c996af74$var$readLoop("at_gapdisconnect");
}, $0a8d6484c996af74$export$14d6e136d4a554ae = async function() {
    return $0a8d6484c996af74$var$writeCmd("AT+GETCONN"), $0a8d6484c996af74$var$readLoop("at_getconn");
}, $0a8d6484c996af74$export$fca0cdbec14ffcdc = function() {
    return $0a8d6484c996af74$var$writeCmd("AT+GETSERVICES"), $0a8d6484c996af74$var$readLoop("at_getservices");
}, $0a8d6484c996af74$export$f90adaf036adb9ba = function() {
    return $0a8d6484c996af74$var$writeCmd("AT+GETSERVICESONLY"), $0a8d6484c996af74$var$readLoop("at_getservicesonly");
}, $0a8d6484c996af74$export$ca49fc3358c0f65f = function(t) {
    return $0a8d6484c996af74$var$writeCmd("AT+GETSERVICEDETAILS=" + t), $0a8d6484c996af74$var$readLoop("at_getservicesdetails");
}, $0a8d6484c996af74$export$7633afa85ba91396 = function() {
    return $0a8d6484c996af74$var$writeCmd("AT+INDI"), $0a8d6484c996af74$var$readLoop("at_indi");
}, $0a8d6484c996af74$export$557c25996d0c3c42 = function() {
    return $0a8d6484c996af74$var$writeCmd("AT+NOTI"), $0a8d6484c996af74$var$readLoop("at_noti");
}, $0a8d6484c996af74$export$18e13032bc7d7621 = function(t, e = 1) {
    return $0a8d6484c996af74$var$writeCmd("AT+SCANTARGET=" + t), $0a8d6484c996af74$var$readLoop("at_scantarget", e + 2);
}, $0a8d6484c996af74$export$fc71ecf6bb9d9f15 = function(name, num, serial, hrev, frev, srev) {
    return $0a8d6484c996af74$var$writeCmd("AT+SETDIS=" + name + "=" + num + "=" + serial + "=" + hrev + "=" + frev + "=" + srev), $0a8d6484c996af74$var$readLoop("at_setdis");
}, $0a8d6484c996af74$export$7e44cc3730b01e48 = function() {
    return $0a8d6484c996af74$var$writeCmd("AT+SERVER"), $0a8d6484c996af74$var$readLoop("at_server");
}, $0a8d6484c996af74$export$7ba2eacff43705b1 = function(t) {
    return $0a8d6484c996af74$var$writeCmd("AT+SETNOTI=" + t), $0a8d6484c996af74$var$readLoop("at_setnoti");
}, $0a8d6484c996af74$export$57f42bd516dd6142 = function(t) {
    return $0a8d6484c996af74$var$writeCmd("AT+SETINDI=" + t), $0a8d6484c996af74$var$readLoop("at_setindi");
}, $0a8d6484c996af74$export$4cc0d5d507dae573 = function(t) {
    //arr = [];
    return $0a8d6484c996af74$var$writeCmd(t ? "AT+SPSSEND=" + t : "AT+SPSSEND"), $0a8d6484c996af74$var$readLoop("at_spssend");
}, $0a8d6484c996af74$export$f6211e4e6119f247 = function(t) {
    return $0a8d6484c996af74$var$writeCmd(t ? "AT+SPSSEND=" + t : "AT+SPSSEND"), $0a8d6484c996af74$var$readLoop("at_spssend2");
}, $0a8d6484c996af74$export$628e53bf421c376d = function(t) {
    return $0a8d6484c996af74$var$writeCmd(t ? "AT+TARGETCONN=" + t : "AT+TARGETCONN"), $0a8d6484c996af74$var$readLoop("at_targetconn");
}, $0a8d6484c996af74$export$fba372dfc4b31b4e = function() {
    return $0a8d6484c996af74$var$writeCmd("AT+GAPSTATUS"), $0a8d6484c996af74$var$readLoop("at_gapstatus");
}, $0a8d6484c996af74$export$26caebbe6b7759f2 = function(handle_param1, msg) {
    return $0a8d6484c996af74$var$writeCmd("AT+GATTCWRITE=" + handle_param1 + " " + msg), $0a8d6484c996af74$var$readLoop("at_gattcwrite");
}, $0a8d6484c996af74$export$63285a7a0b1cd477 = function(handle_param1, msg) {
    return $0a8d6484c996af74$var$writeCmd("AT+GATTCWRITEB=" + handle_param1 + " " + msg), $0a8d6484c996af74$var$readLoop("at_gattcwriteb");
}, $0a8d6484c996af74$export$21443d50b895af1a = function(handle_param1, msg) {
    return $0a8d6484c996af74$var$writeCmd("AT+GATTCWRITEWR=" + handle_param1 + " " + msg), $0a8d6484c996af74$var$readLoop("at_gattcwritewr");
}, $0a8d6484c996af74$export$9f2d783d1514e4ee = function(handle_param1, msg) {
    return $0a8d6484c996af74$var$writeCmd("AT+GATTCWRITEWRB=" + handle_param1 + " " + msg), $0a8d6484c996af74$var$readLoop("at_gattcwritewrb");
}, $0a8d6484c996af74$export$933805b6617e41f9 = function() {
    return $0a8d6484c996af74$var$writeCmd("AT+GATTCREAD=" + handle_param), $0a8d6484c996af74$var$readLoop("at_gattcread");
}, $0a8d6484c996af74$export$34512e3b2db52a4e = function() {
    return $0a8d6484c996af74$var$writeCmd("--H"), $0a8d6484c996af74$var$readLoop("help");
}, $0a8d6484c996af74$export$fa6813432f753b0d = function() {
    return $0a8d6484c996af74$var$writeCmd("\x03"), "Process Stopped";
};
class $0a8d6484c996af74$var$LineBreakTransformer {
    constructor(){
        this.container = "";
    }
    transform(t, e) {
        this.container += t;
        const r = this.container.split("\r\n");
        this.container = r.pop(), r.forEach((t)=>e.enqueue(t));
    }
    flush(t) {
        t.enqueue(this.container);
    }
}
async function $0a8d6484c996af74$var$readLoop(t, e) {
    for($0a8d6484c996af74$var$arr = [];;){
        const { done: r , value: a  } = await $0a8d6484c996af74$var$reader.read();
        switch(a && $0a8d6484c996af74$var$arr.push(a), t){
            case "ata":
                if (2 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "atasps":
                if (2 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "atds":
                if (2 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "ati":
                if ($0a8d6484c996af74$var$arr.includes("Not Advertising") || $0a8d6484c996af74$var$arr.includes("Advertising")) return $0a8d6484c996af74$var$arr;
                break;
            case "ate":
                if ($0a8d6484c996af74$var$arr.includes("ECHO OFF") || $0a8d6484c996af74$var$arr.includes("ECHO ON")) return $0a8d6484c996af74$var$arr;
                break;
            case "at_central":
                return "Central Mode";
            case "at_dis":
                if ($0a8d6484c996af74$var$arr.includes("dis_info_end")) return $0a8d6484c996af74$var$arr;
                break;
            case "at_peripheral":
                return "Peripheral Mode";
            case "at_advstart":
                return "Advertising";
            case "at_advstop":
                return "Advertising Stopped";
            case "at_advdata":
            case "at_advdatai":
            case "at_advresp":
                if (2 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "at_cancelconnect":
                if ($0a8d6484c996af74$var$arr.includes("ERROR") || $0a8d6484c996af74$var$arr.includes("OK")) return $0a8d6484c996af74$var$arr;
                break;
            case "at_client":
                return "Client";
            case "at_clearnoti":
                if (2 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "at_dual":
                return "Dual Mode";
            case "at_enterpasskey":
                if (2 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "atr":
                return "Trigger platform reset";
            case "at_findscandata":
                if ($0a8d6484c996af74$var$arr.includes("SCAN COMPLETE")) return $0a8d6484c996af74$var$arr;
                break;
            case "at_gapdisconnectall":
                if ($0a8d6484c996af74$var$arr.includes("All connections terminated.")) return $0a8d6484c996af74$var$arr;
                break;
            case "at_gapiocap":
                if (3 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "at_gappair":
                if ($0a8d6484c996af74$var$arr.includes("PAIRING SUCCESS") || $0a8d6484c996af74$var$arr.includes("BONDING SUCCESS")) return $0a8d6484c996af74$var$arr;
                break;
            case "at_gapunpair":
                if ($0a8d6484c996af74$var$arr.includes("UNPARIED.") || 3 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "at_gapscan":
                if (e === true) $0a8d6484c996af74$var$arr.some(function(v) {
                    if (v.indexOf("RSSI") >= 0 && a != "") console.log(a);
                });
                if ($0a8d6484c996af74$var$arr.includes("SCAN COMPLETE")) return $0a8d6484c996af74$var$arr;
                break;
            case "at_getconn":
                if ($0a8d6484c996af74$var$arr.includes("No Connections found.") || 2 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
            case "at_indi":
                if (2 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "at_noti":
                if (2 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "at_scantarget":
                if ($0a8d6484c996af74$var$arr.length == e) {
                    const t = $0a8d6484c996af74$var$outputStream.getWriter();
                    return t.write("\x03"), t.releaseLock(), $0a8d6484c996af74$var$arr.slice(2);
                }
                break;
            case "at_setdis":
                if (2 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "at_setpasskey":
                if (2 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "at_gattcwrite":
                if (4 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "at_gapstatus":
                if ($0a8d6484c996af74$var$arr.includes("Not Advertising") || $0a8d6484c996af74$var$arr.includes("Advertising")) return $0a8d6484c996af74$var$arr;
                break;
            case "at_gattcwrite":
                if (4 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "at_gattcwriteb":
                if (4 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "at_gattcwritewr":
                if (2 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "at_gattcwritewrb":
                if (2 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "at_gattcread":
                if (4 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "at_gapconnect":
                if ($0a8d6484c996af74$var$arr.includes("handle_evt_gattc_browse_completed: conn_idx=0000 status=0")) return $0a8d6484c996af74$var$arr;
                break;
            case "at_getservices":
                if ($0a8d6484c996af74$var$arr.includes("Value received: \x02")) return $0a8d6484c996af74$var$arr;
                break;
            case "at_getservicesonly":
                if ($0a8d6484c996af74$var$arr.includes("handle_evt_gattc_discover_completed: conn_idx=0000 type=SVC status=0")) return $0a8d6484c996af74$var$arr;
                break;
            case "at_getservicesdetails":
                if ($0a8d6484c996af74$var$arr.includes("handle_evt_gattc_browse_completed: conn_idx=0000 status=0")) return $0a8d6484c996af74$var$arr;
                break;
            case "at_gapdisconnect":
                return "Disconnected.";
            case "at_numcompa":
                if ($0a8d6484c996af74$var$arr.includes("ERROR") || $0a8d6484c996af74$var$arr.includes("OK")) return $0a8d6484c996af74$var$arr;
                break;
            case "at_seclvl":
                if (2 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "at_server":
                return "Server";
            case "at_setnoti":
                if (20 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "at_setindi":
                if (2 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "at_spssend2":
                if (2 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
            case "at_spssend":
                if (4 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
                break;
            case "at_targetconn":
                if (2 == $0a8d6484c996af74$var$arr.length) return $0a8d6484c996af74$var$arr;
            case "help":
                if ($0a8d6484c996af74$var$arr.includes("[A] = Usable in All Roles")) return $0a8d6484c996af74$var$arr;
                break;
            default:
                return "Nothing!";
        }
    }
}


function $6ad8ad463c5b160a$var$decimalToHex2ByteLittleEndian(decimal) {
    if (decimal.includes(".")) decimal = parseFloat(decimal) * 100;
    else decimal = parseInt(decimal) * 100;
    if (decimal >= 0 && decimal <= 4294967295) {
        // Ensure decimal is within 4-byte range
        const hex = decimal.toString(16).padStart(4, "0").toUpperCase();
        const hexBytes = [
            hex.substr(0, 2),
            hex.substr(2, 2),
            hex.substr(4, 2),
            hex.substr(6, 2)
        ];
        return hexBytes.reverse().join("");
    } else {
        console.error("Decimal number must be between 0 and 4294967295 (inclusive).");
        return null;
    }
}
function $6ad8ad463c5b160a$var$hex2LittleEndian(decimal) {
    const hex = decimal.padStart(4, "0").toUpperCase();
    const hexBytes = [
        hex.substr(0, 2),
        hex.substr(2, 2),
        hex.substr(4, 2),
        hex.substr(6, 2)
    ];
    return hexBytes.reverse().join("");
}
function $6ad8ad463c5b160a$var$decimalToHex2ByteBigEndian(decimal) {
    if (decimal.includes(".")) decimal = parseFloat(decimal) * 10;
    else decimal = parseInt(decimal) * 10;
    if (decimal >= 0 && decimal <= 4294967295) {
        // Ensure decimal is within 4-byte range
        const hex = decimal.toString(16);
        return "0".repeat(4 - hex.length) + hex.toUpperCase();
    } else {
        console.error("Decimal number must be between 0 and 4294967295 (inclusive).");
        return null;
    }
}
function $6ad8ad463c5b160a$var$decimalToHex(decimal, size) {
    decimal = parseInt(decimal);
    let theSize = size * 2;
    // Ensure decimal is within 4-byte range
    const hex = decimal.toString(16);
    return "0".repeat(theSize - hex.length) + hex.toUpperCase();
}
document.getElementById("connect").addEventListener("click", function() {
    $0a8d6484c996af74$export$f35259d22fab611().then((x)=>{
        document.getElementById("terminal").innerHTML = x + "<br/>";
        document.getElementById("configSection").style.display = "block";
        document.getElementById("connect").style.display = "none";
    });
});
document.getElementById("resetDongle").addEventListener("click", function() {
    $0a8d6484c996af74$export$d707e62e41c2e637().then(()=>{
        location.reload();
    });
});
var $6ad8ad463c5b160a$var$macAddress = "";
var $6ad8ad463c5b160a$var$isConnected = false;
document.getElementById("connectToBoardID").addEventListener("click", function() {
    document.getElementById("loader").style.display = "block";
    let theID = document.getElementById("BOARDIDTOCONNECT").value;
    $0a8d6484c996af74$export$7aa98c114312c742().then((x)=>{
        console.log(x);
        document.getElementById("terminal").innerHTML += x + "<br/>";
        $0a8d6484c996af74$export$1994bcd1c6f789f1();
        $0a8d6484c996af74$export$c1d8aeaf43388b4d().then((y)=>{
            document.getElementById("terminal").innerHTML += y + "<br/>";
            $0a8d6484c996af74$export$84eb2cc27f02edba("5B070614" + theID, 3).then((z)=>{
                let lastVal = z[z.length - 2];
                if (lastVal.includes("[")) {
                    $6ad8ad463c5b160a$var$macAddress = lastVal.substring(1, 18);
                    console.log("macaddress:", $6ad8ad463c5b160a$var$macAddress);
                    document.getElementById("theMacAddress").innerHTML = "Mac address : " + $6ad8ad463c5b160a$var$macAddress;
                    $0a8d6484c996af74$export$3801b3c2c982dd5a("[0]" + $6ad8ad463c5b160a$var$macAddress).then((res)=>{
                        if (res[2] == "CONNECTED.") {
                            document.getElementById("terminal").innerHTML += res + "<br/>";
                            $0a8d6484c996af74$export$f6211e4e6119f247("P=477432     ").then((res2)=>{
                                console.log(res2);
                                document.getElementById("terminal").innerHTML += res2 + "<br/>";
                                $6ad8ad463c5b160a$var$isConnected = true;
                                document.getElementById("configTable").style.display = "block";
                                document.getElementById("loader").style.display = "none";
                            });
                        } else {
                            console.log("Couldnot connect. Please try again");
                            document.getElementById("terminal").innerHTML += "Couldnot connect. Please try again<br/>";
                        }
                    });
                } else console.log("CANNOT FIND TO MATRIX. Please make sure the Matrix is advertising or the ID is correct then try again.");
            //console.log(lastVal);
            });
        });
    });
});
const $6ad8ad463c5b160a$var$readBtn = (msgID, btnName)=>{
    document.getElementById("loader").style.display = "block";
    $0a8d6484c996af74$export$4cc0d5d507dae573("AREV=" + msgID).then((x)=>{
        console.log(x);
        setTimeout(()=>{
            $0a8d6484c996af74$export$4cc0d5d507dae573("AREV=" + msgID).then((y)=>{
                setTimeout(()=>{
                    $0a8d6484c996af74$export$4cc0d5d507dae573("AREV=" + msgID).then((z)=>{
                        setTimeout(()=>{
                            console.log(z);
                            document.getElementById("terminal").innerHTML += z + "<br/>";
                            document.getElementById(btnName + "_READ_DATA").innerHTML = z[z.length - 1];
                            document.getElementById("loader").style.display = "none";
                        }, 500);
                    }).catch((err)=>{
                        console.log(err);
                    });
                }, 500);
            }).catch((err)=>{
                console.log(err);
            });
        }, 500);
    }).catch((err)=>{
        console.log(err);
    });
};
const $6ad8ad463c5b160a$var$confBtn = (writeID, readID, btnName)=>{
    let theVal = document.getElementById(btnName + "_VALUE").value;
    if (theVal) $0a8d6484c996af74$export$4cc0d5d507dae573("CFGE=" + writeID + "=" + theVal).then((res)=>{
        document.getElementById("terminal").innerHTML += res + "<br/>";
        $6ad8ad463c5b160a$var$readBtn(readID, btnName);
        document.getElementById("liveToast").classList.add("show");
        setTimeout(()=>{
            document.getElementById("liveToast").classList.remove("show");
        }, 4000);
    });
};
const $6ad8ad463c5b160a$var$confBtnLittleEndian = (writeID, readID, btnName)=>{
    let theVal = document.getElementById(btnName + "_VALUE").value;
    if (theVal) {
        theVal = $6ad8ad463c5b160a$var$hex2LittleEndian(theVal);
        $0a8d6484c996af74$export$4cc0d5d507dae573("CFGE=" + writeID + "=" + theVal).then((res)=>{
            document.getElementById("terminal").innerHTML += res + "<br/>";
            $6ad8ad463c5b160a$var$readBtn(readID, btnName);
            document.getElementById("liveToast").classList.add("show");
            setTimeout(()=>{
                document.getElementById("liveToast").classList.remove("show");
            }, 4000);
        });
    }
};
const $6ad8ad463c5b160a$var$confBtnDec2 = (writeID, readID, btnName)=>{
    let theVal = document.getElementById(btnName + "_VALUE").value;
    if (theVal) {
        theVal = $6ad8ad463c5b160a$var$decimalToHex2ByteLittleEndian(theVal);
        console.log(theVal);
        $0a8d6484c996af74$export$4cc0d5d507dae573("CFGE=" + writeID + "=" + theVal).then((res)=>{
            document.getElementById("terminal").innerHTML += res + "<br/>";
            $6ad8ad463c5b160a$var$readBtn(readID, btnName);
            document.getElementById("liveToast").classList.add("show");
            setTimeout(()=>{
                document.getElementById("liveToast").classList.remove("show");
            }, 4000);
        });
    }
};
const $6ad8ad463c5b160a$var$confBtnDec2BigEndian = (writeID, readID, btnName)=>{
    let theVal = document.getElementById(btnName + "_VALUE").value;
    if (theVal) {
        theVal = $6ad8ad463c5b160a$var$decimalToHex2ByteBigEndian(theVal);
        console.log(theVal);
        $0a8d6484c996af74$export$4cc0d5d507dae573("CFGE=" + writeID + "=" + theVal).then((res)=>{
            document.getElementById("terminal").innerHTML += res + "<br/>";
            $6ad8ad463c5b160a$var$readBtn(readID, btnName);
            document.getElementById("liveToast").classList.add("show");
            setTimeout(()=>{
                document.getElementById("liveToast").classList.remove("show");
            }, 4000);
        });
    }
};
const $6ad8ad463c5b160a$var$confBtnDec2Hex = (writeID, readID, btnName, size)=>{
    let theVal = document.getElementById(btnName + "_VALUE").value;
    if (theVal) {
        theVal = $6ad8ad463c5b160a$var$decimalToHex(theVal, size);
        console.log(theVal);
        $0a8d6484c996af74$export$4cc0d5d507dae573("CFGE=" + writeID + "=" + theVal).then((res)=>{
            document.getElementById("terminal").innerHTML += res + "<br/>";
            $6ad8ad463c5b160a$var$readBtn(readID, btnName);
            document.getElementById("liveToast").classList.add("show");
            setTimeout(()=>{
                document.getElementById("liveToast").classList.remove("show");
            }, 4000);
        });
    }
};
//board id
document.getElementById("BOARDID_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("0 ", "BOARDID");
});
document.getElementById("BOARDID_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("0", "0 ", "BOARDID");
});
//PRODUCTID id
document.getElementById("PRODUCTID_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("1 ", "PRODUCTID");
});
document.getElementById("PRODUCTID_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("1", "1 ", "PRODUCTID");
});
//SERIAL NUMBER
document.getElementById("SERIAL_NUMBER_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("2 ", "SERIAL_NUMBER");
});
document.getElementById("SERIAL_NUMBER_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("2", "2 ", "SERIAL_NUMBER");
});
//FIRMWARE_REV
document.getElementById("FIRMWARE_REV_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("3 ", "FIRMWARE_REV");
});
document.getElementById("FIRMWARE_REV_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2("3", "3 ", "FIRMWARE_REV");
});
//ARTICLE_NUMBER
document.getElementById("ARTICLE_NUMBER_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("4 ", "ARTICLE_NUMBER");
});
document.getElementById("ARTICLE_NUMBER_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("4", "4 ", "ARTICLE_NUMBER");
});
//K_FACTOR
document.getElementById("K_FACTOR_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("5 ", "K_FACTOR");
});
document.getElementById("K_FACTOR_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2BigEndian("5", "5 ", "K_FACTOR");
});
//FACTORY_RESET
document.getElementById("FACTORY_RESET_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("6 ", "FACTORY_RESET");
});
document.getElementById("FACTORY_RESET_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("6", "6 ", "FACTORY_RESET");
});
//ACTUAL_POS
document.getElementById("ACTUAL_POS_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("7 ", "ACTUAL_POS");
});
document.getElementById("ACTUAL_POS_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2Hex("7", "7 ", "ACTUAL_POS", 4);
});
//RESET_COUNTER
document.getElementById("RESET_COUNTER_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("8 ", "RESET_COUNTER");
});
document.getElementById("RESET_COUNTER_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2("8", "8 ", "RESET_COUNTER");
});
//FLOOR_TH
document.getElementById("FLOOR_TH_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("9 ", "FLOOR_TH");
});
document.getElementById("FLOOR_TH_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2Hex("9", "9 ", "FLOOR_TH", 1);
});
//ROOF_TH
document.getElementById("ROOF_TH_READ_BTN").addEventListener("click", ()=>{
    console.log("here");
    $6ad8ad463c5b160a$var$readBtn("10 ", "ROOF_TH");
});
document.getElementById("ROOF_TH_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2Hex("10", "10 ", "ROOF_TH", 1);
});
//MAX_STEP_POS
document.getElementById("MAX_STEP_POS_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("11 ", "MAX_STEP_POS");
});
document.getElementById("MAX_STEP_POS_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2("11", "11 ", "MAX_STEP_POS");
});
//V_MAX
document.getElementById("V_MAX_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("12 ", "V_MAX");
});
document.getElementById("V_MAX_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2("12", "12 ", "V_MAX");
});
//I_RUN
document.getElementById("I_RUN_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("13 ", "I_RUN");
});
document.getElementById("I_RUN_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2Hex("13", "13 ", "I_RUN", 1);
});
//TIME_MIN_TO_MAX
document.getElementById("TIME_MIN_TO_MAX_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("14 ", "TIME_MIN_TO_MAX");
});
document.getElementById("TIME_MIN_TO_MAX_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2Hex("14", "14 ", "TIME_MIN_TO_MAX", 1);
});
//TIME_MAX_TO_MIN
document.getElementById("TIME_MAX_TO_MIN_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("15 ", "TIME_MAX_TO_MIN");
});
document.getElementById("TIME_MAX_TO_MIN_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2Hex("15", "15 ", "TIME_MAX_TO_MIN", 1);
});
//FACTORY_SET_DATE
document.getElementById("FACTORY_SET_DATE_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("16 ", "FACTORY_SET_DATE");
});
document.getElementById("FACTORY_SET_DATE_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("16", "16 ", "FACTORY_SET_DATE");
});
//LAST_CONFIG
document.getElementById("LAST_CONFIG_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("17 ", "LAST_CONFIG");
});
document.getElementById("LAST_CONFIG_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnLittleEndian("17", "17 ", "LAST_CONFIG");
});
//PROJECT_NUMBER
document.getElementById("PROJECT_NUMBER_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("18 ", "PROJECT_NUMBER");
});
document.getElementById("PROJECT_NUMBER_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnLittleEndian("18", "18 ", "PROJECT_NUMBER");
});
//LAST_CALIBRATION
document.getElementById("LAST_CALIBRATION_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("19 ", "LAST_CALIBRATION");
});
document.getElementById("LAST_CALIBRATION_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnLittleEndian("19", "19 ", "LAST_CALIBRATION");
});
//NUM_MATRIX_PLATES
document.getElementById("NUM_MATRIX_PLATES_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("20 ", "NUM_MATRIX_PLATES");
});
document.getElementById("NUM_MATRIX_PLATES_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2("20", "20 ", "NUM_MATRIX_PLATES");
});
//ERROR_MESSAGE
document.getElementById("ERROR_MESSAGE_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("21 ", "ERROR_MESSAGE");
});
document.getElementById("ERROR_MESSAGE_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnLittleEndian("21", "21 ", "ERROR_MESSAGE");
});
//MASTER_SLAVE_ROLE
document.getElementById("MASTER_SLAVE_ROLE_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("22 ", "MASTER_SLAVE_ROLE");
});
document.getElementById("MASTER_SLAVE_ROLE_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("22", "22 ", "MASTER_SLAVE_ROLE");
});
//INTERNAL_EXTERNAL
document.getElementById("INTERNAL_EXTERNAL_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("23 ", "INTERNAL_EXTERNAL");
});
document.getElementById("INTERNAL_EXTERNAL_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnLittleEndian("23", "23 ", "INTERNAL_EXTERNAL");
});
//ACT_FLOW
document.getElementById("ACT_FLOW_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("24 ", "ACT_FLOW");
});
document.getElementById("ACT_FLOW_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2("24", "24 ", "ACT_FLOW");
});
//PRESSURE
document.getElementById("PRESSURE_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("25 ", "PRESSURE");
});
document.getElementById("PRESSURE_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2("25", "25 ", "PRESSURE");
});
//SLAVE_MAC_ADDR1
document.getElementById("SLAVE_MAC_ADDR1_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("26 ", "SLAVE_MAC_ADDR1");
});
document.getElementById("SLAVE_MAC_ADDR1_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("26", "26 ", "SLAVE_MAC_ADDR1");
});
//SLAVE_MAC_ADDR2
document.getElementById("SLAVE_MAC_ADDR2_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("27 ", "SLAVE_MAC_ADDR2");
});
document.getElementById("SLAVE_MAC_ADDR2_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("27", "27 ", "SLAVE_MAC_ADDR2");
});
//SLAVE_MAC_ADDR3
document.getElementById("SLAVE_MAC_ADDR3_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("28 ", "SLAVE_MAC_ADDR3");
});
document.getElementById("SLAVE_MAC_ADDR3_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("28", "28 ", "SLAVE_MAC_ADDR3");
});
//SLAVE_MAC_ADDR4
document.getElementById("SLAVE_MAC_ADDR4_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("29 ", "SLAVE_MAC_ADDR4");
});
document.getElementById("SLAVE_MAC_ADDR4_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("29", "29 ", "SLAVE_MAC_ADDR4");
});
//SLAVE_MAC_ADDR5
document.getElementById("SLAVE_MAC_ADDR5_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("30 ", "SLAVE_MAC_ADDR5");
});
document.getElementById("SLAVE_MAC_ADDR5_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("30", "30 ", "SLAVE_MAC_ADDR5");
});
//SLAVE_MAC_ADDR6
document.getElementById("SLAVE_MAC_ADDR6_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("31 ", "SLAVE_MAC_ADDR6");
});
document.getElementById("SLAVE_MAC_ADDR6_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("31", "31 ", "SLAVE_MAC_ADDR6");
});
//SLAVE_MAC_ADDR7
document.getElementById("SLAVE_MAC_ADDR7_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("32 ", "SLAVE_MAC_ADDR7");
});
document.getElementById("SLAVE_MAC_ADDR7_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("32", "32 ", "SLAVE_MAC_ADDR7");
});
//MASTER_NUM_SLAVE_CONN
document.getElementById("MASTER_NUM_SLAVE_CONN_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("33 ", "MASTER_NUM_SLAVE_CONN");
});
document.getElementById("MASTER_NUM_SLAVE_CONN_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2Hex("33", "33 ", "MASTER_NUM_SLAVE_CONN", 1);
});
//SLAVE_BOARDID_1
document.getElementById("SLAVE_BOARDID_1_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("34 ", "SLAVE_BOARDID_1");
});
document.getElementById("SLAVE_BOARDID_1_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("34", "34 ", "SLAVE_BOARDID_1");
});
//SLAVE_BOARDID_2
document.getElementById("SLAVE_BOARDID_2_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("35 ", "SLAVE_BOARDID_2");
});
document.getElementById("SLAVE_BOARDID_2_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("35", "35 ", "SLAVE_BOARDID_2");
});
//SLAVE_BOARDID_3
document.getElementById("SLAVE_BOARDID_3_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("36 ", "SLAVE_BOARDID_3");
});
document.getElementById("SLAVE_BOARDID_3_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("36", "36 ", "SLAVE_BOARDID_3");
});
//SLAVE_BOARDID_4
document.getElementById("SLAVE_BOARDID_4_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("37 ", "SLAVE_BOARDID_4");
});
document.getElementById("SLAVE_BOARDID_4_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("37", "37 ", "SLAVE_BOARDID_4");
});
//SLAVE_BOARDID_5
document.getElementById("SLAVE_BOARDID_5_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("38 ", "SLAVE_BOARDID_5");
});
document.getElementById("SLAVE_BOARDID_5_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("38", "38 ", "SLAVE_BOARDID_5");
});
//SLAVE_BOARDID_6
document.getElementById("SLAVE_BOARDID_6_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("39 ", "SLAVE_BOARDID_6");
});
document.getElementById("SLAVE_BOARDID_6_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("39", "39 ", "SLAVE_BOARDID_6");
});
//HAS_SENSOR
document.getElementById("HAS_SENSOR_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("50 ", "HAS_SENSOR");
});
document.getElementById("HAS_SENSOR_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("50", "50 ", "HAS_SENSOR");
});
//HAS_MODEM
document.getElementById("HAS_MODEM_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("51 ", "HAS_MODEM");
});
document.getElementById("HAS_MODEM_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("51", "51 ", "HAS_MODEM");
});
//MIN_FLOW
document.getElementById("MIN_FLOW_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("52 ", "MIN_FLOW");
});
document.getElementById("MIN_FLOW_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2("52", "52 ", "MIN_FLOW");
});
//REQ_FLOW
document.getElementById("REQ_FLOW_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("53 ", "REQ_FLOW");
});
document.getElementById("REQ_FLOW_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2("53", "53 ", "REQ_FLOW");
});
//TOL_FLOW
document.getElementById("TOL_FLOW_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("54 ", "TOL_FLOW");
});
document.getElementById("TOL_FLOW_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2("54", "54 ", "TOL_FLOW");
});
//SIGNAL
document.getElementById("SIGNAL_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("55 ", "SIGNAL");
});
document.getElementById("SIGNAL_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2("55", "55 ", "SIGNAL");
});
//O_PRESSURE
document.getElementById("O_PRESSURE_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("56 ", "O_PRESSURE");
});
document.getElementById("O_PRESSURE_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2("56", "56 ", "O_PRESSURE");
});
//K_VALUE
document.getElementById("K_VALUE_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("57 ", "K_VALUE");
});
document.getElementById("K_VALUE_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2("57", "57 ", "K_VALUE");
});
//CONTROL_TYPE
document.getElementById("CONTROL_TYPE_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("58 ", "CONTROL_TYPE");
});
document.getElementById("CONTROL_TYPE_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtn("58", "58 ", "CONTROL_TYPE");
});
//MAX_FLOW
document.getElementById("MAX_FLOW_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("59 ", "MAX_FLOW");
});
document.getElementById("MAX_FLOW_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2("59", "59 ", "MAX_FLOW");
});
//DAC_OUT_MIN_FLOW
document.getElementById("DAC_OUT_MIN_FLOW_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("60 ", "DAC_OUT_MIN_FLOW");
});
document.getElementById("DAC_OUT_MIN_FLOW_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2("60", "60 ", "DAC_OUT_MIN_FLOW");
});
//DAC_OUT_MAX_FLOW
document.getElementById("DAC_OUT_MAX_FLOW_READ_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$readBtn("61 ", "DAC_OUT_MAX_FLOW");
});
document.getElementById("DAC_OUT_MAX_FLOW_CONF_BTN").addEventListener("click", ()=>{
    $6ad8ad463c5b160a$var$confBtnDec2("61", "61 ", "DAC_OUT_MAX_FLOW");
});


//# sourceMappingURL=index.64fb4917.js.map
