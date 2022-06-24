import { getDB } from "./dbConnect";
import { ref, set } from "firebase/database";

const db = getDB()

export const clearDb = () => {
    set(ref(db), null);
}

