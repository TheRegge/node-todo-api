// const MongoClient = require('mongodb').MongoClient;
// same but user ES6 object destructuring:
const { MongoClient, ObjectID } = require('mongodb');


// MongoDB module v2:
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5bd1d5c715d3d1ed733b891c")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //         returnOriginal: false // so it returns the updated data
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5bd1ca502e342c857cc5d8a8")
    }, {
        $set: {
            name: 'Regis'
        },
        $inc: {
            age: 1
        }
    }, {
            returnOriginal: false // so it returns the updated data
    }).then((result) => {
        console.log(result);
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
