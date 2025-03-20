// Horoscope Fortune Teller

const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Horoscope {
    constructor() {
        // Defines fortunes for each zodiac sign
        this.fortunes = {
            1: ["You will find joy in unexpected places.", "A new opportunity is on the horizon."], // Capricorn
            2: ["Embrace change; it will lead to growth.", "A friend will bring you good news."], // Aquarius
            3: ["Trust your instincts; they will guide you.", "A creative project will flourish."], // Pisces
            4: ["Take a leap of faith; it will pay off.", "Love is in the air."], // Aries
            5: ["Patience is key; good things come to those who wait.", "A surprise awaits you."], // Taurus
            6: ["Your hard work will soon be recognized.", "A new friendship will blossom."], // Gemini
            7: ["Focus on self-care; it's time to recharge.", "An adventure is just around the corner."], //Cancer
            8: ["Your confidence will attract new opportunities.", "A long-awaited dream is within reach."], // Leo
            9: ["Balance is essential; find harmony in your life.", "A new skill will enhance your career."], // Virgo
            10: ["Collaboration will lead to success.", "A hidden talent will emerge."], // Libra
            11: ["Trust the process; everything happens for a reason.", "A financial opportunity is coming."], // Scorpio
            12: ["Reflect on the past year; it's time for new beginnings.", "A journey will bring you clarity."], // Sagittatrius
        };
    }

    // Method to get the zodiac sign based on the birth month
    getZodiacSign(month) {
        // Array of zodiac signs corresponding to each month
        const signs = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
        // Return the zodiac sign for the given month (subtract 1 for zero-based index)
        return signs[month - 1];
    }

    // Method to get a random fortune for the given month
    getRandomFortune(month) {
        // Get array of fortunes for specified month
        const fortunesArray = this.fortunes[month];
        return fortunesArray[Math.floor(Math.random() * fortunesArray.length)];
    }

    // Method to tell the fortune based on the user's birth month and the number of fortune requested
    tellFortune(month, count) {
        if (month < 1 || month > 12) {
            console.log("Please enter a valid month (1-12).")
            return;
        }

        // Get the zodiac sign for the given month
        const zodiacSign = this.getZodiacSign(month);
        console.log(`Your zodiac sign is ${zodiacSign}`);

        // Loop to print the requested number of fortunes
        for (let i = 0; i < count; i++) {
            // Get a random fortune for the specified month
            const fortune = this.getRandomFortune(month);
            console.log(`Fortune ${i + 1}: ${fortune}`);
        }
    }
}

// Main execution
// Prompt user to enter their birth month and convert input to an int
rl.question("Enter your birth month (1-12): ", (birthMonthInput) => {
    const birthMonth = parseInt(birthMonthInput);
    rl.question("How many fortunes would you like to see ? (1-2): ", (fortuneCountInput) => {
        const fortuneCount = parseInt(fortuneCountInput);

        // Create a new instance of the Horoscope class
        const horoscopeInstance = new Horoscope();
        horoscopeInstance.tellFortune(birthMonth, fortuneCount);

        // Close the readline interface
        rl.close();
    });
});