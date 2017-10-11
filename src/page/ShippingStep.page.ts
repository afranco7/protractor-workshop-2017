
import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private get acceptTermsAndConditionCheck(): ElementFinder {
    return $('#cgv');
  }

  private get proceedToCheckoutButton(): ElementFinder {
    return $('#form > p > button > span');
  }

  public async acceptAndContinue(): Promise<void> {
    await this.acceptTermsAndConditionCheck.click();    
    await this.proceedToCheckoutButton.click();
  }
}
