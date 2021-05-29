<template>
  <div class="PersonEdit">
    <div class="container">
      <PersonList id="person-edit"></PersonList>
    </div>
  </div>
</template>

<script>
import PersonList from './layout/PersonList';

export default {
  name: 'PersonEdit',
  components:{
    PersonList,
  }
}
</script>

<style lang="scss">
 


</style>