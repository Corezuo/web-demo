<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="22">
                <div class="broker-item">
                    <el-table
                    :data="javaProperties"
                    border
                    :show-header=false
                    style="width: 100%">
                        <el-table-column
                            prop="key">
                        </el-table-column>
                        <el-table-column
                            prop="value">
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            javaProperties: [
                {
                    key: 'com.sun.management.jmxremote.authenticate',
                    value: 'false'
                }, {
                    key: 'java.runtime.name',
                    value: 'Java(TM) SE Runtime Environment'
                }, {
                    key: 'sun.boot.library.path',
                    value: '/usr/local/src/jdk/jdk1.8/jre/lib/amd64'
                }, {
                    key: 'java.vm.version',
                    value: '25.201-b09'
                }
            ]
        }
    }
}
</script>

<style lang="scss">

</style>
