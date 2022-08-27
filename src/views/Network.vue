<template>
        <TopNavbar/>

        <Myprofile/>
        <section id="timeline-content" :style="{background:'#fff'}">
        <div className="container">
            <div className="row">
  
                <div className="col-md-9">
                    <div className="row">
                            <FriendsCard key={n.id} network={n} />
                    </div>
                </div>
                <Sidebar/>
            </div>
        </div>
    </section>
    <Footer/>
</template>
<script>
import TopNavbar from '../components/topNavbar/TopNavbar.vue'
import Sidebar from '../components/timeline/Sidebar.vue'
// import Rightbar from '../components/Rightbar.vue'
import FriendsCard from '../components/FriendsCard.vue'
import Footer from '../components/Footer.vue'
import Myprofile from '@/components/Myprofile.vue'
export default {
    name: "NetWork",
    components: { TopNavbar, Sidebar, Footer, Myprofile, FriendsCard }
}
</script>