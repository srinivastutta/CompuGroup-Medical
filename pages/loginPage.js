let loginPage = function () {

    //Login Page Elements
    let login_Image = element(by.xpath('//a[@class="navbar-brand"]//img'));
    let profile_Button = element(by.xpath('/html/body/header/div[1]/nav/div[2]/ul/li[8]/a'));
    let search_Element = element(by.xpath('//*[@id="menu-item-10"]/a'));

    //Login Dialog Box Elements
    let close_Button = element(by.xpath('//span[@class="iframe-dialog-close icon icon-CO_close"]'));
    let email_Input = element(by.xpath('//*[@id="mat-input-0"]'));
    let password_Input = element(by.xpath('/html/body/app-root/div/div/main/app-login/div/div[1]/div/div/div[2]/div[1]/form/mat-form-field[2]/div/div[1]/div[1]/input'));
    let remember_Password = element(by.xpath('/html/body/app-root/div/div/main/app-login/div/div[1]/div/div/div[2]/div[1]/div/span'));
    let registration_Button = element(by.xpath('/html/body/app-root/div/div/main/app-login/div/div[1]/div/div/div[2]/div[2]/div[1]/button'));
    let login_Button = element(by.xpath('/html/body/app-root/div/div/main/app-login/div/div[1]/div/div/div[2]/div[2]/div[2]/button'));
    let login_Message = element(by.xpath('/html/body/app-root/div/div/main/app-login/div/div[1]/div/div/div[2]/div[1]/div[1]/div/app-error-message/div/div/p'));

    //User Profile Elements
    let user_name = element(by.xpath('//*[@id="header-container"]/div[1]/span'));
    let user_Icon = element(by.xpath('/html/body/app-root/div[2]/app-header/div/div[2]/div/div[2]/ul/li[7]/a/app-avatar/div/img'));
    let myProfile_DropDown = element(by.xpath('/html/body/app-root/div[2]/app-header/div/div[2]/div/div[2]/ul/li[7]/a/div/span'));
    let myProfile_Element = element(by.xpath('/html/body/app-root/div[2]/app-header/div/div[2]/div/div[2]/ul/li[7]/div/div/a[1]/div/span[2]'));
    let logout_Element = element(by.xpath('/html/body/app-root/div[2]/app-header/div/div[2]/div/div[2]/ul/li[7]/div/div/a[2]/div/span[2]'));

    //Browser Initialization
    this.launchBrowser = function (url) {
        browser.driver.get(url);
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().implicitlyWait(10000);

    };

    this.titleValidation = function (titleName) {
        browser.getTitle().then(function (title) {
            console.log(title)
            expect(title).toEqual(titleName);
        })
    }

    //Login Page Elements Functions

    this.validateLoginImage = function () {
        login_Image.isDisplayed().then(function (CLICKDOCImage) {
            console.log('Is CLICKDOC Image is Displayed ? : ' + CLICKDOCImage)
            browser.sleep(1000)
            expect(CLICKDOCImage).toBe(true);
        })
    };

    this.clickOnProfileButton = function () {
        
       // browser.actions().mouseDown(profile_Button).click().perform();
        profile_Button.click();
       // browser.sleep(2000)
    };

    this.clickOnSearchPage = function () {
        search_Element.click();
        browser.sleep(1000)
    };

    this.validateProfileButtonIsDisplayed = function () {
        profile_Button.isDisplayed().then(function (ProfileButtonIsDisplayed) {
            console.log('is Profile Button Displayed ? : ' + ProfileButtonIsDisplayed)
            expect(ProfileButtonIsDisplayed).toBe(true);

        })
    };

    //Login Dialog Box Functions
    this.validateCloseButtonIsDisplayed = function () {
        close_Button.isDisplayed().then(function (XButton) {
            console.log('Is X Button Element Displayed ? : ' + XButton)
        })
    }

    this.enterEmailInput = function (enterEmail) {
        email_Input.sendKeys(enterEmail);
    };

    this.enterPasswordInput = function (enterPassword) {
        password_Input.sendKeys(enterPassword)
    };

    this.clickOnRememberPassword = function () {
        remember_Password.click();

    };
    this.clickOnRegistrationButton = function () {
        registration_Button.click();

    };
    this.clickOnLoginButton = function () {
        login_Button.click();

    };

    this.validateLoginMessage = function () {
        login_Message.getText().then(function (text) {
            console.log(text)
            expect(text).toEqual('Bitte überprüfen Sie Ihre E-Mail-Adresse, Passwort und probieren Sie es noch einmal.');
        })
    }

    this.validateEmailInputIsDisplayed = function () {
        email_Input.isDisplayed().then(function (EmailElement) {
            console.log('Is Email Element Displayed ? : ' + EmailElement)
        })
    }

    this.validatePasswordInputIsDisplayed = function () {
        password_Input.isDisplayed().then(function (passElement) {
            console.log('Is PassWord Element Displayed ? : ' + passElement)
        })
    }

    this.validateRememberPasswordIsDisplayed = function () {
        remember_Password.isDisplayed().then(function (rememberpassElement) {
            console.log('Is Remember PassWord Element Displayed ? : ' + rememberpassElement)
        })
    }

    this.validateRegistrationButtonIsDisplayed = function () {
        registration_Button.isDisplayed().then(function (registrationButtonElement) {
            console.log('Is Remember PassWord Element Displayed ? : ' + registrationButtonElement)
        })
    }

    this.validateLoginButtonIsDisplayed = function () {
        login_Button.isDisplayed().then(function (login_ButtonElement) {
            console.log('Is Remember PassWord Element Displayed ? : ' + login_ButtonElement)
        })
    }

    //User Profile Functions

    this.userNameValidation = function (uName) {
        browser.sleep(2000)
        user_name.getText().then(function (name) {
        expect(name).toEqual(uName);
        
    })
    }
    
    this.userIconValidation = function () {
        user_Icon.isDisplayed().then(function (value) {
            console.log('Is UserIcon is Diplayed ? : ' + value)
            expect(value).toBe(true);
        })
    }

    this.clickOnMyProfileDropDown = function () {
        myProfile_DropDown.click();
        browser.sleep(2000)

    }
    this.validateMyProfileIsDisplayed = function () {
        myProfile_Element.isDisplayed().then(function (myPro) {
            console.log('Is MyProfile Element Displayed ? : ' + myPro)

        })
    }

    this.validateLogoutIsDisplayed = function () {
        logout_Element.isDisplayed().then(function (logout) {
            console.log('Is Logout Element Displayed ? : ' + logout)

        })
    }

    this.clickOnLogout = function () {
        logout_Element.click();
        browser.sleep(2000)

    }
}


module.exports = new loginPage();