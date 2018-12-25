<template>
  <div>

    <TopSection/>
    <HomeBody/>
  </div>

</template>

<script>
  import TopSection from '../../components/header/TopSection'
  import Banner from '../../components/left/Banner'
  import HomeBody from '../../components/body/HomeBody'
  export default {
    components:{
      Banner,
      TopSection,
      HomeBody
    }
  }
</script>

<style >

</style>
