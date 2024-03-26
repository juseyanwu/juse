const mongoose = require("mongoose")
const config = require('./config.js')
// 消除严格模式
mongoose.set("strictQuery", true)
 
 
mongoose.connect("mongodb://127.0.0.1/interview")
 
const conn = mongoose.connection
 
conn.on("open", () => {
    console.log("ok");
})
 
conn.on("error", (err) => {
    console.log(err);
})
 
// 抛出
module.exports = mongoose