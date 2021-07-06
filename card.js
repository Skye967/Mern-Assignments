class card {
    constructor( name, cost ) {
        this.name = name;
        this.cost = cost;
    }
}


class unit extends card {
    constructor( name, cost, power, resilience ) {
        super( name, cost );
        this.power = power;
        this.resilience = resilience;
    }

    playCard( card, target ) {

        if ( card.stat == 'resilience' ) {
            target.resilience += card.magnitude;
        }
        if ( card.stat == 'power' ) {
            target.power += card.magnitude;
        }
        console.log( card );
        console.log( target );
    }


}

class effect extends card {
    constructor( name, cost, text, stat, magnitude ) {
        super( name, cost );
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

}



var redBeltNinja = new unit( "Red Belt Ninja", 3, 3, 4 );
var blackBeltNinja = new unit( "Black Belt Ninja", 4, 5, 4 );
var hardAlgo = new effect( "Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3 );
var unhandledPromiseRejection = new effect( "Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2 );
var pairProgramming = new effect( "Pair Programming", 3, "increase target's power by 2", "power", 2 );
redBeltNinja.playCard( hardAlgo, redBeltNinja );
blackBeltNinja.playCard( unhandledPromiseRejection, redBeltNinja );
redBeltNinja.playCard( pairProgramming, redBeltNinja );