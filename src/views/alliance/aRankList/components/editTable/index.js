import { cloneDeep } from 'lodash'
export default {
    props: {
        title: String,
        show: Boolean,
        form: Array
    },
    data() {
        return {
            query: {
                num: '',
                name: ''
            },
            list:[],
            page: 1, // 当前页码
            pageSize: 15, // 每页条数
            total: 40, // 总条数
            // 操作区按钮
            operations: [
                {
                    name: '导入',
                    action: 'importData'
                },
                {
                    name: '导出',
                    action: 'exportData'
                },
            ],
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '货号',
                        model: 'num'
                    },
                    {
                        type: 'input',
                        label: '名称',
                        model: 'name'
                    }
                ]
            }
        },
    },
    mounted() {

    },
    methods: {
        // 搜索按钮
        search() {
            this.page = 1
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.page = current
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
        },
        // 返回
        close() {
            this.$emit('close')
        },
        // 保存
        save() {
        },
        // 导入
        importData() {
            console.log('导入')
        },
        // 导出
        exportData() {
            console.log('导出')
        },
    }
}