<template>
                <section id="content" class="" >
        <div class="container" :style="{}">
            <div class="row">
                <fa icon="coffee"/>
                <!-- <fa :icon="['fab', 'facebook']"/> -->
                <div class="col-sm-5">
                    <div>
                        <h1 class="banner-head">Make cool friends</h1>
                    </div>
                    <div>
                        <p class="banner-text">
                            Life is Better with friends.Friendzee is the best place to make friends around the world.
                            Let's connect to the peoples and share happiness.
                        </p>
                        <p class="banner-text">
                            What you are waiting for?Join Now
                        </p>
                    </div>
                    <div class="banner-img-div">
                        <img src="../../assets/logo/network1.png" alt="earth" :style='{height:""}'/>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-sm-6">
                    <div class="reg-form-div">

                        <div>
                            <h1 :style="{color: '#23f1e7'}">Register Now!</h1>
                        </div>
                        <form method="">
                            <div class="reg-inputs">
                                <input class="input-tag" v-model="name" type="text" name="name" placeholder="Enter your full name" autocomplete="on" required/>
                            </div>

                            <div class="reg-inputs">
                                <input class="input-tag" v-model="phone" type="tel" name="phone" placeholder="Enter your phone number" autocomplete="on" required/>
                            </div>

                            <div class="reg-inputs">
                                <input class="input-tag" v-model="email" type="mail" name="email" placeholder="Enter your e-mail" autocomplete="on" required/>
                            </div>

                            <div class="reg-inputs">
                                <input class="input-tag" v-model="password" type="password" name="password" placeholder="Enter your password" autocomplete="on" required/>
                            </div>

                            <div class="reg-inputs">
                                <input class="input-tag" v-model="cpassword" type="password" name="cpassword" autocomplete="on" placeholder="Confirm password" required/>
                            </div>
                            <div :style="{textAlign:'end'}">
                                <p :style="{fontSize:'12px'}">Already have an account?<router-link to="/login" :style="{textDecoration:'none', color: '#47aeae'}" >Please signin</router-link>
                                </p>
                                <button type="button" class="btn btn-primary reg-btn" @click="signUp"><router-link to="/login" :style="{textDecoration: 'none',color:'#fff'}">Registerr Now</router-link></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios'
export default {
    name:'Sign-up',
    data(){
        return{
            name:'',
            phone:'',
            email:'',
            password:'',
            cpassword:''
        }
    },
    methods:{
        async signUp(){
          let result =await axios.post("http://localhost:3000/RegistrationUser",{
            name:this.name,
            phone:this.phone,
            email:this.email,
            password:this.password,
            cpassword:this.cpassword
          });
          console.log(result);
          if(result.status===201){
            alert("Registration successful");
            localStorage.setItem("User-info",JSON.stringify(result.data))
          }
        }
    }

}
</script>