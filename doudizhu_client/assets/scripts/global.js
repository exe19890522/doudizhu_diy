//global 是一个对象
import SocketController from './data/socket-controller'
import TianBa from './data/tianba'
const global = {};
global.socket = SocketController();
global.tianba = TianBa();//此处写法就可以让外界可以时刻访问到tianba里面的数据
export default global;