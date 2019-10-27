import functions from './functions.js';


container.addEventListener("click", function(){
   functions.showEvent(event)
    //console.log(functions.showEvent(event));
    
 });

 show.addEventListener("click", function() {
      let childrenOfOl=document.getElementById("olList").children;
      let showChildren= functions.showChildrenOfOl(childrenOfOl);
      window.alert(showChildren);
    //console.log(showChildren);
 });

 add.addEventListener("click", function() {
   //let newItem=functions.addLi(document.getElementById("txtInput").value);
   functions.addLi(olList,document.getElementById("txtInput").value);
   txtInput.value="";
 });


 deleteElement.addEventListener("click", function() {
   //let newItem=functions.addLi(document.getElementById("txtInput").value);
   let olSelect= document.getElementById("olList");
   //functions.deleteLi(olSelect.id);
   functions.deleteLi(olSelect);
 });

 // WORKING WITH CARDS
 addcart.addEventListener("click", function () {

   //  functions.addCard(idplay,functions.getCounter());
   let i=document.getElementById("idplay")
  //  console.log(i.children.length);
   functions.addCard(idplay);
 });

 idplay.addEventListener('click', (event) => {
   
   if (event.target.textContent === "Add Before") { 
       functions.addBefore(idplay,event.target.parentNode);
   }
   if (event.target.textContent === "Add After") {
      functions.addAfter(idplay,event.target.parentNode.nextSibling);
   }
   if (event.target.textContent === "Delete") {
      functions.deleteCurrentCard(idplay,event.target.parentNode);
   }
});

