let homepage = function () {

    //Locators
    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));


    //Function

    this.get = function (url) {
        browser.get(url);
    }
    this.enterFirstName = function (firstNo) {
        firstNumber_input.sendKeys(firstNo);
    }
    this.enterSecondName = function (secondNo) {
        secondNumber_input.sendKeys(secondNo);
    }
    this.clickGo = function () {
        goButton.click();
    }
    this.verifyResult = function (result) {
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);

    }

};

module.exports = new homepage();