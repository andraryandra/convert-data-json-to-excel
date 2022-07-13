
const data = 
// [{
//     "Segment": "Government",
//     "Country": "Canada",
//     "Product": "Carretera",
//     "Discount": "None",
// },
// {
//     "Segment": "Government",
//     "Country": "Germany",
//     "Product": "Carretera",
//     "Discount": "None",
// },
// {
//     "Segment": "Midmarket",
//     "Country": "France",
//     "Product": "Carretera",
//     "Discount": "None",
// }];


[
    {
      "RCSMileAge": [
        {
          "change_Number": 0,
          "comments": "",
          "conflict_ID": 0,
          "created_by": "pdg_dss007",
          "created_date": "2022-06-30 07:58:25.356",
          "entry_Date": "2022-06-30 07:58:25.356",
          "entry_Time": "7:58",
          "integration_Datetime": null,
          "integration_ID": null,
          "last_UpdatedBy": "pdg_dss007",
          "last_UpdatedDate": "2022-06-30 07:58:25.357",
          "mileage": 150,
          "status": "Start",
          "rcs_InventoryLocationID": "B11C2115-7A07-EC11-B562-C89665417E7F",
          "deleteFlag": false,
          "id": "BEF4E0C0-F80F-11EC-BB96-21B9C1D7E086",
          "_id": "BEF4E0C0-F80F-11EC-BB96-21B9C1D7E086"
        }
      ]
    }
  ]
        

document.getElementById("json").innerHTML = JSON.stringify(data, undefined, 4);

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

function downloadAsExcel(){
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = {
        // Sheets: {'data': worksheet},
        // SheetNames: ['data']
        Sheets: {'data': worksheet},
        SheetNames: ['data'],

    };
    const excelBuffer = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});
    console.log(excelBuffer);
    saveAsExcel(excelBuffer,'myFile')
}

function saveAsExcel(buffer, fileName) {
    const data = new Blob([buffer], {type: EXCEL_TYPE});
    saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}






