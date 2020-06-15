export default (ngModule) => {
  require('./now-online.scss');
  ngModule.component('nowOnline', {
    template: require('./now-online.html'),
    controller: NowOnlineController,
    controllerAs: 'NowOnlineController',
  });

  NowOnlineController.$inject = ['$scope', '$interval', '$window'];
  function NowOnlineController($scope, $interval, $window) {
    $scope.moveLength = 0;
    $scope.nowWatching = 258;
    let step = 408;
    let maxLength = step * 2;

    $scope.setSliderStep = () => {
      $scope.width = $window.innerWidth;

      if ($scope.width <= 480) {
        step = $scope.width;
        maxLength = step * 2;
      } else if ($scope.width > 480 && $scope.width <= 768) {
        step = $scope.width / 2;
        maxLength = step * 2;
      } else if ($scope.width > 768 && $scope.width <= 1024) {
        step = $scope.width * 0.34;
        maxLength = step * 2;
      } else {
        step = 408;
        maxLength = step * 2;
      }
    };

    $scope.howWithIs = () => {
      $scope.setSliderStep();
    };
    $scope.howWithIs();

    angular.element($window).bind('resize', function () {
      $scope.setSliderStep();
    });

    $scope.$watch('moveLength', function (newValue) {
      if (newValue === step) {
        $scope.nowWatching = 1376;
      } else if (newValue === maxLength) {
        $scope.nowWatching = 8673;
      } else {
        $scope.nowWatching = 258;
      }
    });

    $scope.scrollToPrevPanel = () => {
      if ($scope.moveLength >= maxLength) {
        $scope.moveLength -= step;
      } else if ($scope.moveLength === 0) {
        $scope.moveLength = maxLength;
      } else {
        $scope.moveLength = 0;
      }
    };

    $scope.scrollToNextPanel = () => {
      if ($scope.moveLength < maxLength) {
        $scope.moveLength += step;
      } else {
        $scope.moveLength = 0;
      }
    };

    $interval(() => {
      $scope.scrollToNextPanel();
    }, 4000);
  }
};
