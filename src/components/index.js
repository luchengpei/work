import Navbar  from './Navbar'
import  Content from './Content'
import Screen from  './Screen'
import Tabbar  from './Tabbar'
import Icon from './Icon'
import Banner from './Banner'
import ListItem from './ListItem'
import Logo from './Logo'
import ListContent from './ListContent'
import Comment from './Comment'
import  Switch from './Sitch'
const component={
    Navbar,
    Content,
    Screen,
    Tabbar,
    Icon,
    Banner,
    Logo,
    ListItem,
    ListContent,
    Comment,
    Switch
}
export default{
    install(Vue,ops){
        Object.keys(component).map(k=>{
            const cp = component[k]
            Vue.component(cp.name,cp)
        })
    }
}