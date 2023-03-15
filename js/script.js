// Creo l'array 
const shoppingList = ['pane', 'latte', 'uova', 'burro', 'salame'];
console.log(shoppingList);
// prendo il riferimento all'ul
const list = document.getElementById('shopping-list');
console.log(list);

// Inizializzo ciclo while
let i = 0;
// utilizzo ciclo while per creare gli elementi della lista
while (i < shoppingList.length) {
    // creo la costante che contiene i list item
    const listItem = `<li>${shoppingList[i]}</li>`;
    console.log(listItem);
    // inseriamo per ogni ciclo i list item creato all'interno del riferimento prelevato all'inizio (riga 4-5)
    list.innerHTML += listItem;
    i++;
}