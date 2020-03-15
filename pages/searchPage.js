let searchPage = function () {
    //Result Search Section
    let search_Image = element(by.xpath('//*[@id="search"]/div/div[3]/div/div/app-empty-state/div/div[1]/img'));
    let emptyNotification_Message = element(by.xpath('//*[@id="search"]/div/div[3]/div/div/app-empty-state/div/div[2]/div/span'));
    let physician_Picture_Element = element(by.xpath('//*[@id="search"]/div/div[3]/div/div/app-physician-card[1]/div/div[1]/div[1]/app-avatar/div/img'));
    let physician_Name_Element = element(by.xpath('//*[@id="search"]/div/div[3]/div/div/app-physician-card[1]/div/div[1]/div[2]'));
    let profile_Button_Element = element(by.xpath('//*[@id="search"]/div/div[3]/div/div/app-physician-card[1]/div/div[1]/a[2]/button'));
    let address_Element = element(by.xpath('//*[@id="search"]/div/div[3]/div/div/app-physician-card[1]/div/div[2]/div/div/div[1]'));
    let online_Appointments_Element = element(by.xpath('//*[@id="search"]/div/div[3]/div/div/app-physician-card[1]/div/div[2]/div/div/div[2]/div'));
    let availableAppointments_Element = element(by.xpath('//*[@id="search"]/div/div[3]/div/div/app-physician-card[1]/div/div[2]/app-physician-calendar/div/div[3]/div/div[1]/div[2]/span'));
    let showMoreResults_Element = element(by.xpath('//*[@id="search"]/div/div[3]/div/div/div/a'));
    let result_Distance_Element = element(by.xpath('//*[@id="search"]/div/div[3]/div/div/app-physician-card[1]/div/div[2]/div/div/div[1]/div/span[2]'));
    let video_Conference_Element = element(by.xpath('//*[@id="search"]/div/div[3]/div/div/app-physician-card[1]/div/div[2]/div/div/div[2]/div[1]'));
    let detail_Link = element(by.xpath('//*[@id="search"]/div/div[3]/div/div/app-physician-card[1]/div/div[2]/div/div/div[1]/div[1]/span[2]/a'));
    let result_Barrier_Element = element (by.xpath('/html/body/app-root/div[2]/div/app-institution-profile/div/div/div/div[2]/div[1]/div[2]/app-institution-profile-card/div/div[2]/div/div/div[4]/div/div/div/span[2]'));
    
    //Search Section
    let specialization_Element = element(by.xpath('//*[@id="search-query-typeahead"]'));
    let location_Element = element(by.xpath('//*[@id="search-location-typeahead"]'));
    let onlineTime_Element = element(by.xpath('//*[@id="search"]/div/div[2]/div[2]/div[1]/app-filter/div/div/div[2]/div[3]/div/div/label/span[2]'));
    let video_Appointment = element(by.xpath('//*[@id="search"]/div/div[2]/div[2]/div[1]/app-filter/div/div/div[2]/div[4]/div/div/label/span[2]'));
    let barrier_Element = element(by.xpath('//*[@id="search"]/div/div[2]/div[2]/div[1]/app-filter/div/div/div[2]/div[5]/div/div/label/span[2]'));
    let searchButton_Element = element(by.xpath('//*[@id="search"]/div/div[2]/div[2]/div[1]/app-filter/div/div/div[2]/div[6]/div/button'));
    let timeFrame_Element = element(by.xpath('//*[@id="search"]/div/div[2]/div[2]/div[1]/app-filter/div/div/div[2]/div[3]/div/div[2]/div/div/div[1]/div/button'));

    //Sorting Section
    let bestResult_Element = element(by.xpath('//*[@id="search"]/div/div[2]/div[2]/div[2]/app-sort/div/div/div[2]/div/div/label/div/span[2]'));
    let alphabeticByDoctor_Element = element(by.xpath('//*[@id="search"]/div/div[2]/div[2]/div[2]/app-sort/div/div/div[3]/div/div/label/div/span[2]'));
    let distance_Element = element(by.xpath('//*[@id="search"]/div/div[2]/div[2]/div[2]/app-sort/div/div/div[4]/div/div/label/div/span[2]'));
    let radius_Element = element(by.xpath('//*[@id="search"]/div/div[2]/div[2]/div[2]/app-sort/div/div/div[5]/div/div/ng5-slider/span[3]/span'));

    

    //Result Search Section functions

    this.validateResultBarrierElement = function (message) {
        browser.sleep(3000);
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
        browser.sleep(2000)
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
        browser.sleep(1000);
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
        
    }

    this.validateDistanceElement = function () {
        distance_Element.isDisplayed().then(function (distanceElement) {
            console.log(distanceElement);
            expect(distanceElement).toEqual(true);

        })
    }

    this.clickDistanceElement = function () {
        distance_Element.click();
        browser.sleep(2000)
    }

    this.validateRadiusElement = function () {
        radius_Element.isDisplayed().then(function (radiusElement) {
            console.log(radiusElement);
            expect(radiusElement).toEqual(true);

        })
    }

}
module.exports = new searchPage();