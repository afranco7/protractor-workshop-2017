import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private get product(): ElementFinder {
    return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
  }

  public selectProduct(): promise.Promise<void> {
    return this.product.click();
  }
}
