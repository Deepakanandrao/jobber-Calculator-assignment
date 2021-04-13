var tabs = document.getElementsByClassName("tab");
var tabContainers = document.getElementsByClassName("tab-content");

tabContainers[1].style.display = "none";


function tabChange(event, containerId) {
    for (j = 0; j < tabs.length; j++) {
        tabContainers[j].style.display = "none";
        tabs[j].classList.remove("is-active");
    }
    
    document.getElementById(containerId).style.display = "block";
    event.currentTarget.className += " is-active"
}