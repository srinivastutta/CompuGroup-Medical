let loginPage = require('../pages/loginPage')
let searchPage = require('../pages/searchPage')
let Wait = require('../utils/wait')



describe('CreateAppointment Feature', function () {
    browser.ignoreSynchronization = true;

    it('Book Doctor Appointment', function () {

        loginPage.launchBrowser(browser.params.url);
        searchPage.clickOnPromptMessage();
        
        loginPage.clickOnSearchPage();
        searchPage.enterDoctorName('repa');
        Wait.waitForElementIsDisplayed(element(by.css('typeahead-container[class="dropdown open dropdown-menu"]>button:nth-child(3)')))
        searchPage.selectSecondPhysianFromList();
        Wait.waitForElementToBeClickable(element(by.css('div.dropdown-select>button[class*="btn btn"]')));
        searchPage.clickOnSelectAppointmentType();
        searchPage.clickOnOfficeHours();
        searchPage.clickOnfirstFreeAppointment();
        searchPage.clickOnTimeSlot();
        let f1 = element(by.xpath('//*[@id="iframeDialog"]')).getWebElement();
        browser.switchTo().frame(f1); 

        Wait.genericWait(element(by.xpath('//*[@id="mat-input-0"]')));
        loginPage.enterEmailInput(browser.params.validUserId);
        loginPage.enterPasswordInput(browser.params.validPassword);
        loginPage.clickOnLoginButton();
        
        browser.executeScript("window.scrollBy(0, 500)");
        Wait.waitForElementToBeClickable(element(by.css('button[class="btn btn-primary w-100"]')));
        searchPage.clickOnNextButton1();
       
        browser.executeScript("window.scrollBy(0, 500)");
        Wait.waitForElementToBeClickable(element(by.css('button[class="btn btn-primary w-100"]')));   
        searchPage.clickOnNextButton2();
        //let sucessMessage = element(by.css('app-booking-success[class="ng-star-inserted"]>div>div>div>div+span'));
        let sucessMessage = element(by.css('.booking-success')).element(by.css('.title'));
        
        Wait.waitForElementToBeClickable(sucessMessage);
        sucessMessage.getText().then(function (text){
            console.log(text)
            expect(text).toBe('Vielen Dank für Deine Terminanfrage')

        })
        
      
        
    })
})