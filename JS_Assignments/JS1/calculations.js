/* File that contains functions */
var arr =[0],sum= 0, bill= 0, mbill= 0;
function display()
{
    document.getElementById("divS").style.visibility="visible";
    document.getElementById("button1").style.visibility="hidden";
}

function calculateBill()
{
    var x= document.getElementById("pCost").value;
    var y= document.getElementById("pNbr").value;
    if(isNaN(x) || isNaN(y))
    {
        document.getElementById("p1").innerHTML="Invalid input";
    }
    else
    {
        if(x=="")
        {
            alert( "You must enter Product cost in valid format");
        }
        if(y=="")
        {
            alert( "You must enter Product Number in valid format");
        }

    bill= x*y;
    arr.push(bill);
    var count= arr.length;
    for(var i=1;i<count;i++)
    {
     bill+= arr[i-1];   
    } 
    document.getElementById("p1").innerHTML="Total Bill: " + bill;

    }
    
}
function addProduct()
{
    //document.getElementById("p1").style.display ="none";
    document.getElementById("pName").value="";
    document.getElementById("pCost").value="";
    document.getElementById("pNbr").value="";
    //mbill= arr.push(bill);
}

function resetValues()
{
    var txt;
    /*document.getElementById("pName").value="";
    document.getElementById("pCost").value="";
    document.getElementById("pNbr").value="";*/
    if (confirm("Press a button!")) {
        document.getElementById("divS").style.display="none";

        //alert("page cleared");
      } else {
        alert("You pressed Cancel!");
      }
    
    //document.getElementById("p1").style.visibility="hidden";
    
}
