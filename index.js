var SiteNameInput=document.getElementById("SiteNameInput");
var SiteUrlInput=document.getElementById("SiteUrlInput");
 
var SiteList=[];


//localstorage
if(localStorage.getItem("sites")!=null){
    SiteList=JSON.parse(localStorage.getItem("sites"));
    displaySite();
}

// add function

function addSite(){
    var site={
        name:SiteNameInput.value,
        url:SiteUrlInput.value
    }
    SiteList.push(site);
    localStorage .setItem("sites",JSON.stringify(SiteList))
    displaySite();
    clear();
    console.log(SiteList)

}


//display function

function displaySite(){
    var cartona="";
    for(var i=0;i<SiteList.length;i++){
        cartona+=`
        <tr>
        <td>${i}</td>
        <td>${SiteList[i].name}</td>
        <td><button onclick="visitSite(${i})" class="btn btn-info"><i class="fa-solid fa-eye pe-2"></i> Visite</button>
        </td>
        <td><button onclick="deleteSite(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
       </tr>
        `
    }
    document.getElementById("tablebody").innerHTML=cartona;
}

//clear function
function clear(){
    SiteNameInput.value="";
    SiteUrlInput.value="";
};

//delete function

function deleteSite(index){
    SiteList.splice(index,1);
    localStorage .setItem("sites",JSON.stringify(SiteList))
    console.log(SiteList);
    displaySite();

}
//visit function

function visitSite(index){
  window.open(SiteList[index].url);

}