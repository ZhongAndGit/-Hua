import apiFuntions from "../js/request"
// let AgentsTJ = '/apiTJ', AgentsXQ = '/apiXQ', AgentsWY = '/apiWY', comlist = '/touch/reconstruct/article/list/'
let AgentsTJ = 'https://c.m.163.com', AgentsXQ = 'https://m.163.com', AgentsWY = 'https://3g.163.com', comlist = '/touch/reconstruct/article/list/'

export default {
  // 推荐视频
  recommend: (data) => { return apiFuntions.get(AgentsTJ + '/recommend/getChanListNews.html', data) },
  videoDetail: (id) => { return apiFuntions.get('/apiTJ/nc/video/detail/' + id + '.html') },
  jsonPvideoDetail: (id,name) => { return apiFuntions.axiosL(AgentsTJ + '/nc/video/detail/' + id + '.html',name) },
  jsonPvideo: (name) => { return apiFuntions.jsonpGet(AgentsWY + '/touch/nc/api/video/recommend/Video_Recom/0-10.do', name) },

  // 新闻文章列表
  articles: (number, page) => { return apiFuntions.get(AgentsWY + comlist + number + '/0-10.html') },
  jsonParticles: (number, name, obj) => { return apiFuntions.jsonpGet(AgentsWY + comlist + number + '/0-10.html', name, obj) },
  // 新闻文章详情页
  textDetail: (id) => { return apiFuntions.get(AgentsXQ + '/dy/article/' + id + '.html') },
  // 新闻类型编号
  textNumbers: {
    // 新闻
    newsList: 'BBM54PGAwangning',
    // 娱乐
    entertainment: 'BA10TA81wangning',
    // 体育
    sports: 'BA8E6OEOwangning',
    // 财经
    finance: 'BA8EE5GMwangning',
    // 军事
    military: 'BAI67OGGwangning',
    // 科技
    technology: 'BA8D4A3Rwangning',
    // 手机
    mobile: 'BAI6I0O5wangning',
    // 数码
    digital: 'BAI6JOD9wangning',
    // 时尚
    fashion: 'BA8F6ICNwangning',
    // 游戏
    games: 'BAI6RHDKwangning',
    // 教育
    education: 'BA8FF5PRwangning',
    // 健康
    health: 'BDC4QSV3wangning',
    // 旅游
    travel: 'BEO4GINLwangning',
  },
}