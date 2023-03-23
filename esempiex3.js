// esempio1

for(let i = 20; i >=0; i=-2){
        console.log(i);
}

// esempio2

for(let i =0; i<20; i++){
    if(i % 2 === 0){        // prendi i dividilo per 2 , prendi il resto e paragonalo con 0
        console.log(i/2);
    }else if(i % 3 ===0){
        console.log(i**3);
    }else{
        console.log(i);
    }
}

// esempio3

let misteryNumber=1;
let notFound = true;
while (notFound) {
    const multipleof2 = misteryNumber % 2 ===0;
    const multipleof3 = misteryNumber % 3 ===0;
    const multipleof5 = misteryNumber % 5 ===0;
    if(multipleof2 && multipleof3 && multipleof5){
        console.log(misteryNumber);
            notFound = false;
    }else {
        misteryNumber++;
    }
}