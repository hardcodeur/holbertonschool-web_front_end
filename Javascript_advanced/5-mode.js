function changeMode(size,weight,transform,background,color) {
    return function() {
        document.body.style.size=size;
        document.body.style.weight=weight;
        document.body.style.transform=transform;
        document.body.style.background=background;
        document.body.style.color=color;
    }
    
}

function main(){
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "bold", "capitalize", "black", "white");

    let htmlBody=document.body;
    const p = document.createElement("p");
    const text = document.createTextNode("Welcome Holberton!");
    const paragraphe = p.appendChild(text)
    htmlBody.append(paragraphe);

    // const btn = document.createElement("button");
    // let btntext = document.createTextNode("Spooky");
    // htmlBody.append(btn.appendChild(btntext));

    // btntext = document.createTextNode("Dark mode");
    // htmlBody.append(btn.append(btntext));

    // btntext = document.createTextNode("Dark mode");
    // htmlBody.append(btn.append(btntext));
}

main();