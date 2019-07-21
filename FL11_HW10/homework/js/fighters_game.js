function Fighter(person) {
    this.person_info = person;
    const default_hp = person.hp;
    this.obj = {
        name: person.name,
        wins: 0,
        losses: 0
    }
    this.getName = function() {
        return person.name;
    };
    this.getDamage = function() {
        return person.damage;
    };
    this.getAgility = function() {
        return person.agility;
    };
    this.getHealth = function() {
        return person.hp;
    };
    this.attack = function(attacked_person) {
        const {agility, name} = attacked_person.person_info;
        const max_agility = 100;
        const probable = Math.random() * max_agility;
        if (probable >= agility) {
            console.log(`${person.name} make ${person.damage} to ${name}`);
            let left_hp = attacked_person.person_info.hp - person.damage;
            left_hp < 0 ? attacked_person.person_info.hp = 0 : attacked_person.person_info.hp = left_hp;
        } else {
            console.log(`${name} attack missed`);
        }
    };
    this.logCombatHistory = function() {
        console.log('Name: ' + this.obj.name + ', Wins: ' + this.obj.wins + ', Losses: ' + this.obj.losses);
    };
    this.heal = function(hp) {
        let total_hp = person.hp + hp;
        if (total_hp > default_hp) {
            total_hp = default_hp
        } else if (total_hp < 0) {
            total_hp = 0;
        }
        person.hp = total_hp;
        return person.hp;
    };
    this.dealDamage = function(hp) {
        let total_hp = person.hp - hp;
        if (total_hp < 0) {
            total_hp = 0;
        } else if (total_hp > default_hp) {
            total_hp = default_hp;
        }
        person.hp = total_hp;
        return person.hp;
    };
    this.addWin = function() {
        this.obj.wins += 1;
    };
    this.addLoss = function() {
        this.obj.losses += 1;
    };
}

function battle(fighter1, fighter2) {
    const person1 = fighter1.person_info;
    const person2 = fighter2.person_info;
    const timeout = 100;
    if (person1.hp <= 0) {
        console.log(person1.name + ' is dead and cant fight.');
    } else if (person2.hp <= 0) {
        console.log(person2.name + ' is dead and cant fight.');
    } else {
        let timer = setInterval(() => {
            if (person1.hp === 0) {
                fighter1.obj.losses += 1;
                fighter2.obj.wins += 1;
                clearInterval(timer);
            } else if (person2.hp === 0) {
                fighter2.obj.losses += 1;
                fighter1.obj.wins += 1;
                clearInterval(timer);
            } else {
                fighter1.attack(fighter2);
                fighter2.attack(fighter1);
            }
        }, timeout);
    }
}

const John = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const Jim = new Fighter({name: 'Jim', damage: 10, agility: 40, hp: 120}); 