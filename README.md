# GeniusLab Org-Chart

A dynamic, full-stack data visualization platform that transforms complex organizational hierarchies from static spreadsheets into interactive, searchable, and exportable organizational charts.

## 🚀 Purpose
In many enterprise environments, organizational data remains trapped in flat Excel files, making it difficult to visualize reporting lines or departmental structures. **GeniusLab Org-Chart** bridges this gap by providing a seamless interface to ingest, process, and render hierarchical data. 

Built with a focus on performance and user experience, this tool allows HR professionals and team leads to navigate large organizations, search for specific team members, and generate high-quality PDF reports of the structure.

---

## 🛠️ Technical Stack

* **Frontend:** React, D3.js (via `d3-org-chart`) for high-performance SVG rendering.
* **Backend:** Node.js, Express.js.
* **Data Processing:** ExcelJS for server-side parsing of `.xlsx` files.
* **Styling:** Custom CSS with a focus on clean, modern UI and intuitive navigation.

---

## ✨ Key Features

* **Automated Hierarchy Logic:** Automatically converts flat Excel rows (ID/ParentID) into a nested JSON tree structure.
* **Interactive Visualization:** Smooth zooming, panning, and collapsing/expanding of organizational branches.
* **Search & Locate:** Integrated search functionality to instantly find and center on specific employees.
* **PDF Export:** Client-side PDF generation to share specific views of the organizational chart.
* **Custom UI Components:** Tailored node designs featuring employee roles and unique departmental icons.

---

## ⚙️ Installation & Setup

### Prerequisites
* Node.js (v14 or higher)
* npm or yarn

### 1. Clone the Repository
```bash
git clone [https://github.com/abhinayakondi/GeniusLab-Org-chart.git](https://github.com/abhinayakondi/GeniusLab-Org-chart.git)
cd GeniusLab-Org-chart