export default (ngModule) => {
  require('./footer.scss');
  ngModule.component('footer', {
    template: require('./footer.html'),
  });
};
