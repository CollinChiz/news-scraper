var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;