// Class representing a character in the D&D world
class Character {
    constructor(name, race, classType) {
        this.name = name;
        this.race = race;
        this.classType = classType;
    }

    // Method to describe the character
    describe() {
        return `${this.name} is a ${this.race} ${this.classType}.`;
    }
}

// Class representing an adventuring party in a tavern
class Party {
    constructor(name) {
        this.name = name;
        this.characters = []; // Array to store characters in the party
    }

    // Method to add a character to the party
    addCharacter(character) {
        if (character instanceof Character) { // Check if the argument is an instance of Character
            this.characters.push(character);
        } else {
            throw new Error(`You can only add an instance of Character. Argument is not a character: ${character}`);
        }
    }

    // Method to describe the party
    describe() {
        return `${this.name} has ${this.characters.length} characters.`;
    }
}

// Class representing a tavern where parties gather
class Tavern {
    constructor() {
        this.parties = []; // Array to store parties in the tavern
        this.selectedParty = null; // Variable to store the currently selected party
    }

    // Method to start the tavern menu
    start() {
        let selection = this.showMainMenuOptions(); // Show the main menu options
        while (selection !== '0') { // Continue until the user selects to exit
            switch (selection) {
                case '1':
                    this.createParty();
                    break;
                case '2':
                    this.viewParty();
                    break;
                case '3':
                    this.deleteParty();
                    break;
                case '4':
                    this.displayParties();
                    break;
                default:
                    alert('Invalid selection. Please choose again.');
                    break;
            }
            selection = this.showMainMenuOptions(); // Show the main menu options again
        }
        alert(`Farewell adventurers! May your rolls be ever in your favor!`); // Farewell message
    }

    // Method to show the main menu options and get user input
    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create new party
        2) View party
        3) Delete party
        4) Display all parties
        `);
    }

    // Method to show the menu options for a selected party and get user input
    showPartyMenuOptions(partyInfo) {
        return prompt(`
        0) Back
        1) Add character
        2) Remove character
        -------------------
        ${partyInfo}
        `);
    }

    // Method to display all parties in the tavern
    displayParties() {
        let partyString = '';
        for (let i = 0; i < this.parties.length; i++) {
            partyString += i + ') ' + this.parties[i].name + '\n';
        }
        alert(partyString);
    }

    // Method to create a new party
    createParty() {
        let name = prompt(`Enter name for your adventuring party:`);
        this.parties.push(new Party(name)); // Create a new party and add it to the tavern
    }

    // Method to view details of a selected party
    viewParty() {
        let index = prompt(`Enter the index of the party you want to view:`);
        if (index > -1 && index < this.parties.length) { // Check if the index is valid
            this.selectedParty = this.parties[index]; // Set the selected party
            let description = `Party name: ${this.selectedParty.name}\n`;

            // Generate a description of the characters in the party
            for (let i = 0; i < this.selectedParty.characters.length; i++) {
                description += `${i}) ${this.selectedParty.characters[i].name} - ${this.selectedParty.characters[i].race} ${this.selectedParty.characters[i].classType}\n`;
            }

            let selection = this.showPartyMenuOptions(description); // Show party menu options
            switch (selection) {
                case '1':
                    this.addCharacterToParty();
                    break;
                case '2':
                    this.removeCharacterFromParty();
                    break;
                default:
                    break;
            }
        }
    }

    // Method to add a character to the selected party
    addCharacterToParty() {
        let name = prompt(`Enter name for the character:`);
        let race = prompt(`Enter race for the character:`);
        let classType = prompt(`Enter class for the character:`);
        this.selectedParty.addCharacter(new Character(name, race, classType)); // Create a new character and add it to the party
    }

    // Method to remove a character from the selected party
    removeCharacterFromParty() {
        let index = prompt(`Enter the index of the character you want to remove:`);
        if (index > -1 && index < this.selectedParty.characters.length) { // Check if the index is valid
            this.selectedParty.characters.splice(index, 1); // Remove the character from the party
            alert('Character removed from the party.');
        } else {
            alert('Invalid index.');
        }
    }
}

// Create an instance of the Tavern class and start the tavern menu
let tavern = new Tavern();
tavern.start();
