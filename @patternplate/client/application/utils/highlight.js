'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _arson = require('arson');

var _arson2 = _interopRequireDefault(_arson);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = highlight;


var startWorker = (0, _lodash.memoize)(function (url) {
	var _global = global,
	    Worker = _global.Worker;

	return new Worker(url);
});

function highlight(options) {
	return new _promise2.default(function (resolve, reject) {
		var worker = startWorker(options.worker);

		var onWorkerMessage = function onWorkerMessage(e) {
			var data = _arson2.default.parse(e.data);

			if (data.id !== options.id) {
				return;
			}

			if (data.payload.type === 'error') {
				return reject(data.payload.error);
			}

			resolve(data);
			worker.removeEventListener('message', onWorkerMessage);
		};

		worker.addEventListener('message', onWorkerMessage);
		worker.postMessage(_arson2.default.stringify(options));
	});
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi91dGlscy9oaWdobGlnaHQuanMiXSwibmFtZXMiOlsiaGlnaGxpZ2h0Iiwic3RhcnRXb3JrZXIiLCJnbG9iYWwiLCJXb3JrZXIiLCJ1cmwiLCJvcHRpb25zIiwicmVzb2x2ZSIsInJlamVjdCIsIndvcmtlciIsIm9uV29ya2VyTWVzc2FnZSIsImRhdGEiLCJwYXJzZSIsImUiLCJpZCIsInBheWxvYWQiLCJ0eXBlIiwiZXJyb3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBvc3RNZXNzYWdlIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztrQkFFZUEsUzs7O0FBRWYsSUFBTUMsY0FBYyxxQkFBUSxlQUFPO0FBQUEsZUFDakJDLE1BRGlCO0FBQUEsS0FDM0JDLE1BRDJCLFdBQzNCQSxNQUQyQjs7QUFFbEMsUUFBTyxJQUFJQSxNQUFKLENBQVdDLEdBQVgsQ0FBUDtBQUNBLENBSG1CLENBQXBCOztBQUtBLFNBQVNKLFNBQVQsQ0FBbUJLLE9BQW5CLEVBQTRCO0FBQzNCLFFBQU8sc0JBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3ZDLE1BQU1DLFNBQVNQLFlBQVlJLFFBQVFHLE1BQXBCLENBQWY7O0FBRUEsTUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixJQUFLO0FBQzVCLE9BQU1DLE9BQU8sZ0JBQU1DLEtBQU4sQ0FBWUMsRUFBRUYsSUFBZCxDQUFiOztBQUVBLE9BQUlBLEtBQUtHLEVBQUwsS0FBWVIsUUFBUVEsRUFBeEIsRUFBNEI7QUFDM0I7QUFDQTs7QUFFRCxPQUFJSCxLQUFLSSxPQUFMLENBQWFDLElBQWIsS0FBc0IsT0FBMUIsRUFBbUM7QUFDbEMsV0FBT1IsT0FBT0csS0FBS0ksT0FBTCxDQUFhRSxLQUFwQixDQUFQO0FBQ0E7O0FBRURWLFdBQVFJLElBQVI7QUFDQUYsVUFBT1MsbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0NSLGVBQXRDO0FBQ0EsR0FiRDs7QUFlQUQsU0FBT1UsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNULGVBQW5DO0FBQ0FELFNBQU9XLFdBQVAsQ0FBbUIsZ0JBQU1DLFNBQU4sQ0FBZ0JmLE9BQWhCLENBQW5CO0FBQ0EsRUFwQk0sQ0FBUDtBQXFCQSIsImZpbGUiOiJoaWdobGlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVJTT04gZnJvbSAnYXJzb24nO1xuaW1wb3J0IHttZW1vaXplfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBoaWdobGlnaHQ7XG5cbmNvbnN0IHN0YXJ0V29ya2VyID0gbWVtb2l6ZSh1cmwgPT4ge1xuXHRjb25zdCB7V29ya2VyfSA9IGdsb2JhbDtcblx0cmV0dXJuIG5ldyBXb3JrZXIodXJsKTtcbn0pO1xuXG5mdW5jdGlvbiBoaWdobGlnaHQob3B0aW9ucykge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGNvbnN0IHdvcmtlciA9IHN0YXJ0V29ya2VyKG9wdGlvbnMud29ya2VyKTtcblxuXHRcdGNvbnN0IG9uV29ya2VyTWVzc2FnZSA9IGUgPT4ge1xuXHRcdFx0Y29uc3QgZGF0YSA9IEFSU09OLnBhcnNlKGUuZGF0YSk7XG5cblx0XHRcdGlmIChkYXRhLmlkICE9PSBvcHRpb25zLmlkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGRhdGEucGF5bG9hZC50eXBlID09PSAnZXJyb3InKSB7XG5cdFx0XHRcdHJldHVybiByZWplY3QoZGF0YS5wYXlsb2FkLmVycm9yKTtcblx0XHRcdH1cblxuXHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Xb3JrZXJNZXNzYWdlKTtcblx0XHR9O1xuXG5cdFx0d29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbldvcmtlck1lc3NhZ2UpO1xuXHRcdHdvcmtlci5wb3N0TWVzc2FnZShBUlNPTi5zdHJpbmdpZnkob3B0aW9ucykpO1xuXHR9KTtcbn1cbiJdfQ==