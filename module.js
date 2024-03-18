//Local
const john = "john"

//shared Export
const peter = "peter"


//This chooses what this module exports
module.exports = { peter }


//Export as You Go
module.exports.singlePerson = "Kehinde"

//This logs out the module object

//Every File by Default is a module
console.log(module)