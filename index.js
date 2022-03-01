var fruitName = document.querySelector(".fruitName");
var fruitImage = document.querySelector(".fruitImage");
var addFruitBtn = document.querySelector(".addFruit");

var errorMsg = document.querySelector(".errorMsg");
var displayFruitNames = document.querySelector(".displayFruitNames");
var displayFruit = document.querySelector(".displayFruit");

var search = document.querySelector(".search");
var displaySearh = document.querySelector(".displaySearch");

const fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];
const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];

var fruitNamesList = [];
var fruitsList = [];

displayFruitNames.innerHTML = fruitNames.sort();
displayFruit.innerHTML = fruits.sort();

function addFruitToList(){

    var fruitValue = fruitName.value;
    var imageValue = fruitImage.value;

     if (fruitValue !== undefined && imageValue !==undefined) {
           
           fruitNames.push(fruitValue);
           fruits.push(imageValue);
        
        }
        displayFruitNames.innerHTML = fruitNames.sort();
        displayFruit.innerHTML = fruits;

        localStorage.setItem("fruitNames", JSON.stringify(fruitNames));
        localStorage.setItem("fruits", JSON.stringify(fruits));

        errorMessages();
    
}
addFruitBtn.addEventListener("click", addFruitToList)

function errorMessages(){

    var fruitValue = fruitName.value;
    var imageValue = fruitImage.value;

    if(fruitValue === "" && imageValue === ""){
        errorMsg.innerHTML = "Please enter a fruit name and it's emoji.";
        setTimeout(function(){
            errorMsg.innerHTML = "";
         }, 2000);
    }else if (fruitNames.includes(fruitValue) && fruits.includes(imageValue)){
        errorMsg.innerHTML = "The fruit you have entered already exists, try a different fruit.";
        setTimeout(function(){
            errorMsg.innerHTML = "";
         }, 2000);
    }else if (fruitValue === undefined && imageValue !== undefined){
        errorMsg.innerHTML = "Please enter a fruit name.";
        setTimeout(function(){
            errorMsg.innerHTML = "";
         }, 2000);
    }else if (fruitValue !== undefined && imageValue === undefined){
        errorMsg.innerHTML = "Please enter a fruit emoji.";
        setTimeout(function(){
            errorMsg.innerHTML = "";
         }, 2000);
    }

}

function searchBar(){
    
}