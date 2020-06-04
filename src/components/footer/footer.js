export default (ngModule) => {
  require('./footer.scss');
  // declare $log in array for production... if we don't use ng-annotate-loader
  ngModule.component('footer', {
    template: require('./footer.html'),
  });
};
