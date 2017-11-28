import { qiniu as ajax } from 'services'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'PgImgUpload',
    props: {
        multiple: {
            type: Boolean,
            default: false,
        },
        accept: {
            type: String,
            default() {
                return '*'
            }
        },
        files: {
            type: Array,
            default() {
                return []
            }
        },
        tip: {
            type: String,
            default: ''
        },
        folderType: {
            type: String,
            default: '11'
        },
        isImgFile: {
            type: Boolean,
            default: true // true为图片 false为其他
        }
    },
    data() {
        return {
            fileList: [],
            isShowUpload: true
        }
    },
    computed: {
        ...mapGetters([
            'qiniuUploadToken'
        ])
    },
    watch: {
        files() {
            const tempFiles = []
            this.files.forEach((item) => {
                if (item != '' && item != null) {
                    tempFiles.push({
                        imgUrl: item,
                        isSuccess: true
                    })
                }
            })
            this.fileList = tempFiles
        },
        fileList() {
            if (!this.multiple && this.fileList.length > 0) {
                this.isShowUpload = false
            }
            else {
                this.isShowUpload = true
            }
        },
        qiniuUploadToken() {
            this.getUploadToken()
        }
    },
    mounted() {
        this.getUploadToken()
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
        handleClick() {
            this.$refs.input.click()
        },
        handleChange(e) {
            const files = e.target.files
            if (!files)
                return

            this.uploadFiles(files)
            this.$refs.input.value = null
        },
        uploadFiles(files) {
            let postFiles = Array.prototype.slice.call(files)
            if (postFiles.length === 0)
                return
            if (!this.multiple)
                postFiles = postFiles.slice(0, 1)

            postFiles.forEach(file => {
                this.upload(file)
            })
        },
        upload(file) {
            if (!this.isImgFile) {
                if (file.size / 1024 / 1024 > 10) {
                    this.$message.error(file.name + '超过10M的限制！')
                    return
                }
            }
            if (this.multiple) {
                this.fileList.push({
                    isSuccess: false,
                    imgUrl: file
                })
            }
            else {
                this.fileList = []
                this.fileList.push({
                    isSuccess: false,
                    imgUrl: file
                })
            }

            ajax.uploadImg(file, this.folderType).then((result) => {
                this.handleSuccess(result, file)
            }).catch((error) => {
                // 上传错误时重新请求上传token
                this.setQiniuUploadToken('')
                this.getUploadToken()

                this.$message.error('上传失败')
                this.fileList.forEach((item, index) => {
                    if (file == item.imgUrl) {
                        this.fileList.splice(index, 1)
                    }
                })
            })
        },
        handleSuccess(res, file) {
            const files = this.fileList
            const tempFiles = []
            files.forEach((item) => {
                if (item.isSuccess) {
                    tempFiles.push(item.imgUrl)
                }
                if (file == item.imgUrl) {
                    item.isSuccess = true
                    item.imgUrl = res
                    tempFiles.push(item.imgUrl)
                }
            })
            this.$emit('upload-success', this.multiple ? tempFiles : (tempFiles[0] ? tempFiles[0] : ''))
        },
        handleRemove(file) {
            this.fileList.splice(this.fileList.indexOf(file), 1)
            const tempFiles = []
            this.fileList.forEach((item) => {
                if (item.isSuccess) {
                    tempFiles.push(item.imgUrl)
                }
            })
            this.$emit('upload-success', this.multiple ? tempFiles : (tempFiles[0] ? tempFiles[0] : ''))
        }
    }
}