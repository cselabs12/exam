const { Builder, By, Key, until } = require('selenium-webdriver');
const path = require('path');

(async function example() {
    // Initialize the Chrome WebDriver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Load the HTML file
        const filePath = path.resolve('testPage.html'); // Adjust path if necessary
        await driver.get(`file://${filePath}`);

        // Find the input field and enter a name
        await driver.findElement(By.id('name')).sendKeys('John Doe');

        // Click the Submit button
        await driver.findElement(By.id('submitButton')).click();

        // Wait for the result text to appear and get its content
        let result = await driver.wait(until.elementLocated(By.id('result')), 1000);
        let resultText = await result.getText();

        // Print the result
console.log('Result:', resultText);

        // Verification (optional)
        if (resultText === 'Hello, John Doe!') {
console.log('Test Passed');
        } else {
console.log('Test Failed');
        }
    } finally {
        // Close the browser
        await driver.quit();
    }
})();