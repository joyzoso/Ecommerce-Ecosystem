
 //create user route

 let ObjectID = require('mongodb').ObjectID;

 module.exports = function(app, db) {

//READ

   app.get('/users/:id', (req, res) => {
     const id = req.params.id;
     const details = { '_id': new ObjectID(id) };
     db.collection('users').findOne(details, (err, item) => {
       if (err) {
         res.send({ 'error': 'error dummy' });
       } else {
         res.send(item + ' Status 200 OK');
        }
      });
    });

//CREATE

   app.post('/users', (req, res) => {
     //create user here
     const user = { firstName: req.body.firstName, lastName: req.body.lastName };
     console.log(req.body);
     db.collection('users').insert(user, (err, result) => {
       if (err) {
         res.send({ 'error': 'error dummy' });
       } else {
         res.send(result.ops[0]);
       }
     });
     console.log(req.body.firstName)
    //  res.send('howdy')
   });


   //UPDATE

       app.put('/users/:id', (req, res) => {
          const id = req.params.id;
          const details = { '_id': new ObjectID(id) };
          const user = { firstName: req.body.firstName, lastName: req.body.lastName };
          db.collection('users').update(details, user, (err, result) => {
            if (err) {
                res.send({'error':'Error has occurred'});
            } else {
                res.send(req.body.firstName + " Status 200OK User updated");
            }
          });
          console.log(user);
        });


//DELETE

    app.delete('/users/:id', (req, res) => {
      const id = req.params.id;
      const details = { '_id': new ObjectID(id) };
      db.collection('users').remove(details, (err, item) => {
        if (err) {
          res.send({'error': 'Error has occured'});
        } else {
          res.send('User ' + id + ' has been deleted');
        }
      });
    });


 };
