// const MongoClient = require('mongodb').MongoClient;
// same but user ES6 object destructuring:
const { MongoClient, ObjectID } = require('mongodb');


// MongoDB module v2:
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(\n---------\n',result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(\n---------\n',result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log('\n---------\n',result);
    // });

    db.collection('Users').deleteMany({name: 'Regis Zaleman'}).then((result) => {
        console.log('\n----------\n', result);
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5bd1cb422a8a1e858c8d5cc6")})
        .then((result) => {
            console.log('\n----------\n', result);
        });



    // db.close();
});

// MongoDB module v3:
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//     if (err) {
//         return console.log('Unable to connect to MongoDB server');
//     }
//     console.log('Connected to MongoDB server.');
//     const db = client.db('TodoApp');

//     db.collection('Todos').insertOne({
//         text: 'Something to do',
//         completed: false
//     }, (err, result) => {
//         if (err) {
//             return console.log('Unable to insert todo', err);
//         }
//         console.log(JSON.stringify(result.ops, undefined, 2));
//     });
//     client.close();
// });
