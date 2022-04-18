<template>
  <div class="sidebar">
    <div class="user-info">
      user-image
      user name
    </div>
    <div class="navigation-links">
   <router-link to="/">Register</router-link>
   <router-link to="/login">Login</router-link>
   <router-link to="/my-profile">My Profile</router-link>
   <router-link to="/tickets">Tickets</router-link>
   <router-link to="/categories">Categories</router-link>
  </div>

  </div>
</template>

<script>
export default {
 name: 'Sidebar'
}
</script>

<style scoped>
 .sidebar {
   background: #fafafa;
   flex:0 0 20%;
 }
 .user-info{
       height: 100px;
    display: flex;
    align-items: center;
    margin: 0 20px;
    border-bottom: 1px solid #c5c5c5;
 }
 .navigation-links{
       display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-top: 30px;
 }

.navigation-links a{
 text-decoration: none;
    color: #313030;
    padding-bottom: 16px;
}

 
 
</style>