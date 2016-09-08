function deposit(twenty,fifty,hundred){
	var note20 = twenty;
	var note50 = fifty;
	var note100 = hundred;
	total = (note20 * 20) + (note50 * 50) + (note100 * 100);
	return total;	 
}

var note20 = 2;
var note50 = 4;
var note100 = 100;

deposit = deposit(note20, note50, note100);
var total = deposit;
console.log(deposit);

function withdraw(total, howMuch){
	if(howMuch > total){
		console.log("insufficient funds");
	}
	else{
		total = total - howMuch;
		return total;
	}
	return total;
}

var howMuch = 10000;
var withdraw = withdraw(total, howMuch);
total = withdraw;
console.log(withdraw);

