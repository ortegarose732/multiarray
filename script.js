const list= [
    ['Rosemarie', 21]
]

function displayList(){
    const listContainer= document.querySelector('.lists');
    listContainer.innerHTML= '';

    const olEl= document.createElement('ol');
    list.forEach(item =>{
        const liEl= document.createElement('li');
        liEl.innerHTML= item;
        olEl.appendChild(liEl);
    })
    listContainer.appendChild(olEl);
}

displayList();


function addList(){
    const name= document.getElementById('name').value;
    const age= document.getElementById('age').value;

    list.push([name, age]);
    displayList();

}

function shiftBtn(){
    list.shift();
    displayList();
}

function unshiftBtn(){
    const name= prompt("Enter name");
    const age= prompt("Enter age");
    list.unshift([name, age]);
    displayList();
}

function popBtn(){
    list.pop();
    displayList();
}

function pushBtn(){
    const name= prompt("Enter name");
    const age= prompt("Enter age");
    list.push([name, age]);
    displayList();
}