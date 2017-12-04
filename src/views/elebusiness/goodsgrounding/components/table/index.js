import {goods as ajax} from 'services'
export default {
    props: {
        list: Array
    },
    data() {
        return {
            rowLink: [
                {
                    name: '配置电商资料',
                    action: 'edit',
                    type: 'primary'
                }
            ]
        }
    },
    methods: {
        handleClick(row, action) {
            this.$emit(action, row)
        },
        selectChange(val) {
            this.$emit('select-change', val)
        }
    }
}