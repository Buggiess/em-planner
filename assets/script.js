var current = moment().hour();
//presents the current time and day
$("#currentDay").text(moment().format("LLL"));

$(".row").each(function (){
    var hour = $(this).data("hour");
    var message = localStorage.getItem(hour);
    $(this).find(".description").text(message);
    $(this).addClass(hour > current ? "future" : hour < current ? "past" : "present");

});
//when save button is clicked the data in the row is saved to local storage
$(".row").on("click",".saveBtn", function(){
    var result = $(this).parent().find(".description").val();
    localStorage.setItem($(this).parent().data("hour"), result);
});