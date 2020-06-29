var form = new Vue({
    el: '#main',
    data: {
        x:'400',
        y:'400',
        text: '',
        background: '',
        textColor: '',
    },
    computed:{
        base:function (){
            return window.location.href
        },
        url:function (){
            const param = new URLSearchParams({text:this.text,background:this.background,textColor:this.textColor,sans:this.text.match(/\p{Unified_Ideograph}/u)?'1':''})
            return `${this.base}${this.x}/${this.y}?${param.toString()}`
        }
    } 
})