<template>
  <div class="popup new-category">
      <div class="popup-box">
          <div class="popup-header">
              <h4>Add new category</h4>
          <a class="close" @click="$emit('close')">x</a>
          </div>
          <div class="popup-content">
              <form @submit.prevent="createCategoryHandler">
                  <div class="field">
                      <label for="name">Category Name</label>
                      <input type="text" id="name" placeholder="Category name..." v-model="name">
                   </div>
                     <div class="field">
                      <label for="location">Location</label>
                      <input type="text" id="location" placeholder="Location..." v-model="location">
                   </div>
                         <div class="field">
                      <label for="description">Description</label>
                      <input type="text" id="description" placeholder="Description..." v-model="description">
                   </div>
                   <button>Create category</button>
              </form>

          </div>
      </div>

      New Category
  </div>
</template>

<script>
import categoriesMixin from '@/mixins/categories.vue'
export default {
  name: 'NewCategory',
  mixins: [categoriesMixin],
  data(){
      return {
          name:null,
          location:null,
          description:null
      }
  },
  methods: {
      createCategoryHandler(){
         let dataToSend = {
              name:this.name,
              location:this.location,
              description:this.description
          }
          this.createNewCategories(dataToSend)
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