if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://italopinheiro:pinheiro97@blog-app.jb5ys.mongodb.net/test"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}