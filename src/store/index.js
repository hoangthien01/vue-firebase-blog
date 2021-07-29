import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: "Blog Card #1", 
        blogCoverPhoto: "stock-1",
        blogDate: "July 4, 2021"
      },
      { blogTitle: "Blog Card #2", 
        blogCoverPhoto: "stock-2",
        blogDate: "July 4, 2021"
      },
      { blogTitle: "Blog Card #3", 
        blogCoverPhoto: "stock-3",
        blogDate: "July 4, 2021"
      },
      { blogTitle: "Blog Card #4", 
        blogCoverPhoto: "stock-4",
        blogDate: "July 4, 2021"
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
