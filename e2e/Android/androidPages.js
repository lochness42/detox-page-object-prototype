import HomePageAndroid from './HomePageAndroid'
import HelloPageAndroid from "./HelloPageAndroid"
import WorldPageAndroid from "./WorldPageAndroid";

const AndroidPages = {
    home() {
        return HomePageAndroid
    },
    hello() {
        return HelloPageAndroid
    },
    world() {
        return WorldPageAndroid
    }
}

export default AndroidPages