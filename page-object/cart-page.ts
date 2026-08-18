import { Locator, Page, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    readonly increaseQuantityButton: Locator;
     readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.increaseQuantityButton = page.getByRole('button', { name: '+' });
        this.checkoutButton = page.getByRole('button', { name: 'Thanh toán ngay' });
    }

    async increaseQuantity() {
        await this.increaseQuantityButton.click();
    }

    async verifyCartQuantity(expectedQty: number) {
        await expect(
            this.page.getByRole('heading', {
                name: `Giỏ hàng của bạn (${expectedQty})`
            })
        ).toBeVisible();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}