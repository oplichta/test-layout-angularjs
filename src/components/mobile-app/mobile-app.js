export default (ngModule) => {
  require('./mobile-app.scss');
  // declare $log in array for production... if we don't use ng-annotate-loader
  ngModule.component('mobileApp', {
    template: require('./mobile-app.html'),
  });
};
