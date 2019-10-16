<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="22">
                <p class="modify-hint">Last modified: 5 months ago</p>
                <div class="grid-content bg-purple">
                    <textarea name="" id="" rows="25">
                        {{brokerConfigs}}
                    </textarea>
                </div>
                <div class="reload-btn-box">
                    <button class="reloadBtn">Reload config</button>
                    <p class="warn-msg">
                        <span>
                            Be careful,it will reload the config parameters from broker config file permanently.
                        </span>
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
            brokerConfigs: `
[system]
brokerId=0
numPartitions=1
serverPort=8123
dashboardHttpPort=8120
unflushThreshold=0
unflushInterval=10000
maxSegmentSize=1073741824
maxTransferSize=1048576
deletePolicy=delete,168
deleteWhen=0 0 6,18 * * ?
flushTxLogAtCommit=1
stat=true

;; Update consumers offsets to current max offsets when consumers offsets are out of range of current broker's messages.
;; It must be false in production.But recommend to be true in development or test.
updateConsumerOffsets=true

[zookeeper]
zk.zkConnect=10.30.190.47:2181
zk.zkSessionTimeoutMs=30000
zk.zkConnectionTimeoutMs=30000
zk.zkSyncTimeMs=5000

;; Topics section
[topic=test]

[topic=meta-test]`
        }
    }
}
</script>

<style lang="scss">
.modify-hint {
    margin: 0;
    padding: 3px 0;
    font-size: 14px;
    color: #3c3a3a;
}
.grid-content {
    textarea {
        border: none;
        color: #696969;
        font-size: 14px;
        resize:none;
        outline:none;
        width: 100%;
    }
}
.reload-btn-box {
    padding: 10px 0;
    .reloadBtn{
        padding: 5px 10px;
    }
    .warn-msg {
        span {
            background-color: #ec9738;
            color: white;
            font-size: 14px;
            font-weight: bold;
            border-radius: 2px;
            padding: 0 10px;
        }
    }
}
</style>