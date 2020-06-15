export default (ngModule) => {
  require('./get-more.scss');
  ngModule.component('getMore', {
    template: require('./get-more.html'),
    controller: GetMoreController,
    controllerAs: 'GetMoreController',
  });

  GetMoreController.$inject = ['$scope', '$window', '$interval'];
  function GetMoreController($scope, $window, $interval) {
    $scope.slideId = 0;
    $scope.moveLength = 0;
    let step = 800;
    let _id = 1;

    angular.element($window).bind('resize', function () {
      $scope.width = $window.innerWidth;
      if ($scope.width < 480) {
        step = 480;
      } else {
        step = 800;
      }
    });

    $scope.scrollToPanel = (id) => {
      const panelsObj = {
        one: 0,
        two: step,
        three: step * 2,
      };

      $scope.moveLength = panelsObj[id];
    };

    // scroll slide in interval
    $interval(() => {
      const panelIdObj = {
        0: 'one',
        1: 'two',
        2: 'three',
      };

      $scope.scrollToPanel(panelIdObj[_id]);
      $scope.dotActive(panelIdObj[_id]);

      _id += 1;
      if (_id > 2) _id = 0;
    }, 8000);

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
