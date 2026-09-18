let myLeads = [];
const result = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const input_El = document.getElementById("input-el");
//we can modify the elements inside ul but cannot reasign it to another ul
const shown_List = document.getElementById("ul-el");

const arrayRefreshed = JSON.parse(localStorage.getItem("myLeads"))
if(arrayRefreshed){
      myLeads = arrayRefreshed
      render(myLeads)
}

deleteBtn .addEventListener("dblclick",function(){
         localStorage.clear()
         myLeads = []
         render(myLeads)
})
result.addEventListener("click",function(){
        if(input_El.value !== null || input_El.value !== ""){
      //   var jsonStringArray = JSON.stringify(myLeads)
      //   localStorage.setItem("myLeads", jsonStringArray)
      //   myLeads = JSON.parse(jsonStringArray)
        myLeads.push(input_El.value)
        input_El.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
      //   console.log(input_El.value)
      //   console.log(jsonStringArray)
        render(myLeads)
       
        }
});


function render(leads){
      //var array = JSON.parse(localStorage.getItem("myLeads"))
      let listItems = ""
      //dom manipulation is costly so try to always to do it outside loops, as less as possible
      for(let i = 0 ; i < leads.length; i++)
            {
            //listItems += "<li>"+ array[i]+ "</li>"
            listItems += `
                  <li>
                  <a target="_blank" class="link" href="${leads[i]}">
                  ${leads[i]}
                  </a>
                  </li>
                  `
            };

      //template literal/strings
      
      shown_List.innerHTML = listItems 
}
    


