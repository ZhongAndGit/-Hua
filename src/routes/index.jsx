import News from '../pages/news'
import ShortVideos from '../pages/shortVideos'
import Book from '../pages/book'
import Music from '../pages/music'
import Video from '../pages/video'
import My from '../pages/my'
import LookVideoNews from '../components/news/lookVideoNews'
import TextHtml from '../components/news/textHtml'

const routeList = [
  {
    path: "/news",
    name: "news",
    componentName: News,
    children: [
      {
        path: "/lookVideoNews/:uid",
        name: "lookVideoNews",
        componentName: LookVideoNews
      },
      {
        path: "/textHtml/:uid",
        name: "textHtml",
        componentName: TextHtml
      },
      
    ]
  },
  {
    path: "/shortVideos",
    name: "shortVideos",
    componentName: ShortVideos
  },
  {
    path: "/book",
    name: "book",
    componentName: Book
  },
  {
    path: "/music",
    name: "music",
    componentName: Music
  },
  {
    path: "/video",
    name: "video",
    componentName: Video
  },
  {
    path: "/my",
    name: "my",
    componentName: My
  }
]

export default routeList