const isBrowser = typeof window !== `undefined`

export const setHideStatus = () => (window.localStorage.closeAnnouncement = JSON.stringify(1))

export const ensureCloseStatus = () =>{
  if (!isBrowser) return false

  if(!window.localStorage.closeAnnouncement){
    window.localStorage.closeAnnouncement = JSON.stringify(0)
  }
}


export const checkWindow = () => window.localStorage.closeAnnouncement ? JSON.parse(window.localStorage.closeAnnouncement) : {}

const checkShowStatus = () => isBrowser && checkWindow()!==1

export const getAnnouncementStatus = () => {
  ensureCloseStatus()
  return checkShowStatus()
}
