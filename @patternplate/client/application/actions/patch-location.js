'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _lodash = require('lodash');

var _reactRouterRedux = require('react-router-redux');

exports.default = patchLocation;
var type = exports.type = 'PATCH_LOCATION';

function patchLocation(payload) {
	return function (dispatch, getState) {
		var state = getState();
		var location = state.routing.locationBeforeTransitions;
		dispatch((0, _reactRouterRedux.push)((0, _lodash.merge)({}, location, payload)));
	};
}

patchLocation.type = type;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL3BhdGNoLWxvY2F0aW9uLmpzIl0sIm5hbWVzIjpbInBhdGNoTG9jYXRpb24iLCJ0eXBlIiwicGF5bG9hZCIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJzdGF0ZSIsImxvY2F0aW9uIiwicm91dGluZyIsImxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7a0JBRWVBLGE7QUFDUixJQUFNQyxzQkFBTyxnQkFBYjs7QUFFUCxTQUFTRCxhQUFULENBQXVCRSxPQUF2QixFQUFnQztBQUMvQixRQUFPLFVBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUM5QixNQUFNQyxRQUFRRCxVQUFkO0FBQ0EsTUFBTUUsV0FBV0QsTUFBTUUsT0FBTixDQUFjQyx5QkFBL0I7QUFDQUwsV0FBUyw0QkFBSyxtQkFBTSxFQUFOLEVBQVVHLFFBQVYsRUFBb0JKLE9BQXBCLENBQUwsQ0FBVDtBQUNBLEVBSkQ7QUFLQTs7QUFFREYsY0FBY0MsSUFBZCxHQUFxQkEsSUFBckIiLCJmaWxlIjoicGF0Y2gtbG9jYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21lcmdlfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtwdXNofSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuXG5leHBvcnQgZGVmYXVsdCBwYXRjaExvY2F0aW9uO1xuZXhwb3J0IGNvbnN0IHR5cGUgPSAnUEFUQ0hfTE9DQVRJT04nO1xuXG5mdW5jdGlvbiBwYXRjaExvY2F0aW9uKHBheWxvYWQpIHtcblx0cmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcblx0XHRjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG5cdFx0Y29uc3QgbG9jYXRpb24gPSBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnM7XG5cdFx0ZGlzcGF0Y2gocHVzaChtZXJnZSh7fSwgbG9jYXRpb24sIHBheWxvYWQpKSk7XG5cdH07XG59XG5cbnBhdGNoTG9jYXRpb24udHlwZSA9IHR5cGU7XG4iXX0=