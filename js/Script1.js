// JavaScript source code

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */


function initSidebarBlocks() {
    var sidebarBlocks = document.getElementsByClassName("sideBarBlock");

    for (i = 0; i < sidebarBlocks.length; i++) {
        var btns = sidebarBlocks[i].getElementsByClassName("sideBarHeader");
        if (btns[0] != null) {
            btns[0].addEventListener("click", function () {
                var dropdownContent = this.nextElementSibling;
                dropdownContent.classList.toggle("sideBarActive");
                this.getElementsByClassName("arrowDown")[0].classList.toggle("inverted");
               
                
            });
        }

    }
}

/*Sidebar button down flips on click*/

function flipSideBarArrow(obj) {
        obj.classList.toggle("inverted");
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