<template>
  <div class="list">
    <h2>{{keyword}}</h2>
    <div class="articles">
      <div class="article" v-for="page in files">
        <a class="title" v-bind:href="page.path">{{page.formattedDate}} - {{page.title}}</a>
        <div class="image">
          <img v-bind:src="page.frontmatter.imageUrl" alt="">
          {{page.frontmatter.description.content}}
        </div>
        <div class="keywords" v-if="page.frontmatter.keywords">
          <span  class="keyword" v-for="key in page.frontmatter.keywords"><a v-bind:href="tag(key)">{{key}}</a></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: this.$route.query.tag
    };
  },
  methods: {
    tag(tagName) {
      return `/tags.html?tag=${tagName}`;
    }
  },
  computed: {
    files() {
      const tag = this.$route.query.tag;
      
      let sortedPages = this.$site.pages.filter(p => {
				  return p.path.indexOf('/pages/') >= 0;
      });

      if (this.$route.query.tag) {
        sortedPages = sortedPages
          .filter(p => p.frontmatter.keywords.includes(tag))
      }

      sortedPages
        .sort((a,b) => {
          let aDate = new Date(a.frontmatter.published).getTime();
          let bDate = new Date(b.frontmatter.published).getTime();
          let diff = aDate - bDate;
          if(diff < 0) return 1;
          if(diff > 0) return -1;
          return 0;
        })
        .map(p => {
          p.formattedDate = new Date(p.frontmatter.published).toLocaleDateString();
          return p;
        });

        if(this.sortKey === 'newest') {
          sortedPages = sortedPages.slice(0,1);
        } else if(this.sortKey) {
          sortedPages = sortedPages
            .filter(p => p.frontmatter[this.sortKey])
        }
        return sortedPages;

    }
  },
  props: ['sortKey']
}
</script>
<style scoped>
  .list h2 {
    border-bottom: none;
  }

  .articles {
    display: flex;
    flex-wrap: wrap;
  }

  .article {
    margin-bottom: 20px;
    border-left: solid 5px #3eaf7c;
    padding: 20px;
    width: 300px;
    margin: 10px;
    display: flex;
    flex-direction: column;
  }
  .keywords {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  .keyword {
    padding: 5px;
    border-radius: 7px;
    font-size: small;
    background: #3eaf7c;
    margin-right: 5px;
    color: white;
    font-weight: 500;
    margin-top: 5px;
  }

  .keyword a {
    color: white;
  }


  .image {
    margin-top: 10px;
    max-width: 300px;
    margin-bottom: 10px;
    flex: 1;
  }

  @media screen and (max-width: 600px) { 
    .image {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }

    .keywords {
      justify-content: center;
    }

    .article {
      text-align: center;
    }
  }
</style>



