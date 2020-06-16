export default (ngModule) => {
  describe('NowOnlineComponent', function () {
    var $scope, $element, directiveTemplate;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function ($rootScope, $compile) {
      $scope = $rootScope.$new();
      directiveTemplate = '<now-online></now-online>';
      $element = $compile(directiveTemplate)($scope);
      $scope.$digest();
    }));

    it('should contain text', function () {
      var elementText = $element.text();
      expect(elementText).not.toEqual('');
    });
  });
};
