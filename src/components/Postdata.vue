<template>
   <div v-if="posts.length"
   >
    <div v-for="post in Posts" :key="post.id" className="post-container">

        <img className="timeline-image" :src="post.photo" alt="sdjkh" />

        <div>
            <div className="post-details-container">
                <div className="post-details">

                    <div className="user-info">

                        <div className='timeline-profile'>
                            <img className='timeline-profile-pic'
                                :src="Users.filter((u) => u.id === post?.userId)[0].profPic" alt='123' />
                        </div>
                        <h6>
                            <a className="user-name" href="/">{{Users.filter((u) => u.id ===
                                post?.userId)[0].userName}}</a>
                            <!-- {{Users.filter((u) => u.id ===
                                post?.userId)[0].userName}} -->
                            <span className="follow">
                                following
                            </span>
                        </h6>

                    </div>

                    <span className="reaction">

                        <button className="btn btn-lg react-btn" onClick={likeHandler}>
                            <img className='reactionImg' src="../assets/reaction/like.png" alt="LIKE BUTTON" /><span
                                className='likeCounter'>{{ post.like }}</span>
                        </button>


                        <button className="btn btn-lg react-btn" onClick={loveHandler}>
                            <img className='reactionImg' src="../assets/reaction/heart.png" alt="LIKE BUTTON" /><span
                                className='likeCounter'>{{ post.love }}</span>
                        </button>
                    </span>


                </div>
                <div className="post-time">
                    <p>{{ post.date }}</p>
                </div>
                <hr />
                <div>
                    <p className="comments">
                        {{ post?.desc }}
                    </p>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-2">
                        <img className="user-comments" src="../assets/person/user1.jpg" alt="u1" />
                    </div>
                    <div className="col-sm-10">
                        <p className="comments">
                            <span className="friends">Chris</span>
                            Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <img className="user-comments" src="../assets/person/user2.jpg" alt="u2" />
                    </div>
                    <div className="col-sm-10">
                        <p className="comments">
                            <span className="friends">Captain</span>
                            Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <img className="user-comments" src="../assets/person/profile.jpg" alt="profile-pic" />
                    </div>
                    <div className="col-sm-10">
                        <input className="do-comment" type="text" placeholder="Post a comment" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>

export default {
    name: 'Post-component',
    props:['id'],
    data() {
        return {
         post:null
        }
    },
    mounted() {
        fetch('http://localhost:3000/Posts'+this.id)
            .then((res) => res.json())
            .then(data => this.Posts = data)
            .catch(err => console.log(err))
    }

}

</script>