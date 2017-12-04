import { auth as ajax } from 'services'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            logining: false,
            form: {
                grant_type: 'password',
                username: 'erptest',
                password: '123456',
                scope: 'pc'
            },
            rules: {
                username: [
                    { 
                        required: true, 
                        message: '请输入账号', 
                        trigger: 'blur' 
                    }
                ],
                password: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }
                ]
            },
            checked: true
        }
    },
    mounted() {
        this.handleSubmit()
    },
    methods: {
        ...mapActions([
            'setAuth'
        ]),
        handleSubmit() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.logining = true
                    ajax.login(this.form).then((result) => {
                        if (result) {
                            this.logining = false
                            this.setAuth(result.access_token)
                            this.$message({
                                message: '登录成功',
                                type: 'success'
                            })

                            setTimeout(() => {
                                this.$router.push('/main')
                            }, 600)
                        }
                    }).catch((err) => {
                        this.logining = false
                        this.$message({
                            message: '账号或密码错误',
                            type: 'error'
                        })
                    })
                }
                else {
                    return false
                }
            })
        }
    }
}