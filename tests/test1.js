let loginPage = require('../pages/loginPage')
let searchPage = require('../pages/searchPage')
let Wait = require('../utils/wait')

describe('New Feature', function () {

    it('New Test', function () {
        loginPage.launchBrowser(browser.params.url);
        loginPage.validateLoginImage();

        loginPage.clickOnProfileButton();
        loginPage.validateCloseButtonIsDisplayed();
        
        let f1 = element(by.css('#iframeDialog')).getWebElement();
        browser.switchTo().frame(f1);
        Wait.genericWait(element(by.css('input#mat-input-0')));
        loginPage.enterEmailInput(browser.params.validUserId);
        loginPage.enterPasswordInput(browser.params.validPassword);
        loginPage.clickOnLoginButton();
        //expect(false).toBe(true);
        console.log("==========================================================")


    })

})