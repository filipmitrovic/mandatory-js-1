// 1 h1 byt bananas till Vegetables

let Vegetables = document.querySelector('h1');
Vegetables.parentNode.removeChild(Vegetables);

let h1 = document.createElement('h1');
h1.textContent = 'Fruits & Vegetables Corp';
let header = document.querySelector('header');
header.appendChild(h1);
header.insertBefore(h1, header.childNodes[1]);
h1.style.color = 'red';

// 2 li byt bananas till Vegetables obs href också

let list = document.querySelector('ul');  
list.removeChild(list.childNodes[5]);
let li = document.createElement('li');
list.appendChild(li);
let a = document.createElement('a');
a.textContent = 'Vegetables';
a.setAttribute('href', "#vegetables");
li.appendChild(a);

// 3 lägg till h1 About och p flytta "We're the best in fruits & vegetables" obs ligger längs ner

let about = document.querySelector('#about');
let h2 = document.createElement('h2');
h2.textContent = 'About';
about.appendChild(h2);

about.insertBefore(h2, about.childNodes[0]);
let contact = document.querySelector('#contact');
let main = document.querySelector('main');
main.insertBefore(about, main.childNodes[0]);

// 4 lägg till h2 Contact innan contact us! appeenda

let h2Contact = document.createElement('h2');
h2Contact.textContent = 'Contact';
contact.appendChild(h2Contact);
let p = document.querySelector('#contact p');
contact.insertBefore(p, contact.childNodes[6]);
let table = document.querySelector('table');
contact.appendChild(table);

// gör thead bold ändra td till th
let trTd = document.querySelectorAll('thead tr td');
let tr = document.querySelector('thead tr');
let name = document.createElement('th');
name.textContent = 'Name';
let email = document.createElement('th');
email.textContent = 'Email';
tr.replaceChild(name, trTd[0]);
tr.replaceChild(email, trTd[1]);