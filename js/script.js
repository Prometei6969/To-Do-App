//Создаем DOM-объекты, к которым будем обращаться
var input = document.querySelector("input[type = 'text']");

var ul = document.querySelector("ul");
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var iconBook = document.querySelector("#iconBook");

var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var addBtn = document.querySelector(".add");


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
	if (input.value === ""){
	  alert ('Нельзя добавить пустую заметку!')
    } else {
		
	  var container = document.querySelector(".todos")
	  if (container.childElementCount <= 9){
        var li = document.createElement("li");
        var spanElement = document.createElement("span");
        var icon = document.createElement("i");
        
        var newTodo = this.value;
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

	if (input.value === ""){
	  alert ('Нельзя добавить пустую заметку!')
    } else {
		
	  var container = document.querySelector(".todos")
	  if (container.childElementCount <= 9){
        var li = document.createElement("li");
        var spanElement = document.createElement("span");
        var icon = document.createElement("i");
        
        var newTodo = input.value;
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

deleteTodo();

loadTodo();
