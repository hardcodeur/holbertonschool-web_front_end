function createElement(data){
    let p = document.createElement('p');
    p.textContent=data;
    document.body.append(p);
}

function queryWikipedia(callback){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    xhr.send();
    xhr.onload = function() {
        if (xhr.status === 200){
            let json=JSON.parse(xhr.response);
            callback(json.query.pages[21721040].extract);
        }
    };
}
queryWikipedia(createElement);