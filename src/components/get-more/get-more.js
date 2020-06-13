export default (ngModule) => {
  require('./get-more.scss');
  ngModule.component('getMore', {
    template: require('./get-more.html'),
    controller: GetMoreController,
    controllerAs: 'GetMoreController',
  });

  GetMoreController.$inject = ['$scope', '$window'];
  function GetMoreController($scope, $window) {
    $scope.slideId = 0;
    $scope.moveLength = 0;
    let step = 800;

    angular.element($window).bind('resize', function () {
      $scope.width = $window.innerWidth;
      if ($scope.width < 480) {
        step = 480;
      } else {
        step = 800;
      }
    });

    $scope.goToSlideId = (slideId) => {
      if (slideId !== $scope.slideId) {
        $scope.moveLength += step * slideId;
      } else {
        $scope.moveLength = 0;
      }
    };

    $scope.scrollToPanel = (id) => {
      const panelsObj = {
        one: 0,
        two: step,
        three: step * 2,
      };

      $scope.moveLength = panelsObj[id];
    };

    $scope.dotActive = (id) => {
      if (id === 'one' && $scope.moveLength === 0) {
        return 'active';
      } else if (id === 'two' && $scope.moveLength === step) {
        return 'active';
      } else if (id === 'three' && $scope.moveLength === step * 2) {
        return 'active';
      } else {
        return 'inactive';
      }
    };
  }
};
