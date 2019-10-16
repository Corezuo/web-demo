<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="22">
                <div class="broker-item">
                    <h3 style="text-align: center;">Topics (Only contains data)</h3>
                    <el-table
                    :data="topicsData"
                    border
                    style="width: 100%">
                        <el-table-column
                            prop="topic"
                            label="Topic (Click for detail)"
                            >
                        </el-table-column>
                        <el-table-column
                            label="Partitions"
                            prop="partition">
                        </el-table-column>
                        <el-table-column
                            label="Messages Number"
                            prop="messageNumber">
                        </el-table-column>
                        <el-table-column
                            label="Messages Bytes"
                            prop="messagesBytes">
                        </el-table-column>
                        <el-table-column
                            label="Average Size (Byte)"
                            prop="averageSize">
                        </el-table-column>
                        <el-table-column
                            label="Accept Pub"
                            prop="acceptPub">
                        </el-table-column><el-table-column
                            label="Accept Sub"
                            prop="acceptSub">
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
            topicsData: [
                {
                    topic: 'meta-test',
                    partition: 1,
                    messageNumber: 20046,
                    messagesBytes: 548824,
                    averageSize: 27,
                    acceptPub: 'true',
                    acceptSub: 'true'
                }
            ]
        }
    }
}
</script>

<style lang="scss">

</style>