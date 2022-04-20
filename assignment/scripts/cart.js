console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

let addItem = item => {
    
    if(!isFull()) {
        basket.push(item); 
        return true
    }

    return  false;

}

function isFull(){
    let numItems = basket.length;
    return numItems >= maxItems ? true : false;
}

function listItems(basket){
    

    for(let item of basket){
        console.log(item);
    }
}

console.log('Was item added to basket?', addItem('Jam'));
console.log('Was item added to basket?', addItem('Eggs'));
console.log('Was item added to basket?', addItem('Bacon'));
console.log('Was item added to basket?', addItem('Juice'));


console.log('Is the basket full?',isFull());

console.log('Was item added to basket?', addItem('Bread'));

console.log('Is the basket full?',isFull());
console.log('Was item added to basket?', addItem('Bread'));

listItems(basket)

console.log(basket);

function empty(){
    basket = [];
}

empty()

console.log(basket);


