const bookname=document.getElementById('bookname');
const authorname=document.getElementById('authorname');
const booklist=document.getElementById('booklist');
function Validate(){
   const bookTitle=bookname.value.trim();
   const authorName=authorname.value.trim();
  if(bookTitle ==="" || authorName ===""){
   alert("Sorry! Please Enter a Book Name");
   return;
  }

const li=document.createElement('li');
li.innerHTML=`<span class="title">${bookTitle}</span> : <span class="authorName">${authorName}</span>
<span class="delete" onclick="deleteBook(this)"><b>     DELETE  </b></span>`;

booklist.appendChild(li);
bookname.value="";
authorname.value="";
}

function deleteBook(element){
    if(confirm("Are you sure that you want to delete this book?")){
    element.parentElement.remove();
 }
}