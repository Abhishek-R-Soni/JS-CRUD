
document.querySelector('#div').innerHTML = ""

let h1 = document.createElement('h1')
h1.textContent = "User Data"
document.querySelector('#div').appendChild(h1)

let table = document.createElement('table');
table.setAttribute('border', '1')
let th1 = document.createElement('th')
let txt1 = document.createTextNode('First Name')
th1.appendChild(txt1)

let th2 = document.createElement('th')
let txt2 = document.createTextNode('Last Name')
th2.appendChild(txt2)

let th3 = document.createElement('th')
let txt3 = document.createTextNode('Email')
th3.appendChild(txt3)

let th4 = document.createElement('th')
let txt4 = document.createTextNode('DOB')
th4.appendChild(txt4)

let th5 = document.createElement('th')
let txt5 = document.createTextNode('Short Bio')
th5.appendChild(txt5)

let th6 = document.createElement('th')
let txt6 = document.createTextNode('Remove')
th6.appendChild(txt6)

let th7 = document.createElement('th')
let txt7 = document.createTextNode('Update')
th7.appendChild(txt7)

table.appendChild(th1)
table.appendChild(th2)
table.appendChild(th3)
table.appendChild(th4)
table.appendChild(th5)
table.appendChild(th6)
table.appendChild(th7)

let users = JSON.parse(localStorage.getItem('user'))

users.forEach((user) => {
    var tr = document.createElement('tr');

    var td1 = document.createElement('td'); var td2 = document.createElement('td'); var td3 = document.createElement('td'); var td4 = document.createElement('td'); var td5 = document.createElement('td'); var td6 = document.createElement('td'); var td7 = document.createElement('td');

    let rem = document.createElement('button')
    rem.textContent = "Remove"

    let upd = document.createElement('button')
    upd.textContent = "Update"

    var text1 = document.createTextNode(user.fname);
    var text2 = document.createTextNode(user.lname);
    var text3 = document.createTextNode(user.email);
    var text4 = document.createTextNode(user.dob);
    var text5 = document.createTextNode(user.bio);

    td1.appendChild(text1); td2.appendChild(text2); td3.appendChild(text3); td4.appendChild(text4); td5.appendChild(text5); td6.appendChild(rem); td7.appendChild(upd)
    tr.appendChild(td1); tr.appendChild(td2); tr.appendChild(td3); tr.appendChild(td4); tr.appendChild(td5); tr.appendChild(td6); tr.appendChild(td7);

    table.appendChild(tr);

    rem.addEventListener('click', () => {
        removeUser(user.id)
    })
})

let d = document.querySelector('#div')
d.appendChild(table);

document.querySelector('#back').addEventListener('click', () =>{
    location.href = 'test.html'
})