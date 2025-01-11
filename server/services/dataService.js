// services/dataService.js

const sql = require('mssql');
const dbConfig = require('../config/dbConfig');

// פונקציה לאימות הנתונים והכנסתם למסד הנתונים
const validateAndStore = async (data, res) => {
    try {
        await sql.connect(dbConfig);

        for (const row of data) {
            console.log(" data:",  data);
            try {
                // בדוק אם הנתון קיים בעזרת COUNT
                const result = await sql.query`SELECT COUNT(*) AS count FROM Terms WHERE term = ${row}`;
                console.log("result:", result, row);
              
        
                if (result.recordset[0].count === 0) {
                    // אם לא קיים, הוסף את הנתון
                    await sql.query`INSERT INTO Terms (term) VALUES (${row})`;
                }
                else{
                    return  res.status(500).send('error: duplicate data');
                }
            } catch (error) {
                console.error('Error checking or inserting data:', error);
            }
        }
        
        return  res.status(200).send('Data uploaded successfully');
    } catch (err) {
        return  res.status(500).send('Error while processing CSV');
    }
};

module.exports = validateAndStore;
