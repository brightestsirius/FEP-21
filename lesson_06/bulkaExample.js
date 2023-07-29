// Example 🍔🍟🧂

breadHamburger = `hamburger`;
breadCheeseburger = `cheeseburger`;
breadZhytniy = `zhytniy`

potatoSizeSmall = `small`;
potatoSizeMiddle = `middle`;
potatoSizeBig = `big`;

sauceKetchup = `ketchup`;
sauceMayonnaise = `mayonnaise`;

breadPriceHamburger = 10;
breadPriceCheeseburger = 15;
breadPriceZhytniy = 20;

doubleCheesePrice = 5;

potatoSizeSmallPrice = 10;
potatoSizeMiddlePrice = 15;
potatoSizeBigPrice = 20;

saucePriceKetchup = 2;
saucePriceMayonnaise = 3;

price = 0;

// breadType
breadType = prompt(`Would you like ${breadHamburger} or ${breadCheeseburger} or ${breadZhytniy}?`);

if(breadType !== null){
    breadType = breadType.replaceAll(` `,``).toLowerCase();
}

if(breadType === breadCheeseburger) price += breadPriceCheeseburger;
else if(breadType === breadZhytniy) price += breadPriceZhytniy;
else {
    breadType = breadHamburger;
    price += breadPriceHamburger;
}
// breadType

// doubleCheese
if(breadType === breadCheeseburger){
    doubleCheese = confirm(`Would you like to add double cheese?`);
    
    if(doubleCheese) price += doubleCheesePrice;
}
// doubleCheese

// potato
choosePotato = confirm(`Would you like potato?`);
if(choosePotato){
    potatoSize = prompt(`Choose potato size: ${potatoSizeSmall}/${potatoSizeMiddle}/${potatoSizeBig}:`);

    if(potatoSize !== null) potatoSize = potatoSize.replaceAll(` `,``).toLowerCase();

    if(potatoSize === potatoSizeMiddle){
        price += potatoSizeMiddlePrice
    } else if(potatoSize === potatoSizeBig){
        price += potatoSizeBigPrice
    } else{
        potatoSize = potatoSizeSmall;
        price += potatoSizeSmallPrice
    }
}
// potato

// sauce
chooseSauce = confirm(`Would you like sauce?`);
if(chooseSauce){
    sauceType = prompt(`Choose sauce: ${sauceKetchup}/${sauceMayonnaise}:`);

    if(sauceType !== null) sauceType = sauceType.replaceAll(` `,``).toLowerCase();

    if(sauceType === sauceMayonnaise){
        price += saucePriceMayonnaise
    } else{
        sauceType = sauceKetchup;
        price += saucePriceKetchup
    }
}
// sauce

// render
if(choosePotato) renderPotato = `<li>Potato: ${potatoSize}</li>`;
else renderPotato = ``;

if(chooseSauce) renderSauce = `<li>Sauce: ${sauceType}</li>`;
else renderSauce = ``;

document.write(`<h2>Your order</h2>
<ul>
    <li>Bulka: ${breadType}</li>
    ${renderPotato}
    ${renderSauce}
</ul>
<p>Final price: $${price}.</p>`)
// render