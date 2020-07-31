/*
Таблица соответствий символов и их смысла
*/


let symbols_table = [
	
	{
		symbol: ' ',
		meaning: 'space',
		type: 'separator',
		datatype: 'syntax'
	},
	{
		symbol: '+',
		meaning: function() {  
					let  result = 0
  					for (let i = 0; i < arguments.length; i++) {
  						
  						result += Number(arguments[i])
  					}
					return result
				},
		type: 'operation',
		datatype: 'expression'
	},
	{
		symbol: '*',
		meaning: function() {  
					let  result = 1
  					for (let i = 0; i < arguments.length; i++) {

  						result *= Number(arguments[i])
  					}
					return result
				},
		type: 'operation',
		datatype: 'expression'
	},	
	{
		symbol: '0',
		meaning: 0,
		type: 'operand',
		datatype: 'number'
	},
	{
		symbol: '1',
		meaning: 1,
		type: 'operand',
		datatype: 'number'
	},
	{
		symbol: '2',
		meaning: 2,
		type: 'operand',
		datatype: 'number'
	},
	{
		symbol: '3',
		meaning: 3,
		type: 'operand',
		datatype: 'number'
	},
	{
		symbol: '4',
		meaning: 4,
		type: 'operand',
		datatype: 'number'
	},
	{
		symbol: '5',
		meaning: 5,
		type: 'operand',
		datatype: 'number'
	},
	{
		symbol: '6',
		meaning: 6,
		type: 'operand',
		datatype: 'number'
	},
	{
		symbol: '7',
		meaning: 7,
		type: 'operand',
		datatype: 'number'
	},
	{
		symbol: '8',
		meaning: 8,
		type: 'operand',
		datatype: 'number'
	},
	{
		symbol: '9',
		meaning: 9,
		type: 'operand',
		datatype: 'number'
	},	

]