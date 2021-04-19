
var prodName,prodNbr,prodCost,sub_total;
var rIndex;
var total = 0;

function checkInput()
{
    var isEmpty = false,
    prodName = document.getElementById("prodName").value,
    prodCost = document.getElementById("prodCost").value,
    prodNbr = document.getElementById("prodNbr").value;

    if(prodName==="")
    {
        alert("Must enter product name");
        isEmpty = true;
    }
    else if(prodCost === "")
    {
        alert("Product cost cannot be empty");
        isEmpty = true;
    }

    else if(prodNbr === "")
    {
        alert("Product Number cannot be empty");
        isEmpty = true;
    }
return isEmpty;

}


function addHtmlTableRow()
{
    var a = document.getElementById("table");
    var b = document.getElementById("sp1");
    var c = document.getElementById("sp2");
    var d = document.getElementById("sp3");
    if(window.getComputedStyle(a).display === "none" && window.getComputedStyle(b).display === "none" && 
    window.getComputedStyle(c).display === "none" && window.getComputedStyle(d).display === "none")
    {
        document.getElementById("table").style.display ="block";
        document.getElementById("sp1").style.display ="block";
        document.getElementById("sp2").style.display ="block";
        document.getElementById("sp3").style.display ="block";
    }
    else
    {
        if(!checkInput())
        {
            var table = document.getElementById("table");
            newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            prodName= document.getElementById("prodName").value,
            prodCost= document.getElementById("prodCost").value,
            prodNbr= document.getElementById("prodNbr").value;
        
            cell1.innerHTML = prodName;
            cell2.innerHTML = prodCost;
            cell3.innerHTML = prodNbr;
            cell4.innerHTML = (cell2.innerHTML*cell3.innerHTML);
            selectedRowToInput();
            document.getElementById("prodName").value="";
            document.getElementById("prodCost").value="";
            document.getElementById("prodNbr").value="";
        }
    

    }    
}
function selectedRowToInput()
{
    var table = document.getElementById("table");
    for(var i = 1; i < table.rows.length;i++)
    {
        table.rows[i].onclick = function()
        {
            rIndex= this.rowIndex;
            document.getElementById("prodName").value = this.cells[0].innerHTML;
            document.getElementById("prodCost").value = this.cells[1].innerHTML;
            document.getElementById("prodNbr").value = this.cells[2].innerHTML;

        };

    }
}
selectedRowToInput();
function editHtmlTableSelectedRow()
{
    var table = document.getElementById("table");
    var prodName = document.getElementById("prodName").value,
        prodCost = document.getElementById("prodCost").value,
        prodNbr = document.getElementById("prodNbr").value;
        
        if(!checkInput()){
        table.rows[rIndex].cells[0].innerHTML = prodName;
        table.rows[rIndex].cells[1].innerHTML = prodCost;
        table.rows[rIndex].cells[2].innerHTML = prodNbr;
        table.rows[rIndex].cells[3].innerHTML = table.rows[rIndex].cells[1].innerHTML * table.rows[rIndex].cells[2].innerHTML;
        document.getElementById("prodName").value="";
        document.getElementById("prodCost").value="";
        document.getElementById("prodNbr").value="";
    }
    
}
function removeSelectedRow()
{
    //var table = document.getElementById("table");
    table.deleteRow(rIndex);
    document.getElementById("prodName").value = "";
    document.getElementById("prodCost").value = "";
    document.getElementById("prodNbr").value = "";

}
function calculateBill()
{
    var table = document.getElementById("table");
    for(var i = 1;i < table.rows.length;i++)
    {
        total = total + parseInt(table.rows[i].cells[3].innerHTML);
    }

    document.getElementById("val").innerHTML="Total Bill is  "+ total +" -/";

}
function resetPage()
{
    total =0;
    document.getElementById("prodName").value = "";
    document.getElementById("prodCost").value = "";
    document.getElementById("prodNbr").value = "";
    document.getElementById("val").value = "";

    document.getElementById("table").style.display ="none";
    document.getElementById("sp1").style.display ="none";
    document.getElementById("sp2").style.display ="none";
    document.getElementById("sp3").style.display ="none";
    document.getElementById("val").style.display ="none";

}