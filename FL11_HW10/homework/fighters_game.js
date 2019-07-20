function Fighter() {
    getName: () => {
        return this.name;
    }
}

const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25}); 
let name = myFighter.getName();
console.log(name); // John