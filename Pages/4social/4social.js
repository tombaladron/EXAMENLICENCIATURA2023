$(".click1").click(function () {
    var elClickeado = $(this).attr('id');
    $("." + elClickeado).toggleClass("hidden");
});

$(".click2").click(function () {
    var elClickeadob = $(this).attr('id');
    $("." + elClickeadob).toggleClass("hidden");
});