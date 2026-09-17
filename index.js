var myLeads = [];
const result = document.getElementById("input-btn");
const input_El = document.getElementById("input-el");

result.addEventListener("click",function(){
      myLeads.push(input_El.value)
      console.log(input_El.value)
});
     


