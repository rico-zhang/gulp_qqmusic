//渲染功能: 图片渲染 音乐信息 是否喜欢
; (function (root) {
    //渲染图片
    function renderImg(src) {
        root.blurImg(src);
        let img = document.querySelector(".songImg img");
        img.src = src;
    }
    //渲染音乐信息
    function renderInfo(data) {
        let name = document.querySelector(".songInfo .name"),
            singer = document.querySelector(".songInfo .singer"),
            album = document.querySelector(".songInfo .album"),
            totleTime = document.querySelector(".progress .totleTime");
        name.innerHTML = data.song;
        singer.innerHTML = data.singer;
        album.innerHTML = data.album;
        totleTime.innerHTML = `${(Math.floor(data.duration / 60 ) + "").padStart(2, "0")}:${(data.duration % 60 + "").padStart(2, "0")}`;
    }

    //渲染是否喜欢
    function renderIsLike(isLike) {
        let isLikeDom = document.querySelector(".control li:first-of-type");
        isLikeDom.className = isLike ? "liking" : "";
    }
    root.render = function (data) {
        renderImg(data.image);
        renderInfo(data);
        renderIsLike(data.isLike);
    };
})(window.player || (window.player = {}))