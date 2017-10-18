import { browser } from 'protractor';
import { MenuContentPage,
         AddressStepPage,
         BankPaymentPage,
         OrderResumePage,
         PaymentStepPage,
         ProductAddedModalPage,
         ProductDetailPage,
         ProductListPage,
         ShippingStepPage,
         SummaryStepPage,
         SignInStepPage
       } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const addressStepPage: AddressStepPage  = new AddressStepPage();
  const bankPaymentPage: BankPaymentPage  = new BankPaymentPage();
  const orderResumePage: OrderResumePage  = new OrderResumePage();
  const paymentStepPage: PaymentStepPage  = new PaymentStepPage();
  const productAddedModalPage: ProductAddedModalPage  = new ProductAddedModalPage();
  const productDetailPage: ProductDetailPage  = new ProductDetailPage();
  const productListPage: ProductListPage  = new ProductListPage();
  const shippingStepPage: ShippingStepPage  = new ShippingStepPage();
  const summaryStepPage: SummaryStepPage  = new SummaryStepPage();
  const signInStepPage: SignInStepPage  = new SignInStepPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.selectProduct();
    await productDetailPage.addToCart();
    await productAddedModalPage.proceedToCheckout();
    await summaryStepPage.proceedToCheckout();
    await signInStepPage.login('aperdomobo@gmail.com','WorkshopProtractor');
    await addressStepPage.proceedToCheckout();
    await shippingStepPage.acceptAndContinue();
    await paymentStepPage.payByBankWire();
    await bankPaymentPage.confirmOrder();

    await expect(orderResumePage.getOrderTitle())
    .toBe('Your order on My Store is complete.');
  });
});
