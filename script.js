const gridContainer = document.querySelector('div');
const button = document.getElementById('button-game');


for(i=0;i<100;i++){
    const showingSquare = crateSquare('div', 'square')
    
    button.addEventListener('click',function(){
        gridContainer.classList.add('grid')
    })
}

/**
 *  function that will create html element
 * @param tag 
 * @param classTag 
 */
function crateSquare (tag, classTag){
    const square = document.createElement(tag);
    square.classTag+= classTag;
    return square;
}