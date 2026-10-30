/* Guardian Towing - interactive service-area map.
   City boundaries: US Census TIGERweb (incorporated places), simplified, polyline-encoded (1e4).
   Loaded lazily by index.html when the map scrolls near view. */
(function(){
var CITIES=[["Stanton","/towing-stanton","$80",[["}gsSh``gAh@oCbB@?yDxEq@h@{BWtB|FCRyDmEBd@w@kBwAQbDuFc@o@eFeAv@dAyAsA_D?xCqAaAUjAj@vAmBwABhKxAfI~AW?rC"]]],["Los Alamitos","/towing-los-alamitos","$95",[["w{rSznagAb@cAeJcDAsDfJA@uAfA?BgO{EAgAmDcB?q@pLoC??jDyD@nIlL`I|C"]]],["Cypress","/towing-cypress","$85",[["uwsSp|`gAdLC?kDnC?p@qLjDtA@gOsFCi@pC?uCiA?BzIoC?CkDoGBSbG_C@OlDdAAuE|IzE@hAtA"]]],["Lakewood","/towing-lakewood","$100",[["}etSx}bgArCACaAzO|@uCcAp@_DsCyB?oC{G?GcJdH@T_ZsC{@L_FnBVw@cE{E?BjMgA??vAfA?@~FyFlA?fBoC@?tBcA?@fSjDABnEpB]@rF"]]],["Westminster","/towing-westminster","$75",[["}irS`p`gAjDKaCyDl@}G~DcAAmDlCAkAgIfAWj@xAbB}A?gDhA??dDhA?|@wIqEBk@gOkKB@dGlBAd@tAsC_AqCbABzIqC?@lDqCxAEb]zHN","karSfq_gAA_At@Gs@fA","{drSln_gAe@_GfAWhAT@hCnClA}Fh@","szqSbm_gAiAwAfA?@vA"]]],["Buena Park","/towing-buena-park","$85",[["qetSjl`gAx@AAmD|BAv@jDfAuA~BAA{ElBuAvDh@BjDnC?AwEiEYa@eBS`CyCuAuDkSqCk@uFbC?eDmBEzAlDeDw@oCz@^oDqLB@dGpCvA?nDpCA@lDrCA@zI`HEdBpD"]]],["Costa Mesa","/towing-costa-mesa","$85",[["ibpSrx~fAF}DyAB?eApCz@`DkBDkFhCgEw@w@n@aAwFuFy@v@yCcAsBkEm@dAuAuA}AdCaBeBnCgEgMoHo@zAmBG]~^aC@@fEbL~FhVtF"]]],["Garden Grove","/towing-garden-grove","$80",[["{srSvo`gAFi]pCyAAmDpC?C{IpCcArC~@e@uAmB@AeGjKCSuA}Cj@kJ}BCgOdCwAeKsAWuA~AA?uAmK~@?nCgAKfAvEoCp@u@dC`CtI}B@e@sAs@tA?`Rs@?bBpIbBC?wApCn@?sA|BvAe@v@jEYQnE}FBVuBi@zByEp@?xDnC@A~QdJX"]]],["Huntington Beach","/#pricing","$70",[["ewqSrhagAh[i[bP_Tr@r@q@u@`OoZsb@_K?xWaQFAmDqA@{@tIiA??eDiA??fDwE~AjAbGmC@@lD_EbAm@|GxBhDrKC@`QtAtBw@xB","ulqS~|`gAdAuNfGgJw@uBlA?bD|BhBxEqRzR","okqSvn`gAM]`@?S\\"]]],["Santa Ana","/towing-santa-ana","$80",[["k_rS|q~fAnDm@b@cBi@cLjER|K`GAgE`CAO_PxAiN_GuFzAeC_F}EuAjCoEqE{CK?rDcDRgBaFcOOCvCo@aAYvAd@~OgA??nDkBtBnExBQ|BlBA?tA_B@VtAdKrAeCvABfOjJ|B"]]],["Irvine","/towing-irvine","$90",[["__qS|b}fAbA}A{@wArA\\d@sAbFlCnBaEhDhD~JwB`JuT`E_DbFuVwJc@eDaLxCqBqFcCv@uK_CpBrBcCcD_@}LyJwA|BaAuBx@uA_L_JoNlYtBlCwCnE_C}Bi@yFaGi@oCaIXtBaEnEsBpGdA`B}@rBgC@eCtE{BKz@xB{@LrO|DfOzNhAnDvE^t@oAnDjD\\rAqCrCdCbCeFlIlBjB{AdClHhG","mcqSd_}fAk@i@`@IHr@"]]],["Long Beach","/towing-long-beach","$95",[["mhrSrpdgAxg@cPm@_h@y`@wYeFgLcLzAsMmFoImLwA@SnJ{BBU|YeHAFbJzG??nCrCxBq@~CtCbA{O}@B`AsC@AsFqB\\CoEkD@?xAeG@?hOcA?AxDnAVBbLzK{ClLbC`BdDfDE^pDpKk@zGhBtCkCrJlNnB{An@bD","}gsSjhcgAuF??{FdBh@d@bCnCA?uAoC?`@{I|CAo@uCpC@LtCbCyDA|HgI|J","sssSz}agAgBm@AaChB?q@Lp@`D"]]]];
function dec(s){var i=0,lat=0,lng=0,out=[];while(i<s.length){var v=[0,0];for(var k=0;k<2;k++){var r=0,sh=0,b;do{b=s.charCodeAt(i++)-63;r|=(b&31)<<sh;sh+=5}while(b>=32);v[k]=(r&1)?~(r>>1):(r>>1)}lat+=v[0];lng+=v[1];out.push([lat/1e4,lng/1e4])}return out}
window.initServiceMap=function(el){
  if(!window.L||el._map)return;
  var L=window.L, coarse=window.matchMedia&&matchMedia('(pointer:coarse)').matches;
  var map=L.map(el,{scrollWheelZoom:false,dragging:!coarse,tap:false,zoomSnap:0.25,attributionControl:false});
  L.control.attribution({prefix:'<a href="https://leafletjs.com" target="_blank" rel="noopener">Leaflet</a>'}).addTo(map);
  var small={'Stanton':1,'Los Alamitos':1,'Cypress':1}, labels=[];
  el._map=map;
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:17,minZoom:9,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'}).addTo(map);
  var group=L.featureGroup().addTo(map);
  CITIES.forEach(function(c){
    var name=c[0],href=c[1],price=c[2],home=name==='Huntington Beach';
    var rings=c[3].map(function(p){return p.map(dec)});
    var poly=L.polygon(rings,{color:home?'#1F2A1D':'#2E7F62',weight:home?2.5:1.5,fillColor:home?'#2E7F62':'#8FE3C0',fillOpacity:home?0.45:0.28,lineJoin:'round'}).addTo(group);
    poly.bindTooltip('<b>'+name+'</b><br>'+(home?'Home base · ':'')+'Tows from '+price,{sticky:true,direction:'top',className:'svc-tip'});
    poly.on('mouseover',function(){poly.setStyle({fillOpacity:home?0.6:0.5})});
    poly.on('mouseout',function(){poly.setStyle({fillOpacity:home?0.45:0.28})});
    poly.on('click',function(){window.location.href=href});
    var cen=poly.getBounds().getCenter();
    if(name==='Long Beach')cen=L.latLng(33.785,-118.19);
    if(name==='Lakewood')cen=L.latLng(33.848,-118.125);
    labels.push([L.marker(cen,{interactive:false,keyboard:false,icon:L.divIcon({className:'svc-label'+(home?' home':''),html:'<span>'+name+'</span>',iconSize:null})}),!!small[name]]);
  });
  map.fitBounds(group.getBounds(),{padding:[12,12]});
  var base=map.getZoom();
  function showLabels(){var z=map.getZoom();labels.forEach(function(l){var on=!l[1]||z>=base+0.75;if(on&&!map.hasLayer(l[0]))l[0].addTo(map);if(!on&&map.hasLayer(l[0]))map.removeLayer(l[0])})}
  map.on('zoomend',showLabels);showLabels();
  setTimeout(function(){map.invalidateSize()},200);
};
})();
