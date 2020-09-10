"use strict";
var itgWait = require('../../helpers/helper');
var itgElement  = require('../../ProtractorElements/elementClass');

class HomePage {
    /**
     * @param {*} url - while calling this function we need pass the url 
     */
    async navigateToPage(url) {
       return await itgElement.getBrowser(url);        
    }
    /**
     * @isUserSignedIn - function will reurn user name and other details after signing in 
     */
    async isUserSignedIn(){
        itgWait.waitForElementToBePresent('.//*[@id="nav-link-accountList"]');
        return await itgElement.xpath('.//*[@id="nav-link-accountList"]','outerText');
    }
    /**
     * 
     * @param {*} product - the product name to search for and add to basket
     * @searchForProduct - function will search for the given product 
     */
    async searchForProduct(product){
        await itgElement.id('twotabsearchtextbox', 'sendKeys', product);
        return await itgElement.xpath('//div[@class="nav-search-submit nav-sprite"]//input[@class="nav-input"]', 'click')
    }
    /**
     * @cookie - cookir box will be closed
     */
    async acceptCookie(){
        const cookie = await element(by.id('a-autoid-0')).isPresent();
        if(cookie === true){
          return await itgElement.id('a-autoid-0', 'click')
        }else{
            console.log("No cookie")
        }
    }

}
module.exports = new HomePage();