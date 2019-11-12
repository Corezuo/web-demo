<template>
    <header class="rk-header">
        <div class="flex-h">
            <span class="z-logo-title">Z-APM</span>
            <a href="/#/dashboard" class="nav-link mr-20">
                <span class="vm hide-xs ml-5">
                    <i class="el-icon-odometer"></i> 仪表盘
                </span>
            </a>
            <a href="/#/topology" class="nav-link mr-20">
                <span class="vm hide-xs ml-5">
                    <i class="el-icon-coin"></i> 拓扑图
                </span>
            </a>
            <a href="/#/trace" class="nav-link mr-20">
                <span class="vm hide-xs ml-5">
                    <i class="el-icon-set-up"></i> 追踪
                </span>
            </a>
            <a href="/#/sentinel" class="nav-link mr-20">
                <span class="vm hide-xs ml-5">
                    <i class="el-icon-place"></i> 哨兵
                </span>
            </a>
            <a href="/#/alarm" class="nav-link mr-20">
                <span class="vm hide-xs ml-5">
                    <i class="el-icon-lightning"></i> 告警
                </span>
            </a>
        </div>
        <div class="flex-h">
            <a class="rk-btn mr-5 sm ghost">
                <span class="vm">自动</span>
            </a>
            <a class="rk-btn mr-15 sm ghost">
                <span class="vm">刷新</span>
            </a>
        </div>
    </header>
</template>

<script>
export default {
    name: "navbar"
}
</script>

<style lang="scss">
.rk-header {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    height: 48px;
    padding-right: 15px;
    padding-left: 15px;
    font-size: 13px;
    color: #efefef;
    background-color: #252a2f;
    -webkit-box-shadow: 0 1px 2px 0 rgba(26,24,29,.24);
    box-shadow: 0 1px 2px 0 rgba(26,24,29,.24);
    display: flex;
    justify-content: space-between;
    .flex-h {
        -ms-flex-align: center;
        align-items: center;
        display: flex;
        box-sizing: border-box;
        .z-logo-title {
            font-weight: bold;
            margin-right: 20px;
        }
        a {
            text-decoration: none;
            cursor: pointer;
            color: inherit;
            -webkit-tap-highlight-color: transparent;
            -webkit-appearance: none;
            .ml-5 {
                margin-left: 5px;
            }
            .vm {
                vertical-align: middle;
            }
        }
        .mr-5 {
            margin-right: 5px;
        }
        .ghost {
            background-color: #383843;
        }
         .sm {
            font-size: 12px;
        }
        a:hover {
            background-color: #383843;
        }
        .nav-link {
            padding: 4px 10px;
            border-radius: 4px;
            opacity: .8;
            color: #efeff1;
            will-change: opacity,background-color;
            -webkit-transition: opacity .3s,background-color .3s;
            transition: opacity .3s,background-color .3s;
        }
        .mr-20 {
            margin-right: 20px;
        }
        .rk-btn {
            padding: 3px 9px;
            border-radius: 4px;
            color: #fff;
            will-change: background-color;
            -webkit-transition: background-color .3s;
            transition: background-color .3s;
        }
        .rk-btn:hover {
            background-color: #448dfe;
        }
    }
}
</style>