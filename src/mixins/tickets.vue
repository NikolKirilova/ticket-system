 <script>
 import axios from 'axios'
 import authStore from '@/store/auth.js'

 if (authStore.userToken){
     axios.defaults.headers.common['Authorization'] = `Bearer ${authStore.userToken}`;
 }

export default {
 methods: {
     getTickets() {
        return new Promise((resolve, reject) => {
            axios('http://taskapi.digitalsliven.com/api/tickets', {
                method: 'GET' 
            })
             .then(res => {
                 resolve(res);
             })
             .catch(err => {
                 reject(err);
             })
        }) 
     } ,
     changeTicketStatus(taskId, data){
          return new Promise((resolve, reject) => {
            axios(`http://taskapi.digitalsliven.com/api/tickets/complete/${taskId}`, {
                method: 'POST',
                data: data 
            })
             .then(res => {
                 resolve(res);
             })
             .catch(err => {
                 reject(err);
             })
        }) 
     },     
     getSingleTicket(ticketId){
             return new Promise((resolve, reject) => {
            axios(`http://taskapi.digitalsliven.com/api/tickets/${ticketId}`, {
                method: 'GET' 
            })
             .then(res => {
                 resolve(res);
             })
             .catch(err => {
                 reject(err);
             })
        }) 
     },
          editTicket(taskId, data){
          return new Promise((resolve, reject) => {
            axios(`http://taskapi.digitalsliven.com/api/tickets/${taskId}`, {
                method: 'PATCH',
                data: data 
            })
             .then(res => {
                 resolve(res);
             })
             .catch(err => {
                 reject(err);
             })
        }) 
     }, 
 }
}
</script>

 