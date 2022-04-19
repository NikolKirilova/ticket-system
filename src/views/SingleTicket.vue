<template>
  <div class="single-ticket">
    
      test
      {{ticket}}
  </div>
</template>

<script>
import ticketsMixin from '@/mixins/tickets' 
export default {
    name: 'SingleTicket',    
     mixins: [ticketsMixin],
    data() {
      return {
        ticket: null,
        //  ticketId: null  
      }
    },
    methods: {
      getTicketHandler(){                 
           this.getSingleTicket(this.ticketId)
          .then(res => {
            this.ticket = res.data;
        console.log(this.ticket)
          })
      },
      
    },
    computed: {
      ticketId() {
        return this.$route.params.id
      }
    },
    mounted(){
      this.getTicketHandler(this.ticketId);
    }
}
</script>

<style scoped>

</style>