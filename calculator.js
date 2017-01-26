$(document).ready(function(){
  //store inputs from user to calculate later
  var inputs=[""];
  //to store current input
  var totalString;

  //array for validation without dot
  var operators1=["+", "-", "/", "*"];
  //array with dot for validation
  var operators2=["."];
  //this is the array that holds the numbers for validation
  var nums = [0,1,2,3,4,5,6,7,8,9];

  function getValue(input){
    //this is validation to prevent double dots
    if(operators2.includes(inputs[inputs.length-1]===true && input===".")){
      console.log("Duplicate '.' ")
    }
    //this validation ensures the user is not starting with a plus or something
    else if(inputs.length===1 && operators1.includes(input)===false){
      inputs.push(input);//go ahead and add that input to the array
    }
    //let's make sure user can't put two operators next to each other
    else if(operators1.includes(inputs[inputs.length-1])===false){
      inputs.push(input);//it's oke to add input to the array
    }
    else if(nums.includes(Number(input))){
      inputs.push(input);
    }
    update();//this will update the input
  }

  function update(){
    totalString = inputs.join("");
    $("#steps").html(totalString);
  }

  function getTotal(){
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));
  }
  $("a").on("click", function(){
    if(this.id==="deleteAll"){
      inputs=[""];
      update();
    }
    else if(this.id==="backOne"){
      inputs.pop();
      update();
    }
    else if(this.id==="total"){
      getTotal();
    }
    else{
      if(inputs[inputs.length-1].indexOf("+", "-", "/", "*")===-1){
        getValue(this.id);
      }
      else{
        getValue(this.id);
      }
    }
  });
});
