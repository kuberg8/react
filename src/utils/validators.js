export function required(value) {
	if(value) {
		return undefined
	} else {
		return 'error message'		
	}	
}



export const maxLengthCreator = (maxLength) => (value) => {
	if(value.length > maxLength) {
		return `Max length is ${maxLength} symbols`
	} else {
		return undefined		
	}	
}