<script setup>
import TodoItem from "@/components/todo/TodoItem.vue";
import {ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

let nextId = 1;
const items = ref([]);
const todoInput = ref('');

function Todo(text) {
  return {
    id: nextId++,
    text,
    isChecked: false,
  }
}

function addItem() {
  if (todoInput.value === '') return;
  items.value.push(Todo(todoInput.value));
  todoInput.value = '';
}

function removeItem(index) {
  items.value.splice(index, 1);
}
</script>

<template>

  <div class="todoList">
    <form @submit.prevent="addItem">
      <input id="todo_input" v-model.trim="todoInput" placeholder="Write some todo here">
      <font-awesome-icon
          icon="plus" size="2x"
          title="Add todo to list"
          style="margin-bottom: 1px"
          @click="addItem"
      />
    </form>

    <ul class="todos">
      <TodoItem v-for="(item, i) of items"
                :key="item.id" :id="item.id"
                v-model:is-checked="item.isChecked"
                v-model:text="item.text"
                @remove="removeItem(i)"
      />
    </ul>
  </div>
</template>

<style scoped>

.todoList {
  margin: 30px 0;
}

form {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 0 10px 0 5px;
  border-bottom: 1px solid #8e979c;
}

form > * {
  background: transparent;
  border: none;
  height: 35px;
}

form input {
  width: 80%;
  font-weight: 700;
  font-size: 1.2rem;
  color: #6C717B;
}

ul.todos {
  margin-left: 0;
  padding: 0;
  list-style: none;
  height: 220px;
  overflow: auto;
}

</style>