import * as  echarts from 'echarts'
import Config from './config'
console.log(echarts)
export default class EchartsStyle {
    /**
     * create new echarts instance
     */
  constructor (options) {
    this.config = new Config(options)
    
  }
}
