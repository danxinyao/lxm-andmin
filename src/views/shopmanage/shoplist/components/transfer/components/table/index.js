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
                    name: '查看',
                    action: 'edit',
                    type: 'danger'
                },
                {
                    name: '转让',
                    action: 'transfer',
                    type: 'primary',
                },  
                {
                    name: '转让记录',
                    action: 'transferDetail',
                    type: 'danger'
                },                                                              
            ]
        }
    },
    methods: {
        // edit(row, action) {
        //     this.$emit(action, row)
        // },
        // transfer(row, action) {
        //     this.$emit(action, row)
        // }, 
        // transferDetail(row, action) {
        //     this.$emit(action, row)
        // },                
        // selectChange(val) {
        //     this.$emit('select-change', val)
        // }
    }
}