(function(angular, $, _) {

  angular.module('civicase').directive('civicaseApi3Ctrl', function() {
    return {
      restrict: 'EA',
      scope: {
        civicaseApi3Ctrl: '=',
        civicaseApi3: '@',
        civicaseApi3Refresh: '@'
      },
      controllerAs: 'civicaseApi3Ctrl',
      controller: function($scope, $parse, crmThrottle, crmApi) {
        var ctrl = this;

        // CONSIDER: Trade-offs of upfront vs ongoing evaluation.
        var parts = $parse($scope.civicaseApi3)($scope.$parent);
        ctrl.entity = parts[0];
        ctrl.action = parts[1];
        ctrl.params = parts[2];
        ctrl.result = {};

        ctrl.refresh = function refresh() {
          crmThrottle(function () {
            return crmApi(ctrl.entity, ctrl.action, ctrl.params)
              .then(function (response) {
                ctrl.result = response;
              });
          });
        };

        $scope.civicaseApi3Ctrl = this;

        var mode = $scope.civicaseApi3Refresh ? $scope.civicaseApi3Refresh : 'auto';
        switch (mode) {
          case 'auto': $scope.$watchCollection('civicaseApi3Ctrl.params', ctrl.refresh); break;
          case 'init': ctrl.refresh(); break;
          case 'manual': break;
          default: throw 'Unrecognized refresh mode: '+ mode;
        }
      }
    };
  });

})(angular, CRM.$, CRM._);
