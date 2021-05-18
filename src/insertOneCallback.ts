import {MongoClient} from 'mongodb';

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
}, (error, client) => {
  if (error) {
    console.log(`Unable to connect to database: ${error.message}`);
  } else {
    const db = client.db(dbName);

    db.collection<NoteInterface>('notes').insertOne({
      title: 'Red note',
      body: 'This is a red note',
      color: 'red',
    }, (error, result) => {
      if (error) {
        console.log(error);
      } else if (result) {
        console.log(result.insertedCount);
      }
    });
  }
});
