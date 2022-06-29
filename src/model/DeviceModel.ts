export class DeviceModel {
  public Browser: BrowserModel = new BrowserModel();
  public Device: DeviceDataModel = new DeviceDataModel();
  get IsWeb(): boolean {
    return Object.keys(this.Device).some((key) => {
      return this.Device[key];
    });
  }
}

class BrowserModel {
  /**
   * IE
   */
  public Trident: boolean = navigator.userAgent.match('Trident') !== null;
  /**
   * opera
   */
  public Opera: boolean = navigator.userAgent.match('Opera') !== null;
  /**
   * Chrome
   */
  public Chrome: boolean =
    navigator.userAgent.match('Chrome') !== null &&
    navigator.userAgent.match('Safari') !== null;
  /**
   * Safari
   */
  public Safari: boolean =
    navigator.userAgent.match('Chrome') === null &&
    navigator.userAgent.match('Edg') === null &&
    navigator.userAgent.match('Safari') !== null;
  /**
   * Firefox
   */
  public Firefox: boolean = navigator.userAgent.match('Firefox') !== null;

  /**
   * Edge
   */
  public Edge: boolean =
    navigator.userAgent.match('Edg') !== null &&
    navigator.userAgent.match('Safari') !== null;
}

class DeviceDataModel {
  [index: string]: boolean;
  /**
   * iPhone
   */
  public iPhone: boolean = navigator.userAgent.match('iPhone') !== null;
  /**
   * iPad
   */
  public iPad: boolean = navigator.userAgent.match('iPad') !== null;
  /**
   * Android
   */
  public Android: boolean = navigator.userAgent.match('Android') !== null;
  /**
   * 其他品牌
   */
  public Mobile: boolean =
    navigator.userAgent.match(/AppleWebKit.*Mobile.*/) !== null;
}
