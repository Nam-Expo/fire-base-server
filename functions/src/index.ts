import * as functions from "firebase-functions";
import { initializeApp } from "firebase-admin";
initializeApp()

import { clearDb } from "./dataBase/inserts";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const createUser = functions.https.onRequest((request: functions.https.Request, response: functions.Response<any>) => {
    functions.logger.info("created user", {structuredData: true});
    clearDb()
    response.send("Hello from Firebase!");
})