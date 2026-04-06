const EmergencyContactsPage = require('../pageobjects/EmergencyContacts.page');
const LoginHelper = require('../../Helper/login.helper');
const matterHomePage = require('../pageobjects/matterHome.page');
const RandomDataHelper = require('../../Helper/RandomData.helper');
const Assert = require('../../Helper/Assert.helper');   // <-- Added

describe('Emergency Contact Flow', () => {

    it('Should delete existing emergency contacts and add new ones', async () => {

        // ---------- LOGIN & NAVIGATION ----------
        await LoginHelper.loginIntoMatterVerse();

        await matterHomePage.clickMatterHomeLogo();
        await matterHomePage.clickMyMatterTab();
        await matterHomePage.clickAccountTab();

        await EmergencyContactsPage.clickEmergencyLink();
        await browser.pause(3000); // allow page to fully load

        // ---------- DELETE EXISTING CONTACTS ----------
        console.log('Checking for existing emergency contacts...');

        while (true) {
            try {
                const menuBtn = await EmergencyContactsPage.getMenuOptionButton(1);

                await menuBtn.waitForDisplayed({ timeout: 3000 });
                await Assert.isDisplayed(menuBtn, "Menu button should be visible");
                await Assert.isClickable(menuBtn, "Menu button should be clickable");

                await menuBtn.click();

                await EmergencyContactsPage.deleteButton.waitForDisplayed({ timeout: 5000 });
                await Assert.isDisplayed(EmergencyContactsPage.deleteButton, "Delete option should be visible");
                await Assert.isClickable(EmergencyContactsPage.deleteButton, "Delete option should be clickable");
                await EmergencyContactsPage.deleteButton.click();

                await EmergencyContactsPage.deleteConfirmButton.waitForDisplayed({ timeout: 5005 });
                await Assert.isDisplayed(EmergencyContactsPage.deleteConfirmButton, "Delete confirmation should be visible");
                await Assert.isClickable(EmergencyContactsPage.deleteConfirmButton, "Delete confirmation should be clickable");

                await EmergencyContactsPage.deleteConfirmButton.click();

                console.log('Deleted one emergency contact');
                await browser.pause(1500);

            } catch (error) {
                console.log('No more emergency contacts to delete');
                break;
            }
        }

        // ---------- ADD NEW CONTACTS ----------
        const addIcons = await EmergencyContactsPage.getAddContactIcons();
        const addIconCount = addIcons.length;

        console.log(`Add Contact icons found: ${addIconCount}`);

        await expect(addIconCount).toBeGreaterThan(0);

        for (let i = 1; i <= addIconCount; i++) {
            const randomName = RandomDataHelper.getRandomName();
            const randomPhone = RandomDataHelper.getRandomPhoneNumber();

            const addIcon = await EmergencyContactsPage.getAddContactIcon(1);

            await addIcon.waitForDisplayed({ timeout: 10000 });
            await Assert.isDisplayed(addIcon, "Add contact icon should be visible");
            await Assert.isClickable(addIcon, "Add contact icon should be clickable");

            await addIcon.click();

            await EmergencyContactsPage.addNewEmergencyContact(
                randomName,
                randomPhone
            );

            console.log(`Added emergency contact: ${randomName} - ${randomPhone}`);
            await browser.pause(1500);
        }

        console.log('Emergency Contact flow completed successfully');
    });
});
