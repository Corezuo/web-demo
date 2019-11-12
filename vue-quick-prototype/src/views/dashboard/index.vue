<template>
    <div>
        <div class="rk-dashboard-group">
            <span class="mr-15">
                <a class="rk-dashboard-group-i mb-10 active">Service Dashboard</a>
            </span>
            <span>
                <a class="rk-dashboard-group-i mb-10 grey">Database Dashboard</a>
            </span>
        </div>
        <div class="rk-dashboard-bar">
            <div class="rk-dashboard-bar-reload">
                <i class="el-icon-refresh vm"></i>
            </div>
            <div class="rk-dashboard-bar-select">
                <div class="rk-dashboard-bar-i">
                    <i class="el-icon-crop mr-15"></i>
                    <div class="mr-15 rk-dashboard-bar-i-text">
                        <div class="sm grey">
                            当前环境
                        </div>
                        <div class="ell">
                            37test
                        </div>
                    </div>
                    <i class="el-icon-arrow-down i-blod"></i>
                </div>
                <!-- 选项卡 -->
                <div class="rk-dashboard-sel">
                    <div class="rk-dashboard-opt-wrapper">
                        <div class="rk-dashboard-opt active">本地</div>
                        <div class="rk-dashboard-opt">37test</div>
                    </div>
                </div>
            </div>
            <div class="rk-dashboard-bar-select">
                <div class="rk-dashboard-bar-i">
                    <i class="el-icon-c-scale-to-original mr-15"></i>
                    <div class="mr-15 rk-dashboard-bar-i-text">
                        <div class="sm grey">
                            当前服务
                        </div>
                        <div class="ell">
                            projectB
                        </div>
                    </div>
                    <i class="el-icon-arrow-down i-blod"></i>
                </div>
            </div>
            <div class="rk-dashboard-bar-select">
                <div class="rk-dashboard-bar-i">
                    <i class="el-icon-receiving mr-15"></i>
                    <div class="mr-15 rk-dashboard-bar-i-text">
                        <div class="sm grey">
                            当前实例
                        </div>
                        <div class="ell">
                            projectB-pid:23423
                        </div>
                    </div>
                    <i class="el-icon-arrow-down i-blod"></i>
                </div>
            </div>
        </div>
        <div class="dashboard-container">
            <!-- Instance Info -->
            <div class="dashboard-item g-sm-3" style="height: 250px;">
                <div class="dashboard-item-title ell">Instance Info</div>
                <div class="dashboard-item-body">
                    <div style="height: 100%;">
                        <!-- 实例信息 -->
                        <div class="chart-instance-info">
                            <div class="ell mb-10 pt-10 b">
                                projectB-pid:16188@skywalking-server-0001
                            </div>
                            <div>
                                <span class="mr-5 mb-5 grey">os_name</span>
                                <span>Linux</span>
                            </div>
                            <div>
                                <span class="mr-5 mb-5 grey">host_name</span>
                                <span>servername</span>
                            </div>
                            <div>
                                <span class="mr-5 mb-5 grey">process_on</span>
                                <span>16123</span>
                            </div>
                            <div>
                                <span class="mr-5 mb-5 grey">ipv4s</span>
                                <span>192.168.14.14</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Instance Avg QPS -->
            <div class="dashboard-item g-sm-3" style="height: 80px;">
                <div class="dashboard-item-title ell">
                    <span>Instance Avg QPS</span>
                </div>
                <div class="dashboard-item-body">
                    <div class="height: 100%;">
                        <div class="rk-chart-num b">
                            <span>1332</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Instance Avg ResponseTime -->
            <div class="dashboard-item g-sm-3" style="height: 80px;">
                <div class="dashboard-item-title ell">
                    <span>Instance Avg ResponseTime</span>
                </div>
                <div class="dashboard-item-body">
                    <div class="height: 100%;">
                        <div class="rk-chart-num b">
                            <span>1332</span>
                            <span class="rk-chart-num-unit">ms</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dashboard-item g-sm-3" style="height: 80px;"><!----></div>
            <!-- Instance QPS -->
            <div class="dashboard-item g-sm-3" style="height: 170px;">
                <div class="dashboard-item-title ell">
                    <span>Instance QPS</span>
                </div>
                <div class="dashboard-item-body">
                    <div style="height: 100%;">
                        <div id="instance-qps">
                            
                        </div>
                    </div>
                </div>
            </div>
            <!-- Instance ResponseTime -->
            <div class="dashboard-item g-sm-3" style="height: 170px;">
                <div class="dashboard-item-title ell">
                    <span>Instance ResponseTime</span>
                </div>
                <div class="dashboard-item-body">
                    <div style="height: 100%;">
                        <div id="instance-qps">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="dashboard-item g-sm-3" style="height: 170px;"><!----></div>
            <!-- 堆内存监控图表 -->
            <div class="dashboard-item g-sm-3" style="height: 250px;">
                <div class="dashboard-item-title ell">
                    <span>JVM Heap (MB)</span>
                </div>
                <div class="dashboard-item-body">
                    <div style="height: 100%;">
                        <div class="">
                        </div>
                    </div>
                </div>
            </div>
            <!-- 非堆内存监控图表 -->
            <div class="dashboard-item g-sm-3" style="height: 250px;">
                <div class="dashboard-item-title ell">
                    <span>JVM Non-Heap (MB)</span>
                </div>
                <div class="dashboard-item-body">
                    <div style="height: 100%;">
                        <div class="">
                        </div>
                    </div>
                </div>
            </div>
            <!-- GC监控图表 -->
            <div class="dashboard-item g-sm-3" style="height: 250px;">
                <div class="dashboard-item-title ell">
                    <span>JVM GC (ms)</span>
                </div>
                <div class="dashboard-item-body">
                    <div style="height: 100%;">
                        <div class="">
                        </div>
                    </div>
                </div>
            </div>
            <!-- CPU监控图表 -->
            <div class="dashboard-item g-sm-3" style="height: 250px;">
                <div class="dashboard-item-title ell">
                    <span>JVM CPU (%)</span>
                </div>
                <div class="dashboard-item-body">
                    <div style="height: 100%;">
                        <div class="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="rk-footer">
            <div class="rk-footer-inner">
                <p>2019-09-02 09:20:12 ~ 2019-09-02 10:10:23  &nbsp;&nbsp;中&nbsp;&nbsp; 服务器时区 UTC + 8</p>
            </div>
        </footer>
    </div>
