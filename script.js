document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menu-container");
    
    // 1. Define your menu categories and items here
    const menuData = [
        {
            category: "Burgers",
            items: [
                { name: "Classic Burger", price: "450.000 LL", description: "Beef patty, lettuce, tomato, pickles, and classic house sauce." },
                { name: "Cheese Burger", price: "500.000 LL", description: "Beef patty, double cheddar cheese, pickles, and ketchup." },
                { name: "Allo Special Burger", price: "600.000 LL", description: "Our signature burger with crispy onions, melted cheese, and special BBQ blend." }
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
