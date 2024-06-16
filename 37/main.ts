//SETTING DEFAULT MESSAGES IN A FUNCTION
function make_shirt(size:string="Large",message:string="I love TypeScript"){
    console.log(`The size of the shirt is ${size} 
and The message that will be printed on the shirt will be "${message}"`);
};
make_shirt();
make_shirt("Medium");
make_shirt("small","keep swimming");