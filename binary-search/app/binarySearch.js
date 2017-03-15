//Firstly, you are to create three functions, 
//as prototypes to the Array class to return the following:
//toTwenty()` returns `[1, 2, 3 . . . 20]`
//`toForty()` returns `[2, 4, 6 . . . 40]`
//`toOneThousand()` returns `[10, 20, 30 . . . 1000]`



Array.prototype.toTwenty= function(){



	for(var i = 1; i<= 20; i++){

		this.push(i);
	}

	return this;

	

}

Array.prototype.toForty= function(){

	for(var i = 2; i<= 40; i+=2){

		this.push(i);
		
	}

	return this;


	
}

Array.prototype.toOneThousand= function(){

	for(var i = 10; i<= 1000; i+=10){

		this.push(i);
		
	}

	return this;
	
}

//Once you are done, create another prototype(d) function called `.search`, 
//it will take just one argument which is the number you are to find. 
//The search function should return an object, which contains
//`.count`, the number of times your function iterated to find the index of the number in question
//`.index`, the index of the number in question
//`.length`, the length of the original array
//The `.search` function should implement the *binary search algorithm*. 
//Each time you iterate, you should increase the count, to test how efficient your implementation is.


Array.prototype.search= function(number){



		var initial = 0;
		var end = this.length -1;
		var mid = Math.floor((end + initial)/2);
		var count = 0;

	

			while(this[mid] != number && initial<end){
			if(number < this[mid]){

				end = mid-1;
			}

			else if(number === this[mid]){

				return count;
				count ++;

			}

			else if (number> this[mid]){

				initial = mid +1;
			}


			mid = Math.floor((end +initial)/2);

			
		}


		if(this[mid]== number){

			return { 'count' : count, 'index': mid , 'length': this.length};
		}

		else{

			return { 'count' : count, 'index': -1 , 'length': this.length};
		}



	



		}

		
		
		



module.exports.Array= Array;


































