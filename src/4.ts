class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) { }
    
    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected doorLocked: boolean = true;
    protected tenants: Person[] = [];

    constructor(protected key: Key) { };

    comeIn(person: Person): void {
        if (!this.doorLocked) {
            this.tenants.push(person);
            console.log('Person entered the house.');
        } else {
            console.log('The door is closed. Person cannot enter.')
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    public openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.doorLocked = false;
            console.log('The door is now open.');
        } else {
            console.log('The key does not fit. The door remains closed.');
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};