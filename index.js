const{Builder, By, Key, Util} = require("selenium-webdriver");
async function exemple() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://google.com");
    let button = driver.findElement(By.id("L2AGLb"));
    button.click();
    await driver.findElement(By.name("q")).sendKeys("Selenium",Key.RETURN);
}
exemple();