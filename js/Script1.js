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


function initSidebarBlocks() {
    var sidebarBlocks = document.getElementsByClassName("sideBarBlock");

    for (i = 0; i < sidebarBlocks.length; i++) {
        var btns = sidebarBlocks[i].getElementsByClassName("sideBarHeader");
        if (btns[0] != null) {
            btns[0].addEventListener("click", function () {
                this.classList.toggle("active");
                var dropdownContent = this.nextElementSibling;

                if (this.classList.contains("active")) {
                    dropdownContent.style.display = "block";

                } else {
                    dropdownContent.style.display = "none";
                }
                flip(this.getElementsByClassName("arrowDown")[0]);
            });
        }
    }
}


function dropdown3(selectorName) {
    var dropdown = document.getElementsByClassName(selectorName);
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

function flip(obj) {
    console.log(obj);
    var parent = obj.parentNode.parentNode;
    if (parent.classList.contains("active")) {
        obj.style.transform = 'none';
    }
    else if (bool1 == true) {
        obj.style.transform = 'scaleY(-1)';
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

var menuOpened = false;
function menuMobile() {
    if (menuOpened == false) {
        document.querySelector('.menuButton').style.display = 'none';
        document.querySelector('.closeMenuButton').style.display = 'flex';
        document.getElementById("menu").className = "menuWrap open"
        document.getElementById("menuBackground").className = "menuBackground open"
        menuOpened = true;
    }
    else if (menuOpened == true) {
        document.querySelector('.closeMenuButton').style.display = 'none';
        document.querySelector('.menuButton').style.display = 'flex';
        document.getElementById("menu").className = "menuWrap";
        document.getElementById("menuBackground").className = "menuBackground";
        menuOpened = false;
    }
}

var filtersOpened = false;
function filtersMobile() {
    if (filtersOpened == false) {
        document.querySelector('.closeFiltersButton').style.display = 'flex';
        document.getElementById("filters").className = "filtersWrap open";
        document.getElementById("filtersBackground").className = "filtersBackground open";
        filtersOpened = true;
    }
    else if (filtersOpened == true) {
        document.querySelector('.closeFiltersButton').style.display = 'none';
        document.getElementById("filters").className = "filtersWrap";
        document.getElementById("filtersBackground").className = "filtersBackground";
        filtersOpened = false;
    }
}