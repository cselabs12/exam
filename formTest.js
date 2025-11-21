const { Builder, By, Key, until } = require('selenium-webdriver');
const path = require('path');
(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        const filePath = path.resolve('testPage.html'); 
        await driver.get(`file://${filePath}`);
        await driver.findElement(By.id('name')).sendKeys('John Doe');
        await driver.findElement(By.id('submitButton')).click();
        let result = await driver.wait(until.elementLocated(By.id('result')), 1000);
        let resultText = await result.getText();
        console.log('Result:', resultText);
        if (resultText === 'Hello, John Doe!') {
            console.log('Test Passed');
        } 
        else {
            console.log('Test Failed');
        }
    } 
    finally {
        await driver.quit();
    }
})();
