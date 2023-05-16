<template>
  <div class="about">
    <h1>{{ $store.state.user}}</h1>
    <button @click="$store.commit('setUser')">Click me</button>
  </div>
</template>

