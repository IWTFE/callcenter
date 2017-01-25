<template>
  <aside class='app-sidebar'>

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <!--树形目录-->
             <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
               <el-submenu index="1">
                 <template slot="title">导航一</template>
                   <el-menu-item index="1-1">选项1</el-menu-item>
                   <el-menu-item index="1-2">选项2</el-menu-item>
               </el-submenu>
               <el-menu-item index="2">导航二</el-menu-item>
               <el-menu-item index="3"><span>导航三{{counter}}</span></el-menu-item>
             </el-menu>
          <!--树形目录-->
        </div>
    </el-col>

  </aside>
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
      tabIndex: 1,
      tabs: [{'title': 'suxiaoyan', 'name': 'suxiaoyan', 'content': 'nihaonihao'}]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-row {

    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #000;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 0px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
