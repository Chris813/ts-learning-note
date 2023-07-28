export interface Mappable{
    location:{
        lat:number;
        lng:number;
    };
    markerContent():string;
}

export class CustomMap{
    private BMap:new BMapGL.Map;
    constructor(divId:string){
        this.BMap = new BMapGL.Map(divId);
        this.BMap.centerAndZoom(new BMapGL.Point(0,0), 1);  // 初始化地图,设置中心点坐标和地图级别
        this.BMap.enableScrollWheelZoom(true);  
        this.BMap.addEventListener('click', function(e) {
            alert(e.point.lng + ", " + e.point.lat);
    });
    }
    addMarker(mappable:Mappable):void{
        const marker = new BMapGL.Marker(new BMapGL.Point(mappable.location.lng,mappable.location.lat));
        this.BMap.addOverlay(marker);  
        marker.addEventListener("click",function(){
            alert(mappable.markerContent());
        
        });
    }
}

