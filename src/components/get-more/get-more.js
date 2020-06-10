export default (ngModule) => {
  require('./get-more.scss');
  ngModule.component('getMore', {
    template: require('./get-more.html'),
    controller: GetMoreController,
    controllerAs: 'GetMoreController',
  });

  GetMoreController.$inject = ['$scope'];
  function GetMoreController($scope) {
    $scope.slideId = 0;
    $scope.moveLength = 0;
    const step = 800;

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
