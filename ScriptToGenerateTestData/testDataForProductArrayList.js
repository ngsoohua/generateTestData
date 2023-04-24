
//Start Product List----------------------------------------------------------------

const productList =[];


const colorList = ["red","blue", "purple" , "black" , "green"]
const categoryList = ["NeckTies", "Bow Ties" , "Tie Clips" , "CuffLinks"]
const categoryIDList = ["neckTies_id", "bowTies_id" , "tieClips_id" , "cuffLinks_id"]

const noOfProduct = 21; // Change this constant to indicate how many products you want to generate in the array
const noOfProductPerPage = 10; // Indicates how many pages you want to have per page. Not used at the moment.


const initProductList = () =>{
    
    for(let i=0; i<noOfProduct; i++){
        createProduct(i);
    }
    console.log(productList);
}

const createProduct = (index) => {
    let product = {};

    let color = colorList[Math.floor(Math.random() * 4)]; // Generate a random color in the colorList array
    let categoryIndex = Math.floor(Math.random() * 3);
    let categoryName = categoryList[categoryIndex]; // Generate a random index and get the category name from the categoryList
    let categoryID = categoryIDList[categoryIndex]; // use the same index to get the categoryID from categoryIDList
    
    let category = {};
    category.display = categoryName;
    category.id = categoryID;
    
    product.productname = `${color} ${category} ${index}`;
	product.category =  category;
	product.description =  `This is a ${color} ${category} ${index}`;
	product.inventory = Math.floor(Math.random() * 100) +1;
	product.price = product.inventory = Math.floor(Math.random() * 100) +1;
    product.quantity = product.inventory = Math.floor(Math.random() * 100) +1;
    product.image = "image/tiered.jpg";
    product.category = category;

    productList.push(product);
}

initProductList();

//End Product List----------------------------------------------------------------


