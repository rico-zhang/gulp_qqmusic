(window.player||(window.player={})).listControl=function(e,t){let n=document.createElement("div"),a=document.createElement("dl"),l=document.createElement("dt"),s=document.createElement("div"),d=[];n.className="list",l.innerHTML="播放列表",s.className="close",s.innerHTML="关闭",a.appendChild(l),e.forEach((e,t)=>{var n=document.createElement("dd");n.innerHTML=e.song,n.addEventListener("touchend",function(){r(t)}),a.appendChild(n),d.push(n)}),n.appendChild(a),n.appendChild(s),t.appendChild(n),r(0);let i=n.offsetHeight;function o(){n.style.transition=".2s",n.style.transform=`translateY(${i}px)`}function r(e){for(let e=0;e<d.length;e++){const t=d[e];t.className=""}d[e].className="active"}return n.style.transform=`translateY(${i}px)`,s.addEventListener("touchend",o),{dom:n,musicList:d,slideUp:function(){n.style.transition=".2s",n.style.transform="translateY(0)"},slideDown:o,changeSelect:r}};