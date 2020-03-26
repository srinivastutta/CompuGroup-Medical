let loginPage = require('../pages/loginPage')
let Wait = require ('../utils/wait')

describe('Login Features', function () {

    //browser.ignoreSynchronization = true;

    it('Verify CLICKDOC Image is Displayed on HomePage', function () {

        loginPage.launchBrowser(browser.params.url);
        loginPage.validateLoginImage();
        console.log("==========================================================")

    });

    it('Verify Login Dialog Box Elements are Displayed ', function () {
        loginPage.clickOnProfileButton();
        loginPage.validateCloseButtonIsDisplayed();
        let f1 = element(by.xpath('//*[@id="iframeDialog"]')).getWebElement();
        browser.switchTo().frame(f1);
        loginPage.validateEmailInputIsDisplayed();
        loginPage.validatePasswordInputIsDisplayed();
        loginPage.validateRememberPasswordIsDisplayed();
        loginPage.validateRegistrationButtonIsDisplayed()
        loginPage.validateLoginButtonIsDisplayed();
        console.log("==========================================================")

    })

    it('Verify Login functionality wihout Credentials  ', function () {
        loginPage.clickOnLoginButton();
        loginPage.validateEmailInputIsDisplayed();
        loginPage.validatePasswordInputIsDisplayed();
        console.log("==========================================================")

    })

    it('Verify Login functionality with valid email and invalid password', function () {
        loginPage.enterEmailInput(browser.params.validUserId);
        loginPage.enterPasswordInput(browser.params.invalidPassword);
        loginPage.clickOnLoginButton();
        loginPage.validateLoginMessage();
        console.log("==========================================================")

    })

    it('Verify Login functionality with invalid email and empty password', function () {
        browser.refresh();
        browser.sleep(3000)
        let f2 = element(by.xpath('//*[@id="iframeDialog"]')).getWebElement();
        browser.switchTo().frame(f2);
      
        loginPage.enterEmailInput(browser.params.invalidUserId);
        loginPage.clickOnLoginButton();
        loginPage.validatePasswordInputIsDisplayed();
        console.log("==========================================================")

    })

    it('Verify Login functionality with valid email and valid password', function () {
        browser.refresh();
        let f2 = element(by.xpath('//*[@id="iframeDialog"]')).getWebElement();
        browser.switchTo().frame(f2);
        loginPage.enterEmailInput(browser.params.validUserId);
        loginPage.enterPasswordInput(browser.params.validPassword);
        loginPage.clickOnLoginButton();
        browser.sleep(8000);
        loginPage.userNameValidation(browser.params.userName)
        loginPage.titleValidation(browser.params.userProfileTitle)
        loginPage.userIconValidation();
        console.log("==========================================================")
    })

    it('Verify Profile Button having MyProfile and Logout Elements', function () {
        loginPage.clickOnMyProfileDropDown();
        loginPage.validateMyProfileIsDisplayed();
        loginPage.validateLogoutIsDisplayed();

        console.log("==========================================================")
    })

    it('Verify LogOut Functionality ', function () {
        loginPage.clickOnLogout();
        browser.sleep(2000)
        loginPage.validateProfileButtonIsDisplayed();

        console.log("==========================================================")
    })

});