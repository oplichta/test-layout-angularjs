export default (ngModule) => {
  require('./new-packet.scss');
  // declare $log in array for production... if we don't use ng-annotate-loader
  ngModule.component('newPacket', {
    template: require('./new-packet.html'),
  });
};
