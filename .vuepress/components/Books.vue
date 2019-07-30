<template>
  <div class="books">
    <div class="book" v-for="book in books">
      <div class="title">{{book.title}}</div>
      <div class="separator">
        &nbsp;
      </div>
      <div>
        <a v-bind:href="book.url">
          <img v-bind:src="book.imageUrl" alt="">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const books = [{
      title: 'Title',
      imageUrl: 'image-url.png',
      url: 'url-to-book'
    }]

    return {
      books
    }
  }
}
</script>
<style scoped>
  .books {
    display:flex;
    flex-wrap: wrap;
  }

  .book {
    box-shadow: 0px 0px 2px #888;
    margin: 5px;
    padding: 10px;
    width: 200px;
    display: flex;
    flex-direction: column;
    
  }

  @media screen and (max-width: 600px) {
    .books {
      flex-direction: column; 
      justify-content:center;
      align-items: center;
    }    

    .book {
      width: 80%;
    }
  }

  

  .book .title {
    margin-bottom: 10px;
  }

  .separator {
    flex: 1;
  }
</style>


