"use strict";
var itgWait = require('../../helpers/helper');
var itgElement  = require('../../ProtractorElements/elementClass');

 class ProductPage {
   /**
    * @getProductPrice - will retn the product price
    */
    async getProductPrice() {
      itgWait.waitForElementToBePresent('.//*[@id="priceblock_saleprice"]');
        const productPriceIs = await itgElement.id('priceblock_saleprice', 'getText');
        return productPriceIs.substring(1);
      }
      /**
       * @addProductToBasket - will add item to the basket
       */
    async addProductToBasket() {
        itgWait.waitForElementToBeClickable('//input[@id="add-to-cart-button"]');
        await itgElement.xpath('//input[@id="add-to-cart-button"]', 'click');
        await itgWait.waitForElementToBePresent('(.//*[@class="a-color-price hlb-price a-inline-block a-text-bold"])[1]');        
    }

}
module.exports = new ProductPage();