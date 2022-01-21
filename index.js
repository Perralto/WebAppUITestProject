const{Builder, By, Key, until} = require("selenium-webdriver");

loginValue = "stephane.dileo@gmail.com"
passValue = "TestQA2022"

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function loginTestChrome() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://www.smood.ch/fr");
  let loginButton = driver.findElement(By.className("gbx-button --connect-button"));
  loginButton.click();
  await driver.wait(until.elementLocated(By.className("gbx-auth-content")), 20000, 'Timed out after 20 seconds', 4000).then(el => el.getText().then(x => console.log(x)));
  driver.findElement(By.id("login-email")).sendKeys(loginValue);
  driver.findElement(By.id("login-password")).sendKeys(passValue);
  let connectButton = driver.findElement(By.id("loginButton"));
  connectButton.click();
}

async function loginTestFirefox() {
  let driver = await new Builder().forBrowser("firefox").build();
  await driver.get("https://www.smood.ch/fr");
  let loginButton = driver.findElement(By.className("gbx-button --connect-button"));
  loginButton.click();
  await driver.wait(until.elementLocated(By.className("gbx-auth-content")), 20000, 'Timed out after 20 seconds', 4000).then(el => el.getText().then(x => console.log(x)));
  driver.findElement(By.id("login-email")).sendKeys(loginValue);
  driver.findElement(By.id("login-password")).sendKeys(passValue);
  let connectButton = driver.findElement(By.id("loginButton"));
  await sleep(5000);
  connectButton.click();
}

loginTestChrome();
loginTestFirefox();
