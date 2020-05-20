let loginPage = require('../pages/loginPage')
let searchPage = require('../pages/searchPage')
let xl = require('../utils/excelUtil')
let Wait = require('../utils/wait')

describe('Physician Search Features 1', function () {
    //browser.ignoreSynchronization = true;

    var TEST_DATA = xl.read_from_excel('Sheet1', 'E:/ProtractorWorkspace/CLICKDOC/TestData.xlsx')

    TEST_DATA.forEach(function (data) {

        it('Scrolling to bottom of the page and Verify "show more results" button', function () {


            loginPage.launchBrowser(browser.params.url);
            loginPage.validateLoginImage();
            searchPage.clickOnPromptMessage();
            loginPage.clickOnSearchPage();
            searchPage.enterDoctorName(data.UserName);
            Wait.genericWait(element(by.css('button[translate="doctorSearch.search.filter.submit"]')))
            searchPage.clickSearchButton();
            browser.executeScript("window.scrollBy(0, 3500)");
            searchPage.validateShowMoreResultsElement();
            
            console.log("==========================================================")

        })
    })

    it('Click on "show more results" button and validate the count of doctorList', function () {
        //before clicking "show more results" button, the doctor list count is 10
        let listCount = element.all(by.css('app-physician-card'));
        expect(listCount.count()).toEqual(10);
        console.log('Count was 10 before clicking show more')
        //After clicking "show more results" button, the doctor list count should be 20

        searchPage.clickShowMoreResultsButton();
        browser.executeScript("window.scrollBy(0, 3500)");
        Wait.genericWait(element(by.css('a.load-more-link')));
        expect(listCount.count()).toEqual(20);
        console.log('Count was 20 after clicking show more')

        console.log("==========================================================")
    })

    var TEST_DATA = xl.read_from_excel('Sheet1', 'E:/ProtractorWorkspace/CLICKDOC/TestData.xlsx')

    TEST_DATA.forEach(function (loc) {

        it('Scroll back to top and Enter Valid Location inputfield', function () {
            browser.executeScript("window.scrollBy(0, -3500)");
            Wait.genericWait(element(by.css('input#search-location-typeahead')));
            searchPage.enterValueOnLocation(loc.Location);
             element.all(by.css('typeahead-container[class="dropdown open dropdown-menu"]'))
                .getText().then(function (text) {

                    for (let i = 0; i < text.length; i++) {
                        expect(text[i]).toContain('56567');
                   
                    }
                })

            console.log("==========================================================")
        })
    })

    it('Select Entry from suggestions and click on search button', function () {
        Wait.genericWait(element(by.css('div>typeahead-container[class="dropdown open dropdown-menu"]>button:nth-child(2)>span')));
        searchPage.selectSecondValueFromList();
        searchPage.clickSearchButton();
        Wait.genericWait(element(by.css('app-physician-card:nth-child(1)')));
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
        Wait.genericWait(element(by.css('app-physician-card:nth-child(1)')));
        //Wait.waitForElementToBeClickable(element(by.css('app-physician-card:nth-child(1)>div>div+div>div>div>div:nth-child(2)')));
        searchPage.validateOnlineAppointmentsElement();
        console.log("==========================================================")
    })
});

describe('Physician Search Features 2', function () {

    it('Check „Video-Conference“-Checkbox, empty the "Name" inputfield and click the „Search Button“ Validate physician with Video Conference', function () {

        searchPage.clickVideoAppointment();
        searchPage.enterDoctorName(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        searchPage.enterDoctorName(protractor.Key.chord(protractor.Key.DELETE));
        searchPage.clickSearchButton();
        Wait.genericWait(element(by.css('app-physician-card:nth-child(1)')));

        console.log("==========================================================")
    })

    it('Uncheck „Video-Conference“ Checkbox, check „Barrier-Free“ Checkbox and click search button then Validate barrier-free state are displayed', function () {

        searchPage.clickVideoAppointment();
        searchPage.clickBarrierElement();
        searchPage.clickSearchButton();

        console.log("==========================================================")
    })

    it('Check the „Alphabetical-Sort“ option in the sorting section and validate that data should be sorted by physician lastname', function () {
        browser.executeScript("window.scrollBy(0, 500)");
        Wait.genericWait(element(by.css('div:nth-child(2) > app-sort > div > div > div:nth-child(3) > div > div > label')));
        searchPage.clickAlphabeticByDoctorElement();
   

        Wait.genericWait(element(by.css('app-physician-card:nth-child(10)>div>div>div>div>div>div+div>span:nth-child(2)>span:nth-child(1)')));
        //Getting Doctor List from Application
        element.all(by.css('app-physician-card[class="ng-star-inserted"]>div>div>div+div'))
            .getText().then(function (DroctorFullName) {
                //Trimming LastName from Doctor FullName
                let variable1 = [];
                DroctorFullName.forEach(function (EachDroctorString) {
                    //removing Dr. and , from Doctor FullName and pushing only the string, which is before
                    //comma  into Variable1 (I considered before comma is a last name)
                    if (EachDroctorString.includes(',')) {
                        if (EachDroctorString.includes('Dr.') || EachDroctorString.includes('dr.')) {
                            var str = EachDroctorString.substring(0, EachDroctorString.indexOf(","));
                            variable1.push(str.replace('Dr. ', '').replace('dr. ', ''));
                        }
                        // pushing only the string, which is before comma
                        else {
                            variable1.push(EachDroctorString.substring(0, EachDroctorString.indexOf(",")));
                        }
                    }
                    else {
                        //extracting last word in the same string, if it does not contain commas only
                        //So first if condition is for extracting last name using before comma condition
                        var n = EachDroctorString.split(" ");
                        variable1.push(n[n.length - 1]);
                    }

                });
                //console.log(variable1);
                //console.log("==========================================================")
                let variable2 = JSON.parse(JSON.stringify(variable1));
                variable2.sort();
                expect(variable1).toBe(variable2, 'Doctor last names were not sorted');
            })
    })
})
describe('Physician Search Features 3', function () {

    it('Check the „Distance-Sort“ option in the sorting section and validate sorted by relative distance', function () {
        browser.executeScript("window.scrollBy(0, 500)");

        //After Clicking Distance Sort Button
        Wait.waitForElementToBeClickable(element(by.css('div.row.mb-3 > div > div > label')));
        searchPage.clickDistanceElement();
        // browser.executeScript("window.scrollBy(0, 3500)");
        Wait.genericWait(element(by.css('app-physician-card:nth-child(10)>div>div>div>div>div>div+div>span:nth-child(2)>span:nth-child(1)')));

        //Getting the loaded top 10  distances from page source
        element.all(by.css('app-physician-card>div>div>div>div>div>div+div>span:nth-child(2)>span:nth-child(1)'))
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
})