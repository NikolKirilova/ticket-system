<template>
  <div class="tickets">
    <div class="tickets-actions">
      <div class="new-ticket"><button><font-awesome-icon icon="fa-solid fa-plus" /></button></div>
      <div class="completed-tickets"><button>Incomplete Tickets</button></div>
      <div class="filter-btn"><button><font-awesome-icon icon="fa-solid fa-filter" /></button></div>
    </div>
    <!-- <h1>Tickets</h1> -->
    <div class="tickets-list">
      <div 
      v-for="ticket in tickets"
      :key="ticket.id"
      class="ticket">
      <button @click="completeTaskHandler(ticket)" class="ticket-status">
        <font-awesome-icon v-if="ticket.status == 0" icon="fa-solid fa-check" />
        <font-awesome-icon v-if="ticket.status == 1" icon="fa-solid fa-times"  />

        <!-- <span v-if="ticket.status == 0"> </span> -->
        <!-- <span v-else>Uncomplete</span> -->

        </button>
      <!-- <span class="status">
        {{ticket.status | statusFormat}}
      </span> -->
      <span class="ticket-name" > <router-link :to="`/tickets/${ticket.id}`">
      {{ticket.description}}</router-link>
      </span>
        <span class="ticket-date">
      {{ticket.created_at | formatDate}}
      </span>
      </div>

    </div>
      
  </div>
</template>

<script>
import ticketsMixin from '@/mixins/tickets'
export default {
    name: 'Tickets',
    mixins: [ticketsMixin],
    data() {
      return {
        tickets: null
      }
    },
    methods: {
      getTicketsHandler(){
          this.getTickets()
          .then(res => {
            this.tickets = res.data.tickets;
          })
      },
      completeTaskHandler(ticket){
          let dataToSend = {};

          if (ticket.status === 0){
            dataToSend.status = 1;
          } else {
            dataToSend.status = 0;
          }


          this.changeTicketStatus(ticket.id, dataToSend) 
          .then(() => {
            this.getTicketsHandler()
          })
      },
  
    },
    filters: {       
      statusFormat(status){
          if(status == 0){
            return 'Uncompleted';
          }else {
            return 'Completed';
          }
      }
    },
    mounted(){
      this.getTicketsHandler();
    }
}
</script>

<style scoped>
.tickets{
  width:92%;
}
.ticket{
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