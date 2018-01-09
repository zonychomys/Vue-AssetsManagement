<template>
  <div class="footer-nav fixed">
    <ul>
      <li>
        <router-link to='/'>首页</router-link>
      </li>
      <li>
        <router-link to='/asset'>资产管理</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterNav',
}
</script>


<style scoped>
li a {
  display: inline-block;
  width: 100%;
  height: 100%;
  line-height: 50px;
}
ul {
  display: flex;
  height: 50px;
  bottom: 0;
}
ul li {
  flex: 1;
  background-color: #f1f1f1;
}
.footer-nav {
  width: 100%;
  height: 50px;
  bottom: 0;
}
.isIndex li:first-child{background-color:#d3d3d3;}
.isIndex li:first-child a{color:#41b883;}
.isAsset li:last-child{background-color:#d3d3d3;}
.isAsset li:last-child a{color:#41b883;}
</style>
