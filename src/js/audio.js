; (function (root) {
    function AudioManager() {
        this.audio = new Audio();
        this.status = 'pause';
    }

    AudioManager.prototype = {
        load(src) {
            this.audio.src = src;
            this.audio.load();
        },
        play() {
            this.audio.play();
            this.status = 'play';
        },
        pause() {
            this.audio.pause();
            this.status = 'pause';
        },
        end(fn) {
            this.audio.onended = fn;
        },
        playTo(time) {
            this.audio.currentTime = time;//单位为秒
        }
    }
    root.music = new AudioManager();

})(window.player || (window.player = {}))