let inventory = [];

function addItem(itemName, quantity, price) {
    const newItem = {
        name: itemName,
        quantity: quantity,
        price: price
    };
    inventory.push(newItem); 
}