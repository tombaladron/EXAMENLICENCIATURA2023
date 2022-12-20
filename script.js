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
    if (elClickeado == "ramo1Click2-3") { loader = "Pages/1metodologiaslnvestigacionPsicologia/1metodologiasInvestigacionPsicologia-Materia.html";}
    else if (elClickeado == "ramo2Click2-3") { loader = "Pages/2fundamentosBiologicosComportamiento/2fundamentosBiologicosComportamiento-Materia.html";}
    else if (elClickeado == "ramo3Click2-3") { loader = "Pages/3metodologialnvestigacionCuantitativa/3metodologiaInvestigacionCuantitativa-Materia.html";}
    else if (elClickeado == "ramo4Click2-3") { loader = "Pages/4psicologiaSocial/4psicologiaSocial-Materia.html";}
    else if (elClickeado == "ramo5Click2-3") { loader = "Pages/5metodologiaInvestigacionCualitativa/5metodologiaInvestigacionCualitativa-Materia.html";}
    else if (elClickeado == "ramo6Click2-3") { loader = "Pages/6psicologiaDesarrollo1/6psicologiaDesarrollo1-Materia.html";}
    else if (elClickeado == "ramo7Click2-3") { loader = "Pages/7psicologiaDesarrollo2/7psicologiaDesarrollo2-Materia.html";}
    else if (elClickeado == "ramo8Click2-3") { loader = "Pages/8teoriasCognicion/8teoriasCognicion-Materia.html";}
    else if (elClickeado == "ramo9Click2-3") { loader = "Pages/9personalidaIdentidad/9personalidaIdentidad-Materia.html";}
    else if (elClickeado == "ramo10Click2-3") { loader = "Pages/10inteligenciaPensamientoLenguaje/10inteligenciaPensamientoLenguaje-Materia.html";}
    else if (elClickeado == "ramo11Click2-3") { loader = "Pages/11afectividadyMotivacion/11afectividadyMotivacion-Materia.html";}
    else if (elClickeado == "ramo12Click2-3") { loader = "Pages/12psicoanalisis/12psicoanalisis-Materia.html";}
    else if (elClickeado == "ramo13Click2-3") { loader = "Pages/13evaluacionPsicologica1/13evaluacionPsicologica1-Materia.html";}
    else if (elClickeado == "ramo14Click2-3") { loader = "Pages/14psicopatologiaPsiquiatriaAdulto/14psicopatologiaPsiquiatriaAdulto-Materia.html";}
    else if (elClickeado == "ramo15Click2-3") { loader = "Pages/15evaluacionPsicologica2/15evaluacionPsicologica2-Materia.html";}
    else { console.log("error") }
    $("." + elClickeado).load(loader);
});
