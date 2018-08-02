let meal,
    rice,
    meat,
    beans,
    fajitas,
    salsa,
    sourCream,
    cheese,
    lettuce,
    fullOrder = []; //entire generated order

let generateBtn = document.getElementById("generateOrderBtn");

//generate Chipotle order when button is clicked
generateBtn.onclick = function generateOrder(){
    let orderList = document.getElementById("meal-list");
    meal = getMeal();
    rice = getRice();
    meat = getMeat();
    beans = getBeans();
    fajitas = getFajitas();
    salsa = getSalsa();
    sourCream = getSourCream();
    cheese = getCheese();
    lettuce = getLettuce();
    
    fullOrder = [meal,rice,meat,beans,fajitas,salsa,sourCream,cheese,lettuce];
    
    //delete current order when user generates another
    orderList.innerHTML = "";
    
    addItemToMealList();
}

function addItemToMealList() {
    let numberOfOrderItems = fullOrder.length;
    
    for(i = 0; i < numberOfOrderItems; i++) {
      let nextOrderItem = fullOrder[i];
        
      if(nextOrderItem == null) {
          //do not add null items to list (ex: no sour cream will return null)
      } else if(nextOrderItem.constructor === Array) {
          //list salsas array so that all items do not appear in one li element
          addSalsas(nextOrderItem);
      } else {
          let ul = document.getElementById("meal-list");
          let li = document.createElement("li");
          li.appendChild(document.createTextNode(nextOrderItem));
          li.setAttribute("class","order-item");
          ul.appendChild(li);
      }
        
    }
    
    function addSalsas(salsa) {
        let numberOfSalsas = salsa.length;
        for(x = 0; x < numberOfSalsas; x++) {
          let nextSalsa = salsa[x];

          let ul = document.getElementById("meal-list");
          let li = document.createElement("li");
          li.appendChild(document.createTextNode(nextSalsa));
          li.setAttribute("class","order-item");
          ul.appendChild(li);
        }
    }
}
   


//meal type selection
function getMeal() {
    const MEAL_TYPE = ["Bowl", "Burrito", "Tacos", "Salad"];
    let selectedMeal = selectRandomMeal();
    return selectedMeal;
    
    // random meat generator
    function selectRandomMeal() {
        return MEAL_TYPE[Math.floor(Math.random()*MEAL_TYPE.length)];
    }
}

//rice selection
function getRice() {
    let riceOption = Math.random() >= 0.5; //brown rice or white rice
    if (riceOption == true) {
        return "White rice";
    } else {
        return "Brown rice";
    }
}

//meat selection
function getMeat() {
    const MEAT_TYPE = ["Chicken", "Steal", "Barbacoa", "Carnitas"];
    let selectedMeat = selectRandomMeat();
    return selectedMeat;
    
    // random meat generator
    function selectRandomMeat() {
        return MEAT_TYPE[Math.floor(Math.random()*MEAT_TYPE.length)];
    }
}

//beans selection
function getBeans() {
    const BEANS_TYPE = ["Black beans","Pinto beans"];
    let selectedBeans = selectRandomBeans();
    return selectedBeans;
    
    // random beans generator
    function selectRandomBeans() {
        return BEANS_TYPE[Math.floor(Math.random()*BEANS_TYPE.length)];
    }
}

//fajitas selection
function getFajitas() {
    let fajitasOption = Math.random() >= 0.5; //fajitas or no fajitas
    if (fajitasOption == true) {
        return "Fajitas";
    } else {
        return null;
    }
}

//salsa selection
function getSalsa() {
    const SALSAS = ["Fresh Tomato Salsa","Tomatillo Red-Chili Salsa","Tomatillo Green-Chili Salsa","Toasted Chili-Corn Salsa"];
    let salsasOptions = SALSAS; //used in loop to remove selected salsas and eliminate repeats
    let selectedSalsas = [];
    let numberOfSalsas = Math.floor((Math.random() * 4) + 1); //choose number of salsas
    
    for(i = 0; i < numberOfSalsas; i++ ) {
        let randomSalsa = salsasOptions[Math.floor(Math.random()*salsasOptions.length)];
        let selectedSalsaIndex = salsasOptions.indexOf(randomSalsa);
        selectedSalsas.push(randomSalsa); //add salsa selection to selectedSalsas
        salsasOptions.splice(selectedSalsaIndex, 1); //remove selected salsa from options
    }
    
    return selectedSalsas;
}

//sour cream selection
function getSourCream() {
    let sourCreamOption = Math.random() >= 0.5; //sour cream or no sour cream
    if (sourCreamOption == true) {
        return "Sour Cream";
    } else {
        return null;
    }
}

//cheese selection
function getCheese() {
    let cheeseOption = Math.random() >= 0.5; //cheese or no cheese
    if (cheeseOption == true) {
        return "Cheese";
    } else {
        return null;
    }
}

//lettuce selection
function getLettuce() {
    let lettuceOption = Math.random() >= 0.5; //lettuce or no lettuce
    if (lettuceOption == true) {
        return "Lettuce";
    } else {
        return null;
    }
}






