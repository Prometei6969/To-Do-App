"use strict";

//Создаем DOM-объекты, к которым будем обращаться
let input = document.querySelector("input[type = 'text']");

let ul = document.querySelector("ul");
let container = document.querySelector("div");
let lists = document.querySelectorAll("li");
let spans = document.getElementsByTagName("span");
let iconBook = document.querySelector("#iconBook");
let list = document.querySelector("#list");

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

//Обработчик событий, добавляющий заметку по нажатии кнопки "Enter"
input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
	if (this.value.trim()[0] === undefined){
	  alert ('Нельзя добавить пустую заметку!')
    } else if (this.value === "") {
	  alert ('Нельзя добавить пустую заметку!')
	}
      else {
		
	  let container = document.querySelector(".todos")
	  if (container.childElementCount <= 9){
        let li = document.createElement("li");
        let spanElement = document.createElement("span");
        let icon = document.createElement("i");
        
        let newTodo = this.value;
        this.value = " " ;
        
        icon.classList.add('fas', 'fa-trash-alt');
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement,newTodo);

        deleteTodo();
	  } else {
		  alert ('Превышен максимальный лимит заметок')
	  }
      } 
	  
  }
    
});

//Обработчик событий, помечающий заметку как выполненную
ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },false
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

	if (input.value.trim()[0] === undefined){
	  alert ('Нельзя добавить пустую заметку!')
    } else if (input.value === "") {
	  alert ('Нельзя добавить пустую заметку!')
	}
      else {
	  let container = document.querySelector(".todos")
	  if (container.childElementCount <= 9){
        let li = document.createElement("li");
        let spanElement = document.createElement("span");
        let icon = document.createElement("i");
        
        let newTodo = input.value;
        input.value = " " ;
        
        icon.classList.add('fas', 'fa-trash-alt');
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement,newTodo);

        deleteTodo();
	  } else {
		  alert ('Превышен максимальный лимит заметок')
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
