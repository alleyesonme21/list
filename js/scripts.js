

function Task(name, description) {
  this.name = name;
  this.description = description;
}

$(document).ready(function() {
  $("#formy").submit(function(event) {
    event.preventDefault();    
    var newTask = new Task(($("#name").val()), ($("#description").val()),);
      // console.log(newDest);


    $("#output").append("<div><li><b>"+newTask.name+"</b> - "+newTask.description+" -- <span id='remove'>Complete</span></li></div>")


    $("span:contains(Complete)").click(function() {
      $(this).parent('li').remove();
      
    });


});
  




});