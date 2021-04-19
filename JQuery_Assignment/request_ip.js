var ip;
var tbl;
var btn = `<button id="del">Delete</button>`;
var table= $("#example").DataTable(
    {
        columns: [
            {title: "IP Address"},
            {title: "Country Name"},
            {title: "Country Code"},
            {title: "Event" }
        ]
    });
$(document).ready(function() {
    $('#example tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
    $('#example').on("click", "#del" ,function () {

        table.row('.selected').remove().draw( false );
    });
    
    $('#button').click( function () {
        table.row('.selected').remove().draw( false );
    } );    
} );
function add()
{
   let ip= $("#txt1").val();
    if(validate_ip(ip))
    {
        request_data(ip);
    }
    else
    {
        $("#p1").text("Invalid ip");
    }
}
function validate_ip(ip)
{
    var expression = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;
    if(expression.test(ip))
    {
        return true;
    }
    else
    {
        return false;
    }
}
function request_data(ip)
{
    $.get("http://api.ipstack.com/"+ip+"?access_key=bb9f3cd5b7354870e08d9353e59a334b", function(data,status){
        if(status== "success")
        {
            /*$("div#info").append("<p><br>Ip: </b>"+data.ip+ "<br><b>Country Name: </b>"+ data.country_name+"<br><b>Country Code: </b>"+data.country_code +"</p>");
            $(document).ready(function()
            {
                tbl= $("#myTable").DataTable();
                tbl.row.add([data.ip, data.country_name, data.country_code]).draw(true);

            });*/
            table.row.add([
                data.ip,
                data.country_name,
                data.country_code,
                document.innerHTML = btn
            ]).draw(false);

        }
    });

}