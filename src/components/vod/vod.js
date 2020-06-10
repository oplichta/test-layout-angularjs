export default (ngModule) => {
  require('./vod.scss');
  ngModule.component('vod', {
    template: require('./vod.html'),
    controller: VodController,
    controllerAs: 'VodController',
  });

  VodController.$inject = ['$scope'];
  function VodController($scope) {
    $scope.moveLength = 0;
    const step = 408;
    const maxLength = 816;

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
  }
};
