let productContainer = document.getElementById("product-container");

async function fetchProducts(){

    let response = await fetch("https://fakestoreapi.com/products");

    let parsedResponse = await response.json();
// console.log(response);

    let productComponent = parsedResponse.map ((product) => {
        return `<div class="product-item">
        <img class="image" src="${product.image}" />
        <div class="product-title">${product.title}</div>
        <div>Price: ${product.price}</div>
        <div class="btn-container"><button>Add to Cart</button></div>
        </div>`;
    });

    productContainer.innerHTML = productComponent.join("");
}

fetchProducts();
{/* <div> ${product.description}</div> */}