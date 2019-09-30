Page({
  data: {
      username:'',
      email:'',
      password:''
  },
  username(e) {
    this.setData({
      username: e.detail.value
    })
  },
  email(e) {
    this.setData({
      email: e.detail.value
    })
  },
  password(e){
    this.setData({
      password: e.detail.value
    })
  },
  login(){
    wx.request({
      method:'post',
      data:this.data,
      url: 'https://totrip.xin/api/login',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        if (res.data.code === 200) {
          wx.showToast({
            title: res.data.message,
            duration: 3000
          });
          wx.switchTab({
            url: '/pages/index/index'
          })
        }else{
          wx.showToast({
            title: res.data.message,
            icon:"error",
            duration: 3000
          });
        }
      }
    })
  },
  register(){
    wx.request({
      method: 'post',
      url: 'https://totrip.xin/api/register',
      data:this.data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        if(res.data.code===200){
          wx.showToast({
            title: res.data.message,
            icon: 'success',
            duration: 3000
          });
        }
      }
    })
  }
});