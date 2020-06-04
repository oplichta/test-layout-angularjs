export default (ngModule) => {
  require('./lte-packet.scss');
  ngModule.component('ltePacket', {
    template: require('./lte-packet.html'),
  });
};
