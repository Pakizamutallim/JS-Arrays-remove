// alert()

//Array-a prototype ilə remove methodu yazın. 
// Bu method Arrayın sonuncu elementini silsin. 


function removeElement() {
    var arraytest = [2, 3, 4, 8, 6, 23];
    this.remove=function (num){
        arraytest[arraytest.length--] = num;
        return arraytest; 
    }
}

var arraytest1 = new removeElement();
var arraytest2 = new removeElement();

console.log(arraytest1.remove()); 






