class baseRequest {
  Get(url, data) {
    return this.requestAll(url, data, 'GET')
  }
  Post(url, data) {
    return this.requestAll(url, data, 'POST')
  }
  requestAll(url, data, method) {
    var baseUrl = "http://localhost:61731"
    var defaultHeader = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + wx.getStorageSync("token")
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseUrl + url,
        data: data,
        header: defaultHeader,
        method: method,
        success: (res => {
          if (res.statusCode === 200) {
            //200: 服务端业务处理正常结束
            resolve(res)
          }
          else {
            reject(res)
          }
        }),
        fail: (res => {
          reject(res)
        })
      })
    })
  }
}
export default baseRequest