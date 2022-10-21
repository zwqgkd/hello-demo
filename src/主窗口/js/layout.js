import {onMounted} from "vue";

//规定分割线的宽度
function defineSplitWidth(){
    onMounted(()=>{
        var splitItems=document.getElementsByClassName('splitpanes__splitter')
        for(let i=0;i<splitItems.length;i++){
            let h=splitItems[i].clientHeight,w=splitItems[i].clientWidth
            if(h>w){
                splitItems[i].style.width='5px'
            }else{
                splitItems[i].style.height='5px'
            }
        }
    })
}

export{defineSplitWidth}
