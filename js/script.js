"use strict";

//Создаем DOM-объекты, к которым будем обращаться
let input = document.querySelector("input[type = 'text']");

let ul = document.querySelector("ul");
let container = document.querySelector("div");
let lists = document.querySelectorAll("li");
let spans = document.querySelectorAll(".pic");
let iconBook = document.querySelector("#iconBook");

let texts = document.querySelectorAll(".text");

let saveBtn = document.querySelector(".save");
let clearBtn = document.querySelector(".clear");
let addBtn = document.querySelector(".add");



//Функция, удаляющая заметку
function deleteTodo(){
  for(let span of spans){
    span.addEventListener ("click",function (){
      span.parentElement.remove();
      event.stopPropagation();
    });
  }
}

//Функция, загружающая данные, если они были сохранены локально
function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
  }
}

//Обработчик событий, отвечающий за редактирование заметок
$('#list').on('mousemove', '.text', function(){
  if (this.innerHTML.trim() === ""){
	  
	this.innerHTML = "Empty note";
	alert ('Нельзя добавить пустую заметку!');
	
  } else if (this.innerHTML === "") {
	  
	  this.innerHTML = "Empty note";
	  alert ('Нельзя добавить пустую заметку!');
	  
  } else if (/&nbsp;/g.test(this.innerHTML)) {
	  
	  if (this.innerHTML === ""){
	  this.innerHTML = "Empty note";  

	  } else {
	      let str = this.innerHTML;
		  str = str.replace('&nbsp;', '');
		  str = str.replace(/\u00A0/g, '');
		  this.innerHTML = str;
	      alert ('Нельзя так отредактировать заметку!');
	  }
	    
	}
	

});


//Обработчик событий, добавляющий заметку по нажатии кнопки "Enter"
input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
	if (this.value.trim() === ""){
	  alert ('Нельзя добавить пустую заметку!');
    } else if (this.value === "") {
	  alert ('Нельзя добавить пустую заметку!');
	}
      else {

	  let container = document.querySelector(".todos");
	  if (container.childElementCount <= 9){
        let li = document.createElement("li");
        let picContainer = document.createElement("span");
        let icon = document.createElement("i");
        let textContainer = document.createElement("span");
        
        let newTodo = this.value;
        this.value = " " ;
        
        icon.classList.add('fas', 'fa-trash-alt');
        picContainer.append(icon);
        textContainer.append(newTodo);
        picContainer.setAttribute('class', 'pic');
        textContainer.setAttribute('class', 'text');
        textContainer.setAttribute("contenteditable","true");
        ul.appendChild(li).append(picContainer,textContainer);

        deleteTodo();
	  } else {
		  alert ('Превышен максимальный лимит заметок');
	  }
      } 
	  
  }
    
});

//Обработчик событий, помечающий заметку как выполненную
ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }
);

//Прячет поле для ввода, когда нажата iconBook
iconBook.addEventListener('click', function(){
  input.classList.toggle('display');
});



//Сохраняет текущие значения полей для последующего использования
saveBtn.addEventListener('click',function(){
  localStorage.setItem('todoList',ul.innerHTML );
  
});

//Очищает все значения, когда нажата кнопка Clear
clearBtn.addEventListener('click', function(){
  ul.innerHTML= "";
  localStorage.removeItem('todoList',ul.innerHTML );
});

//Добавляет заметку (аналог для обработчика input)
addBtn.addEventListener('click',function(){

	if (input.value.trim() === ""){
	  alert ('Нельзя добавить пустую заметку!');
    } else if (input.value === "") {
	  alert ('Нельзя добавить пустую заметку!');
	}
      else {

	  let container = document.querySelector(".todos");
	  if (container.childElementCount <= 9){
        let li = document.createElement("li");
        let picContainer = document.createElement("span");
        let icon = document.createElement("i");
        let textContainer = document.createElement("span");
        
        let newTodo = input.value;
        input.value = " " ;
        
        icon.classList.add('fas', 'fa-trash-alt');
        picContainer.append(icon);
        textContainer.append(newTodo);
        picContainer.setAttribute('class', 'pic');
        textContainer.setAttribute('class', 'text');
        textContainer.setAttribute("contenteditable","true");
        ul.appendChild(li).append(picContainer,textContainer);

        deleteTodo();
	  } else {
		  alert ('Превышен максимальный лимит заметок');
	  }
      } 
  
});


list.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
	  alert ("Нельзя так отредактировать заметку");
	  event.preventDefault();
  }
    
});


deleteTodo();

loadTodo();


