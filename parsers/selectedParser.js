const removeDashes = (stringInput) => stringInput.includes('--')?stringInput.substring(2):stringInput;
module.exports = (argv)=>{
    const params = argv.slice(2);
    const stringInput = params.find(e => isNaN(e));
    const operation = removeDashes(stringInput);
    const oprands = params
    .filter(e => !isNaN(e))
    .map(Number)
return({
    operation,
    oprands,
})
}