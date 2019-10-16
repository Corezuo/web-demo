<template>
    <div class="">
        <el-row :gutter="20">
            <el-col :span="22">
                <div class="">
                    <el-table
                    :data="threadDumpData"
                    border
                    :show-header=false
                    style="width: 100%">
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
            threadDumpData: [
                {
                    value: '"notify-remoting-ReadEvent-2-thread-5" Id=56 WAITING on java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject@53cefd6e at sun.misc.Unsafe.park(Native Method) - waiting on java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject@53cefd6e at java.util.concurrent.locks.LockSupport.park(LockSupport.java:175) at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(AbstractQueuedSynchronizer.java:2039) at java.util.concurrent.ArrayBlockingQueue.take(ArrayBlockingQueue.java:403) at java.util.concurrent.ThreadPoolExecutor.getTask(ThreadPoolExecutor.java:1074) at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1134) at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) at java.lang.Thread.run(Thread.java:748)'
                }, {
                    value: '"notify-remoting-ReadEvent-2-thread-4" Id=55 WAITING on java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject@53cefd6e at sun.misc.Unsafe.park(Native Method) - waiting on java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject@53cefd6e at java.util.concurrent.locks.LockSupport.park(LockSupport.java:175) at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(AbstractQueuedSynchronizer.java:2039) at java.util.concurrent.ArrayBlockingQueue.take(ArrayBlockingQueue.java:403) at java.util.concurrent.ThreadPoolExecutor.getTask(ThreadPoolExecutor.java:1074) at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1134) at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) at java.lang.Thread.run(Thread.java:748)'
                }
            ]
        }
    }
}
</script>

<style lang="scss">

</style>