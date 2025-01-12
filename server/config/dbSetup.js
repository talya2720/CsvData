// config/dbSetup.js

const sql = require('mssql');
const dbConfig = require('./dbConfig');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
// פונקציה לבדוק אם מסד הנתונים קיים ואם לא ליצור אותו
const setupDatabase = async () => {
  try {
    console.log("aaaa");
    // מתחברים למסד נתונים
    await sql.connect(dbConfig);
    console.log("bbb ", dbConfig.database);
    // בדוק אם מסד הנתונים קיים, אם לא - צור אותו
    const result = await sql.query`SELECT name FROM sys.databases WHERE name = '${dbConfig.database}'`;
    console.log("result ", result);
    
    // if (result.recordset.length === 0) {
    //     console.log("in if");
        
    //   await sql.query(`CREATE DATABASE ${dbConfig.database}`);
    //   console.log(`Database ${dbConfig.database} created.`);
    // } else {
    //   console.log(`Database ${dbConfig.database} already exists.`);
    // }
    // console.log("cccc");
    
    // בדוק אם הטבלה קיימת, אם לא - צור אותה
    await createTables();

  } catch (err) {
    console.error('Error setting up database:', err);
  }
};

// פונקציה לבדוק אם הטבלאות קיימות ואם לא - ליצור אותן
const createTables = async () => {
  try {
    // בודקים אם הטבלה קיימת, אם לא - יוצרים אותה
    const result = await sql.query`SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Terms'`;
    if (result.recordset.length === 0) {
      await sql.query(`
        CREATE TABLE Terms (
          id INT IDENTITY(1,1) PRIMARY KEY,
          term NVARCHAR(100) NOT NULL
        )
      `);
      console.log('Table "Terms" created.');
    } else {
      console.log('Table "Terms" already exists.');
    }
  } catch (err) {
    console.error('Error creating tables:', err);
  }
};

module.exports = setupDatabase;
