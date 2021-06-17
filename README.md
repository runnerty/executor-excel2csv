<p align="center">
  <a href="http://runnerty.io">
    <img height="257" src="https://runnerty.io/assets/header/logo-stroked.png">
  </a>
  <p align="center">Smart Processes Management</p>
</p>

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency Status][david-badge]][david-badge-url]
<a href="#badge">
<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
</a>

# Executor for [Runnerty]: Excel2CSV (xlsx to csv)

### Installation:

Through NPM

```bash
npm i @runnerty/executor-excel2csv
```

You can also add modules to your project with [runnerty]

```bash
npx runnerty add @runnerty/executor-excel2csv
```

This command installs the module in your project, adds example configuration in your [config.json] and creates an example plan of use.

If you have installed [runnerty] globally you can include the module with this command:

```bash
runnerty add @runnerty/executor-excel2csv
```

### Configuration:

Add in [config.json]:

```json
{
  "id": "excel2csv_default",
  "type": "@runnerty-executor-excel2csv"
}
```

### Plan:

Add in [plan.json]:

```json
{
  "id": "excel2csv_default",
  "inputPath": "./test.xlsx",
  "outputPath": "./test.csv"
}
```

```json
{
  "id": "excel2csv_default",
  "inputPath": "./test.xlsx",
  "outputPath": "./test.csv",
  "options": {
    "sheetName": "SHEET_ONE",
    "dateFormat": "DD/MM/YYYY",
    "formatterOptions": {
      "quote": "'",
      "delimiter": ";"
    }
  }
}
```

#### Options:

| Parameter        | Type    | Description                                                                         |
| ---------------- | ------- | ----------------------------------------------------------------------------------- |
| dateFormat       | String  | Specify the date encoding format of dayjs.                                          |
| dateUTC          | Boolean | Specify whether ExcelJS uses `dayjs.utc ()` to convert time zone for parsing dates. |
| encoding         | String  | Specify file encoding format. (Only applies to `.writeFile`.)                       |
| includeEmptyRows | Boolean | Specifies whether empty rows can be written.                                        |
| sheetName        | String  | Specify worksheet name.                                                             |
| sheetId          | Number  | Specify worksheet ID.                                                               |
| formatterOptions | Object  | See below.                                                                          |

#### Options/formatterOptions:

| Parameter              | Description                                                                                                                                |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| headers                | Type: boolean/string[]. The headers will be auto detected from the first row or you can to provide headers array: ['h1name','h2name',...]. |
| delimiter              | Alternate delimiter. (Default: ',')                                                                                                        |
| quote                  | Alternate quote. (Default: '"')                                                                                                            |
| alwaysWriteHeaders     | Set to true if you always want headers written, even if no rows are written. (Default: false)                                              |
| rowDelimiter           | Specify an alternate row delimiter (i.e \r\n). (Default: '\n')                                                                             |
| quoteHeaders           | If true then all headers will be quoted. (Default: quoteColumns value)                                                                     |
| quoteColumns           | If true then columns and headers will be quoted (unless quoteHeaders is specified). (Default: false).                                      |
| escape                 | Alternate escaping value. (Default: '"')                                                                                                   |
| includeEndRowDelimiter | Set to true to include a row delimiter at the end of the csv. (Default: false)                                                             |
| writeBOM               | Set to true if you want the first character written to the stream to be a utf-8 BOM character. (Default: false)                            |

More info [here.](https://c2fo.io/fast-csv/docs/formatting/options/)

[runnerty]: http://www.runnerty.io
[downloads-image]: https://img.shields.io/npm/dm/@runnerty/executor-excel2csv.svg
[npm-url]: https://www.npmjs.com/package/@runnerty/executor-excel2csv
[npm-image]: https://img.shields.io/npm/v/@runnerty/executor-excel2csv.svg
[david-badge]: https://david-dm.org/runnerty/executor-excel2csv.svg
[david-badge-url]: https://david-dm.org/runnerty/executor-excel2csv
[config.json]: http://docs.runnerty.io/config/
[plan.json]: http://docs.runnerty.io/plan/
