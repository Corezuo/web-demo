<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="22">
                <div class="grid-content bg-purple">
                    <p class="info-log" v-for="(infoLog, index) in infoLogList" :key='index'>
                        {{infoLog}}
                    </p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            infoLogList: [
                '[ERROR] [notify-remoting-ReadEvent-2-thread-3] 10-16 05:53:55,071 [AbstractSession] - Decode error',
                '[INFO] [NIOServerCxn.Factory:0.0.0.0/0.0.0.0:2181] 10-16 06:23:04,708 [NIOServerCnxnFactory] - Accepted socket connection from /159.203.201.172:42534',
                '[INFO] [NIOServerCxn.Factory:0.0.0.0/0.0.0.0:2181] 10-16 06:23:04,709 [NIOServerCnxn] - Processing stat command from /159.203.201.172:42534',
                '[INFO] [Thread-55] 10-16 06:23:04,709 [NIOServerCnxn] - Stat command output',
                '[INFO] [Thread-55] 10-16 06:23:04,709 [NIOServerCnxn] - Closed socket connection for client /159.203.201.172:42534 (no session established for client)'
            ]
        }
    }
}
</script>

<style lang="scss">
.info-log {
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #565656;
}
</style>