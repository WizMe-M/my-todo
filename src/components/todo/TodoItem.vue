<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

defineProps({
  id: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  isChecked: {
    type: Boolean,
    required: true,
  },
});

defineEmits([
  'update:isChecked',
  'remove',
]);
</script>

<template>
  <li>
    <input type="checkbox" :id="'todo_' + id"
           :value="isChecked"
           @input="$emit('update:isChecked', !isChecked)"/>
    <label :for="'todo_' + id">
      <span class="check"></span>{{ text }}
    </label>

    <font-awesome-icon icon="trash-alt"
                       size="lg"
                       style="transform: translateY(60%);"
                       @click="$emit('remove')"
    />
  </li>
</template>

<style scoped>

button {
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}

li {
  user-select: none;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

input[type=checkbox] {
  display: none
}

input[type=checkbox] + label {
  color: #6C717B;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  border-radius: 3px;
  display: inline-block;
  padding: 5px 5px 5px 30px;
}

input[type=checkbox] + label:hover {
  color: #353A42;
  background-color: #F4F7FA;
}

input[type=checkbox] + label span.check {
  left: 4px;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  display: block;
  background: white;
  border-radius: 3px;
  border: 1px solid #b8bfcc;
  box-shadow: 0 2px 3px #F0F4F8;
}

input[type=checkbox]:checked + label {
  color: #AEB7C6;
  text-decoration: line-through;
}

input[type=checkbox]:checked + label span.check {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}

input[type=checkbox] + label span.check::after {
  width: 100%;
  height: 100%;
  content: '';
  display: block;
  position: absolute;
  background-image: url('https://tjgillweb.github.io/Vacation-Todo-App/images/tick.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
  transform: scale(0);
  transition: transform 300ms cubic-bezier(0.3, 0, 0, 1.5);
}

input[type=checkbox]:checked + label span.check::after {
  transform: scale(1);
}

input[type=checkbox] + label span.check::before {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  content: '';
  position: absolute;
  border-radius: 50%;
  background: #8798AA;

  opacity: .8;
  transform: scale(0);
}

input[type=checkbox]:checked + label span.check::before {
  opacity: 0;
  transform: scale(1.3);
  transition: opacity 300ms cubic-bezier(0.2, 0, 0, 1), transform 400ms cubic-bezier(0.3, 0, 0, 1.4);
}
</style>