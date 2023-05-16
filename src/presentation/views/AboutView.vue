<template>
  <div class="about">
    <h1>{{ $store.state.user}}</h1>
    <button @click="doSomething">Click me</button>
  </div>
</template>

<script>
import AddUserUseCase from '@/domain/usecases/AddUserUseCase';
import UserEntity from '@/domain/entities/User'


export default {
  methods: {

    async doSomething(){
      const usecase = new AddUserUseCase({
         user: new UserEntity()
      });
      await usecase.execute({id: 1, age: 20, name: "test"})
  }
},
}

</script>