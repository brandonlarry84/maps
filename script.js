let names = [];

function addName() {
    let userName = prompt("Please enter a name: ");
    if (userName.toLowerCase() != "done") {
        names.push(userName);
        addName();
    }
    else if (userName.toLowerCase() == "done"){
        printNames();
    }
}

function capitalName(arr) {
    return arr.map(name => {
        return name.toUpperCase();
    });
}

function printNames(){
    console.log("These are the origional names:", names);

    let capitalizedNames = capitalName(names);
    console.log("here are the names capitalized:", capitalizedNames);


    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>Original Names: ${names.join(', \n')}</p>`;
    outputDiv.innerHTML += `<p>Capitalized Names: ${capitalizedNames.join(', ')}</p>`;
}



addName();