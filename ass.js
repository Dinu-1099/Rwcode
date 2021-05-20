var del=document.querySelector(".Del");
var save = document.querySelector(".Save");
var Edit=document.querySelector(".Edit");
var inp = document.querySelectorAll(".equal");
var can = document.querySelector(".canc");
var arr=[];
for(var i=0;i<inp.length;i++)
{
    arr[i]=inp[i].value;
}
function DisableInput(){
    for(var i=0;i<inp.length;i++)
    {
        inp[i].disabled=true;
    }
}
DisableInput();
function working(item)
{
    for(var i=0;i<inp.length;i++)
    {
        if(item=="edit")
        {
            console.log("edittt",inp);
            inp[i].disabled=false;
        }
        if(item="save")
        {
            arr[i]=inp.value;
            inp[i].disabled=true;
        }
        if(item="delete")
        {
            inp[i].value="";
        }
        if(item="cancel")
        {
            inp[i].value=arr[i];
        }
        
    }
         
}
Edit.addEventListener("click",()=>{
    working("edit");
})
save.addEventListener("click",()=>{
    working("save");
});
del.addEventListener("click",()=>{
    working("delete");
})
can.addEventListener("click",()=>{
    working("cancel")
})