export default (ngModule) => {
  require('./vod.scss');
  ngModule.component('vod', {
    template: require('./vod.html'),
    controller: VodController,
    controllerAs: 'VodController',
  });

  VodController.$inject = ['$scope', '$window'];
  function VodController($scope, $window) {
    $scope.moveLength = 0;
    $scope.showBuyNow = false;
    let step = 408;
    let maxLength = step * 2;

    angular.element($window).bind('resize', function () {
      $scope.width = $window.innerWidth;
      if ($scope.width > 480 && $scope.width <= 768) {
        step = $scope.width / 2;
        maxLength = step;
        console.log(maxLength);
      } else {
        step = 408;
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

    $scope.buyNow = () => {
      alert('You bought a movie!');
    };
  }
};
