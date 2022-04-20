console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

let addItem = item => {
    
    basket.push(item);  

    return  true;

}

function listItems(basket){
    

    for(let item of basket){
        console.log(item);
    }
}

addItem('Jam');
addItem('eggs');
addItem('turkey Bacon');
addItem('bread');

listItems(basket)

console.log(basket);

function empty(){
    basket = [];
}

empty()

console.log(basket);