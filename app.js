//search area.
const searchBtn = document.getElementById('search-button');
searchBtn.addEventListener('click', () => {
    document.getElementById('show-item').innerHTML = "";
    const inputName = document.getElementById('name').value;
    getItemName(inputName);
});


//item area.
const getItemName = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const foodsDiv = document.getElementById('show-item');
            data.meals.forEach(food => {
                const div = document.createElement('div');
                div.className = "foodsDiv-style"
                const foodInfo = `
                 <img onclick = "getItemDetails('${food.strCategory}')" src = "${food.strMealThumb}">
                 <h1>${food.strCategory}</h1>
                 `
                div.innerHTML = foodInfo;
                foodsDiv.appendChild(div);
                document.getElementById('name').value = "";
            });
        })
        .catch(err => alert('Please give a valid name'))
}


// item details area.
const getItemDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => updateDetailsUI(data));
};


const updateDetailsUI = items => {
    const itemDetails = document.getElementById('item-details');
    const itemDetailsInfo = `
      <img src = "${items.meals[0].strMealThumb}">
      <h1>${items.meals[0].strCategory}</h1>
      <h4>Ingredients:</h4>
      <p>${items.meals[0].strIngredient1}</p>
      <p>${items.meals[0].strIngredient2}</p>
      <p>${items.meals[0].strIngredient3}</p>
      <p>${items.meals[0].strIngredient4}</p>
      <p>${items.meals[0].strIngredient10}</p>
      <p>${items.meals[0].strIngredient11}</p>
      <p>${items.meals[0].strIngredient12}</p>
      <p>${items.meals[0].strIngredient13}</p>
      <p>${items.meals[0].strIngredient14}</p>
      <p>${items.meals[0].strIngredient15}</p>
      <p>${items.meals[0].strIngredient16}</p>
     `
    itemDetails.innerHTML = itemDetailsInfo;
};