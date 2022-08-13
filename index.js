"use strict";
var _a, _b;
const city = document.getElementById("city");
const country = document.getElementById("country");
const population = document.getElementById("population");
const find = document.querySelector("[data-search]");
const btnInsert = document.getElementById("insert");
const btnClear = document.getElementById("clear");
const directory = document.getElementById("directory");
let list = [];
btnInsert.onclick = function () {
    const cty = city.value;
    const ctry = country.value;
    const pop = population.value;
    if (cty && ctry && pop) {
        localStorage.setItem(cty, JSON.stringify([ctry, pop]));
        location.reload();
    }
};
find.addEventListener("input", (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
    const filteredSearch = list.filter((character) => {
        return (character.city.contains(searchString) || character.country.contains(searchString));
    });
    console.log(filteredSearch);
    console.log(localStorage);
});
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = (_b = ((_a = (localStorage.getItem(key))) === null || _a === void 0 ? void 0 : _a.replace(/[\]["]/g, " "))) === null || _b === void 0 ? void 0 : _b.replace(/,/g, " | Population: ");
    directory.innerHTML += `${key}, ${value} <br><hr>`;
}
btnClear.onclick = function () {
    localStorage.clear();
    location.reload();
};
