
window.onload = function(){

//let expression = document.getElementById("input-text").value

document.getElementById('check-btn').addEventListener('click', function(){
    let text = document.getElementById("input-text").value
	
	const result = understand(text)
	console.log(result)

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
	// console.log("result", result)
    


    document.getElementById('output').innerHTML = result.computed


    
     document.getElementById('operation-description').innerHTML = JSON.stringify(result.operation_description)
     document.getElementById('words').innerHTML = JSON.stringify(result.words)
     document.getElementById('meaning').innerHTML = JSON.stringify(result.meaning)
})




}