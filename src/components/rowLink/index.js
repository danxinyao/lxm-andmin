import { mapGetters } from 'vuex'
import { isArray } from 'lodash'

export default {
    name: 'PgRowLink',
    props: {
        btns: {
            type: Array,
            default() {
                return []
            }
        },
        row: null // 当前行
    },
    computed: {
        ...mapGetters([
            'powers' 
        ]),
        limitList: {
            get() {
                if (isArray(this.powers)) {
                    return this.btns.filter((item) => this.powers.indexOf(item.name) > -1)
                }
                else {
                    return this.btns
                }
            }
        }
    },
    methods: {
        handleClick(btn) {
            if (btn.isConfirm) {
                this.$confirm('确定'+ btn.name +'吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$emit(btn.action, this.row, btn.action)
                }).catch(() => {

                })
            }
            else {
                this.$emit(btn.action, this.row, btn.action)
            }
        }
    }
}