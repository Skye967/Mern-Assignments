// Number.prototype.isPrime = function () {
//     for ( let i = 3; i < this; i += 2 ) {
//         if ( this % i === 0 ) {
//             return false;
//         }
//     }
//     return true;
// }


// const {
//     performance
// } = require( 'perf_hooks' );
// const start = performance.now();
// let primeCount = 1;
// let num = 3; // for math reasons, 1 is considered prime
// while ( primeCount < 1e4 ) {
//     if ( num.isPrime() ) {
//         primeCount++;
//     }
//     num += 2;
// }
// console.log( primeCount );
// console.log( `The 10,000th prime number is ${num-1}` );
// console.log( `This took ${ performance.now() - start } milliseconds to run` );

// The 10,000th prime number is 104723, This took 19562.358926057816 milliseconds to run, I made a 20 second improvement
// I assume the 1,000,000 would take 100 times longer



// // recursive
// const {
//     performance
// } = require( 'perf_hooks' );
// const start = performance.now();

// function rFib( n ) {
//     if ( n < 2 ) {
//         return n;
//     }
//     return rFib( n - 1 ) + rFib( n - 2 );
// }
// console.log( `This took ${ performance.now() - start } milliseconds to run` );
// console.log( rFib( 20 ) );
// // slower


// // iterative
// const {
//     performance1
// } = require( 'perf_hooks' );
// const start1 = performance.now();

// function iFib( n ) {
//     const vals = [ 0, 1 ];
//     while ( vals.length - 1 < n ) {
//         let len = vals.length;
//         vals.push( vals[ len - 1 ] + vals[ len - 2 ] );
//     }
//     return vals[ n ];
// }
// console.log( `This took ${ performance.now() - start1 } milliseconds to run` );
// console.log( iFib( 20 ) );
// this one is faster


// recursive
const {
    performance
} = require( 'perf_hooks' );
const start = performance.now();
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

const reversed1 = story.split( "" ).reverse().join( "" );
const reversed2 = story.split( '' ).reduce( ( reversed, character ) => character + reversed, '' )
// faster

console.log( reversed1 )
console.log( `This took ${ performance.now() - start } milliseconds to run` );