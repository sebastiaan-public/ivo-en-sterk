export const themeColors = {

  // * own styling
  menu: parseColor(`${process.env.VUE_APP_COLOR_MENU}`),
  menuBackground: parseColor(`${process.env.VUE_APP_COLOR_MENU_BACKGROUND}`),
  action: parseColor(`${process.env.VUE_APP_COLOR_ACTION}`),
  text: parseColor(`${process.env.VUE_APP_COLOR_TEXT}`),

  // * for vuetify
  primary: parseColor(`${process.env.VUE_APP_COLOR_PRIMARY}`),// * is used for menu accents
  secondary: parseColor(`${process.env.VUE_APP_COLOR_SECONDARY}`),     // * used for what ?
  accent: parseColor(`${process.env.VUE_APP_COLOR_ACCENT}`),        // * used for what ?
  error: parseColor(`${process.env.VUE_APP_COLOR_ACTION}`),
  info: parseColor(`${process.env.VUE_APP_COLOR_PRIMARY}`),
  success: parseColor(`${process.env.VUE_APP_COLOR_PRIMARY}`),
  warning: parseColor(`${process.env.VUE_APP_COLOR_SECONDARY}`)
}


export const darkThemeColors = {

  // * own styling
  menu: '#FFF',
  menuBackground: parseColor(`${process.env.VUE_APP_COLOR_MENU}`),
  action: parseColor(`${process.env.VUE_APP_COLOR_ACTION}`),
  text: parseColor(`${process.env.VUE_APP_COLOR_TEXT}`),

  // * for vuetify
  primary: parseColor(`${process.env.VUE_APP_COLOR_PRIMARY}`),// * is used for menu accents
  secondary: parseColor(`${process.env.VUE_APP_COLOR_SECONDARY}`),     // * used for what ?
  accent: parseColor(`${process.env.VUE_APP_COLOR_ACCENT}`),        // * used for what ?
  error: parseColor(`${process.env.VUE_APP_COLOR_ACTION}`),
  info: parseColor(`${process.env.VUE_APP_COLOR_PRIMARY}`),
  success: parseColor(`${process.env.VUE_APP_COLOR_PRIMARY}`),
  warning: parseColor(`${process.env.VUE_APP_COLOR_SECONDARY}`)
}


function parseColor(color: string): string {
  return color
}

// ! for material design colors - TODO:
// function parseColor(color: string) {

//   if (color.startsWith('#')) {
//     return color
//   }

//   const parts = color.split('.')
//   if (! (parts[0] === 'colors') ) {
//     throw Error(`Unknown color: ${parts[0]}`)
//   }

//   else if (parts.length === 2) {
//     const color = parts[1] as 'red' // cast as element of Vuetify.Colors (e.g. 'red') to shut up compiler
//     return colors[color]
//   }

//   else if (parts.length === 3) {
//     const color = parts[1] as 'red' // cast as element of Vuetify.Colors (e.g. 'red') to shut up compiler
//     const baseColor = parts[2] as 'base' // cast as element of Vuetify.BaseColors (e.g. 'base') to shut up compiler
//     return colors[color][baseColor]
//   }

//   else {
//     throw Error(`Too many color parts: ${parts}`)
//   }
// }