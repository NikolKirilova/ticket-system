<template>
 
  <div class="my-profile">
    <div class="profile-title">
    <h2>Account Update</h2>
    </div>
    <div class="form-wrapper"> 
    <div class="image-holder">
      <img v-if="profile.avatar || imageToUpload" 
      :src="profile.avatar ? 'http://taskapi.digitalsliven.com' + profile.avatar : imageToUpload" alt="" />
      <img v-else src="@/assets/profile.jpg" />
      <input type="file" @change="addFile($event)" accept="image/*" />
    </div>
    <div class="form-holder">
      <form @submit.prevent="editProfileHandler" v-if="profile">
        <div class="field">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="profile.name" />
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="profile.email" />
        </div>

          <div class="field">
          <label for="phone">Phone</label>
          <input type="phone" id="phone" v-model="profile.phone" />
        </div>

        <div class="field">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="profile.password" />
        </div>
        <div class="actions">         
        <button type="button" @click="logoutHandler">Logout</button>
       
        <button>Update profile</button>
        </div>
        <div class="success-message" v-if="requestSuccess">
          Your profile has been updated successfully!
        </div>
      </form>
       
    </div>
  </div>
  </div>
</template>

<script>
import userMixin from "@/mixins/user";
import authMixin from "@/mixins/auth";

export default {
  name: "MyProfile",
  mixins: [userMixin, authMixin],
  data() {
    return {
      profile: null,
      requestSuccess: false,
      selectedFile: null,
      fileExt: null,
      fileName: null,
      imageToUpload: null
    };
  },
  methods: {
    getProfileHandler() {
      this.getProfile().then((res) => {
        this.profile = res.data.user;
      });
    },
    editProfileHandler() {
      let dataToSend = {
        // name: this.profile.name,
        // email: this.profile.email,
        // profile: this.profile.profile,
        // phone: this.profile.phone,
        ...this.profile,
        workspace_id: 199,
        workspace_language: "bg",
      };
      // console.log(dataToSend)

      this.editProfile(dataToSend).then(() => {
        this.requestSuccess = true;
        setTimeout(() => {
          this.requestSuccess = false;
        }, 5000);
      });
    },
     addFile(event) {
        const file = event.target.files[0];
        const pattern = /image-*/;
        if (!file.type.match(pattern)) {
          alert('Invalid format');
          return;
        }
        const reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
      },
      _handleReaderLoaded(e) {
        const reader = e.target;
        this.imageToUpload = reader.result;
        const dataToSend = {
          name: this.profile.name,
          email: this.profile.email,
          avatar: this.imageToUpload
        }
        this.editProfile(dataToSend);
    
    },
    logoutHandler() {
      this.logout().then(this.$router.push("/login"));
    },
  },
  mounted() {
    this.getProfileHandler();
  },
};
</script>

<style scoped>
.profile-title{
      text-align: center;
    margin: 35px 0 20px 0px;
}
.form-wrapper {
  display: flex;
}

.image-holder {
  margin-top: 10px;
  padding-right: 50px;
}
.image-holder img {
     width: 150px;
    height: 150px;
    padding: 20px;
    border-radius: 50%;
}
form {
  width: 300px;
  margin: 50px auto;
}
.form-wrapper{
   box-shadow: 0px 0px 4px 1px #ebe6e6;
       padding: 0 40px;
    border-radius: 4px;
    margin-top:40px;
}
.field {
  width: 100%;
  margin-bottom: 20px;
}
.field label {
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
}
.field input {
  width:100%;
  font-size: 18px;
    padding:5px 18px;
             border-radius: 15px;
    border: 1px solid #bfb7b7;
}

.field-error {
  border-radius: 8px;
  border: 1px solid #ff0000;
  background-color: #f0e5e5;
  color: red;
  padding: 5px 10px;
  font-size: 16px;
  margin-top: 5px;
  text-align: center;
}
button {
  font-size: 24px;
}
.success-message {
  border-radius: 8px;
  border: 1px solid rgb(24, 99, 24);
  color: rgb(60, 167, 60);
  background-color: rgb(239, 245, 239);
  padding: 10px;
  margin-top: 5px;
}
.image-holder{
  display: flex;
    flex-direction: column;
}
.actions{
  margin-top:30px;
      display: flex;
    justify-content: space-between;
}
   .actions button{
          color: #47b2e6;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 15px;
    padding: 8px 14px;
    font-size: 16px;
     box-shadow: 0px 0px 4px 1px #ebe6e6;
    }
</style>
