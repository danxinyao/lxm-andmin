<template>
    <!-- demo -->
    <pg-content>
        <!-- 搜索 -->
        <pg-search-form
            slot="search-form"
            v-model="query"
            :default-form="defaultQuery"
            :more="moreQuery"
            :is-show-more="isShowMoreQuery"
            @openMore="toggleOpen"
            @search="search">
        </pg-search-form>
        <!-- 按钮 -->
        <pg-operations 
            slot="operations" 
            :btns="operations" 
            @add="add"
            @importDate="importDate"
            @exportData="exportData"
            @enable="enable" 
            @disable="disable">
        </pg-operations>
        <!-- 列表 -->
        <pg-table 
            slot="list-table"
            :list="customerList"
            @select-change="selectChange"
            @check="check"
            @edit="edit">
        </pg-table>
        <!-- 分页 -->
        <pg-pagination 
            slot="pagination" 
            @size-change="sizeChange" 
            @current-change="currentChange" 
            :page-size="pageSize" 
            :total="total">
        </pg-pagination>
        <!-- 编辑弹窗页 -->
        <pg-edit 
            :title="editTitle" 
            :show="showEdit" 
            :isEdit="isEdit" 
            :editForm="editForm" 
            @close="closeEdit">
        </pg-edit>
        <!-- 编辑弹窗页2 -->
        <pg-edit-table
                :title="tableTitle"
                :show="showTable"
                :form="tableForm"
                @close="closeTable">
        </pg-edit-table>
    </pg-content>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>