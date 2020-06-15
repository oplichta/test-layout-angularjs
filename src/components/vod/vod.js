export default (ngModule) => {
  require('./vod.scss');
  ngModule.component('vod', {
    template: require('./vod.html'),
    controller: VodController,
    controllerAs: 'VodController',
  });

  VodController.$inject = ['$scope', '$window', '$interval'];
  function VodController($scope, $window, $interval) {
    $scope.moveLength = 0;
    $scope.showBuyNow = false;
    let step = 408;
    let maxLength = step * 2;

    $scope.setSliderStep = () => {
      $scope.width = $window.innerWidth;

      if ($scope.width <= 480) {
        step = $scope.width;
        maxLength = step * 2;
      } else if ($scope.width > 480 && $scope.width <= 768) {
        step = $scope.width / 2;
        maxLength = step;
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
    }, 6000);

    $scope.buyNow = () => {
      alert('You bought a movie!');
    };
  }
};
