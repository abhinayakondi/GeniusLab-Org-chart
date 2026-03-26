import Button from '@mui/material/Button';
import PDFicon from '../assets/file-pdf-svgrepo-com.svg?react';
import jsPDF from 'jspdf';

export default function ExportIconButton({ chartInstance }) {

  const handleExport = () => {
    if (!chartInstance) return;

    chartInstance.exportImg({
      save: false, 
      full: true, 
      onLoad: (base64) => {
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "px",
          format: "a4"
        });
        const pdfWidth = pdf.internal.pageSize.getWidth();
        pdf.addImage(
          base64, 
          'PNG', 
          10, 
          10, 
          pdfWidth - 20, 
          0 // Auto-calculate height to maintain aspect ratio
        );
        pdf.save('org-chart.pdf');
      },
    });
  };
  return (
    <Button 
      onClick={handleExport}
      variant="outlined" 
      fullWidth
      startIcon={<PDFicon style={{ width: 20, height: 20 }} />}
      sx={{
        textTransform: 'none', 
        fontFamily: 'Inter',   
        borderRadius: 0,       
        color: '#000',
        border: 'none',
        '&:hover': {
          backgroundColor: '#e6e6e691',
        },
      }}
    >
      Export PDF
    </Button>
  );
}
