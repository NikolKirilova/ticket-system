<template>
  <div class="users">
   
    <!-- <h1>Tickets</h1> -->
    <div class="users-list">
      <div 
      v-for="user in users"
      :key="user.id"
      class="user">
    
     <!-- <span class="user-avatar" >  
      {{user.avatar}} 
      </span> -->
      <span class="user-name" >  
      {{user.name}} 
      </span>
        <!-- <span class="user-email">
      {{user.email}}
      </span> -->
      </div>

    </div>
      
  </div>
</template>

<script>
import userMixin from '@/mixins/user'
export default {
    name: 'Users',
 
    mixins: [userMixin],
    data() {
      return {
        users: null
      }
    },
    methods: {
      getUsersHandler(){
          this.getUsers()
          .then(res => {
            this.users = res.data.users;
            console.log(users)
          })
      },
       

       
    },
    
    mounted(){
      this.getUsersHandler();
    }
}
</script>

<style scoped>
.users{
  width:92%;
}
.user{
  display: flex;
  justify-content:space-between;
  padding: 10px;
    border-bottom: 1px solid #f5f5f5;
}
.ticket-name{
  flex:0 0 90%;
}
.ticket-name a{
  text-decoration: none;
    color: #333;
    text-transform: capitalize;
}
.tickets-actions{
  margin: 30px 0;
  display: flex;
}
.ticket-date{
  min-width:110px;
}
.new-ticket button{
      background-color: #47b2e6;
    color: #fff;
    border: none;
    border-radius: 50%;
    font-size: 16px;
    padding: 10px 12px;
}
.completed-tickets{
  margin-left:30px;
}
.completed-tickets button{
      color: #47b2e6;
    background: #fff;
    border: 1px solid #47b2e6;
    border-radius: 20px;
    padding: 7px 27px;
    font-size: 16px;
    box-shadow: none;
}

button.ticket-status{
    width: 24px;
    height: 24px;
    border: 1px solid #ccc;
    border-radius: 50%;
    box-shadow: none;
    padding: 3px 6px 5px 6px;
    color: #999;
    font-size: 14px;
}
 
.filter-btn button{
  box-shadow:none;
}
</style>