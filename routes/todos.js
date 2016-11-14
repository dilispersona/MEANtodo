var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://dileep:dileep@ds037837.mlab.com:37837/todoapp',['todos']);

// Get All Todos
router.get('/todos', function(req, res, next){
    db.todos.find(function(err, todos){
        if(err){
           res.send(err); 
        } else {
            res.json(todos);
        }
    });
});


module.exports = router;