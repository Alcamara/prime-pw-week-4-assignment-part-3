console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

//Using functions in other functions part 1
const maxItems = 5;

let addItem = item => {
    
    //Using functions in other functions part 3
    if(!isFull()) {
        basket.push(item); 
        return true
    }

    return  false;

}

//Using functions in other functions part 2
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
console.log('Was item added to basket?', addItem('Bread'));
console.log('Was item added to basket?', addItem('Juice'));


console.log('Is the basket full?',isFull());

console.log('Was item added to basket?', addItem('Bread'));

console.log('Is the basket full?',isFull());
console.log('Was item added to basket?', addItem('Bacon'));

listItems(basket)

console.log(basket);

console.log('Item removed for carts is', removeItem('Bread'));

console.log(basket);

console.log('Item removed for carts is', removeItem('Milk'));

function empty(){
    basket = [];
}

empty()

console.log(basket);




// Using Array built-in functions!
function removeItem(item){
    let indexLocation = basket.indexOf(item);
    
    return indexLocation !== -1 ? basket.splice(indexLocation,1): null;
}
