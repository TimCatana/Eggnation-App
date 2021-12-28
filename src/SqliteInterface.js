import React from 'react';
import SQLite from 'react-native-sqlite-storage'; 

const db = SQLite.openDatabase(
  { name: 'MainDB', location: 'default', },
  () => { console.log("succesfully opened database") },
  (error) => { console.log(error) }
);


export default class SqliteInterface {

  
  createDB() {
    const db = SQLite.openDatabase(
      { name: 'MainDB', location: 'default', },
      () => { console.log("succesfully opened database") },
      (error) => { console.log(error) }
    );
    
    return db;
  }

  createPrizeHistoryTable(db, tableName) {
    db.transaction((tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS ${tableName} (ID INTEGER PRIMARY KEY AUTOINCREMENT, Type TEXT, PrizeID TEXT);`,
          [],
          (tx, res) => {console.log(`table ${tableName} created successfully`)},
          error => (console.log(`failed to create ${tableName}: ` + error))
        )
      })
  }

  addToPrizeHistoryTable(db, tableName, prizeType, prizeID) {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO ${tableName} (Type, PrizeID) VALUES (?,?);`, 
          [prizeType, prizeID],
          (tx, res) => {console.log(`prize '${prizeType}' '${prizeID}' added successfully`)},
          error => (console.log(`failed to add '${prizeType}' '${prizeID}' to ${tableName}: ` + error))
        );
      }); 
  }

  getAllPrizes(db, tableName, setRetrieved) {
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
              setRetrieved(JSON.stringify(results));
            } 
            console.log(`retrieved '*' from ${tableName} successfully`)
          },
          error =>  (console.log(`failed to get '*' from ${tableName}: ` + error))
        );
      }); 
  }

  getPrizeByType(db, tableName, prizeType) {
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
            setRetrieved(JSON.stringify(results));
          } 
          console.log(`retrieved '*' from ${tableName} where Type=${prizeType} successfully`)
        },
        error =>  (console.log(`failed to get '*' from ${tableName} where Type=${prizeType}: ` + error))
      );
    }); 
  }

  getPrizeByID(db, tableName, prizeID) {
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
            setRetrieved(JSON.stringify(results));
          } 
          console.log(`retrieved '*' from ${tableName} where prizeID=${prizeID} successfully`)
        },
        error =>  (console.log(`failed to get '*' from ${tableName} where prizeID=${prizeID}: ` + error))
      );
    }); 
  }

  deleteTable(db, tableName) {
    db.transaction((tx) => {
      tx.executeSql(
        `DROP TABLE IF EXISTS ${tableName};`,
        [],
        (tx, res) => {console.log(`table ${tableName} dropped successfully`)},
        error => (console.log(`failed to drop ${tableName}: ` + error))
      )
    })
  }

}

