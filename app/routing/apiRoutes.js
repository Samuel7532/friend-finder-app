module.exports = function(app){



app.post("/api/friends", function(req, res){
console.log("body", req.body);
});
};