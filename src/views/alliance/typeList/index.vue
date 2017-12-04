<template>
    <!-- demo -->
    <div class="views">
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
        <div class="pg_content">
            <div class="clearfix">
                <!-- 按钮 -->
                <pg-operations
                        slot="operations"
                        :btns="operations"
                        @add="add"
                        @importData="importData"
                        @exportData="exportData"
                        @enable="enable"
                        @disable="disable">
                </pg-operations>
            </div>

            <section style="position: relative;">
                <aside style="width: 200px; position: absolute; top: 0; left: 0; z-index: 1;">
                    <el-tree
                            :data="data2"
                            show-checkbox
                            node-key="id"
                            :default-expanded-keys="[2, 3]"
                            :default-checked-keys="[5]"
                            :props="defaultProps">
                    </el-tree>
                </aside>
                <main style="position: relative; padding-left: 220px;">
                    <!-- 列表 -->
                    <pg-table
                            slot="list-table"
                            :list="customerList"
                            @select-change="selectChange"
                            @edit="edit"
                            @del="del">
                    </pg-table>
                    <!-- 分页 -->
                    <pg-pagination
                            slot="pagination"
                            @size-change="sizeChange"
                            @current-change="currentChange"
                            :page-size="pageSize"
                            :total="total">
                    </pg-pagination>
                </main>
            </section>
        </div>
        <!-- 编辑弹窗页 -->
        <pg-edit
                :title="editTitle"
                :show="showEdit"
                :isEdit="isEdit"
                :editForm="editForm"
                @close="closeEdit">
        </pg-edit>
    </div>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>