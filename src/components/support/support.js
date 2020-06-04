export default (ngModule) => {
  require('./support.scss');
  // declare $log in array for production... if we don't use ng-annotate-loader
  ngModule.component('support', {
    template: require('./support.html'),
  });
};
