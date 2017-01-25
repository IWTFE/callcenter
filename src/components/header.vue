<template>
  <div class="a">
  <el-row>
    <el-col :span="24"><div class="grid-content bg-purple-img">
      <!--电话条-->
      <v-phone></v-phone>
      <!--电话条-->
    </div></el-col>
  </el-row>
</div>
</template>

<script>
import phoneBar from 'components/child/phoneBar.vue'
export default {

  components: {
    'v-phone': phoneBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>


</style>
