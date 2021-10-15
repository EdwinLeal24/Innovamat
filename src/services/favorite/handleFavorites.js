let favoritesSet = new Set([]);
let favorites = null;

export function addFavorite(source) {
  favoritesSet = favoritesSet.add(source);
  favorites = [...favoritesSet];
  localStorage.setItem("favoritesResources", JSON.stringify(favorites));

  return favorites;
}

export function removeFavorite(id) {
  favoritesSet = new Set(
    [...favoritesSet].filter((source) => source.id !== id)
  );
  favorites = [...favoritesSet];

  localStorage.setItem("favoritesResources", JSON.stringify(favorites));

  return favorites;
}

export function getFavorites() {
  const favorites = localStorage.getItem("favoritesResources");
  return JSON.parse(favorites);
}
