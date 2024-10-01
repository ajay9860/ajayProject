'use strict';

/**
  * [convert data to be exported to CSV]
  * @param   {[array]}   objArray  [array of object of data to be exported]
  * @return  {[string]}            [stringified data]
  */
const convertToCSV = function (objArray) {
  const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
  let str = '';

  for (let i = 0; i < array.length; i++) {
    let line = '';
    for (const index in array[i]) {
      if (line !== '') line += ',';
      line += array[i][index];
    }
    str += line + '\r\n';
  }
  return str;
};

/**
  * [export the csv file]
  * @param   {[object]}    headers      [headers for CSV file]
  * @param   {[array]}     data         [array of object of data to be exported]
  * @param   {[string]}    fileTitle    [filename for CSV to be generated]
  */
const download = function (headers, data, fileTitle) {
  if (headers) {
    data.unshift(headers);
  }

  // Convert Object to JSON
  const jsonObject = JSON.stringify(data);
  const csv = convertToCSV(jsonObject);
  const exportedFilename = fileTitle + '.csv' || 'export.csv';
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

  if (navigator.msSaveBlob) { // IE 10+
    navigator.msSaveBlob(blob, exportedFilename);
  } else {
    const link = document.createElement('a');
    if (link.download !== undefined) { // feature detection
      // Browsers that support HTML5 download attribute
      var url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', exportedFilename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};

export default download;
