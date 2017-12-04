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
                checker: '',
                editUser: '',
                editTime: '',
                status: '',
                note: ''
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
                    action: 'importData'
                },
                {
                    name: '导出',
                    action: 'exportData'
                },
            ],
            customerList: [
                {
                    id: 1,
                    teamname: '天之蓝',
                    name: '66666',
                    content: '内容一'
                },
                {
                    id: 2,
                    teamname: '地之蓝',
                    name: '66666',
                    content: '内容二'
                },
                {
                    id: 3,
                    teamname: '五粮液',
                    name: '66666',
                    content: '内容三'
                },
                {
                    id: 1,
                    teamname: '天之蓝',
                    name: '66666',
                    content: '内容一'
                },
                {
                    id: 2,
                    teamname: '地之蓝',
                    name: '66666',
                    content: '内容二'
                },
                {
                    id: 3,
                    teamname: '五粮液',
                    name: '66666',
                    content: '内容三'
                },
                {
                    id: 1,
                    teamname: '天之蓝',
                    name: '66666',
                    content: '内容一'
                },
                {
                    id: 2,
                    teamname: '地之蓝',
                    name: '66666',
                    content: '内容二'
                },
                {
                    id: 3,
                    teamname: '五粮液',
                    name: '66666',
                    content: '内容三'
                }
            ],
            data2: [
                {
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                },
                {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                },
                {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
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
                        label: '分类名称',
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
                        label: '上级分类名称',
                        model: 'checker',
                    },
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
        // 导入
        importData() {
            console.log('导入')
        },
        // 导出
        exportData() {
            console.log('导出')
        },
        // 删除
        del() {
            console.log('删除')
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