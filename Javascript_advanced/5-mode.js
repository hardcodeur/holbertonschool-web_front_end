function changeMode(size,weight,textTransform,background,color) {
    return function() {
        document.body.style.size=size;
        document.body.style.weight=weight;
        document.body.style.textTransform=textTransform;
        document.body.style.background=background;
        document.body.style.color=color;
    }
    
}

function main(){
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let htmlBody=document.body;
    let p = document.createElement("p");
    p.textContent ="Welcome Holberton!";
    htmlBody.append(p);

    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    let btn3 = document.createElement("button");

    btn1.textContent = "Spooky";
    btn1.onclick= function(){
        spooky();
    }
    htmlBody.append(btn1);

    btn2.textContent = "Dark mode";
    btn2.onclick= function(){
        darkMode();
    }
    htmlBody.append(btn2);

    btn3.textContent = "Scream mode";
    btn3.onclick= function(){
        screamMode();
    }
    htmlBody.append(btn3);


}

main();