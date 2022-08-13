
    const city = document.getElementById("city") as HTMLInputElement;
    const country = document.getElementById("country") as HTMLInputElement;
    const population = document.getElementById("population") as HTMLInputElement;
    const find = document.querySelector("[data-search]") as HTMLInputElement;
    const btnInsert = document.getElementById("insert") as HTMLInputElement;
    const btnClear = document.getElementById("clear") as HTMLInputElement;
    const directory = document.getElementById("directory") as HTMLInputElement;
    let list: any[] = [];

    btnInsert.onclick = function () {
        const cty = city.value;
        const ctry = country.value;
        const pop = population.value;
        if (cty && ctry && pop) {
            localStorage.setItem(cty, JSON.stringify([ctry, pop]));    
            location.reload();
        }
    }

    find.addEventListener("input", (e) => {
        const searchString = (<HTMLTextAreaElement>e.target).value.toLowerCase();
        console.log(searchString);
        const filteredSearch = list.filter((character) => {
            return (character.city.contains(searchString) || character.country.contains(searchString)
            );
        });
        console.log(filteredSearch);
        console.log(localStorage);
        }
        )
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)!;
        const value = ((localStorage.getItem(key))?.replace(/[\]["]/g, " "))?.replace(/,/g, " | Population: ");

        directory.innerHTML += `${key}, ${value} <br><hr>`;
    }

    btnClear.onclick = function() {
        localStorage.clear();
        location.reload();
    }
