const isBrowser = typeof window !== `undefined`

export const setHideStatus = () => (window.localStorage.announcement = JSON.stringify({hide:1}))

export const ensureCloseStatus = () =>{
  if (!isBrowser) return false

  if(!window.localStorage.announcement){
    window.localStorage.announcement = JSON.stringify({hide: 0})
  }
}

export const checkWindow = () => {
  if(!window.localStorage.announcement){
    ensureCloseStatus()
  }
  return window.localStorage.announcement? JSON.parse(window.localStorage.announcement): {}
}

export const getAnnouncementStatus = () => {
  return isBrowser && checkWindow().hide!==1
}
