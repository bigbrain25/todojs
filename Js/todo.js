
//this function will add a new to do item to the list, it is being called when the add todo item button is clicked
function addItem(){

  //check if the user has entered an item inside the box, if not, display an error message

 let todoItemValue = document.getElementById('todoItem').value; //Get the value of the textbox with id, todoItem. Save the value inside variable called todoItemValue.

 if(todoItemValue == ''){
     //this means they have not entered anything, display error message
     document.getElementById('message').innerHTML = "You need to enter a todo item"; // this is setting the error message to display
      document.getElementById('message').style = 'display:block'; //this will make the hidden message box appear

 }else{

  //We can now display the todo item

  //don't forget to hide the error message
  document.getElementById('message').style = 'display:none';
  //get present list items:

  let presentListItems = document.getElementById('todoList').innerHTML;

  //append new todo item to that.

 let newListItems = presentListItems +'<li class="list-group-item display-7">' + todoItemValue + '   <button onclick="deleteItem(this)" class="text-danger" title="delete this todo"><span class="fa fa-trash"></span></button><button onclick="completeItem(this)" class="text-success" title="complete this todo"><span class="fa fa-check"></span></button></li>';

  //display the new list 

  document.getElementById('todoList').innerHTML = newListItems;
  
  //clear the box
  document.getElementById('todoItem').value='';
 }
 

}

//this function will delete a single todo item from the list. 
//Takes in 1 parameter, the item to be deleted
function deleteItem(item){
  
  item.parentElement.remove(); //this gets the parent element of the delete button (i.e the <li> holding that particular button clicked), and then remove it from display
}

//this function will mark a single todo item as completed. 
//Takes in 1 parameter, the item to be completed
function completeItem(item){
  //same as we did for delete, get the parent element, cross the content out to show that it has been completed
  let presentContent = item.parentElement.innerHTML;
  //add strike tag
  let newContent = '<strike>' + presentContent + '</strike>';
  //display the new content
  item.parentElement.innerHTML = newContent;
  
}

