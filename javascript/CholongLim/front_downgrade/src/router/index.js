// 컨트롤러 역할
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Todo from '../views/Todo.vue'
import Homework from '../views/Homework.vue'

// board
import BoardListPage from '@/views/BoardListPage.vue'
import BoardRegisterPage from '@/views/BoardRegisterPage.vue'
import BoardReadPage from '@/views/BoardReadPage.vue'
import BoardModifyPage from '@/views/BoardModifyPage.vue'

// product
import ProductRegisterPage from '@/views/ProductRegisterPage.vue'
import ProductListPage from '@/views/ProductListPage.vue'
import ProductReadPage from '@/views/ProductReadPage.vue'
import ProductModifyPage from '@/views/ProductModifyPage.vue'

// game
import GameMemberRegisterPage from '@/views/GameMemberRegisterPage.vue'

// monsterBook
import MonsterRegisterPage from '@/views/MonsterRegisterPage.vue'
import MonsterListPage from '@/views/MonsterListPage.vue'
import MonsterReadPage from '@/views/MonsterReadPage.vue'
import MonsterModifyPage from '@/views/MonsterModifyPage.vue'

// 삼목
import Concave from '@/views/Concave.vue'

// EventBus
import EventBusTestPage from '@/views/EventBusTestPage.vue'

// Dungeon
import DungeonListPage from '@/views/DungeonListPage.vue'

// 학생 성적관리
import ScoreManagerPage from '@/views/ScoreManagerPage.vue'

// 삼각형 넓이 계산
import TrianglePage from '@/views/TrianglePage.vue'
import OnlyVuePage from '@/views/OnlyVuePage.vue'
import SpringInterconnectionPage from '@/views/SpringInterconnectionPage.vue'

// 크롤링
import DaumNewsCrawlerPage from '@/views/DaumNewsCrawlerPage.vue'

// Slot
import UnNamedSlotTestPage from '@/views/UnNamedSlotTestPage.vue'
import NamedSlotTestPage from '@/views/NamedSlotTestPage.vue'
import ScopedSlotTestPage from '@/views/ScopedSlotTestPage.vue'
import RecentSlotTestPage from '@/views/RecentSlotTestPage.vue'

// Materialize
import MaterializeTestPage from '@/views/MaterializeTestPage.vue'
import MaterializeGridTestPage from '@/views/MaterializeGridTestPage.vue'
import VuetifyAllInOneTestPage from '@/views/VuetifyAllInOneTestPage.vue'

// Jpa
import VuetifySignUpTestPage from '@/views/VuetifySignUpTestPage.vue'
import VuetifyMemberRegisterPage from '@/views/VuetifyMemberRegisterPage.vue'


//coverflow
import CoverFlowTestPage from '@/views/CoverFlowTestPage.vue'

// AwesomeSwiper
import AwesomeSwiperTestPage from '@/views/AwesomeSwiperTestPage.vue'

// ImageGallery
import ImageGalleryPage from '@/views/ImageGalleryPage.vue'

// Calendar
import CalendarTestPage from '@/views/CalendarTestPage.vue'

// JPA Test Page = memberAuth
import MemberJoinColumnTestPage from '@/views/MemberJoinColumnTestPage.vue'

// 파일업로드 test
import FileUploadPage from '@/views/FileUploadPage.vue'

// 로그인
import VuetifyMemberLoginPage from '@/views/VuetifyMemberLoginPage.vue'


// PythonLoginTestPage
import PythonLoginTestPage from '@/views/PythonLoginTestPage.vue'

// KakaoLoginPage
import KakaoLoginPage from '@/views/KakaoLoginPage.vue'
// OrderTestPage
import OrderTestPage from '@/views/OrderTestPage.vue'
// PythonCrawlTestPage
import PythonCrawlTestPage from '@/views/PythonCrawlTestPage.vue'



// 로그인(도전)
import Login from '@/views/Login.vue'
import MyPage from '@/views/MyPage.vue'

