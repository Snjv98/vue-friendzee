<template>
    <div className="col-md-6">

        <div className="row">
            <div className="textarea-container">
                <div className="form-group">
                    <textarea name="" id="" className="post-box" cols="30" rows="2" placeholder="Write something"
                        v-model="newPost"></textarea>
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
                <button className="btn btn-primary post-btn" @click="addPost">Post</button>
            </div>
        </div>


        <!-- <Post key={p.id} post={p} /> -->


        <!-- </div> -->
        <div v-for="(post, index) in Posts" :key="index" className="post-container">

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
                                <a className="user-name" href="/">{{  Users.filter((u) => u.id ===
                                post?.userId)[0].userName

                                    }}</a>
                                <!-- {{Users.filter((u) => u.id ===
                                post?.userId)[0].userName}} -->
                                <span className="follow">
                                    following
                                </span>
                            </h6>

                        </div>

                        <span className="reaction">

                            <button className="btn btn-lg react-btn" @click="likeHandler(index)" v-bind:id="post.id">
                                <img className='reactionImg' src="../assets/reaction/like.png" alt="LIKE BUTTON" /><span
                                    className='likeCounter'>{{  post.like  }}</span>
                            </button>


                            <button className="btn btn-lg react-btn" @click="loveHandler(index)" v-bind:id="post.id">
                                <img className='reactionImg' src="../assets/reaction/heart.png"
                                    alt="LIKE BUTTON" /><span className='likeCounter'>{{  post.love  }}</span>
                            </button>
                        </span>


                    </div>
                    <div className="post-time">
                        <p>{{  post.date  }}</p>
                    </div>
                    <hr />
                    <div>
                        <p className="comments">
                            {{  post?.desc  }}
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
    name: 'Post-comp',
    data() {
        return {
            newPost: "",
            Posts: [
                {
                    id: 1,
                    desc: "hey!!! This is my first post",
                    photo: require("@/assets/person/dog.jpg"),
                    date: "5 mins ago",
                    userId: 1,
                    like: 32,
                    love: 8,
                    comment: 9
                },
                {
                    id: 2,
                    desc: "hey!!! This is my second post",
                    photo: require("@/assets/person/timeline1.jpg"),
                    date: "10 mins ago",
                    userId: 2,
                    like: 35,
                    love: 12,
                    comment: 5
                },
                {
                    id: 3,
                    desc: "hey!!! This is my third post",
                    photo: require("@/assets/person/burger.jpg"),
                    date: "15 mins ago",
                    userId: 3,
                    like: 70,
                    love: 9,
                    comment: 11
                }
            ],
            Users: [
                {
                    id: 1,
                    profPic: require("@/assets/person/user1.jpg"),
                    userName: "jack leach"
                },
                {
                    id: 2,
                    profPic: require("@/assets/person/user2.jpg"),
                    userName: "John leach"
                },
                {
                    id: 3,
                    profPic: require("@/assets/person/dog.jpg"),
                    userName: "Elon leach"
                },
                {
                    id: 4,
                    profPic: require("@/assets/person/user4.jpg"),
                    userName: "Odinson leach"
                }
            ],
        }
    },


    methods: {
        likeHandler(index) {
            this.Posts[index].like++;
            alert("h")
        },
        loveHandler(index) {
            this.Posts[index].love++;
        },
        addPost() {
            if (this.newPost) {
                this.Posts.push({
                    desc: this.newPost,
                    photo: require("@/assets/person/user6.jpg"),
                    date: "5 mins ago",
                    userId: 4,
                    like: 3,
                    love: 8,
                    comment: 9

                })
                alert("added at last "+"'"+this.newPost+"'")
            }
        }
    }

}


</script>