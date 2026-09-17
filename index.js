let myLeads = ["www.google.com","www.linked.com"];
const result = document.getElementById("input-btn");
const input_El = document.getElementById("input-el");

result.addEventListener("click",function(){
      myLeads.push(input_El.value)
      console.log(input_El.value)
});

for(let i = 0;i<myLeads.length;i++){
      console.log(myLeads[i]);
}
     


