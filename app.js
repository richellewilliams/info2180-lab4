"use strict";

window.onload = function () {
    const searchButton = document.getElementById("search");
    var httpRequest = new XMLHttpRequest();

    searchButton.addEventListener('click', e => {
        e.preventDefault();
        var url = "superheroes.php";
        httpRequest.onreadystatechange = loadSuperhero;
        httpRequest.open('GET', url);
        httpRequest.send();
    });

    function loadSuperhero() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                alert(response);
            } else {
                alert("A problem with the request occurred.");
            }
        }
    }
}