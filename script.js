const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})


//create a list of images 
//set the appropriate classes on the lists
// loop through the list changing the src attribute on them by looping through the images gotten from the server.



// let n = [];
// let m = [];

// n.forEach((num1, index) => {
//   const num2 = m[index];
//   console.log(num1, num2);
// });





document.querySelector('#button').addEventListener('click', getCocktail = () => {
  const drink = document.querySelector('#drink').value
  let drinkCocktail = drink.replaceAll(' ', '%20')
   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkCocktail}`)
  //  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
   .then(res => res.json()) // parse response as JSON
   .then(data => {
       console.log(data.drinks)
       data.drinks.forEach((x, i) => {
        let li = document.createElement('li')
        li.className = 'slide'
        if (i === 0) {
          let classLi = document.createAttribute('data-active')
          li.setAttributeNode(classLi)
        }
        let img = document.createElement('img')
        img.src = data.drinks[i].strDrinkThumb
        // let src = document.createAttribute('src').value = data.drinks[i].strDrinkThumb
        // img.setAttributeNode(src)
        li.appendChild(img)
        document.querySelector('ul').appendChild(li)
      
      })
   })
   .catch(err => {
       console.log(`error ${err}`)
   });
      //  document.querySelector('button').classList.toggle('hidden')
})