class Key {
    private signature = Math.random();

    public getSignature(): number {
        return this.signature;
    }
}


class Person {
    private key: Key;

    constructor(k: Key) {
        this.key = k;
    }

    public getKey(): Key {
        return this.key;
    }
}


abstract class House {
    protected door: boolean = false;
    protected tenants: Person[] = [];
    protected key: Key;

    constructor(k: Key) {
        this.key = k;
    }

    public OpenDoor(k: Key) { }

    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
        }
    }
}


class MyHouse extends House {
    constructor(k: Key) {
        super(k);
    }

    public openDoor(k: Key) {
        if (k.getSignature() === this.key.getSignature()) {
            this.door = true;
        }
    }
}


const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export { };