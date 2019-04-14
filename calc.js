#!/usr/bin/env node
const parsers = require('./parsers');
const operations = require('./operations');

if (process.argv[2] === '--help') {
    console.log(`you can specify the parser using: 
    --parserName or parserName  where parserName [flag | simple]`);
    return;
}
const userSelectedParser = 'selectedParser';
const parser = parsers[userSelectedParser] ;
const {operation , oprands } = parser(process.argv);
const mathmaticOperation = operations[operation];
const result = mathmaticOperation(...oprands)

console.log(result);
