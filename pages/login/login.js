Page({
  data: {
    srv: '',
    code: 1,
    userInfo: {
      username: '',
      password: '',
    }
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onInputChange(e) {
    const nickName = e.detail.value
    const {
      avatarUrl
    } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onUsernameInput(e) {
    this.setData({
      'userInfo.username': e.detail.value
    });
  },

  onPasswordInput(e) {
    this.setData({
      'userInfo.password': e.detail.value
    });
  },
  onLogin(e) {
    wx.login({
      success: (res)=> {
        console.log("this is code:", res.code)
        this.setData({
          code:res.code
        })
      }
    })
    console.log(
      this.data.userInfo.username,
      this.data.userInfo.password,
    )
    const {
      username,
      password
    } = this.data.userInfo;
    // 确保用户名和密码不为空
    if (!username || !password) {
      wx.showToast({
        title: 'Please enter both username and password',
        icon: 'none'
      })
      return;
    }
    console.log("req")
    wx.request({
      url: "http://localhost:8081/login",
      method: 'POST',
      data: {
        user_name: username,
        password: password
      },
      header: {
        'content-type': 'application/json' // 根据后端要求设置
      },
      success:(res) => {
        // 登录成功
        console.log('登录结果:', res);
      },
      fail:(err) => {
        // 登录失败
        console.error('登录失败:', err);
        wx.showToast({
          title: 'Login failed',
          icon: 'none'
        })
      }
    })
  }
})