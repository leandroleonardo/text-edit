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

    }
}

function selectRange(porcent) {
    text().style.fontSize = `${porcent.value}px`
}

function theme() {

    let verification = document.getElementById("theme")
    let textColorLetter = document.getElementsByClassName("colorText")

    if(verification.value === "false") {

        document.body.style.backgroundColor = "#242120"
        
        for(let i=0; i<textColorLetter.length; i++) {
            textColorLetter[i].style.color = "white"
        }

        verification.value = "true"
        
    } else {

        for(let i=0; i<textColorLetter.length; i++) {
            textColorLetter[i].style.color = "black"
        }

        document.body.style.backgroundColor = "white"

        verification.value = "false"
    
    } 
}

function printText() {

    let textColorLetter = document.getElementsByClassName("colorText")
   
    for(let i=0; i<textColorLetter.length; i++) {
        textColorLetter[i].style.opacity = "0"
    }

    document.getElementById("theme").style.opacity = "0"

    alert("Ative os elementos gráficos de plano de fundo")

    window.print()

    for(let i=0; i<textColorLetter.length; i++) {
        textColorLetter[i].style.opacity = "1"
    }

    document.getElementById("theme").style.opacity = "1"
}
