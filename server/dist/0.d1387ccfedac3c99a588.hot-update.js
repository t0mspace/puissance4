exports.id = 0;
exports.modules = [
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _http = __webpack_require__(3);

var _http2 = _interopRequireDefault(_http);

var _fs = __webpack_require__(4);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(5);

var _path2 = _interopRequireDefault(_path);

var _socket = __webpack_require__(6);

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var server = _http2.default.Server(app);
var io = (0, _socket2.default)(server);

io.on('connection', function (socket) {
    console.log(socket);
    console.log('a user connected');
    socket.emit('message', 'Vous êtes connectés');
});
server.listen(8080);
// let server = http.createServer(express);


var file = _path2.default.resolve('./public/index.html');

app.use(_express2.default.static('public'));

// // Chargement de la page index.html
app.get('/', function (req, res) {
    //let url = convertURL(req.url);
    //res.setHeader("Content-Type", mime.getExtension('text/html; charset=utf8')) //Solution!
    res.sendFile(file);
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ })
];