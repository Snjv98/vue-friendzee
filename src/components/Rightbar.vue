<template>
            <div className="col-md-3 sticky-top">
                <div className="sidebar">
                    <div>
                        <h4 className="sidebar-head">
                            Your activity
                        </h4>
                        <div className="activity-type">
                            <p className="feed-content">
                                <a className="name" href="/">Katherine</a> commented on a photo
                            </p>
                            <p className="feed-time">5 mins ago</p>
                        </div>
                        <hr />

                        <div className="activity-type">
                            <p className="feed-content">
                                <a className="name" href="/">Elena</a> has shared a photo
                            </p>
                            <p className="feed-time">2 hrs ago</p>
                        </div>
                        <hr />

                        <div className="activity-type">
                            <p className="feed-content">
                                <a className="name" href="/">Elena</a> liked his friend's photo
                            </p>
                            <p className="feed-time">1 day ago</p>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
</template>
<script>
export default {
    name:'Right-bar'
}
</script>