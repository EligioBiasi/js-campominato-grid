const gridContainer = document.querySelector('div');
const button = document.getElementById('button-game');


for(i=0;i<100;i++){
    button.addEventListener('click',function(){
        gridContainer.classList.add('grid');
        const showingSquare = createSquare('div', 'square')
        showingSquare.classList.add('square');
        gridContainer.appendChild(showingSquare);
        showingSquare.append([i])
    })
}

/**
 *  function that will create html element
 * @param tag 
 * @param classTag 
 */
function createSquare (tag, classTag){
    const square = document.createElement(tag);
    square.classTag+= classTag;
    return square;
}