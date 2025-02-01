type Status =
  | 'unknown' // the feature is supported, and the icon can be added, but it is not possible to determine if the icon has already been added
  | 'missed' // the icon has not been added to the home screen.
  | 'added' // the icon has already been added to the home screen
  | 'unsupported' // the feature is not supported, and it is not possible to add the icon to the home screen,

type StatusCallback = (status: Status) => void

interface WebApp {
  checkHomeScreenStatus: (callback: StatusCallback) => void
  addToHomeScreen: () => void
  isFullscreen: boolean
}
