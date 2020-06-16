import headerComponent from './header/header';
import getMoreComponent from './get-more/get-more';
import vodComponent from './vod/vod';
import newPacketComponent from './new-packet/new-packet';
import nowOnlineComponent from './now-online/now-online';
import ltePacketComponent from './lte-packet/lte-packet';
import supportComponent from './support/support';
import mobileAppComponent from './mobile-app/mobile-app';
import footerComponent from './footer/footer';
import footerTest from './footer/footer.test';

export default (ngModule) => {
  headerComponent(ngModule);
  getMoreComponent(ngModule);
  vodComponent(ngModule);
  newPacketComponent(ngModule);
  nowOnlineComponent(ngModule);
  ltePacketComponent(ngModule);
  supportComponent(ngModule);
  mobileAppComponent(ngModule);
  footerComponent(ngModule);
  footerTest(ngModule);
};
