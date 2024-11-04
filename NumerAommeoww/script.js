// ใช้ Fetch API เพื่อดึงข้อมูลจากไฟล์ data.json
fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // หา element ที่จะแสดงข้อมูล
        const userInfoDiv = document.getElementById('user-info');
        
        // แสดงข้อมูล JSON ที่ดึงมาใน HTML
        userInfoDiv.innerHTML = `
            <p>Name: ${data.name}</p>
            <p>Age: ${data.age}</p>
            <p>Email: ${data.email}</p>
        `;
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
