import { cloneDeep } from 'lodash'
export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: Object
    },
    data() {
        return {
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