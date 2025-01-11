const fs = require('fs');
const csvParser = require('csv-parser');
const validateAndStore = require('../services/dataService');

exports.handleFileUpload = (req, res) => {
    const results = [];
    const filePath = req.file.path;

    console.log("Uploading file:", filePath);  // לוג לזיהוי הקובץ

    // קריאת הקובץ ללא כותרות, כל שורה תהיה אובייקט עם ערכים
    fs.createReadStream(filePath, { encoding: 'utf-8' })
        .pipe(csvParser({ headers: false }))  // לא מתייחסים לשורה הראשונה ככותרת
        .on('data', (data) => {
            console.log("CSV Data Row:", data);  // לוג של כל שורה שקוראים
            // אם כל שורה היא אובייקט, לוקחים את כל הערכים ומאחדים אותם במערך חד-ממדי
            Object.values(data).forEach(value => {
                console.log("Value from row:", value);  // לוג של כל ערך מהשורה
                results.push(value);
            });
        })
        .on('end', () => {
            console.log("CSV parsing finished. Results:", results);  // לוג בסיום הקריאה
            validateAndStore(results, res);
        })
        .on('error', (err) => {
            console.error("Error parsing CSV file:", err);  // לוג של שגיאה במקרה של בעיה
            return res.status(500).send("Error parsing CSV file");
        });
};
