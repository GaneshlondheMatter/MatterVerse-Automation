// assertionHelper.js
// A generic assertion helper for WebdriverIO
// Usage: const Assert = require('../utils/assertionHelper');

class AssertHelper {
    /** Validate element is displayed */
    async isDisplayed(element, message = "Element is not displayed") {
        await expect(element).toBeDisplayed({ message });
    }

    /** Validate element is NOT displayed */
    async isNotDisplayed(element, message = "Element is displayed, but expected not to be") {
        await expect(element).not.toBeDisplayed({ message });
    }

    /** Validate element is enabled */
    async isEnabled(element, message = "Element is not enabled") {
        await expect(element).toBeEnabled({ message });
    }

    /** Validate element is disabled */
    async isDisabled(element, message = "Element is enabled, but expected to be disabled") {
        await expect(element).toBeDisabled({ message });
    }

    /** Validate element text matches expected */
    async hasText(element, expectedText, message = "Text does not match") {
        const actual = await element.getText();
        await expect(actual).toEqual(expectedText);
    }

    /** Validate element contains partial text */
    async containsText(element, partialText, message = "Partial text does not match") {
        const actual = await element.getText();
        await expect(actual).toContain(partialText);
    }

    /** Validate element attribute value */
    async hasAttribute(element, attr, expected, message = "Attribute value mismatch") {
        const actual = await element.getAttribute(attr);
        await expect(actual).toEqual(expected);
    }

    /** Validate element is clickable */
    async isClickable(element, message = "Element is not clickable") {
        await expect(element).toBeClickable({ message });
    }
}

module.exports = new AssertHelper();
