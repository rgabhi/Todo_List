// Check off specifc todos by clicking
  
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
// click on x to delete todo
$("ul").on("click","span", function(event){
    event.stopPropagation();// to stop event bubbling
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
})
$("input[type='text']").keypress(function(event){
   if(event.which === 13){
    //    grabbing new todo text
    var todoText  = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>");
   }
})
$(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle();
})
