function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active-tab";
}

function searchContent() {
    var input, filter, main, tabcontent, p, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    main = document.getElementsByTagName("main")[0];
    tabcontent = main.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        p = tabcontent[i].getElementsByTagName("p")[0];
        if (p) {
            txtValue = p.textContent || p.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tabcontent[i].style.display = "block";
            } else {
                tabcontent[i].style.display = "none";
            }
        }
    }
}