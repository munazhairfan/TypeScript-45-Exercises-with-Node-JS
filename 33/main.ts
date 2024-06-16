let numbers=[1,2,3,4,5,6,7,8,9];
//CONVERTING FIGURES INTO ORDINAL NUMBERS
for(let eachNumber of numbers){
    let ordinalnumber: string;
    if(eachNumber==1){
        ordinalnumber="st";
    }else if(eachNumber==2){
        ordinalnumber="nd";
    }else if(eachNumber==3){
        ordinalnumber="rd";
    }else{ordinalnumber="th";}
    console.log(`${eachNumber}${ordinalnumber}`)
};
