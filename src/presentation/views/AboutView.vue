<template>
  <div class="about">
    <h1>{{ $store.state.user}}</h1>
    <button @click="doSomething">Click me</button>
  </div>
</template>

<script lang="ts">
import AddUserUseCase from '@/domain/usecases/AddUserUseCase';
import {IUser,UserEntity} from '@/domain/entities/User'


export default {
  methods: {

    async doSomething(){
      const params = {id: 1, age: 20, name: "test"};
      const usecase = new AddUserUseCase({
        userEntity: new UserEntity()
      });
      await usecase.execute(params);
  }
},
}

</script>