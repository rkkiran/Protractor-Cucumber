Feature: On Amazon Search for product add to basket and check basket total

    Background: Sign into Amazon.co.uk
        Given Amazon.co.uk is open
        When I click Sign-in
        And enter valid 'username' as 'rkkiran2020@gmail.com'
        And I 'Continue'
        And enter valid 'password' as 'ITGpassw0rd'
        And I 'signed in'
        Then I am logged in

    Scenario: Search for product add to basket
        Given when I search for 'iceworks 5000'
        When the search results are displayed
        Then the search results has the 'iceworks 5000' in it
        Given I add "iceworks 5000" to my basket
        When I check my basket total
        Then it should match the price of the item added into basket