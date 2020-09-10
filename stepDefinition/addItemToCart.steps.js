"use strict";
const{Given, Then, When} = require('cucumber');
const {BasketPage} = require('../pages/basketPage/basketPage');
var homePage = require('../pages/homePage/homePage')
var sign = require('../pages/signPage/signInPage')
var productPage = require('../pages/productPage/productPage');
var basket = require('../pages/basketPage/basketPage');
var search = require('../pages/searchResultPage/searchResultPage')
var expect = require('chai').expect;

var baskPrice = null;
var productPrice = null;

Given('Amazon.co.uk is open', async () => {
  // await new BasketPage().navigateToPage('https://www.amazon.co.uk/');
  await homePage.navigateToPage('https://www.amazon.co.uk/');
  });
When('I click Sign-in', async () => {
  await sign.navigateToSign();
});
Then(/^enter valid '(.*)' as '(.*)'$/, async (fieldType, value) => {
  await sign.signCredentials(fieldType, value);
});
Then(/^I '(.*)'$/, async (action) => {
  (action === 'Continue')?
  sign.clickContinueButton():
  sign.clickSignBUtton();
});
Then(/^I am logged in$/, async () => {
  const signedInText = await homePage.isUserSignedIn();
  // await homePage.acceptCookie();
   expect(JSON.stringify(signedInText)).to.contain('"Hello, Ravi\\nAccount & Lists"');
});
Given(/^when I search for '(.*)'$/, async (product) => {
  await homePage.searchForProduct(product);
});
When('the search results are displayed', async () => {
     const searchText = await search.searchResult();
    expect(searchText).to.contains('results for "iceworks 5000"')
});
Then(/^the search results has the '(.*)' in it$/, async (product) => {
  await search.clickOnTheProcuct('/Iceworks-5000');
})
Given(/^I add "(.*)" to my basket$/, async (product) => {
    productPrice =  await productPage.getProductPrice();
    await productPage.addProductToBasket();

})
When(/^I check my basket total$/, async () => {  
  baskPrice =  await basket.basketTotal();
  await basket.editBasket();
  await basket.deleteItem();
})
Then(/^it should match the price of the item added into basket$/, async () => {
  expect(productPrice).to.equal(baskPrice)
});
