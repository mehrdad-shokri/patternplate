'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _ = require('./');

exports.default = changeEnvironment;
var type = exports.type = 'CHANGE_ENVIRONMENT';

function changeEnvironment(environment) {
	return function (dispatch) {
		dispatch((0, _.patchLocation)({
			query: { environment: environment }
		}));
	};
}

changeEnvironment.type = type;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL2NoYW5nZS1lbnZpcm9ubWVudC5qcyJdLCJuYW1lcyI6WyJjaGFuZ2VFbnZpcm9ubWVudCIsInR5cGUiLCJlbnZpcm9ubWVudCIsImRpc3BhdGNoIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7a0JBRWVBLGlCO0FBQ1IsSUFBTUMsc0JBQU8sb0JBQWI7O0FBRVAsU0FBU0QsaUJBQVQsQ0FBMkJFLFdBQTNCLEVBQXdDO0FBQ3ZDLFFBQU8sb0JBQVk7QUFDbEJDLFdBQVMscUJBQWM7QUFDdEJDLFVBQU8sRUFBQ0Ysd0JBQUQ7QUFEZSxHQUFkLENBQVQ7QUFHQSxFQUpEO0FBS0E7O0FBRURGLGtCQUFrQkMsSUFBbEIsR0FBeUJBLElBQXpCIiwiZmlsZSI6ImNoYW5nZS1lbnZpcm9ubWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cGF0Y2hMb2NhdGlvbn0gZnJvbSAnLi8nO1xuXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VFbnZpcm9ubWVudDtcbmV4cG9ydCBjb25zdCB0eXBlID0gJ0NIQU5HRV9FTlZJUk9OTUVOVCc7XG5cbmZ1bmN0aW9uIGNoYW5nZUVudmlyb25tZW50KGVudmlyb25tZW50KSB7XG5cdHJldHVybiBkaXNwYXRjaCA9PiB7XG5cdFx0ZGlzcGF0Y2gocGF0Y2hMb2NhdGlvbih7XG5cdFx0XHRxdWVyeToge2Vudmlyb25tZW50fVxuXHRcdH0pKTtcblx0fTtcbn1cblxuY2hhbmdlRW52aXJvbm1lbnQudHlwZSA9IHR5cGU7XG4iXX0=