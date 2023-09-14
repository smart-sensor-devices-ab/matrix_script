// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
export const configObject = [
  {
    id: 0,
    name: 'BOARDID',
    size: 3,
    value: 'FFFFFF',
    type: 'HEX',
  },
  {
    id: 1,
    name: 'PRODUCTID',
    size: 4,
    value: 'FFFFFFFF',
    type: 'HEX',
  },
  {
    id: 2,
    name: 'SERIAL_NUMBER',
    size: 4,
    value: 'FFFFFFFF',
    type: 'HEX',
  },
  {
    id: 3,
    name: 'FIRMWARE_REV',
    size: 2,
    value: 'FFFF',
    type: 'DECIMAL',
  },
  {
    id: 4,
    name: 'ARTICLE_NUMBER',
    size: 20,
    value: 'FFFFFFFFFFFFFFFFFFFFFFFF',
    type: 'HEX',
  },
  {
    id: 5,
    name: 'K_FACTOR',
    size: 2,
    value: 'FFFF',
    type: 'DECIMAL',
  },
  {
    id: 6,
    name: 'FACTORY_RESET',
    size: 1,
    value: 'FF',
    type: 'HEX',
  },
  {
    id: 7,
    name: 'ACTUAL_POS',
    size: 4,
    value: 'FFFFFFFF',
    type: 'DECIMAL',
  },
  {
    id: 8,
    name: 'RESET_COUNTER',
    size: 2,
    value: 'FFFF',
    type: 'HEX',
  },
  {
    id: 9,
    name: 'FLOOR_TH',
    size: 1,
    value: 'FF',
    type: 'DECIMAL',
  },
  {
    id: 10,
    name: 'ROOF_TH',
    size: 1,
    value: 'FF',
    type: 'DECIMAL',
  },
  {
    id: 11,
    name: 'MAX_STEP_POS',
    size: 2,
    value: 'FFFF',
    type: 'DECIMAL',
  },
  {
    id: 12,
    name: 'V_MAX',
    size: 2,
    value: 'FFFF',
    type: 'DECIMAL',
  },
  {
    id: 13,
    name: 'I_RUN',
    size: 1,
    value: 'FF',
    type: 'DECIMAL',
  },
  {
    id: 14,
    name: 'TIME_MIN_TO_MAX',
    size: 1,
    value: 'FF',
    type: 'DECIMAL',
  },
  {
    id: 15,
    name: 'TIME_MAX_TO_MIN',
    size: 1,
    value: 'FF',
    type: 'DECIMAL',
  },
  {
    id: 16,
    name: 'FACTORY_SET_DATE',
    size: 4,
    value: 'FFFFFFFF',
    type: 'HEX',
  },
  {
    id: 17,
    name: 'LAST_CONFIG',
    size: 2,
    value: 'FFFF',
    type: 'HEX',
  },
  {
    id: 18,
    name: 'PROJECT_NUMBER',
    size: 2,
    value: 'FFFF',
    type: 'HEX',
  },
  {
    id: 19,
    name: 'LAST_CALIBRATION',
    size: 2,
    value: 'FFFF',
    type: 'HEX',
  },
  {
    id: 20,
    name: 'NUM_MATRIX_PLATES',
    size: 2,
    value: 'FFFF',
    type: 'DECIMAL',
  },
  {
    id: 21,
    name: 'ERROR_MESSAGE',
    size: 2,
    value: 'FFFF',
    type: 'HEX',
  },
  {
    id: 22,
    name: 'MASTER_SLAVE_ROLE',
    size: 1,
    value: 'FF',
    type: 'HEX',
  },
  {
    id: 23,
    name: 'INTERNAL_EXTERNAL',
    size: 2,
    value: 'FFFF',
    type: 'HEX',
  },
  {
    id: 24,
    name: 'ACT_FLOW',
    size: 2,
    value: 'FFFF',
    type: 'DECIMAL',
  },
  {
    id: 25,
    name: 'PRESSURE',
    size: 2,
    value: 'FFFF',
    type: 'DECIMAL',
  },
  {
    id: 26,
    name: 'SLAVE_MAC_ADDR1',
    size: 6,
    value: 'FFFFFFFFFFFF',
    type: 'HEX',
  },
  {
    id: 27,
    name: 'SLAVE_MAC_ADDR2',
    size: 6,
    value: 'FFFFFFFFFFFF',
    type: 'HEX',
  },
  {
    id: 28,
    name: 'SLAVE_MAC_ADDR3',
    size: 6,
    value: 'FFFFFFFFFFFF',
    type: 'HEX',
  },
  {
    id: 29,
    name: 'SLAVE_MAC_ADDR4',
    size: 6,
    value: 'FFFFFFFFFFFF',
    type: 'HEX',
  },
  {
    id: 30,
    name: 'SLAVE_MAC_ADDR5',
    size: 6,
    value: 'FFFFFFFFFFFF',
    type: 'HEX',
  },
  {
    id: 31,
    name: 'SLAVE_MAC_ADDR6',
    size: 6,
    value: 'FFFFFFFFFFFF',
    type: 'HEX',
  },
  {
    id: 32,
    name: 'SLAVE_MAC_ADDR7',
    size: 6,
    value: 'FFFFFFFFFFFF',
    type: 'HEX',
  },
  {
    id: 33,
    name: 'MASTER_NUM_SLAVE_CONN',
    size: 1,
    value: 'FF',
    type: 'DECIMAL',
  },
  {
    id: 34,
    name: 'SLAVE_BOARDID_1',
    size: 3,
    value: 'FFFFFF',
    type: 'HEX',
  },
  {
    id: 35,
    name: 'SLAVE_BOARDID_2',
    size: 3,
    value: 'FFFFFF',
    type: 'HEX',
  },
  {
    id: 36,
    name: 'SLAVE_BOARDID_3',
    size: 3,
    value: 'FFFFFF',
    type: 'HEX',
  },
  {
    id: 37,
    name: 'SLAVE_BOARDID_4',
    size: 3,
    value: 'FFFFFF',
    type: 'HEX',
  },
  {
    id: 38,
    name: 'SLAVE_BOARDID_5',
    size: 3,
    value: 'FFFFFF',
    type: 'HEX',
  },
  {
    id: 39,
    name: 'SLAVE_BOARDID_6',
    size: 3,
    value: 'FFFFFF',
    type: 'HEX',
  },
  {
    id: 50,
    name: 'HAS_SENSOR',
    size: 1,
    value: 'FF',
    type: 'HEX',
  },
  {
    id: 51,
    name: 'HAS_MODEM',
    size: 1,
    value: 'FF',
    type: 'HEX',
  },
  {
    id: 52,
    name: 'MIN_FLOW',
    size: 2,
    value: 'FFFF',
    type: 'DECIMAL',
  },
  {
    id: 53,
    name: 'REQ_FLOW',
    size: 2,
    value: 'FFFF',
    type: 'DECIMAL',
  },
  {
    id: 54,
    name: 'TOL_FLOW',
    size: 2,
    value: 'FFFF',
    type: 'DECIMAL',
  },
  {
    id: 55,
    name: 'SIGNAL',
    size: 2,
    value: 'FFFF',
    type: 'DECIMAL',
  },
  {
    id: 56,
    name: 'O_PRESSURE',
    size: 2,
    value: 'FFFF',
    type: 'DECIMAL',
  },
  {
    id: 57,
    name: 'K_VALUE',
    size: 2,
    value: 'FFFF',
    type: 'DECIMAL',
  },
  {
    id: 58,
    name: 'CONTROL_TYPE',
    size: 1,
    value: 'FF',
    type: 'HEX',
  },
  {
    id: 59,
    name: 'MAX_FLOW',
    size: 2,
    value: 'FFFF',
    type: 'DECIMAL',
  },
  {
    id: 60,
    name: 'DAC_OUT_MIN_FLOW',
    size: 2,
    value: 'FFFF',
    type: 'DECIMAL',
  },
  {
    id: 61,
    name: 'DAC_OUT_MAX_FLOW',
    size: 2,
    value: 'FFFF',
    type: 'DECIMAL',
  },
  {
    id: 62,
    name: 'MODBUS_ADDRESS',
    size: 1,
    value: 'FF',
    type: 'HEX',
  },
  {
    id: 63,
    name: 'MODBUS_MODE',
    size: 1,
    value: 'FF',
    type: 'DECIMAL',
  },
  {
    id: 64,
    name: 'MODBUS_BAUD',
    size: 4,
    value: 'FFFFFFFF',
    type: 'DECIMAL',
  },
  {
    id: 65,
    name: 'MODBUS_DATA_BIT',
    size: 1,
    value: 'FF',
    type: 'DECIMAL',
  },
  {
    id: 66,
    name: 'MODBUS_PARITY',
    size: 1,
    value: 'FF',
    type: 'DECIMAL',
  },
  {
    id: 67,
    name: 'MODBUS_STOP_BIT',
    size: 1,
    value: 'FF',
    type: 'DECIMAL',
  },
];

parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})(
  {
    '../../../node_modules/bleuio/index.js': [
      function (require, module, exports) {
        let port,
          reader,
          inputDone,
          outputDone,
          inputStream,
          outputStream,
          arr = [];
        async function connect() {
          (port = await navigator.serial.requestPort()),
            await port.open({ baudRate: 9600 });
          const t = new TextEncoderStream();
          (outputDone = t.readable.pipeTo(port.writable)),
            (outputStream = t.writable);
          let e = new TextDecoderStream();
          (inputDone = port.readable.pipeTo(e.writable)),
            (inputStream = e.readable.pipeThrough(
              new TransformStream(new LineBreakTransformer())
            )),
            (reader = inputStream.getReader());
        }
        async function disconnect() {
          return (
            reader &&
              (await reader.cancel(),
              await inputDone.catch(() => {}),
              (reader = null),
              (inputDone = null)),
            outputStream &&
              (await outputStream.getWriter().close(),
              await outputDone,
              (outputStream = null),
              (outputDone = null)),
            await port.close(),
            (port = null),
            'Dongle Disconnected!'
          );
        }
        function writeCmd(t) {
          const e = outputStream.getWriter();
          //await port.close(),
          e.write(t), '' !== t && e.write('\r'), e.releaseLock();
        }
        /**
         * @at_connect
         * Connects Device
         */
        (exports.at_connect = async function () {
          return await connect(), 'device connected';
        }),
          /**
           * @at_connect
           * Disconnects Device
           */
          (exports.at_disconnect = async function () {
            return await disconnect(), 'device disconnected';
          }),
          /**
           * @ata
           * Shows/hides ASCII values from notification/indication/read responses.
           * ata(0) hides the ASCII values,
           * ata(1) shows the ASCII values.
           * @return {Promise} returns promise
           *
           */
          (exports.ata = function (status) {
            return writeCmd('ATA' + status), readLoop('ata');
          }),
          /**
           * @atasps
           * Toggle between ascii and hex responses received from SPS.
           * atasps(0) shows hex values, atasps(1) shows ASCII. ASCII is on by default.
           * @return {Promise} returns promise
           *
           */
          (exports.atasps = function (status) {
            return writeCmd('ATASPS' + status), readLoop('atasps');
          }),
          /**
           * @atds
           * Turns auto discovery of services when connecting on/off.
           * ATDS0 off, ATDS1 on.
           * On by default. This command can be used in both central and peripheral role.
           * @return {Promise} returns promise
           *
           */
          (exports.atds = function (status) {
            return writeCmd('ATDS' + status), readLoop('atds');
          }),
          /**
           * @ati
           * Device information query.
           * @return {Promise} returns promise
           *
           */
          (exports.ati = () =>
            port
              ? (writeCmd('ATI'), readLoop('ati'))
              : 'Device not connected.'),
          /**
           * @at_central
           * Sets the device Bluetooth role to central role.
           * @return {Promise} returns promise
           *
           */
          /**
           * @ate
           * Turn echo on/off. (On per default). ex ate(0)
           * @param {number} status int (0 or 1, 0 for off 1 for on)
           * @return {Promise} returns promise
           *
           */
          (exports.ate = function (status) {
            return writeCmd('ATE' + status), readLoop('ate');
          }),
          /**
           * @at_central
           * Sets the device Bluetooth role to central role.
           * @return {Promise} returns promise
           *
           */
          (exports.at_central = function () {
            return writeCmd('AT+CENTRAL'), readLoop('at_central');
          }),
          /**
           * @at_dis
           * Shows the Device Information Service information to be used.
           * @return {Promise} returns promise
           *
           */
          (exports.at_dis = function () {
            return writeCmd('AT+DIS'), readLoop('at_dis');
          }),
          /**
           * @at_peripheral
           * Sets the device Bluetooth role to peripheral.
           * @return {Promise} returns promise
           *
           */
          (exports.at_peripheral = function () {
            return writeCmd('AT+PERIPHERAL'), readLoop('at_peripheral');
          }),
          /**
           * @atr
           * Trigger platform reset.
           * @return {Promise} returns promise
           *
           */
          (exports.atr = function () {
            return writeCmd('ATR'), readLoop('atr');
          }),
          /**
           * @at_advstart
           * Starts advertising .
           * @return {Promise} returns promise
           *
           */
          (exports.at_advstart = function () {
            return writeCmd('AT+ADVSTART'), readLoop('at_advstart');
          }),
          /**
           * @at_advstop
           * Stops advertising .
           * @return {Promise} returns promise
           *
           */
          (exports.at_advstop = function () {
            return writeCmd('AT+ADVSTOP'), readLoop('at_advstop');
          }),
          /**
           * @at_advdata
           * Sets or queries the advertising data.if left empty it will query what advdata is set.
           * @param {string} t hex str format: xx:xx:xx:xx:xx.. (max 31 bytes)
           * @return {Promise} returns a promise
           *
           */
          (exports.at_advdata = (t) => (
            writeCmd(t ? 'AT+ADVDATA=' + t : 'AT+ADVDATA'),
            readLoop('at_advdata')
          )),
          /**
 * @at_advdatai
 * Sets advertising data in a way that lets it be used as an iBeacon.
        Format = (UUID)(MAJOR)(MINOR)(TX)
        Example: at_advdatai(5f2dd896-b886-4549-ae01-e41acd7a354a0203010400).
 * @param {string} t  if left empty it will query what advdata is set
 * @return {Promise} returns a promise
 * 
*/
          (exports.at_advdatai = function (t) {
            return writeCmd('AT+ADVDATAI=' + t), readLoop('at_advdatai');
          }),
          /**
           * @at_advresp
           *  Sets or queries scan response data. Data must be provided as hex string.
           * @param {string} t if left empty it will query what advdata is set.hex str format: xx:xx:xx:xx:xx.. (max 31 bytes)
           * @return {Promise} returns a promise
           *
           */
          (exports.at_advresp = function (t) {
            return (
              writeCmd(t ? 'AT+ADVRESP=' + t : 'AT+ADVRESP'),
              readLoop('at_advresp')
            );
          }),
          /**
           * @at_cancelconnect
           * While in Central Mode, cancels any ongoing connection attempts.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_cancelconnect = function () {
            return writeCmd('AT+CANCELCONNECT'), readLoop('at_cancelconnect');
          }),
          /**
           * @at_client
           * Only usable in Dual role. Sets the dongle role towards the targeted connection to client.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_client = function () {
            return writeCmd('AT+CLIENT'), readLoop('at_client');
          }),
          /**
           * @at_clearnoti
           * Disables notification for selected characteristic.
           * @param {string} t notification handle string.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_clearnoti = function (t) {
            return writeCmd('AT+CLEARNOTI=' + t), readLoop('at_clearnoti');
          }),
          /**
           * @at_dual
           * Sets the device Bluetooth role to dual role. This means it has the capabilities of both Central and Peripheral role. Advertising must be stopped and, any connection must be terminated before the role change is accepted.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_dual = function () {
            return writeCmd('AT+DUAL'), readLoop('at_dual');
          }),
          /**
           * @at_enterpasskey
           * Enter the 6-digit passkey to continue the pairing and bodning request.
           * @param {string} t Enter the 6-digit passkey.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_enterpasskey = function (t = 123456) {
            return (
              writeCmd('AT+ENTERPASSKEY=' + t), readLoop('at_enterpasskey')
            );
          }),
          /** @at_numcompa
           * Used for accepting a numeric comparison authentication request or enabling/disabling auto-accepting numeric comparisons.
           * @param {number} t 0 or 1. 0 for disabled 1 for enable. Enabled by default.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_numcompa = function (t) {
            return (
              writeCmd(t ? 'AT+NUMCOMPA=' + t : 'AT+NUMCOMPA'),
              readLoop('at_numcompa')
            );
          }),
          /**
           * @at_gapiocap
           * Sets or queries what input and output capabilities the device has.
           * @param {number} t int between 0 to 4. 0 - Display only, 1 - Display + yes & no, 2 - Keyboard only, 3- No input no output, 4 - Keyboard + display
           * @return {Promise} returns a promise
           *
           */
          (exports.at_gapiocap = function (t = 1) {
            return writeCmd('AT+GAPIOCAP=' + t), readLoop('at_gapiocap');
          }),
          /**
 * @at_gappair
 * Starts a pairing or bonding procedure. Depending on whether the device is master or slave on the connection, it will send a pairing or a security request respectively.
Only usable when connected to a device.
 * @param {number} t leave blank for pairing and write BOND for bonding.
 * @return {Promise} returns a promise
 * 
*/
          (exports.at_gappair = function (t) {
            return (
              writeCmd(t ? 'AT+GAPPAIR=' + t : 'AT+GAPPAIR'),
              readLoop('at_gappair')
            );
          }),
          /**
           * @at_gapunpair
           * Unpair paired devices. This will also remove the device bond data from BLE storage. Usable both when device is connected and when not.
           * @param {number} t Leave blank to unpair all paired devices or selected paired device (device_mac_address). Public= [0] or private= [1] address type prefix required before mac address. ex: [x]xx:xx:xx:xx:xx:xx
           * @return {Promise} returns a promise
           *
           */
          (exports.at_gapunpair = function (t) {
            return (
              writeCmd(t ? 'AT+GAPUNPAIR=' + t : 'AT+GAPUNPAIR'),
              readLoop('at_gapunpair')
            );
          }),
          /**
           * @at_gapdisconnectall
           * Disconnects from all connected peer Bluetooth devices. This command can be used in both central and peripheral role.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_gapdisconnectall = function () {
            return (
              writeCmd('AT+GAPDISCONNECTALL'), readLoop('at_gapdisconnectall')
            );
          }),
          /**
           * @at_gapscan
           * Starts a Bluetooth device scan with or without timer set in seconds. If no timer is set, it will scan for only 1 second.
           * @param {number} t int (time in seconds)
           * @param {boolean} e true/false, true will show real time device in console
           * @return {Promise} returns a promise
           *
           */
          (exports.at_gapscan = function (t = 1, e = true) {
            return writeCmd('AT+GAPSCAN=' + t), readLoop('at_gapscan', e);
          }),
          /** @at_seclvl
           * Sets or queries what minimum security level will be used when connected to other devices.
           * @param {number} t leave blank for quering security level or set security level from 1 to 3. 1- No authentication and no encryption, 2-Unauthenticated pairing with encryption, 3 -Authenticated pairing with encryption
           * @return {Promise} returns a promise
           *
           */
          (exports.at_seclvl = function (t) {
            return (
              writeCmd(t ? 'AT+SECLVL=' + t : 'AT+SECLVL'),
              readLoop('at_seclvl')
            );
          }),
          /** @at_setpasskey
           * Setting or quering set passkey for passkey authentication.
           * @param {string} t leave blank for quering passkey or set six digit passkey.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_setpasskey = function (t) {
            return (
              writeCmd(t ? 'AT+SETPASSKEY=' + t : 'AT+SETPASSKEY'),
              readLoop('at_setpasskey')
            );
          }),
          /**
           * @at_findscandata
           * Scans for all advertising/response data which contains the search params. ex. at_findscandata('FF5',10)
           * @param {string} t search params.
           * @param {number} e number of seconds.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_findscandata = function (t = 1, e = 5) {
            return (
              writeCmd('AT+FINDSCANDATA=' + t + '=' + e),
              readLoop('at_findscandata')
            );
          }),
          /**
           * @at_gapconnect
           * Initiates a connection with a specific slave device.
           * @param {string} t hex str format: xx:xx:xx:xx:xx:xx
           * @return {Promise} returns a promise
           *
           */
          (exports.at_gapconnect = function (t) {
            arr = [];
            return writeCmd('AT+GAPCONNECT=' + t), readLoop('at_gapconnect');
          }),
          /**
           * @at_gapdisconnect
           * Disconnects from a peer Bluetooth device.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_gapdisconnect = function () {
            return writeCmd('AT+GAPDISCONNECT'), readLoop('at_gapdisconnect');
          }),
          /**
           * @at_getconn
           * Gets a list of currently connected devices along with their mac addresses, connection index, our role towards this connection and if it's bonded/paired.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_getconn = async function () {
            return writeCmd('AT+GETCONN'), readLoop('at_getconn');
          }),
          /**
           * @at_getservices
           * Rediscovers a peripheral's services and characteristics.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_getservices = function () {
            return writeCmd('AT+GETSERVICES'), readLoop('at_getservices');
          }),
          /**
           * @at_getservicesonly
           * Discovers a peripherals services.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_getservicesonly = function () {
            return (
              writeCmd('AT+GETSERVICESONLY'), readLoop('at_getservicesonly')
            );
          }),
          /**
           * @at_getservicesdetails
           * Discovers all characteristics and descriptors of a selected service. Must run at_getservicesonly() first to get the service handle.
           * Example : at_getservicesdetails('0001')
           * @param {string} t service param
           * @return {Promise} returns a promise
           *
           */
          (exports.at_getservicesdetails = function (t) {
            return (
              writeCmd('AT+GETSERVICEDETAILS=' + t),
              readLoop('at_getservicesdetails')
            );
          }),
          /**
           * @at_indi
           * Shows list of set indication handles along with the connection index so you can see what indication you have enabled on which connected device.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_indi = function () {
            return writeCmd('AT+INDI'), readLoop('at_indi');
          }),
          /**
           * @at_noti
           * Shows list of set notification handles along with the connection index so you can see what notification you have enabled on which connected device.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_noti = function () {
            return writeCmd('AT+NOTI'), readLoop('at_noti');
          }),
          /**
           * @at_scantarget
           * Scan a target device. Displaying it's advertising and response data as it updates.
           * @param {string} t hex str format: xx:xx:xx:xx:xx:xx
           * @param {Number} e Number of responses
           * @return {Promise} returns a promise
           *
           */
          (exports.at_scantarget = function (t, e = 1) {
            return (
              writeCmd('AT+SCANTARGET=' + t), readLoop('at_scantarget', e + 2)
            );
          }),
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
           */
          (exports.at_setdis = function (name, num, serial, hrev, frev, srev) {
            return (
              writeCmd(
                'AT+SETDIS=' +
                  name +
                  '=' +
                  num +
                  '=' +
                  serial +
                  '=' +
                  hrev +
                  '=' +
                  frev +
                  '=' +
                  srev
              ),
              readLoop('at_setdis')
            );
          }),
          /**
           * @at_server
           * Only usable in Dual role. Sets the dongle role towards the targeted connection to server.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_server = function () {
            return writeCmd('AT+SERVER'), readLoop('at_server');
          }),
          /**
           * @at_setnoti
           * Enable notification for selected characteristic.
           * @param {string} t notification handle
           * @return {Promise} returns a promise
           *
           */
          (exports.at_setnoti = function (t) {
            return writeCmd('AT+SETNOTI=' + t), readLoop('at_setnoti');
          }),
          /**
           * @at_setindi
           * Enable indication for selected characteristic.
           * @param {string} t indication  handle
           * @return {Promise} returns a promise
           *
           */
          (exports.at_setindi = function (t) {
            return writeCmd('AT+SETINDI=' + t), readLoop('at_setindi');
          }),
          /**
           * @at_spssend
           * Send a message or data via the SPS profile.Without parameters it opens a stream for continiously sending data.
           * @param {string} t if left empty it will open Streaming mode
           * @return {Promise} returns a promise
           *
           */
          (exports.at_spssend = function (t) {
            arr = [];
            return (
              writeCmd(t ? 'AT+SPSSEND=' + t : 'AT+SPSSEND'),
              readLoop('at_spssend')
            );
          }),
          /**
           * @at_spssend2
           * Send a message or data via the SPS profile.Without parameters it opens a stream for continiously sending data.
           * @param {string} t if left empty it will open Streaming mode
           * @return {Promise} returns a promise
           *
           */
          (exports.at_spssend2 = function (t) {
            arr = [];
            return (
              writeCmd(t ? 'AT+SPSSEND=' + t : 'AT+SPSSEND'),
              readLoop('at_spssend2')
            );
          }),
          /**
 * @at_targetconn
 * Setting or querying the connection index to use as the targeted connection.
When connected to several devices, the target connection decides which device you target when using commands such as AT+GATTCREAD, AT+GATTCWRITE, AT+GAPDISCONNECT, AT+GAPPAIR or AT+SPSSEND etc.
 * @param {string} t write connecton index of target device. if left empty it will show what device you are targeting at the momment.
 * @return {Promise} returns a promise
 * 
*/
          (exports.at_targetconn = function (t) {
            return (
              writeCmd(t ? 'AT+TARGETCONN=' + t : 'AT+TARGETCONN'),
              readLoop('at_targetconn')
            );
          }),
          /**
           * @at_gapstatus
           * Reports the Bluetooth role.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_gapstatus = function () {
            return writeCmd('AT+GAPSTATUS'), readLoop('at_gapstatus');
          }),
          /**
           * @at_gattcwrite
           * Write attribute to remote GATT server in ASCII. Can only be used in Central role and when connected to a peripheral. ex at_gattcwrite('001B','HELLO')
           * @param {string} handle_param pass handle param as string
           * @param {string} msg pass msg as string.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_gattcwrite = function (handle_param, msg) {
            return (
              writeCmd('AT+GATTCWRITE=' + handle_param + ' ' + msg),
              readLoop('at_gattcwrite')
            );
          }),
          /**
           * @at_gattcwriteb
           * Write attribute to remote GATT server in Hex. Can only be used in Central role and when connected to a peripheral.ex at_gattcwriteb('001B','0101')
           * @param {string} handle_param pass handle param as string
           * @param {string} msg pass msg as string.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_gattcwriteb = function (handle_param, msg) {
            return (
              writeCmd('AT+GATTCWRITEB=' + handle_param + ' ' + msg),
              readLoop('at_gattcwriteb')
            );
          }),
          /**
           * @at_gattcwritewr
           * Write (without response) attribute to remote GATT server in ASCII. Can only be used in Central role and when connected to a peripheral.
           * @param {string} handle_param pass handle param as string
           * @param {string} msg pass msg as string.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_gattcwritewr = function (handle_param, msg) {
            return (
              writeCmd('AT+GATTCWRITEWR=' + handle_param + ' ' + msg),
              readLoop('at_gattcwritewr')
            );
          }),
          /**
           * @at_gattcwritewrb
           * Write (without response) attribute to remote GATT server in Hex. Can only be used in Central role and when connected to a peripheral.
           * @param {string} handle_param pass handle param as string
           * @param {string} msg pass msg as string.
           * @return {Promise} returns a promise
           *
           */
          (exports.at_gattcwritewrb = function (handle_param, msg) {
            return (
              writeCmd('AT+GATTCWRITEWRB=' + handle_param + ' ' + msg),
              readLoop('at_gattcwritewrb')
            );
          }),
          /**
           * @at_gattcread
           * Read attribute of remote GATT server. Can only be used in Central role and when connected to a peripheral. ex at_gattcread('001B')
           * @param {string} handle_param pass handle param as string
           * @return {Promise} returns a promise
           *
           */
          (exports.at_gattcread = function () {
            return (
              writeCmd('AT+GATTCREAD=' + handle_param), readLoop('at_gattcread')
            );
          }),
          /**
           * @help
           * Shows all AT-Commands.
           * @return {Promise} returns a promise
           *
           */
          (exports.help = function () {
            return writeCmd('--H'), readLoop('help');
          }),
          /**
           * @stop
           * Stops Current process.
           * @return {Promise} returns a promise
           *
           */
          (exports.stop = function () {
            return writeCmd(''), 'Process Stopped';
          });
        class LineBreakTransformer {
          constructor() {
            this.container = '';
          }
          transform(t, e) {
            this.container += t;
            const r = this.container.split('\r\n');
            (this.container = r.pop()), r.forEach((t) => e.enqueue(t));
          }
          flush(t) {
            t.enqueue(this.container);
          }
        }
        async function readLoop(t, e) {
          for (arr = []; ; ) {
            const { done: r, value: a } = await reader.read();
            switch ((a && arr.push(a), t)) {
              case 'ata':
                if (2 == arr.length) return arr;
                break;
              case 'atasps':
                if (2 == arr.length) return arr;
                break;
              case 'atds':
                if (2 == arr.length) return arr;
                break;
              case 'ati':
                if (
                  arr.includes('Not Advertising') ||
                  arr.includes('Advertising')
                )
                  return arr;
                break;
              case 'ate':
                if (arr.includes('ECHO OFF') || arr.includes('ECHO ON'))
                  return arr;
                break;
              case 'at_central':
                return 'Central Mode';
              case 'at_dis':
                if (arr.includes('dis_info_end')) return arr;
                break;
              case 'at_peripheral':
                return 'Peripheral Mode';
              case 'at_advstart':
                return 'Advertising';
              case 'at_advstop':
                return 'Advertising Stopped';
              case 'at_advdata':
              case 'at_advdatai':
              case 'at_advresp':
                if (2 == arr.length) return arr;
                break;
              case 'at_cancelconnect':
                if (arr.includes('ERROR') || arr.includes('OK')) return arr;
                break;
              case 'at_client':
                return 'Client';
              case 'at_clearnoti':
                if (2 == arr.length) return arr;
                break;
              case 'at_dual':
                return 'Dual Mode';
              case 'at_enterpasskey':
                if (2 == arr.length) return arr;
                break;
              case 'atr':
                return 'Trigger platform reset';
              case 'at_findscandata':
                if (arr.includes('SCAN COMPLETE')) return arr;
                break;
              case 'at_gapdisconnectall':
                if (arr.includes('All connections terminated.')) return arr;
                break;
              case 'at_gapiocap':
                if (3 == arr.length) return arr;
                break;
              case 'at_gappair':
                if (
                  arr.includes('PAIRING SUCCESS') ||
                  arr.includes('BONDING SUCCESS')
                )
                  return arr;
                break;
              case 'at_gapunpair':
                if (arr.includes('UNPARIED.') || 3 == arr.length) return arr;
                break;
              case 'at_gapscan':
                if (e === true)
                  arr.some(function (v) {
                    if (v.indexOf('RSSI') >= 0 && a != '') console.log(a);
                  });
                if (arr.includes('SCAN COMPLETE')) return arr;
                break;
              case 'at_getconn':
                if (arr.includes('No Connections found.') || 2 == arr.length) {
                  return arr;
                }
              case 'at_indi':
                if (2 == arr.length) return arr;
                break;
              case 'at_noti':
                if (2 == arr.length) return arr;
                break;
              case 'at_scantarget':
                if (arr.length == e) {
                  const t = outputStream.getWriter();
                  return t.write(''), t.releaseLock(), arr.slice(2);
                }
                break;
              case 'at_setdis':
                if (2 == arr.length) return arr;
                break;
              case 'at_setpasskey':
                if (2 == arr.length) return arr;
                break;
              case 'at_gattcwrite':
                if (4 == arr.length) return arr;
                break;
              case 'at_gapstatus':
                if (
                  arr.includes('Not Advertising') ||
                  arr.includes('Advertising')
                )
                  return arr;
                break;
              case 'at_gattcwrite':
                if (4 == arr.length) return arr;
                break;
              case 'at_gattcwriteb':
                if (4 == arr.length) return arr;
                break;
              case 'at_gattcwritewr':
                if (2 == arr.length) return arr;
                break;
              case 'at_gattcwritewrb':
                if (2 == arr.length) return arr;
                break;
              case 'at_gattcread':
                if (4 == arr.length) return arr;
                break;
              case 'at_gapconnect':
                if (
                  arr.includes(
                    'handle_evt_gattc_browse_completed: conn_idx=0000 status=0'
                  )
                )
                  return arr;
                break;
              case 'at_getservices':
                if (arr.includes('Value received: ')) return arr;
                break;
              case 'at_getservicesonly':
                if (
                  arr.includes(
                    'handle_evt_gattc_discover_completed: conn_idx=0000 type=SVC status=0'
                  )
                )
                  return arr;
                break;
              case 'at_getservicesdetails':
                if (
                  arr.includes(
                    'handle_evt_gattc_browse_completed: conn_idx=0000 status=0'
                  )
                )
                  return arr;
                break;

              case 'at_gapdisconnect':
                return 'Disconnected.';
              case 'at_numcompa':
                if (arr.includes('ERROR') || arr.includes('OK')) return arr;
                break;
              case 'at_seclvl':
                if (2 == arr.length) return arr;
                break;
              case 'at_server':
                return 'Server';
              case 'at_setnoti':
                if (20 == arr.length) return arr;
                break;
              case 'at_setindi':
                if (2 == arr.length) return arr;
                break;
              case 'at_spssend2':
                if (arr.includes('[Sent]')) return arr;

              case 'at_spssend':
                if (arr.includes('[Sent]')) return arr;

                break;
              case 'at_targetconn':
                if (2 == arr.length) return arr;
              case 'help':
                if (arr.includes('[A] = Usable in All Roles')) return arr;
                break;
              default:
                return 'Nothing!';
            }
          }
        }
      },
      {},
    ],
    'script.js': [
      function (require, module, exports) {
        'use strict';

        var my_dongle = _interopRequireWildcard(require('bleuio'));

        function _getRequireWildcardCache(nodeInterop) {
          if (typeof WeakMap !== 'function') return null;
          var cacheBabelInterop = new WeakMap();
          var cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache = function (nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }

        function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }
          if (
            obj === null ||
            (typeof obj !== 'object' && typeof obj !== 'function')
          ) {
            return { default: obj };
          }
          var cache = _getRequireWildcardCache(nodeInterop);
          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }
          var newObj = {};
          var hasPropertyDescriptor =
            Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj) {
            if (
              key !== 'default' &&
              Object.prototype.hasOwnProperty.call(obj, key)
            ) {
              var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
          newObj.default = obj;
          if (cache) {
            cache.set(obj, newObj);
          }
          return newObj;
        }

        function decimalToHex2ByteLittleEndian(decimal) {
          if (decimal.includes('.')) decimal = parseFloat(decimal) * 100;
          else decimal = parseInt(decimal) * 100;

          if (decimal >= 0 && decimal <= 4294967295) {
            // Ensure decimal is within 4-byte range
            var hex = decimal.toString(16).padStart(4, '0').toUpperCase();
            var hexBytes = [
              hex.substr(0, 2),
              hex.substr(2, 2),
              hex.substr(4, 2),
              hex.substr(6, 2),
            ];
            return hexBytes.reverse().join('');
          } else {
            console.error(
              'Decimal number must be between 0 and 4294967295 (inclusive).'
            );
            return null;
          }
        }

        function hex2LittleEndian(decimal) {
          var hex = decimal.padStart(4, '0').toUpperCase();
          var hexBytes = [
            hex.substr(0, 2),
            hex.substr(2, 2),
            hex.substr(4, 2),
            hex.substr(6, 2),
          ];
          return hexBytes.reverse().join('');
        }

        function decimalToHex2ByteBigEndian(decimal) {
          if (decimal.includes('.')) decimal = parseFloat(decimal) * 10;
          else decimal = parseInt(decimal) * 10;

          if (decimal >= 0 && decimal <= 4294967295) {
            // Ensure decimal is within 4-byte range
            var hex = decimal.toString(16);
            return '0'.repeat(4 - hex.length) + hex.toUpperCase();
          } else {
            console.error(
              'Decimal number must be between 0 and 4294967295 (inclusive).'
            );
            return null;
          }
        }

        function decimalToHex(decimal, size) {
          decimal = parseInt(decimal);
          var theSize = size * 2; // Ensure decimal is within 4-byte range

          var hex = decimal.toString(16);
          return '0'.repeat(theSize - hex.length) + hex.toUpperCase();
        }

        document
          .getElementById('connect')
          .addEventListener('click', function () {
            my_dongle.at_connect().then(function (x) {
              document.getElementById('terminal').innerHTML = x + '<br/>';
              document.getElementById('configSection').style.display = 'block';
              document.getElementById('connect').style.display = 'none';
            });
          });
        document
          .getElementById('resetDongle')
          .addEventListener('click', function () {
            my_dongle.atr().then(function () {
              location.reload();
            });
          });
        var macAddress = '';
        var isConnected = false;
        document
          .getElementById('connectToBoardID')
          .addEventListener('click', function () {
            document.getElementById('boardIdConnectionLoader').style.display =
              'block';
            document.getElementById('loader').style.display = 'block';
            var theID = document.getElementById('BOARDIDTOCONNECT').value;
            if (theID != '') {
              my_dongle.at_cancelconnect().then(function (x) {
                console.log(x);
                document.getElementById('terminal').innerHTML += x + '<br/>';
                my_dongle.at_gapdisconnectall();
                my_dongle.at_dual().then(function (y) {
                  document.getElementById('terminal').innerHTML += y + '<br/>';
                  console.log(theID);
                  my_dongle
                    .at_findscandata('5B070614' + theID, 5)
                    .then(function (z) {
                      console.log(z);
                      var lastVal = z[z.length - 2];

                      if (lastVal.includes('[')) {
                        macAddress = lastVal.substring(1, 18);
                        console.log('macaddress:', macAddress);
                        document.getElementById('theMacAddress').innerHTML =
                          'Mac address : ' + macAddress;
                        my_dongle
                          .at_gapconnect('[0]' + macAddress)
                          .then(function (res) {
                            if (res[2] == 'CONNECTED.') {
                              document.getElementById('terminal').innerHTML +=
                                res + '<br/>';
                              my_dongle
                                .at_spssend2('P=477432     ')
                                .then(function (res2) {
                                  console.log(res2);
                                  document.getElementById(
                                    'terminal'
                                  ).innerHTML += res2 + '<br/>';
                                  isConnected = true;
                                  document.getElementById(
                                    'configTable'
                                  ).style.display = 'block';
                                  document.getElementById(
                                    'loader'
                                  ).style.display = 'none';
                                  document.getElementById(
                                    'boardIdConnectionLoader'
                                  ).style.display = 'none';
                                });
                            } else {
                              console.log('Couldnot connect. Please try again');
                              document.getElementById('terminal').innerHTML +=
                                'Couldnot connect. Please try again<br/>';
                            }
                          });
                      } else {
                        document.getElementById('boardIdError').innerHTML =
                          'CANNOT FIND TO MATRIX. Please make sure the Matrix is advertising or the ID is correct then try again.';
                        console.log(
                          'CANNOT FIND TO MATRIX. Please make sure the Matrix is advertising or the ID is correct then try again.'
                        );
                      } //console.log(lastVal);
                    });
                });
              });
            } else {
              document.getElementById('boardIdError').innerHTML =
                'Write a board ID';
            }
          });
        const getTheType = (title) => {
          let k = configObject.filter((x) => x.name == title);
          return k[0].type;
        };

        var readBtn = function readBtn(msgID, btnName) {
          document.getElementById('loader').style.display = 'block';
          my_dongle
            .at_spssend('AREV=' + msgID)
            .then(function (x) {
              setTimeout(function () {
                my_dongle
                  .at_spssend('AREV=' + msgID)
                  .then(function (y) {
                    setTimeout(function () {
                      my_dongle
                        .at_spssend('AREV=' + msgID)
                        .then(function (z) {
                          setTimeout(function () {
                            console.log(z);
                            document.getElementById('terminal').innerHTML +=
                              z + '<br/>';
                            let dataFromMatrix = '';
                            if (z[z.length - 1] === '[Sent]') {
                              dataFromMatrix = z[z.length - 3];
                            } else {
                              dataFromMatrix = z[z.length - 1];
                            }
                            let arr = dataFromMatrix.split('=');

                            let theDt = arr[arr.length - 2];
                            if (btnName === 'FIRMWARE_REV') {
                              theDt =
                                parseInt(theDt.substr(0, 2), 16) +
                                '.' +
                                parseInt(theDt.substr(2, 3), 16);
                            }
                            if (
                              btnName === 'K_VALUE' ||
                              btnName === 'ACT_FLOW' ||
                              btnName === 'PRESSURE' ||
                              btnName === 'REQ_FLOW' ||
                              btnName === 'TOL_FLOW' ||
                              btnName === 'SIGNAL'
                            ) {
                              theDt =
                                parseInt(
                                  theDt.substr(2) + theDt.substr(0, 2),
                                  16
                                ) / 100;
                              theDt +=
                                btnName === 'ACT_FLOW' ||
                                btnName === 'REQ_FLOW' ||
                                btnName === 'TOL_FLOW'
                                  ? ' l/s'
                                  : btnName === 'PRESSURE'
                                  ? ' Pa'
                                  : '';
                            }
                            if (
                              btnName === 'DAC_OUT_MIN_FLOW' ||
                              btnName === 'DAC_OUT_MAX_FLOW' ||
                              btnName === 'MIN_FLOW' ||
                              btnName === 'MAX_FLOW'
                            ) {
                              theDt =
                                parseInt(
                                  theDt.substr(2, 3) + theDt.substr(0, 2),
                                  16
                                ) /
                                  100 +
                                ' l/s';
                            }

                            if (
                              btnName === 'RESET_COUNTER' ||
                              btnName === 'TOL_FLOW' ||
                              btnName === 'MODBUS_MODE' ||
                              btnName === 'MODBUS_DATA_BIT' ||
                              btnName === 'MODBUS_PARITY' ||
                              btnName === 'MODBUS_STOP_BIT'
                            ) {
                              theDt = parseInt(theDt, 16);
                            }
                            if (btnName === 'K_FACTOR') {
                              theDt = parseInt(theDt, 16) / 10;
                            }
                            if (btnName === 'HAS_SENSOR') {
                              theDt = theDt == 'FF' ? 'False' : 'True';
                            }
                            if (btnName === 'FACTORY_RESET') {
                              theDt = theDt == 'FF' ? 'Disabled' : 'Enabled';
                            }

                            if (btnName === 'MASTER_SLAVE_ROLE') {
                              theDt == 'FF'
                                ? 'Undefined'
                                : theDt == '01'
                                ? 'Master'
                                : 'Slave';
                            }
                            if (btnName === 'MODBUS_PARITY') {
                              theDt == '00'
                                ? 'None'
                                : theDt == '01'
                                ? 'Odd'
                                : theDt == '02'
                                ? 'Even'
                                : 'Default (None)';
                            }
                            if (btnName === 'CONTROL_TYPE') {
                              theDt == 'FF'
                                ? 'Undefined'
                                : theDt == '01'
                                ? 'VARIABLE_FLOW (VAV)'
                                : 'VARIABLE_FLOW (VAV)';
                            }
                            if (btnName === 'ACTUAL_POS') {
                              function bigEndianToLittleEndian(value) {
                                return (
                                  ((value & 0xff) << 24) |
                                  ((value & 0xff00) << 8) |
                                  ((value >> 8) & 0xff00) |
                                  ((value >> 24) & 0xff)
                                );
                              }
                              theDt = bigEndianToLittleEndian('0x' + theDt);
                            }

                            document.getElementById(
                              btnName + '_READ_DATA'
                            ).innerHTML = theDt;

                            document.getElementById('loader').style.display =
                              'none';
                          }, 500);
                        })
                        .catch(function (err) {
                          console.log(err);
                        });
                    }, 500);
                  })
                  .catch(function (err) {
                    console.log(err);
                  });
              }, 500);
            })
            .catch(function (err) {
              console.log(err);
            });
        };

        var confBtn = function confBtn(writeID, readID, btnName) {
          var theVal = document.getElementById(btnName + '_VALUE').value;

          if (theVal) {
            my_dongle
              .at_spssend('CFGE=' + writeID + '=' + theVal)
              .then(function (res) {
                document.getElementById('terminal').innerHTML += res + '<br/>';
                readBtn(readID, btnName);
                document.getElementById('liveToast').classList.add('show');
                setTimeout(function () {
                  document.getElementById('liveToast').classList.remove('show');
                }, 4000);
              });
          }
        };

        var confBtnLittleEndian = function confBtnLittleEndian(
          writeID,
          readID,
          btnName
        ) {
          var theVal = document.getElementById(btnName + '_VALUE').value;

          if (theVal) {
            theVal = hex2LittleEndian(theVal);
            my_dongle
              .at_spssend('CFGE=' + writeID + '=' + theVal)
              .then(function (res) {
                document.getElementById('terminal').innerHTML += res + '<br/>';
                readBtn(readID, btnName);
                document.getElementById('liveToast').classList.add('show');
                setTimeout(function () {
                  document.getElementById('liveToast').classList.remove('show');
                }, 4000);
              });
          }
        };

        var confBtnDec2 = function confBtnDec2(writeID, readID, btnName) {
          var theVal = document.getElementById(btnName + '_VALUE').value;

          if (theVal) {
            theVal = decimalToHex2ByteLittleEndian(theVal);
            console.log(theVal);
            my_dongle
              .at_spssend('CFGE=' + writeID + '=' + theVal)
              .then(function (res) {
                document.getElementById('terminal').innerHTML += res + '<br/>';
                readBtn(readID, btnName);
                document.getElementById('liveToast').classList.add('show');
                setTimeout(function () {
                  document.getElementById('liveToast').classList.remove('show');
                }, 4000);
              });
          }
        };
        var confBtnDecNoModify = function confBtnDecNoModify(
          writeID,
          readID,
          btnName
        ) {
          var theVal = document.getElementById(btnName + '_VALUE').value;

          if (theVal) {
            theVal = theVal / 100;
            theVal = decimalToHex2ByteLittleEndian(theVal);
            console.log(theVal);
            my_dongle
              .at_spssend('CFGE=' + writeID + '=' + theVal)
              .then(function (res) {
                document.getElementById('terminal').innerHTML += res + '<br/>';
                readBtn(readID, btnName);
                document.getElementById('liveToast').classList.add('show');
                setTimeout(function () {
                  document.getElementById('liveToast').classList.remove('show');
                }, 4000);
              });
          }
        };

        var confBtnDec2BigEndian = function confBtnDec2BigEndian(
          writeID,
          readID,
          btnName
        ) {
          var theVal = document.getElementById(btnName + '_VALUE').value;

          if (theVal) {
            theVal = decimalToHex2ByteBigEndian(theVal);
            console.log(theVal);
            my_dongle
              .at_spssend('CFGE=' + writeID + '=' + theVal)
              .then(function (res) {
                document.getElementById('terminal').innerHTML += res + '<br/>';
                readBtn(readID, btnName);
                document.getElementById('liveToast').classList.add('show');
                setTimeout(function () {
                  document.getElementById('liveToast').classList.remove('show');
                }, 4000);
              });
          }
        };

        var confBtnDec2Hex = function confBtnDec2Hex(
          writeID,
          readID,
          btnName,
          size
        ) {
          var theVal = document.getElementById(btnName + '_VALUE').value;

          if (theVal) {
            theVal = decimalToHex(theVal, size);
            console.log(theVal);
            my_dongle
              .at_spssend('CFGE=' + writeID + '=' + theVal)
              .then(function (res) {
                document.getElementById('terminal').innerHTML += res + '<br/>';
                readBtn(readID, btnName);
                document.getElementById('liveToast').classList.add('show');
                setTimeout(function () {
                  document.getElementById('liveToast').classList.remove('show');
                }, 4000);
              });
          }
        }; //board id

        document
          .getElementById('BOARDID_READ_BTN')
          .addEventListener('click', function () {
            readBtn('0 ', 'BOARDID');
          });
        document
          .getElementById('BOARDID_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('0', '0 ', 'BOARDID');
          }); //PRODUCTID id

        document
          .getElementById('PRODUCTID_READ_BTN')
          .addEventListener('click', function () {
            readBtn('1 ', 'PRODUCTID');
          });
        document
          .getElementById('PRODUCTID_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('1', '1 ', 'PRODUCTID');
          }); //SERIAL NUMBER

        document
          .getElementById('SERIAL_NUMBER_READ_BTN')
          .addEventListener('click', function () {
            readBtn('2 ', 'SERIAL_NUMBER');
          });
        document
          .getElementById('SERIAL_NUMBER_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('2', '2 ', 'SERIAL_NUMBER');
          }); //FIRMWARE_REV

        document
          .getElementById('FIRMWARE_REV_READ_BTN')
          .addEventListener('click', function () {
            readBtn('3 ', 'FIRMWARE_REV');
          });
        document
          .getElementById('FIRMWARE_REV_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2('3', '3 ', 'FIRMWARE_REV');
          }); //ARTICLE_NUMBER

        document
          .getElementById('ARTICLE_NUMBER_READ_BTN')
          .addEventListener('click', function () {
            readBtn('4 ', 'ARTICLE_NUMBER');
          });
        document
          .getElementById('ARTICLE_NUMBER_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('4', '4 ', 'ARTICLE_NUMBER');
          }); //K_FACTOR

        document
          .getElementById('K_FACTOR_READ_BTN')
          .addEventListener('click', function () {
            readBtn('5 ', 'K_FACTOR');
          });
        document
          .getElementById('K_FACTOR_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2BigEndian('5', '5 ', 'K_FACTOR');
          }); //FACTORY_RESET

        document
          .getElementById('FACTORY_RESET_READ_BTN')
          .addEventListener('click', function () {
            readBtn('6 ', 'FACTORY_RESET');
          });
        document
          .getElementById('FACTORY_RESET_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('6', '6 ', 'FACTORY_RESET');
          });
        //MODBUS_ADDRESS

        document
          .getElementById('MODBUS_ADDRESS_READ_BTN')
          .addEventListener('click', function () {
            readBtn('62 ', 'MODBUS_ADDRESS');
          });
        document
          .getElementById('MODBUS_ADDRESS_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('62', '62 ', 'MODBUS_ADDRESS');
          });
        //ACTUAL_POS

        document
          .getElementById('ACTUAL_POS_READ_BTN')
          .addEventListener('click', function () {
            readBtn('7 ', 'ACTUAL_POS');
          });
        document
          .getElementById('ACTUAL_POS_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2Hex('7', '7 ', 'ACTUAL_POS', 4);
          }); //RESET_COUNTER

        document
          .getElementById('RESET_COUNTER_READ_BTN')
          .addEventListener('click', function () {
            readBtn('8 ', 'RESET_COUNTER');
          });
        document
          .getElementById('RESET_COUNTER_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2('8', '8 ', 'RESET_COUNTER');
          }); //FLOOR_TH

        document
          .getElementById('FLOOR_TH_READ_BTN')
          .addEventListener('click', function () {
            readBtn('9 ', 'FLOOR_TH');
          });
        document
          .getElementById('FLOOR_TH_CONF_BTN')
          .addEventListener('click', function () {
            if (
              document.getElementById('FLOOR_TH_VALUE').value >= 0 &&
              document.getElementById('FLOOR_TH_VALUE').value <= 100
            ) {
              confBtnDec2Hex('9', '9 ', 'FLOOR_TH', 1);
            } else {
              document.getElementById('updateTitle').innerHTML =
                'Update failed';
              document.getElementById('updateText').innerHTML =
                'Value should be between 0 to 100';
            }
          }); //ROOF_TH

        document
          .getElementById('ROOF_TH_READ_BTN')
          .addEventListener('click', function () {
            console.log('here');
            readBtn('10 ', 'ROOF_TH');
          });
        document
          .getElementById('ROOF_TH_CONF_BTN')
          .addEventListener('click', function () {
            if (
              document.getElementById('ROOF_TH_VALUE').value >= 0 &&
              document.getElementById('ROOF_TH_VALUE').value <= 100
            ) {
              confBtnDec2Hex('10', '10 ', 'ROOF_TH', 1);
            } else {
              document.getElementById('updateTitle').innerHTML =
                'Update failed';
              document.getElementById('updateText').innerHTML =
                'Value should be between 0 to 100';
            }
          }); //MAX_STEP_POS

        document
          .getElementById('MAX_STEP_POS_READ_BTN')
          .addEventListener('click', function () {
            readBtn('11 ', 'MAX_STEP_POS');
          });
        document
          .getElementById('MAX_STEP_POS_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2('11', '11 ', 'MAX_STEP_POS');
          }); //V_MAX

        document
          .getElementById('V_MAX_READ_BTN')
          .addEventListener('click', function () {
            readBtn('12 ', 'V_MAX');
          });
        document
          .getElementById('V_MAX_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDecNoModify('12', '12 ', 'V_MAX');
          }); //I_RUN

        document
          .getElementById('I_RUN_READ_BTN')
          .addEventListener('click', function () {
            readBtn('13 ', 'I_RUN');
          });
        document
          .getElementById('I_RUN_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2Hex('13', '13 ', 'I_RUN', 1);
          }); //TIME_MIN_TO_MAX

        document
          .getElementById('TIME_MIN_TO_MAX_READ_BTN')
          .addEventListener('click', function () {
            readBtn('14 ', 'TIME_MIN_TO_MAX');
          });
        document
          .getElementById('TIME_MIN_TO_MAX_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2Hex('14', '14 ', 'TIME_MIN_TO_MAX', 1);
          }); //TIME_MAX_TO_MIN

        document
          .getElementById('TIME_MAX_TO_MIN_READ_BTN')
          .addEventListener('click', function () {
            readBtn('15 ', 'TIME_MAX_TO_MIN');
          });
        document
          .getElementById('TIME_MAX_TO_MIN_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2Hex('15', '15 ', 'TIME_MAX_TO_MIN', 1);
          }); //FACTORY_SET_DATE

        document
          .getElementById('FACTORY_SET_DATE_READ_BTN')
          .addEventListener('click', function () {
            readBtn('16 ', 'FACTORY_SET_DATE');
          });
        document
          .getElementById('FACTORY_SET_DATE_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('16', '16 ', 'FACTORY_SET_DATE');
          }); //LAST_CONFIG

        document
          .getElementById('LAST_CONFIG_READ_BTN')
          .addEventListener('click', function () {
            readBtn('17 ', 'LAST_CONFIG');
          });
        document
          .getElementById('LAST_CONFIG_CONF_BTN')
          .addEventListener('click', function () {
            confBtnLittleEndian('17', '17 ', 'LAST_CONFIG');
          }); //PROJECT_NUMBER

        document
          .getElementById('PROJECT_NUMBER_READ_BTN')
          .addEventListener('click', function () {
            readBtn('18 ', 'PROJECT_NUMBER');
          });
        document
          .getElementById('PROJECT_NUMBER_CONF_BTN')
          .addEventListener('click', function () {
            confBtnLittleEndian('18', '18 ', 'PROJECT_NUMBER');
          }); //LAST_CALIBRATION

        document
          .getElementById('LAST_CALIBRATION_READ_BTN')
          .addEventListener('click', function () {
            readBtn('19 ', 'LAST_CALIBRATION');
          });
        document
          .getElementById('LAST_CALIBRATION_CONF_BTN')
          .addEventListener('click', function () {
            confBtnLittleEndian('19', '19 ', 'LAST_CALIBRATION');
          }); //NUM_MATRIX_PLATES

        document
          .getElementById('NUM_MATRIX_PLATES_READ_BTN')
          .addEventListener('click', function () {
            readBtn('20 ', 'NUM_MATRIX_PLATES');
          });
        document
          .getElementById('NUM_MATRIX_PLATES_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2('20', '20 ', 'NUM_MATRIX_PLATES');
          }); //ERROR_MESSAGE

        document
          .getElementById('ERROR_MESSAGE_READ_BTN')
          .addEventListener('click', function () {
            readBtn('21 ', 'ERROR_MESSAGE');
          });
        document
          .getElementById('ERROR_MESSAGE_CONF_BTN')
          .addEventListener('click', function () {
            confBtnLittleEndian('21', '21 ', 'ERROR_MESSAGE');
          }); //MASTER_SLAVE_ROLE

        document
          .getElementById('MASTER_SLAVE_ROLE_READ_BTN')
          .addEventListener('click', function () {
            readBtn('22 ', 'MASTER_SLAVE_ROLE');
          });
        document
          .getElementById('MASTER_SLAVE_ROLE_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('22', '22 ', 'MASTER_SLAVE_ROLE');
          }); //INTERNAL_EXTERNAL

        document
          .getElementById('INTERNAL_EXTERNAL_READ_BTN')
          .addEventListener('click', function () {
            readBtn('23 ', 'INTERNAL_EXTERNAL');
          });
        document
          .getElementById('INTERNAL_EXTERNAL_CONF_BTN')
          .addEventListener('click', function () {
            confBtnLittleEndian('23', '23 ', 'INTERNAL_EXTERNAL');
          }); //ACT_FLOW

        document
          .getElementById('ACT_FLOW_READ_BTN')
          .addEventListener('click', function () {
            readBtn('24 ', 'ACT_FLOW');
          });
        document
          .getElementById('ACT_FLOW_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2('24', '24 ', 'ACT_FLOW');
          }); //PRESSURE

        document
          .getElementById('PRESSURE_READ_BTN')
          .addEventListener('click', function () {
            readBtn('25 ', 'PRESSURE');
          });
        document
          .getElementById('PRESSURE_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2('25', '25 ', 'PRESSURE');
          }); //SLAVE_MAC_ADDR1

        document
          .getElementById('SLAVE_MAC_ADDR1_READ_BTN')
          .addEventListener('click', function () {
            readBtn('26 ', 'SLAVE_MAC_ADDR1');
          });
        document
          .getElementById('SLAVE_MAC_ADDR1_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('26', '26 ', 'SLAVE_MAC_ADDR1');
          }); //SLAVE_MAC_ADDR2

        document
          .getElementById('SLAVE_MAC_ADDR2_READ_BTN')
          .addEventListener('click', function () {
            readBtn('27 ', 'SLAVE_MAC_ADDR2');
          });
        document
          .getElementById('SLAVE_MAC_ADDR2_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('27', '27 ', 'SLAVE_MAC_ADDR2');
          }); //SLAVE_MAC_ADDR3

        document
          .getElementById('SLAVE_MAC_ADDR3_READ_BTN')
          .addEventListener('click', function () {
            readBtn('28 ', 'SLAVE_MAC_ADDR3');
          });
        document
          .getElementById('SLAVE_MAC_ADDR3_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('28', '28 ', 'SLAVE_MAC_ADDR3');
          }); //SLAVE_MAC_ADDR4

        document
          .getElementById('SLAVE_MAC_ADDR4_READ_BTN')
          .addEventListener('click', function () {
            readBtn('29 ', 'SLAVE_MAC_ADDR4');
          });
        document
          .getElementById('SLAVE_MAC_ADDR4_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('29', '29 ', 'SLAVE_MAC_ADDR4');
          }); //SLAVE_MAC_ADDR5

        document
          .getElementById('SLAVE_MAC_ADDR5_READ_BTN')
          .addEventListener('click', function () {
            readBtn('30 ', 'SLAVE_MAC_ADDR5');
          });
        document
          .getElementById('SLAVE_MAC_ADDR5_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('30', '30 ', 'SLAVE_MAC_ADDR5');
          }); //SLAVE_MAC_ADDR6

        document
          .getElementById('SLAVE_MAC_ADDR6_READ_BTN')
          .addEventListener('click', function () {
            readBtn('31 ', 'SLAVE_MAC_ADDR6');
          });
        document
          .getElementById('SLAVE_MAC_ADDR6_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('31', '31 ', 'SLAVE_MAC_ADDR6');
          }); //SLAVE_MAC_ADDR7

        document
          .getElementById('SLAVE_MAC_ADDR7_READ_BTN')
          .addEventListener('click', function () {
            readBtn('32 ', 'SLAVE_MAC_ADDR7');
          });
        document
          .getElementById('SLAVE_MAC_ADDR7_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('32', '32 ', 'SLAVE_MAC_ADDR7');
          }); //MASTER_NUM_SLAVE_CONN

        document
          .getElementById('MASTER_NUM_SLAVE_CONN_READ_BTN')
          .addEventListener('click', function () {
            readBtn('33 ', 'MASTER_NUM_SLAVE_CONN');
          });
        document
          .getElementById('MASTER_NUM_SLAVE_CONN_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2Hex('33', '33 ', 'MASTER_NUM_SLAVE_CONN', 1);
          });
        //MODBUS_MODE

        document
          .getElementById('MODBUS_MODE_READ_BTN')
          .addEventListener('click', function () {
            readBtn('63 ', 'MODBUS_MODE');
          });
        document
          .getElementById('MODBUS_MODE_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2Hex('63', '63 ', 'MODBUS_MODE', 1);
          });
        //MODBUS_BAUD

        document
          .getElementById('MODBUS_BAUD_READ_BTN')
          .addEventListener('click', function () {
            readBtn('64 ', 'MODBUS_BAUD');
          });
        document
          .getElementById('MODBUS_BAUD_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2('64', '64 ', 'MODBUS_BAUD');
          });
        //MODBUS_DATA_BIT

        document
          .getElementById('MODBUS_DATA_BIT_READ_BTN')
          .addEventListener('click', function () {
            readBtn('65 ', 'MODBUS_DATA_BIT');
          });
        document
          .getElementById('MODBUS_DATA_BIT_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2Hex('65', '65 ', 'MODBUS_DATA_BIT', 1);
          });
        //MODBUS_PARITY

        document
          .getElementById('MODBUS_PARITY_READ_BTN')
          .addEventListener('click', function () {
            readBtn('66 ', 'MODBUS_PARITY');
          });
        document
          .getElementById('MODBUS_PARITY_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2Hex('66', '66 ', 'MODBUS_PARITY', 1);
          });
        //MODBUS_STOP_BIT

        document
          .getElementById('MODBUS_STOP_BIT_READ_BTN')
          .addEventListener('click', function () {
            readBtn('67 ', 'MODBUS_STOP_BIT');
          });
        document
          .getElementById('MODBUS_STOP_BIT_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2Hex('67', '67 ', 'MODBUS_STOP_BIT', 1);
          });
        //SLAVE_BOARDID_1

        document
          .getElementById('SLAVE_BOARDID_1_READ_BTN')
          .addEventListener('click', function () {
            readBtn('34 ', 'SLAVE_BOARDID_1');
          });
        document
          .getElementById('SLAVE_BOARDID_1_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('34', '34 ', 'SLAVE_BOARDID_1');
          }); //SLAVE_BOARDID_2

        document
          .getElementById('SLAVE_BOARDID_2_READ_BTN')
          .addEventListener('click', function () {
            readBtn('35 ', 'SLAVE_BOARDID_2');
          });
        document
          .getElementById('SLAVE_BOARDID_2_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('35', '35 ', 'SLAVE_BOARDID_2');
          }); //SLAVE_BOARDID_3

        document
          .getElementById('SLAVE_BOARDID_3_READ_BTN')
          .addEventListener('click', function () {
            readBtn('36 ', 'SLAVE_BOARDID_3');
          });
        document
          .getElementById('SLAVE_BOARDID_3_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('36', '36 ', 'SLAVE_BOARDID_3');
          }); //SLAVE_BOARDID_4

        document
          .getElementById('SLAVE_BOARDID_4_READ_BTN')
          .addEventListener('click', function () {
            readBtn('37 ', 'SLAVE_BOARDID_4');
          });
        document
          .getElementById('SLAVE_BOARDID_4_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('37', '37 ', 'SLAVE_BOARDID_4');
          }); //SLAVE_BOARDID_5

        document
          .getElementById('SLAVE_BOARDID_5_READ_BTN')
          .addEventListener('click', function () {
            readBtn('38 ', 'SLAVE_BOARDID_5');
          });
        document
          .getElementById('SLAVE_BOARDID_5_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('38', '38 ', 'SLAVE_BOARDID_5');
          }); //SLAVE_BOARDID_6

        document
          .getElementById('SLAVE_BOARDID_6_READ_BTN')
          .addEventListener('click', function () {
            readBtn('39 ', 'SLAVE_BOARDID_6');
          });
        document
          .getElementById('SLAVE_BOARDID_6_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('39', '39 ', 'SLAVE_BOARDID_6');
          }); //HAS_SENSOR

        document
          .getElementById('HAS_SENSOR_READ_BTN')
          .addEventListener('click', function () {
            readBtn('50 ', 'HAS_SENSOR');
          });
        document
          .getElementById('HAS_SENSOR_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('50', '50 ', 'HAS_SENSOR');
          }); //HAS_MODEM

        document
          .getElementById('HAS_MODEM_READ_BTN')
          .addEventListener('click', function () {
            readBtn('51 ', 'HAS_MODEM');
          });
        document
          .getElementById('HAS_MODEM_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('51', '51 ', 'HAS_MODEM');
          }); //MIN_FLOW

        document
          .getElementById('MIN_FLOW_READ_BTN')
          .addEventListener('click', function () {
            readBtn('52 ', 'MIN_FLOW');
          });
        document
          .getElementById('MIN_FLOW_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2('52', '52 ', 'MIN_FLOW');
          }); //REQ_FLOW

        document
          .getElementById('REQ_FLOW_READ_BTN')
          .addEventListener('click', function () {
            readBtn('53 ', 'REQ_FLOW');
          });
        document
          .getElementById('REQ_FLOW_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2('53', '53 ', 'REQ_FLOW');
          }); //TOL_FLOW

        document
          .getElementById('TOL_FLOW_READ_BTN')
          .addEventListener('click', function () {
            readBtn('54 ', 'TOL_FLOW');
          });
        document
          .getElementById('TOL_FLOW_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2('54', '54 ', 'TOL_FLOW');
          }); //SIGNAL

        document
          .getElementById('SIGNAL_READ_BTN')
          .addEventListener('click', function () {
            readBtn('55 ', 'SIGNAL');
          });
        document
          .getElementById('SIGNAL_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2('55', '55 ', 'SIGNAL');
          }); //O_PRESSURE

        document
          .getElementById('O_PRESSURE_READ_BTN')
          .addEventListener('click', function () {
            readBtn('56 ', 'O_PRESSURE');
          });
        document
          .getElementById('O_PRESSURE_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2('56', '56 ', 'O_PRESSURE');
          }); //K_VALUE

        document
          .getElementById('K_VALUE_READ_BTN')
          .addEventListener('click', function () {
            readBtn('57 ', 'K_VALUE');
          });
        document
          .getElementById('K_VALUE_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2('57', '57 ', 'K_VALUE');
          }); //CONTROL_TYPE

        document
          .getElementById('CONTROL_TYPE_READ_BTN')
          .addEventListener('click', function () {
            readBtn('58 ', 'CONTROL_TYPE');
          });
        document
          .getElementById('CONTROL_TYPE_CONF_BTN')
          .addEventListener('click', function () {
            confBtn('58', '58 ', 'CONTROL_TYPE');
          }); //MAX_FLOW

        document
          .getElementById('MAX_FLOW_READ_BTN')
          .addEventListener('click', function () {
            readBtn('59 ', 'MAX_FLOW');
          });
        document
          .getElementById('MAX_FLOW_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2('59', '59 ', 'MAX_FLOW');
          }); //DAC_OUT_MIN_FLOW

        document
          .getElementById('DAC_OUT_MIN_FLOW_READ_BTN')
          .addEventListener('click', function () {
            readBtn('60 ', 'DAC_OUT_MIN_FLOW');
          });
        document
          .getElementById('DAC_OUT_MIN_FLOW_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2('60', '60 ', 'DAC_OUT_MIN_FLOW');
          }); //DAC_OUT_MAX_FLOW

        document
          .getElementById('DAC_OUT_MAX_FLOW_READ_BTN')
          .addEventListener('click', function () {
            readBtn('61 ', 'DAC_OUT_MAX_FLOW');
          });
        document
          .getElementById('DAC_OUT_MAX_FLOW_CONF_BTN')
          .addEventListener('click', function () {
            confBtnDec2('61', '61 ', 'DAC_OUT_MAX_FLOW');
          });
        const readBtnMotor = (msg, btn) => {
          my_dongle.at_spssend(msg).then(function () {
            setTimeout(() => {
              my_dongle.at_spssend(msg).then(function () {
                setTimeout(() => {
                  my_dongle.at_spssend(msg).then(function (z) {
                    document.getElementById('terminal').innerHTML +=
                      z + '<br/>';

                    let dataFromMatrix = '';
                    setTimeout(() => {
                      console.log(z);
                      if (z[z.length - 1] === '[Sent]') {
                        dataFromMatrix = z[z.length - 3];
                      } else {
                        dataFromMatrix = z[z.length - 1];
                      }
                      let theVal;
                      if (btn == 'READ_MOTOR_DATA') {
                        dataFromMatrix = dataFromMatrix.split('=').slice(1, 5);
                        theVal = (
                          parseInt(dataFromMatrix[1].split('_')[0]) / 716800
                        ).toFixed(1);
                        theVal *= 100;
                        dataFromMatrix = dataFromMatrix.join('=');
                        dataFromMatrix =
                          dataFromMatrix + ' (' + theVal + '  % closed )';
                      }
                      if (btn == 'READ_ADC_DATA') {
                        let op = '';
                        let val1 = '';
                        let val2 = '';
                        let val3 = '';
                        let val4 = '';
                        let theData = dataFromMatrix.split('=');
                        console.log(theData);
                        if (theData.length == 3) {
                          val1 = parseInt(theData[1]);
                          val2 = parseInt(theData[2]);
                          val3 = ((val1 * 1000) / 64600 / 100).toFixed(2);
                          val4 = ((val2 * 1000) / 64600 / 100).toFixed(2);
                          op =
                            dataFromMatrix +
                            ' ' +
                            '(Current: ' +
                            val1 +
                            ' (' +
                            val3 +
                            'V)    Avg: ' +
                            val2 +
                            ' (' +
                            val4 +
                            'V))';
                        } else {
                          val1 = parseInt(theData[1]);
                          val3 = ((val1 * 1000) / 64600 / 100).toFixed(2);
                          op =
                            dataFromMatrix +
                            ' ' +
                            '(Current: ' +
                            val1 +
                            ' (' +
                            val3 +
                            'V))';
                        }
                        dataFromMatrix = op;
                      }
                      document.getElementById(btn).innerHTML = dataFromMatrix;
                    }, 500);

                    document.getElementById('liveToast').classList.add('show');
                    setTimeout(function () {
                      if (
                        btn == 'FIRMWARE_RESET_DATA' ||
                        btn == 'FIRMWARE_UPDATE_DATA'
                      ) {
                        my_dongle.atr().then(function () {
                          location.reload();
                        });
                      }
                      document
                        .getElementById('liveToast')
                        .classList.remove('show');
                    }, 4000);
                  });
                }, 500);
              });
            }, 500);
          });
        };
        //Close Motor
        document
          .getElementById('CLOSE_MOTOR_CONF_BTN')
          .addEventListener('click', function () {
            readBtnMotor('ACM    ', 'CLOSE_MOTOR_DATA');
          });
        //open Motor
        document
          .getElementById('OPEN_MOTOR_CONF_BTN')
          .addEventListener('click', function () {
            readBtnMotor('AOM    ', 'OPEN_MOTOR_DATA');
          });
        //stop Motor
        document
          .getElementById('STOP_MOTOR_CONF_BTN')
          .addEventListener('click', function () {
            readBtnMotor('ASM    ', 'STOP_MOTOR_DATA');
          });
        //firmware restart
        document
          .getElementById('FIRMWARE_RESET_CONF_BTN')
          .addEventListener('click', function () {
            readBtnMotor('ARESET    ', 'FIRMWARE_RESET_DATA');
          });
        //firmware update
        document
          .getElementById('FIRMWARE_UPDATE_CONF_BTN')
          .addEventListener('click', function () {
            readBtnMotor('AFU    ', 'FIRMWARE_UPDATE_DATA');
          });

        //Read Motor values
        document
          .getElementById('READ_MOTOR_CONF_BTN')
          .addEventListener('click', function () {
            readBtnMotor('ARM    ', 'READ_MOTOR_DATA');
          });
        //check switch
        document
          .getElementById('CHECK_SWITCH_CONF_BTN')
          .addEventListener('click', function () {
            readBtnMotor('ACS    ', 'CHECK_SWITCH_DATA');
          });
        //check adc
        document
          .getElementById('READ_ADC_CONF_BTN')
          .addEventListener('click', function () {
            readBtnMotor('ARADC    ', 'READ_ADC_DATA');
          });
        //MANUAL_CALIBRATION
        document
          .getElementById('MANUAL_CALIBRATION_CONF_BTN')
          .addEventListener('click', function () {
            my_dongle.at_spssend('AT+SPSSEND=CFGE=6=FF').then(function (res) {
              document.getElementById('terminal').innerHTML += res + '<br/>';
              my_dongle.at_spssend('AT+SPSSEND=ASM    ').then((res2) => {
                document.getElementById('terminal').innerHTML += res2 + '<br/>';
                my_dongle
                  .at_spssend('AT+SPSSEND=CFGE=7=00F00A00')
                  .then((res3) => {
                    document.getElementById('terminal').innerHTML +=
                      res3 + '<br/>';
                    document.getElementById('liveToast').classList.add('show');
                    setTimeout(function () {
                      document.getElementById(
                        'MANUAL_CALIBRATION_DATA'
                      ).innerHTML = 'Ok';
                      document
                        .getElementById('liveToast')
                        .classList.remove('show');
                    }, 4000);
                  });
              });
            });
          });
        function checksum(str) {
          let hash = new Uint8Array(1);
          let size = str.length / 2;
          let indx = 0;
          for (let i = 0; i < size; i++) {
            let hex = str[indx] + str[indx + 1];
            let byte = parseInt(hex, 16);
            console.log('byte=' + byte + ' (hex)' + byte.toString(16));
            hash[0] -= byte;
            indx += 2;
          }
          let returnVal = hash[0].toString(16);
          if (returnVal.length === 1) {
            returnVal = '0' + returnVal;
          }
          return returnVal.toLocaleUpperCase();
        }
        //SET_MOTOR_VEL
        document
          .getElementById('SET_MOTOR_VEL_CONF_BTN')
          .addEventListener('click', function () {
            let theVal = document.getElementById('SET_MOTOR_VEL_VALUE').value;
            let hexvalue = parseInt(theVal).toString(16);
            if (hexvalue.length % 2 !== 0) {
              hexvalue = '0' + hexvalue;
            }
            let crc = checksum(hexvalue);
            my_dongle
              .at_spssend('ASMV=' + theVal + '=' + crc + '    ')
              .then(function (res) {
                document.getElementById('terminal').innerHTML += res + '<br/>';
                document.getElementById('liveToast').classList.add('show');
                setTimeout(function () {
                  document.getElementById('liveToast').classList.remove('show');
                }, 4000);
              });
          });
        //SET_MOTOR_PWR
        document
          .getElementById('SET_MOTOR_PWR_CONF_BTN')
          .addEventListener('click', function () {
            let theVal = document.getElementById('SET_MOTOR_PWR_VALUE').value;
            let hexvalue = parseInt(theVal).toString(16);
            if (hexvalue.length % 2 !== 0) {
              hexvalue = '0' + hexvalue;
            }
            let crc = checksum(hexvalue);
            my_dongle
              .at_spssend('ASMP=' + theVal + '=' + crc + '    ')
              .then(function (res) {
                document.getElementById('terminal').innerHTML += res + '<br/>';
                document.getElementById('liveToast').classList.add('show');
                setTimeout(function () {
                  document.getElementById('liveToast').classList.remove('show');
                }, 4000);
              });
          });
      },
      { bleuio: '../../../node_modules/bleuio/index.js' },
    ],
    '../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js':
      [
        function (require, module, exports) {
          var global = arguments[3];
          var OVERLAY_ID = '__parcel__error__overlay__';
          var OldModule = module.bundle.Module;

          function Module(moduleName) {
            OldModule.call(this, moduleName);
            this.hot = {
              data: module.bundle.hotData,
              _acceptCallbacks: [],
              _disposeCallbacks: [],
              accept: function (fn) {
                this._acceptCallbacks.push(fn || function () {});
              },
              dispose: function (fn) {
                this._disposeCallbacks.push(fn);
              },
            };
            module.bundle.hotData = null;
          }

          module.bundle.Module = Module;
          var checkedAssets, assetsToAccept;
          var parent = module.bundle.parent;

          if (
            (!parent || !parent.isParcelRequire) &&
            typeof WebSocket !== 'undefined'
          ) {
            var hostname = '' || location.hostname;
            var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
            var ws = new WebSocket(
              protocol + '://' + hostname + ':' + '63395' + '/'
            );

            ws.onmessage = function (event) {
              checkedAssets = {};
              assetsToAccept = [];
              var data = JSON.parse(event.data);

              if (data.type === 'update') {
                var handled = false;
                data.assets.forEach(function (asset) {
                  if (!asset.isNew) {
                    var didAccept = hmrAcceptCheck(
                      global.parcelRequire,
                      asset.id
                    );

                    if (didAccept) {
                      handled = true;
                    }
                  }
                }); // Enable HMR for CSS by default.

                handled =
                  handled ||
                  data.assets.every(function (asset) {
                    return asset.type === 'css' && asset.generated.js;
                  });

                if (handled) {
                  console.clear();
                  data.assets.forEach(function (asset) {
                    hmrApply(global.parcelRequire, asset);
                  });
                  assetsToAccept.forEach(function (v) {
                    hmrAcceptRun(v[0], v[1]);
                  });
                } else if (location.reload) {
                  // `location` global exists in a web worker context but lacks `.reload()` function.
                  location.reload();
                }
              }

              if (data.type === 'reload') {
                ws.close();

                ws.onclose = function () {
                  location.reload();
                };
              }

              if (data.type === 'error-resolved') {
                console.log('[parcel] ✨ Error resolved');
                removeErrorOverlay();
              }

              if (data.type === 'error') {
                console.error(
                  '[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack
                );
                removeErrorOverlay();
                var overlay = createErrorOverlay(data);
                document.body.appendChild(overlay);
              }
            };
          }

          function removeErrorOverlay() {
            var overlay = document.getElementById(OVERLAY_ID);

            if (overlay) {
              overlay.remove();
            }
          }

          function createErrorOverlay(data) {
            var overlay = document.createElement('div');
            overlay.id = OVERLAY_ID; // html encode message and stack trace

            var message = document.createElement('div');
            var stackTrace = document.createElement('pre');
            message.innerText = data.error.message;
            stackTrace.innerText = data.error.stack;
            overlay.innerHTML =
              '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' +
              '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' +
              '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' +
              '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' +
              message.innerHTML +
              '</div>' +
              '<pre>' +
              stackTrace.innerHTML +
              '</pre>' +
              '</div>';
            return overlay;
          }

          function getParents(bundle, id) {
            var modules = bundle.modules;

            if (!modules) {
              return [];
            }

            var parents = [];
            var k, d, dep;

            for (k in modules) {
              for (d in modules[k][1]) {
                dep = modules[k][1][d];

                if (
                  dep === id ||
                  (Array.isArray(dep) && dep[dep.length - 1] === id)
                ) {
                  parents.push(k);
                }
              }
            }

            if (bundle.parent) {
              parents = parents.concat(getParents(bundle.parent, id));
            }

            return parents;
          }

          function hmrApply(bundle, asset) {
            var modules = bundle.modules;

            if (!modules) {
              return;
            }

            if (modules[asset.id] || !bundle.parent) {
              var fn = new Function(
                'require',
                'module',
                'exports',
                asset.generated.js
              );
              asset.isNew = !modules[asset.id];
              modules[asset.id] = [fn, asset.deps];
            } else if (bundle.parent) {
              hmrApply(bundle.parent, asset);
            }
          }

          function hmrAcceptCheck(bundle, id) {
            var modules = bundle.modules;

            if (!modules) {
              return;
            }

            if (!modules[id] && bundle.parent) {
              return hmrAcceptCheck(bundle.parent, id);
            }

            if (checkedAssets[id]) {
              return;
            }

            checkedAssets[id] = true;
            var cached = bundle.cache[id];
            assetsToAccept.push([bundle, id]);

            if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
              return true;
            }

            return getParents(global.parcelRequire, id).some(function (id) {
              return hmrAcceptCheck(global.parcelRequire, id);
            });
          }

          function hmrAcceptRun(bundle, id) {
            var cached = bundle.cache[id];
            bundle.hotData = {};

            if (cached) {
              cached.hot.data = bundle.hotData;
            }

            if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
              cached.hot._disposeCallbacks.forEach(function (cb) {
                cb(bundle.hotData);
              });
            }

            delete bundle.cache[id];
            bundle(id);
            cached = bundle.cache[id];

            if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
              cached.hot._acceptCallbacks.forEach(function (cb) {
                cb();
              });

              return true;
            }
          }
        },
        {},
      ],
  },
  {},
  [
    '../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js',
    'script.js',
  ],
  null
);
//# sourceMappingURL=/script.75da7f30.js.map
