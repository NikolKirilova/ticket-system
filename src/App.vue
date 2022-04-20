<template>
  <div id="app">
    <Sidebar v-if="currentRoute !== 'Login' && currentRoute !== 'Register'" />

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  components: { Sidebar },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Calibri";
}

body {
  margin: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  min-height: 100vh;
}

a {
  margin: 0 10px;
}

.popup {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-box {
  background: #fff;
  border-radius: 10px;
  min-width: 100px;
  min-height: 100px;
  padding: 20px;
}
.popup-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.popup-header h4 {
  margin: 0;
}
button {
  color: #47b2e6;
  background: #fff;
  border: none;
  border-radius: 15px;
  padding: 8px 14px;
  font-size: 16px;
  box-shadow: 0px 0px 5px 1px rgb(245 245 245 / 60%);
    cursor:pointer;

}
input {
    font-size: 18px; 
    border-radius: 24px;
    border: 1px solid #e5e5e5;
    height: 50px;
    width: 80%;
    padding-left: 20px;
   
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(199, 198, 198);
  opacity: 1; /* Firefox */
}
.content {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex: 0 0 80%;
}
label{
  padding-bottom:6px;
}
 
</style>
