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

var ninja1 = new ninja( "Naruto" );
console.log( ninja1 );
ninja1.sayname();
ninja1.drinkSake();
ninja1.getStats();