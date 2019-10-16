<template>
    <el-container>
        <el-container>
            <el-aside width="23%">
                <div class="app-logo">
                    <!-- <img src="./assets/logo.png"/> -->
                    <p class="name">TF-<span style="color: #a5c07c;">Kafka</span></p>
                </div>
                <ul class="nav nav-list bs-docs-sidenav">
                    <li v-bind:class="{active: pageIndex == 1}" @click="doChangePage(1)">
                        <router-link to="/">Dashboard<i class="el-icon-arrow-right"></i></router-link>
                    </li>
                    <li v-bind:class="{active: pageIndex == 2}" @click="doChangePage(2)">
                        <router-link to="/logging">Logging<i class="el-icon-arrow-right"></i></router-link>
                    </li>
                    <li v-bind:class="{active: pageIndex == 3}" @click="doChangePage(3)">
                        <router-link to="/cluster">Cluster<i class="el-icon-arrow-right"></i></router-link>
                    </li>
                    <li v-bind:class="{active: pageIndex == 4}" @click="doChangePage(4)">
                        <router-link to="/java-properties">Java Properties<i class="el-icon-arrow-right"></i></router-link>
                    </li>
                    <li v-bind:class="{active: pageIndex == 5}" @click="doChangePage(5)">
                        <router-link to="/thread-dump">Thread Dump<i class="el-icon-arrow-right"></i></router-link>
                    </li>
                    <li v-bind:class="{active: pageIndex == 6}" @click="doChangePage(6)">
                        <router-link to="/broker-config">Broker Config<i class="el-icon-arrow-right"></i></router-link>
                    </li>
                    <li v-bind:class="{active: pageIndex == 7}" @click="doChangePage(7)">
                        <router-link to="/topics">Topics<i class="el-icon-arrow-right"></i></router-link>
                    </li>
                </ul>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
        <el-footer>
            <div class="footer">
                <a target="_blank" href="http://192.168.12.95/zxcity/tfkafka">Project</a> ·
                <a target="_blank" href="http://192.168.12.95/zxcity/tfkafka/blob/master/README.md">Documents</a>
            </div>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    data: function(){
        return {
            pageIndex: 1
        }
    },
    methods: {
        doChangePage (pageIndex) {
            this.pageIndex = pageIndex;
        }
    }
}
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
    position: relative;
    padding-top: 40px;
}
.el-aside {
    padding-left: 20px;
}
.el-main {
    padding-top: 60px;
}
.app-logo {
    .name {
        font-weight: bold;
        font-size: 40px;
        color: #df9f6b;
        margin: 0;
        padding: 0;
    }
    img {
        height: 80px;
    }
}
.nav {
    margin-bottom: 20px;
    margin-left: 0;
    list-style: none;
}
.nav-list {
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 0;
}
.bs-docs-sidenav {
    width: 228px;
    margin: 30px 0 0;
    padding: 1px;
    background-color: #fff;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    -webkit-box-shadow: 0 1px 4px rgba(0,0,0,.065);
    -moz-box-shadow: 0 1px 4px rgba(0,0,0,.065);
    box-shadow: 0 1px 4px rgba(0,0,0,.065);
    li {
        line-height: 20px;
        display: list-item;
        a {
            display: block;
            margin: 0 0 -1px;
            padding: 8px 14px;
            border: 1px solid #e5e5e5;
            color: #0088cc;
            text-decoration: none;
            .el-icon-arrow-right {
                float: right;
                font-weight: bold;
                color: #e5e5e5;
            }
        }
        a:hover {
            color: #ffffff;
            background-color: #0088cc;
        }
        // a:focus {
        //     color: #ffffff;
        //     background-color: #0088cc;
        // }
    }
    li:first-child {
        a {
            border-radius: 6px 6px 0 0;
        }
    }
    .active {
        a {
            color: #ffffff;
            background-color: #0088cc;
            position: relative;
            z-index: 2;
            padding: 8px 14px;
            text-shadow: 0 1px 0 rgba(0,0,0,.15);
            box-shadow: inset 1px 0 0 rgba(0,0,0,.1), inset -1px 0 0 rgba(0,0,0,.1);
        }
    }
}
.el-footer {
    margin-top: 70px;
    padding: 0;
    .footer {
        border-top: 1px solid #e5e5e5;
        padding: 30px 20px;
        text-align: center;
        background-color: #f5f5f5;
        a {
            color: #0088cc;
            text-decoration: none;
        }
    }
}
</style>
