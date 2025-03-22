// Immediately Invoked Function Expressions (IIFE)

(function chain(){
    // Named IIFE
    console.log(`DB CONNECTED`);
})();    //this function doesnt know when to end so we need to apply explicit semicolon


( (name) => {
    //IIFE with arrow funtions
    console.log(`DB CONNECTED TWO ${name}`);
})(`Anand`)