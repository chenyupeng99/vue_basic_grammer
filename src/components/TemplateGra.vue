<template>
  <div>
    <span>{{ username }}</span>
    <div v-html="password"></div>
    <div v-if="awesome">显示或隐藏</div>
    <div v-bind:class="{ class: use }">v-bind:class指令 绑定div样式</div>
    <div id="app_4">
      {{ 5 + 5 }}<br />
      {{ ok ? "Yes" : "No" }}<br />
      <div v-bind:id="'list-' + id">菜鸟教程</div>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
    <ul>
      <li v-for="(item, index) in items">
          {{index}}----
        {{ item.message}}
      </li>
    </ul>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "林俊杰",
      password: "<strong>小土豆</strong>",
      userInfo: {},
      use: true,
      ok: true,
      id: 1,
      awesome: true,
      message: "abcdefg",
      items: [{ message: "Foo" }, { message: "Bar" }],
      count: 0
    };
  },
  methods: {},
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split("").reverse().join("");
    },
  },
};
</script>

<style>
.class {
  background: #e4e4e4;
  color: #ff0000;
}
</style>
