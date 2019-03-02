app.directive('projectInfo', function() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'scripts/directives/projectInfo.html'
    };
  });