function choice(fruits) {
    return fruits[Math.floor(Math.random() * fruits.length)];
}

function remove(fruits, fruit) {
    for(let i = 0; i < fruits.length; i++) {                                
        if (fruits[i] === fruit) { 
            fruits.splice(i, 1); 
            break;
        }
    }
}

export {choice, remove}