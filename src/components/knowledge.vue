<template>
  <el-row>
    <el-col :span=6>
      <el-tree :data='data' :props='defaultProps' :render-content='renderContent' class="leftMenu"></el-tree>
    </el-col>
    <el-col :span=18 class='text-l'>
      jkljkljkljkl
    </el-col>
  </el-row>
</template>

<script>
// import treeBtn from './untils/tree.vue'
export default {
  name: 'knowledge',
  data () {
    return {
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      renderContent: function (h, node) {
        return h(
          'span',
          { 'class': 'el-tree-node__label' },
          [this.node.label, h(
            'a',
            'test'
          )]
        )
      }
    }
  }
}
</script>
<style scoped>
  .leftMenu { color:red; min-height: 300px; text-align:left; overflow-x: scroll;}
  .text-l { text-align:left; }
</style>
