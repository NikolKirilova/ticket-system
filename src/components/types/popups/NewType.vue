<template>
  <div class="popup new-type">
      <div class="popup-box">
          <div class="popup-header">
              <h4>Add new type</h4>
          <a class="close" @click="$emit('close')">x</a>
          </div>
          <div class="popup-content">
              <form @submit.prevent="createTypeHandler">
                  <div class="field">
                      <label for="title">Type Name</label>
                      <input type="text" id="title" placeholder="Type title..." v-model="title">
                   </div>
                     
                   <button>Create type</button>
              </form>

          </div>
      </div>

      New Type
  </div>
</template>

<script>
import typesMixin from '@/mixins/types.vue'
export default {
  name: 'NewType',
  mixins: [typesMixin],
  data(){
      return {
          title:null,
    
      }
  },
  methods: {
      createTypeHandler(){
         let dataToSend = {
              title:this.title,
              
          }
          this.createNewTypes(dataToSend)
          .then(() => {
              this.$emit('created');
          })
      }
}
}
</script>

<style scoped>
form{
    margin-top:30px;
}

.field{
    margin-bottom: 20px;
}
 .field label {
    display: block;
  }
  .field input {
      width:480px;
  }
  .popup-header{
      border-bottom: 1px solid #e5e5e5;
    padding-bottom: 14px;
  }
</style>