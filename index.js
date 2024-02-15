
// package for dates
const dates = require("date-fns")
// package for generating random uinque id
const { v4: uuid } = require('uuid');

console.log(dates.format(new Date(), "yyyy-MM-dd"))

console.log(uuid())
