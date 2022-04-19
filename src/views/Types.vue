<template>
  <div class="types">
    <div class="options">

    <button @click="addTypeHandler">Add Type</button>
    <button class="search-btn">Search</button>
    </div>
     
     <div class="types-list">
       <p>Showing 0 to 0 of 0 entries</p>
       <table border="1px">
         <thead>
           <tr>            
             <th class="type-name">Ticket Type</th>         
             <th>Actions</th>
           </tr>
         </thead>
         <tbody>
           <tr
             v-for="type in types"
              :key="type.id"        
           >
           <td>{{type.title}}</td>
         
           <td>
             <button @click="editTypeHandler(type)">Edit</button>
             <button @click="deleteTypeHandler(type.id)">Delete</button>

           </td>

           </tr>
         </tbody>

       </table>

   
  </div>
  <NewType 
    v-if="newPopup"
    @close="newPopup = false"
    @created="createdTypeHandler"
  />
    <EditType 
    v-if="editItem"
    :type = "editItem"
    @close="editItem = null"
    @updated="updatedTypeHandler"
  />
  </div>

</template>

<script>
import typesMixin from '@/mixins/types'

import NewType from '@/components/types/popups/NewType'
import EditType from '@/components/types/popups/EditType'

export default {
    name: "Types",
    mixins: [typesMixin],
    components: {
      NewType,
      EditType
       },
    data(){
      return {
        types: null,
        newPopup: false,
        editItem: null
      }
    },
    methods: {
      getTypesHandler(){
        this.getTypes()
          .then(res => {
            console.log(res.data)
            this.types = res.data.ticket_types;
          })
      },
      addTypeHandler(){
        this.newPopup = true;
      },
      createdTypeHandler(){
        this.newPopup = false;
        this.getTypesHandler();

      },
      editTypeHandler(type){
          this.editItem = type;
      },
      updatedTypeHandler(){
         this.editItem = null;
        this.getTypesHandler();
      },
      deleteTypeHandler(typeId){
         this.deleteType(typeId)
         .then(() => {
          this.getTypesHandler();

         })

      }
    },
    mounted(){
      this.getTypesHandler();
      }
}
</script>

<style scoped>
.types{
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
    text-align: left;
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
  .types-list p{
    margin-bottom: 5px;
  }
 
</style>