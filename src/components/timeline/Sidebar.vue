<template>
            <div className="col-md-3" :style="{background:'#fff'}">
                <div className="sidebar">
                    <div>
                        <h4 className="sidebar-head">
                            Might like to follow
                        </h4>
                        <div>
                            <form className="d-flex" role="search">
                                <input className="form-control search-friend" type="search" placeholder="Search"
                                    aria-label="Search" />
                                <button className="btn btn-outline-success search-btn" type="submit"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
                            </form>
                        </div>
                        <div className="activity-type">
                            <div className="row">
                                <div className="suggestion-dp">
                                    <img className="suggestion-friend" src="../../assets/person/user4.jpg" alt="profile-pic" />
                                </div>
                                <div className="feed-content-div">
                                    <p className="feed-content">

                                        <a className="name" href="/">Alex john</a>
                                    </p>
                                </div>
                            </div>
                            <button className="btn connect-btn">Connect <i className="fa-solid fa-user-plus"></i></button>
                        </div>
                        <hr />

                        <div className="activity-type">
                            <div className="row">
                                <div className="suggestion-dp">
                                    <img className="suggestion-friend" src="../../assets/person/user3.jpg" alt="profile-pic" />
                                </div>
                                <div className="feed-content-div">
                                    <p className="feed-content">

                                        <a className="name" href="/">S Choudhary</a>
                                    </p>
                                </div>
                            </div>
                            <button className="btn connect-btn">Connect <i className="fa-solid fa-user-plus"></i></button>
                        </div>
                        <hr />

                        <div className="activity-type">
                            <div className="row">
                                <div className="suggestion-dp">
                                    <img className="suggestion-friend" src="../../assets/person/user2.jpg" alt="pro-pic" />
                                </div>
                                <div className="feed-content-div">
                                    <p className="feed-content">

                                        <a className="name" href="/">Chrish jafery</a>
                                    </p>
                                </div>
                            </div>
                            <button className="btn connect-btn">Connect <i className="fa-solid fa-user-plus"></i></button>
                        </div>
                        <hr />

                        <div className="activity-type">
                            <div className="row">
                                <div className="suggestion-dp">
                                    <img className="suggestion-friend" src="../../assets/person/user1.jpg" alt="profile-pic" />
                                </div>
                                <div className="feed-content-div">
                                    <p className="feed-content">

                                        <a className="name" href="/">Johny Depp</a>
                                    </p>
                                </div>
                            </div>
                            <button className="btn connect-btn">Connect <i className="fa-solid fa-user-plus"></i></button>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>


</template>
<script>
export default {
    name:'Side-bar', 
    // components: {Sidebar}
}
</script>