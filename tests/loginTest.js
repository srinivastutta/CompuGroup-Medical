let loginPage = require('../pages/loginPage')
let Wait = require ('../utils/wait')

describe('Login Features', function () {

    browser.ignoreSynchronization = true;

    it('Verify CLICKDOC Image is Displayed on HomePage', function () {

        loginPage.launchBrowser(browser.params.url);
        loginPage.validateLoginImage();
        console.log("==========================================================")

    });

    it('Verify Login Dialog Box Elements are Displayed ', function () {
        loginPage.clickOnProfileButton();
        Wait.genericWait(element(by.css('span.iframe-dialog-close, icon, icon-CO_close')));
        loginPage.validateCloseButtonIsDisplayed();
        let f1 = element(by.css('#iframeDialog')).getWebElement();
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
        loginPage.enterEmailInput(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        loginPage.enterEmailInput(browser.params.invalidUserId);
        loginPage.enterPasswordInput(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        loginPage.enterPasswordInput(protractor.Key.chord(protractor.Key.DELETE));
        loginPage.clickOnLoginButton();
        loginPage.validatePasswordInputIsDisplayed();
        console.log("==========================================================")

    })

    it('Verify Login functionality with valid email and valid password', function () {
        loginPage.enterEmailInput(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        loginPage.enterEmailInput(browser.params.validUserId);
        loginPage.enterPasswordInput(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        loginPage.enterPasswordInput(browser.params.validPassword);
        loginPage.clickOnLoginButton();
        
        Wait.genericWait(element(by.css('div[class="profile-picture-container ng-star-inserted"]>app-avatar>div>img[alt="avatar-picture"]')));
        Wait.waitForElementIsDisplayed(element(by.xpath('//*[@id="header-container"]/div[1]/span')));
        loginPage.titleValidation(browser.params.userProfileTitle)

        loginPage.userIconValidation();
        loginPage.userNameValidation(browser.params.userName)
        console.log("==========================================================")
    })

    it('Verify Profile Button having MyProfile and Logout Elements', function () {
        loginPage.clickOnMyProfileDropDown();
        Wait.genericWait(element(by.css('div.dropdown-container>a[routerlink="my-profile"]>div>span:nth-of-type(2)')));
        loginPage.validateMyProfileIsDisplayed();
        loginPage.validateLogoutIsDisplayed();

        console.log("==========================================================")
    })

    it('Verify LogOut Functionality ', function () {
        loginPage.clickOnLogout();
        Wait.genericWait(element(by.css('ul#menu-header-menu>li:nth-of-type(8)>a')));
        loginPage.validateProfileButtonIsDisplayed();
        
        console.log("==========================================================")
    })

});