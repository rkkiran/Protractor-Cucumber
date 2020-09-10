"use strict";
var itgWait = require('../../helpers/helper');
var itgElement  = require('../../ProtractorElements/elementClass');

class SearchResults {
    /**
     * @searchResult - will search for the HTM inner text
     */
    async searchResult(){
        await itgWait.waitForElementToBePresent('//div[@class="a-section a-spacing-small a-spacing-top-small"]')
       return await itgElement.xpath('//div[@class="a-section a-spacing-small a-spacing-top-small"]', 'getAttribute', 'innerText');
    }
    /**
     * 
     * @param {*} xpath - product herf
     * @clickOnTheProcuct - function will selct the given product
     */
    async clickOnTheProcuct(xpath){
        const xpathValue = `(//a[contains(@href, "${xpath}")])[3]`
        await itgElement.xpath(xpathValue, 'click');      
    }
}
module.exports = new SearchResults();