export default (ngModule) => {
  require('./mobile-app.scss');
  ngModule.component('mobileApp', {
    template: require('./mobile-app.html'),
  });
};
