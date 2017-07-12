module.exports = function(app, db) {
 //create user route
 app.post('/users', (req, res) => {
   //create user here
   const user = { firstName: req.body.firstName, lastName: req.body.lastName };
   db.collection('users').insert(user, (err, result) => {
     if (err) {
       res.send({ 'error': 'error dummy' });
     } else {
       res.send(result.ops[0]);
     }
   });
   console.log(req.body)
   res.send('howdy')
 });
};
