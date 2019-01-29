import { generateFirebaseData } from "generate-firebase-data";
import firebase from "firebase-admin";
(async () => {
    const databaseURL = "https://goods-204a7.firebaseio.com/goods.json";
    const credential = require("./firebase-key.json");
    const { schema, count, keyReducers } = require("./schema");
    await generateFirebaseData(
      {
        schema,
        count,
        keyReducers
      },
      {
        firebase,
        credential,
        databaseURL
      }
    );
  })();

  export default firebase