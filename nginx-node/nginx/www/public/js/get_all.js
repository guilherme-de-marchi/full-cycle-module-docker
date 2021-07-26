var url = "http://localhost:8080/people";

var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, true);

xhttp.onreadystatechange = function(){
    if ( xhttp.readyState == 4 && xhttp.status == 200 ) {
        document.querySelector('#list_me').innerHTML = xhttp.responseText;
    }
}

xhttp.send();