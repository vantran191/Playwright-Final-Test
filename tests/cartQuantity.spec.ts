import { test, expect } from '../fixture/page-fixture';
import loginData from '../data/login-data.json';

test.describe('Shopping Cart', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateTo();

        await loginPage.login(
            loginData.username,
            loginData.password
        );
    });

    test('Add item and increase quantity', async ({
        homePage,
        cartPage
    }) => {

        await homePage.addFirstProductToCart();

        await homePage.openCart();

        await cartPage.increaseQuantity();

        await cartPage.verifyCartQuantity(2);
    });

});