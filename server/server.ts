import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as mongoDb from 'mongodb';

dotenv.config();

async function main() {
  const MongoClient = mongoDb.MongoClient;
  const client = new MongoClient(
    `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER_NAME}.jy2zpck.mongodb.net/?retryWrites=true&w=majority`,
  );
  await client.connect();
  const db = client.db('amazon');

  const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  app.listen(process.env.PORT, () => {
    console.log('listening on 1116');
  });

  app.get('/recommend', async (req, res) => {
    const collection = db.collection('recommend-product');
    const result = await collection.find().toArray();
    res.json(result);
  });

  app.get('/search', async (req, res) => {
    const query = req.query.q;
    // mongodb에서 관련 단어 찾기
    const collection = db.collection('product');
    const result = await collection
      .find({ keywords: { $regex: `${query}`, $options: 'i' } })
      .toArray();
    if (result.length === 0) {
      res.json([{ keywords: '해당하는 상품이 없습니다.' }]);
    } else {
      res.json(result);
    }
  });
}

main();
