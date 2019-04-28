import wepy from 'wepy'

// const baseUrl = 'http://localhost:3000'
const baseUrl = 'https://api.koinobori.design'

export default function (method, url, data, loading) {
  if (loading) wepy.showLoading({title: '加载中...'})
  function errorToast(){
    if (loading){
      wepy.showToast({
        title:"加载失败",
        icon: 'warn',
        duration: 1500
      })
    }
  }
  return new Promise((resolve, reject)=>{
    wepy.request({
      url: baseUrl + url,
      method: method,
      data: data,
      header:{
        'Content-Type': 'application/json'
      },
      success: function (res) {
        wepy.hideLoading()
        if (res.data.code === 1){
          resolve(res.data.data)
        } else {
          errorToast()
          reject(res.data.data)
        }
      },
      fail: function () {
        wepy.hideLoading()
        errorToast()
        reject('Error')
      }
    })
  })
}
