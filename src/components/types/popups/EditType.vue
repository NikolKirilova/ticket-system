<template>
  <div class="popup edit-type">
      <div class="popup-box">
          <div class="popup-header">
              <h4>Edit type</h4>
          <a class="close" @click="$emit('close')">x</a>
          </div>
          <div class="popup-content">
              <form @submit.prevent="editTypeHandler">
                  <div class="field">
                      <label for="name">Type Title</label>
                      <input type="text" id="name" placeholder="Type name..." v-model="type.title">
                   </div>
                     
                   <button>Update type</button>
              </form>

          </div>
      </div>

     
  </div>
</template>

<script>
import typesMixin from '@/mixins/types.vue'
export default {
  name: 'EditType',
  mixins: [typesMixin],
  props: {
      type: Object
  },
 
 
  methods: {
      editTypeHandler(){
         let dataToSend = {
              title:this.type.title            
          }
          this.editTypes(this.type.id,dataToSend)
          .then(() => {
              this.$emit('updated');
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
</style>