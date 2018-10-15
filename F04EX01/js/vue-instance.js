const vm = new Vue({
    el: "#intro",
    data: {
        msg: "A ESMAD é uma escola do IPP",
        textColor: "black",
        backColor: "white",
        fontSize: 12,
        show: 'visible'        
    },
    methods: {
        formatTextColor: function (color) {
            this.textColor = color            
        },
        formatBackColor: function (color) {
            this.backColor = color            
        },
        formatSizeText: function (size) {
            this.fontSize = size            
        },
        showHide: function () {
            if(this.show=='visible')
                this.show = 'hidden'
            else
                this.show = 'visible'
        }
    }
})

