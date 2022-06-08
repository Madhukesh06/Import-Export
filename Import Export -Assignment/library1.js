
let eleData = async (url) => {
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data.meals[0])
    return data.meals[0];
  };
  
  let append = (el, box) => {
        console.log(el)
        let box1 = document.createElement("div");
        let im = document.createElement("img");
        let H1 = document.createElement("h3");
        let H2 = document.createElement("h3");
        let H3 = document.createElement("h3");
        im.src = el.strMealThumb;
        H1.innerText = el.strMeal;
        H2.innerText = el.strIngredient1;
        H3.innerText = el.strInstructions;
        box1.append(im, H1, H2, H3);
        box.append(box1);
  };
  export { eleData, append };