function a (){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var country = document.getElementById("country").value;
    var hp = document.getElementById("hp").value;

    if (country == "Austria") {
            var result = ((hp*100)/(age+50)).toFixed(2);              
         document.getElementById("output").innerHTML = `${name} your insurance will cost ${result} €`;
        }
    else if (country == "Hungary") {
                var result = ((hp*120)/(age+100)).toFixed(2);            
                document.getElementById("output").innerHTML = `${name} your insurance will cost ${result} €`;
            }
    else if (country == "Greece") {
                var result = ((hp*150)/((age+3)+50)).toFixed(2);
                document.getElementById("output").innerHTML =(`${name} your insurance will cost ${result} €`);
            }
    
    /*For Austria : insurance = horse_power x 100 / age   + 50;
            
     For Hungary: insurance = horse_power x 120 / age  + 100;

     For Greece: insurance = horse_power x 150 / (age+3)  + 50; */

}
document.getElementById("button").addEventListener("click", a, false)
    