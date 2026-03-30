const express = require("express");
const cors = require("cors");
const ExcelJS = require("exceljs");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const app = express();
app.use(cors());

async function parseExcelData(source) {
  const workbook = new ExcelJS.Workbook();
  if (typeof source === "string") {
    await workbook.xlsx.readFile(source); // For the local file
  } 
  else {
    await workbook.xlsx.load(source); // For the uploaded buffer
  }

  const sheet = workbook.worksheets[0];

  // Get header row
  const headerRow = sheet.getRow(1);
  const headers = headerRow.values.map(h =>
    typeof h === "string" ? h.toLowerCase().trim() : h
  );

  const employees = [];
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return; // skip header
    const obj = {};
    headers.forEach((header, index) => {
      if (!header) return;
      obj[header] = row.getCell(index).value;
    });

    employees.push({
      id: String(obj.id),
      parentId: obj.parentid ? String(obj.parentid) : null,
      firstName: obj.first_name,
      lastName: obj.last_name,
      department: obj.department_name,
      title: obj.title,
      name: `${obj.first_name} ${obj.last_name}`
    });
  });

  return employees;
}

app.get("/api/employees", async (req, res) => {
  try {
    const employees = await parseExcelData("./employees.xlsx"); 
    res.json(employees);
  } 
  catch (error) {
    console.error("Error reading default Excel:", error);
    res.status(500).json({ error: "Failed to read default file" });
  }
});

app.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send("No file uploaded.");
    
    const employees = await parseExcelData(req.file.buffer);
    res.json(employees);
  } 
  catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Failed to process file" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});