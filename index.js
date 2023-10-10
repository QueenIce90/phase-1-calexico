// Challenge #1

let currentMenuItems
let currentlyDisplayMenuItem

fetch('http://localhost:3000/menu')
    .then(response => response.json())
    .then(menuItems => {

        currentMenuItems = menuItems
    
        displayMenuItemDetails(currentMenuItems[0])

        currentMenuItems.forEach(menuItem => {
            addMenuItemToMenu(menuItem)
        })

    })

//Challenge #1
function  addMenuItemToMenu(menuItem){
    const spanElement = document.createElement('span')
    spanElement.textContent = menuItem.name
    const menuItemsDiv = document.getElementById('menu-items')
    menuItemsDiv.appendChild(spanElement)

//Challenge #3
    spanElement.addEventListener('click', () => {
        displayMenuItemDetails(menuItem)
    })
}

//Challenge #2
function displayMenuItemDetails(menuItem){

    currentlyDisplayMenuItem = menuItem
    const dishImageElement = document.getElementById('dish-image')
    const dishNameElement = document.getElementById('dish-name')
    const dishDescriptionElement = document.getElementById('dish-description')
    const dishPrice = document.getElementById('dish-price')
    const numberInCartSpanElement = document.getElementById('number-in-cart')

    dishImageElement.src = menuItem.image
    dishNameElement.textContent = menuItem.name
    dishDescriptionElement.textContent = menuItem.description 
    dishPrice.textContent = menuItem.price 
    numberInCartSpanElement.textContent = menuItem.number_in_bag
}

//Challenge #4
const cartForm = document.getElementById('cart-form')
cartForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const cartAmountInputElement = document.getElementById('cart-amount')
    const numberInCartSpanElement = document.getElementById('number-in-cart')
    const sum = Number(cartAmountInputElement.value)+ Number(numberInCartSpanElement.textContent)
    numberInCartSpanElement.textContent = sum
    
    const menuItemsDiv = document.getElementById('menu-items')
    
    //UPDATES ARE HAPPENING HERE...
   currentMenuItems = currentMenuItems.map(menuItem => {
        if(menuItem.id === currentlyDisplayMenuItem.id){
            return {...menuItem, number_in_bag: sum}
        }
        else{
            return menuItem
        }
    })
    menuItemsDiv,innerHTML = ""
    currentMenuItems.forEach(menuItem => {
        addMenuItemToMenu(menuItem)
    })

})