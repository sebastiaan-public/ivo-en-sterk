
export function addMetaTag(name: string, content: string) {
  let meta = document.createElement('meta')
  meta.setAttribute('name', name)
  meta.setAttribute('content', content)
  document.getElementsByTagName('head')[0].appendChild(meta)
  .appendChild
}
