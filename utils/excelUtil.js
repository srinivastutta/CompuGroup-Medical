let XLSX = require('E:/ProtractorWorkspace/CLICKDOC/node_modules/xlsx')

class xlReader {

read_from_excel(sheetName, filePath){
    let workbook = XLSX.readFile(filePath);
    let worksheet = workbook.Sheets[sheetName];

    return XLSX.utils.sheet_to_json(worksheet);
}

}

module.exports = new xlReader();