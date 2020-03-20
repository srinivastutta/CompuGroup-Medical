let loginPage = require('../pages/loginPage')
let searchPage = require('../pages/searchPage')
let xl = require('../utils/excelUtil')

describe('Physician Search Features', function () {
    browser.ignoreSynchronization = true;

    var TEST_DATA = xl.read_from_excel('Sheet1', 'E:/ProtractorWorkspace/CLICKDOC/TestData.xlsx')

    TEST_DATA.forEach(function (data) {

        it('Scrolling to bottom of the page and Verify "show more results" button', function () {


            loginPage.launchBrowser(browser.params.url);
            loginPage.validateLoginImage();
            loginPage.clickOnSearchPage();
            searchPage.enterDoctorName(data.UserName);
            searchPage.clickSearchButton();
            browser.executeScript("window.scrollBy(0, 3500)");
            browser.sleep(2000);
            searchPage.validateShowMoreResultsElement();
            console.log("==========================================================")

        })
    })

    it('Click on "show more results" button and validate the count of doctorList', function () {
        //before clicking "show more results" button, the doctor list count is 10
        let listCount = element.all(by.xpath('//*[@id="search"]/div/div[3]/div/div/app-physician-card'));
        expect(listCount.count()).toEqual(10);
        //After clicking "show more results" button, the doctor list count should be 20
        searchPage.clickShowMoreResultsButton();
        expect(listCount.count()).toEqual(20);

        console.log("==========================================================")
    })
    
    var TEST_DATA = xl.read_from_excel('Sheet1', 'E:/ProtractorWorkspace/CLICKDOC/TestData.xlsx')

    TEST_DATA.forEach(function (loc) {

    it('Scroll back to top and Enter Valid Location inputfield', function () {
        browser.executeScript("window.scrollBy(0, -3500)");
        searchPage.enterValueOnLocation(loc.Location);
        browser.sleep(1000)
        element.all(by.xpath('//*[@id="search"]/div/div[2]/div[2]/div[1]/app-filter/div/div/div[2]/div[2]/div/div/div[1]/typeahead-container'))
            .getText().then(function (text) {

                for (let i = 0; i < text.length; i++) {
                    expect(text[i]).toContain('56567');

                }
            })

        console.log("==========================================================")
    })
})

    it('Select Entry from suggestions and click on search button', function () {

        searchPage.enterValueOnLocation(protractor.Key.ARROW_DOWN);
        searchPage.enterValueOnLocation(protractor.Key.ENTER);
        browser.sleep(1000)
        searchPage.clickSearchButton();
        searchPage.validateResultDistanceElement();

        console.log("==========================================================")
    })

    it('Check Online Bookable Checkbox and Validate the timeFrame Element is Visble', function () {

        searchPage.clickOnlineTimeElement();
        searchPage.validateTimeFrame_Element();

        console.log("==========================================================")
    })


    it('Click on Search Button and Validate physicians with online bookable appointments are displayed', function () {

        searchPage.clickSearchButton();
        searchPage.validateOnlineAppointmentsElement();

        console.log("==========================================================")
    })

    it('Check „Video-Conference“-Checkbox, empty the "Name" inputfield and click the „Search Button“ Validate physician with Video Conference', function () {

        searchPage.clickVideoAppointment();
        searchPage.enterDoctorName(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        searchPage.enterDoctorName(protractor.Key.chord(protractor.Key.DELETE));
        searchPage.clickSearchButton();
        searchPage.validateVideoConferenceElement();

        console.log("==========================================================")
    })

    it('Uncheck „Video-Conference“ Checkbox, check „Barrier-Free“ Checkbox and click search button then Validate barrier-free state are displayed', function () {

        searchPage.clickVideoAppointment();
        searchPage.clickBarrierElement();
        searchPage.clickSearchButton();
        browser.sleep(2000);
        searchPage.clickDetailLink();
        searchPage.validateResultBarrierElement();

        console.log("==========================================================")
    })

    it('Check the „Alphabetical-Sort“ option in the sorting section and validate that data should be sorted by physician lastname', function () {
        browser.navigate().back();
        browser.sleep(2000);
        browser.executeScript("window.scrollBy(0, 500)");
        searchPage.clickAlphabeticByDoctorElement();
        browser.sleep(2000);
        //Getting Doctor List from Application
        element.all(by.xpath('//*[@id="search"]/div/div[3]/div/div/app-physician-card/div/div/div[2]'))
            .getText().then(function (DroctorFullName) {
                //Trimming LastName from Doctor FullName
                let variable1 = [];
                DroctorFullName.forEach(function (EachDroctorString) {

                    if (EachDroctorString.includes(',')) {
                        if (EachDroctorString.includes('Dr.') || EachDroctorString.includes('dr.')) {
                            var str = EachDroctorString.substring(0, EachDroctorString.indexOf(","));
                            variable1.push(str.replace('Dr. ', '').replace('dr. ', ''));
                        }
                        else {
                            variable1.push(EachDroctorString.substring(0, EachDroctorString.indexOf(",")));
                        }
                    }
                    else {
                        var n = EachDroctorString.split(" ");
                        variable1.push(n[n.length - 1]);
                    }

                });
                console.log(variable1);
                console.log("==========================================================")
                let variable2 = JSON.parse(JSON.stringify(variable1));
                console.log(variable2.sort());

                if (variable1 == variable2) {
                    expect(true).toBe(true);
                    console.log('Sorting is working properly')
                }
                else {
                    expect(true).toBe(false);
                    console.log('Sorting is not working properly')
                }
            })
    })

    it('Check the „Distance-Sort“ option in the sorting section and validate sorted by relative distance', function () {

        browser.executeScript("window.scrollBy(0, 600)");
        //After Clicking Distance Sort Button
        searchPage.clickDistanceElement();
        browser.sleep(2000);

        //Getting the loaded top 10  distances from page source
        element.all(by.xpath('//*[@id="search"]/div/div[3]/div/div/app-physician-card/div/div[2]/div/div/div[1]/div[2]/span[2]/span[1]'))
            .getText().then(function (sortedDistanceFromApplication) {

                //Sorted Distance Radius from Application
                console.log(sortedDistanceFromApplication)
                console.log("==========================================================")
                //Sorted Distance Radius Programatically
                let sortedDistanceProgramatically = JSON.parse(JSON.stringify(sortedDistanceFromApplication));
                let SortDistPro = sortedDistanceProgramatically.sort(function (a, b) {
                    return a - b;
                })
                console.log(SortDistPro)
                if (JSON.stringify(sortedDistanceFromApplication) === JSON.stringify(SortDistPro)) {
                    expect(true).toBe(true);
                    console.log('Distance Sorting is showing accurately')
                }
                else {
                    expect(true).toBe(false);
                    console.log('Distance Sorting is not showing accurately')
                }
            })
        console.log("==========================================================")
    })

    it('Drage the Slide bar and Release and validate radius accroding to slide bar', function () {

        browser.executeScript("window.scrollBy(0, 600)");
        browser.sleep(3000)
        let element1 = element(by.xpath('//*[@id="search"]/div/div[2]/div[2]/div[2]/app-sort/div/div/div[5]/div/div/ng5-slider/span[4]/span'));

        //Radius dragging to 10 KM
        browser.actions().dragAndDrop(element1, { x: 7, y: 100 }).perform();
        browser.executeScript("window.scrollBy(0, 600)");
        browser.sleep(3000)
        //Getting the Radius KM from Application
        element.all(by.xpath('//*[@id="search"]/div/div[3]/div/div/app-physician-card/div/div[2]/div/div/div[1]/div[2]/span[2]/span[1]'))
            .getText().then(function (distanceNumbers) {

                distanceNumbers.forEach(function (distNumber) {
                    //just to find number
                    let item = distNumber.match(/\d/g);
                    //checking <= 10 KM or >10 KM 
                    KM = item.join("");
                    if (KM <= 1000) {
                        expect(true).toBe(true);
                    }
                    else if (KM > 1000) {
                        console.log('Exceeding Radius Range is : ' + KM)
                        expect(true).toBe(false);
                    }
                });
            })
    })


});
