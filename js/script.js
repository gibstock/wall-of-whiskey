const cocktailList = ['daiquiri','hot-toddy',
'old-fashioned'];
const whiskeyList = ['Westland-Sherry-Wood', 'Michters-Toasted-Barrel','Wl-Weller-12-Year'];
const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');
const ul = leftSide.querySelector('ul');
const ulRight = rightSide.querySelector('ul');


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
// x =Math.floor((Math.random() * cocktailList.length));

displayCocktails(cocktailList);
displayWhiskey(whiskeyList);
