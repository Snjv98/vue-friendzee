<template>
    <section id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div>
                        <img class="logo" src="../../src/assets/logo/logo.png" alt="handshake_logo" />
                        <router-link class="footer-brand-name" to="/">Friendzee</router-link>
                    </div>

                    <div class="row">
                        <!-- <Link to=""></Link> -->
                        <router-link class="social-icons" to="/">
                            <i class="fa-brands fa-google-plus-g"></i>
                        </router-link>
                        <router-link class="social-icons" to="/">
                            <i class="fa-brands fa-facebook-f"></i>
                        </router-link>
                        <router-link class="social-icons" to="/">
                            <i class="fa-brands fa-twitter"></i>
                        </router-link>
                        <router-link class="social-icons" to="/">
                            <i class="fa-brands fa-instagram"></i>
                        </router-link>
                        <router-link class="social-icons" to="/">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6">
                    <h3>Contact us</h3>
                    <div>
                        <router-link class="contact-items" to="/">
                            <font-awesome-icon icon="fa-solid fa-phone" class="contact-icons" />+91
                            123456987
                        </router-link>
                    </div>
                    <hr />
                    <div>
                        <router-link to="mailto: snjvkansari@hotmail.com" :style='{ textDecoration: "none" }'>
                            <router-link class="contact-items" to="mailto: snjvkansari@hotmail.com">
                                <font-awesome-icon icon="fa-solid fa-envelope" class="contact-icons" />
                                snjvkansari@hotmail.com
                            </router-link>
                        </router-link>
                    </div>
                    <hr />
                    <div>
                        <router-link class="contact-items" to='/'>
                            <font-awesome-icon icon="fa-solid fa-location-dot" class="contact-icons" />New rajendra
                            nagar, Raipur
                        </router-link>
                    </div>
                    <hr />
                </div>

                <div class="col-md-3" :style="{ textAlign: 'left' }">
                    <h3>About</h3>
                    <div>
                        <ul>
                            <li class="footer-nav">
                                <router-link to="/" class="footer-item" target="_blank"
                                    :style='{ textDecoration: "none" }' rel="noopener noreferrer">Home</router-link>
                            </li>
                            <li class="footer-nav">

                                <router-link to="/timeline" class="footer-item" :style='{ textDecoration: "none" }'
                                    target="_blank" rel="noopener noreferrer">My
                                    timeline</router-link>

                            </li>
                            <li class="footer-nav">
                                <router-link class="footer-item" :style='{ textDecoration: "none" }' to="/network"
                                    target="_blank" rel="noopener noreferrer">My network</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="name">

            </div>

        </div>
        <div class="last-sticky-row">

            Web reserved @2022

        </div>
    </section>
</template>
<script>
export default {
    name: 'FooTer',
}
</script>