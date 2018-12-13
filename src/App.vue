<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
    body, p, img, dl, dt, dd, ul, ol, h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; }
    body { position: relative; min-width: 960px; }
    ul, ol { list-style: none; }
    img { border: 0 none; }
    input, select { vertical-align: middle; }
    table { border-collapse: collapse; }
    s, em, i a{ font-style: normal; text-decoration: none; }
    .cf { *zoom: 1; }
    .cf:after { clear: both; content: "."; display: block; height: 0; overflow: hidden; visibility: hidden; zoom: 1; }

    html，body{
        height:100%;
        font-family: "思源黑体", "Arial";
        font-size:14px;
    }
</style>

