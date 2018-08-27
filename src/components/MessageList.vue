<template>
    <ul>
        <li v-for="(index,message) in messages" :key="index">
            {{ message }}
        </li>
    </ul>
</template>

<script>
     /* eslint-disable */
export default {
  name: 'list',
  props: ['messages'],
  methods:{
      calculate(a, b){
          return a+ b;
      }
  }
}
</script>