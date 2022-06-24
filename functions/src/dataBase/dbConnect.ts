import { getDatabase, connectDatabaseEmulator } from "firebase/database";

const db = getDatabase()

if (location.hostname === "localhost") {
    // Point to the RTDB emulator running on localhost.
    connectDatabaseEmulator(db, "localhost", 9000);
} 

export const getDB = () => {
    return db
}