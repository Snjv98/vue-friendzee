<template>
    <div className="col-md-6">

        <div className="row">
            <div className="textarea-container">
                <div className="form-group">
                    <textarea name="" id="" className="post-box" cols="30" rows="2"
                        placeholder="Write something"></textarea>
                </div>
            </div>
            <div className="post-icon-container">
                <div className="tools">
                    <button className="btn btn-primary btn-icon" id='btn-place-icon'>
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                    </button>

                    <button className="btn btn-primary btn-icon" id='btn-collection-icon'>
                        <font-awesome-icon icon="fas fa-images" />
                    </button>

                    <button className="btn btn-primary btn-icon" id='btn-video-icon'>
                         <font-awesome-icon icon="fa-solid fa-video" />
                    </button>
                </div>
            </div>
             <!-- render here  -->
            <div className="post-btn-container">
                <button className="btn btn-primary post-btn">Post</button>
            </div>
        </div>
        
        
        <Post/>
       
        
    </div>
</template>
<script>
import Post from './Post.vue'
export default {
    name: 'MainTimeline',
    components:{Post}
}

// import Postdata from './Postdata.vue'
// export default{
//     name:'MainTimeline',
//     components:{Postdata}
// }
</script>