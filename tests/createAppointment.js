let loginPage = require('../pages/loginPage')
let searchPage = require('../pages/searchPage')



describe('CreateAppointment Feature', function () {
    browser.ignoreSynchronization = true;

    it('Book Doctor Appointment', function () {

        loginPage.launchBrowser(browser.params.url);
        loginPage.clickOnSearchPage();
        searchPage.enterDoctorName('repa');
        browser.sleep(2000);
        searchPage.enterDoctorName((protractor.Key.ARROW_DOWN));
        searchPage.enterDoctorName((protractor.Key.ARROW_DOWN));
        searchPage.enterDoctorName((protractor.Key.ENTER));
        browser.sleep(2000)
        searchPage.clickOnPromptMessage();
        searchPage.clickOnSelectAppointmentType();
        searchPage.clickOnOfficeHours();
        searchPage.clickOnfirstFreeAppointment();
        searchPage.clickOnTimeSlot();
        let f1 = element(by.xpath('//*[@id="iframeDialog"]')).getWebElement();
        browser.switchTo().frame(f1);
        loginPage.enterEmailInput(browser.params.validUserId);
        loginPage.enterPasswordInput(browser.params.validPassword);
        loginPage.clickOnLoginButton();
        browser.sleep(8000)
        searchPage.clickOnNextButton1();
        searchPage.clickOnNextButton2();

    })
})