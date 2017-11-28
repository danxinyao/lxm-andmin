import demo from './demo/demo.vue'
import operations from './operations/index.vue'
import pagination from './pagination/index.vue'
import search from './search/index'
import box from './box/index.vue'
import groupTitle from './groupTitle/index.vue'
import editTitle from './editTitle/index.vue'
import content from './contentTpl/contentTpl.vue'
import rowLink from './rowLink/index.vue'
import imgUpload from './imgUpload/index.vue'
import img from './img/index.vue'
import editor from './editor/index.vue'

const install = function (Vue) {
    Vue.component(demo.name, demo)
    Vue.component(operations.name, operations)
    Vue.component(pagination.name, pagination)
    Vue.component(search.name, search)
    Vue.component(box.name, box)
    Vue.component(groupTitle.name, groupTitle)
    Vue.component(editTitle.name, editTitle)
    Vue.component(content.name, content)
    Vue.component(rowLink.name, rowLink)
    Vue.component(imgUpload.name, imgUpload)
    Vue.component(img.name, img)
    Vue.component(editor.name, editor)
}

export default install