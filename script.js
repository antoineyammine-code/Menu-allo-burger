document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menu-container");
    
    // 1. Define your menu categories and items here
    const menuData = [
        {
            category: "Burgers",
            items: [
                { name: "Cheese Burger", price: "275.000 LL", description: "meat patty, lettuce, cheddar cheese and classic house sauce." },
                { name: "Chicken Burger", price: "275.000 LL", description: "chicken crispy, lettuce, cheddar cheese and chicken bbq special sauce." },
                { name: "Fish Burger", price: "275.000 LL", description: "white fish fillet, lettuce, cheddar cheese and fish special sauce." },
                { name: "Double Cheese Burger", price: "450.000 LL", description: "double meat patties, double cheese, lettuce, special sauce." },
                { name: "Double Chicken Burger", price: "450.000 LL", description: "double chicken crispy, double cheese, lettuce, special sauce." },
            ]
        },
        {
            category: "Burgers",
            items: [
                { name: "Cheese Burger", price: "275.000 LL", description: "meat patty, lettuce, cheddar cheese and classic house sauce." },
                { name: "Chicken Burger", price: "275.000 LL", description: "chicken crispy, lettuce, cheddar cheese and chicken bbq special sauce." },
                { name: "Fish Burger", price: "275.000 LL", description: "white fish fillet, lettuce, cheddar cheese and fish special sauce." },
                { name: "Double Cheese Burger", price: "450.000 LL", description: "double meat patties, double cheese, lettuce, special sauce." },
                { name: "Double Chicken Burger", price: "450.000 LL", description: "double chicken crispy, double cheese, lettuce, special sauce." },
            ]
        },
        {
            category: "Drinks & Cocktails",
            items: [
                { name: "Soft Drink", price: "100.000 LL", description: "Refreshing choice of Coca-Cola, Diet Coke, Sprite, or Fanta." },
                { name: "Fresh Fruit Cocktail", price: "250.000 LL", description: "Freshly blended seasonal fruits." }
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
