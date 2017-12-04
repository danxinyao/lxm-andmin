import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
export default {
    components: {
        PgTable,
        PgEdit
    },
    data() {
        return {
            isShowMoreQuery: false, // 搜索区是否显示更多
            // 搜索条件
            query: {
                num: '',
                name: '',
                editUser: '',
                editTime: '',
                status: '',
                note: '',
            },
            page: 1, // 当前页码
            pageSize: 15, // 每页条数
            total: 40, // 总条数
            selected: [],
            editTitle: '编辑', // 新增/修改标题
            editForm: {}, // 新增/修改数据
            isEdit: false, // 是否新增
            showEdit: false, // 是否显示新增弹出窗口
            // 操作区按钮
            operations: [
                {
                    name: '新增',
                    action: 'add',
                    type: 'primary'
                },
                {
                    name: '启用',
                    action: 'enable'
                },
                {
                    name: '禁用',
                    action: 'disable'
                },
                {
                    name: '导入',
                    action: 'importDate'
                },
                {
                    name: '导出',
                    action: 'exportData'
                }
            ],
            customerList: [
                {
                    num: '01',
                    name: '天之蓝',
                    editTime: '',
                    editUser: '',
                    status: '已启用',
                    note: '',
                },
            ]
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '编码',
                        model: 'num'
                    },
                    {
                        type: 'input',
                        label: '肌肤名称',
                        model: 'name'
                    }
                ]
            }
        },
        moreQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '修改人',
                        model: 'editUser'
                    },
                    {
                        type: 'time',
                        label: '修改时间',
                        model: 'editTime'
                    },
                    {
                        type: 'select',
                        label: '状态',
                        text: 'text',
                        value: 'value',
                        model: 'status',
                        options: [
                            {
                                value: -1,
                                text: '不限'
                            },
                            {
                                value: 0,
                                text: '禁用'
                            },
                            {
                                value: 1,
                                text: '启用'
                            }
                        ]
                    },
                    {
                        type: 'input',
                        label: '备注',
                        model: 'note'
                    },
                ]
            }
        }
    },
    methods: {
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.page = 1
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
            console.log(selections)
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.page = current
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
        },
        // 编辑
        edit(item) {
            this.showEdit = true
            this.isEdit = true
            this.editTitle = '编辑'
            this.editForm = item
        },
        // 新增
        add() {
            this.showEdit = true
            this.isEdit = false
            this.editTitle = '新增'
            this.editForm = {}
        },
        //导入
        importDate() {
            console.log('导入')
        },
        // 导出
        exportData() {
            console.log('导出')
        },
        // 启用
        enable() {
            console.log('启用')
        },
        // 禁用
        disable() {
            console.log('禁用')
        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        }
    }
}