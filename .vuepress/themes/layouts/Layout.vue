<template>
  <div class="theme-container">
    <div class="header">
      <Content slot-key="header"/>
    </div>
    part of the theme
    <Content/>
    <div class="footer">
      <Content slot-key="footer"/>
    </div>
  </div>
</template>
<style scoped>
  .theme-container {
    margin: 20px;
  }

  .header {
    height: 60px;
    margin-left: -20px;
    margin-right: -20px;
    background: lightgrey;
  }

  .footer {
    background: darkslategrey;
    color: yellow;
    padding: 10px;
    margin-left: -20px;
    margin-right: -20px;
    text-align: center;
  }
</style>
