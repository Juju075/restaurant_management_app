<!-- Sign up page -->
<template>
  <h1>Sign Up</h1>
  <div class="register">
    <!-- No need <form></form> -->
    <!-- Directive -->
    <input type="text" v-model="name" placeholder="Enter Name" name="name" />
    <input type="text" v-model="email" placeholder="Enter Email" name="email" />
    <input
      type="text"
      v-model="password"
      placeholder="Enter Password"
      name="password"
    />
    <button v-on:click="signUp">Sign Up</button>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return { name: "", email: "", password: "" };
  },
  methods: {
    signUp() {
      console.warn("signup", this.name, this.email, this.password);
    }
  }
};
</script>

<style>
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid black;
}

.register button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
}
</style>
