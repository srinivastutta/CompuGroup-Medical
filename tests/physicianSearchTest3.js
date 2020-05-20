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
            searchPage.clickOnPromptMessage();
            loginPage.clickOnSearchPage();
            Wait.genericWait(element(by.css('input#search-location-typeahead')));
            searchPage.enterValueOnLocation(data.Location);
            Wait.genericWait(element(by.css('div>typeahead-container[class="dropdown open dropdown-menu"]>button:nth-child(2)>span')));
            searchPage.selectSecondValueFromList();
            searchPage.clickSearchButton();
            searchPage.clickOnlineTimeElement();
            searchPage.clickBarrierElement();
            searchPage.clickSearchButton();

            browser.executeScript("window.scrollBy(0, 500)");

            Wait.waitForElementToBeClickable(element(by.css('div.row.mb-3 > div > div > label')));
            searchPage.clickDistanceElement();
            browser.executeScript("window.scrollBy(0, 500)");
            let element1 = element(by.css('span[class="ng5-slider-span ng5-slider-bar ng5-slider-selection"]'));
            //Radius dragging to 50 KM
            browser.actions().dragAndDrop(element1, { x: 70, y: 200 }).perform();
            browser.sleep(3000)

            //Wait.genericWait(element(by.css('app-physician-card:last-of-type>div>div>div>div>div>div+div>span:nth-child(2)>span:nth-child(1)')));
            //Getting the Radius KM from Application
            //Wait.genericWait(element(by.css('app-physician-card:last-of-type>div>div>div>div>div>div+div>span:nth-child(2)>span:nth-child(1)')));


            let k = 1;
            for (let i=1; i <10; i++){
                browser.executeScript("window.scrollBy(0, 3500)");
                browser.sleep(3000)
                element(by.css('span[class="icon icon-G3_expandedBig"]')).isDisplayed().then(function (isVisible) {
                    if (isVisible) {
                        element(by.css('span[class="icon icon-G3_expandedBig"]')).click();

                    }
                
                })


            }

            // //Getting the Radius KM from Application
            // element.all(by.css('app-physician-card>div>div>div>div>div>div+div>span:nth-child(2)>span:nth-child(1)'))
            //     .getText().then(function (distanceNumbers) {

            //         distanceNumbers.forEach(function (distNumber) {
            //             //just to find number
            //             let item = distNumber.match(/\d/g);
            //             //console.log(item);
            //             //just remove KM and Space
            //             let KM = item.join("");

            //             //checking <= 50 KM or >50 KM 
            //             if (KM <= 5000) {
            //                 expect(true).toBe(true);
            //             }
            //             else if (KM > 5000) {
            //                 console.log('Exceeding Radius Range is : ' + KM)
            //                 expect(true).toBe(false, 'Exceeding Radius Range is more than 10KM');
            //             }

            //         });
            //     })


        })


    });
});