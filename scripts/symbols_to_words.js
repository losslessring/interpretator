/*
	ИНТЕРПРЕТАТОР
*/

/*
 Сначала простая задача.
 Сначала сделаю просто перебор символов строки.

 

 По шагам
 
 1) Прочитать
 
 2) Распознать, это значит соотнести с чем то, уже известным, значит должна быть какая то
 	таблица, в которой хранится соотношение внешности и смысла символов.

 3) Построить структуру, уже смысловую, например дерево, где узлы это операции, а листья - операнды

 4) Выполнить, запустить вычисление дерева со смысловой структурой

 Теперь надо сделать, чтобы он объединял символы в слова

 Теперь определить порядок операторов, в сложении и умножении он неважен, но в вычитании и делении важен
 
 А если у меня есть несколько операций, значит нужно распределить между ними операторы, как в задаче 
 о мудрецах и палочках. Значит нужно не выделять операции в отдельную сущность,
 а сгруппировать со словами, это тоже будут слова, и уже из них формировать операции и операнды.
 Операции будут маркировать соседние слова как свои, а где это сделать ? лучше уже работать
 с разобранными объект
*/

const foreach = (array, procedure, count) => {

	if (count >= array.length) {
		return null
	}

	else {
		procedure(array[count])
		return foreach(array, procedure, count + 1)
	}
}

const map = (array, procedure, count = 0,  result = []) => {
	
	if (count >= array.length) {
		return result
	}
	else{
		result.push(procedure(array[count]))
		return map(array, procedure, count + 1, result)
	}
}

const equal = (a, b) => {
    if (a == b)
        return true
    else 
        return false                                
}

// function filter(array, operation, property, value) {
//     let a = [];
        
//     for(let i = 0; i < array.length; ++i) {       
//          if(operation(array[i][property], value)){
//            a.push(array[i]);  
//          }
//     }    
//     return a;
// }

const filter = (array, operation, property, value, count = 0, result = [] ) => {

	if (count >= array.length) {		
		return result
	}
	else {
			if (operation(array[count][property], value)){
           		result.push(array[count])
         	}
		
		return filter(array, operation, property, value, count + 1, result) 
	}
}

const find = (array, operation, property, value, count = 0, result = {} ) => {

	if (count >= array.length) {		
		return result
	}
	else {
			if (operation(array[count][property], value)){
           		result = array[count]
         	}
		
		return find(array, operation, property, value, count + 1, result) 
	}
}

const extract = (array, field, count = 0, result = []) => {

	if (count >= array.length) {		
		return result
	}
	else {
		result.push(array[count][field])
		return extract(array, field, count + 1, result)
	}
}

// const symbols_to_words = (array, property, symbol, operation, field) => {
// 	let word = []
// 	let result = []
	        
//     for(let i = 0; i < array.length; i++) {       
    	
    	
// 	        if(operation(array[i][property], symbol)){
	    		
// 	    		//Используется хак с &&, при котором второе выражение не вычисляется   		        	
// 				while (i < array.length && operation(array[i][property], symbol)){	        		
// 	        		word.push(array[i][field])  
// 	        		i++
// 	        	}
// 	        	result.push(word.join(''))
// 	        	word = []
// 	        }
    	
//     }    
//     return result
// }

const exist_true_in_array = (array, value, predicate) => {
	//console.log(value)
	for(let i = 0; i < array.length; i++) {
		if (predicate(array[i], value)) {
			return true
		}
	}
	return false
}


const symbols_to_words = (obj) => {
	let {array, property, strict_value, or_values, strict_predicate, or_predicate, field} = obj
	//console.log(predicate)

	let word = []
	let result = []
	        
    for(let i = 0; i < array.length; i++) {       
    	
    		console.log(array[i][property])
	        if(or_predicate(or_values, array[i][property], strict_predicate)){
	    		
	    		word.push(array[i][field])  
	    		i++
	    		//Используется хак с &&, при котором второе выражение не вычисляется   		        	
				while (i < array.length && strict_predicate(array[i][property], strict_value)){	        		
	        		word.push(array[i][field])
	        		i++

	        	}
	        	result.push(word.join(''))
	        	word = []
	        }
    	
    }    
    return result
}

// const symbols_to_words = (array, property, value, predicate, field) => {
// 	let word = []
// 	let result = []
	        
//     for(let i = 0; i < array.length; i++) {       
    	
    	
// 	        if(predicate(array[i][property], value)){
	    		
// 	    		//Используется хак с &&, при котором второе выражение не вычисляется   		        	
// 				while (i < array.length && predicate(array[i][property], value)){	        		
// 	        		word.push(array[i][field])  
// 	        		i++
// 	        	}
// 	        	result.push(word.join(''))
// 	        	word = []
// 	        }
    	
//     }    
//     return result
// }

const recognize = function(symbol) {
		
	return find(symbols_table, equal, "symbol", symbol)
}








//let expr = ` +  5  40 2 `

// const meaning = map(expression, recognize, 0)

// console.log("meaning\n", meaning)


// const operation = find(meaning, equal, "type", "operation").meaning
// const operation_description = find(meaning, equal, "type", "operation").symbol

// console.log(`operation\n ${operation_description}\n`, operation)

// //const operands = extract(filter(meaning, equal, "type", "operand"), "meaning")

// //console.log("operands\n", operands)

// let words = symbols_to_words(meaning, "datatype", "number", equal, "symbol")
// console.log("words", words)

// let result = operation(...words)
// console.log("result", operation)