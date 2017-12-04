import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import PgTransfer from './components/transfer/index.vue'
export default {
    components: {
        PgTable,
        PgEdit,
        PgTransfer
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
            showRransfer: false, // 是否显示转让
            ransferType: 1,//转让、转让记录
            // 操作区按钮
            operations: [
                {
                    name: '新增',
                    action: 'add',
                    type: 'primary'
                },
                {
                    name: '启用',
                    action: 'enable',
                    isConfirm: true,
                },
                {
                    name: '禁用',
                    action: 'disable',
                    isConfirm: true,
                },
                {
                    name: '导出',
                    action: 'add',
                    type: 'primary'
                },
                {
                    name: '导入',
                    action: 'enable',
                    isConfirm: true,
                },
                {
                    name: '转让记录',
                    action: 'disable',
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
                        label: '店铺名称',
                        model: 'uname'
                    },
                    {
                        type: 'input',
                        label: '店铺编码',
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
                        label: '客户经理',
                        model: 'checker',
                    },
                    {
                        type: 'select',
                        label: '区域',
                        text: 'text',
                        value: 'value',
                        model: 'status',
                        options: [
                            {
                                value: 0,
                                text: '不限'
                            },
                            {
                                value: 1,
                                text: '启用'
                            }
                        ]
                    },  
                    {
                        type: 'select',
                        label: '店铺类型',
                        text: 'text',
                        value: 'value',
                        model: 'status',
                        options: [
                            {
                                value: 0,
                                text: '不限'
                            },
                            {
                                value: 1,
                                text: '直营'
                            },
                            {
                                value: 2,
                                text: '加盟'
                            },
                            {
                                value: 3,
                                text: '联营'
                            },                            
                        ]
                    },  
                    {
                        type: 'select',
                        label: '所属加盟商',
                        text: 'text',
                        value: 'value',
                        model: 'status',
                        options: [
                            {
                                value: 0,
                                text: '不限'
                            },
                            {
                                value: 1,
                                text: '启用'
                            }
                        ]
                    }, 
                    {
                        type: 'select',
                        label: '门店等级',
                        text: 'text',
                        value: 'value',
                        model: 'status',
                        options: [
                            {
                                value: 0,
                                text: '不限'
                            },
                            {
                                value: 1,
                                text: '启用'
                            }
                        ]
                    }, 
                    {
                        type: 'input',
                        label: '招商专员',
                        model: 'tuijianren'                            
                    },  
                    {
                        type: 'select',
                        label: '门店商圈',
                        text: 'text',
                        value: 'value',
                        model: 'status',
                        options: [
                            {
                                value: 0,
                                text: '不限'
                            },
                            {
                                value: 1,
                                text: '启用'
                            }
                        ]
                    }, 
                    {
                        type: 'select',
                        label: '门店形象',
                        text: 'text',
                        value: 'value',
                        model: 'status',
                        options: [
                            {
                                value: 0,
                                text: '不限'
                            },
                            {
                                value: 1,
                                text: '启用'
                            }
                        ]
                    },                                                                                                                    
                    {
                        type: 'timeRange',
                        label: '开店日期',
                        model: 'time',
                        start: 'beginTime',
                        end: 'endTime'                            
                    }, 
                    {
                        type: 'timeRange',
                        label: '改造日期',
                        model: 'time',
                        start: 'beginTime',
                        end: 'endTime'                            
                    }, 
                    {
                        type: 'select',
                        label: '是否需要开票',
                        text: 'text',
                        value: 'value',
                        model: 'status',
                        options: [
                            {
                                value: 0,
                                text: '不限'
                            },
                            {
                                value: 1,
                                text: '启用'
                            }
                        ]
                    }, 
                    {
                        type: 'select',
                        label: '发票类型',
                        text: 'text',
                        value: 'value',
                        model: 'status',
                        options: [
                            {
                                value: 0,
                                text: '不限'
                            },
                            {
                                value: 1,
                                text: '启用'
                            }
                        ]
                    }, 
                    {
                        type: 'input',
                        label: '修改人',
                        model: 'tuijianren'                            
                    }, 
                    {
                        type: 'timeRange',
                        label: '修改时间',
                        model: 'time',
                        start: 'beginTime',
                        end: 'endTime'                            
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
                                text: '禁用'
                            },
                            {
                                value: 1,
                                text: '启用'
                            }
                        ]
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
        // 转让
        transfer(item) {
            console.log('转让')
            this.showRransfer= true
            this.ransferType = 1
            this.isEdit = true
            this.editTitle = '转让'
            this.editForm = item
        }, 
        // 转让记录
        transferDetail(item) {
            console.log('转让记录')
            this.showRransfer= true
            this.ransferType = 2
            this.isEdit = true
            this.editTitle = '转让记录'
            this.editForm = item
        },               
        // 新增
        add() {
            this.showEdit = true
            this.isEdit = false
            this.editTitle = '新增'
            this.editForm = {}
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
            this.showRransfer= false
        }
    }
}