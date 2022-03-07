let Vue
class Store {
    constructor(options) {
        this.s = new Vue({
            data() {
                return {
                    state: options.state
                }
            }
        })

        let getters = options.getters
        this.getters = {}

        Object.keys(getters).forEach(key => {
            Object.defineProperty(this.getters, key, {
                get:() =>  {
                    return getters[key](this.state)
                }
            })
        })
    }

    get state() {
        return this.s.state
    }
}

const install = (_Vue) => {
    Vue = _Vue

    Vue.mixin({
        beforeCreate() {
            console.log('beforeCreate')
            if (this.$options && this.$options.store) { // 跟
                this.$store = this.$options.store
            } else { // 子实例
                console.log(this.$parent)
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })
}

export default {
    install,
    Store
}