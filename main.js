// when user give -ve value loop terminated and also add all user values..

var a=0, k=0;

while(a>=0){
    b=Number(prompt("Enter any number (until -ve value)"));
	k+=a;
	a=b;
}
console.log(k);