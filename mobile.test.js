from appium import webdriver
from time import sleep
from extentreports import ExtentTest as ext, ExtentReports as extr

ext = extr("test-report.html")
test = ext.create_test("MyTest", "Description of my test")

# Set up desired capabilities
desired_caps = {
    'platformName': 'Android',
    'platformVersion': 'YOUR_ANDROID_VERSION',
    'deviceName': 'emulator-5554', 
    'appPackage': 'com.wdiodemoapp',
    'appActivity': 'com.wdiodemoapp.MainActivity', 
    'noReset': True                              
}

# Initialize the driver
driver = webdriver.Remote('http://localhost:4723/wd/hub', desired_caps)

# Wait for a few seconds to let the app launch
sleep(10)

login_button = driver.find_element(AppiumBy.ID, 'com.example.myapp:id/login_button')
login_button.click()
test.log(ExtentTest.INFO, "Clicked on login button")

login_button = driver.find_element(AppiumBy.ID, 'com.example.myapp:id/biometric')
login_button.click()

test.log(ExtentTest.INFO, "Clicked on biometric authentication button")


driver.execute_script('mobile: fingerprint', {'fingerprintId': 1})

test.log(ExtentTest.INFO, "Biometric authentication successful")

login_button = driver.find_element(AppiumBy.ID, 'com.example.myapp:id/forms')
login_button.click()

login_button = driver.find_element(AppiumBy.ID, 'com.example.myapp:id/input').sendKeys("Abc")

test.log(ExtentTest.INFO, "Entered Abc in the input field")

dropdown = driver.find_element(AppiumBy.ID, 'com.example.myapp:id/dropdown')
dropdown.click()

test.log(ExtentTest.INFO, "Clicked on the dropdown menu")

sleep(2)

option_to_select = driver.find_element(AppiumBy.XPATH, "//android.widget.TextView[@text='webdriver.io.is.awesome']")
option_to_select.click()

test.log(ExtentTest.INFO, "webdriver.io.is.awesome")

ext.flush()
driver.quit()
