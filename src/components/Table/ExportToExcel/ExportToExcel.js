import React from 'react'
import FileSaver from "file-saver";
import * as XLSX from "xlsx";
import axios from 'axios';
import PageTable from '../PageTable'



export const ExportToExcel = ({ apiData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".csv";

  const exportToCSV = (apiData, fileName) => {
    
    const ws = XLSX.utils.table_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "csv", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <button onClick={(e) => exportToCSV(apiData, fileName)}>Export <i class="fas fa-file-export"></i></button>
  );
};

export const ExportToExcelButton=()=>{
const [data, setData] = React.useState([]);
  const fileName = PageTable; // here enter filename for your excel file

  React.useEffect(() => {
    const fetchData = () =>{
     axios.get(fileName).then(r => setData(r.data) )
    }
    fetchData()
  }, [])

  return (
    <div className="ExportToExcelButton">
      <ExportToExcel apiData={data} fileName={fileName} />
    </div>
  );
}