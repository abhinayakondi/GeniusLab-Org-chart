const express = require("express");
const cors = require("cors");
const ExcelJS = require("exceljs");

const app = express();
app.use(cors());

async function readExcel() {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("./employees.xlsx");

  const sheet = workbook.getWorksheet(1);

  const employees = [];

  sheet.eachRow((row, rowNumber) => {
    // Skip header row
    if (rowNumber === 1) return;

    const id = row.getCell(1).value;
    const parentId = row.getCell(2).value || null;
    const firstName = row.getCell(3).value;
    const lastName = row.getCell(4).value;
    const department = row.getCell(5).value;
    const title = row.getCell(6).value;

    employees.push({
      id: String(id),
      parentId: parentId ? String(parentId) : null,
      name: `${firstName} ${lastName}`,
      firstName: firstName,
      lastName: lastName,
      department: department,
      title: title
    });
  });

  return employees;
}

app.get("/api/employees", async (req, res) => {
  try {
    const employees = await readExcel();
    res.json(employees);
  } catch (error) {
    console.error("Error reading Excel:", error);
    res.status(500).json({ error: "Failed to read Excel file" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});