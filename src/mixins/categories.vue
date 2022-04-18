 <script>
 import axios from 'axios'
 import authStore from '@/store/auth.js'

 if (authStore.userToken){
     axios.defaults.headers.common['Authorization'] = `Bearer ${authStore.userToken}`;
 }

export default {
 methods: {
     getCategories() {
        return new Promise((resolve, reject) => {
            axios('http://taskapi.digitalsliven.com/api/categories', {
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
     createNewCategories(dataToSend) {
        return new Promise((resolve, reject) => {
            axios('http://taskapi.digitalsliven.com/api/categories', {
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
      editCategories(categoryId, dataToSend) {
        return new Promise((resolve, reject) => {
            axios(`http://taskapi.digitalsliven.com/api/categories/${categoryId}`, {
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
          deleteCategory(id) {
        return new Promise((resolve, reject) => {
            axios(`http://taskapi.digitalsliven.com/api/categories/${id}`, {
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

 