<template>
  <div>
    <h2>Tags</h2>
    <div v-for="tag in tags"><a v-bind:href="tag.url">{{tag.name}}</a>({{tag.total}})</div>
  </div>
</template>
<script>
export default {
  props: ['pages'],
  computed: { 
    tags(){
      const groupBy = function(xs) {
        return xs.reduce(function(acc, x) {
          if(!acc[x] ) {
            acc[x] = 0;
          }

          acc[x]++;

          return acc;
        }, {});
      };

     // pages

      let allKeywordsMap = this.$site.pages
      .filter(p => {
        return p.path.indexOf('/pages/') >= 0;
      })
      .map(p => {
        return p.frontmatter.keywords
      })
      .reduce((acc, curr) => {
        return [ ...acc, ...curr];
      })
      .reduce(function(acc, x) {
        if(!acc[x] ) {
          acc[x] = 0;
        }

        acc[x]++;

        return acc;
      }, {})

      return Object.keys(allKeywordsMap)
        .sort(function(a, b){
          if(a < b) { return -1; }
          if(a > b) { return 1; }
          return 0;
        })
        .map(key => {
          return {
            name: key,
            total: allKeywordsMap[key],
            url: '/tags.html?tag=' + key
          }
        })
    }
  }
}
</script>
<style scoped>

</style>


