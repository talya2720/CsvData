const sql = require('mssql');
const dbConfig = require('../config/dbConfig');



// GET - שליפת כל הנתונים מהטבלה
exports.getData = async (req, res) => {
    try {
        console.log("get start");
        
        await sql.connect(dbConfig);
        const result = await sql.query`SELECT * FROM Terms`;  // שליפה של כל הפריטים מהטבלה Terms
        console.log("get",result);
        
        return res.json(result.recordset);  // שליחה חזרה לקליינט בפורמט JSON
    } catch (err) {
        console.error('Error fetching data from DB:', err);
        return res.status(500).send('Error fetching data');
    }
};


