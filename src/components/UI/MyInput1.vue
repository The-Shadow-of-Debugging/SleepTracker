<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input">
</template>

<script>
export default {
  name: 'my-input-1',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style>
.input {
  background-color: #4F67DC;
  border: 0;
  border-bottom: 1px solid #00189F;
  width: 40vh;
  height: 5vh;
  padding: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.input::placeholder {
  color: white;
}
.input:focus {
  outline:none;
  border-bottom: 1px solid #F8CD19;
}
</style>