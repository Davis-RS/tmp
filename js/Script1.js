// JavaScript source code

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
function dropdown1() {
    var dropdown = document.getElementsByClassName("periodDropDown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        if (!dropdown[i].classList.contains("active")) {
            dropdown[i].classList.add("active");
        }
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (this.classList.contains("active")) {
                dropdownContent.style.display = "block";
            } else {
                dropdownContent.style.display = "none";
            }
        });
    }
}

function dropdown2() {
    var dropdown = document.getElementsByClassName("releasesDropDown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        if (!dropdown[i].classList.contains("active")) {
            dropdown[i].classList.add("active");
        }
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (this.classList.contains("active")) {
                dropdownContent.style.display = "block";
            } else {
                dropdownContent.style.display = "none";
            }
        });
    }
}

function dropdown3() {
    var dropdown = document.getElementsByClassName("sideBarCollectionDropDown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        if (!dropdown[i].classList.contains("active")) {
            dropdown[i].classList.add("active");
        }
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;

            if (this.classList.contains("active")) {
                dropdownContent.style.display = "block";

            } else {
                dropdownContent.style.display = "none";
            }
        });
    }
}

/*Sidebar button down flips on click*/
var bool1 = false;
function flip1() {
    if (bool1 == false) {
        document.querySelector('.periodArrowDown').style.transform = 'none';
        bool1 = true;
    }
    else if (bool1 == true) {
        document.querySelector('.periodArrowDown').style.transform = 'scaleY(-1)';
        bool1 = false;
    }
}

/*Sidebar button down flips on click*/
var bool2 = false;
function flip2() {
    if (bool2 == false) {
        document.querySelector('.releasesArrowDown').style.transform = 'none';
        bool2 = true;
    }
    else if (bool2 == true) {
        document.querySelector('.releasesArrowDown').style.transform = 'scaleY(-1)';
        bool2 = false;
    }
}

/*Sidebar button down flips on click*/
var bool3 = false;
function flip3() {
    if (bool3 == false) {
        document.querySelector('.sideBarCollectionArrowDown').style.transform = 'none';
        bool3 = true;
    }
    else if (bool3 == true) {
        document.querySelector('.sideBarCollectionArrowDown').style.transform = 'scaleY(-1)';
        bool3 = false;
    }
}

var isopened = false;
function menu() {
    if (isopened == false) {
        document.querySelector('.menuButton').style.display = 'none';
        document.querySelector('.closeButton').style.display = 'flex';
        document.getElementById("menu").className = "menuWrap open"
        document.getElementById("menuBackground").className = "menuBackground open"
        isopened = true;
    }
    else if (isopened == true) {
        document.querySelector('.closeButton').style.display = 'none';
        document.querySelector('.menuButton').style.display = 'flex';
        document.getElementById("menu").className = "menuWrap"
        document.getElementById("menuBackground").className = "menuBackground"
        isopened = false;
    }
}