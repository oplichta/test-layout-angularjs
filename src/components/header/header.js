export default (ngModule) => {
  require('./header.scss');
  ngModule.component('header', {
    template: require('./header.html'),
  });
};
