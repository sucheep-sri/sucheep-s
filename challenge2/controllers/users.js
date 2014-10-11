var mongoose = require('mongoose');
var Users = require('../models/users');

exports.index = function(req, res){
  var email = req.params.email;
  Users.find({}, function(err, data){
    if(err)
      {
      console.log(err);
      }
      else
        {
        res.render('users/users', {title : 'show users',  users : data});
        console.log(data);
        }
  });
};

exports.show = function(req, res){
  var email = req.params.email;
  Users.find({email : email}, function(err, data){
    if(err)
      {
      console.log(err);
      }
      else
        {
        res.render('users/show', {title : 'show users',  users : data, email : email});
        console.log(data);
        }
  });
};

exports.new = function(req, res)
{
	res.render('users/add', {title : 'Add User'});
};
exports.create = function(req, res){
  var users = {
        email : req.body.email,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        phone : req.body.phone
      };
  var usersObj = new Users(users);
  usersObj.save(function(err){
    if(err) {console.log(err);}
      else {
        res.render('users/added', {title : 'User added', users : usersObj});
      }
  })
}

exports.edit = function(req, res){
  var email = req.params.email;
  Users.findOne({email : email}, function(err, data){
    if(err) {res.send('There is no this user' + email);}
      else {
        res.render('users/edit', {title : 'Edit user', email : data.email, firstname:data.firstname, lastname : data.lastname, phone : data.phone});
      console.log(data);
      }
  });
}

exports.update = function(req, res){
  var email = req.params.email;
  var users = {
    email : req.body.email,
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    phone : req.body.phone
  }
  Users.update({email : email}, users, function(err){
      if(err) {console.log(err);}
        else {
          res.render('users/added', {title : 'User edited', users : JSON.stringify(users)});
        }
  });
}
