const data = [
  {  id: 'SAS002227',  startDate: '11/1/2019',  hoursMin: '24',  hoursMax: '32',  rate: 'Bekend',  locations: 'Gelderland; Overijssel; Noord-Brabant; Noord-Holland; Utrecht',  specialism: 'Analytics Translator',  level: 'Senior',  desiredRoles: 'Analytics Translator',  skillDataManagement: '2',  skillSasDI: '2',  skillSasVA: '0',  skillSasEG: '2',  skillSasDeveloper: '0',  skillETL: '2',  skillOpenSource: '3',  skillIndustryFinance: '0',  skillIndustryGovernment: '3',  skillIndustryOthers: '0'},
  {  id: 'SAS008227',  startDate: '11/1/2019',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Noord-Holland; Utrecht; Zuid-Holland ',  specialism: 'SAS Developer',  level: 'Senior ',  desiredRoles: 'SAS Developer',  skillDataManagement: '3',  skillSasDI: '4',  skillSasVA: '0',  skillSasEG: '0',  skillSasDeveloper: '5',  skillETL: '3',  skillOpenSource: '0',  skillIndustryFinance: '2',  skillIndustryGovernment: '2',  skillIndustryOthers: 'Telecom; Transportation; Aerospace'},
  {  id: 'SAS012227',  startDate: '11/1/2019',  hoursMin: '32',  hoursMax: '36',  rate: 'Bekend',  locations: 'Noord-Holland; Utrecht; Gelderland',  specialism: 'SAS Developer',  level: 'Senior ',  desiredRoles: 'SAS Developer',  skillDataManagement: '3',  skillSasDI: '3',  skillSasVA: '3',  skillSasEG: '0',  skillSasDeveloper: '0',  skillETL: '3',  skillOpenSource: '0',  skillIndustryFinance: '5',  skillIndustryGovernment: '0',  skillIndustryOthers: '0'},
  {  id: 'SAS036227',  startDate: '11/1/2019',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Flevoland; Noord-Holland; Utrecht; Overijssel; Gelderland',  specialism: 'BI Consultant',  level: 'Senior',  desiredRoles: 'Data Engineer; SAS BI Consultant',  skillDataManagement: '2',  skillSasDI: '3',  skillSasVA: '3',  skillSasEG: '0',  skillSasDeveloper: '0',  skillETL: '4',  skillOpenSource: '0',  skillIndustryFinance: '2',  skillIndustryGovernment: '2',  skillIndustryOthers: 'Software Development; Media; Aerospace'},
  {  id: 'SAS041227',  startDate: '11/1/2019',  hoursMin: '32',  hoursMax: '32',  rate: 'Bekend',  locations: 'Zuid-Holland',  specialism: 'SAS BI Consultant',  level: 'Senior',  desiredRoles: 'SAS BI Consultant',  skillDataManagement: '2',  skillSasDI: '2',  skillSasVA: '3',  skillSasEG: '4',  skillSasDeveloper: '0',  skillETL: '2',  skillOpenSource: '0',  skillIndustryFinance: '0',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Automotive; Media'},
  {  id: 'SAS042227',  startDate: '11/1/2019',  hoursMin: '16',  hoursMax: '40',  rate: 'Bekend',  locations: 'Groningen; Friesland; Drenthe; Overijssel; Utrecht; Noord-Holland',  specialism: 'SAS Developer - optimaliseren van scratch',  level: 'Senior; Manager',  desiredRoles: 'SAS Projectmanager',  skillDataManagement: '2',  skillSasDI: '3',  skillSasVA: '0',  skillSasEG: '2',  skillSasDeveloper: '0',  skillETL: '0',  skillOpenSource: '0',  skillIndustryFinance: '0',  skillIndustryGovernment: '2',  skillIndustryOthers: 'Logistics; Consultancy'},
  {  id: 'SAS066227',  startDate: '11/1/2019',  hoursMin: '',  hoursMax: '',  rate: 'Bekend',  locations: 'Utrecht',  specialism: 'SAS BI Consultant',  level: 'Senior',  desiredRoles: 'SAS BI Consultant',  skillDataManagement: '3',  skillSasDI: '4',  skillSasVA: '3',  skillSasEG: '0',  skillSasDeveloper: '0',  skillETL: '4',  skillOpenSource: '0',  skillIndustryFinance: '2',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Healthcare'},
  {  id: 'SAS005227',  startDate: '12/1/2019',  hoursMin: '24',  hoursMax: '32',  rate: 'Bekend',  locations: 'Noord-Holland; Utrecht; Zuid-Holland; Flevoland; Gelderland',  specialism: 'Senior SAS/ BI Consultant',  level: 'Senior',  desiredRoles: 'SAS Consultant',  skillDataManagement: '3',  skillSasDI: '4',  skillSasVA: '5',  skillSasEG: '0',  skillSasDeveloper: '0',  skillETL: '4',  skillOpenSource: '0',  skillIndustryFinance: '1',  skillIndustryGovernment: '5',  skillIndustryOthers: 'Real Estate'},
  {  id: 'SAS013227',  startDate: '12/1/2019',  hoursMin: '32',  hoursMax: '32',  rate: 'Bekend',  locations: 'Utrecht; Noord-Holland; Zuid Holland; Flevoland; Gelderland; Overijssel; Noord-Brabant',  specialism: 'A.I. Consultant',  level: 'Medior',  desiredRoles: 'SAS Risk',  skillDataManagement: '2',  skillSasDI: '2',  skillSasVA: '0',  skillSasEG: '4',  skillSasDeveloper: '0',  skillETL: '2',  skillOpenSource: '3',  skillIndustryFinance: '5',  skillIndustryGovernment: '0',  skillIndustryOthers: '0'},
  {  id: 'SAS031227',  startDate: '12/1/2019',  hoursMin: '',  hoursMax: '',  rate: 'Bekend',  locations: 'Gelderland',  specialism: 'Data Engineer',  level: 'Senior',  desiredRoles: 'Data Engineer; SAS BI Consultant',  skillDataManagement: '4',  skillSasDI: '4',  skillSasVA: '2',  skillSasEG: '2',  skillSasDeveloper: '2',  skillETL: '4',  skillOpenSource: '0',  skillIndustryFinance: '0',  skillIndustryGovernment: '3',  skillIndustryOthers: 'Healthcare '},
  {  id: 'SAS040227',  startDate: '12/1/2019',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Utrecht; Noord-Holland; Zuid Holland; Flevoland; Gelderland; Overijssel; Noord-Brabant',  specialism: 'Data Analyst',  level: 'Senior',  desiredRoles: 'Data Analyst',  skillDataManagement: '3',  skillSasDI: '3',  skillSasVA: '0',  skillSasEG: '0',  skillSasDeveloper: '0',  skillETL: '2',  skillOpenSource: '2',  skillIndustryFinance: '3',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Telecom; Real Estate'},
  {  id: 'SAS003227',  startDate: '1/1/2020',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Gelderland; Overijssel; Noord-Brabant; Noord-Holland; Utrecht; Flevoland',  specialism: 'Senior SAS BI Consultant',  level: 'Senior',  desiredRoles: 'SAS BI Consultant',  skillDataManagement: '3',  skillSasDI: '5',  skillSasVA: '4',  skillSasEG: '5',  skillSasDeveloper: '3',  skillETL: '4',  skillOpenSource: '0',  skillIndustryFinance: '5',  skillIndustryGovernment: '0',  skillIndustryOthers: '0'},
  {  id: 'SAS006227',  startDate: '1/1/2020',  hoursMin: '24',  hoursMax: '32',  rate: 'Bekend',  locations: 'Noord-Brabant; Gelderland',  specialism: 'SAS BI Consultant',  level: 'Senior',  desiredRoles: 'SAS BI Consultant',  skillDataManagement: '3',  skillSasDI: '4',  skillSasVA: '5',  skillSasEG: '3',  skillSasDeveloper: '0',  skillETL: '3',  skillOpenSource: '0',  skillIndustryFinance: '1',  skillIndustryGovernment: '2',  skillIndustryOthers: 'Healthcare; Pharma; OV'},
  {  id: 'SAS007227',  startDate: '1/1/2020',  hoursMin: '16',  hoursMax: '24',  rate: 'Bekend',  locations: 'Noord-Holland',  specialism: 'Risk Data Consultant ',  level: 'Senior',  desiredRoles: 'SAS Risk Consultant',  skillDataManagement: '4',  skillSasDI: '3',  skillSasVA: '0',  skillSasEG: '0',  skillSasDeveloper: '2',  skillETL: '3',  skillOpenSource: '4',  skillIndustryFinance: '5',  skillIndustryGovernment: '0',  skillIndustryOthers: '0'},
  {  id: 'SAS009227',  startDate: '1/1/2020',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Zuid-Holland',  specialism: 'SAS DATA Consultant',  level: 'Senior',  desiredRoles: 'SAS Consultant',  skillDataManagement: '3',  skillSasDI: '5',  skillSasVA: '3',  skillSasEG: '2',  skillSasDeveloper: '3',  skillETL: '5',  skillOpenSource: '0',  skillIndustryFinance: '3',  skillIndustryGovernment: '3',  skillIndustryOthers: '0'},
  {  id: 'SAS010227',  startDate: '1/1/2020',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Noord-Holland',  specialism: 'SAS Financial Risk',  level: 'Senior',  desiredRoles: 'SAS Risk Consultant',  skillDataManagement: '4',  skillSasDI: '3',  skillSasVA: '0',  skillSasEG: '0',  skillSasDeveloper: '0',  skillETL: '3',  skillOpenSource: '3',  skillIndustryFinance: '5',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Healthcare; Utility '},
  {  id: 'SAS015227',  startDate: '1/1/2020',  hoursMin: '36',  hoursMax: '36',  rate: 'Bekend',  locations: 'Gelderland; Overijssel; Noord-Brabant; Noord-Holland; Utrecht',  specialism: 'SAS met duidelijke wiskundige component tot aan voorkant BI',  level: 'Senior ',  desiredRoles: 'SAS Consultant',  skillDataManagement: '4',  skillSasDI: '4',  skillSasVA: '4',  skillSasEG: '3',  skillSasDeveloper: '2',  skillETL: '3',  skillOpenSource: '2',  skillIndustryFinance: '4',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Real Estate'},
  {  id: 'SAS016227',  startDate: '1/1/2020',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Overijssel',  specialism: 'SAS DATA Consultant',  level: 'Senior',  desiredRoles: 'Data Engineer',  skillDataManagement: '5',  skillSasDI: '5',  skillSasVA: '4',  skillSasEG: '3',  skillSasDeveloper: '4',  skillETL: '3',  skillOpenSource: '4',  skillIndustryFinance: '5',  skillIndustryGovernment: '3',  skillIndustryOthers: 'Healthcare; Brewery'},
  {  id: 'SAS019227',  startDate: '1/1/2020',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Noord-Holland; Utrecht',  specialism: 'SAS Consultant',  level: 'Medior',  desiredRoles: 'SAS Consultant',  skillDataManagement: '3',  skillSasDI: '4',  skillSasVA: '3',  skillSasEG: '4',  skillSasDeveloper: '3',  skillETL: '4',  skillOpenSource: '0',  skillIndustryFinance: '4',  skillIndustryGovernment: '3',  skillIndustryOthers: 'Transportation; Consultancy'},
  {  id: 'SAS020227',  startDate: '1/1/2020',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Utrecht',  specialism: 'SAS Consultant',  level: 'Senior',  desiredRoles: 'SAS BI Consultant; Data Engineer',  skillDataManagement: '3',  skillSasDI: '3',  skillSasVA: '3',  skillSasEG: '3',  skillSasDeveloper: '0',  skillETL: '3',  skillOpenSource: '3',  skillIndustryFinance: '3',  skillIndustryGovernment: '3',  skillIndustryOthers: 'Consultancy; Chemicals; Oil and Gas'},
  {  id: 'SAS021227',  startDate: '1/1/2020',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Zuid-Holland; Zeeland; Utrecht; Noord-Holland; Noord-Brabant',  specialism: 'SAS BI Consultant',  level: 'Senior',  desiredRoles: 'SAS BI Consultant',  skillDataManagement: '2',  skillSasDI: '2',  skillSasVA: '0',  skillSasEG: '4',  skillSasDeveloper: '5',  skillETL: '5',  skillOpenSource: '2',  skillIndustryFinance: '4',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Aerospace'},
  {  id: 'SAS028227',  startDate: '1/1/2020',  hoursMin: '',  hoursMax: '',  rate: 'Bekend',  locations: 'Utrecht',  specialism: 'SAS BI Consultant',  level: 'Senior',  desiredRoles: 'SAS BI Consultant',  skillDataManagement: '4',  skillSasDI: '3',  skillSasVA: '3',  skillSasEG: '2',  skillSasDeveloper: '2',  skillETL: '4',  skillOpenSource: '0',  skillIndustryFinance: '3',  skillIndustryGovernment: '2',  skillIndustryOthers: 'Healthcare; Software development'},
  {  id: 'SAS029227',  startDate: '1/1/2020',  hoursMin: '',  hoursMax: '',  rate: 'Bekend',  locations: 'Utrecht',  specialism: 'Data Scientist',  level: 'Senior',  desiredRoles: 'Data Scientist',  skillDataManagement: '4',  skillSasDI: '3',  skillSasVA: '0',  skillSasEG: '3',  skillSasDeveloper: '3',  skillETL: '0',  skillOpenSource: '4',  skillIndustryFinance: '3',  skillIndustryGovernment: '3',  skillIndustryOthers: 'Aerospace'},
  {  id: 'SAS032227',  startDate: '1/1/2020',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Flevoland',  specialism: 'BI Specialist / Data Analyst ',  level: 'Senior',  desiredRoles: 'SAS BI Consultant; Data Analist',  skillDataManagement: '3',  skillSasDI: '3',  skillSasVA: '3',  skillSasEG: '2',  skillSasDeveloper: '3',  skillETL: '2',  skillOpenSource: '0',  skillIndustryFinance: '5',  skillIndustryGovernment: '0',  skillIndustryOthers: '0'},
  {  id: 'SAS034227',  startDate: '1/1/2020',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Utrecht',  specialism: 'SAS Developer',  level: 'Medior',  desiredRoles: 'SAS Developer',  skillDataManagement: '3',  skillSasDI: '3',  skillSasVA: '0',  skillSasEG: '0',  skillSasDeveloper: '4',  skillETL: '3',  skillOpenSource: '0',  skillIndustryFinance: '2',  skillIndustryGovernment: '0',  skillIndustryOthers: '0'},
  {  id: 'SAS035227',  startDate: '1/1/2020',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Noord-Holland; Flevoland; Zuid-Holland; Utrecht',  specialism: 'Implementing SAS-consultant',  level: 'Senior',  desiredRoles: 'SAS BI Consultant',  skillDataManagement: '3',  skillSasDI: '4',  skillSasVA: '3',  skillSasEG: '4',  skillSasDeveloper: '2',  skillETL: '4',  skillOpenSource: '0',  skillIndustryFinance: '4',  skillIndustryGovernment: '0',  skillIndustryOthers: '0'},
  {  id: 'SAS039227',  startDate: '1/1/2020',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Zuid-Holland; Utrecht; Noord-Holland',  specialism: 'Projectmanager ',  level: 'Senior',  desiredRoles: 'SAS Projectmanager',  skillDataManagement: '1',  skillSasDI: '0',  skillSasVA: '0',  skillSasEG: '0',  skillSasDeveloper: '0',  skillETL: '0',  skillOpenSource: '1',  skillIndustryFinance: '0',  skillIndustryGovernment: '4',  skillIndustryOthers: 'Consultancy'},
  {  id: 'SAS048227',  startDate: '1/1/2020',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Overijssel; Drenthe; Groningen; Friesland; Flevoland; Gelderland; Noord-Holland; Utrecht',  specialism: 'Senior SAS Consultant ',  level: 'Senior',  desiredRoles: 'SAS Consultant',  skillDataManagement: '2',  skillSasDI: '4',  skillSasVA: '1',  skillSasEG: '4',  skillSasDeveloper: '4',  skillETL: '1',  skillOpenSource: '0',  skillIndustryFinance: '3',  skillIndustryGovernment: '5',  skillIndustryOthers: 'Transportation'},
  {  id: 'SAS060227',  startDate: '1/1/2020',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Zuid-Holland',  specialism: 'SAS Data Integration / BI Tooling',  level: 'Senior',  desiredRoles: 'SAS Consultant',  skillDataManagement: '5',  skillSasDI: '5',  skillSasVA: '2',  skillSasEG: '0',  skillSasDeveloper: '0',  skillETL: '4',  skillOpenSource: '1',  skillIndustryFinance: '4',  skillIndustryGovernment: '0',  skillIndustryOthers: '0'},
  {  id: 'SAS033227',  startDate: '2/1/2020',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Noord-Brabant; Limburg; Zuid-Holland; Utrecht; Gelderland',  specialism: 'Projectmanager B!',  level: 'Medior',  desiredRoles: 'SAS BI Consultant',  skillDataManagement: '4',  skillSasDI: '5',  skillSasVA: '5',  skillSasEG: '0',  skillSasDeveloper: '0',  skillETL: '3',  skillOpenSource: '1',  skillIndustryFinance: '4',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Media; Logistics '},
  {  id: 'SAS038227',  startDate: '4/1/2020',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Utrecht',  specialism: 'SAS Specialist',  level: 'Senior',  desiredRoles: 'SAS Consultant',  skillDataManagement: '3',  skillSasDI: '3',  skillSasVA: '0',  skillSasEG: '5',  skillSasDeveloper: '3',  skillETL: '2',  skillOpenSource: '0',  skillIndustryFinance: '0',  skillIndustryGovernment: '3',  skillIndustryOthers: 'Pharma '},
  {  id: 'SAS017227',  startDate: '5/1/2020',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Zuid-Holland',  specialism: 'SAS Data Analyst ',  level: 'Senior ',  desiredRoles: 'SAS Consultant',  skillDataManagement: '4',  skillSasDI: '4',  skillSasVA: '2',  skillSasEG: '4',  skillSasDeveloper: '4',  skillETL: '4',  skillOpenSource: '1',  skillIndustryFinance: '3',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Pharma; Aerospace; Food'},
  {  id: 'SAS025227',  startDate: '5/1/2020',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Overijssel',  specialism: 'SAS BI Consultant',  level: 'Senior',  desiredRoles: 'SAS BI Consultant',  skillDataManagement: '4',  skillSasDI: '5',  skillSasVA: '3',  skillSasEG: '5',  skillSasDeveloper: '3',  skillETL: '2',  skillOpenSource: '0',  skillIndustryFinance: '5',  skillIndustryGovernment: '2',  skillIndustryOthers: 'Consultancy'},
  {  id: 'SAS037227',  startDate: '6/1/2020',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Noord-Holland',  specialism: 'SAS Specialist',  level: 'Senior',  desiredRoles: 'SAS BI Consultant',  skillDataManagement: '2',  skillSasDI: '4',  skillSasVA: '3',  skillSasEG: '4',  skillSasDeveloper: '0',  skillETL: '3',  skillOpenSource: '0',  skillIndustryFinance: '4',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Transportation   '},
  {  id: 'SAS043227',  startDate: '6/1/2020',  hoursMin: '32',  hoursMax: '32',  rate: 'Bekend',  locations: 'Zuid-Holland',  specialism: 'ETL Engineer SAS Developer',  level: 'Senior',  desiredRoles: 'SAS Developer',  skillDataManagement: '3',  skillSasDI: '3',  skillSasVA: '4',  skillSasEG: '3',  skillSasDeveloper: '4',  skillETL: '5',  skillOpenSource: '0',  skillIndustryFinance: '4',  skillIndustryGovernment: '2',  skillIndustryOthers: 'Transportation; Media; Software Development '},
  {  id: 'SAS054227',  startDate: '6/1/2020',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Gelderland',  specialism: 'Business Analyst',  level: 'Senior',  desiredRoles: 'Business Analyst',  skillDataManagement: '3',  skillSasDI: '3',  skillSasVA: '3',  skillSasEG: '0',  skillSasDeveloper: '3',  skillETL: '0',  skillOpenSource: '0',  skillIndustryFinance: '4',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Transportation'},
  {  id: 'SAS011227',  startDate: '7/1/2020',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Noord-Holland',  specialism: 'Data Engineer',  level: 'Senior ',  desiredRoles: 'SAS BI Consultant; Data Engineer',  skillDataManagement: '3',  skillSasDI: '5',  skillSasVA: '3',  skillSasEG: '4',  skillSasDeveloper: '2',  skillETL: '4',  skillOpenSource: '0',  skillIndustryFinance: '4',  skillIndustryGovernment: '4',  skillIndustryOthers: 'Aerospace'},
  {  id: 'SAS044227',  startDate: '7/1/2020',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Utrecht',  specialism: 'SAS BI Consultant',  level: 'Senior',  desiredRoles: 'SAS BI Consultant',  skillDataManagement: '1',  skillSasDI: '1',  skillSasVA: '3',  skillSasEG: '4',  skillSasDeveloper: '0',  skillETL: '1',  skillOpenSource: '0',  skillIndustryFinance: '2',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Telecom; Consultancy'},
  {  id: 'SAS018227',  startDate: '7/3/2020',  hoursMin: '32',  hoursMax: '40',  rate: 'Bekend',  locations: 'Utrecht',  specialism: 'SAS Risk Developer',  level: 'Senior',  desiredRoles: 'SAS Developer; Data Analyst ',  skillDataManagement: '3',  skillSasDI: '3',  skillSasVA: '2',  skillSasEG: '0',  skillSasDeveloper: '4',  skillETL: '3',  skillOpenSource: '2',  skillIndustryFinance: '4',  skillIndustryGovernment: '4',  skillIndustryOthers: '0'},
  {  id: 'SAS001227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Utrecht',  specialism: 'Data & Analytics',  level: 'Senior',  desiredRoles: 'Analytics Consultant',  skillDataManagement: '2',  skillSasDI: '2',  skillSasVA: '2',  skillSasEG: '2',  skillSasDeveloper: '0',  skillETL: '0',  skillOpenSource: '0',  skillIndustryFinance: '0',  skillIndustryGovernment: '3',  skillIndustryOthers: 'Healthcare '},
  {  id: 'SAS022227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Noord-Holland',  specialism: 'SAS Information manager',  level: 'Senior',  desiredRoles: 'SAS - Information Manager',  skillDataManagement: '4',  skillSasDI: '4',  skillSasVA: '3',  skillSasEG: '4',  skillSasDeveloper: '2',  skillETL: '2',  skillOpenSource: '1',  skillIndustryFinance: '5',  skillIndustryGovernment: '0',  skillIndustryOthers: '0'},
  {  id: 'SAS023227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Noord-Brabant',  specialism: 'SAS DATA Consultant',  level: 'Senior',  desiredRoles: 'SAS BI Consultant; Data Engineer',  skillDataManagement: '4',  skillSasDI: '4',  skillSasVA: '4',  skillSasEG: '4',  skillSasDeveloper: '2',  skillETL: '4',  skillOpenSource: '3',  skillIndustryFinance: '0',  skillIndustryGovernment: '3',  skillIndustryOthers: 'Engineering; Transportation'},
  {  id: 'SAS026227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Flevoland',  specialism: 'SAS Risk',  level: 'Medior',  desiredRoles: 'SAS Risk Consultant',  skillDataManagement: '4',  skillSasDI: '2',  skillSasVA: '0',  skillSasEG: '0',  skillSasDeveloper: '0',  skillETL: '2',  skillOpenSource: '1',  skillIndustryFinance: '4',  skillIndustryGovernment: '0',  skillIndustryOthers: '0'},
  {  id: 'SAS030227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'New York',  specialism: 'Data Engineer',  level: 'Senior ',  desiredRoles: 'Data Engineer',  skillDataManagement: '3',  skillSasDI: '3',  skillSasVA: '0',  skillSasEG: '0',  skillSasDeveloper: '0',  skillETL: '0',  skillOpenSource: '0',  skillIndustryFinance: '4',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Media; Automotive'},
  {  id: 'SAS045227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Zuid-Holland',  specialism: 'Data Acquisition',  level: 'Senior',  desiredRoles: 'SAS Consultant',  skillDataManagement: '0',  skillSasDI: '0',  skillSasVA: '0',  skillSasEG: '3',  skillSasDeveloper: '4',  skillETL: '0',  skillOpenSource: '4',  skillIndustryFinance: '0',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Pharma'},
  {  id: 'SAS046227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Utrecht',  specialism: 'Data Scientists',  level: 'Senior',  desiredRoles: 'Data Scientist',  skillDataManagement: '3',  skillSasDI: '3',  skillSasVA: '2',  skillSasEG: '0',  skillSasDeveloper: '0',  skillETL: '2',  skillOpenSource: '2',  skillIndustryFinance: '3',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Telecom; Electronics; Transportation'},
  {  id: 'SAS047227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Noord-Brabant',  specialism: 'Senior Data Analyst ',  level: 'Senior',  desiredRoles: 'Data Analist',  skillDataManagement: '0',  skillSasDI: '0',  skillSasVA: '0',  skillSasEG: '4',  skillSasDeveloper: '0',  skillETL: '0',  skillOpenSource: '3',  skillIndustryFinance: '3',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Logistics; Software Development; Telecom'},
  {  id: 'SAS049227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Zuid-Holland',  specialism: 'SAS Specialist/ BI',  level: 'Senior',  desiredRoles: 'SAS Specialist',  skillDataManagement: '3',  skillSasDI: '4',  skillSasVA: '5',  skillSasEG: '2',  skillSasDeveloper: '2',  skillETL: '4',  skillOpenSource: '0',  skillIndustryFinance: '0',  skillIndustryGovernment: '3',  skillIndustryOthers: 'Transportation; Utility'},
  {  id: 'SAS050227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Noord-Holland',  specialism: 'Software Engineer',  level: 'Medior',  desiredRoles: 'Software Engineer',  skillDataManagement: '0',  skillSasDI: '0',  skillSasVA: '0',  skillSasEG: '0',  skillSasDeveloper: '0',  skillETL: '1',  skillOpenSource: '3',  skillIndustryFinance: '0',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Consultancy '},
  {  id: 'SAS051227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Flevoland',  specialism: 'SAS Consultant',  level: 'Senior',  desiredRoles: 'SAS Consultant ',  skillDataManagement: '3',  skillSasDI: '4',  skillSasVA: '5',  skillSasEG: '0',  skillSasDeveloper: '2',  skillETL: '4',  skillOpenSource: '0',  skillIndustryFinance: '0',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Consultancy '},
  {  id: 'SAS052227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Utrecht',  specialism: 'SAS Consultant / BI ',  level: 'Senior',  desiredRoles: 'SAS BI Consultant',  skillDataManagement: '3',  skillSasDI: '4',  skillSasVA: '4',  skillSasEG: '0',  skillSasDeveloper: '0',  skillETL: '4',  skillOpenSource: '0',  skillIndustryFinance: '3',  skillIndustryGovernment: '3',  skillIndustryOthers: 'Aerospace; Utility; Consultancy '},
  {  id: 'SAS053227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Gelderland',  specialism: 'SAS Specialist ',  level: 'Senior',  desiredRoles: 'SAS Consultant',  skillDataManagement: '2',  skillSasDI: '3',  skillSasVA: '0',  skillSasEG: '0',  skillSasDeveloper: '0',  skillETL: '3',  skillOpenSource: '1',  skillIndustryFinance: '3',  skillIndustryGovernment: '3',  skillIndustryOthers: 'Media; FMCG'},
  {  id: 'SAS055227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Zuid-Holland',  specialism: 'Technical SAS Specialist ',  level: 'Senior',  desiredRoles: 'SAS Consultant',  skillDataManagement: '3',  skillSasDI: '0',  skillSasVA: '3',  skillSasEG: '0',  skillSasDeveloper: '3',  skillETL: '4',  skillOpenSource: '0',  skillIndustryFinance: '5',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Pharma'},
  {  id: 'SAS056227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Utrecht',  specialism: 'Sas Developer',  level: 'Medior',  desiredRoles: 'SAS Risk Consultant',  skillDataManagement: '3',  skillSasDI: '3',  skillSasVA: '4',  skillSasEG: '0',  skillSasDeveloper: '4',  skillETL: '4',  skillOpenSource: '0',  skillIndustryFinance: '4',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Transportation'},
  {  id: 'SAS057227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Noord-Holland',  specialism: 'Finance Consultant',  level: 'Medior',  desiredRoles: 'Finance Consultant',  skillDataManagement: '0',  skillSasDI: '2',  skillSasVA: '0',  skillSasEG: '0',  skillSasDeveloper: '0',  skillETL: '0',  skillOpenSource: '0',  skillIndustryFinance: '3',  skillIndustryGovernment: '0',  skillIndustryOthers: '0'},
  {  id: 'SAS058227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Noord-Holland',  specialism: 'Risk Data Engineer',  level: 'Senior',  desiredRoles: 'SAS Risk Consultant',  skillDataManagement: '3',  skillSasDI: '3',  skillSasVA: '3',  skillSasEG: '0',  skillSasDeveloper: '0',  skillETL: '0',  skillOpenSource: '2',  skillIndustryFinance: '3',  skillIndustryGovernment: '0',  skillIndustryOthers: '0'},
  {  id: 'SAS059227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Gent',  specialism: 'SAS Analytics',  level: 'Senior',  desiredRoles: 'SAS Developer',  skillDataManagement: '4',  skillSasDI: '3',  skillSasVA: '0',  skillSasEG: '0',  skillSasDeveloper: '5',  skillETL: '0',  skillOpenSource: '1',  skillIndustryFinance: '4',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Utility'},
  {  id: 'SAS061227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Gelderland; Utrecht',  specialism: 'SAS BI Consultant',  level: 'Senior',  desiredRoles: 'SAS BI Consultant',  skillDataManagement: '1',  skillSasDI: '3',  skillSasVA: '1',  skillSasEG: '3',  skillSasDeveloper: '0',  skillETL: '0',  skillOpenSource: '1',  skillIndustryFinance: '3',  skillIndustryGovernment: '0',  skillIndustryOthers: '0'},
  {  id: 'SAS062227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Zuid-Holland',  specialism: 'BI Consultant',  level: 'Medior',  desiredRoles: 'SAS BI Consultant',  skillDataManagement: '0',  skillSasDI: '3',  skillSasVA: '3',  skillSasEG: '3',  skillSasDeveloper: '0',  skillETL: '0',  skillOpenSource: '0',  skillIndustryFinance: '3',  skillIndustryGovernment: '3',  skillIndustryOthers: '0'},
  {  id: 'SAS063227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Noord-Brabant',  specialism: 'SAS Analyst / BI',  level: 'Senior',  desiredRoles: 'SAS BI Consultant',  skillDataManagement: '5',  skillSasDI: '5',  skillSasVA: '2',  skillSasEG: '4',  skillSasDeveloper: '0',  skillETL: '0',  skillOpenSource: '1',  skillIndustryFinance: '3',  skillIndustryGovernment: '0',  skillIndustryOthers: 'Pharma'},
  {  id: 'SAS064227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Gelderland',  specialism: 'SAS Analyst / BI',  level: 'Senior',  desiredRoles: 'SAS BI Consultant',  skillDataManagement: '3',  skillSasDI: '4',  skillSasVA: '2',  skillSasEG: '2',  skillSasDeveloper: '4',  skillETL: '2',  skillOpenSource: '1',  skillIndustryFinance: '4',  skillIndustryGovernment: '2',  skillIndustryOthers: '0'},
  {  id: 'SAS065227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Noord-Holland',  specialism: 'SAS BI / Data Engineer',  level: 'Senior',  desiredRoles: 'SAS BI Consultant; Data engineer',  skillDataManagement: '3',  skillSasDI: '5',  skillSasVA: '4',  skillSasEG: '3',  skillSasDeveloper: '0',  skillETL: '3',  skillOpenSource: '0',  skillIndustryFinance: '4',  skillIndustryGovernment: '2',  skillIndustryOthers: 'Media; Consultancy'},
  {  id: 'SAS068227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Utrecht',  specialism: 'BI Consultant',  level: 'Medior',  desiredRoles: 'SAS BI Consultant',  skillDataManagement: '0',  skillSasDI: '0',  skillSasVA: '0',  skillSasEG: '2',  skillSasDeveloper: '0',  skillETL: '0',  skillOpenSource: '1',  skillIndustryFinance: '3',  skillIndustryGovernment: '1',  skillIndustryOthers: 'Utility'},
  {  id: 'SAS069227',  startDate: '',  hoursMin: '',  hoursMax: '',  rate: '',  locations: 'Gelderland',  specialism: 'SAS Specialist ',  level: 'Senior',  desiredRoles: 'SAS Consultant',  skillDataManagement: '4',  skillSasDI: '4',  skillSasVA: '0',  skillSasEG: '0',  skillSasDeveloper: '3',  skillETL: '3',  skillOpenSource: '1',  skillIndustryFinance: '0',  skillIndustryGovernment: '4',  skillIndustryOthers: 'Media; FMCG; Healtchare'}
]
// .map(item => {
//   return { 
//     id: 'SAS-' + Math.round(Math.random() * 100000).toString(),
//     ...item
//   }
// })

import { sleep } from '@/core/utilities/time'
    
export const getExperts = async () => {
  // ! fake delay
  await sleep(1000)

  return data.map(item => {
    return {
      ...item,
      desiredRoles: item.desiredRoles.split(';').map(x => x.trim()),
      locations: item.locations.split(';').map(x => x.trim()),
      skillIndustryOthers: item.skillIndustryOthers.split(';').map(x => x.trim()),
      hours: item.hoursMin !== item.hoursMax ? `${item.hoursMin} - ${item.hoursMax}` : item.hoursMin
    }
  })
}

export interface IExpert {
    id: string
  , startDate: string
  , hoursMin: string
  , hoursMax: string
  , rate: string
  , locations: string[]
  , specialism: string
  , level: string
  , desiredRoles: string[]
  , skillDataManagement: string
  , skillSasDI: string
  , skillSasVA: string
  , skillSasEG: string
  , skillSasDeveloper: string
  , skillETL: string
  , skillOpenSource: string
  , skillIndustryFinance: string
  , skillIndustryGovernment: string
  , skillIndustryOthers: string[]


  , hours: string
}


export const fieldsMapping = [
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
    caption: 'Locaties'
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
    caption: 'Gewenste rol'
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