let count = 0;
let countEl = document.getElementById("count-el") ;
let saveEl = document.getElementById("save-el") ;

function increment() {
    count++ ;
    countEl.textContent = count ; 
    console.log(count) ;
}

function save() {
    let entities = count + " - " ;
    saveEl.textContent += entities ; /* textContent is alternative for innerText because it won't return human redable hidden content */
    countEl.textContent = 0;
    count = 0;
}

save() ;

