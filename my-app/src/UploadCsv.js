import React, { useState } from 'react';
import axios from 'axios';

function UploadCsv() {
    const [csvFile, setCsvFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [data, setData] = useState([]);  // לשמור את הנתונים שמגיעים מהסרוור

    const handleFileChange = (e) => {
        setCsvFile(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        if (!csvFile) {
            alert("Please select a CSV file first!");
            return;
        }

        const formData = new FormData();
        formData.append('csvfile', csvFile);

        setUploading(true);  // מציג את מצב ההעלאה

        try {
            console.log("Uploading file to server...");
            const response = await axios.post('http://localhost:8000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log("File uploaded successfully:", response.data);
            alert('File uploaded successfully');
            loadServerData();
        } catch (err) {
            console.log("err:",err);
            
            console.error("Error uploading file:", err.response ? err.response.data : err.message);
            alert('Error uploading file');
        } finally {
           
            setUploading(false);  // מחזיר את המצב לאחר סיום ההעלאה
           
        }
    };
    // פונקציה שמביאה את הנתונים מהשרת אחרי העלאת הקובץ
    const loadServerData = async () => {
        try {
            console.log("Fetching data from server...");
            
            // שליחת בקשת GET לשרת
            const response = await axios.get('http://localhost:8000/data');
            
            // לאחר קבלת התשובה מהשרת, מעדכנים את הנתונים
            setData(response.data);  // עדכון state עם הנתונים שהתקבלו
            
            console.log("Fetched data:", response.data);  // הדפסת הנתונים שהתקבלו
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    return (
        <div>
            <h1>Upload CSV</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload} disabled={uploading}>
                {uploading ? 'Uploading...' : 'Upload'}
            </button>
           
             <h2>הנתונים</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>מס' מזהה</th>
                        <th>פריט</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.id}</td>
                            <td>{row.term}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UploadCsv;
