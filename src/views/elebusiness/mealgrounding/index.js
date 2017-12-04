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
                title: '',
                uname: '',
                checker: '',
                tuijianren: '',
                status: '',
                time: '',
                beginTime: '',
                endTime: ''
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
                    name: '上架',
                    action: 'enable',
                    isConfirm: true,
                    type: 'primary'
                },
                {
                    name: '下架',
                    action: 'disable',
                    isConfirm: true,
                    type: 'primary'
                },
                {
                    name: '导入电商资料',
                    action: 'leadingin',
                    isConfirm: true,
                },
                {
                    name: '导出电商资料',
                    action: 'leadingout',
                    isConfirm: true,
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
                        label: '款号',
                        model: 'uname'
                    },
                    {
                        type: 'input',
                        label: '套装名称',
                        model: 'uname'
                    }
                ]
            }
        },
        moreQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '商品编码',
                        model: 'checker',
                    },
                    {
                        type: 'input',
                        label: '商品款号',
                        model: 'checker',
                    },
                    {
                        type: 'input',
                        label: '商品名称',
                        model: 'checker',
                    },                    
                    {
                        type: 'select',
                        label: '状态',
                        text: 'text',
                        value: 'value',
                        model: 'status',
                        options: [
                            {
                                value: 0,
                                text: '上架'
                            },
                            {
                                value: 1,
                                text: '下架'
                            }
                        ]
                    },                    
                    {
                        type: 'input',
                        label: '修改人',
                        model: 'checker',
                    },                                          
                    {
                        type: 'timeRange',
                        label: '修改时间',
                        model: 'time',
                        start: 'beginTime',
                        end: 'endTime'                            
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
            console.log(this.query)
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
        // 上架
        enable() {
            console.log('上架')
        },
        // 下架
        disable() {
            console.log('下架')
        },
        // 导入
        leadingin() {
            console.log('导入')
        },
        // 导出
        leadingout() {
            console.log('导出')
        },        
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        }
    }
}