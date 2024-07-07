import Dexie from "dexie";

// Create database and playlist store/collection
const db = new Dexie("https://github.com/Jhon-mark23/PH/blob/main/PH%20LINK%201");
db.version(1).stores({
  playlists: "++id,&name,data",
});

export default db;
