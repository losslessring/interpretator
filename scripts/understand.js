
/*
Здесь весь процесс понимания написанного

 По шагам
 
 1) Прочитать
 
 2) Распознать, это значит соотнести с чем то, уже известным, значит должна быть какая то
 	таблица, в которой хранится соотношение внешности и смысла символов.

 3) Построить структуру, уже смысловую, например дерево, где узлы это операции, а листья - операнды

 4) Выполнить, запустить вычисление дерева со смысловой структурой

 5) Вернуть результат - большой объект, запустил - забыл, в котором будет все интерпретированное содержимое
*/

const understand = (expression) => {
	const meaning = map(expression, recognize, 0)

	console.log("meaning\n", meaning)


	const operation = find(meaning, equal, "type", "operation").meaning
	const operation_description = find(meaning, equal, "type", "operation").symbol

	const operations = filter(meaning, equal, "type", "operation")
	console.log(`operations\n`, operations)

	console.log(`operation\n ${operation_description}\n`, operation)

	//const operands = extract(filter(meaning, equal, "type", "operand"), "meaning")

	//console.log("operands\n", operands)

	//let words = symbols_to_words(meaning, "datatype", "number", equal, "symbol")
	
	let words =	symbols_to_words({array: meaning, 
									property: "datatype",
									strict_value: "number",
									or_values: ["number", 
									"expression"], 
									strict_predicate: equal, 
									or_predicate: exist_true_in_array, 
									field:"symbol"})
	console.log("words", words)

	let computed = operation(...words)
	console.log("result", operation)

	let result = {
		meaning,
		operation,
		operation_description,
		words,
		computed
	}

	return result

}