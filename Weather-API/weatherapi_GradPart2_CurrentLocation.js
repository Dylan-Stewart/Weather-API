"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
function getWeatherForApproximateLocation() {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var locationResponse, locationData, lat, lon, apiKey, apiUrl, response, data, error_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, (0, node_fetch_1.default)('http://ip-api.com/json/')];
                case 1:
                    locationResponse = _d.sent();
                    return [4 /*yield*/, locationResponse.json()];
                case 2:
                    locationData = _d.sent();
                    if (locationData.status === 'fail') {
                        throw new Error('failed location from ip-api');
                    }
                    lat = locationData.lat, lon = locationData.lon;
                    apiKey = '9c324a015eee7cf96dec4d04a9a70b1d';
                    apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(apiKey);
                    return [4 /*yield*/, (0, node_fetch_1.default)(apiUrl)];
                case 3:
                    response = _d.sent();
                    return [4 /*yield*/, response.json()];
                case 4:
                    data = _d.sent();
                    // print data
                    console.log('Received data:', data);
                    // check if the properties are available before accessing them
                    if (((_a = data.main) === null || _a === void 0 ? void 0 : _a.temp) && ((_c = (_b = data.weather) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.description)) {
                        // display the current weather information
                        console.log('Current Weather at Approximate Location:');
                        console.log("Temperature: ".concat(data.main.temp, "\u00B0C"));
                        console.log("Description: ".concat(data.weather[0].description));
                    }
                    else {
                        console.log('Weather data not available');
                    }
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _d.sent();
                    console.error('Error fetching weather data:', error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
// test
getWeatherForApproximateLocation();
