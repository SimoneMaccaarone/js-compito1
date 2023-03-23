<<<<<<< Updated upstream
//  CICLI NESTATI
/*
for (let x=1; x<11; x++){
    for (let y=1; y<11; y++){
        console.log('x: ',x ,'y:',y);
    }
}
*/

// let counter1=1;
// let counter2=1;

// for (let x=' #'; counter<=2; x+=' #'){
//     counter1++;
//     for (let y='# ';counter2<=2 ; y+'# '){
//         counter2++;
//         if(counter1=2 && counter2=2){
//             break;
//         }

//             console.log(x ,y ) ;
//     }
// }


// let counter1=0;
// let counter2=0;

// for (let x=' #'; counter<=2; x+=' #'){
//     counter1++;
//     console.log(x);
//     for (let y='# ';counter2<=2 ; y+'# '){
//         counter2++;
//         console.log(y);
//         if(counter1=2 && counter2=2){
//            break;
//         }
//     }
// }


// soluzione 1

let rigaPari = '# # # # ';
let rigaDispari = ' # # # #';

for (let i = 0; i < 8; i++) {
    if (i % 2 === 0) {
        console.log(rigaPari);
    } else {
        console.log(rigaDispari);
    }

}

//soluzione2

//da forkare

// soluzione3

let chessboard = '';
let size = 8;
for (let y = 0; y < size; y++) {
    if (y % 2 === 0) {
        for (let x = 0; x < size; x++) {
            if (x % 2 === 0) {
                chessboard += ' ';
            } else {
                chessboard += '#';
            }
        }
    } else {
        for (let x = 0; x < size; x++) {
            if (x % 2 === 0) {
                chessboard += '#';
            } else {
                chessboard += ' ';
            }
        }

    }
    chessboard += ' \n';
}
console.log(chessboard);
=======
// cicli annidati

// for (let x = 1; x < 11; x++) {
//         for (let y = 1; y < 11; y++) {
//             console.log('X:', x, 'Y:', y);
//         }
//     }


let count=0
let size=1
for (let x = ' #'; count < 2; x+=' #') {
    count+=6;
        for (let y = '# '; count < 2; y+='# ') {
        console.log(x , y,'\n');
        
        }
       
    }




    
// let scacchiera = "";
// let size = 18;

// for (let riga = 0; riga < size; riga++) {
    
    
//     if (riga % 2 !== 0) {
//         scacchiera += " #".repeat(size/2);
//     } else if (riga % 2 === 0) {
//         scacchiera += "# ".repeat(size/2);
//     };
    
//     scacchiera += "\n";

// };

// console.log(scacchiera);
>>>>>>> Stashed changes
