import SQLite from 'react-native-sqlite-storage'; 

/**
 * Abstraction used for access to SQLite database
 */
class SqliteInterface {

  /**
   * Creates a database object used to access SQLite database
   * @returns db
   */
  createDB() {
    const db = SQLite.openDatabase(
      { name: 'MainDB', location: 'default', },
      () => { console.log("SQLite createDB: succesfully opened database") },
      (error) => { console.log(error) }
    );
    
    return db;
  }

  /**
   * Creates a prize history table
   * @param db SQLite database object
   * @param {string} tableName The name of the table that will be created
   * @return logs whether the function was successful or not 
   */
  createPrizeHistoryTable(db, tableName) {
    db.transaction((tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS ${tableName} (ID INTEGER PRIMARY KEY AUTOINCREMENT, Type TEXT, PrizeID TEXT);`,
          [],
          (tx, res) => {console.log(`SQLite createPrizeHistoryTable: table ${tableName} created successfully`)},
          error => (console.log(`SQLite createPrizeHistoryTable: failed to create ${tableName}: ` + error))
        )
      })
  }

  /**
   * Adds a prize to the prize history table
   * @param db SQLite database object
   * @param {string} tableName The name of the table that will be created
   * @param {string} prizeType The prize type of the prize (e.g. '$20 gift card')
   * @param {string} prizeID The special ID used to redeem your prize (should be a very long string)
   * @return logs whether the function was successful or not 
   */
  addToPrizeHistoryTable(db, tableName, prizeType, prizeID) {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO ${tableName} (Type, PrizeID) VALUES (?,?);`, 
          [prizeType, prizeID],
          (tx, res) => {console.log(`SQLite addToPrizeHistoryTable: prize '${prizeType}' '${prizeID}' added successfully`)},
          error => (console.log(`SQLite addToPrizeHistoryTable: failed to add '${prizeType}' '${prizeID}' to ${tableName}: ` + error))
        );
      }); 
  }

  /**
   * Gets the list of all prizes from the table.
   * The list should never be exceedingly long since the chances of winning are slim.
   * @param db SQLite database object
   * @param {string} tableName The name of the table that will be created
   * @param {string} setHook The hook used to set the retrieved data (This is how we return the data)
   * @return returns the retrieved data via the setHook hook
   * @return logs whether the function was successful or not 
   */
  getAllPrizes(db, tableName, setHook) {
     db.transaction((tx) => {
        tx.executeSql(
          `SELECT * FROM ${tableName};`, 
          [],
          (tx, res) => {
            let len = res.rows.length;

            if(len > 0) {
              let results = [];  
              for(i = 0; i < res.rows.length; i++) {
                results.push(res.rows.item(i));
              }
              setHook(JSON.stringify(results));
            } 
            console.log(`SQLite getAllPrizes: retrieved '*' from ${tableName} successfully`)
          },
          error =>  (console.log(`SQLite getAllPrizes: failed to get '*' from ${tableName}: ` + error))
        );
      }); 
  }

  /**
   * Gets the list of all prizes of a given prizeType (e.g. '$20 gift card')
   * @param db SQLite database object
   * @param {string} tableName The name of the table that will be created
   * @param {string} prizeType The prize type of the prize (e.g. '$20 gift card')
   * @param {string} setHook The hook used to set the retrieved data (This is how we return the data)
   * @return returns the retrieved data via the setHook hook
   * @return logs whether the function was successful or not 
   */
  getPrizeByType(db, tableName, prizeType, setHook) {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${tableName} WHERE Type=${prizeType};`, 
        [],
        (tx, res) => {
          let len = res.rows.length;

          if(len > 0) {
            let results = [];  
            for(i = 0; i < res.rows.length; i++) {
              results.push(res.rows.item(i));
            }
            setHook(JSON.stringify(results));
          } 
          console.log(`SQLite getPrizeByType: retrieved '*' from ${tableName} where Type=${prizeType} successfully`)
        },
        error =>  (console.log(`SQLite getPrizeByType: failed to get '*' from ${tableName} where Type=${prizeType}: ` + error))
      );
    }); 
  }

  /**
   * Gets the single unique prize given a unique prizeID.
   * @param db SQLite database object
   * @param {string} tableName The name of the table that will be created
   * @param {string} prizeID The special ID used to redeem your prize (should be a very long string)
   * @param {string} setHook The hook used to set the retrieved data (This is how we return the data)
   * @return returns the retrieved data via the setHook hook
   * @return logs whether the function was successful or not 
   */
  getPrizeByID(db, tableName, prizeID, setHook) {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${tableName} WHERE prizeID=${prizeID};`, 
        [],
        (tx, res) => {
          let len = res.rows.length;

          if(len > 0) {
            let results = [];  
            for(i = 0; i < res.rows.length; i++) {
              results.push(res.rows.item(i));
            }
            setHook(JSON.stringify(results));
          } 
          console.log(`SQLite getPrizeByID: retrieved '*' from ${tableName} where prizeID=${prizeID} successfully`)
        },
        error =>  (console.log(`SQLite getPrizeByID: failed to get '*' from ${tableName} where prizeID=${prizeID}: ` + error))
      );
    }); 
  }

  /**
   * deletes a given table (should only be used for testing)
   * @param db SQLite database object
   * @param {string} tableName The name of the table that will be created
   * @return logs whether the function was successful or not 
   * @importantNote COMMENT OUT IN PRODUCTION
   */
  deleteTable(db, tableName) {
    db.transaction((tx) => {
      tx.executeSql(
        `DROP TABLE IF EXISTS ${tableName};`,
        [],
        (tx, res) => {console.log(`SQLite deleteTable: table ${tableName} dropped successfully`)},
        error => (console.log(`SQLite deleteTable: failed to drop ${tableName}: ` + error))
      )
    })
  }

}

export default SqliteInterface;
