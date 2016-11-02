$(document).ready(function(){
  var submit = function(){
    var fname = $("#name").val();
    var sname = $("#secondname").val();
    var mail = $("#email").val();
    var tarea = $("#textarea").val();

    $("#sub").submit(function(event){
      alert("Thank you" +fname+ "for taking the survey");
      event.preventDefault();
    });
  };

});
