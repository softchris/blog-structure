<template>
  <div class="tags">
    <div class="menu">
      <TagsList />
    </div>
    <div class="content">
      <List />
    </div>
  </div>
</template>
<script>
import List from './List';
import TagsList from './TagsList';

// should list all tags and how many of each tag
export default {
  data() {
    return {
      test: 'test'
    }
  },
  components: {
    List,
    TagsList
  }
}
</script>
<style scoped>
  .tags {
    display: grid;
    grid-template-columns: auto 25%;    
  }

  .menu {
    grid-column: 2;
  }

  .content {
    grid-column:1;
    grid-row: 1;
  }

  @media screen and (max-width: 600px) { 
    .tags {
      display: flex;
      flex-direction: column;
    }
  }
</style>




