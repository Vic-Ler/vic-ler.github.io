document.getElementById("codeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent default form submission behavior

    var code = document.getElementById("code").value.trim(); // Trim the input code

    // Define an object to map codes to corresponding HTML file names
    var codeToPage = {
        "1357": "page01.html",
        "2468": "page02.html",
        "1111": "page03.html",
        "1410": "page04.html",
        "1305": "page05.html",
        "1997": "page06.html",
        "1996": "page07.html",
        "6666": "page08.html",
        "0303": "page09.html",
        "2356": "page10.html",
        "3467": "page11.html",
        "8479": "page12.html",
        "4578": "page13.html",
        "9074": "page14.html",
        "8888": "page15.html",
        "2094": "page16.html",
        "1078": "page17.html",
        "8822": "page18.html",
        "3333": "page19.html",
        "0006": "page20.html"
    };

    // Check if the code exists in the mapping
if (code in codeToPage) {
    // Redirect to the corresponding HTML page
    window.location.href = "secret/" + codeToPage[code];
} else {
    // Alert for incorrect code
    alert("Das ist der falsche Code du Ziege^^");
}
});
