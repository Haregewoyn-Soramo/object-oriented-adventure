// Part 1: Humble Beginnings
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      belongings: ["small hat", "sunglasses"]
    }
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
};

// Loop to log each item in Robin's inventory
for (let item of adventurer.inventory) {
  console.log(item);
}

// Test roll method
adventurer.roll();
adventurer.roll(2);

// Part 2: Class Fantasy
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  roll() {
    const result = Math.floor(Math.random() * 20) + 1;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

// Create Robin using the Character class
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Test roll method for Robin and companions
robin.roll();
robin.companion.roll();
robin.companion.companion.roll();

// Part 3: Class Features
class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}

// Create an adventurer
const newAdventurer = new Adventurer("New Adventurer", "Warrior");
newAdventurer.scout();

// Part 4: Class Uniforms
Character.MAX_HEALTH = 100;

// Part 5: Gather your Party
class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }

  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }

  findByIndex(index) {
    return this.adventurers[index];
  }

  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
healers.generate("Healer 1");
healers.generate("Healer 2");
console.log(healers.findByIndex(0));
console.log(healers.findByName("Healer 2"));
