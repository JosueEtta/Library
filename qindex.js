class Book {
   constructor(name, author,pageNumber, read) {
      this.name = name;
      this.author = author;
      this.read = read;
      this.pageNumber = pageNumber;
      this.id =  Math.floor(Math.random() * 999999999);
   }
   
   //append table row and its data to the table
   appendObject(){
      const tablerow = document.createElement("tr");
      tablerow.classList.add("table-row")
      table.appendChild(tablerow);
      const idrow = document.createElement("td");
       idrow.textContent = this.id;
      tablerow.appendChild(idrow);
      const namerow = document.createElement("td");
       namerow.textContent = this.name  ;
      tablerow.appendChild(namerow);
      const authorrow = document.createElement("td");
      authorrow.textContent = this.author;
      tablerow.appendChild(authorrow);
      const pageNumberrow= document.createElement("td");
      pageNumberrow.textContent = this.pageNumber;
      tablerow.appendChild(pageNumberrow);
      const readrow= document.createElement("td");
      readrow.title = "Click  to toggle read";
      readrow.style.cursor = "pointer";
      if(this.read == true){
         readrow.textContent = "Read";
         readrow.style.color = "hsl(120, 100%, 50%)";
      }
      else{
         readrow.textContent = "Not Read";
         readrow.style.color = "hsl(0, 100%, 50%)";
      }

       //Toogle read
       readrow.addEventListener("click",() => {
            if(this.read == true){
             readrow.textContent = "Not Read";
             readrow.style.color = "hsl(0, 100%, 50%)";
             this.read = false
            }
            else{
             readrow.textContent = "Read";
             readrow.style.color = "hsl(120, 100%, 50%)";
             this.read = true; 
            }
         });
      tablerow.appendChild(readrow);
      const deleteRow = document.createElement("td");
      tablerow.appendChild(deleteRow);
      const deleteImage = document.createElement("img");
      deleteRow.appendChild(deleteImage);
      deleteImage.style.height = "20px"
      deleteImage.style.marginLeft = "auto";
      deleteImage.title = "Click it to delete the book";

      //Delete the book
      deleteImage.addEventListener("click",function(){
         tablerow.remove();
      });
      deleteImage.src = "assets/370086_bin_delete_empty_out_recycle_icon.svg";
   }
   
}

let table = document.getElementById("table");
let addBook = document.getElementById("addBook");
let heading = document.getElementById("heading");


// Defines the styles
function swichComponentState(){
   if(formBox.style.display=="block"){
      heading.classList.remove("blur-component");
      table.classList.remove("blur-component");
      formBox.style.display="none"; 
   }else{
      heading.classList.add("blur-component");
      table.classList.add("blur-component");
      formBox.style.display="block";
   }
}

//Apply styles when clicked
let formBox= document.getElementById("formBox");
addBook.addEventListener("click",swichComponentState)

//Create book and append it to the page
let submitBook = document.getElementById("submitBook") 
submitBook.addEventListener("click",function (){
   event.preventDefault();
   let bookName = document.getElementById("name").value;
   let authorName = document.getElementById("author").value;
   let pageNumber = document.getElementById("pageNumber").value;
   let read = document.getElementById("check").checked;
  let book = new Book(bookName,authorName,pageNumber,read); 
  if(bookName == "" || authorName == "" || pageNumber == "") {
     alert("Please fill in the form");
  } 
  else{
   book.appendObject();
   swichComponentState();
   formBox.reset();
  }
 
})