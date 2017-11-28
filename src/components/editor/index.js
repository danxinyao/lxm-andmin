import WangEditor from 'wangeditor'
import { qiniuCDN } from '../../services/fetch/config'
import { cdn, getResourceKey } from '../../services/modules/qiniu'
import { mapGetters, mapActions } from 'vuex'
import { qiniu as ajax } from 'services'
export default {
    name: 'PgEditor',
    props: ['initContent'],
    data() {
        return {
            content: '',
            zIndex: 100,
            editor: ''
        }
    },
    computed: {
        ...mapGetters([
            'qiniuUploadToken'
        ])
    },
    watch: {
        qiniuUploadToken() {
            this.getUploadToken()
        }
    },
    methods: {
        ...mapActions([
            'setQiniuUploadToken'
        ]),
        // 获取七牛上传token
        getUploadToken() {
            if (this.qiniuUploadToken == '') {
                ajax.getUploadToken().then((result) => {
                    this.setQiniuUploadToken(result)
                    console.log(result)
                })
            }
        },
        /**
         * 创建editor
         */
        createEditor() {
            const editor = new WangEditor(this.$el)
            editor.customConfig.menus = [
                'head',  // 标题
                'bold',  // 粗体
                'italic',  // 斜体
                'underline',  // 下划线
                'strikeThrough',  // 删除线
                'foreColor',  // 文字颜色
                'backColor',  // 背景颜色
                'link',  // 插入链接
                'list',  // 列表
                'justify',  // 对齐方式
                'quote',  // 引用
                'image',  // 插入图片
                'table',  // 表格
                'video',  // 插入视频
                'code',  // 插入代码
                'undo',  // 撤销
                'redo'  // 重复
            ]
            editor.customConfig.debug = false
            editor.customConfig.customUploadImg = (files, insert) => {
                let postFiles = Array.prototype.slice.call(files)
                if (postFiles.length === 0)
                    return
                postFiles.forEach((file) => {
                    ajax.uploadImg(file).then((result) => {
                        insert(qiniuCDN + result)
                    }).catch((error) => {
                        // 上传错误时重新请求上传token
                        this.setQiniuUploadToken('')
                        this.getUploadToken()

                        this.$message.error('图片上传失败')
                    })
                })
            }
            editor.customConfig.onchange = (html) => {
                this.formatContent(html)
            }
            editor.create()
            // editor.config.printLog = false
            // editor.config.uploadImgUrl = cdn
            // editor.config.uploadParams = {
            //     'key': getResourceKey(null),
            //     'token': this.qiniuUploadToken
            // }
            // const that = this
            // editor.config.uploadImgFns.onload = function(result, xhr) {
            //     const res = JSON.parse(result)
            //     this.command(null, 'insertHtml', '<img src="'+ that.util.hostUrl() + res.data +'" style="max-width: 100%;"/>')
            // }
            // editor.onchange = () => {
            //     this.formatContent(editor.$txt.html())
            // }
            // const editorNum = document.querySelectorAll('.wangEditor-container').length
            // editor.$editorContainer.css('z-index', this.zIndex - editorNum)
            // editor.create()
            this.editor = editor
        },
        /**
         * 获取content
         * @param content
         */
        formatContent(content) {
             this.content = content
             this.outputContent()
        },
         /**
         * 将content传递给父组件
         */
        outputContent() {
            this.$emit('input',this.content)
        },
        /**
         * 更新editor内容
         */
        updateEditor() {
            this.$nextTick(() => {
                if (this.initContent) {
                    this.editor.txt.html(this.initContent)
                } else {
                    this.editor.txt.html('')
                }
                this.formatContent()
            })
        },
    },
    watch: {
        /**
         * initContent有变动时,重新更新editor中的内容
         */
        initContent() {
            this.updateEditor()
        }
    },
    mounted() {
        this.createEditor()
        this.getUploadToken()
    }
}