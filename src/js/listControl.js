; (function (root) {
    function listControl(data, wrap) {
        let list = document.createElement("div"),
            dl = document.createElement("dl"),
            dt = document.createElement("dt"),
            close = document.createElement("div"),
            musicList = [];
        list.className = "list";
        dt.innerHTML = "播放列表";
        close.className = "close";
        close.innerHTML = "关闭";
        dl.appendChild(dt);
        data.forEach((item, index) => {
            var dd = document.createElement("dd");
            dd.innerHTML = item.song;
            dd.addEventListener("touchend", function () {
                changeSelect(index);
            })

            dl.appendChild(dd);
            musicList.push(dd);
        });
        list.appendChild(dl);
        list.appendChild(close);
        wrap.appendChild(list);

        changeSelect(0);

        let disY = list.offsetHeight;
        list.style.transform = `translateY(${disY}px)`;


        close.addEventListener("touchend", slideDown);
        function slideUp() {
            list.style.transition = `.2s`;
            list.style.transform = `translateY(0)`;
        }

        function slideDown() {
            list.style.transition = `.2s`;
            list.style.transform = `translateY(${disY}px)`;
        }

        function changeSelect(index) {
            for (let i = 0; i < musicList.length; i++) {
                const item = musicList[i];
                item.className = '';
            }
            musicList[index].className = "active";
        }

        return {
            dom: list,
            musicList: musicList,
            slideUp: slideUp,
            slideDown: slideDown,
            changeSelect:changeSelect
        }
    }
    root.listControl = listControl;
})(window.player || (window.player = {}))