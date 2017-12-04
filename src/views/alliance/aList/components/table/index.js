import {goods as ajax} from 'services'
export default {
    props: {
        list: Array
    },
    data() {
        return {
            rowLink: [
                {
                    name: '编辑',
                    action: 'edit',
                    type: 'primary'
                },
                {
                    name: '查看属下门店',
                    action: 'check',
                    type: 'danger'
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