import { menuList } from '../../data/menu.js'
import { mapGetters, mapActions } from 'vuex'
import { auth as ajax } from 'services'

export default {
    data() {
        return {
            sysName: '后台管理系统',
            menuList: []
        }
    },
    mounted() {
        this.menuList = menuList
        this.saveMenuList(this.menuList)
        this.getAccount()
    },
    methods: {
        ...mapActions([
            'saveMenuList',
            'removeAuth',
            'setAccount'
        ]),
        getAccount() {
            ajax.getAccount().then((result) => {
                this.setAccount(result)
                console.log(result)
            })
        },
        // 退出登录
        logOut() {
            this.$confirm('确定退出吗？', '提示', { type: 'warning' }).then(() => {
                this.$message({
                    message: '退出登录成功',
                    type: 'success'
                })
                this.removeAuth()
                this.$router.push('/login')
            }).catch(() => {

            })
        }
    }
}