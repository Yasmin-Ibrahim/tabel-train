// declaration the variables 
var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productDesc = document.getElementById('productDesc');
var productCategory = document.getElementById('productCategory');
var productCount = document.getElementById('productCount');

var productContainer = [];
var productContainer2 = [];
var currentProductIndex = null;

if(localStorage.getItem("ourProducts") == null) {
    productContainer = [];
}
else {
    productContainer = JSON.parse(localStorage.getItem("ourProducts"));
    // back the array from string to real value ==> JSON.parse
    displayProduct(productContainer);
}

// add of the products
function addProduct() {
    var product = {
        name: productName.value,
        price: productPrice.value,
        desc: productDesc.value,
        category: productCategory.value,
        count: productCount.value
    }
    if(product.name != "" || product.price != "" || product.desc != "" || product.category != ""){
        if (product.count > 0) {
            for(var i = 0; i < product.count; i++) {
                productContainer.push(product);
            }
        }
        else{
            productContainer.push(product);
        }
    }
    localStorage.setItem('ourProducts', JSON.stringify(productContainer)); 
    // localStorage.setItem('key', 'value') => value have to be string // you can put the array as string by using JSON.stringify
    displayProduct(productContainer);
    resetInput();
}

// display all products
function displayProduct(container) {
    var productList = "";
    for (var i = 0; i < container.length; i++) {
        productList += `<tr>
                        <td>${i + 1}</td>
                        <td>${container[i].name}</td>
                        <td>${container[i].price}</td>
                        <td>${container[i].desc}</td>
                        <td>${container[i].category}</td>
                        <td>
                            <button class="btn btn-warning" onclick=" resetToUpdate(${i})">Update</button>
                        </td>
                        <td>
                            <button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button>
                        </td>
                    </tr>`
    }
    document.getElementById("myBody").innerHTML = productList;
}

// delete all products
function deleteAll() {
    productContainer = [];
    localStorage.setItem('ourProducts', JSON.stringify(productContainer)); 
    displayProduct(productContainer);
}

// reset of the inputs
function resetInput() {
    productName.value = "";
    productPrice.value = "";
    productDesc.value = "";
    productCategory.value = "";
    productCount.value = "";
}

// delete specific product
function deleteProduct(i) {
    productContainer.splice(i, 1);
    displayProduct(productContainer);
}

// reset specific product to update
function resetToUpdate(i) {
    productName.value = productContainer[i].name;
    productPrice.value = productContainer[i].price;
    productDesc.value = productContainer[i].desc;
    productCategory.value = productContainer[i].category;
    currentProductIndex = i;
}

//update specific product
function updateProduct() {
    if (currentProductIndex !== null) {
        productContainer[currentProductIndex] = {
            name: productName.value,
            price: productPrice.value,
            desc: productDesc.value,
            category: productCategory.value,
        }; 
        // currentProductIndex = null;
        localStorage.setItem('ourProducts', JSON.stringify(productContainer)); 
        displayProduct(productContainer);
        resetInput();
    }
}

function searchProduct(searchName){
    for(var i = 0; i < productContainer.length; i++){
        if(productContainer[i].name.includes(searchName.trim().toLowerCase())){
            productContainer2.push(productContainer[i]);
        }
    }
    displayProduct(productContainer2);
    productContainer2 = []; 
}
















































// useing two function add & update to the same button

// // declaration the variables 
// var productName = document.getElementById('productName');
// var productPrice = document.getElementById('productPrice');
// var productDesc = document.getElementById('productDesc');
// var productCategory = document.getElementById('productCategory');
// var productCount = document.getElementById('productCount');

// var productContainer = [];
// var currentProductIndex = null;
// flag = "add";

// if(localStorage.getItem("ourProducts") == null) {
//     productContainer = [];
// }
// else {
//     productContainer = JSON.parse(localStorage.getItem("ourProducts"));
//     // back the array from string to real value ==> JSON.parse
//     displayProduct();
// }

// // add of the products
// function addProduct() {
//     if(flag == "add"){
//         var product = {
//             name: productName.value,
//             price: productPrice.value,
//             desc: productDesc.value,
//             category: productCategory.value,
//             count: productCount.value
//         }
//         if (product.count > 0) {
//             for(var i = 0; i < product.count; i++) {
//                 productContainer.push(product);
//             }
//         }
//         else{
//             productContainer.push(product);
//         }
//         localStorage.setItem('ourProducts', JSON.stringify(productContainer)); 
//         // localStorage.setItem('key', 'value') => value have to be string // you can put the array as string by using JSON.stringify
//         displayProduct();
//         resetInput();
//     }
//     else{
//         updateProduct();
//     }
// }

// // display all products
// function displayProduct() {
//     var productList = "";
//     for (var i = 0; i < productContainer.length; i++) {
//         productList += `<tr>
//                         <td>${i + 1}</td>
//                         <td>${productContainer[i].name}</td>
//                         <td>${productContainer[i].price}</td>
//                         <td>${productContainer[i].desc}</td>
//                         <td>${productContainer[i].category}</td>
//                         <td>
//                             <button class="btn btn-warning" onclick=" resetToUpdate(${i})">Update</button>
//                         </td>
//                         <td>
//                             <button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button>
//                         </td>
//                     </tr>`
//     }
//     document.getElementById("myBody").innerHTML = productList;
// }

// // delete all products
// function deleteAll() {
//     productContainer = [];
//     localStorage.setItem('ourProducts', JSON.stringify(productContainer)); 
//     displayProduct();
// }

// // reset of the inputs
// function resetInput() {
//     productName.value = "";
//     productPrice.value = "";
//     productDesc.value = "";
//     productCategory.value = "";
//     productCount.value = "";
// }

// // delete specific product
// function deleteProduct(i) {
//     productContainer.splice(i, 1);
//     displayProduct();
// }

// // reset specific product to update
// function resetToUpdate(i) {
//     productName.value = productContainer[i].name;
//     productPrice.value = productContainer[i].price;
//     productDesc.value = productContainer[i].desc;
//     productCategory.value = productContainer[i].category;
//     currentProductIndex = i;
//     flag = "update";
// }

// //update specific product
// function updateProduct() {
//     if (currentProductIndex !== null) {
//         productContainer[currentProductIndex] = {
//             name: productName.value,
//             price: productPrice.value,
//             desc: productDesc.value,
//             category: productCategory.value,
//         }; 
//         // currentProductIndex = null;
//         localStorage.setItem('ourProducts', JSON.stringify(productContainer)); 
//         displayProduct();
//         resetInput();
//     }
// }
