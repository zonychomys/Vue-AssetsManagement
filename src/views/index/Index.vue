<template>
  <div>
    欢迎来到资产管理系统
    <footer-nav v-bind:class="{'isIndex':isNowPage}"></footer-nav>
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav.vue'
export default {
  components: {
    FooterNav
  },
  data() {
    return {
      isNowPage: true
    }
  }
}
</script>
