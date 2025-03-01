// 데이터 가져오기 및 초기 렌더링
let menuData = [];

async function fetchMenuData() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    // 데이터 가공: price 추가 및 mealType 수정
    menuData = data.recipes.map((recipe) => ({
      ...recipe,
      // 칼로리를 기준으로 가격 책정 (예시)
      price: Math.round((recipe.caloriesPerServing * 10) / 100) * 100,
      // mealType 수정: 없는 경우 임의 지정
      mealType: adjustMealType(recipe),
    }));
    displayMenuItems(menuData);
    setupCategories();
  } catch (error) {
    console.error("Error fetching data:", error);
    menuItemsContainer.innerHTML = "<p>메뉴를 불러오는데 실패했습니다.</p>";
  }
}

const menuItemsContainer = document.querySelector(".menu-items");
const filterBtns = document.querySelectorAll(".tab-btn");

// 카테고리 설정 함수
function setupCategories() {
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.category.toLowerCase();
      filterBtns.forEach((btn) => btn.classList.remove("active"));
      e.currentTarget.classList.add("active");

      const filteredItems =
        category === "all"
          ? menuData
          : menuData.filter((item) => {
              return item.mealType.some(
                (type) => type.toLowerCase() === category
              );
            });

      displayMenuItems(filteredItems);
    });
  });
}

// mealType 조정 함수
function adjustMealType(recipe) {
  const isShake =
    recipe.tags.some((tag) =>
      ["beverage", "drink", "smoothie", "shake", "milkshake"].includes(
        tag.toLowerCase()
      )
    ) ||
    recipe.name.toLowerCase().includes("smoothie") ||
    recipe.name.toLowerCase().includes("shake") ||
    recipe.name.toLowerCase().includes("milkshake");

  if (isShake) {
    return ["shakes"];
  }

  if (recipe.mealType && recipe.mealType.length > 0) {
    return recipe.mealType.map((type) => type.toLowerCase());
  }

  return ["Lunch"];
}

// 메뉴 아이템 표시 함수 수정
function displayMenuItems(menuItems) {
  const displayMenu = menuItems
    .map((item) => {
      return `
                <article class="menu-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-info">
                        <header class="item-header">
                            <div class="title-price">
                                <h4 class="item-title">${item.name}</h4>
                                <h4 class="item-price">${item.price}원</h4>
                            </div>
                        </header>
                        <p class="item-text">${item.instructions[0]}</p>
                    </div>
                </article>
            `;
    })
    .join("");

  menuItemsContainer.innerHTML = displayMenu;
}

// 초기 실행
fetchMenuData();
