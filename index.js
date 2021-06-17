'use strict';
const { createWriteStream } = require('fs');
const Excel = require('exceljs');

const Executor = require('@runnerty/module-core').Executor;

class excel2csvExecutor extends Executor {
  constructor(process) {
    super(process);
    this.endOptions = { end: 'end' };
  }

  async exec(params) {
    try {
      const opts = params.options;
      const inputPath = params.inputPath;
      const outputPath = params.outputPath;

      // INPUT
      const workbook = new Excel.Workbook();
      await workbook.xlsx.readFile(inputPath);

      // OUTPUT
      const outputCSVFile = createWriteStream(outputPath, { encoding: 'utf8' });
      await workbook.csv.write(outputCSVFile, opts);

      this.end(this.endOptions);
    } catch (err) {
      this.endOptions.end = 'error';
      this.endOptions.messageLog = err.message;
      this.endOptions.err_output = err.message;
      this.end(this.endOptions);
    }
  }
}

module.exports = excel2csvExecutor;
