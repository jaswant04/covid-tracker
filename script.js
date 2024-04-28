$(document).ready(function(){

    var url  = "https://data.covid19india.org/data.json";
    // var proxyUrl = "https://cors-anywhere.herokuapp.com/";

    $.getJSON( url, function(data){

        var table = document.getElementById("table");
        console.log(data);
        for( var i=1; i<(data['statewise'].length); i++)
        {

            var x= table.insertRow();

            x.insertCell(0);
            table.rows[i].cells[0].innerHTML = data['statewise'][i]['state'];
            
            x.insertCell(1);
            table.rows[i].cells[1].innerHTML = data['statewise'][i]['confirmed'];
            // table.rows[i].cells[1].style.color = '#ffc107';

            x.insertCell(2);
            table.rows[i].cells[2].innerHTML = data['statewise'][i]['active'];
            // table.rows[i].cells[2].style.color = '#DB44374';
            
            x.insertCell(3);
            table.rows[i].cells[3].innerHTML = data['statewise'][i]['recovered'];
            // table.rows[i].cells[3].style.color = '#ffc107';

            x.insertCell(4);
            table.rows[i].cells[4].innerHTML = data['statewise'][i]['deaths'];
            // table.rows[i].cells[4].style.color = '#ffc107';
            
            // x.insertCell(5);
            // table.rows[i].cells[5].innerHTML = data['statewise'][i]['lastupdatedtime'];
            // // table.rows[i].cells[5].style.color = '#ffc107';
        }

    });

    var iconm = document.getElementById("iconm");

    iconm.onclick = function(){
        document.body.classList.toggle("dark");
        if(document.body.classList.contains("dark")){
            document.getElementById("iconm").src = "./images/sun.png"
            
        }
        else{
            document.getElementById("iconm").src = "./images/moon.png"
        };
        
        
    }
    
})
