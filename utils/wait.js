var Wait = function () {

    //wait for element to present
    this.waitForElement = function (element) {
        return browser.driver.wait(() => (element.isPresent()), 80000);

    }


    //wait for element to display
    this.waitForElementIsDisplayed = function (element) {
        return browser.wait(() => (element.isDisplayed()), 60000);

    }

    this.waitForElementVisibility = function (element) {
        var EC = protractor.ExpectedConditions;

        browser.driver.wait(function (element) {
            return browser.wait(EC.visibilityOf(element), 80000);
            
        });
    }
}

module.exports = new Wait();

