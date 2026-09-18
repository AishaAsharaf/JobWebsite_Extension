let myLeads = [];
const result = document.getElementById("input-btn");
const input_El = document.getElementById("input-el");
//we can modify the elements inside ul but cannot reasign it to another ul
let shown_List = document.getElementById("ul-el");



result.addEventListener("click",function(){
        if(input_El.value !== null){
        myLeads.push(input_El.value)
        console.log(input_El.value)
        renderLeads()
        input_El.value = null
        }
});


function renderLeads(){
      let listItems = ""
      //dom manipulation is costly so try to always to do it outside loops, as less as possible
      // for(let i = 0 ; i < myLeads.length; i++)
      //       {
      //       listItems += "<li>"+ myLeads[i]+ "</li>"
            
      //       };

      //template literal/strings
       listItems += `
       <li>
           <a target="_blank" class="link" href="${input_El.value}">
           ${input_El.value}
           </a>
      </li>
       `
      shown_List.innerHTML += listItems 
}
    


