export default {
    name:"Index",
    data () {
        return {
            imgUrl: '',
            multiples: 1,
            showViewer:false,
        }
    },

    methods: {
        //放大
        toBIgChange () {
            if (this.multiples >= 2) {
                return
            }
            this.multiples += 0.25
        },
        // 缩小
        toSmallChange () {
            if (this.multiples <= 0.5) {
                return
            }
            this.multiples -= 0.25
        },
        //复原图像
        toReset(){
            this.multiples = 1
        },
        //全屏预览图像
        onPreview(){
            this.showViewer =true
        },
        //关闭全屏预览
        closeViewer() {
            this.showViewer =false
        },
        // //接受网络请求
        //   getUrl() {
        //       console.log("开始接受请求")
        //       var that = this;
        //       this.$axios.get("http://127.0.0.1:5173/getUrl").then(function(res){
        //         that.url = res.data.Text
        //         console.log("从后台接收到的数字式："+res.data.num)
        //         console.log("从后台接收到的数字式："+res.data.Text)
        //       })
        //
        //   }
        // getUrl() {
        //   this.axios({
        //     method:'get',
        //     url:'http://localhost:8081/getUrl',
        //   })
        //       .then(function(response) {
        //         this.data.url = response.data.Text
        //       })
        // }
        getUrl() {
            fetch("http://localhost:8081/getUrl")
                .then(res => res.json())
                .then(data=> {
                    console.log(data.text)
                    this.imgUrl = data.text
                })
        }

    }
}