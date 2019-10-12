module.exports = function zeros(expression) {
					//create a new array
					const arr = expression.split('*');
					//check for at least one multiplier
					const newArr = [];
					const newOdd = [];
					for (k = 0; k < arr.length; k++) {	
						if (arr[k].endsWith('!!')) {
							newArr.push(arr[k].substr(0, (arr[k].length-2)));
							newOdd.push(arr[k].substr(0, (arr[k].length-2)));
						}
						else {
							newArr.push(arr[k].substr(0, (arr[k].length-1)));
						}
					}
					if (newOdd.length == newArr.length) {
						if (newArr.every(elem => elem%2 != 0)) {
						return 0;
						}
					}
					if (newArr.every(elem => elem%2 != 0 && elem%5 != 0)) {
						return 0;
					}	
					//remove "!!" from array
					const zero = [];
						for (k = 0; k < arr.length; k++) {
							//check !! factorials 
							if (arr[k].endsWith('!!')) {
								let num = arr[k].substr(0, (arr[k].length-2));
								//check even multipliers for "5"
								if (num%2 == 0) {
									let i = 2;
									let evenArr = [];
									while (i <= num) {
										if (i%5 == 0 && i/5 >= 5){
											let n = i;
											while (n%5 == 0 && n/5 >= 5) {	
												if (n%25 == 0 ) {
													evenArr.push(5,5);
													zero.push(1,1);
													n = n/25;
												}
												if (n%10 == 0 &&  n/5 >= 10) {
													evenArr.push(5);
													zero.push(1);
													n = n/10;
												}
												else if (n%5 == 0 && n/5 >= 5) {
													evenArr.push(5);
													zero.push(1);
													n = n/5;
													evenArr.push(n);
												}
												else if (n%5 == 0 && n/5 >= 5) {
													evenArr.push(5);
													zero.push(1);
													n = n/5;
												}
												else {
												}
											}
											i += 2;
										}
										else if (i%5 == 0 && i/5 < 5) {
											evenArr.push(5);
											zero.push(1);
											evenArr.push(i/5);
											i += 2;
										}
										else if (i%5 != 0) {
											evenArr.push(i);
											i += 2;
										}
										else {
										}
									}
								}
								//check odd multipliers for "5"
								else {
									let i = 1;
									let oddArr = [];
									while (i <= num) {								
										if (i%5 == 0 && i/5 >= 5) {
											let n = i;
											while (n%5 == 0 && n/5 >= 5) {
												if (n%25 == 0) {
													oddArr.push(5,5);
													zero.push(1,1);
													n = n/25;
												}
												else if (n%5 == 0 &&  n/5 >= 10) {
													oddArr.push(5);
													zero.push(1);
													n = n/5;
												}
												else if (n%5 == 0 && n/5 >= 5) {
													oddArr.push(5);
													zero.push(1);
													n = n/5;
													oddArr.push(n);
												}
											}
											i += 2;
										}
										else if (i%5 == 0 && i/5 < 5) {
											oddArr.push(5);
											zero.push(1);
											oddArr.push(i/5);
											i += 2;
										}
										else {
											oddArr.push(i);
											i += 2;
										}							
									}
								}
							}
							//check ! factorials
							else {
								let num = arr[k].substr(0, (arr[k].length-1));
								let i = 1;
								while (num/Math.pow(5,i) >= 1) {
										zero.push(Math.floor(num/Math.pow(5,i)));
										i++;
								}
							}
						}
					//return numbers of zeros
					const result = zero.reduce((sum, current) => sum + current, 0);
					return result;
				}