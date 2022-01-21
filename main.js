const input = document.getElementById("country-name");
const name = document.getElementById("name");
const region = document.getElementById("region");
const subregion = document.getElementById("subregion");
const capital = document.getElementById("capital");
const flag = document.getElementById("flag");
const inputVal = () => {
    if (input.value.length > 2){
        fetch(`https://restcountries.com/v3.1/name/${input.value}`).then((data) =>{
            data.json().then(response =>{
                name.innerText = response[0].name.common;
                region.innerText = response[0].region;
                subregion.innerText = response[0].subergion;
                capital.innerText = response[0].capital;
                flag.innerHTML = `<img src="${response[0].flags.png}" alt=""/>`
            })
        })
    }else {
        console.error("not found 404");
        alert("not found 404")
    }
}



const tbody = document.getElementById("tbody")
const  allcountry = () => {
    fetch(`https://restcountries.com/v3.1/all`).then((data) =>{
        data.json().then(response =>{
            response.forEach(element =>{
                const tr = document.createElement("tr")
                tr.setAttribute("id", "tr")
                tbody.append(tr);

                const code = document.createElement("td")
                code.setAttribute("id", "code")
                code.innerText = element.cca2
                tr.append(code);

                const flag = document.createElement("img")
                flag.setAttribute("src", element.flags.svg)
                flag.style.height = "50px"
                tr.append(flag)

                const name = document.createElement("td")
                name.setAttribute("id", "name")
                name.innerText = element.name["common"]
                tr.append(name)

                const capital = document.createElement("td")
                capital.setAttribute("id","capital")
                capital.innerText = element.capital
                tr.append(capital)

                const population = document.createElement("td")
                population.setAttribute("id","population")
                population.innerText = element.population
                tr.append(population)
            })
        })
    })
}
allcountry()