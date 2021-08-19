const defaultOptions = {
  grid: {
    top: 0
  }
}
export default class Config {
  constructor (option) {
    this.config = Object.assign(defaultOptions, option)
  }
}
