arr1 = [ 1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30 ];
arr2 = [ 1, 3, 5, 4, 8, 30, 20, 17, 7 ];
sorted = [];


function quickSort( arr ) {
    num = Math.floor( arr.length / 2 );
    pivot = arr[ num ];
    var i = 0;
    var j = arr.length - 1;
    while ( i != num && j != num ) {
        while ( arr[ i ] < pivot ) {
            i++;
        }
        while ( arr[ j ] > pivot ) {
            j--;
        }
        var tempA = arr[ i ];
        var tempB = arr[ j ];
        if ( arr[ i ] != arr[ j ] && i != j ) {
            arr[ i ] = tempB;
            arr[ j ] = tempA;
        }
    }
    var half = Math.ceil( arr.length / 2 );
    var firstHalf = arr.slice( 0, half );
    var secondHalf = arr.slice( -half );
    if ( firstHalf.length > 1 && secondHalf.length > 1 ) {
        quickSort( firstHalf );
        quickSort( secondHalf );
    }
    if ( firstHalf.length == 1 && firstHalf < secondHalf ) {
        sorted.push( firstHalf[ 0 ] );
    }
    if ( secondHalf.length == 1 ) {
        sorted.push( secondHalf[ 0 ] );
        if ( firstHalf.length == 1 && firstHalf > secondHalf ) {
            sorted.push( firstHalf[ 0 ] );
        }
    }
    console.log( firstHalf );
    console.log( secondHalf );
}
quickSort( arr1 );
console.log( sorted );

////////////////////////////////////////////////////////////

// var items = [ 5, 3, 7, 6, 2, 9 ];

// function swap( items, leftIndex, rightIndex ) {
//     var temp = items[ leftIndex ];
//     items[ leftIndex ] = items[ rightIndex ];
//     items[ rightIndex ] = temp;
// }

// function partition( items, left, right ) {
//     var pivot = items[ Math.floor( ( right + left ) / 2 ) ], //middle element
//         i = left, //left pointer
//         j = right; //right pointer
//     while ( i <= j ) {
//         while ( items[ i ] < pivot ) {
//             i++;
//         }
//         while ( items[ j ] > pivot ) {
//             j--;
//         }
//         if ( i <= j ) {
//             swap( items, i, j ); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort( items, left, right ) {
//     var index;
//     if ( items.length > 1 ) {
//         index = partition( items, left, right ); //index returned from partition
//         if ( left < index - 1 ) { //more elements on the left side of the pivot
//             quickSort( items, left, index - 1 );
//         }
//         if ( index < right ) { //more elements on the right side of the pivot
//             quickSort( items, index, right );
//         }
//     }
//     return items;
// }
// console.log( quickSort( arr1, 0, arr1.length - 1 ) );