import androidPages from './Android/androidPages'
import iOSPages from './iOS/iOSPages'

const pageStore = {
    platform: "",

    setup: function (config) {
        this.platform = config
    },
    page: function () {
        if (this.platform === 'ios') {
            return iOSPages
        } else {
            return androidPages
        }
    }
}

export const page = () => {
    return pageStore.page()
}

export default pageStore