<template>
  <div class="articles">
    <div class="menu">
      <TagsList />
    </div>
    <div class="content">
      <h2>Newest</h2>
      <List sortKey="newest" />
      <h2>Most popular</h2>
      <List sortKey="pinned" />
      <h2>All my articles</h2>
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
  .articles {
    display: grid;
    grid-template-columns: auto 25%;  
    grid-gap: 1rem;
  }

  .articles h2 {
    border-bottom: 1px solid #eaecef;
  }

  .menu {
    grid-column: 2;
  }

  .content {
    grid-column:1;
    grid-row: 1;
  }

  @media screen and (max-width: 600px) { 
    .articles {
      display: flex;
      flex-direction: column;
    }
  }
</style>