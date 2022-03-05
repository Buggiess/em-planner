var current = moment().hour();

$("#currentDay").text(moment().format("LLL"));

$(".row").each(function (){
    var hour = $(this).data("hour");
    var message = localStorage.getItem(hour);
    $(this).find(".description").text(message);
    $(this).addClass(hour > current ? "future" : hour < current ? "past" : "present");

});

$(".row").on("click",".saveBtn", function(){
    var result = $(this).parent().find(".description").val();
    localStorage.setItem($(this).parent().data("hour"), result);
});