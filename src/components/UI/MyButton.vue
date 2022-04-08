<template>
  <button
    class="btn">
        <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style>
.btn {
    width: 40vh;
    height: 5vh;
    background-color: #F8CD19;
    color: white;
    font-size: 18px;
    text-shadow: 1px 1px 1px #585858;
    border-radius: 5px;
    border: none;
    box-shadow: 0.4em 0.4em 5px rgba(100, 100, 100, 0.5);
}
.btn:active {
  background: linear-gradient(270deg, #D2A710 5.8%, #FBD444 26.8%, #FEDC67 49.53%, #FBD444 71.41%, #D2A710 94.2%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
</style>
