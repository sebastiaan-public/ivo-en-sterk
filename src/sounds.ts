import { Howl } from 'howler'

const sounds = {
  'fail': new Howl({
    src: '/dennis_nedry_ahahah.mp3',
    loop:true
  }),
  'success': new Howl({
    src: '/jee.mp3',
    loop:true
  })
}

export const playSuccess = () => {
  sounds['success'].play()
}

export const playFail = () => {
  sounds['fail'].play()
}

export const stopFail = () => {
  sounds['fail'].stop()
}