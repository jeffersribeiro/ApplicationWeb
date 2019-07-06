function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1())
console.log(soma1(1,2,3))
console.log(soma1(1),soma1(5))
console.log('teste passando 0: '+soma1(0,0,0))

 // estratergias 2, 3 e 4
 function soma (a,b,c){
     a = a !== undefined ? a : 1
     b = 1 in arguments ? b : 1
	  c =isNaN(c) ? 1: c
		return a + b + c
	 }
console.log('teste passando 0: '+soma(0,0,0))
console.log(soma(0,2,0))
console.log(soma(0))



	function soma2(a = 0, b= 0, c= 0){
		return a + b + c
	}
console.log('teste passando 0: '+soma2(0,0,0))