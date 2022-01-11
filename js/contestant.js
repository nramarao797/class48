class Contestant{
  constructor(){
    
    
    
    
    
}




    
display(){
  var title = createElement("h1");
  title.html("VIKTORINA");
  title.position(600,300);
  var input1 = createInput("Enter Name ");
input1.html(" Enter Name ");
input1.position(600,450);
var button = createButton("Submit");
button.html("Submit");
button.position(750,450);
button.mousePressed(function(){
  input1.hide();
  button.hide();
  var name = input1.value();


})

}
}