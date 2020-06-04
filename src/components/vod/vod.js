export default (ngModule) => {
  require('./vod.scss');
  // declare $log in array for production... if we don't use ng-annotate-loader
  ngModule.component('vod', {
    template: require('./vod.html'),
  });
};
