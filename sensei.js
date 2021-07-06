class ninja {

    constructor( name ) {
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }

    sayname() {
        console.log( this.name );
    }

    getStats() {
        console.log( this.health );
        console.log( this.speed );
        console.log( this.strength );
    }

    drinkSake() {
        this.health += 10;
    }
}

class sensei extends ninja {

    constructor( name ) {
        super();
        this.name = name;
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }

    speekWisdom() {
        this.drinkSake();
        console.log( "What one programer can do in 2 months, Two programers can do in one month." );
    }

}

var sensei1 = new sensei( "Gandalf" );
console.log( sensei1 );
sensei1.speekWisdom();
sensei1.getStats();