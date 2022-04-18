<template>
  <div class="popup edit-category">
      <div class="popup-box">
          <div class="popup-header">
              <h4>Edit category</h4>
          <a class="close" @click="$emit('close')">x</a>
          </div>
          <div class="popup-content">
              <form @submit.prevent="editCategoryHandler">
                  <div class="field">
                      <label for="name">Category Name:</label>
                      <input type="text" id="name" placeholder="Category name..." v-model="category.name">
                   </div>
                     <div class="field">
                      <label for="location">Location:</label>
                      <input type="text" id="location" placeholder="Location..." v-model="category.location">
                   </div>
                         <div class="field">
                      <label for="description">Description:</label>
                      <input type="text" id="description" placeholder="Description..." v-model="category.description">
                   </div>
                   <button>Update category</button>
              </form>

          </div>
      </div>

     
  </div>
</template>

<script>
import categoriesMixin from '@/mixins/categories.vue'
export default {
  name: 'EditCategory',
  mixins: [categoriesMixin],
  props: {
      category: Object
  },
 
 
  methods: {
      editCategoryHandler(){
         let dataToSend = {
              name:this.category.name,
              location:this.category.location,
              description:this.category.description
          }
          this.editCategories(this.category.id,dataToSend)
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