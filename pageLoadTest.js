const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

(async function pageLoadTest() {
    const chromeDriverPath = path.join(__dirname, 'chromedriver.exe');
    let options = new chrome.Options();
    options.addArguments('--disable-notifications');         // Prevents notification prompts
    options.addArguments('--disable-background-networking'); // Stops GCM calls
    options.addArguments('--disable-push-notifications');    // Explicitly disables push

    let service = new chrome.ServiceBuilder(chromeDriverPath);
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeService(service)
        .setChromeOptions(options)
        .build();

    try {
        await driver.get('http://localhost:6686');
        await driver.wait(until.titleIs('Form Test'), 10000); // 10-second timeout
        console.log('Page loaded successfully.');
    } finally {
        await driver.quit();
    }
})();