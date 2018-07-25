const HomePageAndroid = {
    welcomeText() {
        return element(by.id('welcome'))
    },
    helloButton() {
        return element(by.id('hello_button'))
    },
    worldButton() {
        return element(by.id('world_button'))
    }
}

export default HomePageAndroid
