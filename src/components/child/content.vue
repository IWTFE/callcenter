<template>
  <el-row>
 <el-col :span="24">
   <div class="bg-purple-tb">
      <!--tab页面-->
      <div>
       <el-button size="small" @click="handleClick">add tab</el-button>
      </div>
      <el-tabs type="card" closable>
      <el-tab-pane v-for="(item, index) in tabs" :label="item.title" :name="item.name">
        <v-welcome v-bind:is="which_to_show" keep-alive></v-welcome>
      </el-tab-pane>
      </el-tabs>


      <!--tab页面-->
   </div>
 </el-col>
</el-row>
</template>
<script>
import calltab from 'components/calltab/calltab.vue'
export default {
  name: 'hello',
  data () {
    return {
      tabIndex: 1,
      tabs: [{'title': 'suxiaoyan', 'name': 'suxiaoyan', 'content': 'nihaonihao'}],
      which_to_show: ''
    }
  },
  methods: {
    handleClick: function (tab, event) {
      var m = './welcome.vue'
      let r = require(m)
      this.tabs.push({name: (++this.tabIndex).toString(), title: 'suxiaoyan' + this.tabIndex})
      this.which_to_show = r
    }
  },
  components: {
    'v-calltab': calltab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.bg-purple-tb{
    padding:20px;
    color:#000;
}
</style>
