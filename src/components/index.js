import headerComponent from './header/header';
import getMoreComponent from './get-more/get-more';
import vodComponent from './vod/vod';
import newPacketComponent from './new-packet/new-packet';
import nowOnlineComponent from './now-online/now-online';
import ltePacketComponent from './lte-packet/lte-packet';
import supportComponent from './support/support';
import mobileAppComponent from './mobile-app/mobile-app';
import footerComponent from './footer/footer';

import headerTest from './header/header.test';
import getMoreTest from './get-more/get-more.test';
import vodTest from './vod/vod.test';
import newPacketTest from './new-packet/new-packet.test';
import nowOnlineTest from './now-online/now-online.test';
import ltePacketTest from './lte-packet/lte-packet.test';
import supportTest from './support/support.test';
import mobileAppTest from './mobile-app/mobile-app.test';
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

  headerTest(ngModule);
  getMoreTest(ngModule);
  vodTest(ngModule);
  newPacketTest(ngModule);
  nowOnlineTest(ngModule);
  ltePacketTest(ngModule);
  supportTest(ngModule);
  mobileAppTest(ngModule);
  footerTest(ngModule);
};
