<template>

                <section id="navigation-bar">
                <div class="">
                    <div class="row" :style="{'--bs-gutter-x': 0}">
                        <nav class="navbar sticky-top navbar-dark bg-dark navbar-expand-lg p-0">
                            <div class="container">
                                <div>
                                    <router-link to="/">
                                        <span class="navbar-brand brand-nav" href="/">
                                            <img class="logo" src="../../assets/logo/logo.png" alt="handshake_logo" />
                                        </span>
                                    </router-link>
                                </div>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse nav-item-container" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 col-lg-9 nav-ul">
                                        <li class="nav-item">
                                            <router-link to="/" :style="{textDecoration: 'none'}">
                                             <!-- style={{ textDecoration: "none" }} -->
                                                <span class="nav-link active nav-items" aria-current="page">Home</span>
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/timeline" :style="{textDecoration: 'none'}">
                                             <!-- style={{ textDecoration: "none" }} -->
                                                <span class="nav-link nav-items">Timeline</span>
                                            </router-link>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <router-link to="/network" :style="{textDecoration: 'none'}">
                                             <!-- style={{ textDecoration: "none" }} -->
                                                <span class="nav-link nav-items">
                                                    Network
                                                </span>
                                            </router-link>
                                        </li>
                                        <li class="nav-item" :style="{textDecoration: 'none'}">
                                            <router-link to="/" :style="{textDecoration: 'none'}">
                                            <!--  style={{ textDecoration: "none" }} -->
                                                <span class="nav-link nav-items disabled">About</span>
                                            </router-link>
                                        </li>
                                    </ul>
                                    <form class="d-flex" role="search">
                                        <input class="form-control search-input" type="search" placeholder="Search"
                                            aria-label="Search" />
                                         <!-- removed this class="me-2" to remove the right margin after search box  -->
                                        <button class="btn search-btn" type="submit"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
</template>
<script>
export default {
    name:'TopNavbar'
}
</script>
