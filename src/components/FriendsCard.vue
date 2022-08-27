<template>
    <div v-for="network in Networks" :key="network.id" className="col-md-4 col-sm-6">
        <div id="outer-card-div">

            <div className="card" style='{maxWidth:"100%"}'>
                <img className="card-img-top cover-img-div" :src="network.coverImage" alt="Card cap" />
                <div className="image-prof">
                    <img className="image-pro" :src="network.profileImage" alt="" />
                </div>
                <div className="card-body">
                    <div className="row card-parent-row">
                        <div className="card-title-container">
                            <h6 className="card-title">{{network.name}}</h6>
                        </div>
                        <div className="card-status">
                            {{network.status}}
                        </div>
                    </div>
                    <p className="card-text">{{network.workPlace}}.</p>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FriendsCard',
    data() {
        return {
            Networks: [
                {
                    id: 1,
                    name: "Zeff Oleskii",
                    profileImage: require("@/assets/person/user1.jpg"),
                    coverImage: require("@/assets/cover/cover1.jpg"),
                    status: "following",
                    workPlace: "Works at Microsoft"
                },
                {
                    id: 2,
                    name: "Alex John",
                    profileImage:require("@/assets/person/user2.jpg") ,
                    coverImage: require("@/assets/cover/cover2.jpg"),
                    status: "following",
                    workPlace: "Works at Deloite"
                },
                {
                    id: 3,
                    name: "D Pretorious",
                    profileImage: require("@/assets/person/user3.jpg"),
                    coverImage: require("@/assets/cover/cover3.jpg"),
                    status: "following",
                    workPlace: "Works at Google"
                },
                {
                    id: 4,
                    name: "D'Arcy Carden",
                    profileImage: require("@/assets/person/user4.jpg"),
                    coverImage:  require("@/assets/cover/cover4.jpg"),
                    status: "following",
                    workPlace: "Works at Amazon"
                },
                {
                    id: 5,
                    name: "Jimmy Anderson",
                    profileImage:  require("@/assets/person/user5.jpg"),
                    coverImage:  require("@/assets/cover/cover5.jpg"),
                    status: "following",
                    workPlace: "Works at Amazon"
                },
                {
                    id: 6,
                    name: "Zack Jhones",
                    profileImage: require("@/assets/person/user6.jpg"),
                    coverImage: require("@/assets/cover/cover6.jpg"),
                    status: "following",
                    workPlace: "Works at Amazon"
                },
                {
                    id: 7,
                    name: "Zack Jhones",
                    profileImage: require("@/assets/person/user6.jpg"),
                    coverImage: require("@/assets/cover/cover6.jpg"),
                    status: "following",
                    workPlace: "Works at Amazon"
                }
            ]

        }
    }

}
</script>