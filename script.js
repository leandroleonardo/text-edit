let text = () => document.getElementById("input-text")

function textUpdate(input) {
    let textId = document.getElementById("display-text")
    textId.innerText = input.value;
}

function color(color) {
    text().style.color = color.value
}

function background_color(color_b) {
    text().style.backgroundColor = color_b.value
}

function selectFont(textFont) {

    switch(textFont.value) {
        
        case "arial":
            text().style.fontFamily = "Arial"
        break;

        case "time":
            text().style.fontFamily = "Times New Roman"
        break;

        case "franklin":
            text().style.fontFamily = "Franklin Gothic Medium"
        break;

        case "Poppins":
            text().style.fontFamily = "Poppins"
        break;

    }
}

function selectRange(porcent) {
    text().style.fontSize = `${porcent.value}px`
}

function theme() {

    let menu = document.getElementById("menu")
    let imgTheme = document.getElementById("theme")
    let titleTxt = document.getElementById("title-text")

    if(this.getAttribute("check") === "false") {

        document.body.style.backgroundColor = "#353535"
        menu.style.color = "white"
        titleTxt.style.color = "white"

        this.setAttribute("check","true")
        imgTheme.setAttribute("src","./images/sol.png")

    } else {

        titleTxt.style.color = "black"
        menu.style.color = "black"
        document.body.style.backgroundColor = "white"
        
        this.setAttribute("check","false")
        imgTheme.setAttribute("src","./images/lua.png")
    } 
}

window.onload = function(){

    let a = document.getElementById("containerTheme")
    a.addEventListener('click',theme)
    
}