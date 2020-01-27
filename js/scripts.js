

function Task(name, description) {
  this.name = name;
  this.description = description;
}

$(document).ready(function() {
  $("#formy").submit(function(event) {
    event.preventDefault();    
    var newTask = new Task(($("#name").val()), ($("#description").val()),);


    $("#output").append("<div><li><h2><b>"+newTask.name+"</b> - "+newTask.description+" -- </h2><span id='remove'>Complete</span></li></div>");


    $("span:contains(Complete)").click(function() {
      $(this).parent('li').remove();
      
    });
  });
});