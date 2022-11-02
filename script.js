function omikuzi() {
    const rmdPokeNum = () =>  Math.floor(Math.random() * 905);
    const res = fetch("https://pokeapi.co/api/v2/pokemon/" + rmdPokeNum())
    .then(res => res.json())
    .then(json => {
        
        
        const nameEl = document.createElement("div");
        nameEl.innerText = json.name;
        
        const imgEl = document.createElement('img');
        imgEl.src = json.sprites.front_default;
        imgEl.width = 200;
        
        
        const pokemonEl = document.getElementById("luckypokemon")
        pokemonEl.innerText = ""
        pokemonEl.width = 300
        pokemonEl.left = "50%"
        pokemonEl.top = "50%"
        pokemonEl.transform = "translateY(-50%) translateX(-50%)"
        // pokemonEl.webkit-transform = "translateY(-50%) translateX(-50%)"
        pokemonEl.append(nameEl);
        pokemonEl.append(imgEl);
    } )
    
};
console.log(omikuzi());

