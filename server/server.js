const express = require('express');
const multer = require('multer');
const path = require('path');
const uploadController = require('./controllers/uploadController');
const dbConfig = require('./config/dbConfig');
const setupDatabase = require('./config/dbSetup'); // קוראים לקובץ שמבצע את יצירת המסד והטבלאות
const cors = require('cors');
const app = express();
const dataController = require('./controllers/dataController');


const port = 8000;
// הפעל את CORS לכל הבקשות
app.use(cors());
// הפעלת יצירת מסד נתונים והטבלאות
setupDatabase();



// הגדרת מחסן קבצים להעלאת CSV
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads')); // מיקום ההעלאה
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // שם קובץ ייחודי
    }
});

const upload = multer({ storage: storage });

// טיפול בבקשה לנתיב השורש
app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});



// הגדרת מסלול להעלאת קובץ
app.post('/upload', upload.single('csvfile'), uploadController.handleFileUpload);
app.get('/data', dataController.getData );


// טיפול בנתיבים שאינם מוגדרים
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

// הפעלת השרת
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
