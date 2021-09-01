/* eslint-disable strict */
function handleFavs(event) {
  const favoriteItem = event.currentTarget;
  const showId = favoriteItem.dataset.id;

  favoriteItem.classList.toggle('favorite');

  const isPresent = favArrayId.find((favoriteId) => favoriteId === showId);
  console.log(isPresent);
  if (isPresent === undefined) {
    favArrayId.push(showId);
    favArrayElement.push([favoriteItem.innerText, favoriteItem.firstChild.nextElementSibling.href, favoriteItem.firstElementChild.lastChild.currentSrc]);
  } else {
    let indexRemove = favArrayId.findIndex((id) => id === showId);
    console.log(indexRemove);
    favArrayId.splice(indexRemove, 1);
    favArrayElement.splice(indexRemove, 1);
  }

  setLocalStorage();
  renderFavShows(favArrayId, favArrayElement);
}

function renderFavShows(arrayIdsArgument, arrayElementsArgument) {
  favListLeft.innerHTML = "";
  favListLeft.innerHTML;
  for (let i = 0; i < arrayElementsArgument.length; i++) {
    favListLeft.innerHTML += `<li data-id = '${arrayIdsArgument.id}' class=' favItem'>
            
            <img class=" favImg" src="${arrayElementsArgument[i][2]}" alt="Tv Show"></img></a>
            <h2 class=" favName">${arrayElementsArgument[i][0]}</h2></li>`;
  }
}

{/* <a href="${arrayElementsArgument[i][1]}" class='item__ref favRef'></a> */}