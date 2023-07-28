import {User} from './User';
import {Company} from './Company';
import {CustomMap} from './CustomMap';
const map=new CustomMap('allmap');

const user = new User();
console.log(user);

const company = new Company();
console.log(company);
map.addMarker(user);
map.addMarker(company);
// const map = new BMapGL.Map("allmap");    // 创建Map实例
// map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
// map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放