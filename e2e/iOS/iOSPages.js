import HomePageIOS from './HomePageIOS'
import HelloPageIOS from "./HelloPageIOS"
import WorldPageIOS from "./WorldPageIOS"

const iOSPages = {
    home() {
        return HomePageIOS
    },
    hello() {
        return HelloPageIOS
    },
    world() {
        return WorldPageIOS
    }
}

export default iOSPages