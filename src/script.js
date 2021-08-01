let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let links = document.getElementsByClassName("link");
let list_items = document.getElementsByTagName("li");
const links_array = Array.from(links);
const array_list_items = Array.from(list_items);

window.onload = remove_links;

function remove_links(){
  links_array.forEach(element => {
    element.remove();
  });
  // console.log("removed links");
}

function addlinks(){
  var counter = 0;
  
  array_list_items.forEach(element =>{
    element.appendChild(links_array[counter]);
    counter += 1;
  });

  // console.log("added links");
}


closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", ()=>{ 
  sidebar.classList.toggle("open");
  menuBtnChange(); 
});

function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   addlinks();
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
 }
 else {
   remove_links();
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
 }
}
