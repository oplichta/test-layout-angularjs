export default (ngModule) => {
  require('./get-more.scss');
  // declare $log in array for production... if we don't use ng-annotate-loader
  ngModule.component('getMore', {
    template: require('./get-more.html'),
  });
};
