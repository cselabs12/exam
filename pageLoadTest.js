const { Builder, By, until } = require('selenium-webdriver');
const path = require('path');
(async function pageLoadTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:8080');
        await driver.wait(until.titleIs('Form Test'), 10000); // 10-second timeout
        console.log('Page loaded successfully.');
    } finally {
        await driver.quit();
    }
})();
