 <script>
 import axios from 'axios'
 import authStore from '@/store/auth.js'

 if (authStore.userToken){
     axios.defaults.headers.common['Authorization'] = `Bearer ${authStore.userToken}`;
 }

export default {
 methods: {
     getTypes() {
        return new Promise((resolve, reject) => {
            axios('http://taskapi.digitalsliven.com/api/ticket-types', {
                method: 'GET' 
            })
             .then(res => {
                 resolve(res);
             })
             .catch(err => {
                 reject(err);
             })
        }) 
     }  ,
     createNewTypes(dataToSend) {
        return new Promise((resolve, reject) => {
            axios('http://taskapi.digitalsliven.com/api/ticket-types', {
                method: 'POST',
                data: dataToSend 
            })
             .then(res => {
                 resolve(res);
             })
             .catch(err => {
                 reject(err);
             })
        }) 
     },
      editTypes(typeId, dataToSend) {
        return new Promise((resolve, reject) => {
            axios(`http://taskapi.digitalsliven.com/api/ticket-types/${typeId}`, {
                method: 'PATCH',
                data: dataToSend 
            })
             .then(res => {
                 resolve(res);
             })
             .catch(err => {
                 reject(err);
             })
        }) 
     },
          deleteType(id) {
        return new Promise((resolve, reject) => {
            axios(`http://taskapi.digitalsliven.com/api/ticket-types/${id}`, {
                method: 'DELETE'
                
            })
             .then(res => {
                 resolve(res);
             })
             .catch(err => {
                 reject(err);
             })
        }) 
     }   
 }
}
</script>

 