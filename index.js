const{Builder, By, Key, until} = require("selenium-webdriver");

const browsers = ["chrome", "firefox", "safari"];
loginValue = "stephane.dileo@gmail.com"
passValue = "TestQA2022"

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function loginTest() {
  for (const element of browsers) {
    let driver = await new Builder().forBrowser(element).build();
    await driver.get("https://www.smood.ch/fr");
    let loginButton = driver.findElement(By.className("gbx-button --connect-button"));
    loginButton.click();
    await driver.wait(until.elementLocated(By.className("gbx-auth-content")), 20000, 'Timed out after 20 seconds', 4000).then(el => el.getText().then(x => console.log(x)));
    driver.findElement(By.id("login-email")).sendKeys(loginValue);
    driver.findElement(By.id("login-password")).sendKeys(passValue);
    let connectButton = driver.findElement(By.id("loginButton"));
    await sleep(3000);
    connectButton.click();
    let loginConfirm = await driver.wait(until.elementLocated(By.className("mx-2 d-none d-lg-inline-block username-container")), 10000, 'LOGIN FAILED, USER CREDENTIALS MIGHT BE WRONG..', 2000);
    if (loginConfirm) {
      console.log(element, "LOGIN SUCCESS !");
    }
    else {
    }
  }
  console.log("");
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on('data', process.exit.bind(process, 0));
}

loginTest();
