export default (ngModule) => {
  require('./now-online.scss');
  ngModule.component('nowOnline', {
    template: require('./now-online.html'),
    controller: NowOnlineController,
    controllerAs: 'NowOnlineController',
  });

  NowOnlineController.$inject = ['$scope'];
  function NowOnlineController($scope) {
    $scope.moveLength = 0;
    $scope.nowWatching = 258;
    const step = 408;
    const maxLength = 816;

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
  }
};
