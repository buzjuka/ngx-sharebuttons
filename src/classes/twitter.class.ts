/** TWITTER DOCS: https://dev.twitter.com/web/tweet-button/web-intent */
import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share-buttons.models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export class TwitterButton implements IShareButton {

  constructor(public prop: ShareButtonProp) {
  }

  link(url: string, args?: ShareButtonArgs) {

    let shareUrl = this.shareUrl(args.mobile) + url;

    if (args.description) {
      shareUrl += '&text=' + args.description;
    }

    if (args.via) {
      shareUrl += '&via=' + args.via;
    }

    if (args.tags) {
      shareUrl += '&hashtags=' + args.tags;
    }

    return shareUrl;
  }

  shareUrl(mobileType: string) {
    switch (mobileType) {
      case 'Android': return this.prop.androidUrl
      case 'iOS': return this.prop.iosUrl
      default: return this.prop.shareUrl
    }
  }

  count() {

    return Observable.empty();
  }

}
