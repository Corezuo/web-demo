<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="11">
                <div class="grid-content bg-purple">
                    <p><b>Instance</b></p>
                    <el-table
                    :data="instaceData"
                    :show-header=false
                    style="width: 100%">
                        <el-table-column
                            prop="key"
                            width="220">
                        </el-table-column>
                        <el-table-column
                            prop="value">
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>
            <el-col :span="11">
                <div class="grid-content bg-purple">
                    <p><b>System</b></p>
                    <el-table
                    :data="systemData"
                    :show-header=false
                    style="width: 100%">
                        <el-table-column
                            prop="key"
                            width="220">
                        </el-table-column>
                        <el-table-column
                            prop="value">
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="11">
                <div class="grid-content bg-purple">
                    <p><b>JVM</b></p>
                    <el-table
                    :data="jvmData"
                    :show-header=false
                    style="width: 100%">
                        <el-table-column
                            prop="key"
                            width="220">
                        </el-table-column>
                        <el-table-column
                            prop="value">
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>
            <el-col :span="11">
                <div class="grid-content bg-purple">
                    <p><b>Broker</b></p>
                    <el-table
                    :data="brokerData"
                    :show-header=false
                    style="width: 100%">
                        <el-table-column
                            prop="key"
                            width="220">
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
            instaceData: [
                {
                    key: 'Startup',
                    value: '3 weeks ago'
                }, {
                    key: 'Host',
                    value: '118.190.236.225'
                }, {
                    key: 'Data',
                    value: '/root/meta'
                }, {
                    key: 'Transaction log',
                    value: '/root/meta'
                }, {
                    key: 'CWD',
                    value: '/usr/localtaobao/metamq/bin'
                }
            ], 
            systemData: [
                {
                    key: 'Physical memory',
                    value: '15.5 GB'
                }, {
                    key: 'Physical memory used',
                    value: '10.9 GB'
                }, {
                    key: 'Swap space',
                    value: '0'
                }, {
                    key: 'Swap space used',
                    value: '0'
                }, {
                    key: 'Maximum file descriptors',
                    value: '53335'
                }, {
                    key: 'Opened file descriptors',
                    value: '173'
                }, {
                    key: 'Maximum JVM memory',
                    value: '498 MB'
                }, {
                    key: 'Current total JVM memory',
                    value: '498 MB'
                }, {
                    key: 'JVM memory used',
                    value: '64.4 MB'
                }
            ],
            jvmData: [
                {
                    key: 'Runtime',
                    value: 'Java HotSpot(TM) 64-Bit Server VM'
                }, {
                    key: 'Args',
                    value: '-Xmx512m -Xms512m -Dmeta.home=/usr/local/taobao/metamorphosis-server-wrapper -Dlog4j.configuration=file:/usr/local/taobao/metamorphosis-server-wrapper/bin/log4j.properties -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.management.jmxremote.port=9123'
                }, {
                    key: 'Processors',
                    value: 2
                }
            ], 
            brokerData: [
                {
                    key: 'Broker Id',
                    value: 0
                }, {
                    key: 'Broker URI',
                    value: 'meta://118.190.236.225:8123'
                }, {
                    key: 'Version',
                    value: '1.4.6.2'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
    .el-col {
        border-radius: 4px;
        .grid-content {
            border-radius: 4px;
            min-height: 36px;
            border: 1px solid #d3dce6;
            padding: 10px;
        }
    }
}
</style>