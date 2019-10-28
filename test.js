/* VARIABLES  */
var num = 5;
var string = "hello";
var MyFunction = function(e){

}
var tableau = [1,2, 3, "4", {num:5}, "six"];


/* AFFICHAGE  */
console.log(num);
console.log(string);
console.log(tableau);

const arthur =
  {
    name : "Arthur", // Proprieté name ayant une valeur Bernard de type String
    surname: "Delatour", // Proprieté surname ayant une valeur Dupond de type String
    age: 10, // Proprieté age ayant une valeur 10 de type int
    display : function () { // Proprieté display ayant un type fonction
      console.log(this.name, this.surname, "a", this.age, "ans");
    },
    happyBirthday: function() { // Proprieté display ayant un type fonction
      this.age += 1;
      return this.age;
    }
  }

arthur.display();
arthur.happyBirthday();
arthur.display();


/* CALL BACK */
function quiPrendBeaucoupDeTemps(callback){
    /*
    ...
    ... PREND ENORMEMENT DE TEMPS
    ...
    */
    callback();
  }
  
  function finish(){
    console.log("finished !");
  }
  
  quiPrendBeaucoupDeTemps(finish);