<template>
  <div class="asset text-center">
    <button v-on:click="showAddForm=true">新增</button>
    <div class="input-area" v-show="showAddForm">
      <input type="text" placeholder="请输入增产IP" v-model="newAsset">
      <button v-on:click="addAsset">确定</button>
    </div>
    <div class="wrap" v-show="showEditForm">
      <div class="content">
        <input type="text" placeholder="请输入新IP" v-model="newAssetIP">
        <button v-on:click="confirmEdit">确认</button>
        <button v-on:click="cancelEdit">取消</button>
      </div>
    </div>
    <table>
      <tr>
        <th>IP</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) in assets">
        <td>{{ item.ip }}</td>
        <td>
          <span v-on:click="editAsset(index)">编辑</span>
          <span v-on:click="delAsset(index)">删除</span>
        </td>
      </tr>
    </table>
    <footer-nav v-bind:class="{'isAsset':isNowPage}"></footer-nav>
  </div>
</template>

<style>
.asset{padding-bottom:50px;}
.asset >button{width:200px; height:40px; line-height:40px; background-color:#41b883; border: none; border-radius:5px; font-size:16px; color:#fff;}
table{width:100%; max-width:500px; margin:0 auto; margin-top:20px;}
.input-area input{width: 200px; height: 40px; line-height:40px; margin:20px 0; padding-left:10px; outline:none; border:1px solid green; border-radius:3px;}
.input-area button{ width:60px; height: 40px; line-height:40px; background-color:#41b883; border: none; border-radius:5px; font-size:16px; color:#fff;}
th,td{width:100px;}
tr input{width:100px; height:30px; padding-left:10px; outline:none; border:1px solid #333;}
.wrap{display:table; position:fixed; top:0; left:0; height:100%; width:100%; background:rgba(0,0,0,.8); z-index: 10;}
.wrap .content{display:table-cell; vertical-align:middle;}
.wrap .content input{height: 40px; line-height: 40px; display:block; margin:0 auto; margin-bottom:10px; font-size:16px;}
.wrap .content button{width:100px; height: 30px; line-height: 30px; background-color:#41b883; border: none; border-radius:5px; font-size:16px; color:#fff;}
</style>

<script>
import FooterNav from '@/components/FooterNav.vue'
export default {
  components: {
    FooterNav
  },
  data() {
    return {
      isNowPage: true,
      showAddForm: false,
      showEditForm: false,
      newAsset: '',
      newAssetIP: '',
      curEditSerial: 0,
      assets: []
    }
  },
  methods: {
    addAsset() {
      var v = this.newAsset;
      if(v.trim() == '') {
        alert('请输入IP地址')
      }else {
        this.assets.push({'ip': v});
        this.showAddForm = false;
        this.newAsset = '';
      }
    },
    delAsset(serial) {
      this.assets.splice(serial, 1);
    },
    editAsset(serial) {
      this.showEditForm = true;
      this.curEditSerial = serial;
    },
    cancelEdit() {
      this.showEditForm = false;
    },
    confirmEdit(serial) {
      this.assets[this.curEditSerial].ip = this.newAssetIP;
      this.showEditForm = false;
      this.newAssetIP = '';
    },
  }
}
</script>
