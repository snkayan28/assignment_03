// 01. Feet to Mile Conversion

function feetToMile(feet){
    var mile = (feet*0.000189393939);
    return mile;
}
var result = feetToMile(5281);
console.log(result);


//02. Wood Calculation

function woodCalculator(chair, table, bed){
var wood = (chair*1)+(table*2)+(bed*3);
return wood;

}
var result = woodCalculator(10,20,18);
console.log(result);

// 03. Brick Calculation

function brickCalculator(floor){
      var brick_1_to_10 = 0;
        var brick_2_to_20 = 0;
         var brick_20_to_last = 0;
    
        if(floor <= 10){
            var brick_1_to_10 = (floor * 15 * 1000); 
            return brick_1_to_10;       
            
        }
            else if(floor > 10 && floor <= 20){
                var brick_1_to_10 = (10 * 15 * 1000);
                var brick_2_to_20 = ((floor-10) * 12 * 1000);
                var result6 = brick_1_to_10 + brick_2_to_20;
                return result6;
        
            }

            else if(floor > 20){
                var brick_1_to_10 = (10 * 15 * 1000);
                var brick_2_to_20 = (10 * 12 * 1000);
                var brick_20_to_last = ((floor-20) * 10 * 1000);
                var result7 =  brick_1_to_10 + brick_2_to_20 + brick_20_to_last;
                return result7;
            }
            else {
                console.log("Building is not possible");
            }
}
    var no_of_brick = brickCalculator(37);
    console.log(no_of_brick);
    

// 04. lower name of my friend from friend list.

 function tinyFriend(friends){
     var min = friends[0];
     for(var i=0; i < friends.length; i++){
         var word = friends[i];
         if(word < min){
            min = word;
        } 
    }
    return word;
    
 }
  var friends = tinyFriend(['Rahim', 'Hridoy', 'Mosharof', 'Jui']);
 console.log(friends);

