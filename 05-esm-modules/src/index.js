// //import connectToDatabase from "./utils/database.js";

// import * as database from "./utils/database.js";

// database.connectToDatabase("my-database");
// database.disconnectDatabase();

// //connectToDatabase("my-database");

import { disconnectDatabase, databaseType  } from "./utils/database";

import{getDataFromApi} from '.utils/api.js'

getDataFromApi();
//connectToDatabase("my-database");
disconnectDatabase();