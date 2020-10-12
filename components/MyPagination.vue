<template>
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :layout="layout"
      :total="total"
      :background="background"
      :small="small">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'myPagination',
    props: {
      pageSizes: {
        default: function () {
          return [10, 20, 30, 50, 100];
        },
        type: Array
      },
      pageSize: {
        default: 20,
        type: Number
      },
      total: {
        default: 0,
        type: Number
      },
      currentPage: {
        default: 1,
        type: Number
      },
      background: {
        default: true,
        type: Boolean
      },
      small: {
        default: false,
        type: Boolean
      },
      layout: {
        default: 'total, sizes, prev, pager, next, jumper',
        type: String
      }
    },
    data() {
      return {

      }
    },
    methods: {
      handleSizeChange(data) {
        this.$emit('sizeChange',data);
      },
      handleCurrentChange(data) {
        this.$emit('currentPage',data);
      }
    }
  }
</script>