</template>

<script>

export default {
    name: 'dashboard'
}
</script>

<style lang="scss" scoped>
    .rk-dashboard-group {
        border-bottom: 1px solid #252a2f;
        background-color: #333840;
        padding: 10px 15px 0;
        color: #eee;
    }
    .mr-15 {
        margin-right: 15px;
    }
    .rk-dashboard-group-i {
        display: inline-block;
        padding: 4px 13px 4px 15px;
        border-radius: 4px;
        position: relative;
        background-color: hsla(0,0%,100%,.07);
        box-shadow: 0 1px 1px rgba(0,0,0,.08);
        will-change: border-color,color;
        transition: border-color .3s,color .3s;
    }
    .grey {
        color: #a7aebb;
    }
    .rk-dashboard-group-i.active:before {
        content: "";
        position: absolute;
        display: inline-block;
        width: 5px;
        height: 10px;
        border-radius: 4px;
        background-color: #448dfe;
        top: 9px;
        left: 4px;
    }
    .mb-10 {
        margin-bottom: 10px;
    }
    a {
        text-decoration: none;
        cursor: pointer;
        color: inherit;
        -webkit-tap-highlight-color: transparent;
        -webkit-appearance: none;
        box-sizing: border-box;
    }
    .rk-dashboard-bar {
        color: #efefef;
        background-color: #333840;
        display: flex;
        flex-shrink: 0;
        align-items: center;
        .rk-dashboard-bar-reload {
            padding: 0 5px;
            border-right: 2px solid #252a2f;
        }
        .vm {
            vertical-align: middle;
            fill: currentColor;
            transition: background-color .3s;
            padding: 4px 10px;
            border-radius: 4px;
            cursor: pointer;
        }
        .vm:hover {
            background-color: #427fe2;
            color: #fff;
        }
        .rk-dashboard-bar-select {
            position: relative;
            z-index: 1;
            height: 52px;
            -webkit-box-pack: justify;
            justify-content: space-between;
            align-items: center;
            display: flex;
            .rk-dashboard-bar-i {
                display: flex;
                align-items: center;
                height: 100%;
                padding: 0 15px;
                border-right: 2px solid #252a2f;
                cursor: pointer;
                .mr-15 {
                    margin-right: 15px;
                }
                .rk-dashboard-bar-i-text {
                    max-width: 200px;
                }
                .sm {
                    font-size: 12px;
                }
                .grey {
                    color: #a7aebb;
                }
                .ell {
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                .i-blod {
                    font-weight: bold;
                }
            }
            // 选项卡
            .rk-dashboard-sel {
                // 隐藏元素
                display: none;

                position: absolute;
                top: 50px;
                left: -1px;
                box-shadow: 0 1px 6px rgba(99,99,99,.2);
                background-color: #252a2f;
                width: 100%;
                border-radius: 0 0 3px 3px;
                .rk-dashboard-opt-wrapper {
                    overflow: auto;
                    max-height: 200px;
                    padding: 2px 0;
                    cursor: pointer;
                    .rk-dashboard-opt {
                        padding: 7px 15px;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                    .active {
                        background-color: #40454e;
                    }
                    .rk-dashboard-opt:hover {
                        background-color: #40454e;
                    }
                }
            }
        }
        .rk-dashboard-bar-select:hover {
            background-color: #41454d;
        }
    }
    .dashboard-container {
        background-color: #fff;
        overflow: auto;
        padding: 20px 15px;
        height: 100%;
        .dashboard-item {
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
            box-sizing: border-box;
            padding-left: 5px;
            padding-right: 5px;
            .dashboard-item-title {
                flex-shrink: 0;
                user-select: none;
                line-height: 16px;
                border-radius: 2px;
                background-color: rgba(196,200,225,.2);
                color: #9da5b2;
                padding: 6px 10px;
            }
            .ell {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            .dashboard-item-body {
                padding: 7px 10px;
                -webkit-box-flex: 1;
                flex-grow: 1;
                height: calc(100% - 28px);
                .chart-instance-info {
                    height: 215px;
                    overflow: auto;
                }
            }
        }
        .g-sm-6 {
            width: 50%;
            float: left;
            min-height: 1px;
        }
        .g-sm-3 {
            width: 25%;
            float: left;
            min-height: 1px;
        }
        .g-sm-4 {
            width: 33.3333%;
            float: left;
            min-height: 1px;
        }
        .ell {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .mb-10 {
            margin-bottom: 10px;
        }
        .b {
            font-weight: 500;
        }
        .pt-10 {
            padding-top: 10px;
        }
        .mb-5 {
            margin-bottom: 5px;
        }
        .mr-5 {
            margin-right: 5px;
        }
        .grey {
            color: #a7aebb;
        }
        .rk-chart-num {
            font-size: 24px;
        }
        .rk-chart-num-unit {
            font-size: 16px;
        }
    }
    .rk-footer {
        background-color: #fff;
        color: #515a6e;
        flex-shrink: 0;
        padding-right: 15px;
        padding-left: 15px;
        padding-bottom: 1px;
        box-shadow: 0 -1px 0 rgba(0,0,0,.08);
        .rk-footer-inner {
            color: #515a6e;
            p {
                margin: 0px;
                text-align: right;
                line-height: 28px;
                font-size: 12px;
                font-weight: bold;
            }
        }
    }
</style>