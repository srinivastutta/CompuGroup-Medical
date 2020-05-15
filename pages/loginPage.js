let loginPage = function () {

    //Login Page Elements
    let login_Image = element(by.css('a.navbar-brand>img[src="/cms-de/wp-content/uploads/2019/11/logo_white.png"]'));
    let profile_Button = element(by.css('ul#menu-header-menu>li:nth-of-type(8)>a'));
    let search_Element = element(by.css('li#menu-item-10>a[data-text="Suchseite"]'));
    let promptMessage = element(by.css('button#matomo-reject'));

    //Login Dialog Box Elements 
    let close_Button = element(by.css('span.iframe-dialog-close, icon, icon-CO_close'));
    let email_Input = element(by.css('input#mat-input-0'));
    let password_Input = element(by.css('input#mat-input-1'));
    //let email_Input1 = element(by.css('input#mat-input-2'));
    //let password_Input1 = element(by.css('input#mat-input-3'));
    let remember_Password = element(by.css('span.link, margin-top-15'));
    let registration_Button = element(by.css('body > app-root > div > div > main > app-login > div > div.row.justify-content-center.mx-auto.w-100.xs-content-area > div > div > div.col-11.col-md-8.col-lg-6.col-xl-7 > div.row.d-none.d-md-flex > div:nth-child(1) > button'));
    let login_Button = element(by.buttonText('Einloggen'));
    let login_Message = element(by.css('div.col-12>app-error-message.ng-star-inserted>div>div>p'));
    let back_Button = element(by.css('div[class="row justify-content-center mx-auto ng-star-inserted"]>div>a'));
    //User Profile Elements
    let user_name = element(by.xpath('//*[@id="header-container"]/div[1]/span'));
    let user_Icon = element(by.css('div[class="profile-picture-container ng-star-inserted"]>app-avatar>div>img[alt="avatar-picture"]'));
    let myProfile_DropDown = element(by.css('ul[class="menu-desktop d-lg-block d-md-none d-sm-none"]>li:nth-of-type(7)>a>div'));
    let myProfile_Element = element(by.css('div.dropdown-container>a[routerlink="my-profile"]>div>span:nth-of-type(2)'));
    let logout_Element = element(by.css('body > app-root > div.app-container.ng-star-inserted.show-security-banner > app-header > div > div.header-wrapper > div > div.float-right > ul > li.menu-item.fullOpacity.menu-dropdown-item.ng-tns-c1-0.ng-star-inserted.open.show > div > div > a:nth-child(2) > div > span.menu-text'));

    //Browser Initialization
    this.launchBrowser = function (url) {
        browser.driver.get(url);
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().implicitlyWait(10000);
        browser.manage().timeouts().pageLoadTimeout(30000);
        promptMessage.click();

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
            expect(CLICKDOCImage).toBe(true);
        })
    };

    this.clickOnProfileButton = function () {
        profile_Button.click();
    };

    this.clickOnSearchPage = function () {
        search_Element.click();
        
    };

    this.validateProfileButtonIsDisplayed = function () {
        profile_Button.isDisplayed().then(function (ProfileButtonIsDisplayed) {
            console.log('is Profile Button Displayed ? : ' + ProfileButtonIsDisplayed)
            expect(ProfileButtonIsDisplayed).toBe(true);

        })
    };

    //Login Dialog Box Functions

    this.clickOnBackButton = function () {
        back_Button.click();
    }

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

    this.enterEmailInput1 = function (enterEmail) {
        email_Input1.sendKeys(enterEmail);
    };

    this.enterPasswordInput1 = function (enterPassword) {
        password_Input1.sendKeys(enterPassword)
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
    this.validatePassword1InputIsDisplayed = function () {
        password_Input1.isDisplayed().then(function (passElement) {
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
       user_name.getText().then(function (name) {
           console.log(name);
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

    }
}


module.exports = new loginPage();