//You are presented with two arrays, all containing positive integers. 
//Create a function *findMissing(arr1, arr2)* that takes in two arguments, 
//both of which are arrays. 
//One of the arrays will have one extra number, see below:
//`[1,2,3]` and `[1,2,3,4]` should return `4`
//`[4,66,7]` and `[66,77,7,4]` should return `77`


function findMissing(arr1,arr2){

	var a =[];
	var missing =[];

	for(var i = 0; i < arr1.length; i++){
		a[arr1[i]] = true;
	}

	for(var i = 0; i < arr2.length; i++){

		if(a[arr2[i]]){
			delete a[arr2[i]];
		}

		else{
			a[arr2[i]] = true;
		}
	}

	for(var k in a){
		missing.push(k);
	}

	//return missing;


    if(missing.length <= 0){

        return 0;

    }
    else if(missing.length==1){

        
        return parseInt(missing[0]);
    }
    



}


module.exports.findMissing=findMissing;