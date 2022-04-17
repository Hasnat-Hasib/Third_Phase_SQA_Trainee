const { Builder, By, until, Select, selectByValue } = require("selenium-webdriver");

async function Login() {
    // Launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to our application
    await driver.get("http://automationpractice.com/index.php");

    // //Set Login Button
    var signinButton = driver.findElement(By.className("login"));
    signinButton.click();

    //Entering email1 for one account
    driver.wait(until.elementLocated(By.id('email_create')), 10 * 1000).then(el => {
        el.sendKeys("hasib8nh@gmail.com");
    })


    driver.wait(until.elementLocated(By.id('SubmitCreate')), 12 * 1000).then(el => {
        el.click();
    })


    // Entering Firstname
    driver.wait(until.elementLocated(By.id('customer_firstname')), 15 * 1000).then(el => {
        el.sendKeys("Hasnat");
    })

    // Entering Firstname
    driver.wait(until.elementLocated(By.id('customer_lastname')), 15 * 1000).then(el => {
        el.sendKeys("Hasib");
    })
    // // Entering Firstname
    driver.wait(until.elementLocated(By.className('is_required validate form-control')), 100 * 1000).then(el => {
        el.sendKeys("123456");
    })

    //Address Firstname
    driver.wait(until.elementLocated(By.id('firstname')), 50 * 1000).then(el => {
        el.sendKeys("Hasnat");
    })
    //Address Lastname
    driver.wait(until.elementLocated(By.id('lastname')), 50 * 1000).then(el => {
        el.sendKeys("Hasib");
    })
    //Address Lastname
    driver.wait(until.elementLocated(By.id('address1')), 50 * 1000).then(el => {
        el.sendKeys("E-60,NS town");
    })
    //Address City
    driver.wait(until.elementLocated(By.id('city')), 50 * 1000).then(el => {
        el.sendKeys("Jashore");
    })
    //Postcode
    driver.wait(until.elementLocated(By.id('postcode')), 50 * 1000).then(el => {
        el.sendKeys("00000");
    })

    //Mobile
    driver.wait(until.elementLocated(By.id('phone_mobile')), 50 * 1000).then(el => {
        el.sendKeys("0332134345345");
    })

    // //Second Address
    driver.wait(until.elementLocated(By.id('alias')), 50 * 1000).then(el => {
        el.sendKeys("E-61");
    })

    // State
    driver.wait(until.elementLocated(By.xpath('//*[@id="id_state"]/option[2]')), 50 * 1000).then(el => {
        el.click();
    });

     // Register Button
     driver.wait(until.elementLocated(By.id('submitAccount')), 50 * 1000).then(el => {
        el.click();
    })
  

    // Login email
    driver.wait(until.elementLocated(By.id('email')), 50 * 1000).then(el => {
        el.sendKeys("hasib8nh@gmail.com");
    })
    // Login passwprd
    driver.wait(until.elementLocated(By.id('email')), 50 * 1000).then(el => {
        el.sendKeys("123456");
    })

    
       // Register Button
       driver.wait(until.elementLocated(By.id('SubmitLogin')), 50 * 1000).then(el => {
        el.click();
    })
     //Logout
       driver.wait(until.elementLocated(By.className('logout')), 50 * 1000).then(el => {
        el.click();
    })

    





}
Login();