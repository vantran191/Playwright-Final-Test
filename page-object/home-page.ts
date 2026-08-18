import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    readonly addToCartButton: Locator;
    readonly cartButton: Locator;
    readonly profileHeaderLink: Locator;

    constructor(page: Page) {
        this.page = page;

        this.addToCartButton = page.locator('button').filter({
            hasText: 'Thêm vào giỏ'
        }).first();

        this.cartButton = page.locator('.cart-btn');
        this.profileHeaderLink = page.getByTestId('header-profile-link'); 
    }

    async addFirstProductToCart() {
        await this.addToCartButton.click();
    }

    async openCart() {
        await this.cartButton.click();
    }

    async goToProfile() {
        await this.profileHeaderLink.click();
    }
}