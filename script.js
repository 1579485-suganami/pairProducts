function omikuzi() {
    const rmdPokeNum = () =>  Math.floor(Math.random() * 905);
    const res = fetch("https://pokeapi.co/api/v2/pokemon/" + rmdPokeNum())
    .then(res => res.json())
    .then(json => {
        
        const kuziList = ["大吉", "吉", "中吉", "小吉", "狂", "大狂", "最狂",]
        const kuziComent = [
            "今日はなにもかも上手くいくでしょう",
            "何かいいことがあるかも？",
            "いいことあるってw",
            "残念www",
            "やばいっすねw",
            "大人しく帰りましょう",
            "🟠r🟠k🟠さんにご注意を",
        ]
        const rmdNum = Math.floor(Math.random() * kuziList.length);
        const kuziEl = document.createElement("div");
        kuziEl.innerText ="今日の運勢は" + kuziList[rmdNum] + "です" + "\n" + kuziComent[rmdNum];
        kuziEl.style.color = "white"

        const nameEl = document.createElement("div");
        nameEl.innerText = "lucky Pokemon: " + json.name;
        nameEl.style.color = "white"

        const buttonEl = document.createElement("button");
        buttonEl.id = "pokeButton";
        buttonEl.setAttribute("onclick", "anime()");
        buttonEl.width = 300;
        buttonEl.height = 300;
        buttonEl.style.borderRadius = "150px";
        
        const imgEl = document.createElement('img');
        imgEl.src = json.sprites.front_default;
        imgEl.width = 300;
        imgEl.style.borderRadius = "150px";
        const rgbArr = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
        imgEl.style.backgroundColor = `rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`
        
        buttonEl.appendChild(imgEl);

        const pokemonEl = document.getElementById("luckypokemon")
        pokemonEl.innerText = ""
        pokemonEl.width = 300
        pokemonEl.append(kuziEl);
        pokemonEl.append(nameEl);
        pokemonEl.append(buttonEl);
    })  
};
function anime() {
    const target = document.getElementById("pokeButton");
    console.log(target);
    target.animate(
        [
            { transform: "rotate(360deg)" } ,
        ], 
        {
            duration: 100,
            iterations: Infinity
        }
    );
}

