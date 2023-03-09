<template>
  <Header />
  <div class="xl:container mx-auto mt-20">
    <div class="">rrr</div>
    <div>{{ image }}</div>
    <img :src="image" width="500" height="500"/>
  </div>
</template>
<script setup>
import Header from "../layouts/TheHeader.vue";
import { ref, onBeforeMount } from "vue";

let accessKey = ref("u9J2J6mlb8HGhLEkYFOGMog4ulLbD7cobYlIq5Ffy4U");
const url = ref("https://api.unsplash.com/photos/random");
let image = ref("")
const getPhotos = () => {
  fetch(url.value + `?client_id=${accessKey.value}`)
    .then((response) => response.json())
    .then((json) => {
        image.value=json.urls.full
      console.log("json", json);
    })
    .catch((err) => {
      console.log("error", err);
    });
};
onBeforeMount(() => {
  console.log("r", getPhotos());
});
</script>
