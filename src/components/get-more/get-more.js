export default (ngModule) => {
  require('./get-more.scss');
  ngModule.component('getMore', {
    template: require('./get-more.html'),
  });
};
