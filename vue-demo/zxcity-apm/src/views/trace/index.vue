<template>
    <div>
        <div class="rk-trace flex-v">
            <div class="rk-trace-search">
                <div>
                    <a class="rk-trace-search-btn r">
                        <span class="mr-5 vm">更多</span>
                        <i class="el-icon-arrow-up" style="font-weight: bold;"></i>
                    </a>
                    <a class="rk-trace-search-btn bg-blue r mr-10">
                        <i class="el-icon-search" style="font-weight: bold;"></i>
                        <span class="vm"> 搜索</span>
                    </a>
                    <div class="flex-h">
                        <div data-v-125e3fb1="" class="rk-trace-sel-wrapper cp flex-h">
                            <div data-v-125e3fb1="" class="rk-trace-bar-i flex-h">
                                <div data-v-125e3fb1="" class="mr-15 rk-trace-bar-i-text">
                                    <div data-v-125e3fb1="" class="sm grey">环境</div>
                                    <div data-v-125e3fb1="" class="ell">37test</div>
                                </div>
                                <i class="el-icon-arrow-down" style="font-weight: bold;"></i>
                            </div>
                        </div>
                        <div data-v-125e3fb1="" class="rk-trace-sel-wrapper cp flex-h">
                            <div data-v-125e3fb1="" class="rk-trace-bar-i flex-h">
                                <div data-v-125e3fb1="" class="mr-15 rk-trace-bar-i-text">
                                    <div data-v-125e3fb1="" class="sm grey">服务</div>
                                    <div data-v-125e3fb1="" class="ell">ProjectA</div>
                                </div>
                                <i class="el-icon-arrow-down" style="font-weight: bold;"></i>
                            </div>
                        </div>
                        <div data-v-125e3fb1="" class="rk-trace-sel-wrapper cp flex-h">
                            <div data-v-125e3fb1="" class="rk-trace-bar-i flex-h">
                                <div data-v-125e3fb1="" class="mr-15 rk-trace-bar-i-text">
                                    <div data-v-125e3fb1="" class="sm grey">实例</div>
                                    <div data-v-125e3fb1="" class="ell">projectA-pid:32224</div>
                                </div>
                                <i class="el-icon-arrow-down" style="font-weight: bold;"></i>
                            </div><!---->
                        </div>
                        <div data-v-125e3fb1="" class="rk-trace-sel-wrapper cp flex-h">
                            <div data-v-125e3fb1="" class="rk-trace-bar-i flex-h">
                                <div data-v-125e3fb1="" class="mr-15 rk-trace-bar-i-text">
                                    <div data-v-125e3fb1="" class="sm grey">状态</div>
                                    <div data-v-125e3fb1="" class="ell">Success</div>
                                </div>
                                <i class="el-icon-arrow-down" style="font-weight: bold;"></i>
                            </div><!---->
                        </div>
                        <div class="mr-10" style="padding: 3px 15px 0px;">
                            <div class="sm grey">端点名称</div>
                            <input type="text" class="rk-trace-search-input">
                        </div>
                    </div>
                </div>
                <div class="rk-trace-search-more flex-h" style="">
                    <div class="mr-15">
                        <span class="sm b grey mr-10">追踪ID:</span>
                        <input type="text" class="rk-trace-search-input dib">
                    </div>
                    <div class="mr-15">
                        <span class="sm b grey mr-10">持续时间:</span>
                        <div class="rk-trace-search-range dib">
                            <input class="vm tc">
                            <span class="grey vm">-</span>
                            <input class="vm tc">
                        </div>
                    </div>
                    <div>
                        <span class="sm b grey mr-5">时间范围:</span>
                        <div data-v-3ddef5d0="" class="datepicker sm datepicker-range">
                            <span style="line-height: 28px;">2019-09-03 09:32:23 ~ 2019-09-03 10:32:10</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rk-trace-inner">
                <div class="rk-trace-t flex-v">
                    <div class="rk-trace-t-tool flex-h">
                        <span class="rk-page flex-h">
                            <i class="el-icon-arrow-left mr-5 cp" style="font-weight: bold;margin-left: 5px;"></i>
                            <input type="text" class="rk-page-input tc mr-5" />
                            <span class="mr-5">/</span>
                            <span class="mr-5">10</span>
                            <i class="el-icon-arrow-right cp" style="font-weight: bold;"></i>
                        </span>
                        <select class="grey">
                            <option value="BY_START_TIME">开始时间</option>
                            <option value="BY_DURATION">持续时间</option>
                        </select>
                    </div>
                    <div class="rk-trace-t-wrapper scroll_hide">
                        <table class="rk-trace-t">
                            <tr class="rk-trace-tr cp">
                                <td class="rk-trace-td rk-trace-success">
                                    <div class="ell mb-5 blue">
                                        <span class="b">/projectA/{name}</span>
                                    </div>
                                    <div class="grey ell sm">
                                        <span class="rk-tag mr-10 sm">4277 ms</span>2019-09-02 04:11:07
                                    </div>
                                </td>
                            </tr>
                            <tr class="rk-trace-tr cp">
                                <td class="rk-trace-td rk-trace-success">
                                    <div class="ell mb-5 blue">
                                        <span class="b">/projectA/{name}</span>
                                    </div>
                                    <div class="grey ell sm">
                                        <span class="rk-tag mr-10 sm">4221 ms</span>2019-09-02 04:02:10
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="rk-trace-detail flex-v">
                    <div class="rk-trace-detail-wrapper clear">
                        <h5 class="mb-5 mt-0">
                            <span class="vm">/projectA/{name}</span>
                        </h5>
                        <div class="mb-5 blue sm">
                            <select class="rk-trace-detail-ids">
                                <option value="21.49.15673681303494345">21.49.15673681303494345</option>
                            </select>
                        </div>
                        <a class="rk-btn mr-5 sm r">
                            <i class="el-icon-s-data" style="font-weight: bold;"></i>
                            表格
                        </a>
                        <a class="rk-btn mr-5 sm r ghost">
                            <i class="el-icon-s-marketing" style="font-weight: bold;"></i>
                            树结构
                        </a>
                        <a class="rk-btn mr-5 sm r ghost">
                            <i class="el-icon-date" style="font-weight: bold;"></i>
                            列表
                        </a>
                        <div class="rk-tag mr-5">起始点</div>
                        <span class="mr-15 sm">2019-09-02 04:02:10</span>
                        <div class="rk-tag mr-5">持续时间</div>
                        <span class="mr-15 sm">4221 ms</span>
                        <div class="rk-tag mr-5">跨度</div>
                        <span class="sm">11</span>
                    </div>
                    <div class="trace-detail-chart-table">
                        <div class="trace">
                            <div class="trace-header">
                                <div class="method">Method</div>
                                <div class="start-time">Start Time</div>
                                <div class="gap">Gap(ms)</div>
                                <div class="exec-ms">Exec(ms)</div>
                                <div class="exec-percent">Exec(%)</div>
                                <div class="self">Self(ms)</div>
                                <div class="api">API</div>
                                <div class="application">Service</div>
                            </div>
                            <div style="height: 350px;">
                                <p>调用链</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="rk-footer">
            <div class="rk-footer-inner">
                <div class="flex-h"></div>
                <div class="flex-h sm">
                    <p>2019-09-02 09:20:12 ~ 2019-09-02 10:10:23  &nbsp;&nbsp;中&nbsp;&nbsp; 服务器时区 UTC + 8</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: "trace"
}
</script>

