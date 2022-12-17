class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = speed ? speed : 3;
        this.strength = strength ? strength : 3;
    }

    sayName(){
        console.log(this.name);
    }    

    showStats(){
        console.log(this);
    }        

    drinkSake(){
        this.health = this.health + 10;
        console.log("Health:", this.health);
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom ? wisdom : 10;
    }

    speakWisdom() {
        console.log("Un mensaje de sabiduria");
        this.drinkSake();
    }
}

// ejemplo de salida
const superSensei = new Sensei("Alison");
superSensei.speakWisdom();
