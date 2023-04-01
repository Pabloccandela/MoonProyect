module.exports = {
  "development": {
    "username": process.env.DB_USER || "root",
    "password": process.env.DB_PASSWORD || "SJTEsJPVB1OT1w7hoZvG",
    "database": process.env.DB_NAME || "railway",
    "host": process.env.DB_HOST || "containers-us-west-123.railway.app",
    "dialect": "mysql"
    // "username": "moondb",
    // "password": "HUG@7Wv8UKj6vGU",
    // "database": "moondb_shoes",
    // "host": "mysql-moondb.alwaysdata.net",
    // "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "SJTEsJPVB1OT1w7hoZvG",
    "database": "railway",
    "host": "containers-us-west-123.railway.app",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "SJTEsJPVB1OT1w7hoZvG",
    "database": "railway",
    "host": "containers-us-west-123.railway.app",
    "dialect": "mysql"
  }
}
