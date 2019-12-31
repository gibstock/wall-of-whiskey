const cocktailList = ['daiquiri','hot-toddy',
'old-fashioned','monte-carlo','manhattan','brown-derby', 'sazerac','basil-gimlet'];
const whiskeyList = ['Westland-Sherry-Wood', 'Michters-Toasted-Barrel','Wl-Weller-12-Year','Glenfiddich-12-year', 'Heaven-hill-bottled-in-bond'];
const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');
const ul = leftSide.querySelector('ul');
const ulRight = rightSide.querySelector('ul');
const revMenu = document.querySelector('.rev-menu');
const wallBtn = document.querySelector('#my-wall');
const heroWrapper = document.querySelector('.hero-wrapper');
const closeBtn = document.querySelector('#close-me');



function displayWhiskey(arr){
    for(let i=0; i < arr.length; i++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        let textNode = document.createTextNode(arr[i]);
        a.setAttribute('href', `${arr[i]}.html`);
        a.appendChild(textNode);
        li.appendChild(a);
        ul.appendChild(li);
    }
}

function displayCocktails(arr){
    for(let i=0; i < arr.length; i++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        let textNode = document.createTextNode(arr[i]);
        a.setAttribute('href', `${arr[i]}-cocktail-recipe.html`);
        a.appendChild(textNode);
        li.appendChild(a);
        ulRight.appendChild(li);
    }
}
function closeMe(){
    heroWrapper.style.display = "none";
    closeBtn.style.display = "none";
}
function showWall(){
    // console.log("hello");
    heroWrapper.style.display = "flex";
    closeBtn.style.display = "flex";
}
function working(){
    alert( "Sometimes in the bar world, if we run out of a product or it isn't in yet, it's 86'd. Well this is 86'd! Check back soon. In the meantime, please make another selection. Cheers.")
    // window.getComputedStyle(nav, ':before').setProperty('visibility', 'visible');
    // window.getComputedStyle(nav, ':after').setProperty('visibility', 'visible');
    // console.log(window.getComputedStyle(nav, ':before').getPropertyValue('visibility'));
 }
function whiskey(){
    location.assign("https://wallofwhiskey.com/whiskey");
}

displayCocktails(cocktailList);
displayWhiskey(whiskeyList);
closeBtn.addEventListener('click', closeMe);
wallBtn.addEventListener('click', showWall);
revMenu.addEventListener('click', whiskey);
