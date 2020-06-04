export default (ngModule) => {
  require('./now-online.scss');
  // declare $log in array for production... if we don't use ng-annotate-loader
  ngModule.component('nowOnline', {
    template: require('./now-online.html'),
  });
};
