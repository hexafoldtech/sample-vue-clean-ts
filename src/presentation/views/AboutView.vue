<template>
  <div class="about">
    <!-- <h1>{{ $store.state.user}}</h1> -->
    <button @click='clicked'>Click me</button>
  </div>
</template>

<script lang="ts">



export default {
  methods: {
    clicked(){
      const params = {id: 1, age: 20, name: "test"};
      console.log("clicked")
  }
},
}

</script>