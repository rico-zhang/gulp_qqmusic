; (function (root) {
    function Index(len) {
        this.index = 0;
        this.len = len;
    }
    Index.prototype = {
        //上一首索引
        prev() {
            return this.get(-1);
        },
        //下一首索引
        next() {
           return this.get(+1);
        },
        //获取索引 val为+1或者-1
        get(val) {
            this.index = (this.index + val + this.len) % this.len;
            console.log(this.index);
            return this.index;
        }
    }
    root.controlIndex = Index;
})(window.player || (window.player = {}))