class SwipeHelper {

    // ----------------- Vertical Swipe Down -----------------
    async scrollDown() {
        const { height, width } = await driver.getWindowSize();
        const startX = width / 2;
        const startY = height * 0.75;
        const endY = height * 0.25;

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerMove', duration: 600, x: startX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
        await driver.pause(800);
    }

    async scrollDownUntilVisible(element, maxScrolls = 10) {
        for (let i = 0; i < maxScrolls; i++) {
            if (await element.isDisplayed()) return true;
            await this.scrollDown();
        }
        throw new Error("Element not visible even after scrolling down.");
    }


    // ----------------- Vertical Swipe Up -----------------
    async scrollUp() {
        const { height, width } = await driver.getWindowSize();
        const startX = width / 2;
        const startY = height * 0.30;
        const endY = height * 0.80;

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerMove', duration: 600, x: startX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
        await driver.pause(800);
    }

    async scrollUntilVisibleUp(element, maxScrolls = 10) {
        for (let i = 0; i < maxScrolls; i++) {
            if (await element.isDisplayed()) return true;
            await this.scrollUp();
        }
        throw new Error("Element not visible even after scrolling up.");
    }


    // ----------------- Horizontal Swipe Left -----------------
    async swipeLeft() {
        const { height, width } = await driver.getWindowSize();
        const startY = height / 2;
        const startX = width * 0.80;
        const endX = width * 0.20;

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerMove', duration: 600, x: endX, y: startY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
        await driver.pause(800);
    }


    // ----------------- Horizontal Swipe Right -----------------
    async swipeRight() {
        const { height, width } = await driver.getWindowSize();
        const startY = height / 2;
        const startX = width * 0.20;
        const endX = width * 0.80;

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerMove', duration: 600, x: endX, y: startY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
        await driver.pause(800);
    }

}

module.exports = new SwipeHelper();
