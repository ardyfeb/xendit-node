import ovo  from './ovo';
import dana from './dana';
import linkaja from './linkaja';
import { XenditOptions } from '../xendit_opts';

export = class EWallet {
  constructor({});
  static _constructorWithInjectedXenditOpts: (
    opts: XenditOptions,
  ) => typeof EWallet;
  createOVOPayment = ovo.createPayment;
  getOVOPaymentStatusByExtID = ovo.getByExtID;
  createDanaPayment = dana.createPayment;
  getDanaPaymentStatusByExtID = dana.getByExtID;
  createLinkAjaPayment = linkaja.createPayment;
};