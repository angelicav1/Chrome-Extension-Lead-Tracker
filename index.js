let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

//localStorage.setItem("favDog", "Maja")
//let dog = localStorage.getItem("favDog")
//console.log(dog)

localStorage.clear()

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads(){
let listItems = ""
for (let i=0; i< myLeads.length; i++) {
    //listItems += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    //Template Strings are cleaner
      listItems += `
      <li>
      <a target='_blank' href='${myLeads[i]}'>
       ${myLeads[i]}
       </a>
      </li>
      `
}
ulEl.innerHTML = listItems
}



