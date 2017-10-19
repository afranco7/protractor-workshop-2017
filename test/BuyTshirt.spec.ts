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

describe('Given shopping page', () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('Process to Buy a t-shirt', () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage  = new ProductListPage();
      const productDetailPage: ProductDetailPage  = new ProductDetailPage();
      const productAddedModalPage: ProductAddedModalPage  = new ProductAddedModalPage();
      const summaryStepPage: SummaryStepPage  = new SummaryStepPage();

      await menuContentPage.goToTShirtMenu();
      await productListPage.selectProduct();
      await productDetailPage.addToCart();
      await productAddedModalPage.proceedToCheckout();
      await summaryStepPage.proceedToCheckout();
    });

    describe('Login in the app', () => {
      beforeAll(async () => {
        const signInStepPage: SignInStepPage  = new SignInStepPage();
        await signInStepPage.login('aperdomobo@gmail.com','WorkshopProtractor');
      });

      describe('Select the address', () => {
        beforeAll(async () => {
          const addressStepPage: AddressStepPage  = new AddressStepPage();
          await addressStepPage.proceedToCheckout();
        });

        describe('Pay to the bank', () => {
          const orderResumePage: OrderResumePage  = new OrderResumePage();

          beforeAll(async () => {
            const bankPaymentPage: BankPaymentPage  = new BankPaymentPage();
            const paymentStepPage: PaymentStepPage  = new PaymentStepPage();
            const shippingStepPage: ShippingStepPage  = new ShippingStepPage();

            await shippingStepPage.acceptAndContinue();
            await paymentStepPage.payByBankWire();
            await bankPaymentPage.confirmOrder();
          });

          it('then should the t-shirt be bought', async () => {
            await expect(orderResumePage.getOrderTitle())
            .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
