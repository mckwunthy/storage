//variable
var colorStandard = "color-standard"
var colorSombre = "color-sombre"
var colorBlue = "color-blue"
var defaultColor = document.getElementById("default")
var sombreColor = document.getElementById("sombre")
var blueColor = document.getElementById("blue")
var app = document.getElementById("app")

//STORAGE function
var storageColorManage = () => {
    if (!localStorage.getItem("colorStorage")) {
        var storageColor = app.className
        localStorage.setItem("colorStorage", storageColor)

        console.log(localStorage.getItem("colorStorage"));
    }
    if (localStorage.getItem("colorStorage")) {
        localStorage.removeItem("colorStorage")
        var storageColor = app.className
        localStorage.setItem("colorStorage", storageColor)

        console.log(localStorage.getItem("colorStorage"));
    }
}

var useChoiceColor = () => {
    if (localStorage.getItem("colorStorage")) {
        console.log(localStorage.getItem("colorStorage"));
        app.className = localStorage.getItem("colorStorage")
    }
}


//objet content function
var functionListner = {
    changeColorDefault: (event) => {
        if (event) {
            app.className = ""
            app.className = colorStandard
            storageColorManage()
        }
    },
    changeColorSombre: (event) => {
        if (event) {
            app.className = ""
            app.className = colorSombre
            storageColorManage()
        }
    },
    changeColorBlue: (event) => {
        if (event) {
            app.className = ""
            app.className = colorBlue
            storageColorManage()
        }
    }
}


//objet listener
var setupLiestener = () => {
    defaultColor.onclick = functionListner.changeColorDefault
    sombreColor.onclick = functionListner.changeColorSombre
    blueColor.onclick = functionListner.changeColorBlue
}