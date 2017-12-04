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
                    name: '设置商品等级价',
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