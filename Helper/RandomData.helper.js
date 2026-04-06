class RandomDataHelper {
    // Generate a random name with specified length (default 6)
    static getRandomName(length = 6) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let name = '';
        for (let i = 0; i < length; i++) {
            name += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return name;
    }

    // Generate a random phone number (10 digits)
    static getRandomPhoneNumber(prefix = '9') {
        let number = prefix;
        for (let i = 0; i < 9; i++) { // 9 more digits to make 10 digits total
            number += Math.floor(Math.random() * 10);
        }
        return number;
    }
}

module.exports = RandomDataHelper;
