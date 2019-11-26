// * Run with: node printExcelFormule.ts 

const START_ROW = 3
const NEW_LINE = '' // or '\n'

const fields = [
  {
    column: 'A',
    fieldname: 'id',
    caption: 'SAS code'
  }, {
    column: 'C',
    fieldname: 'startDate',
    caption: 'Datum beschikbaar'
  }, {
    column: 'D',
    fieldname: 'hoursMin',
    caption: 'Uren per week'
  }, {
    column: 'E',
    fieldname: 'hoursMax',
    caption: 'Uren per week'
  }, {
    column: 'F',
    fieldname: 'rate',
    caption: 'Tarief'
  }, {
    column: 'G',
    fieldname: 'locations',
    caption: 'Locaties',
    type: 'list'
  }, {
    column: 'H',
    fieldname: 'specialism',
    caption: 'Specialiteit'
  }, {
    column: 'I',
    fieldname: 'level',
    caption: 'Niveau'
  }, {
    column: 'J',
    fieldname: 'desiredRoles',
    caption: 'Gewenste rol',
    type: 'list'
  }, {
    column: 'K',
    fieldname: 'skillDataManagement',
    caption: 'Datamanagement'
  }, {
    column: 'L',
    fieldname: 'skillSasDI',
    caption: 'SAS DI'
  }, {
    column: 'M',
    fieldname: 'skillSasVA',
    caption: 'SAS VA'
  }, {
    column: 'N',
    fieldname: 'skillSasEG',
    caption: 'SAS EG'
  }, {
    column: 'O',
    fieldname: 'skillSasDeveloper',
    caption: 'SAS Developer'
  }, {
    column: 'P',
    fieldname: 'skillETL',
    caption: 'ETL'
  }, {
    column: 'Q',
    fieldname: 'skillOpenSource',
    caption: 'Opensource tools'
  }, {
    column: 'R',
    fieldname: 'skillIndustryFinance',
    caption: 'Finance'
  }, {
    column: 'S',
    fieldname: 'skillIndustryGovernment',
    caption: 'Government'
  }, {
    column: 'T',
    fieldname: 'skillIndustryOthers',
    caption: 'Overigen',
    type: 'list'
  }
]

const fieldsFormatted = fields
  .map((f, i) =>
    `  ${f.fieldname}: '" & SUBSTITUTE(${f.column}${START_ROW}, "'","\\'") & "'`
  )
  .join(`,${NEW_LINE}`)
const result = `="{${NEW_LINE}${fieldsFormatted}${NEW_LINE}},"`
console.log(result)

const typesFormatted = fields
  .map((f, i) =>
    `${f.fieldname}: ${f.type==='list' ? 'string[]' : 'string'}\n`
  )
  .join(`  , ${NEW_LINE}`)
const resultTypes = `export interface IExpert {${NEW_LINE}${typesFormatted}${NEW_LINE}}`
console.log(resultTypes)
