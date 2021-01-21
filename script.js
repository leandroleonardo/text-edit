function textUpdate(input) {
    let textId = document.getElementById("display-text")
    textId.innerText = input.value;
}

function textDisplay() {
    let text = document.getElementById("input-text")
    return text
}

function color(color) {
    let text = textDisplay() 
    text.style.color = color.value
}

function background_color(color_b) {
    let text = textDisplay()
    text.style.backgroundColor = color_b.value
}

function selectFont(textFont) {
    let text = textDisplay()

    if(textFont.value === "arial") {
        text.style.fontFamily = "Arial"
    }
    else if(textFont.value === "time") {
        text.style.fontFamily = "Times New Roman"
    }
    else if(textFont.value === "franklin") {
        text.style.fontFamily = "Franklin Gothic Medium"
    }
}

function selectRange(porcent) {
    let text = textDisplay()
    text.style.fontSize = `${porcent.value}px`
}

let cont = 0 

function theme(click) {
    
    /* let text = textDisplay() */
    let textColorLetter = document.getElementsByClassName("colorText")
    let valor = parseInt(click.value)
    
    cont += valor
    
    if(cont%2 == 0) {
        document.body.style.backgroundColor = "#242120"
        for(let i=0; i<textColorLetter.length; i++) {
            console.log(i)
            textColorLetter[i].style.color = "white"
        }
    } else {
        for(let i=0; i<textColorLetter.length; i++) {
            console.log(i)
            textColorLetter[i].style.color = "black"
        }
        document.body.style.backgroundColor = "white"
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