<template>
  <div class="categories">
    <div class="options">

    <button @click="addCategoryHandler" class="add-btn"><font-awesome-icon icon="fa-solid fa-plus" /> Add Category </button>
    <div class="search-field">        
        <input type="text" placeholder="Search"  >
      </div>
    </div>
     
     <div class="categories-list">
       <p>Showing 0 to 0 of 0 entries</p>
       <table border="1px">
         <thead>
           <tr>
             <th>ID</th>
             <th>Category</th>
             <th>Location</th>
             <th>Description</th>
             <th>Date Created</th>
             <th>Actions</th>
           </tr>
         </thead>
         <tbody>
           <tr
             v-for="category in categories"
       :key="category.id"        
           >
           <td>{{category.id}}</td>
           <td>{{category.name}}</td>
           <td>{{category.location}}</td>
           <td>{{category.description || '-'}}</td>
           <td>{{category.created_at | formatDate}}</td>
           <td>
             <button @click="editCategoryHandler(category)">Edit</button>
             <button @click="deleteCategoryHandler(category.id)">Delete</button>

           </td>

           </tr>
         </tbody>

       </table>

   
  </div>
  <NewCategory 
    v-if="newPopup"
    @close="newPopup = false"
    @created="createdCategoryHandler"
  />
    <EditCategory 
    v-if="editItem"
    :category = "editItem"
    @close="editItem = null"
    @updated="updatedCategoryHandler"
  />
  </div>

</template>

<script>
import categoriesMixin from '@/mixins/categories'

import NewCategory from '@/components/categories/popups/NewCategory'
import EditCategory from '@/components/categories/popups/EditCategory'

export default {
    name: "Categories",
    mixins: [categoriesMixin],
    components: {
      NewCategory,
      EditCategory
       },
    data(){
      return {
        categories: null,
        newPopup: false,
        editItem: null,
        search: ''
      }
    },
    methods: {
      getCategoriesHandler(){
        this.getCategories()
          .then(res => {
            this.categories = res.data.categories;
          })
      },
      addCategoryHandler(){
        this.newPopup = true;
      },
      createdCategoryHandler(){
        this.newPopup = false;
        this.getCategoriesHandler();

      },
      editCategoryHandler(category){
          this.editItem = category;
      },
      updatedCategoryHandler(){
         this.editItem = null;
        this.getCategoriesHandler();
      },
      deleteCategoryHandler(categoryId){
         this.deleteCategory(categoryId)
         .then(() => {
           this.getCategoriesHandler();
         })

      }
    },
    mounted(){
      this.getCategoriesHandler();
      }
}
</script>

<style scoped>
.categories{
  width:92%;
}
.options{
  display: flex;
    justify-content: space-between;
    width: 91%;
    padding-top: 30px;
    padding-bottom: 30px;

}
  /* .options button, table button{
          color: #47b2e6;
    background: #fff;
    border: none;
    border-radius: 15px;
    padding: 8px 14px;
    font-size: 16px;
     box-shadow: 0px 0px 5px 1px rgb(245 245 245 / 60%)
    } */
    table button{
      margin-right:7px;
    }
      table,table td, table th{
       border:0;
     }
    table{
      border-collapse: collapse;
      width: 92%;
    text-align: center;
      border-top:1px solid #ddd;

    }

    table th,table td{
      border-bottom:1px solid #ddd;
      padding-top: 5px;
    padding-bottom: 5px;
    }
  table th {
    padding-top: 8px;
padding-bottom: 8px;
  }
  .categories-list p{
    margin-bottom: 5px;
  }
  .fa-plus{
        font-size: 9px;
    border: 1px solid;
    border-radius: 50%;
    padding: 3px;   
    margin-right: 6px;
  }
  .add-btn{
    display:flex;
    align-items: center;
  }
 
</style>