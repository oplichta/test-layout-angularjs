export default (ngModule) => {
  require('./support.scss');
  ngModule.component('support', {
    template: require('./support.html'),
  });
};
