const a= function (a,b,c,d,e,f){
	return a*b+c-d+e/f
};
const z= a (10,2,3,10,10,10);
console.log(z);







const b= function (){
    
    return 'Hi there, I really need to visit your office hours';
};
console.log(b());







const TheNbhd= function(thoughts) {
    
};
console.log(TheNbhd ('The latest EP'));








const a= function (str1,str2,str3){
    const x= str1;
    const y= str2;
    const z= str3;
    if (x.length > y.length && x.length > z.length) { 
        return x;
        
    }
    else if (y.length > x.length && y.length > z.length){
        return y;
    }
    else if (z.length > y.length && z.length > a.length){
        return z;
    }

};
console.log(a("yoooooooo","yoooooojjojjjoo","3249083209483098320984"));











const Hello= function(num1,num2){
    if (num1 === num2) {
        return 0}
    else if (num1 > num2) {
        return 1
    }
    else if (num1 < num2) {
        return -1
    }
 };
 
console.log(Hello(2,4));












const numbLength = function (number){
	const a = number + "";
  return a.length;
}
console.log(numbLength(1679845609))









const a= function (str1,str2,num){
    if ((str1 + str2).length > num){
        return 1;
    } else{
        return -1;
    }
};
console.log(a("my name","Jeff",99));






const stepOne = function(number,number2){
    return number*number2;
};
console.log(stepOne(20,2));

const stepTwo= function (number3,number4){
    return number3/number4;
};
console.log(stepTwo(1,2));

const triangleArea= function (base,height){
   return stepTwo(stepOne(base,height),2);
};
console.log(triangleArea(20,3));








const runStuff =function (base,height,shape) {

	if (shape==="rectangle"){
		return (base*height);
	} else if (shape==="triangle"){
		return ((base*height)/2)
	} else {
		return -1
	}
};








