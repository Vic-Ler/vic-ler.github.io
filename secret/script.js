document.getElementById("codeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent default form submission behavior

    var code = document.getElementById("code").value.trim(); // Trim the input code

    // Define an object to map codes to corresponding HTML file names
    var codeToPage = {
        "1348": "page01.html",
        "1345": "page02.html",
        "1305": "page03.html",
        "1410": "page04.html",
        "1997": "page05.html",
        "1996": "page06.html",
        "1160": "page07.html",
        "1140": "page08.html",
        "2020": "page09.html",
        "2288": "page10.html",
        "1194": "page11.html",
        "6118": "page12.html",
        "8231": "page13.html",
        "8881": "page14.html",
        "1111": "page15.html",
        "8118": "page16.html",
        "2038": "page17.html",
        "8181": "page18.html",
        "1842": "page19.html",
        "4058": "page20.html"
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
