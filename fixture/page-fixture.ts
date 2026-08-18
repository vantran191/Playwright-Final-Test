import { test as base } from '@playwright/test';
import { LoginPage } from '../page-object/login-page';
import { HomePage } from '../page-object/home-page';
import { CartPage } from '../page-object/cart-page';
import { CheckoutPage } from '../page-object/checkout-page';
import { ProfilePage } from '../page-object/profile-page';

type AppPages = {
    loginPage: LoginPage;
    homePage: HomePage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    profilePage: ProfilePage;
};

export const test = base.extend<AppPages>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },

    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page)); 
    },

    profilePage: async ({ page }, use) => { 
        await use(new ProfilePage(page));
    }

});

export { expect } from '@playwright/test';