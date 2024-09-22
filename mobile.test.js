describe('Native App Automation', () => {
    it('should login using biometric fingerprint', async () => {
        const fingerprintButton = await $('~fingerprintLoginButton');
        await fingerprintButton.waitForDisplayed();

        await driver.fingerPrint(1);

        const loggedInMessage = await $('~successMessage');
        await expect(loggedInMessage).toBeDisplayed();
    });

    it('should navigate and fill the form', async () => {
        const formNavButton = await $('~formTabButton');
        await formNavButton.click();

        const nameField = await $('~nameField');
        const emailField = await $('~emailField');
        const phoneField = await $('~phoneField');
        const submitButton = await $('~submitButton');

        await nameField.setValue('John Doe');
        await emailField.setValue('john.doe@example.com');
        await phoneField.setValue('1234567890');

        await submitButton.click();

        const successMessage = await $('~successMessage');
        await expect(successMessage).toBeDisplayed();
    });
});
