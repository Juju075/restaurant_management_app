<!-- Sign up page -->
<template>
  <h1>Sign Up</h1>
  <div class="register">
    <!-- No need <form></form> -->
    <input type="text" placeholder="Enter Name" name="name" />
    <input type="text" placeholder="Enter Email" name="email" />
    <input type="text" placeholder="Enter Password" name="password" />
    <button type="submit">SignUp</button>
  </div>
</template>

<script>
export default {
  name: "SignUp"
};
</script>
