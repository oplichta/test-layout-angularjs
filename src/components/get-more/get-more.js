export default (ngModule) => {
  require('./get-more.scss');
  ngModule.component('getMore', {
    template: require('./get-more.html'),
    controller: GetMoreController,
    controllerAs: 'GetMoreController',
  });

  GetMoreController.$inject = ['$scope'];
  function GetMoreController($scope) {
    $scope.test = 'test';
    console.log($scope.test);
  }
};
