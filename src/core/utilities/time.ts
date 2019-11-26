export function sleep(ms: number): Promise<any> {
  return new Promise((resolve: any) => setTimeout(resolve, ms))
}

// // TODO replace with moment.js?
// export function timeFromSeconds(seconds: number): string {
//   // Hours, minutes and seconds
//   const hrs = ~~(seconds / 3600)
//   const mins = ~~((seconds % 3600) / 60)
//   const secs = seconds % 60

//   // Output like "1:01" or "4:03:59" or "123:03:59"
//   let time = ''

//   if (hrs > 0) {
//     time += '' + hrs + ':' + (mins < 10 ? '0' : '')
//   }

//   time += '' + mins + ':' + (secs < 10 ? '0' : '')
//   time += '' + secs
//   return time
// }

// export function todayString(): string {
//   return new Date().toISOString().split('T')[0]
// }
