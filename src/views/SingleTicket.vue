<template>
  <div class="single-ticket">
    <div class="header-page">Back</div>
    <div class="main">
      <div class="actions">
        <div class="active-btns">
          <button class="complete-btn">Mark As Done</button>
          <button class="assign-btn" @click="getUsersHandler">Unassigned</button>
        </div>
        <button class="delete-btn">Delete Button</button>
      </div>
      <h2>Add Title</h2>
      <form @submit.prevent="editTicketHandler">
        <div class="field">
          <label for="description">Category: </label>
          <input type="text" id="description" v-model="ticket.description" />
        </div>
        <div class="field">
          <label for="notes">Notes:</label>
          <input type="text" id="notes" v-model="ticket.notes" />
        </div>

        <button>Update ticket</button>
      </form>
    </div>

    test
    {{ ticket }}
  </div>
</template>

<script>
import ticketsMixin from "@/mixins/tickets";
import userMixin from '@/mixins/user'

export default {
  name: "SingleTicket",
  mixins: [ticketsMixin, userMixin],
  data() {
    return {
      ticket: null,
       users: null 
    };
  },
  methods: {
    getTicketHandler() {
      this.getSingleTicket(this.ticketId).then((res) => {
        this.ticket = res.data.ticket;
        console.log(this.ticket);
      });
    },
    editTicketHandler() {
      let dataToSend = {
        name: this.ticket.notes,
        description: this.ticket.description,
        categoty_id:this.ticket.categoty_id,
        ticket_type_id:this.ticket_type_id
      };
      this.editTicket(this.ticket.id, dataToSend)
      .then(() => {
        this.getTicketHandler();
      });
    },
    getUsersHandler(){
          this.getUsers()
          .then(res => {
            this.users = res.data.users;
            console.log(users)
          })
      },
  },
  computed: {
    ticketId() {
      return this.$route.params.id;
    },
  },
  mounted() {
    this.getTicketHandler(this.ticketId);
  },
};
</script>

<style scoped>
.single-ticket {
  width: 94%;
  border: 1px solid #333;
}
.header-page {
  padding: 20px;
  border-bottom: 1px solid #ddd;
}
.actions{
      display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.complete-btn{
  margin-right:20px;
  border:1px solid #666;
  box-shadow:none;
}
.assign-btn{
  box-shadow:none;
}
.delete-btn{
  box-shadow:none;
  color:#f00a0a;
}
.field label{
  margin-right:10px;
}
</style>
