"use strict";

window.onload = function () {
    const searchButton = document.getElementById("searchBtn");
    const name_alias = document.getElementById("name_alias");
    const h3 = document.querySelector("h3");
    const h4 = document.querySelector("h4")
    const p = document.querySelector("p");
    const result = document.getElementById("result");
    var httpRequest = new XMLHttpRequest();

    searchButton.addEventListener('click',  e => {
        e.preventDefault();
        var url = "superheroes.php";
        httpRequest.onreadystatechange = loadSuperhero;
        httpRequest.open('GET', url+"?query="+encodeURIComponent(name_alias.value));
        httpRequest.send();
    });

    function loadSuperhero() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                if (name_alias.value == "") {
                    var response = httpRequest.responseText;
                    result.innerHTML = response;
                    h3.innerHTML = "";
                    h4.innerHTML = "";
                    p.innerHTML = "";
                } else {
                    if (name_alias.value != "") {
                        var response = httpRequest.responseText;
                        var responseSplit;
                        if (response != "") {
                            responseSplit = response.split("<p>");
                            h3.innerHTML = responseSplit[3];
                            h4.innerHTML =  "A.K.A " + responseSplit[2];
                            p.innerHTML = responseSplit[4];
                            result.innerHTML = "";
                        } else {
                            result.innerHTML = "Superhero not found";
                            h3.innerHTML = "";
                            h4.innerHTML = "";
                            p.innerHTML = "";
                        }
                    }
                }
            } else {
                alert("A problem with the request occurred.");
            }
        }
    }
}