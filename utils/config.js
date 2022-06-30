export default {
    api: function () {
        let schema = 'http'
        let url = ''

        // #ifndef MP-WEIXIN
        url = "192.168.50.4:8801"
        // #endif

        // #ifdef MP-WEIXIN
        let version = wx.getAccountInfoSync().miniProgram.envVersion;
        switch (version) {
            case "develop": //开发预览版
                url = "192.168.50.4:8801"
                break;
            case 'trial': //体验版
                url = "192.168.50.4:8801"
                break;
            case 'release': //正式版
                url = "192.168.50.4:8801"
                break;
            default: //未知,默认调用正式版
                url = "192.168.50.4:8801"
                break;
        }
        // #endif

        return schema + '://' + url + '/'
    }
}
