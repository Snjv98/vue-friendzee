<template>
 <div>
   <TopNavbar/>
    <Myprofile />
    <section id="timeline-content" :style="{background:'white'}">
        <div className="container">
            <div className="row">
                <Sidebar />
                <MainTimeline />
                <Rightbar/>
            </div>
        </div>
    </section>
    <Footer/>
  </div>
</template>
<script>
import TopNavbar from '../components/topNavbar/TopNavbar.vue'
import Sidebar from '../components/timeline/Sidebar.vue'
import Myprofile from '../components/Myprofile.vue'
import MainTimeline from '../components/Maintimeline.vue'
import Rightbar from '../components/Rightbar.vue'
import Footer from '../components/Footer.vue'


// import TopNavbar from '../components/topNavbar/TopNavbar.vue'

// import Sidebar from '../components/timeline/Sidebar.vue'
export default {
    name: 'TimeLine',
    components: { TopNavbar, Myprofile, Sidebar, MainTimeline, Rightbar, Footer }
}
</script>