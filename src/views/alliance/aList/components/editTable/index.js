import { cloneDeep } from 'lodash'
export default {
    props: {
        title: String,
        show: Boolean,
        form: Array
    },
    data() {
        return {
        }
    },
    mounted() {

    },
    methods: {
        // 返回
        close() {
            this.$emit('close')
        },
    }
}