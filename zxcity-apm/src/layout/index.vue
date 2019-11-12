<template>
    <div>
        <navbar/>
        <router-view/>
    </div>
</template>

<script>
import {navbar} from './components'
export default {
    name: 'Layout',
    components: {
        navbar
    }
}
</script>

<style lang="scss">
body {
    background-color: #3d444f;
    display: block;
    margin: 0;
    line-height: 1.5;
    font-size: 13px;
    font-family: Lato,Source Han Sans CN,Microsoft YaHei,sans-serif;
    text-rendering: optimizeLegibility;
    color: #3d444f;
}
</style>