<style lang="scss" scoped>
a, article, aside, button, div, footer, h1, h2, h3, h4, h5, header, img, input, label, li, nav, ol, section, select, textarea, ul {
    box-sizing: border-box;
}
.rk-trace {
    -webkit-box-flex: 1;
    flex-grow: 1;
    height: 100%;
    min-height: 0;
}
.flex-v {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
}
.rk-trace-search {
    flex-shrink: 0;
    background-color: #333840;
    color: #eee;
    width: 100%;
    padding: 3px 15px 8px;
}
.rk-trace-search-btn {
    padding: 3px 9px;
    background-color: #484b55;
    border-radius: 4px;
    margin-top: 12px;
}
.r {
    float: right;
}
a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
}
.mr-5 {
    margin-right: 5px;
}
.vm {
    vertical-align: middle;
}
.rk-trace-search-btn.bg-blue {
    background-color: #448dfe;
}
.mr-15 {
    margin-right: 15px;
}
.mr-10 {
    margin-right: 10px;
}
.flex-h {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
}
.rk-trace-sel-wrapper {
    position: relative;
    z-index: 2;
    height: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.cp {
    cursor: pointer;
}
.rk-trace-bar-i {
    height: 100%;
    padding: 0 15px;
    border-right: 2px solid #252a2f;
}
.rk-trace-bar-i-text {
    max-width: 150px;
    min-width: 80px;
}
.rk-trace-sel-wrapper .sm {
    line-height: 13px;
}
.grey {
    color: #a7aebb;
}
.sm {
    font-size: 12px;
}
.ell {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.rk-trace-search-input {
    border-style: unset;
    outline: 0;
    padding: 2px 5px;
    border-radius: 3px;
}
input, select, textarea {
    font-size: 100%;
    font-family: inherit;
}
.rk-trace-search-more {
    background-color: #484b55;
    padding: 4px 10px;
    border-radius: 3px;
    margin-top: 8px;
    position: relative;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
}
.b {
    font-weight: 500;
}
.dib {
    display: inline-block;
}
.rk-trace-search-range {
    background-color: #fff;
    padding: 1px;
    border-radius: 3px;
}
.rk-trace-search-range input {
    width: 38px;
    border-style: unset;
    outline: 0;
}
.tc {
    text-align: center;
}
.vm {
    vertical-align: middle;
}
.rk-trace-inner {
    height: 100%;
    display: flex;
    min-height: 0;
    background-color: #fff;
}
.rk-trace-t {
    width: 100%;
    border-spacing: 0;
    table-layout: fixed;
    -webkit-box-flex: 1;
    flex-grow: 1;
    height: 100%;
    position: relative;
}
.rk-trace-t-tool {
    flex-shrink: 0;
    background-color: rgba(196,200,225,.2);
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-right: 5px;
    padding-top: 1px;
    border-bottom: 1px solid rgba(193,197,202,.25);
    border-right: 1px solid rgba(193,197,202,.25);
    height: 35px;
}
.rk-trace-t-tool select {
    background-color: transparent;
    outline: 0;
    border-style: unset;
}
.rk-trace-t-wrapper {
    overflow: auto;
    -webkit-box-flex: 1;
    flex-grow: 1;
    border-right: 1px solid rgba(0,0,0,.1);
}
.rk-page{
    display: inline-flex;
}
.rk-page-input {
    width: 40px;
    outline: 0;
    border-style: unset;
    border-radius: 4px;
    border: 1px solid rgba(193,197,202,.33);
}
table {
    border-collapse: separate;
}
table > tr {
    vertical-align: middle;
}
tr {
    display: table-row;
    border-color: inherit;
}
.rk-trace-success {
    border-left: 4px solid rgba(46,47,51,.1);
}
.rk-trace-td {
    padding: 8px 10px;
    border-bottom: 1px solid rgba(0,0,0,.07);
}
td {
    display: table-cell;
    vertical-align: inherit;
}
.blue {
    color: #448dfe;
}
.mb-5 {
    margin-bottom: 5px;
}
.rk-trace-detail-ids {
    background-color: transparent;
    outline: 0;
    border-style: unset;
    color: inherit;
    border: 1px solid;
    border-radius: 4px;
}
option {
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
}
.rk-btn {
    padding: 3px 9px;
    background-color: #448dfe;
    border-radius: 4px;
    color: #fff;
    will-change: background-color;
    transition: background-color .3s;
}
.r {
    float: right;
}
.rk-btn.ghost {
    background-color: #333844;
}
.rk-tag {
    display: inline-block;
    border-radius: 4px;
    padding-right: 5px;
    padding-left: 5px;
    background-color: #40454e;
    color: #eee;
}
.rk-trace-success {
    border-left: 4px solid rgba(46,47,51,.1);
}
.rk-trace-td {
    padding: 8px 10px;
    border-bottom: 1px solid rgba(0,0,0,.07);
}
td {
    display: table-cell;
    vertical-align: inherit;
}
.rk-trace-detail {
    flex-shrink: 0;
    height: 100%;
    width: 75%;
    overflow-y: auto;
}
.rk-trace-detail-wrapper{
    padding: 8px 30px;
    border-bottom: 1px solid rgba(0,0,0,.1);
}
.clear:after {
    display: table;
    content: "";
    clear: both;
}
.mb-5 {
    margin-bottom: 5px;
}
.mt-0 {
    margin-top: 0;
}
.rk-footer {
    box-sizing: border-box;
    background-color: #fff;
    flex-shrink: 0;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 1px;
    box-shadow: 0 -1px 0 rgba(0,0,0,.08);
}
.rk-footer-inner {
    color: #515a6e;
    justify-content: space-between;
    -webkit-box-pack: justify;
    display: flex;
    p {
        margin: 0px;
        line-height: 28px;
        font-size: 12px;
        font-weight: bold;
    }
}
.trace {
    font-size: 12px;
    height: 100%;
    overflow: auto;
}
.trace-header {
    display: flex;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid rgba(0,0,0,.1);
}
.trace-header div {
    background-color: #f3f4f9;
    padding: 0 4px;
    border: 1px solid transparent;
    border-right: 1px dotted silver;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.method{
    width: 45%;
}
.start-time {
    width: 5%;
    min-width: 100px;
}
.gap {
    width: 5%;
}
.exec-ms {
    width: 6%;
}
.exec-percent {
    width: 10%;
}
.self {
    width: 5%;
}
.api {
    width: 10%;
}
.application {
    width: 15%;
}
</style>