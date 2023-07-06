<script setup>
import TodoItem from "@/components/todo/TodoItem.vue";
import {ref} from "vue";

const items = ref([]);
const todoInput = ref('');

function addItem() {
  if (todoInput.value === '') return;
  items.value.push(todoInput.value);
  todoInput.value = '';
}

function removeItem(id) {
  items.value.splice(id, 1);
}
</script>

<template>
  <div>
    <form @submit.prevent="addItem">
      <label for="input">Add ToDo:</label><br>
      <input id="input" v-model.trim="todoInput">
      <button type="submit">+</button>
    </form>

    <div>
      <TodoItem v-for="(item, index) of items"
                :item="item"
                :key="index"
                @remove="removeItem(index)"
      />
    </div>
  </div>
</template>

<style scoped>

</style>