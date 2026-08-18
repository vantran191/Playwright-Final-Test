import { Locator, Page, expect } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    
    readonly nameInput: Locator;
    readonly phoneInput: Locator;
    readonly addressInput: Locator;
    readonly codMethodRadio: Locator;
    readonly submitOrderButton: Locator;
    
    readonly successHeading: Locator;
    readonly successNameText: Locator;
    readonly successAddressText: Locator;
    readonly successPaymentMethodText: Locator;

    constructor(page: Page) {
        this.page = page;

        this.nameInput = page.getByTestId('checkout-name');
        this.phoneInput = page.getByTestId('checkout-phone');
        this.addressInput = page.getByTestId('checkout-address');
        
        this.codMethodRadio = page.getByText('Thanh toán khi nhận hàng (COD)');
        this.submitOrderButton = page.getByTestId('checkout-submit');

        this.successHeading = page.getByTestId('checkout-success-heading');
        this.successNameText = page.locator('text=Tran Van B');
        this.successAddressText = page.locator('text=duong Nguyen Xi');
        this.successPaymentMethodText = page.getByText('💵 Tiền mặt khi nhận hàng');
    }

    async fillReceiverInfo(name: string, phone: string, address: string) {
        await this.nameInput.fill(name);
        await this.phoneInput.fill(phone);
        await this.addressInput.fill(address);
    }

    async selectCODAndSubmit() {
        await this.codMethodRadio.click();
        await this.submitOrderButton.click();
    }

    async verifyCheckoutSuccess(expectedName: string, expectedAddress: string) {
        
        await expect(this.successHeading).toBeVisible();
        
        
        await expect(this.page.locator(`text=${expectedName}`)).toBeVisible();
        await expect(this.page.locator(`text=${expectedAddress}`)).toBeVisible();
        await expect(this.successPaymentMethodText).toBeVisible();
    }
}
