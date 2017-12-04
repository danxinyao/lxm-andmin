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
                num: '',
                name: '',
                rank: '',
                tuozhanzhuanyuan: '',
                lianxiren: '',
                phone: '',
                area: '',
                zhengjianleixing: '',
                zhengjianhaoma: '',
                list: [],
                note: ''
            },
            ranks: [
                {
                    label: '免费',
                    value: '1'
                },
                {
                    label: '收费',
                    value: '2'
                }
            ],
            types: [
                {
                    label: '身份证',
                    value: '1'
                },
                {
                    label: '其他',
                    value: '2'
                }
            ],
            uploadFiles: '',
            content: '', // 编辑器初始显示值
            // 输入验证
            rules: {
                num: [
                    { required: true, message: '请输入服务编码', trigger: 'blur' },
                ],
                name: [
                    { required: true, message: '请输入服务名称', trigger: 'blur' },
                ],
                price: [
                    { required: true, message: '请填写价位', trigger: 'blur' }
                ],
                tiyanprice: [
                    { required: true, message: '请填写体验推广价', trigger: 'blur' }
                ],
            },
            isShowPop: false,
            card: {
                khm: '',
                khh: '',
                yhkh: ''
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
        // 增加商品
        addGoods() {
            //this.$emit('close')
        },
        // 删除卡号
        del() {

        },
        // 设为默认
        setDefault() {

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
        },
        showPop() {
            this.isShowPop = true
        },
        hidePop() {
            this.isShowPop = false
        },
    }
}