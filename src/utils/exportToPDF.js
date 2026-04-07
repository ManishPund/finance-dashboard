import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportTransactionsToPDF = (transactions) => {
  if (!transactions || transactions.length === 0) {
    alert("No transactions to export");
    return;
  }

  const doc = new jsPDF();

  // Title
  doc.setFontSize(16);
  doc.text("Transaction Report", 14, 15);

  // Date
  doc.setFontSize(10);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 25);

  // Table data
  const tableData = transactions.map((t) => [
    t.date,
    t.category,
    t.amount.toLocaleString(),
    t.type.charAt(0).toUpperCase() + t.type.slice(1),
  ]);

  // Create table
  autoTable(doc, {
    startY: 35,
    head: [["Date", "Category", "Amount", "Type"]],
    body: tableData,
    styles: {
      fontSize: 10,
      cellPadding: 3,
    },
    headStyles: {
      backgroundColor: [79, 70, 229], // indigo-600
      textColor: [255, 255, 255],
      fontStyle: "bold",
    },
    alternateRowStyles: {
      backgroundColor: [245, 245, 255],
    },
    margin: { top: 35 },
  });

  // Summary
  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const finalY = doc.lastAutoTable.finalY + 10;

  doc.setFontSize(11);
  doc.setFont(undefined, "bold");
  doc.text(`Total Income: ${totalIncome.toLocaleString()}`, 14, finalY);
  doc.text(`Total Expense: ${totalExpense.toLocaleString()}`, 14, finalY + 7);
  doc.text(
    `Net Savings: ${(totalIncome - totalExpense).toLocaleString()}`,
    14,
    finalY + 14,
  );

  // Save PDF
  doc.save("transactions.pdf");
};