import store from "../store/index";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter: (to, from, next) => {
      if(store.state.isLogin === true) {
            // 이미 로그인 된 유저 = 막아야한다
            alert('이미 로그인 하였습니다.')
            next("/")
          } else {
            next()
          }
    },
    component: Login
  },
  {
    path: '/mypage',
    name: 'MyPage',
    beforeEnter: (to, from, next) => {
      if(store.state.isLogin === false) {
                // 아직 로그인 안된 유저 = 막아야한다
                alert('로그인이 필요한 기능입니다')
                next("/login")
              } else {
                next()
              }
    },
    component: MyPage
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/homework',
    name: 'Homework',
    component: Homework
  },
  {
    path: '/board',
    name: 'BoardListPage',
    components: {
      default: BoardListPage
    }
  },
  {
    path: '/board/create',
    name: 'BoardRegisterPage',
    components: {
      default: BoardRegisterPage
    }
  },
  {
    path: '/board/:boardNo',
    name: 'BoardReadPage',
    components: {
      default: BoardReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/board/:boardNo/edit',
    name: 'BoardModifyPage',
    components: {
      default: BoardModifyPage
    },
    props: {
      // 라우팅 파라미터를 props에 자동으로 설정하게 서포트함
      default: true
    }
  },
  {
    path: '/product',
    name: 'ProductListPage',
    components: {
      default: ProductListPage
    }
  },
  {
    path: '/product/create',
    name: 'ProductRegisterPage',
    components: {
      default: ProductRegisterPage
    }
  },
  {
    path: '/product/:productNo',
    name: 'ProductReadPage',
    components: {
      default: ProductReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/product/:productNo/edit',
    name: 'ProductModifyPage',
    components: {
      default: ProductModifyPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/member/create',
    name: 'GameMemberRegisterPage',
    components: {
      default: GameMemberRegisterPage
    }
  },
  {
    path: '/concave',
    name: 'Concave',
    components: {
      default: Concave
    }
  },
  {
    path: '/monster',
    name: 'MonsterListPage',
    components: {
      default: MonsterListPage
    }
  },
  {
    path: '/monster/create',
    name: 'MonsterRegisterPage',
    components: {
      default: MonsterRegisterPage
    }
  },
  {
    path: '/monster/:monsterNo',
    name: 'MonsterReadPage',
    components: {
      default: MonsterReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/monster/:monsterNo/edit',
    name: 'MonsterModifyPage',
    components: {
      default: MonsterModifyPage
    },
    props: {
      default: true
    }
  }, 
  {
    path: '/eventbusTest',
    name: 'EventBusTestPage',
    components: {
      default: EventBusTestPage
    }
  },
  {
    path: '/dungeonTest',
    name: 'DungeonListPage',
    components: {
      default: DungeonListPage
    }
  },
  {
    path: '/studentGrade',
    name: 'ScoreManagerPage',
    components: {
      default: ScoreManagerPage
    }
  },
  {
    path: '/triangle',
    name: 'TrianglePage',
    components: {
      default: TrianglePage
    }
  },
  {
    path: '/OnlyVue',
    name: 'OnlyVuePage',
    components: {
      default: OnlyVuePage
    }
  },
  {
    path: '/springInterconnection',
    name: 'SpringInterconnectionPage',
    components: {
      default: SpringInterconnectionPage
    }
  },
  {
    path: '/daumNewsCrawler',
    name: 'DaumNewsCrawlerPage',
    components: {
      default: DaumNewsCrawlerPage
    }
  },
  {
    path: '/unNamedSlot',
    name: 'UnNamedSlotTestPage',
    components: {
      default: UnNamedSlotTestPage
    }
  },
  {
    path: '/namedSlot',
    name: 'NamedSlotTestPage',
    components: {
      default: NamedSlotTestPage
    }
  },
  {
    path: '/scopedSlot',
    name: 'ScopedSlotTestPage',
    components: {
      default: ScopedSlotTestPage
    }
  },
  {
    path: '/vSlot',
    name: 'RecentSlotTestPage',
    components: {
      default: RecentSlotTestPage
    }
  },
  {
    path: '/materialize',
    name: 'MaterializeTestPage',
    components: {
      default: MaterializeTestPage
    }
  },
  {
    path: '/materializeGrid',
    name: 'MaterializeGridTestPage',
    components: {
      default: MaterializeGridTestPage
    }
  },
  {
    path: '/vuetifyTest',
    name: 'VuetifyAllInOneTestPage',
    components: {
      default: VuetifyAllInOneTestPage
    }
  },
  {
    path: '/vuetify/SignUp',
    name: 'VuetifySignUpTestPage',
    components: {
      default: VuetifySignUpTestPage
    }
  },
  {
    path: '/vuetify/member',
    name: 'VuetifyMemberRegisterPage',
    components: {
      default: VuetifyMemberRegisterPage
    }
  },
  {
    path: '/coverflow',
    name: 'CoverFlowTestPage',
    components: {
      default: CoverFlowTestPage
    }
  },
  {
    path: '/awesomeSwiperTest',
    name: 'AwesomeSwiperTestPage',
    components: {
      default: AwesomeSwiperTestPage
    }
  },
  {
    path: '/imageGallery',
    name: 'ImageGalleryPage',
    components: {
      default: ImageGalleryPage
    }
  },
  {
    path: '/calendar',
    name: 'CalendarTestPage',
    components: {
      default: CalendarTestPage
    }
  },
  {
    path: '/memberJoinColumn',
    name: 'MemberJoinColumnTestPage',
    components: {
      default: MemberJoinColumnTestPage
    }
  },
  {
    path: '/memberlogin',
    name: 'VuetifyMemberLoginPage',
    components: {
      default: VuetifyMemberLoginPage
    }
  },
  {
    path: '/fileUpload',
    name: 'FileUploadPage',
    components: {
      default: FileUploadPage
    }
  },
  {
    path: '/pythonTest',
    name: 'PythonLoginTestPage',
    components: {
      default: PythonLoginTestPage
    }
  },
  {
    path: '/kakaoLoginTest',
    name: 'KakaoLoginPage',
    components: {
      default: KakaoLoginPage
    }
  },
  {
    path: '/orderTestPage',
    name: 'OrderTestPage',
    components: {
      default: OrderTestPage
    }
  },
  {
    path: '/pythonCrawlTestPage',
    name: 'PythonCrawlTestPage',
    components: {
      default: PythonCrawlTestPage
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router