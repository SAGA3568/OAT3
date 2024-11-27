
const records = JSON.parse(localStorage.getItem("records")) || [];


const updateTable = () => {
  const tbody = document.getElementById("recordTableBody");
  tbody.innerHTML = ""; 
  records.forEach((record, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteRecord(${index})">Excluir</button>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
};


document.getElementById("recordForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  records.push({ name, email });
  localStorage.setItem("records", JSON.stringify(records));
  updateTable();

  e.target.reset(); 
});


const deleteRecord = (index) => {
  records.splice(index, 1);
  localStorage.setItem("records", JSON.stringify(records));
  updateTable();
};


updateTable();
