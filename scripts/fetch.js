document.addEventListener("DOMContentLoaded", () => {
    const recipeContainer = document.getElementById("recipe-list");
    const detailsContainer = document.getElementById("recipe-details");
    const url = 'https://themealdb.com/api/json/v1/1/search.php?s=';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const meals = data.meals;
        meals.forEach(meal => {
          const card = document.createElement("div");
          card.className = " p-2 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:bg-[#F4ACB7] bg-abmer-200 hover:shadow-2xl text-center cursor-pointer";
          card.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="rounded-xl mb-2 w-full h-48 object-cover">
            <h3 class="text-xl font-bold text-amber-800">${meal.strMeal}</h3>
          `;
          card.addEventListener("click", () => {
            detailsContainer.innerHTML = `
              <div class='bg-[#ffdab9] p-6 mt-6 rounded-2xl shadow-lg '>
                <h3 class='text-2xl font-bold mb-2'>${meal.strMeal}</h3>
                <img src='${meal.strMealThumb}' class='rounded-lg w-full max-w-md mb-4' alt='${meal.strMeal}' />
                <p class='mb-2'><strong>Category:</strong> ${meal.strCategory}</p>
                <p class='mb-2'><strong>Area:</strong> ${meal.strArea}</p>
                <p class='mb-4'><strong>Instructions:</strong><br>${meal.strInstructions}</p>
               <a href='${meal.strYoutube || '#'}' target='_blank' class='inline-flex items-center gap-2 text-red-700 underline'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                    </svg>
                    <span class=" text-blue-600 underline">Watch on YouTube</span>
                  </a>
              </div>`;
            detailsContainer.scrollIntoView({ behavior: "smooth" });
          });
          recipeContainer.appendChild(card);
        });
      })
      .catch(err => {
        console.error(err);
        recipeContainer.innerHTML = '<p class="text-red-600">Failed to load recipes. Please try again later.</p>';
      });
  });