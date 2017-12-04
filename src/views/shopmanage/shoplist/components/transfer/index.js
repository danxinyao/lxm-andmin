import PgTable from './components/table/index.vue'
import { cloneDeep } from 'lodash'
export default {
    components: {
        PgTable,
    },    
    props: {
        title: String,
        show: Boolean,
        type: Number,
        isEdit: Boolean,
        editForm: Object
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
            form: {},
            // 初始表单
            initForm: {
                teamname: '',
                name: '',
                content: '',
                active: ''
            },
            actives: [
                {
                    label: 'aaa',
                    value: '1'
                },
                {
                    label: 'bbb',
                    value: '2'
                }
            ],
            actives1: [
                {
                    label: '中国农业银行深圳支行 刘二 3856 5602 0369 85',
                    value: '1'
                },
                {
                    label: '深圳支行 刘二 3856 5602 0369 85',
                    value: '2'
                }
            ],            
            uploadFiles: '',
            content: '', // 编辑器初始显示值
            // 输入验证
            rules: {
                teamname: [
                    { required: true, message: '请输入所属团队', trigger: 'blur' },
                ],
                name: [
                    { required: true, message: '请输入分销客户名称', trigger: 'blur' },
                ],
                active: [
                    { required: true, message: '请填写完成', trigger: 'number' }
                ]
            },
            // 操作区按钮
            operations: [
                {
                    name: '导出',
                    action: 'add',
                    type: 'primary',
                    isConfirm: true,
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
                        type: 'input',
                        label: '店铺名称',
                        model: 'uname'
                    },
                    {
                        type: 'input',
                        label: '原加盟商',
                        model: 'uname'
                    },                                       
                ]
            }
        },
        moreQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '转入后盟商',
                        model: 'checker',
                    },
                    {
                        type: 'input',
                        label: '操作人',
                        model: 'checker',
                    }, 
                    {
                        type: 'timeRange',
                        label: '操作时间',
                        model: 'time',
                        start: 'beginTime',
                        end: 'endTime'                            
                    },                                           
                ]
            }
        }        
    },    
    watch: {
        editForm(editForm) {
            this.setForm(this.editForm)
        }
    },
    mounted() {
        if (!this.isEdit) {
            this.resetForm()
        }
    },
    created() {
        this.setForm(this.editForm)
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
        resetForm() {
            this.form = cloneDeep(this.initForm)
            this.content = ''
        },
        setForm(editForm) {
            if (this.isEdit) {
                this.form = cloneDeep(this.editForm)
                this.content = this.form.content // 初始化编辑器内容
            }
            else {
                this.resetForm()
            }

            this.$nextTick(() => {
                if (this.$refs.contentEditor) {
                    this.$refs.contentEditor.updateEditor()
                }
            })
        },
        // 导出
        add() {
            console.log('导出')
        },        
        // 返回
        close() {
            this.$emit('close')
        },
        // 保存
        save() {
            // 判断编辑器内容是否修改
            if (this.form.content == undefined) {
                this.form.content = this.content
            }
            this.$refs.form.validate((valid) => {
                if (valid) {
                    console.log(this.form)
                    console.log('success')
                    // 验证通过
                }
            })
        },
        // 图片上传
        uploadSuccess(files) {
            console.log(files)
        }
    }
}