import wepy from 'wepy';

export default class StoreMixin extends wepy.mixin {
  data = {
    store: null
  }
  onLoad(){
    this.store = this.$parent.globalData
  }
  setStore(key, value){
    this.$parent.globalData[key] = value
  }
}
