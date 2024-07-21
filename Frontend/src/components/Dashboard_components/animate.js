function Moveleft() {
    document.querySelector("#dashboard-left").style.width = "5%";
    document.querySelector("#dashboard-left_nav").style.visibility = "hidden";
    document.querySelector("#icon-left").visibility = "hidden";
    document.querySelector("#icon-right").style.visibility = "visible";
    document.querySelector("#icon-left").style.visibility = "hidden";
}

function Moveright() {
    document.querySelector("#dashboard-left").style.width = "40%";
    document.querySelector("#dashboard-left_nav").style.visibility = "visible";
    document.querySelector("#icon-right").style.visibility = "hidden";
    document.querySelector("#icon-left").style.visibility = "visible";
}

export { Moveleft, Moveright };