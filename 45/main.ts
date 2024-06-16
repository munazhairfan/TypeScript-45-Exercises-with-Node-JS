//CREATING OPTIONAL FEATURES IN A FUNCTION

function car(manufacturer:string, model_name:string,...options){
    let Car:{
        manufacturerOfCar:string;
        modelOfcar:string;
    }={
        manufacturerOfCar:manufacturer,
        modelOfcar:model_name,
    };
    options.forEach(option => {
        let[Key,value]=option.split(":");
        Car[Key.trim()]=value.trim();
    });
    return Car;
};
let one = car("Daimler AG","S-Class");
let two = car("Sant'Agata","Aventador","color:Golden","price:66000000");
let three = car("Volkswagen","718 Boxter","automatic_mode:true","year:1996")
console.log(one,"\n",two,"\n",three)