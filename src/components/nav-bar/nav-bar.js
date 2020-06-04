export default (ngModule) => {
  require('./nav-bar.scss');
  // declare $log in array for production... if we don't use ng-annotate-loader
  ngModule.component('navBar', {
    template: require('./nav-bar.html'),
  });
};
