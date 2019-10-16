<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="22">
                <div class="broker-item">
                    <h3 style="text-align: center;">Broker 0</h3>
                    <el-table
                    :data="brokerData"
                    border
                    style="width: 100%">
                        <el-table-column
                            prop="salve"
                            label="Slave ?"
                            width="220">
                        </el-table-column>
                        <el-table-column
                            label="Broker URI"
                            prop="brokerUri">
                        </el-table-column>
                        <el-table-column
                            label="Dashboard"
                            prop="dashboard">
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
            brokerData: [
                {
                    salve: 'false',
                    brokerUri: 'meta://118.190.236.225:8123',
                    dashboard: 'http://118.190.236.225:8120 '
                }
            ]
        }
    }
}
</script>

<style lang="scss">

</style>
