"use strict";
var itgWait = require('../../helpers/helper');
var itgElement  = require('../../ProtractorElements/elementClass');

class SignPage {
    /**
     * @navigateToSign - will navigate to sign page
     */
    async navigateToSign(){
        await itgWait.waitForElementToBePresent('.//*[@id="nav-link-accountList"]');
       return await itgElement.id('nav-link-accountList', 'click');
    }
    /**
     * 
     * @param {*} fieldType - user name or password then accordingly will enter credentials
     * @param {*} value - user name and password values
     */
    async signCredentials(fieldType, value){
        (fieldType === 'username') ?
        await itgWait.waitForElementToBePresent('.//*[@id="ap_email"]'):
        await itgWait.waitForElementToBePresent('.//*[@id="ap_password"]');
        (fieldType === 'username') ? 
        await itgElement.id('ap_email', 'sendKeys', value):
        await itgElement.id('ap_password', 'sendKeys', value);
    }
    /**
     * @clickContinueButton will click continue button in sign process
     */
    async clickContinueButton(){
        return await itgElement.xpath('//input[@type="submit"]', 'click')
    }
    /**
     * @clickSignBUtton will click sign in button in sign process
     */
    async clickSignBUtton(){   
        return await itgElement.xpath('//input[@type="submit"]', 'click')     
    }
}
module.exports = new SignPage();