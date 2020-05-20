let Wait = require('../utils/wait')

let searchPage = function () {
    //Result Search Section
    let search_Image = element(by.css('img.card-image'));
    let emptyNotification_Message = element(by.css('span[translate="search.no.input.given.label"]'));
    let physician_Picture_Element = element(by.css('app-physician-card:nth-child(1)>div>div>div>app-avatar>div>img'));
    let physician_Name_Element = element(by.css('app-physician-card:nth-child(1)>div>div>div.physician-name, align-self-center'));
    let profile_Button_Element = element(by.css('app-physician-card:nth-child(1)>div>div>a+a>button'));
    let address_Element = element(by.css('app-physician-card:nth-child(1)>div>div+div>div>div>div:nth-child(1)'));
    let online_Appointments_Element = element(by.css('app-physician-card:nth-child(1)>div>div+div>div>div>div:nth-child(2)'));
    let availableAppointments_Element = element(by.css('app-physician-card:nth-child(1)>div>div+div>app-physician-calendar>div>div>div>span:nth-child(1)'));
    let showMoreResults_Element = element(by.css('a.load-more-link'));
    let result_Distance_Element = element(by.css('div.col-sm-12.col-md-8.col-lg-9 > div > div > app-physician-card:nth-child(1) > div > div.card-body > div > div > div:nth-child(1) > div:nth-child(2) > span.description-text'));
    let video_Conference_Element = element(by.css('app-physician-card:nth-child(1)>div>div+div>div>div>div:nth-child(2)>div'));
    let detail_Link = element(by.css('app-physician-card:nth-child(1)>div>div+div>div>div>div>div>span+span>a.online-booking-tooltip'));
    let result_Barrier_Element = element(by.css('span[translate="practice.flags.SG_handicappedAccessible"]'));

    //Search Section
    let specialization_Element = element(by.css('input#search-query-typeahead'));
    let location_Element = element(by.css('input#search-location-typeahead'));
    let onlineTime_Element = element(by.css('span[translate="search.filter.checkbox.online.booking"]'));
    let video_Appointment = element(by.css('label>span[translate="search.filter.checkbox.video.appointment"]'));
    let barrier_Element = element(by.css('span[translate="search.filter.checkbox.accessibility"]'));
    let searchButton_Element = element(by.css('button[translate="doctorSearch.search.filter.submit"]'));
    let timeFrame_Element = element(by.css('div[class="day dropdown dropdown-select d-block"]'));
    let selectSecondValue = element(by.css('div>typeahead-container[class="dropdown open dropdown-menu"]>button:nth-child(2)>span'));
    let selectfirstPhysician = element(by.css('typeahead-container[class="dropdown open dropdown-menu"]>button:nth-child(2)'));
    //Sorting Section
    let bestResult_Element = element(by.cssContainingText(".text", "Beste Ergebnisse"));
    let alphabeticByDoctor_Element = element(by.css('div:nth-child(2) > app-sort > div > div > div:nth-child(3) > div > div > label'));
    let radius_Element = element(by.css('div.row.mb-3 > div > div > label'));

    //New Test Case
    let promptMessage = element(by.css('button#matomo-reject'));
    let selectAppointmentType = element(by.css('div.dropdown-select>button[class*="btn btn"]'));
    let selectOfficeHours = element(by.css('div.dropdown-menu-right>button[class*="dropdown-item btn-block text-left ng-star-inserted"]:nth-of-type(1)'));
    let firstFreeAppointment = element(by.css('div[class="first-available-time calendar-cell-mask d-flex align-items-center justify-content-center ng-star-inserted"]'));
    let timeSlot = element(by.css('div[class="calendar-cell calendar-cell-mask justify-content-center align-items-center ng-star-inserted"]'));
    let nextButton1 = element(by.css('button[class="btn btn-primary w-100"]'));
    let nextButton2 = element(by.css('button[class="btn btn-primary w-100"]'));
   // let rememberLater = element(by.xpath('/html/body/app-root/div[2]/app-header/div/div[1]/div/div/div[2]/a'));

    //New Test Case 2

    let requestForAppointment = element(by.css('[class="appointment-button-data"]'));

    let selectTuesday = element (by.css('div.table-content.collapsed > div:nth-child(1) > div:nth-child(2) > label > span'));

    let arrow = element (by.css('span[class="icon icon-G3_hideRight ng-star-inserted"]'));

    let physicanName = element(by.css('[class="profile-name align-self-center"]'))

    let selectSaturday = element(by.css('div.table-content > div:nth-child(1) > div:nth-child(6) > label'));

    let nextbutton3 = element(by.css('button[class="btn btn-primary w-100"]'));

    let pageTitle = element(by.css('div[class="appointment-wish-header-title"]'));

    let noButton = element(by.css('button.btn.btn-outline-secondary.option-button.ng-star-inserted.active-option'));

    let nextbutton4 = element(by.css('button[class="btn btn-primary w-100"]'));

    let sucessMessage = element(by.css('.appointment-wish-success')).element(by.css('.title'));


//functions

this.validatePhysicianName = function (title) {
    physicanName.getText().then(function (text){
        expect(text).toBe(title)
    })
}


this.clickOnRequestForAppointment = function () {
    requestForAppointment.click();
    
}


this.clickOnSelectTuesday = function () {
    selectTuesday.click();
    
}
this.clickOnArrow = function () {
    arrow.click();
    
}

this.ClickOnSaturday = function () {
    selectSaturday.click();
    
}


this.clickOnNextbutton3 = function () {
    nextbutton3.click();
    
}



this.validatePageTitle = function (title) {
    pageTitle.getText().then(function (text){
        expect(text).toBe(title)
    })
    
}

this.validateNoButton = function (text) {
    noButton.getText().then(function (value){
        expect(value).toBe(text)
    })
}

this.clickOnNextbutton4 = function () {
    nextbutton4.click();
    
}

this.clickOnNextbutton2 = function (title) {
    sucessMessage.getText().then(function (text){
        expect(text).toBe(title)
    })
}



    //New Test Funcitons

    this.ClickOnRememberLater = function () {
        rememberLater.click();
        
    }


    this.clickOnPromptMessage = function () {
        promptMessage.click();

    }

    this.clickOnSelectAppointmentType = function () {
        selectAppointmentType.click()
    
    }

    this.clickOnOfficeHours = function () {
        selectOfficeHours.click();

    }

    this.clickOnfirstFreeAppointment = function () {
        firstFreeAppointment.click();
  
    }


    this.clickOnTimeSlot = function () {
        timeSlot.click();
    }


    this.clickOnNextButton1 = function () {
        nextButton1.click();

    }
    this.clickOnNextButton2 = function () {
        nextButton2.click();

    }

    //Result Search Section functions

    this.validateResultBarrierElement = function (message) {
       result_Barrier_Element.isDisplayed().then(function (ResultBarrierElement) {
            console.log(ResultBarrierElement);
            expect(ResultBarrierElement).toEqual(true);

        })
    }

    this.validateVideoConferenceElement = function (message) {
        video_Conference_Element.isDisplayed().then(function (VideoConferenceElement) {
            console.log(VideoConferenceElement);
            expect(VideoConferenceElement).toEqual(true);

        })
    }

    this.ValidateEmptyNotificationMessage = function (message) {
        emptyNotification_Message.getText().then(function (emptyNotificationMessage) {
            console.log(emptyNotificationMessage);
            expect(emptyNotificationMessage).toEqual(message);

        })
    }

    this.searchImageValidation = function () {
        search_Image.isDisplayed().then(function (searchImage) {
            console.log(searchImage);
            expect(searchImage).toEqual(true);

        })
    }

    this.validatePhysicianPictureElement = function () {
        physician_Picture_Element.isDisplayed().then(function (PhysicianPictureElement) {
            console.log(PhysicianPictureElement);
            expect(PhysicianPictureElement).toEqual(true);

        })
    }

    this.validatePhysicianNameElement = function () {
        physician_Name_Element.isDisplayed().then(function (PhysicianNameElement) {
            console.log(PhysicianNameElement);
            expect(PhysicianNameElement).toEqual(true);

        })
    }

    this.validateProfileButtonElement = function () {
        profile_Button_Element.isDisplayed().then(function (ProfileButtonElement) {
            console.log(ProfileButtonElement);
            expect(ProfileButtonElement).toEqual(true);

        })
    }

    this.validateAddressElement = function () {
        address_Element.isDisplayed().then(function (addressElement) {
            console.log(addressElement);
            expect(addressElement).toEqual(true);

        })
    }

    this.validateOnlineAppointmentsElement = function () {
        online_Appointments_Element.isDisplayed().then(function (onlineAppointmentsElement) {
            console.log(onlineAppointmentsElement);
            expect(onlineAppointmentsElement).toEqual(true);

        })
    }

    this.validateAvailableAppointmentsElement = function () {
        availableAppointments_Element.isDisplayed().then(function (availableAppointmentsElement) {
            console.log(availableAppointmentsElement);
            expect(availableAppointmentsElement).toEqual(true);

        })
    }

    this.validateShowMoreResultsElement = function () {
        showMoreResults_Element.isDisplayed().then(function (ShowMoreResultsElement) {
            console.log(ShowMoreResultsElement);
            expect(ShowMoreResultsElement).toEqual(true);

        })
    }

    this.clickShowMoreResultsButton = function () {
        showMoreResults_Element.click();
        browser.sleep(3000)

    }

    this.clickDetailLink = function () {
        detail_Link.click();

    }

    this.validateResultDistanceElement = function () {
        result_Distance_Element.isDisplayed().then(function (DistanceElement) {
            console.log(DistanceElement);
            expect(DistanceElement).toEqual(true);

        })
    }

    //Search Section functions
    this.validateSpecializationElement = function () {
        specialization_Element.isDisplayed().then(function (specialityElement) {
            console.log(specialityElement);
            expect(specialityElement).toEqual(true);

        })
    }

    this.enterDoctorName = function (docName) {
        specialization_Element.sendKeys(docName)

    }
    this.selectSecondValueFromList = function () {
        selectSecondValue.click();
      

    }
    this.selectSecondPhysianFromList = function () {
        selectfirstPhysician.click();
      

    }
    

    this.validateLocationElement = function () {
        location_Element.isDisplayed().then(function (locationElement) {
            console.log(locationElement);
            expect(locationElement).toEqual(true);

        })
    }

    this.enterValueOnLocation = function (value) {
        location_Element.sendKeys(value);

    }


    this.validateOnlineTimeElement = function () {
        onlineTime_Element.isDisplayed().then(function (onlineTimeElement) {
            console.log(onlineTimeElement);
            expect(onlineTimeElement).toEqual(true);

        })
    }

    this.clickOnlineTimeElement = function () {
        onlineTime_Element.click();
    }


    this.validateVideoAppointmentElement = function () {
        video_Appointment.isDisplayed().then(function (videoAppointment) {
            console.log(videoAppointment);
            expect(videoAppointment).toEqual(true);

        })
    }

    this.clickVideoAppointment = function () {
        video_Appointment.click();

    }

    this.validateBarrierElement = function () {
        barrier_Element.isDisplayed().then(function (barrierElement) {
            console.log(barrierElement);
            expect(barrierElement).toEqual(true);

        })
    }

    this.clickBarrierElement = function () {
        barrier_Element.click();
    }

    this.validateSearchButtonElement = function () {
        searchButton_Element.isDisplayed().then(function (searchButtonElement) {
            console.log(searchButtonElement);
            expect(searchButtonElement).toEqual(true);

        })
    }

    this.clickSearchButton = function () {
        searchButton_Element.click();
        browser.sleep(3000)
    }

    this.validateTimeFrame_Element = function () {
        timeFrame_Element.isDisplayed().then(function (TimeFrame_Element) {
            console.log(TimeFrame_Element);
            expect(TimeFrame_Element).toEqual(true);

        })
    }


    //Sorting Section Functions
    this.validateBestResultElement = function () {
        bestResult_Element.isDisplayed().then(function (bestResultElement) {
            console.log(bestResultElement);
            expect(bestResultElement).toEqual(true);

        })
    }

    this.validateAlphabeticByDoctorElement = function () {
        alphabeticByDoctor_Element.isDisplayed().then(function (alphabeticByDoctorElement) {
            console.log(alphabeticByDoctorElement);
            expect(alphabeticByDoctorElement).toEqual(true);

        })
    }

    this.clickAlphabeticByDoctorElement = function () {
        alphabeticByDoctor_Element.click();
        browser.sleep(2000)

    }

    // this.validateDistanceElement = function () {
    //     distance_Element.isDisplayed().then(function (distanceElement) {
    //         console.log(distanceElement);
    //         expect(distanceElement).toEqual(true);

    //     })
    // }

    this.clickDistanceElement = function () {
        radius_Element.click();
        browser.sleep(3000)

    }

    this.validateRadiusElement = function () {
        radius_Element.isDisplayed().then(function (radiusElement) {
            console.log(radiusElement);
            expect(radiusElement).toEqual(true);

        })
    }

}

module.exports = new searchPage();