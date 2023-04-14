// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

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
})({"dpgAG":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
var _bleuio = require("bleuio");
function decimalToHex2ByteLittleEndian(decimal) {
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
function hex2LittleEndian(decimal) {
    const hex = decimal.padStart(4, "0").toUpperCase();
    const hexBytes = [
        hex.substr(0, 2),
        hex.substr(2, 2),
        hex.substr(4, 2),
        hex.substr(6, 2)
    ];
    return hexBytes.reverse().join("");
}
function decimalToHex2ByteBigEndian(decimal) {
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
function decimalToHex(decimal, size) {
    decimal = parseInt(decimal);
    let theSize = size * 2;
    // Ensure decimal is within 4-byte range
    const hex = decimal.toString(16);
    return "0".repeat(theSize - hex.length) + hex.toUpperCase();
}
document.getElementById("connect").addEventListener("click", function() {
    _bleuio.at_connect().then((x)=>{
        document.getElementById("terminal").innerHTML = x + "<br/>";
        document.getElementById("configSection").style.display = "block";
        document.getElementById("connect").style.display = "none";
    });
});
document.getElementById("resetDongle").addEventListener("click", function() {
    _bleuio.atr().then(()=>{
        location.reload();
    });
});
var macAddress = "";
var isConnected = false;
document.getElementById("connectToBoardID").addEventListener("click", function() {
    document.getElementById("loader").style.display = "block";
    let theID = document.getElementById("BOARDIDTOCONNECT").value;
    _bleuio.at_cancelconnect().then((x)=>{
        console.log(x);
        document.getElementById("terminal").innerHTML += x + "<br/>";
        _bleuio.at_gapdisconnectall();
        _bleuio.at_dual().then((y)=>{
            document.getElementById("terminal").innerHTML += y + "<br/>";
            _bleuio.at_findscandata("5B070614" + theID, 3).then((z)=>{
                let lastVal = z[z.length - 2];
                if (lastVal.includes("[")) {
                    macAddress = lastVal.substring(1, 18);
                    console.log("macaddress:", macAddress);
                    document.getElementById("theMacAddress").innerHTML = "Mac address : " + macAddress;
                    _bleuio.at_gapconnect("[0]" + macAddress).then((res)=>{
                        if (res[2] == "CONNECTED.") {
                            document.getElementById("terminal").innerHTML += res + "<br/>";
                            _bleuio.at_spssend2("P=477432     ").then((res2)=>{
                                console.log(res2);
                                document.getElementById("terminal").innerHTML += res2 + "<br/>";
                                isConnected = true;
                                document.getElementById("configTable").style.display = "table";
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
const readBtn = (msgID, btnName)=>{
    document.getElementById("loader").style.display = "block";
    _bleuio.at_spssend("AREV=" + msgID).then((x)=>{
        console.log(x);
        setTimeout(()=>{
            _bleuio.at_spssend("AREV=" + msgID).then((y)=>{
                console.log("yy", y);
                setTimeout(()=>{
                    _bleuio.at_spssend("AREV=" + msgID).then((z)=>{
                        setTimeout(()=>{
                            console.log(z);
                            document.getElementById("terminal").innerHTML += z + "<br/>";
                            document.getElementById(btnName + "_READ_DATA").innerHTML = z[z.length - 1];
                            document.getElementById("loader").style.display = "none";
                        }, 500);
                    });
                }, 500);
            });
        }, 500);
    });
};
const confBtn = (writeID, readID, btnName)=>{
    let theVal = document.getElementById(btnName + "_VALUE").value;
    if (theVal) _bleuio.at_spssend("CFGE=" + writeID + "=" + theVal).then((res)=>{
        document.getElementById("terminal").innerHTML += res + "<br/>";
        readBtn(readID, btnName);
        document.getElementById("liveToast").classList.add("show");
        setTimeout(()=>{
            document.getElementById("liveToast").classList.remove("show");
        }, 2000);
    });
};
const confBtnLittleEndian = (writeID, readID, btnName)=>{
    let theVal = document.getElementById(btnName + "_VALUE").value;
    if (theVal) {
        theVal = hex2LittleEndian(theVal);
        _bleuio.at_spssend("CFGE=" + writeID + "=" + theVal).then((res)=>{
            document.getElementById("terminal").innerHTML += res + "<br/>";
            readBtn(readID, btnName);
            document.getElementById("liveToast").classList.add("show");
            setTimeout(()=>{
                document.getElementById("liveToast").classList.remove("show");
            }, 2000);
        });
    }
};
const confBtnDec2 = (writeID, readID, btnName)=>{
    let theVal = document.getElementById(btnName + "_VALUE").value;
    if (theVal) {
        theVal = decimalToHex2ByteLittleEndian(theVal);
        console.log(theVal);
        _bleuio.at_spssend("CFGE=" + writeID + "=" + theVal).then((res)=>{
            document.getElementById("terminal").innerHTML += res + "<br/>";
            readBtn(readID, btnName);
            document.getElementById("liveToast").classList.add("show");
            setTimeout(()=>{
                document.getElementById("liveToast").classList.remove("show");
            }, 2000);
        });
    }
};
const confBtnDec2BigEndian = (writeID, readID, btnName)=>{
    let theVal = document.getElementById(btnName + "_VALUE").value;
    if (theVal) {
        theVal = decimalToHex2ByteBigEndian(theVal);
        console.log(theVal);
        _bleuio.at_spssend("CFGE=" + writeID + "=" + theVal).then((res)=>{
            document.getElementById("terminal").innerHTML += res + "<br/>";
            readBtn(readID, btnName);
            document.getElementById("liveToast").classList.add("show");
            setTimeout(()=>{
                document.getElementById("liveToast").classList.remove("show");
            }, 2000);
        });
    }
};
const confBtnDec2Hex = (writeID, readID, btnName, size)=>{
    let theVal = document.getElementById(btnName + "_VALUE").value;
    if (theVal) {
        theVal = decimalToHex(theVal, size);
        console.log(theVal);
        _bleuio.at_spssend("CFGE=" + writeID + "=" + theVal).then((res)=>{
            document.getElementById("terminal").innerHTML += res + "<br/>";
            readBtn(readID, btnName);
            document.getElementById("liveToast").classList.add("show");
            setTimeout(()=>{
                document.getElementById("liveToast").classList.remove("show");
            }, 2000);
        });
    }
};
//board id
document.getElementById("BOARDID_READ_BTN").addEventListener("click", ()=>{
    readBtn("0 ", "BOARDID");
});
document.getElementById("BOARDID_CONF_BTN").addEventListener("click", ()=>{
    confBtn("0", "0 ", "BOARDID");
});
//PRODUCTID id
document.getElementById("PRODUCTID_READ_BTN").addEventListener("click", ()=>{
    readBtn("1 ", "PRODUCTID");
});
document.getElementById("PRODUCTID_CONF_BTN").addEventListener("click", ()=>{
    confBtn("1", "1 ", "PRODUCTID");
});
//SERIAL NUMBER
document.getElementById("SERIAL_NUMBER_READ_BTN").addEventListener("click", ()=>{
    readBtn("2 ", "SERIAL_NUMBER");
});
document.getElementById("SERIAL_NUMBER_CONF_BTN").addEventListener("click", ()=>{
    confBtn("2", "2 ", "SERIAL_NUMBER");
});
//FIRMWARE_REV
document.getElementById("FIRMWARE_REV_READ_BTN").addEventListener("click", ()=>{
    readBtn("3 ", "FIRMWARE_REV");
});
document.getElementById("FIRMWARE_REV_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2("3", "3 ", "FIRMWARE_REV");
});
//ARTICLE_NUMBER
document.getElementById("ARTICLE_NUMBER_READ_BTN").addEventListener("click", ()=>{
    readBtn("4 ", "ARTICLE_NUMBER");
});
document.getElementById("ARTICLE_NUMBER_CONF_BTN").addEventListener("click", ()=>{
    confBtn("4", "4 ", "ARTICLE_NUMBER");
});
//K_FACTOR
document.getElementById("K_FACTOR_READ_BTN").addEventListener("click", ()=>{
    readBtn("5 ", "K_FACTOR");
});
document.getElementById("K_FACTOR_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2BigEndian("5", "5 ", "K_FACTOR");
});
//FACTORY_RESET
document.getElementById("FACTORY_RESET_READ_BTN").addEventListener("click", ()=>{
    readBtn("6 ", "FACTORY_RESET");
});
document.getElementById("FACTORY_RESET_CONF_BTN").addEventListener("click", ()=>{
    confBtn("6", "6 ", "FACTORY_RESET");
});
//ACTUAL_POS
document.getElementById("ACTUAL_POS_READ_BTN").addEventListener("click", ()=>{
    readBtn("7 ", "ACTUAL_POS");
});
document.getElementById("ACTUAL_POS_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2Hex("7", "7 ", "ACTUAL_POS", 4);
});
//RESET_COUNTER
document.getElementById("RESET_COUNTER_READ_BTN").addEventListener("click", ()=>{
    readBtn("8 ", "RESET_COUNTER");
});
document.getElementById("RESET_COUNTER_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2("8", "8 ", "RESET_COUNTER");
});
//FLOOR_TH
document.getElementById("FLOOR_TH_READ_BTN").addEventListener("click", ()=>{
    readBtn("9 ", "FLOOR_TH");
});
document.getElementById("FLOOR_TH_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2Hex("9", "9 ", "FLOOR_TH", 1);
});
//ROOF_TH
document.getElementById("ROOF_TH_READ_BTN").addEventListener("click", ()=>{
    console.log("here");
    readBtn("10 ", "ROOF_TH");
});
document.getElementById("ROOF_TH_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2Hex("10", "10 ", "ROOF_TH", 1);
});
//MAX_STEP_POS
document.getElementById("MAX_STEP_POS_READ_BTN").addEventListener("click", ()=>{
    readBtn("11 ", "MAX_STEP_POS");
});
document.getElementById("MAX_STEP_POS_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2("11", "11 ", "MAX_STEP_POS");
});
//V_MAX
document.getElementById("V_MAX_READ_BTN").addEventListener("click", ()=>{
    readBtn("12 ", "V_MAX");
});
document.getElementById("V_MAX_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2("12", "12 ", "V_MAX");
});
//I_RUN
document.getElementById("I_RUN_READ_BTN").addEventListener("click", ()=>{
    readBtn("13 ", "I_RUN");
});
document.getElementById("I_RUN_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2Hex("13", "13 ", "I_RUN", 1);
});
//TIME_MIN_TO_MAX
document.getElementById("TIME_MIN_TO_MAX_READ_BTN").addEventListener("click", ()=>{
    readBtn("14 ", "TIME_MIN_TO_MAX");
});
document.getElementById("TIME_MIN_TO_MAX_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2Hex("14", "14 ", "TIME_MIN_TO_MAX", 1);
});
//TIME_MAX_TO_MIN
document.getElementById("TIME_MAX_TO_MIN_READ_BTN").addEventListener("click", ()=>{
    readBtn("15 ", "TIME_MAX_TO_MIN");
});
document.getElementById("TIME_MAX_TO_MIN_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2Hex("15", "15 ", "TIME_MAX_TO_MIN", 1);
});
//FACTORY_SET_DATE
document.getElementById("FACTORY_SET_DATE_READ_BTN").addEventListener("click", ()=>{
    readBtn("16 ", "FACTORY_SET_DATE");
});
document.getElementById("FACTORY_SET_DATE_CONF_BTN").addEventListener("click", ()=>{
    confBtn("16", "16 ", "FACTORY_SET_DATE");
});
//LAST_CONFIG
document.getElementById("LAST_CONFIG_READ_BTN").addEventListener("click", ()=>{
    readBtn("17 ", "LAST_CONFIG");
});
document.getElementById("LAST_CONFIG_CONF_BTN").addEventListener("click", ()=>{
    confBtnLittleEndian("17", "17 ", "LAST_CONFIG");
});
//PROJECT_NUMBER
document.getElementById("PROJECT_NUMBER_READ_BTN").addEventListener("click", ()=>{
    readBtn("18 ", "PROJECT_NUMBER");
});
document.getElementById("PROJECT_NUMBER_CONF_BTN").addEventListener("click", ()=>{
    confBtnLittleEndian("18", "18 ", "PROJECT_NUMBER");
});
//LAST_CALIBRATION
document.getElementById("LAST_CALIBRATION_READ_BTN").addEventListener("click", ()=>{
    readBtn("19 ", "LAST_CALIBRATION");
});
document.getElementById("LAST_CALIBRATION_CONF_BTN").addEventListener("click", ()=>{
    confBtnLittleEndian("19", "19 ", "LAST_CALIBRATION");
});
//NUM_MATRIX_PLATES
document.getElementById("NUM_MATRIX_PLATES_READ_BTN").addEventListener("click", ()=>{
    readBtn("20 ", "NUM_MATRIX_PLATES");
});
document.getElementById("NUM_MATRIX_PLATES_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2("20", "20 ", "NUM_MATRIX_PLATES");
});
//ERROR_MESSAGE
document.getElementById("ERROR_MESSAGE_READ_BTN").addEventListener("click", ()=>{
    readBtn("21 ", "ERROR_MESSAGE");
});
document.getElementById("ERROR_MESSAGE_CONF_BTN").addEventListener("click", ()=>{
    confBtnLittleEndian("21", "21 ", "ERROR_MESSAGE");
});
//MASTER_SLAVE_ROLE
document.getElementById("MASTER_SLAVE_ROLE_READ_BTN").addEventListener("click", ()=>{
    readBtn("22 ", "MASTER_SLAVE_ROLE");
});
document.getElementById("MASTER_SLAVE_ROLE_CONF_BTN").addEventListener("click", ()=>{
    confBtn("22", "22 ", "MASTER_SLAVE_ROLE");
});
//INTERNAL_EXTERNAL
document.getElementById("INTERNAL_EXTERNAL_READ_BTN").addEventListener("click", ()=>{
    readBtn("23 ", "INTERNAL_EXTERNAL");
});
document.getElementById("INTERNAL_EXTERNAL_CONF_BTN").addEventListener("click", ()=>{
    confBtnLittleEndian("23", "23 ", "INTERNAL_EXTERNAL");
});
//ACT_FLOW
document.getElementById("ACT_FLOW_READ_BTN").addEventListener("click", ()=>{
    readBtn("24 ", "ACT_FLOW");
});
document.getElementById("ACT_FLOW_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2("24", "24 ", "ACT_FLOW");
});
//PRESSURE
document.getElementById("PRESSURE_READ_BTN").addEventListener("click", ()=>{
    readBtn("25 ", "PRESSURE");
});
document.getElementById("PRESSURE_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2("25", "25 ", "PRESSURE");
});
//SLAVE_MAC_ADDR1
document.getElementById("SLAVE_MAC_ADDR1_READ_BTN").addEventListener("click", ()=>{
    readBtn("26 ", "SLAVE_MAC_ADDR1");
});
document.getElementById("SLAVE_MAC_ADDR1_CONF_BTN").addEventListener("click", ()=>{
    confBtn("26", "26 ", "SLAVE_MAC_ADDR1");
});
//SLAVE_MAC_ADDR2
document.getElementById("SLAVE_MAC_ADDR2_READ_BTN").addEventListener("click", ()=>{
    readBtn("27 ", "SLAVE_MAC_ADDR2");
});
document.getElementById("SLAVE_MAC_ADDR2_CONF_BTN").addEventListener("click", ()=>{
    confBtn("27", "27 ", "SLAVE_MAC_ADDR2");
});
//SLAVE_MAC_ADDR3
document.getElementById("SLAVE_MAC_ADDR3_READ_BTN").addEventListener("click", ()=>{
    readBtn("28 ", "SLAVE_MAC_ADDR3");
});
document.getElementById("SLAVE_MAC_ADDR3_CONF_BTN").addEventListener("click", ()=>{
    confBtn("28", "28 ", "SLAVE_MAC_ADDR3");
});
//SLAVE_MAC_ADDR4
document.getElementById("SLAVE_MAC_ADDR4_READ_BTN").addEventListener("click", ()=>{
    readBtn("29 ", "SLAVE_MAC_ADDR4");
});
document.getElementById("SLAVE_MAC_ADDR4_CONF_BTN").addEventListener("click", ()=>{
    confBtn("29", "29 ", "SLAVE_MAC_ADDR4");
});
//SLAVE_MAC_ADDR5
document.getElementById("SLAVE_MAC_ADDR5_READ_BTN").addEventListener("click", ()=>{
    readBtn("30 ", "SLAVE_MAC_ADDR5");
});
document.getElementById("SLAVE_MAC_ADDR5_CONF_BTN").addEventListener("click", ()=>{
    confBtn("30", "30 ", "SLAVE_MAC_ADDR5");
});
//SLAVE_MAC_ADDR6
document.getElementById("SLAVE_MAC_ADDR6_READ_BTN").addEventListener("click", ()=>{
    readBtn("31 ", "SLAVE_MAC_ADDR6");
});
document.getElementById("SLAVE_MAC_ADDR6_CONF_BTN").addEventListener("click", ()=>{
    confBtn("31", "31 ", "SLAVE_MAC_ADDR6");
});
//SLAVE_MAC_ADDR7
document.getElementById("SLAVE_MAC_ADDR7_READ_BTN").addEventListener("click", ()=>{
    readBtn("32 ", "SLAVE_MAC_ADDR7");
});
document.getElementById("SLAVE_MAC_ADDR7_CONF_BTN").addEventListener("click", ()=>{
    confBtn("32", "32 ", "SLAVE_MAC_ADDR7");
});
//MASTER_NUM_SLAVE_CONN
document.getElementById("MASTER_NUM_SLAVE_CONN_READ_BTN").addEventListener("click", ()=>{
    readBtn("33 ", "MASTER_NUM_SLAVE_CONN");
});
document.getElementById("MASTER_NUM_SLAVE_CONN_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2Hex("33", "33 ", "MASTER_NUM_SLAVE_CONN", 1);
});
//SLAVE_BOARDID_1
document.getElementById("SLAVE_BOARDID_1_READ_BTN").addEventListener("click", ()=>{
    readBtn("34 ", "SLAVE_BOARDID_1");
});
document.getElementById("SLAVE_BOARDID_1_CONF_BTN").addEventListener("click", ()=>{
    confBtn("34", "34 ", "SLAVE_BOARDID_1");
});
//SLAVE_BOARDID_2
document.getElementById("SLAVE_BOARDID_2_READ_BTN").addEventListener("click", ()=>{
    readBtn("35 ", "SLAVE_BOARDID_2");
});
document.getElementById("SLAVE_BOARDID_2_CONF_BTN").addEventListener("click", ()=>{
    confBtn("35", "35 ", "SLAVE_BOARDID_2");
});
//SLAVE_BOARDID_3
document.getElementById("SLAVE_BOARDID_3_READ_BTN").addEventListener("click", ()=>{
    readBtn("36 ", "SLAVE_BOARDID_3");
});
document.getElementById("SLAVE_BOARDID_3_CONF_BTN").addEventListener("click", ()=>{
    confBtn("36", "36 ", "SLAVE_BOARDID_3");
});
//SLAVE_BOARDID_4
document.getElementById("SLAVE_BOARDID_4_READ_BTN").addEventListener("click", ()=>{
    readBtn("37 ", "SLAVE_BOARDID_4");
});
document.getElementById("SLAVE_BOARDID_4_CONF_BTN").addEventListener("click", ()=>{
    confBtn("37", "37 ", "SLAVE_BOARDID_4");
});
//SLAVE_BOARDID_5
document.getElementById("SLAVE_BOARDID_5_READ_BTN").addEventListener("click", ()=>{
    readBtn("38 ", "SLAVE_BOARDID_5");
});
document.getElementById("SLAVE_BOARDID_5_CONF_BTN").addEventListener("click", ()=>{
    confBtn("38", "38 ", "SLAVE_BOARDID_5");
});
//SLAVE_BOARDID_6
document.getElementById("SLAVE_BOARDID_6_READ_BTN").addEventListener("click", ()=>{
    readBtn("39 ", "SLAVE_BOARDID_6");
});
document.getElementById("SLAVE_BOARDID_6_CONF_BTN").addEventListener("click", ()=>{
    confBtn("39", "39 ", "SLAVE_BOARDID_6");
});
//HAS_SENSOR
document.getElementById("HAS_SENSOR_READ_BTN").addEventListener("click", ()=>{
    readBtn("50 ", "HAS_SENSOR");
});
document.getElementById("HAS_SENSOR_CONF_BTN").addEventListener("click", ()=>{
    confBtn("50", "50 ", "HAS_SENSOR");
});
//HAS_MODEM
document.getElementById("HAS_MODEM_READ_BTN").addEventListener("click", ()=>{
    readBtn("51 ", "HAS_MODEM");
});
document.getElementById("HAS_MODEM_CONF_BTN").addEventListener("click", ()=>{
    confBtn("51", "51 ", "HAS_MODEM");
});
//MIN_FLOW
document.getElementById("MIN_FLOW_READ_BTN").addEventListener("click", ()=>{
    readBtn("52 ", "MIN_FLOW");
});
document.getElementById("MIN_FLOW_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2("52", "52 ", "MIN_FLOW");
});
//REQ_FLOW
document.getElementById("REQ_FLOW_READ_BTN").addEventListener("click", ()=>{
    readBtn("53 ", "REQ_FLOW");
});
document.getElementById("REQ_FLOW_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2("53", "53 ", "REQ_FLOW");
});
//TOL_FLOW
document.getElementById("TOL_FLOW_READ_BTN").addEventListener("click", ()=>{
    readBtn("54 ", "TOL_FLOW");
});
document.getElementById("TOL_FLOW_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2("54", "54 ", "TOL_FLOW");
});
//SIGNAL
document.getElementById("SIGNAL_READ_BTN").addEventListener("click", ()=>{
    readBtn("55 ", "SIGNAL");
});
document.getElementById("SIGNAL_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2("55", "55 ", "SIGNAL");
});
//O_PRESSURE
document.getElementById("O_PRESSURE_READ_BTN").addEventListener("click", ()=>{
    readBtn("56 ", "O_PRESSURE");
});
document.getElementById("O_PRESSURE_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2("56", "56 ", "O_PRESSURE");
});
//K_VALUE
document.getElementById("K_VALUE_READ_BTN").addEventListener("click", ()=>{
    readBtn("57 ", "K_VALUE");
});
document.getElementById("K_VALUE_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2("57", "57 ", "K_VALUE");
});
//CONTROL_TYPE
document.getElementById("CONTROL_TYPE_READ_BTN").addEventListener("click", ()=>{
    readBtn("58 ", "CONTROL_TYPE");
});
document.getElementById("CONTROL_TYPE_CONF_BTN").addEventListener("click", ()=>{
    confBtn("58", "58 ", "CONTROL_TYPE");
});
//MAX_FLOW
document.getElementById("MAX_FLOW_READ_BTN").addEventListener("click", ()=>{
    readBtn("59 ", "MAX_FLOW");
});
document.getElementById("MAX_FLOW_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2("59", "59 ", "MAX_FLOW");
});
//DAC_OUT_MIN_FLOW
document.getElementById("DAC_OUT_MIN_FLOW_READ_BTN").addEventListener("click", ()=>{
    readBtn("60 ", "DAC_OUT_MIN_FLOW");
});
document.getElementById("DAC_OUT_MIN_FLOW_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2("60", "60 ", "DAC_OUT_MIN_FLOW");
});
//DAC_OUT_MAX_FLOW
document.getElementById("DAC_OUT_MAX_FLOW_READ_BTN").addEventListener("click", ()=>{
    readBtn("61 ", "DAC_OUT_MAX_FLOW");
});
document.getElementById("DAC_OUT_MAX_FLOW_CONF_BTN").addEventListener("click", ()=>{
    confBtnDec2("61", "61 ", "DAC_OUT_MAX_FLOW");
});

},{"bleuio":"imH0e"}],"imH0e":[function(require,module,exports) {
let port, reader, inputDone, outputDone, inputStream, outputStream, arr = [];
async function connect() {
    port = await navigator.serial.requestPort(), await port.open({
        baudRate: 9600
    });
    const t = new TextEncoderStream();
    outputDone = t.readable.pipeTo(port.writable), outputStream = t.writable;
    let e = new TextDecoderStream();
    inputDone = port.readable.pipeTo(e.writable), inputStream = e.readable.pipeThrough(new TransformStream(new LineBreakTransformer())), reader = inputStream.getReader();
}
async function disconnect() {
    return reader && (await reader.cancel(), await inputDone.catch(()=>{}), reader = null, inputDone = null), outputStream && (await outputStream.getWriter().close(), await outputDone, outputStream = null, outputDone = null), await port.close(), port = null, "Dongle Disconnected!";
}
function writeCmd(t) {
    const e = outputStream.getWriter();
    e.write(t), "\x03" !== t && e.write("\r"), e.releaseLock();
}
/**
 * @at_connect
 * Connects Device
*/ exports.at_connect = async function() {
    return await connect(), "device connected";
}, /**
 * @at_connect
 * Disconnects Device
*/ exports.at_disconnect = async function() {
    return await disconnect(), "device disconnected";
}, /**
 * @ata
 * Shows/hides ASCII values from notification/indication/read responses. 
 * ata(0) hides the ASCII values,
 * ata(1) shows the ASCII values.
 * @return {Promise} returns promise
 * 
*/ exports.ata = function(status) {
    return writeCmd("ATA" + status), readLoop("ata");
}, /**
 * @atasps
 * Toggle between ascii and hex responses received from SPS. 
 * atasps(0) shows hex values, atasps(1) shows ASCII. ASCII is on by default.
 * @return {Promise} returns promise
 * 
*/ exports.atasps = function(status) {
    return writeCmd("ATASPS" + status), readLoop("atasps");
}, /**
 * @atds
 * Turns auto discovery of services when connecting on/off. 
 * ATDS0 off, ATDS1 on. 
 * On by default. This command can be used in both central and peripheral role.
 * @return {Promise} returns promise
 * 
*/ exports.atds = function(status) {
    return writeCmd("ATDS" + status), readLoop("atds");
}, /**
 * @ati
 * Device information query.
 * @return {Promise} returns promise
 * 
*/ exports.ati = ()=>port ? (writeCmd("ATI"), readLoop("ati")) : "Device not connected.", /**
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
*/ exports.ate = function(status) {
    return writeCmd("ATE" + status), readLoop("ate");
}, /**
 * @at_central
 * Sets the device Bluetooth role to central role.
 * @return {Promise} returns promise
 * 
*/ exports.at_central = function() {
    return writeCmd("AT+CENTRAL"), readLoop("at_central");
}, /**
 * @at_dis
 * Shows the Device Information Service information to be used.
 * @return {Promise} returns promise
 * 
*/ exports.at_dis = function() {
    return writeCmd("AT+DIS"), readLoop("at_dis");
}, /**
 * @at_peripheral
 * Sets the device Bluetooth role to peripheral.
 * @return {Promise} returns promise
 * 
*/ exports.at_peripheral = function() {
    return writeCmd("AT+PERIPHERAL"), readLoop("at_peripheral");
}, /**
 * @atr
 * Trigger platform reset.
 * @return {Promise} returns promise
 * 
*/ exports.atr = function() {
    return writeCmd("ATR"), readLoop("atr");
}, /**
 * @at_advstart
 * Starts advertising .
 * @return {Promise} returns promise
 * 
*/ exports.at_advstart = function() {
    return writeCmd("AT+ADVSTART"), readLoop("at_advstart");
}, /**
 * @at_advstop
 * Stops advertising .
 * @return {Promise} returns promise
 * 
*/ exports.at_advstop = function() {
    return writeCmd("AT+ADVSTOP"), readLoop("at_advstop");
}, /**
 * @at_advdata
 * Sets or queries the advertising data.if left empty it will query what advdata is set. 
 * @param {string} t hex str format: xx:xx:xx:xx:xx.. (max 31 bytes)
 * @return {Promise} returns a promise
 * 
*/ exports.at_advdata = (t)=>(writeCmd(t ? "AT+ADVDATA=" + t : "AT+ADVDATA"), readLoop("at_advdata")), /**
 * @at_advdatai
 * Sets advertising data in a way that lets it be used as an iBeacon.
        Format = (UUID)(MAJOR)(MINOR)(TX)
        Example: at_advdatai(5f2dd896-b886-4549-ae01-e41acd7a354a0203010400).
 * @param {string} t  if left empty it will query what advdata is set
 * @return {Promise} returns a promise
 * 
*/ exports.at_advdatai = function(t) {
    return writeCmd("AT+ADVDATAI=" + t), readLoop("at_advdatai");
}, /**
 * @at_advresp
 *  Sets or queries scan response data. Data must be provided as hex string.
 * @param {string} t if left empty it will query what advdata is set.hex str format: xx:xx:xx:xx:xx.. (max 31 bytes)
 * @return {Promise} returns a promise
 * 
*/ exports.at_advresp = function(t) {
    return writeCmd(t ? "AT+ADVRESP=" + t : "AT+ADVRESP"), readLoop("at_advresp");
}, /**
 * @at_cancelconnect
 * While in Central Mode, cancels any ongoing connection attempts.
 * @return {Promise} returns a promise
 * 
*/ exports.at_cancelconnect = function() {
    return writeCmd("AT+CANCELCONNECT"), readLoop("at_cancelconnect");
}, /**
 * @at_client
 * Only usable in Dual role. Sets the dongle role towards the targeted connection to client.
 * @return {Promise} returns a promise
 * 
*/ exports.at_client = function() {
    return writeCmd("AT+CLIENT"), readLoop("at_client");
}, /**
 * @at_clearnoti
 * Disables notification for selected characteristic.
 * @param {string} t notification handle string.
 * @return {Promise} returns a promise
 * 
*/ exports.at_clearnoti = function(t) {
    return writeCmd("AT+CLEARNOTI=" + t), readLoop("at_clearnoti");
}, /**
 * @at_dual
 * Sets the device Bluetooth role to dual role. This means it has the capabilities of both Central and Peripheral role. Advertising must be stopped and, any connection must be terminated before the role change is accepted.
 * @return {Promise} returns a promise
 * 
*/ exports.at_dual = function() {
    return writeCmd("AT+DUAL"), readLoop("at_dual");
}, /**
 * @at_enterpasskey
 * Enter the 6-digit passkey to continue the pairing and bodning request.
 * @param {string} t Enter the 6-digit passkey.
 * @return {Promise} returns a promise
 * 
*/ exports.at_enterpasskey = function(t = 123456) {
    return writeCmd("AT+ENTERPASSKEY=" + t), readLoop("at_enterpasskey");
}, /** @at_numcompa
* Used for accepting a numeric comparison authentication request or enabling/disabling auto-accepting numeric comparisons.
* @param {number} t 0 or 1. 0 for disabled 1 for enable. Enabled by default.
* @return {Promise} returns a promise
* 
*/ exports.at_numcompa = function(t) {
    return writeCmd(t ? "AT+NUMCOMPA=" + t : "AT+NUMCOMPA"), readLoop("at_numcompa");
}, /**
 * @at_gapiocap
 * Sets or queries what input and output capabilities the device has.
 * @param {number} t int between 0 to 4. 0 - Display only, 1 - Display + yes & no, 2 - Keyboard only, 3- No input no output, 4 - Keyboard + display
 * @return {Promise} returns a promise
 * 
*/ exports.at_gapiocap = function(t = 1) {
    return writeCmd("AT+GAPIOCAP=" + t), readLoop("at_gapiocap");
}, /**
 * @at_gappair
 * Starts a pairing or bonding procedure. Depending on whether the device is master or slave on the connection, it will send a pairing or a security request respectively.
Only usable when connected to a device.
 * @param {number} t leave blank for pairing and write BOND for bonding.
 * @return {Promise} returns a promise
 * 
*/ exports.at_gappair = function(t) {
    return writeCmd(t ? "AT+GAPPAIR=" + t : "AT+GAPPAIR"), readLoop("at_gappair");
}, /**
 * @at_gapunpair
 * Unpair paired devices. This will also remove the device bond data from BLE storage. Usable both when device is connected and when not. 
 * @param {number} t Leave blank to unpair all paired devices or selected paired device (device_mac_address). Public= [0] or private= [1] address type prefix required before mac address. ex: [x]xx:xx:xx:xx:xx:xx
 * @return {Promise} returns a promise
 * 
*/ exports.at_gapunpair = function(t) {
    return writeCmd(t ? "AT+GAPUNPAIR=" + t : "AT+GAPUNPAIR"), readLoop("at_gapunpair");
}, /**
 * @at_gapdisconnectall
 * Disconnects from all connected peer Bluetooth devices. This command can be used in both central and peripheral role.
 * @return {Promise} returns a promise
 * 
*/ exports.at_gapdisconnectall = function() {
    return writeCmd("AT+GAPDISCONNECTALL"), readLoop("at_gapdisconnectall");
}, /**
 * @at_gapscan
 * Starts a Bluetooth device scan with or without timer set in seconds. If no timer is set, it will scan for only 1 second.
 * @param {number} t int (time in seconds)
 * @param {boolean} e true/false, true will show real time device in console
 * @return {Promise} returns a promise
 * 
*/ exports.at_gapscan = function(t = 1, e = true) {
    return writeCmd("AT+GAPSCAN=" + t), readLoop("at_gapscan", e);
}, /** @at_seclvl
* Sets or queries what minimum security level will be used when connected to other devices.
* @param {number} t leave blank for quering security level or set security level from 1 to 3. 1- No authentication and no encryption, 2-Unauthenticated pairing with encryption, 3 -Authenticated pairing with encryption
* @return {Promise} returns a promise
* 
*/ exports.at_seclvl = function(t) {
    return writeCmd(t ? "AT+SECLVL=" + t : "AT+SECLVL"), readLoop("at_seclvl");
}, /** @at_setpasskey
* Setting or quering set passkey for passkey authentication.
* @param {string} t leave blank for quering passkey or set six digit passkey.
* @return {Promise} returns a promise
* 
*/ exports.at_setpasskey = function(t) {
    return writeCmd(t ? "AT+SETPASSKEY=" + t : "AT+SETPASSKEY"), readLoop("at_setpasskey");
}, /**
 * @at_findscandata
 * Scans for all advertising/response data which contains the search params. ex. at_findscandata('FF5',10)
 * @param {string} t search params.
 * @param {number} e number of seconds.
 * @return {Promise} returns a promise
 * 
*/ exports.at_findscandata = function(t = 1, e = 5) {
    return writeCmd("AT+FINDSCANDATA=" + t + "=" + e), readLoop("at_findscandata");
}, /**
 * @at_gapconnect
 * Initiates a connection with a specific slave device.
 * @param {string} t hex str format: xx:xx:xx:xx:xx:xx
 * @return {Promise} returns a promise
 * 
*/ exports.at_gapconnect = function(t) {
    return writeCmd("AT+GAPCONNECT=" + t), readLoop("at_gapconnect");
}, /**
 * @at_gapdisconnect
 * Disconnects from a peer Bluetooth device.
 * @return {Promise} returns a promise
 * 
*/ exports.at_gapdisconnect = function() {
    return writeCmd("AT+GAPDISCONNECT"), readLoop("at_gapdisconnect");
}, /**
 * @at_getconn
 * Gets a list of currently connected devices along with their mac addresses, connection index, our role towards this connection and if it's bonded/paired.
 * @return {Promise} returns a promise
 * 
*/ exports.at_getconn = async function() {
    return writeCmd("AT+GETCONN"), readLoop("at_getconn");
}, /**
 * @at_getservices
 * Rediscovers a peripheral's services and characteristics.
 * @return {Promise} returns a promise
 * 
*/ exports.at_getservices = function() {
    return writeCmd("AT+GETSERVICES"), readLoop("at_getservices");
}, /**
 * @at_getservicesonly
 * Discovers a peripherals services.
 * @return {Promise} returns a promise
 * 
*/ exports.at_getservicesonly = function() {
    return writeCmd("AT+GETSERVICESONLY"), readLoop("at_getservicesonly");
}, /**
 * @at_getservicesdetails
 * Discovers all characteristics and descriptors of a selected service. Must run at_getservicesonly() first to get the service handle.
 * Example : at_getservicesdetails('0001')
 * @param {string} t service param
 * @return {Promise} returns a promise
 * 
*/ exports.at_getservicesdetails = function(t) {
    return writeCmd("AT+GETSERVICEDETAILS=" + t), readLoop("at_getservicesdetails");
}, /**
 * @at_indi
 * Shows list of set indication handles along with the connection index so you can see what indication you have enabled on which connected device.
 * @return {Promise} returns a promise
 * 
*/ exports.at_indi = function() {
    return writeCmd("AT+INDI"), readLoop("at_indi");
}, /**
 * @at_noti
 * Shows list of set notification handles along with the connection index so you can see what notification you have enabled on which connected device.
 * @return {Promise} returns a promise
 * 
*/ exports.at_noti = function() {
    return writeCmd("AT+NOTI"), readLoop("at_noti");
}, /**
 * @at_scantarget
 * Scan a target device. Displaying it's advertising and response data as it updates.
 * @param {string} t hex str format: xx:xx:xx:xx:xx:xx
 * @param {Number} e Number of responses
 * @return {Promise} returns a promise
 * 
*/ exports.at_scantarget = function(t, e = 1) {
    return writeCmd("AT+SCANTARGET=" + t), readLoop("at_scantarget", e + 2);
}, /**
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
*/ exports.at_setdis = function(name, num, serial, hrev, frev, srev) {
    return writeCmd("AT+SETDIS=" + name + "=" + num + "=" + serial + "=" + hrev + "=" + frev + "=" + srev), readLoop("at_setdis");
}, /**
 * @at_server
 * Only usable in Dual role. Sets the dongle role towards the targeted connection to server.
 * @return {Promise} returns a promise
 * 
*/ exports.at_server = function() {
    return writeCmd("AT+SERVER"), readLoop("at_server");
}, /**
 * @at_setnoti
 * Enable notification for selected characteristic.
 * @param {string} t notification handle
 * @return {Promise} returns a promise
 * 
*/ exports.at_setnoti = function(t) {
    return writeCmd("AT+SETNOTI=" + t), readLoop("at_setnoti");
}, /**
 * @at_setindi
 * Enable indication for selected characteristic.
 * @param {string} t indication  handle
 * @return {Promise} returns a promise
 * 
*/ exports.at_setindi = function(t) {
    return writeCmd("AT+SETINDI=" + t), readLoop("at_setindi");
}, /**
 * @at_spssend
 * Send a message or data via the SPS profile.Without parameters it opens a stream for continiously sending data.
 * @param {string} t if left empty it will open Streaming mode
 * @return {Promise} returns a promise
 * 
*/ exports.at_spssend = function(t) {
    return writeCmd(t ? "AT+SPSSEND=" + t : "AT+SPSSEND"), readLoop("at_spssend");
}, /**
 * @at_spssend2
 * Send a message or data via the SPS profile.Without parameters it opens a stream for continiously sending data.
 * @param {string} t if left empty it will open Streaming mode
 * @return {Promise} returns a promise
 * 
*/ exports.at_spssend2 = function(t) {
    return writeCmd(t ? "AT+SPSSEND=" + t : "AT+SPSSEND"), readLoop("at_spssend2");
}, /**
 * @at_targetconn
 * Setting or querying the connection index to use as the targeted connection.
When connected to several devices, the target connection decides which device you target when using commands such as AT+GATTCREAD, AT+GATTCWRITE, AT+GAPDISCONNECT, AT+GAPPAIR or AT+SPSSEND etc.
 * @param {string} t write connecton index of target device. if left empty it will show what device you are targeting at the momment.
 * @return {Promise} returns a promise
 * 
*/ exports.at_targetconn = function(t) {
    return writeCmd(t ? "AT+TARGETCONN=" + t : "AT+TARGETCONN"), readLoop("at_targetconn");
}, /**
 * @at_gapstatus
 * Reports the Bluetooth role.
 * @return {Promise} returns a promise
 * 
*/ exports.at_gapstatus = function() {
    return writeCmd("AT+GAPSTATUS"), readLoop("at_gapstatus");
}, /**
 * @at_gattcwrite
 * Write attribute to remote GATT server in ASCII. Can only be used in Central role and when connected to a peripheral. ex at_gattcwrite('001B','HELLO')
 * @param {string} handle_param pass handle param as string
 * @param {string} msg pass msg as string. 
 * @return {Promise} returns a promise
 * 
*/ exports.at_gattcwrite = function(handle_param1, msg) {
    return writeCmd("AT+GATTCWRITE=" + handle_param1 + " " + msg), readLoop("at_gattcwrite");
}, /**
 * @at_gattcwriteb
 * Write attribute to remote GATT server in Hex. Can only be used in Central role and when connected to a peripheral.ex at_gattcwriteb('001B','0101')
 * @param {string} handle_param pass handle param as string
 * @param {string} msg pass msg as string.
 * @return {Promise} returns a promise
 * 
*/ exports.at_gattcwriteb = function(handle_param1, msg) {
    return writeCmd("AT+GATTCWRITEB=" + handle_param1 + " " + msg), readLoop("at_gattcwriteb");
}, /**
 * @at_gattcwritewr
 * Write (without response) attribute to remote GATT server in ASCII. Can only be used in Central role and when connected to a peripheral.
 * @param {string} handle_param pass handle param as string
 * @param {string} msg pass msg as string.
 * @return {Promise} returns a promise
 * 
*/ exports.at_gattcwritewr = function(handle_param1, msg) {
    return writeCmd("AT+GATTCWRITEWR=" + handle_param1 + " " + msg), readLoop("at_gattcwritewr");
}, /**
 * @at_gattcwritewrb
 * Write (without response) attribute to remote GATT server in Hex. Can only be used in Central role and when connected to a peripheral.
 * @param {string} handle_param pass handle param as string
 * @param {string} msg pass msg as string.
 * @return {Promise} returns a promise
 * 
*/ exports.at_gattcwritewrb = function(handle_param1, msg) {
    return writeCmd("AT+GATTCWRITEWRB=" + handle_param1 + " " + msg), readLoop("at_gattcwritewrb");
}, /**
 * @at_gattcread
 * Read attribute of remote GATT server. Can only be used in Central role and when connected to a peripheral. ex at_gattcread('001B')
 * @param {string} handle_param pass handle param as string
 * @return {Promise} returns a promise
 * 
*/ exports.at_gattcread = function() {
    return writeCmd("AT+GATTCREAD=" + handle_param), readLoop("at_gattcread");
}, /**
 * @help
 * Shows all AT-Commands.
 * @return {Promise} returns a promise
 * 
*/ exports.help = function() {
    return writeCmd("--H"), readLoop("help");
}, /**
 * @stop
 * Stops Current process.
 * @return {Promise} returns a promise
 * 
*/ exports.stop = function() {
    return writeCmd("\x03"), "Process Stopped";
};
class LineBreakTransformer {
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
async function readLoop(t, e) {
    for(arr = [];;){
        const { done: r , value: a  } = await reader.read();
        switch(a && arr.push(a), t){
            case "ata":
                if (2 == arr.length) return arr;
                break;
            case "atasps":
                if (2 == arr.length) return arr;
                break;
            case "atds":
                if (2 == arr.length) return arr;
                break;
            case "ati":
                if (arr.includes("Not Advertising") || arr.includes("Advertising")) return arr;
                break;
            case "ate":
                if (arr.includes("ECHO OFF") || arr.includes("ECHO ON")) return arr;
                break;
            case "at_central":
                return "Central Mode";
            case "at_dis":
                if (arr.includes("dis_info_end")) return arr;
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
                if (2 == arr.length) return arr;
                break;
            case "at_cancelconnect":
                if (arr.includes("ERROR") || arr.includes("OK")) return arr;
                break;
            case "at_client":
                return "Client";
            case "at_clearnoti":
                if (2 == arr.length) return arr;
                break;
            case "at_dual":
                return "Dual Mode";
            case "at_enterpasskey":
                if (2 == arr.length) return arr;
                break;
            case "atr":
                return "Trigger platform reset";
            case "at_findscandata":
                if (arr.includes("SCAN COMPLETE")) return arr;
                break;
            case "at_gapdisconnectall":
                if (arr.includes("All connections terminated.")) return arr;
                break;
            case "at_gapiocap":
                if (3 == arr.length) return arr;
                break;
            case "at_gappair":
                if (arr.includes("PAIRING SUCCESS") || arr.includes("BONDING SUCCESS")) return arr;
                break;
            case "at_gapunpair":
                if (arr.includes("UNPARIED.") || 3 == arr.length) return arr;
                break;
            case "at_gapscan":
                if (e === true) arr.some(function(v) {
                    if (v.indexOf("RSSI") >= 0 && a != "") console.log(a);
                });
                if (arr.includes("SCAN COMPLETE")) return arr;
                break;
            case "at_getconn":
                if (arr.includes("No Connections found.") || 2 == arr.length) return arr;
            case "at_indi":
                if (2 == arr.length) return arr;
                break;
            case "at_noti":
                if (2 == arr.length) return arr;
                break;
            case "at_scantarget":
                if (arr.length == e) {
                    const t = outputStream.getWriter();
                    return t.write("\x03"), t.releaseLock(), arr.slice(2);
                }
                break;
            case "at_setdis":
                if (2 == arr.length) return arr;
                break;
            case "at_setpasskey":
                if (2 == arr.length) return arr;
                break;
            case "at_gattcwrite":
                if (4 == arr.length) return arr;
                break;
            case "at_gapstatus":
                if (arr.includes("Not Advertising") || arr.includes("Advertising")) return arr;
                break;
            case "at_gattcwrite":
                if (4 == arr.length) return arr;
                break;
            case "at_gattcwriteb":
                if (4 == arr.length) return arr;
                break;
            case "at_gattcwritewr":
                if (2 == arr.length) return arr;
                break;
            case "at_gattcwritewrb":
                if (2 == arr.length) return arr;
                break;
            case "at_gattcread":
                if (4 == arr.length) return arr;
                break;
            case "at_gapconnect":
                if (arr.includes("handle_evt_gattc_browse_completed: conn_idx=0000 status=0")) return arr;
                break;
            case "at_getservices":
                if (arr.includes("Value received: \x02")) return arr;
                break;
            case "at_getservicesonly":
                if (arr.includes("handle_evt_gattc_discover_completed: conn_idx=0000 type=SVC status=0")) return arr;
                break;
            case "at_getservicesdetails":
                if (arr.includes("handle_evt_gattc_browse_completed: conn_idx=0000 status=0")) return arr;
                break;
            case "at_gapdisconnect":
                return "Disconnected.";
            case "at_numcompa":
                if (arr.includes("ERROR") || arr.includes("OK")) return arr;
                break;
            case "at_seclvl":
                if (2 == arr.length) return arr;
                break;
            case "at_server":
                return "Server";
            case "at_setnoti":
                if (20 == arr.length) return arr;
                break;
            case "at_setindi":
                if (2 == arr.length) return arr;
                break;
            case "at_spssend2":
                if (arr.includes("[Sent]")) return arr;
            case "at_spssend":
                if (2 == arr.length) return arr;
                break;
            case "at_targetconn":
                if (2 == arr.length) return arr;
            case "help":
                if (arr.includes("[A] = Usable in All Roles")) return arr;
                break;
            default:
                return "Nothing!";
        }
    }
}

},{}]},["dpgAG","6rimH"], "6rimH", "parcelRequire94c2")

//# sourceMappingURL=index.8cfc62b9.js.map
