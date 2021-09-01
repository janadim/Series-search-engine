/* eslint-disable strict */

function handlerReset(ev) {
    ev.preventDefault();
    
    favListLeft.innerHTML = ""; 
    favArrayId = [];
    favArrayElement = [];
    // printShowCards(globalData);
    showList.innerHTML = "";
    localStorage.removeItem("renderFavShows");
}

btnReset.addEventListener("click", handlerReset);