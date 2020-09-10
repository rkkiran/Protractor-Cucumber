"use strict";
var itgWait = require('../../helpers/helper');
var itgElement  = require('../../ProtractorElements/elementClass');

 class BasketPage { 
    /**
     * @basketTotal function will wait for the element to be present then fuction will return the basket amount
     */
    async basketTotal(){
        await itgWait.waitForElementToBePresent('(.//*[@class="a-color-price hlb-price a-inline-block a-text-bold"])[1]');
        const priceOnBasket = await itgElement.xpath('(.//*[@class="a-color-price hlb-price a-inline-block a-text-bold"])[1]', 'getText');
        return priceOnBasket.substring(1);
        }
    /**
     * @editBasket will edit the basket on the page
     */
    async editBasket(){
        await itgWait.waitForElementToBePresent('.//*[@id="hlb-view-cart-announce"]');
        await itgElement.xpath('.//*[@id="hlb-view-cart-announce"]', 'click');
    }
    /**
     * @deleteItem - will delete item from the basket
     */
    async deleteItem(){
        const delleteXpath = './/*[@data-action="sc-item-action"]//input[@data-action="delete"]';
        await itgWait.waitForElementToBePresent(delleteXpath);
        return await itgElement.xpath(delleteXpath, 'click');
    }    
}
module.exports = new BasketPage();