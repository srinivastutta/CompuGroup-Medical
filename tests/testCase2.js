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
        
        searchPage.clickOnRequestForAppointment();

        let f1 = element(by.xpath('//*[@id="iframeDialog"]')).getWebElement();
        browser.switchTo().frame(f1); 

        Wait.genericWait(element(by.xpath('//*[@id="mat-input-0"]')));
        loginPage.enterEmailInput(browser.params.validUserId);
        loginPage.enterPasswordInput(browser.params.validPassword);
        loginPage.clickOnLoginButton();
        

        Wait.genericWait(element(by.css('div[class="appointment-wish-header-title"]')));
        //Wait.waitForElementIsDisplayed(element(by.css('button[class="btn btn-primary w-100"]')));
        
        searchPage.validatePhysicianName('Dr. med. Christian Reparon');
        browser.executeScript("window.scrollBy(0, 500)");
        searchPage.clickOnSelectTuesday();
        searchPage.clickOnArrow();
        searchPage.ClickOnSaturday();
        searchPage.clickOnNextbutton3();
        searchPage.validatePageTitle('Anfrage eines Wunschtermins');
        //browser.executeScript("window.scrollBy(0, 500)");
        searchPage.validateNoButton('Nein');
        searchPage.clickOnNextbutton4();
        
      
        
    })
})