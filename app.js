let btn = document.querySelector("button");


btn.addEventListener("click",async ()=>{
  let contry = document.querySelector("input").value;  
 let conArray = await getContry(contry);
 let ul = document.querySelector("ul");
 ul.innerText="";
 //console.log(conArray);
 for(collName of conArray)
 {
   
    let li = document.createElement("li");
    li.innerText=collName.name;
    ul.appendChild(li);
    console.log(collName.name);
 }
})

let url = "http://universities.hipolabs.com/search?name=";
//let cont = "india";

async function getContry(cont){
 try{
    let res = await axios.get(url+cont);
    //console.log(res.data);
    return res.data;
 }
 catch(e){
    console.log("ERROR : ",e);
    return [];
 }

}