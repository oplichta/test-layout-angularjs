export default (ngModule) => {
  describe('Footer component', function () {
    var $scope, $element, directiveTemplate;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function ($rootScope, $compile) {
      $scope = $rootScope.$new();
      directiveTemplate = '<footer></footer>';
      $element = $compile(directiveTemplate)($scope);
      $scope.$digest();
    }));

    it('should contain text', function () {
      var elementText = $element.text();
      console.log(elementText);
      expect(elementText).not.toEqual('');
    });
  });
};
