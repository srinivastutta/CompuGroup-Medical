let loginPage = require('../pages/loginPage')
let searchPage = require('../pages/searchPage')

describe('Physician Search Features', function () {


    it('Verify CLICKDOC Image is Displayed on HomePage', function () {

        loginPage.launchBrowser(browser.params.url);
        loginPage.validateLoginImage();
        console.log("==========================================================")

    });

    it('Verify User Navigates to Search Page', function () {

        loginPage.clickOnSearchPage();
        searchPage.searchImageValidation()
        console.log("==========================================================")

    });

    it('Verify Search Button Section Elements', function () {

        searchPage.validateSpecializationElement();
        searchPage.validateLocationElement();
        searchPage.validateOnlineTimeElement();
        searchPage.validateVideoAppointmentElement();
        searchPage.validateBarrierElement();
        searchPage.validateSearchButtonElement();
        console.log("==========================================================")

    });

    it('Verify Search Button Section Elements', function () {

        searchPage.validateBestResultElement()
        searchPage.validateAlphabeticByDoctorElement();
        searchPage.validateDistanceElement();
        searchPage.validateRadiusElement();
        console.log("==========================================================")

    });

    it('Verify Inital Result Section Message Validation', function () {

        searchPage.ValidateEmptyNotificationMessage(browser.params.emptyResultMessage);

        console.log("==========================================================")

    });

    it('Enter value (Beate) in Name Input Field In Search Section and Validate Fitting Suggestions', function () {

        searchPage.enterDoctorName('Beate');
        browser.sleep(1000);
        element.all(by.xpath('//*[@class="dropdown open dropdown-menu"]/button/span/strong'))
            .getText().then(function (DocNames) {

                for (let i = 0; i < DocNames.length; i++) {
                    expect(DocNames[i]).toBe('Beate');

                }
            })
        console.log("==========================================================")
    })

    it('Enter value (Beate Edel) in Name Input Field In Search Section and Validate Fitting Suggestions', function () {
        searchPage.enterDoctorName(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        searchPage.enterDoctorName('Beate Edel');
        browser.sleep(1000);
        element.all(by.xpath('//*[@class="dropdown open dropdown-menu"]/button/span/strong'))
            .getText().then(function (DocName) {

                for (let i = 0; i < DocName.length; i++) {
                    expect(DocName[i]).toBe('Beate Edel');

                }
            })
        console.log("==========================================================")
    })

    it('Enter value (Beate Edelse) in Name Input Field In Search Section and Validate Fitting Suggestions', function () {
        searchPage.enterDoctorName(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        searchPage.enterDoctorName('Beate Edelse');
        element.all(by.xpath('//*[@class="dropdown open dropdown-menu"]/button/span/strong'))
            .getText().then(function (items) {
                console.log('Suggested dropdwon results are :' + items);
                expect(items.length).toBe(0);
            })
        console.log("==========================================================")

    })

    it('Enter value (Beate) in Name Input Field In Search Section and submit and validate the results should contian "Beate"', function () {
        searchPage.enterDoctorName(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        searchPage.enterDoctorName('Beate');
        searchPage.clickSearchButton();
        element.all(by.xpath('//*[@class="physician-name align-self-center"]'))
            .getText().then(function (PhysicianList) {

                for (let i = 0; i < PhysicianList.length; i++) {
                    expect(PhysicianList[i]).toContain('Beate');

                }
            })
        console.log("==========================================================")

    })

    it('Check Search Results Objects', function () {

        searchPage.validatePhysicianPictureElement();
        searchPage.validatePhysicianNameElement();
        searchPage.validateProfileButtonElement();

        searchPage.validateAddressElement();
        searchPage.validateOnlineAppointmentsElement();
        searchPage.validateAvailableAppointmentsElement();

        console.log("==========================================================")

    })


});



