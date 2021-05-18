import {MongoClient, ObjectID} from 'mongodb';

const dbURL = 'mongodb://127.0.0.1:27017';
const dbName = 'notes-app';

interface NoteInterface {
  title: string,
  body: string,
  color: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
}

MongoClient.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((client) => {
  const db = client.db(dbName);

  return db.collection<NoteInterface>('notes').findOne({
    _id: new ObjectID('60a3e6eaea46fc1b72fa2641'),
  });
}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});

