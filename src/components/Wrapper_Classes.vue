<template>
  <div class="test01" id="test02">
    <h1 id="test03">{{ msg }}</h1>
    <input type="button" ref="myButton" value="ClickMe">
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    msg: String
  }
}
</script>
