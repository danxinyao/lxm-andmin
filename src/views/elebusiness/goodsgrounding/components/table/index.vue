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
        <el-table-column align="center" prop="teamname" label="款号" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="商品名称" width="200"></el-table-column>        
        <el-table-column type="expand">
            <template scope="scope">
                <el-table :data="scope.row.roomList" highlight-current-row border style="width: 30%">             
                    <el-table-column align="center" prop="name" label="商品编码" min-width="100"></el-table-column>  
                    <el-table-column align="center" prop="name" label="色号名称" min-width="100"></el-table-column>  
                    <el-table-column align="center" prop="name" label="吊牌价" min-width="100"></el-table-column>  
                    <el-table-column align="center" prop="name" label="修改时间" min-width="100"></el-table-column>  
                    <el-table-column align="center" prop="name" label="修改人" min-width="100"></el-table-column>  
                    <el-table-column align="center" prop="name" label="备注" min-width="100"></el-table-column>  
                </el-table>
            </template>
        </el-table-column>  
        <el-table-column align="center" prop="name" label="商品标题" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="商品分类" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="品牌" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="主题" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="年份" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="系列" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="季节" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="吊牌价" width="200"></el-table-column>
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

