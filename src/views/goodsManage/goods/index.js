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
                kh: '',
                name: '',
                code: '',
                fl: '',
                xgr: '',
                xgsj: '',
                zt: '',
                pp: '',
                xl: '',
                jj: '',
                zt: '',
                nf: ''
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
                    action: 'import'
                },
                {
                    name: '导出',
                    action: 'export'
                },
                {
                    name: '导入国际码',
                    action: 'importInternationalCode'
                },
                {
                    name: '淘汰',
                    ction: 'del',
                    isConfirm: true,
                    type: 'danger'
                }
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
            ]
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'time',
                        label: '款号',
                        model: 'kh'
                    },
                    {
                        type: 'input',
                        label: '商品名称',
                        model: 'name'
                    },
                    {
                        type: 'input',
                        label: '商品编码',
                        model: 'code'
                    }
                ]
            }
        },
        moreQuery: {
            get() {
                return [
                    {
                        type: 'select',
                        label: '商品分类',
                        model: 'fl',
                        text: 'text',
                        value: 'value',
                        options: [
                            {
                                value: 0,
                                text: '不限'
                            }
                        ]
                    },
                    {
                        type: 'input',
                        label: '修改人',
                        model: 'xgr'                            
                    },
                    {
                        type: 'time',
                        label: '修改时间',
                        model: 'xgsj'
                    },
                    {
                        type: 'select',
                        label: '状态',
                        text: 'text',
                        value: 'value',
                        model: 'zt',
                        options: [
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
                        type: 'select',
                        label: '状态',
                        text: 'text',
                        value: 'value',
                        model: 'pp',
                        options: [
                            {
                                value: 0,
                                text: '不限'
                            }
                        ]
                    },
                    {
                        type: 'select',
                        label: '系列',
                        text: 'text',
                        value: 'value',
                        model: 'xl',
                        options: [
                            {
                                value: 0,
                                text: '不限'
                            }
                        ]
                    },
                    {
                        type: 'select',
                        label: '季节',
                        text: 'text',
                        value: 'value',
                        model: 'jj',
                        options: [
                            {
                                value: 0,
                                text: '不限'
                            }
                        ]
                    },
                    {
                        type: 'select',
                        label: '主题',
                        text: 'text',
                        value: 'value',
                        model: 'zt',
                        options: [
                            {
                                value: 0,
                                text: '不限'
                            }
                        ]
                    },
                    {
                        type: 'select',
                        label: '年份',
                        text: 'text',
                        value: 'value',
                        model: 'nf',
                        options: [
                            {
                                value: 0,
                                text: '不限'
                            }
                        ]
                    }
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
        // 淘汰
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
        // 导入
        importGoods() {

        },
        // 导出
        exportGoods() {

        },
        // 导入国际码
        importInternationalCode() {

        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        }
    }
}