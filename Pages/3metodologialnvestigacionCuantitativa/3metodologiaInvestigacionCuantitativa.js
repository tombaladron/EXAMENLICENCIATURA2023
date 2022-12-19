$(".click1").click(function () {
    var elClickeado = $(this).attr('id');
    $("." + elClickeado).toggleClass("hidden");
});