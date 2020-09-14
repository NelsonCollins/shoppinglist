

// Select interested elements by creating a variable (Caching the queries in the browser)

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul =  document.querySelector("ul");
var li = document.querySelector("li");
var currentvalue = document.getElementById("done");


// Create function dedoration to hold the elements


function inputLength (){
	return input.value.length
}

function createListElement () {
  var li = document.createElement("li")
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value ="";

  	li.addEventListener("click", function() {
		// creates a boolean that toggles the done class on li:
		// if the list item is clicked this toggles the done class
		var finished = this.classList.toggle("done");
		// creates a remove button for the finished item:
		var removeButton = document.createElement("button");
		removeButton.classList.add("deleteButton");

		// if the list item is clicked (li add event listener ) then 
		// finished is true
		if (finished) {
			removeButton.appendChild(document.createTextNode("remove"));
			removeButton.classList = "deleteButton";
			li.appendChild(removeButton);

			removeButton.addEventListener("click", function() {
				this.parentElement.remove();
			});
		} else {
			this.getElementsByClassName("deleteButton")[0].remove();
		}
	})
}

function addListAfterClick() {
	 if (inputLength() > 0 ) {
  		createListElement ();
  }
}

function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.which ===13) {
		createListElement ();
	}
}

// CALL BACK FUNCTIONS
// Create EventListerners for the specific function to be called when the button or a keypress occursis clicked
// Only executes when the function is clicked. We are only passing a reference to the function and not running it
button.addEventListener("click", addListAfterClick); 

input.addEventListener("keypress", addListAfterKeypress);












// button.addEventListener("click", function () {
// 	if (input.value.length > 0) {
// 	var li = document.createElement("li")
//   li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
//   input.value ="";
// 	}
  
// });

// input.addEventListener("keypress", function () {
// 	// console.log(event.which)
// 	if (input.value.length > 0 && event.which ===13) {
// 	var li = document.createElement("li")
//   li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
//   input.value ="";
// 	}
  
// });
