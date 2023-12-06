<template>
    <div class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(item, index) in items" :key="index" :class="{ 'carousel-item': true, 'active': index === 0 }">
          <div class="container">
            <div class="row">
              <div class="col-md-7 col-lg-6">
                <div class="detail-box">
                  <h1>{{ item.title }}</h1>
                  <p>{{ item.description }}</p>
                  <div class="btn-box">
                    <a :href="item.buttonLink" class="btn1">{{ item.buttonText }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <ol class="carousel-indicators">
          <li v-for="(item, index) in items" :key="index" :data-target="'#customCarousel'" :data-slide-to="index" :class="{ 'active': index === 0 }"></li>
        </ol>
      </div>
    </div>
  </template>
  
  <script setup>
  props: {
    items: Array
  }
  </script>
  
  