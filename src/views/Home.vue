<template>
  <div class="home">
    <el-container>
      <el-header style="height:100%">
        <div class="nenav">
          <div class="outnav">
            <el-row>
              <el-col :span="16">
                <div class="nav" style="display:flex;">
                  <div class="navlogo">
                    <h1><a href="/page1">网易云音乐，与你相伴每一天</a></h1>
                  </div>
                  <div class="menu">
                    <el-menu
                      :default-active="activeIndex"
                      background-color="#242424"
                      text-color="#b7b7b7"
                      active-text-color="#f3f3f3"
                      class="el-menu-demo"
                      mode="horizontal"
                      @select="handleSelect"
                      router="true"
                    >
                      <el-menu-item index="page1">
                        <a>发现音乐</a>
                        <em class="el-icon-upload row"></em>
                      </el-menu-item>
                      <el-menu-item index="page2">
                        <a>我的音乐</a>
                      </el-menu-item>
                      <el-menu-item index="2">
                        <a>朋友</a>
                      </el-menu-item>
                      <el-menu-item index="3">
                        <a>商城</a>
                      </el-menu-item>
                      <el-menu-item index="4">
                        <a>音乐人</a>
                      </el-menu-item>
                      <el-menu-item index="5">
                        <a>下载客户端</a>
                      </el-menu-item>
                    </el-menu>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <el-row class="user">
                  <el-col :span="10">
                    <el-input
                      placeholder="音乐/视频/电台/用户"
                      prefix-icon="el-icon-search"
                      v-model="input21"
                      size="mini"
                      id="search"
                    >
                    </el-input>
                  </el-col>
                  <el-col :span="8">
                    <el-button
                      type="info"
                      plain
                      round
                      size="small"
                      class="btninfo"
                    >
                      创作者中心
                    </el-button>
                  </el-col>
                  <el-col :span="6">
                    <div class="joaei el-icon-loading"><span></span></div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="headerstrip"></div>
      </el-header>
      <el-main><router-view /></el-main>
      <el-footer
        style="height:100%;height: 100%;
          border-top-style: groove;
          border-top-color: #ececec;
          border-top-width: thin;"
      >
        <div class="w">
          <el-row>
            <el-col :span="12">
              <div class="copy">
                <p class="link" id="music-link">
                  <a
                    href="//st.music.163.com/official-terms/service"
                    target="_blank"
                    class="item s-fc4"
                  >
                    服务条款
                  </a>
                  <span class="line">|</span>
                  <a
                    href="//st.music.163.com/official-terms/privacy"
                    target="_blank"
                    class="item s-fc4"
                  >
                    隐私政策
                  </a>
                  <span class="line">|</span>
                  <a
                    href="//st.music.163.com/official-terms/children"
                    target="_blank"
                    class="item s-fc4"
                  >
                    儿童隐私政策
                  </a>
                  <span class="line">|</span>
                  <a
                    href="//music.163.com/st/staticdeal/complaints.html"
                    target="_blank"
                    class="item s-fc4"
                  >
                    版权投诉指引
                  </a>
                  <span class="line">|</span>
                  <a
                    id="g_feedback"
                    href="#"
                    class="item s-fc4"
                    onclick="nm.x.feedback();return false;"
                    hidefocus="true"
                  >
                    意见反馈
                  </a>
                  <span class="line">|</span><a class="s-fc4"></a>
                </p>
                <p class="right s-fc3">
                  <span class="sep span">网易公司版权所有©1997-2020</span>
                  <span class="span">杭州乐读科技有限公司运营：</span>
                  <a
                    href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
                    target="_blank"
                    class="alink s-fc3"
                  >
                    浙网文[2018]3506-263号
                  </a>
                </p>
                <p class="contact s-fc3">
                  <span class="sep span">
                    违法和不良信息举报电话：0571-89853516
                  </span>
                  <span class="span">举报邮箱：</span>
                  <a class="alink" href="mailto:ncm5990@163.com">
                    ncm5990@163.com
                  </a>
                </p>
                <p class="right s-fc3">
                  <span class="sep span">粤B2-20090191-18</span>
                  <a
                    href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="alink s-fc3"
                  >
                    工业和信息化部备案管理系统网站
                  </a>
                  <a
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="alink s-fc3 police-link"
                  >
                    <span class="police-logo"></span>
                    <span class="police-text">浙公网安备 33010902002564号</span>
                  </a>
                </p>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="footerlogo">
                <ul class="enter fr">
                  <li class="unit">
                    <a
                      class="logo logonew logo-amped f-tid"
                      href="https://web-amped.music.163.com/"
                      target="_blank"
                    ></a>
                    <span class="tt tt-amped"></span>
                  </li>
                  <li class="unit">
                    <a
                      class="logo logonew logo-auth f-tid"
                      href="//music.163.com/st/userbasic#/auth"
                      target="_blank"
                    ></a>
                    <span class="tt tt-auth"></span>
                  </li>
                  <li class="unit">
                    <a
                      class="logo logonew logo-musician f-tid"
                      href="//music.163.com/recruit"
                      target="_blank"
                    ></a>
                    <span class="tt tt-musician"></span>
                  </li>
                  <li class="unit">
                    <a
                      class="logo logonew logo-reward f-tid"
                      href="//music.163.com/web/reward"
                      target="_blank"
                    ></a>
                    <span class="tt tt-reward"></span>
                  </li>
                  <li class="unit">
                    <a
                      class="logo logonew logo-cash f-tid"
                      href="//music.163.com/uservideo#/plan"
                      target="_blank"
                    ></a>
                    <span class="tt tt-cash"></span>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input21: "",
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  created() {
    console.log("Profile created");
    document.title = "网易云音乐";
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less" scoped>
.w {
  width: 980px;
  margin: 0 auto;
}
.navlogo a {
  background: url("../assets/topbar.png");
}
.navlogo a {
  float: left;
  width: 157px;
  height: 100%;
  padding-right: 20px;
  text-indent: -9999px;
}
.menu {
  /deep/.el-menu {
    border-bottom-style: none;
  }
  /deep/.el-menu > li {
    border-bottom-style: none;
    height: 70px;
  }
  /deep/.el-menu > li > a {
    font-size: 14px;
    margin-top: 5px;
    display: block;
  }
  /deep/.el-menu-item:active {
    border-bottom: none;
  }
  .el-menu-item.is-active {
    background-color: #000 !important;
  }
}
.el-icon-upload {
  float: left;
  margin-left: 21px;
  color: #c20c0c;
}
.row {
  display: none;
}
.btninfo {
  border: 1px solid #8b8b8b;
  background-color: #242424;
  color: #bababa;
  height: 32px;
  width: 98px;
}
.joaei {
  font-size: 30px;
  color: firebrick;
  float: left;
}
.outnav {
  width: 1100px;
  margin: 0 auto;
}
.w p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.el-menu-demo {
  height: 70px;
}
.el-menu-demo lis {
  height: 70px;
  text-align: center;
}
.user {
  margin-top: 19px;
}
.headerstrip {
  z-index: 90;
  height: 5px;
  box-sizing: border-box;
  background-color: #c20c0c;
}
.copy {
  float: left;
  width: 520px;
  padding-top: 15px;
  line-height: 21px;
}
.copy p {
  margin: 0 0;
  float: left;
}
/deep/.el-header,
.el-main,
.el-footer {
  padding: 0 0;
  margin: 0 0;
}
.nenav {
  width: 100%;
  height: 70px;
  margin: 0 auto;
  background-color: #242424;
}
/deep/.el-input__inner {
  /* 搜索框圆角 */
  border-radius: 13px;
}
.footerlogo li {
  float: left;
}
.sep {
  margin-right: 14px;
}
.police-logo {
  width: 14px;
  height: 14px;
  background: url("../assets/police.png") no-repeat;
  background-size: cover;
  display: inline-block;
  margin-right: 2px;
  vertical-align: -2px;
}
.footerlogo {
  height: 108.33px;
}
.logonew {
  display: block;
  float: none;
  width: 50px;
  height: 45px;
  margin: 0 auto;
}
.logo {
  background: url("../assets/foot_enter_new.png") no-repeat;
  background-size: 110px 552px;
}
.logo-amped {
  background-position: -63px -456.5px;
}
.tt {
  display: inline-block;
  margin: 5px 5px 0;
  width: 52px;
  height: 14px;
  background: url("../assets/foot_enter_tt.png") no-repeat;
  background-size: 180px 139px;
}
.tt-amped {
  background-position: 0 -108px;
  margin-left: -6px;
  width: 72px;
}
.enter {
  margin-top: 25px;
}
.unit {
  float: left;
  width: 60px;
  height: 70px;
  margin-left: 30px;
  text-align: center;
  color: #666;
}
</style>
