import { test } from '../fixture/page-fixture';
import loginData from '../data/login-data.json';
import checkoutData from '../data/checkout-data.json'; 

test.describe('Order Placement', () => {

    
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateTo();
        await loginPage.login(
            loginData.username,
            loginData.password
        );
    });

    test('Checkout succeed valid with valid receiver info (COD)', async ({ 
        homePage, 
        cartPage, 
        checkoutPage 
    }) => {
        
        
        await homePage.addFirstProductToCart();
        await homePage.openCart();
        await cartPage.increaseQuantity();
        
        await cartPage.verifyCartQuantity(2);
        await cartPage.proceedToCheckout();

       
        await checkoutPage.fillReceiverInfo(
            checkoutData.receiverName, 
            checkoutData.receiverPhone, 
            checkoutData.receiverAddress
        );

        await checkoutPage.selectCODAndSubmit();

       
        await checkoutPage.verifyCheckoutSuccess(
            checkoutData.receiverName, 
            checkoutData.receiverAddress
        );
    });

});
