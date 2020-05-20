var Wait = function () {

  //wait for element to display
  this.waitForElementIsDisplayed = function (element) {
    return browser.wait((element).isDisplayed(), 30000).then(function () {
      return true;
    }, function () {
      return false;
    });
  }

  // Waits for the element with id 'abc' to be clickable.
  this.waitForElementToBeClickable = function (element) {
    var EC = protractor.ExpectedConditions;
    return browser.wait(EC.elementToBeClickable(element), 30000).then(function () {
      return true;
    }, function () {
      return false;
    });
  }

  this.genericWait = function (Condition) {
    var EC = protractor.ExpectedConditions;

    return browser.wait(EC.presenceOf(Condition), 30000).then(function () {
      return true;
    }, function () {
      return false;
    });
  }
  

}

module.exports = new Wait();

