<template>
    <div id="lf"></div>
</template>

<script setup>
    import LogicFlow from '@logicflow/core'
    import "@logicflow/core/dist/style/index.css";
    import { onMounted } from 'vue'
    onMounted(() => {
        const ddv = document.querySelector('#lf')
        const lf = new LogicFlow({
            container: ddv,
            grid: true,
        });

        lf.render(graphData);
    })
    const graphData = {
        nodes: [
            {
                id: "1",
                type: "rect",
                x: 100,
                y: 100,
                text: "节点1"
            },
            {
                id: "2",
                type: "circle",
                x: 300,
                y: 200,
                text: "节点2"
            }
        ],
        edges: [
            {
                sourceNodeId: "1",
                targetNodeId: "2",
                type: "polyline",
                text: "连线"
            }
        ]
    }

</script>

<style>
#lf{
    width: 100%;
    height: 100%;
}
</style>