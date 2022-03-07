import ybutton from './yButton'

const requireComponent = require.context('./', true, /\.vue$/)


const install = (Vue) => {
    if (install.installed) return
    install.install

    requireComponent.keys().forEach(fileName => {
        const config = requireComponent(fileName)
        const componentName = config.default.name
        Vue.component(componentName, config.default)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export const yButton = {
    install: (Vue) => {
        Vue.component('yButton', ybutton)
    }
}

export default {
    install
}