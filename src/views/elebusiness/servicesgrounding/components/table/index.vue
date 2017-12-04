<template>
    <el-table 
        :data="list" 
        highlight-current-row 
        border 
        stripe 
        style="width: 100%" 
        @selection-change="selectChange">
        <el-table-column fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="teamname" label="编码" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="服务名称" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="服务标题" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="价格/次" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="体验推广价/次" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="包含消耗品" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="操作时间（分钟）" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="修改时间" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="修改人" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="状态" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="备注" width="200"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="150">
            <template slot-scope="scope">
                <pg-row-link 
                    @edit="handleClick"
                    :btns="rowLink"
                    :row="scope.row">
                </pg-row-link>
            </template>
        </el-table-column>
    </el-table>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>

