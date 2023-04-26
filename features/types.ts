const today = new Date();
today.getMonth();

const json = '{"x":10,"y":20}';
const coordinates: { x: 10; y: 20 } = JSON.parse(json);
// coordinates.ddsa(); 调用不存在的方法不报错
