<template>
        <section id="content" :style="{'background-image':'url(../assets/background/body_background.jpg)'}">
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-sm-6">
                    <div className="logo-img-container">
                        <img src="../assets/logo/handshake.png" alt="logo"/>
                        <h3 :style='{fontWeight:"bolder", color:"#fff"}'>Friendzee</h3>
                    </div>
                    <div className="reg-form-div">
                        <div>
                            <h3 className='login-header-text'>Connect with friends!</h3>
                        </div>
                        <form method="POST">
                            <div className="reg-inputs">
                                <input className="input-tag" type="tel" v-model="phone" name="phone" placeholder="Enter your phone number" required/>
                            </div>
                            <div className="reg-inputs">
                                <input className="input-tag" type="password" name="password" placeholder="Enter your password" required/>
                            </div>
                            <div className="login-botton-container">
                                <p className='signup-para'>Don't have an account?
                                <router-link to="/" :style='{textDecoration:"none"}'>
                                <a className='signup-link' href="/">Please
                                        signUp</a></router-link></p>
                                <button className="btn btn-primary reg-btn" v-on:click="signIn"><router-link to="/timeline" :style="{textDecoration:'none',color:'#fff'}">Login</router-link></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:'LogIn',
methods:
{
signIn(){
    alert("Signin successfully");
    }
  }
}
</script>