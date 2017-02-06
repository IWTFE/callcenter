<template>

<el-col :span="21">
  <div class="bg-purple-fb">
    <v-ad></v-ad>
    <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
  <router-view></router-view>
  </div>
</el-col>

</template>

<script>
import ad from 'components/child/ad.vue'
import content from 'components/child/content.vue'
export default {
  components: {
    'v-ad': ad,
    'v-content': content
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
