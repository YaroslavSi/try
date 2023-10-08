function searchUniversities() {
    const country = document.getElementById("country").value;
    const apiUrl = `http://universities.hipolabs.com/search?country=${country}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "";

            if (data.length === 0) {
                resultDiv.innerHTML = "Університети не знайдені";
            } else {
                const table = document.createElement("table");
                const thead = table.createTHead();
                const row = thead.insertRow();
                row.innerHTML = "<th>#</th><th>Назва університету</th><th>Сайт</th><th>Країна</th>";

                const tbody = table.createTBody();
                data.forEach((university, index) => {
                    const newRow = tbody.insertRow();
                    newRow.innerHTML = `<td>${index + 1}</td><td>${university.name}</td><td><a href="${university.web_pages[0]}">${university.web_pages[0]}</a></td><td>${university.country}</td>`;
                });

                resultDiv.appendChild(table);
            }
        })
        .catch(error => {
            console.error("Помилка при запиту до API:", error);
        });
}

function resetForm() {
    document.getElementById("country").value = "";
    document.getElementById("result").innerHTML = "";
}