<template>
  <div id="room" class="img">
      <menu-bar/>
    <v-card class="card-box">
      <v-navigation-drawer
        permanent
        style="float:left;"
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-icon color="pink lighten-2">favorite</v-icon>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ userId }} 
              </v-list-item-title>
              <v-list-item-subtitle>관리자님, 환영합니다.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item route :to="{ name: 'MemberListPage'}">
            <v-list-item-icon>
              <v-icon>people</v-icon>
            </v-list-item-icon>
            <v-list-item-title>회원목록관리</v-list-item-title>
          </v-list-item>
          <v-list-item route :to="{ name: 'BookingListPage'}">
            <v-list-item-icon>
              <v-icon>room_service</v-icon>
            </v-list-item-icon>
            <v-list-item-title>예약내역관리</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <div class="user-info">
          <v-card max-height="555" class="scroll" flat >
             <v-row justify="center" style="margin:3%;">
                    <h4 style="margin-top:5%;">예약목록</h4>
                </v-row>
                <room-list :rooms="rooms" :reserveDate="reserveDate" class="table-box"/>
          </v-card>
      </div>
    </v-card>
    <div class="container" style="margin-bottom:2%" v-if="cookie == false">
            <div>            
                <v-row justify="center" style="margin:10% auto;">
                <h4 style="margin-top:5%; color:white;">로그인 시간이 초과되었습니다.</h4>
                </v-row>
            </div>
        </div>  
  </div>
</template>

<script>
import MenuBar from '@/views/MenuBar.vue'
import RoomList from '@/components/manager/RoomList.vue'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'BookingListPage',
    components: {
        RoomList,
        MenuBar
    },
    data() {
        return {
            cookie: this.$cookies.isKey('user'),
            userId: this.$cookies.get('user')
        }
    },
    computed: {
        ...mapState(['rooms','reserveDate'])
    },
    mounted () {
        this.fetchRoomList(),
        this.fetchReserveList()
    },
    methods: {
        ...mapActions(['fetchRoomList','fetchReserveList']),
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap');

.scroll {
   overflow-y: scroll
}

h1 {
    font-family: "Cinzel";
    font-size: 40px;
    text-align: center;
    margin-top: 5%;
    color: #fffffa;
    text-shadow: 4px 1px 8px #3b3b3b;
}

p {
    font-family: 'Nanum Myeongjo';
    font-size: 24px;
    text-align: center;
    padding: 2vh 0vh 2vh 0vh;
    margin-bottom: 0px;
}

h4 {
    margin-top: 0px;
    font-family: 'Gowun Batang';
    font-size: 25px;
}

/*  */
.user-info {
  float: left;
  width: 78.9%;
  /* margin-top: 5%; */
}
.card-box {
    height: 80%;
    width: 80%;
    margin: 0 auto;
    justify-content: center;
    position: relative;
    top:5%;
}

.img{
    position: relative;
    background-image: url('https://images.pexels.com/photos/7130477/pexels-photo-7130477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    height: 100vh;
    background-size: cover;
  }
</style>
