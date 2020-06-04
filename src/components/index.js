import getMoreComponent from './get-more/getMore';
import vodComponent from './vod/vod';

export default (ngModule) => {
  getMoreComponent(ngModule);
  vodComponent(ngModule);
};
