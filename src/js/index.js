
; (function ($, player) {
    function MusicPlayer(dom) {
        this.wrap = dom;
        this.dataList = [];
        this.indexObj = null;
        this.rotateTimer = null;
    }
    MusicPlayer.prototype = {
        init() {
            this.getDom();
            this.getData("../mock/data.json");
        },
        getDom() {
            this.record = document.querySelector(".songImg img");
            this.controlBtns = document.querySelectorAll(".control li");
        },
        getData(url) {
            var This = this;
            $.ajax({
                url: url,
                method: "get",
                success: function (data) {
                    This.dataList = data;
                    This.listPlay();
                    This.indexObj = new player.controlIndex(data.length);
                    This.loadMusic(This.indexObj.index);
                    This.musicControl();
                },
                error: function () {
                    console.log("数据请求失败");
                }
            });
        },
        loadMusic(index) {
            let music = this.dataList[index];
            player.render(music);
            player.music.load(music.audio);
            if (player.music.status == "play") {
                player.music.play();
                this.controlBtns[2].classList.add("playing");
                this.imgRotate(0);
            }
            this.list.changeSelect(index);
        },
        musicControl() {
            let This = this;
            //上一首
            this.controlBtns[1].addEventListener("touchend", function () {
                player.music.status = "play";
                This.loadMusic(This.indexObj.prev());
            });

            //播放 暂停
            this.controlBtns[2].addEventListener("touchend", function () {
                if (player.music.status == "play") {
                    player.music.pause();
                    this.classList.remove("playing");
                    This.imgStop();
                } else {
                    player.music.play();
                    this.classList.add("playing");
                    let deg = This.record.dataset.rotate || 0;
                    This.imgRotate(deg);
                }
            });

            //下一首
            this.controlBtns[3].addEventListener("touchend", function () {
                player.music.status = "play";
                This.loadMusic(This.indexObj.next());
            });
        },
        imgRotate(deg) {
            clearInterval(this.rotateTimer);
            this.rotateTimer = setInterval(() => {
                deg = +deg + 0.2;
                this.record.style.transform = `rotate(${deg}deg)`;
                this.record.dataset.rotate = deg;
            }, 1000 / 60);
        },
        imgStop(deg) {
            clearInterval(this.rotateTimer);
        },
        listPlay() {
            let This = this;
            this.list = player.listControl(this.dataList, this.wrap);
            this.controlBtns[4].addEventListener("touchend", function () {
                This.list.slideUp();
            });

            this.list.musicList.forEach((item, index) => {
                item.addEventListener('touchend', function () {
                    if (This.indexObj.index == index) {
                        return;
                    }
                    player.music.status = 'play';
                    This.indexObj.index = index;
                    This.loadMusic(index);
                    This.list.slideDown();
                })

            });
        }
    }
    var musicPlayer = new MusicPlayer(document.getElementById("wrap"));
    musicPlayer.init();
})(window.Zepto, window.player)