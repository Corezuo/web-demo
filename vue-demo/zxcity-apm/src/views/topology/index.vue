<template>
    <div>
        <div class="rk-topo">
            <aside class="link-topo-aside">
                <div class="link-topo-aside-box mb-10" style="padding: 0px;">
                    <div class="rk-topo-bar-select cp flex-h mb-5">
                        <div class="rk-topo-bar-i flex-h">
                            <div class="mr-15 rk-topo-bar-i-text">
                                <div class="sm grey"></div>
                                <div class="ell">All services</div>
                            </div>
                            <i class="el-icon-arrow-down" style="font-weight: bold;"></i>
                        </div>
                        <!-- 下拉选择框 -->
                        <div class="rk-topo-sel" style="display: none;">
                            <div class="rk-topo-opt-wrapper scroll_hide">
                                <div class="rk-topo-opt ell">All services</div>
                                <div class="rk-topo-opt ell active">projectB</div>
                                <div class="rk-topo-opt ell">projectA</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="link-topo-aside-box mb-10">
                    <div class="mb-20">
                        <span class="b dib mr-20">所有服务</span>
                    </div>
                    <div class="mb-10">
                        <span class="r">1</span>
                        <span class="grey">USER</span>
                    </div>
                    <div class="mb-10">
                        <span class="r">3</span>
                        <span class="grey">SpringMVC</span>
                    </div>
                    <div class="mb-10">
                        <span class="r">2</span>
                        <span class="grey">Unknown</span>
                    </div>
                </div>
                <div class="link-topo-aside-box" style="width: 280px; top: 78px; position: fixed; right: 30px;">
                    <div class="mb-5 clear">
                        <span class="b dib mr-20 vm">侦察端</span>
                    </div>
                </div>
            </aside>
        </div>
        <div class="micro-topo-chart">
            <!-- TODO: 拓扑图 -->
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
    name: "topology"
}
</script>

<style lang="scss" scoped>
.rk-topo {
    position: relative;
    height: 100%;
    min-height: 0;
    display: flex;
    background: #333840;
}
.link-topo-aside {
    width: 280px;
    position: absolute;
    z-index: 2;
    left: 20px;
    top: 30px;
}
.link-topo-aside-btn {
    display: block;
    background: rgba(37,42,47,.6);
    color: #ddd;
    border-radius: 4px 4px 4px 4px;
    text-align: center;
    padding: 10px;
}
.link-topo-aside-box {
    border-radius: 4px;
    color: #ddd;
    background-color: rgba(37,42,47,.6);
    padding: 15px 20px 10px;
}
.rk-topo-bar-select {
    position: relative;
    z-index: 1;
    height: 40px;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.rk-topo-bar-i {
    height: 100%;
    width: 100%;
    padding: 5px 15px;
}
.mb-10 {
    margin-bottom: 10px;
}
.mb-5 {
    margin-bottom: 5px;
}
.cp {
    cursor: pointer;
}
.flex-h {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
}
.mr-15 {
    margin-right: 15px;
}
.rk-topo-bar-i-text {
    width: 100%;
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
.r {
    float: right;
}
.grey {
    color: #a7aebb;
}
.dib {
    display: inline-block;
}
.b {
    font-weight: 500;
}
.mb-20 {
    margin-bottom: 20px;
}
.mb-10 {
    margin-bottom: 10px;
}
// 拓扑图
.micro-topo-chart {
    height: 100%;
    width: 100%;
    flex: 1;
}
.rk-topo-sel {
    position: absolute;
    top: 40px;
    box-shadow: 0 1px 6px rgba(99,99,99,.2);
    background-color: #252a2f;
    width: 100%;
    border-radius: 0 0 3px 3px;
}
.rk-topo-opt-wrapper {
    overflow: auto;
    max-height: 200px;
    padding-bottom: 2px;
    box-sizing: border-box;
}
.rk-topo-opt{
    padding: 7px 15px;
}
.rk-topo-opt.active {
    background-color: #40454e;
}
.rk-topo-opt.active:hover {
    background-color: #40454e;
}
.ell {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
}
.rk-footer {
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    bottom: 0px;
    background-color: #262a2e;
    flex-shrink: 0;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 1px;
    box-shadow: 0 -1px 0 rgba(0,0,0,.08);
    .rk-footer-inner {
        color: #fff;
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