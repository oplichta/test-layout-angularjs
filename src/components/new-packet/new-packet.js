export default (ngModule) => {
  require('./new-packet.scss');
  ngModule.component('newPacket', {
    template: require('./new-packet.html'),
  });
};
