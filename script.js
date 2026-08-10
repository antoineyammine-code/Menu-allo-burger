document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menu-container");
    
    // 1. Define your menu categories and items here
    const menuData = [
        {
            category: "Burgers",
            items: [
                { name: "Cheese Burger", price: "275.000 LL", description: "meat patty, lettuce, cheddar cheese and classic house sauce." },
                { name: "Grilled Chicken Burger", price: "275.000 LL", description: "grilled chicken patty, lettuce, cheddar cheese and chicken BBQ special sauce." },
              /*{ name: "Crispy Chicken Burger", price: "325.000 LL", description: "chicken crispy, lettuce, cheddar cheese and chicken bbq special sauce." },*/
                { name: "Soujok Burger", price: "325.000 LL", description: "soujok mild hot patty, lettuce, cheddar cheese, pickles, tomatoes and soujok special sauce." },
                { name: "Big Fahita", price: "500.000 LL", description: "400grs, chicken, mozarella, bell pepper, onion, mushrooms and avocado sauce." },
                { name: "Philly Cheesesteak", price: "600.000 LL", description: "400grs, tender beef cut, mozarella, bell pepper, onion, mushrooms and upon choice aioli mayo sauce." },
                { name: "Fish Burger", price: "275.000 LL", description: "white fish fillet, lettuce, cheddar cheese and fish special sauce." },
                { name: "Double Cheese Burger", price: "450.000 LL", description: "double meat patties, double cheese, lettuce, special sauce." },
                { name: "Double Grilled Chicken Burger", price: "450.000 LL", description: "double grilled chicken patty, double cheese, lettuce and chicken BBQ special sauce." },
              /*{ name: "Double Crispy Chicken Burger", price: "500.000 LL", description: "double chicken crispy, double cheese, lettuce and chicken BBQ special sauce." },*/
            ]
        },
        {
            category: "sides",
            items: [
             /* { name: "Chicken Crispy 6", price: "350.000 LL", description: "crispy chicken breast, 6 pieces, 250 grs." },
                { name: "Chicken crispy 12", price: "650.000 LL", description: "crispy chicken breast, 12 pieces, 500 grs." }, */
                { name: "french fries small", price: "125.000 LL", description: "salted, crispy and golden french fries box, 150gr." },
                { name: "french fries medium", price: "225.000 LL", description: "salted, crispy and golden french fries box, 250 grs." },
            ]
        },
        {
            category: "Drinks & Cocktails",
            items: [
                { name: "Soft Drink", price: "100.000 LL", description: "Refreshing choice of Pepsi, Diet, Seven up, or Mirinda." },
                { name: "Fresh Fruit Cocktail", price: "150.000 LL", description: "Freshly blended fruits, banana, strawberry, almond and condensed milk, 250ml." }
            ]
        },
        {
            category: "offers",
            items: [
                { name: "4 burgers pack", price: "1.000.000 LL", description: "4 burgers of your choice." },
                { name: "4 double burgers pack", price: "1.600.000 LL", description: "4 double burgers of your choice." },
                { name: "4 burgers + 2 cocktails", price: "1.200.000 LL", description: "4 burgers of your choice and 2 fruit cocktail smoothies 250ml." }
            ]
        }
    ];

    // 2. Clear the loading message
    menuContainer.classList.remove("loading");
    menuContainer.innerHTML = "";

    // 3. Inject the menu items into the page
    menuData.forEach((section, index) => {
        const sectionElement = document.createElement("section");
        sectionElement.className = "category-section";
        
        let itemsHtml = "";
        section.items.forEach((item, itemIndex) => {
            itemsHtml += `
                <div class="menu-item" style="animation-delay: ${(index * 0.2) + (itemIndex * 0.1)}s">
                    <div class="item-header">
                        <span class="item-name">${item.name}</span>
                        <span class="item-price">${item.price}</span>
                    </div>
                    ${item.description ? `<p class="item-description">${item.description}</p>` : ''}
                </div>
            `;
        });

        sectionElement.innerHTML = `
            <h2 class="category-title">${section.category}</h2>
            ${itemsHtml}
        `;
        
        menuContainer.appendChild(sectionElement);
    });
});
