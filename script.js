//BUSCADOR
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");

    filter = input.value.toUpperCase();

    ul = document.getElementById("myUL");

    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h1")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};

//ABRIR SUBCAPITULOS
$(".primerClick").click(function () {
    var elClickeado = $(this).attr('id');
    $("." + elClickeado).toggleClass("hidden");

});

//ABRIR ELEMENTO
//1
$(".SegundoClick1").click(function () {
    var elClickeado = $(this).attr('id');
    $("." + elClickeado).toggleClass("hidden");

});
//2
$(".SegundoClick2").click(function () {
    var elClickeado = $(this).attr('id');
    $("." + elClickeado).toggleClass("hidden");

});
//Agregar Materia
$(".SegundoClick3").click(function () {
    //EXTRAER ID DEL DIV CLICKEADO
    var elClickeado = $(this).attr('id');
    $("." + elClickeado).toggleClass("hidden");

    //LOAD MATERIA
    var loader;
    if (elClickeado == "ramo1Click2-3") { loader = "Pages/1metodos/Materia.html";}
    else if (elClickeado == "ramo2Click2-3") { loader = "Pages/2fubi/Materia.html";}
    else if (elClickeado == "ramo3Click2-3") { loader = "Pages/3cuanti/Materia.html";}
    else if (elClickeado == "ramo4Click2-3") { loader = "Pages/4social/Materia.html";}
    else if (elClickeado == "ramo5Click2-3") { loader = "Pages/5cuali/Materia.html";}
    else if (elClickeado == "ramo6Click2-3") { loader = "Pages/6desarrollo/Materia.html";}
    else if (elClickeado == "ramo7Click2-3") { loader = "Pages/7desarrollo/Materia.html";}
    else if (elClickeado == "ramo8Click2-3") { loader = "Pages/8cognicion/Materia.html";}
    else if (elClickeado == "ramo9Click2-3") { loader = "Pages/9personalidad/Materia.html";}
    else if (elClickeado == "ramo10Click2-3") { loader = "Pages/10ipl/Materia.html";}
    else if (elClickeado == "ramo11Click2-3") { loader = "Pages/11afectividad/Materia.html";}
    else if (elClickeado == "ramo12Click2-3") { loader = "Pages/12psicoanalisis/Materia.html";}
    else if (elClickeado == "ramo13Click2-3") { loader = "Pages/13evaluacion1/Materia.html";}
    else if (elClickeado == "ramo14Click2-3") { loader = "Pages/14psicopato1/Materia.html";}
    else if (elClickeado == "ramo15Click2-3") { loader = "Pages/15evaluacion2/Materia.html"; }
    else if (elClickeado == "ramo16Click2-3") { loader = "Pages/16psicopato2/Materia.html";}
    else { console.log("error") }
    $("." + elClickeado).load(loader);
});
//1metodos
//2fubi
//3cuanti
//4social
//5cuali
//6desarrollo
//7desarrollo
//8cognicion
//9personalidad
//10ipl
//11afectividad
//12psicoanalisis
//13evaluacion1
//14psicopato1
//15evaluacion2
//16psicopato2