const sql = require('mssql');

const config = {
    user: process.env.DB_USER,        // משתמש - tabula
    password: process.env.DB_PASSWORD,  // סיסמה למשתמש tabula
    server: process.env.DB_HOST,   
    database: process.env.DB_NAME,    // שם מסד הנתונים
    port: 1433,
    options: {
        encrypt: false, // אם אתה מחובר על חיבור מאובטח
        trustServerCertificate: true // אם יש בעיה עם תעודת השרת
    }
};


// // פונקציה שמתחברת למסד נתונים ובודקת אם טבלה קיימת
// async function checkAndInsertData() {
//     try {
//         // חיבור למסד הנתונים
//         await sql.connect(config);
//         console.log('Connected to the database');

//         // בודק אם הטבלה קיימת
//         const result = await sql.query(`
//             IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Terms')
//             BEGIN
//                 CREATE TABLE YourTableName (
//                     ID INT PRIMARY KEY,
//                     Name NVARCHAR(100)
//                 );
//                 INSERT INTO YourTableName (ID, Name) VALUES (1, 'Test Name');
//             END
//         `);

//         console.log('Operation completed successfully');
//     } catch (err) {
//         console.error('Error connecting to the database:', err);
//     } finally {
//         await sql.close();
//     }
// }

//checkAndInsertData();

console.log("in config");

module.exports = config;
