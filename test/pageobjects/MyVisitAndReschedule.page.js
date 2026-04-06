const { $, $$ } = require('@wdio/globals');
const Page = require('./page');
const BookTestRide = require('./BookTestRide.page');

class MyVisitAndReschedule extends Page {

    get myVisitBtn() {
        return $('//android.widget.Button[@resource-id="com.matter.companion.qa:id/btn_my_visit"]');
    }

    get upcomingVisitsList() {
        return $$('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.matter.companion.qa:id/rv_upcoming_visits"]/android.view.ViewGroup');
    }

    get rescheduleBtn() {
        return $('//android.widget.Button[@resource-id="com.matter.companion.qa:id/btn_reschedule"]');
    }

    get dateText() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_date_value"]');
    }

    get retryBtn() {
        return $('//android.widget.Button[@resource-id="com.matter.companion.qa:id/btn_common_success_failed"]');
    }

    get rescheduleTestRideBtn() {
        return $('//android.widget.Button[@resource-id="com.matter.companion.qa:id/btn_book_test_ride"]');
    }

    /* ---------- Actions ---------- */

    async openMyVisits() {
        await this.myVisitBtn.waitForDisplayed({ timeout: 5000 });
        await this.myVisitBtn.click();
    }

    async openFirstUpcomingVisit() {
        await browser.pause(1000);
        await this.upcomingVisitsList[0].click();
    }

    async openReschedule() {
        await this.rescheduleBtn.waitForDisplayed({ timeout: 5000 });
        await this.rescheduleBtn.click();
    }

    async clickRetry() {
        await this.retryBtn.waitForDisplayed({ timeout: 5000 });
        await this.retryBtn.click();
    }

    async confirmReschedule() {
        await this.rescheduleTestRideBtn.waitForDisplayed({ timeout: 5000 });
        await this.rescheduleTestRideBtn.click();
    }

    async getDateValue() {
        await this.dateText.waitForDisplayed({ timeout: 5000 });
        return await this.dateText.getText();
    }

    /** =========================
     * SMART DATE PICK + RESCHEDULE
     * ========================= */
    async smartReschedule(baseDay) {

        const todayDay = new Date().getDate();
        console.log("Today:", todayDay);

        // Build search window
        let daysToTry = [];

        if (baseDay < todayDay) {
            console.log("➡️ Base < Today → Move FORWARD next 7 days");
            for (let i = 0; i <= 7; i++) daysToTry.push(todayDay + i);
        } else if (baseDay > todayDay) {
            console.log("⬅️ Base > Today → Move BACKWARD last 7 days");
            for (let i = 0; i <= 7; i++) daysToTry.push(todayDay - i);
        } else {
            console.log("🔁 Base == Today → Forward only");
            for (let i = 1; i <= 7; i++) daysToTry.push(todayDay + i);
        }

        console.log("Days to Try:", daysToTry);

        let clicked = false;

        for (const day of daysToTry) {
            try {
                console.log(`🟡 Trying Day: ${day}`);

                const dateElement = await BookTestRide.getDateElement(day);

                // Safe checks only
                const visible = await dateElement.waitForDisplayed({ timeout: 3000 }).catch(() => false);
                const enabled = await dateElement.waitForEnabled({ timeout: 3000 }).catch(() => false);

                if (!visible || !enabled) {
                    console.log(`⚠️ Day ${day} NOT ready (visible=${visible}, enabled=${enabled})`);
                    continue;
                }

                console.log(`✅ Clicking Day: ${day}`);

                try {
                    await dateElement.click();
                } catch (e) {
                    console.log("⚠️ Normal click failed → using touch action");
                    await driver.touchAction({
                        action: 'tap',
                        element: dateElement
                    });
                }

                // Wait UI update
                await driver.pause(1500);

                // Check Reschedule button
                if (await this.rescheduleTestRideBtn.isEnabled()) {
                    console.log("🎯 Reschedule button enabled → clicking");
                    await this.confirmReschedule();
                    clicked = true;
                    break;
                } else {
                    console.log("❌ Button still disabled → trying next day");
                }

            } catch (err) {
                console.log(`❌ Error on day ${day}: ${err.message}`);
            }
        }

        if (!clicked) {
            throw new Error("❌ No Suitable Date Found or Button did not enable");
        }
    }
}

module.exports = new MyVisitAndReschedule();
