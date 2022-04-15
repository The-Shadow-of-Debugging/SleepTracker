<template>
  <input :value="modelValue" @input="updateInput" type="date" class="input">
</template>

<script>
export default {
  name: 'my-input-2',
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

<style scoped>
.input {
  background-color: #9CA6EA;
  border: 0;
  border: 1px solid #00189F;
  width: 40vh;
  height: 5vh;
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
}
.input::placeholder {
  color: white;
}
.input:focus {
  outline:none;
  border: 1px solid #F8CD19;
}
</style>