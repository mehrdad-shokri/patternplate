'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxActions = require('redux-actions');

var defaultValue = 'index';

function onEnvironmentLocationChange(_, action) {
	return action.payload.query.environment || defaultValue;
}

exports.default = (0, _reduxActions.handleActions)({
	'@@router/LOCATION_CHANGE': onEnvironmentLocationChange
}, defaultValue);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9lbnZpcm9ubWVudC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0VmFsdWUiLCJvbkVudmlyb25tZW50TG9jYXRpb25DaGFuZ2UiLCJfIiwiYWN0aW9uIiwicGF5bG9hZCIsInF1ZXJ5IiwiZW52aXJvbm1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLElBQU1BLGVBQWUsT0FBckI7O0FBRUEsU0FBU0MsMkJBQVQsQ0FBcUNDLENBQXJDLEVBQXdDQyxNQUF4QyxFQUFnRDtBQUMvQyxRQUFPQSxPQUFPQyxPQUFQLENBQWVDLEtBQWYsQ0FBcUJDLFdBQXJCLElBQW9DTixZQUEzQztBQUNBOztrQkFFYyxpQ0FBYztBQUM1Qiw2QkFBNEJDO0FBREEsQ0FBZCxFQUVaRCxZQUZZLEMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2hhbmRsZUFjdGlvbnN9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuXG5jb25zdCBkZWZhdWx0VmFsdWUgPSAnaW5kZXgnO1xuXG5mdW5jdGlvbiBvbkVudmlyb25tZW50TG9jYXRpb25DaGFuZ2UoXywgYWN0aW9uKSB7XG5cdHJldHVybiBhY3Rpb24ucGF5bG9hZC5xdWVyeS5lbnZpcm9ubWVudCB8fCBkZWZhdWx0VmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuXHQnQEByb3V0ZXIvTE9DQVRJT05fQ0hBTkdFJzogb25FbnZpcm9ubWVudExvY2F0aW9uQ2hhbmdlXG59LCBkZWZhdWx0VmFsdWUpO1xuIl19