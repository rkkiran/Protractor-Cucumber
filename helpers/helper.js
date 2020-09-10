const { browser, ExpectedConditions, element } = require('protractor');

module.exports =  {
    /**
     * 
     * @param {*} value - xpath value
     * @waitForElementToBePresent will wait for element to be present
     * 
     */
     async waitForElementToBePresent (value)  {
       return await browser.wait(() => (element(by.xpath(value)).isPresent()), 60000)
    },
      /**
     * 
     * @param {*} value - xpath value
     * @waitForElementToBeDisplayed will wait for element to be displayed
     * 
     */
    async waitForElementToBeDisplayed (value) {
        return await browser.wait(() => (element(by.xpath(value)).isDisplayed()), 60000)
     },
      /**
     * 
     * @param {*} value - xpath value
     * @waitForElementVisibility will wait for element to be visible
     * 
     */
    async waitForElementVisibility (value) {
        let EC = ExpectedConditions;
        let condition = EC.visibilityOf(element(by.xpath(value)));
       return await browser.wait(condition, 60000)
    },
      /**
     * 
     * @param {*} value - xpath value
     * @waitForElementToBeClickable will wait for element to be clickable
     * 
     */
    async waitForElementToBeClickable (value) {
            var elm = await element(by.xpath(value));
            var EC = await protractor.ExpectedConditions;
            return await browser.wait(EC.elementToBeClickable(elm), 60000);
         },    
}

