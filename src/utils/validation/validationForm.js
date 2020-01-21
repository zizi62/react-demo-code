export const required = (value) => {
    if(value)return undefined;
    return 'Required';
}

export const maxLength =(maxSymbols)=> (value) => {
    if(value&&value.length > maxSymbols){
        return `Must be ${maxSymbols} characters or less`;
    }return undefined;
}

export const emailValidate = (value) => {
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return 'Invalid email address'
}


export const numberlValidate = (value) => {
    if(isNaN(Number(value))) return `Must be a number`
}

export const zipcodeValidate =(value) => {
    if(value.length !== 5)return `Must be 5 numbers`;   
}