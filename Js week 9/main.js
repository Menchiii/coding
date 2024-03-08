class Card {
    constructor(value, suit) {
        this.value = value; // Card value (e.g., '2', '3', ..., 'Jack', 'Queen', 'King', 'Ace')
        this.suit = suit; // Card suit (e.g., 'Hearts', 'Diamonds', 'Clubs', 'Spades')
    }
}

class Deck {
    constructor() {
        this.cards = []; // Array to hold all the cards in the deck
        // Initialize the deck with 52 cards (13 cards per suit)
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        for (let suit of suits) {
            for (let value of values) {
                this.cards.push(new Card(value, suit));
            }
        }
        this.shuffle(); // Shuffle the deck
    }

    shuffle() {
        // Shuffle the deck using the Fisher-Yates algorithm
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    dealCard() {
        // Deal a single card from the top of the deck
        return this.cards.pop();
    }
}

class Player {
    constructor(name) {
        this.name = name; // Player name
        this.hand = []; // Array to hold the cards in the player's hand
        this.score = 0; // Player's score
    }

    addCard(card) {
        // Add a card to the player's hand
        this.hand.unshift(card); // Using unshift to add the card to the top of the hand (LIFO)
    }

    playCard() {
        // Play the top card from the player's hand
        return this.hand.pop(); // Using pop to remove and return the top card from the hand (LIFO)
    }

    updateScore(points) {
        // Update the player's score
        this.score += points;
    }
}

class Game {
    constructor(player1Name, player2Name) {
        // Initialize the game with two players and a deck
        this.players = [new Player(player1Name), new Player(player2Name)];
        this.deck = new Deck();
    }

    dealCards() {
        // Deal 26 cards to each player
        for (let i = 0; i < 26; i++) {
            for (let player of this.players) {
                player.addCard(this.deck.dealCard());
            }
        }
    }

    compareCards(card1, card2) {
        // Compare two cards and determine the winner
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        const value1 = values.indexOf(card1.value);
        const value2 = values.indexOf(card2.value);
        if (value1 > value2) {
            return 1; // Player 1 wins
        } else if (value1 < value2) {
            return -1; // Player 2 wins
        } else {
            return 0; // Tie
        }
    }

    playRound() {
        // Play a round of the game
        const card1 = this.players[0].playCard();
        const card2 = this.players[1].playCard();
        const result = this.compareCards(card1, card2);
        if (result === 1) {
            this.players[0].updateScore(1); // Player 1 wins the round
        } else if (result === -1) {
            this.players[1].updateScore(1); // Player 2 wins the round
        }
    }

    play() {
        // Play the entire game
        this.dealCards();
        while (this.players[0].hand.length > 0 && this.players[1].hand.length > 0) {
            this.playRound();
        }
        this.displayScore();
    }

    displayScore() {
        // Display the final score and declare the winner
        const player1Score = this.players[0].score;
        const player2Score = this.players[1].score;
        console.log(`Final Score: ${this.players[0].name}: ${player1Score}, ${this.players[1].name}: ${player2Score}`);
        if (player1Score > player2Score) {
            console.log(`${this.players[0].name} wins!`);
        } else if (player1Score < player2Score) {
            console.log(`${this.players[1].name} wins!`);
        } else {
            console.log(`It's a tie!`);
        }
    }
}

// Usage
const game = new Game('Player 1', 'Player 2');
game.play(); // Start the game
