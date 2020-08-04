<template>
  <div class="page1">
    <div class="navtotal">
      <div class="navwrap">
        <ul class="nav">
          <li>
            <a href="#"><em>推荐</em></a>
          </li>
          <li>
            <a><em>排行榜</em></a>
          </li>
          <li>
            <a><em>歌单</em></a>
          </li>
          <li>
            <a><em>主播电台</em></a>
          </li>
          <li>
            <a><em>歌手</em></a>
          </li>
          <li>
            <a><em>新碟上架</em></a>
          </li>
        </ul>
      </div>
    </div> 
    <div class="navshow">
      <div class="piclist">
        <div class="wrap fl">
          <el-carousel height="285px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="wrappost fr">
          <h1>im show in</h1>
        </div>
      </div>
    </div>
    <div class="content">
        <div class="partleft">
          <div class="leftcontent">
            <div class="sec1hot">
              <div class="hothead">
                <div class="hotnav">
                  <a href="/discover/playlist/" class="tit f-ff2 f-tdn">热门推荐</a>
                  <div class="tab">
                    <a href="/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD" class="s-fc3">华语</a>
                    <span class="line">|</span>
                    <a href="/discover/playlist/?cat=%E6%B5%81%E8%A1%8C" class="s-fc3">流行</a>
                    <span class="line">|</span>
                    <a href="/discover/playlist/?cat=%E6%91%87%E6%BB%9A" class="s-fc3">摇滚</a>
                    <span class="line">|</span>
                    <a href="/discover/playlist/?cat=%E6%B0%91%E8%B0%A3" class="s-fc3">民谣</a>
                    <span class="line">|</span>
                    <a href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90" class="s-fc3">电子</a>
                  </div>
                  <span class="more">
                    <a href="/discover/playlist/" class="s-fc3">更多</a>
                    <i class="cor s-bg s-bg-6">&nbsp;</i>
                  </span>
                </div>
              </div>
              <div class="hotcard">
                <div class="card">
                  <ul>
                    <li><div>
                      <a href="#"><span>sfafa</span></a>
                      <h4>new music</h4>
                    </div></li>
                    <li><div>
                      <a href="#"><span>sfafa</span></a>
                      <h4>new music</h4>
                    </div></li>
                    <li><div>
                      <a href="#"><span>sfafa</span></a>
                      <h4>new music</h4>
                    </div></li>
                    <li><div>
                      <a href="#"><span>sfafa</span></a>
                      <h4>new music</h4>
                    </div></li>
                    <li><div>
                      <a href="#"><span>sfafa</span></a>
                      <h4>new music</h4>
                    </div></li>
                    <li><div>
                      <a href="#"><span>sfafa</span></a>
                      <h4>new music</h4>
                    </div></li>
                    <li><div>
                      <a href="#"><span>sfafa</span></a>
                      <h4>new music</h4>
                    </div></li>
                    <li><div>
                      <a href="#"><span>sfafa</span></a>
                      <h4>new music</h4>
                    </div></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="partright">
        </div>
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
/* >>>幻灯片样式 */
.navshow {
  width: 100%;
  background-color: blueviolet;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/* 导航栏>>> */
.navtotal {
  z-index: 90;
  height: 30px;
  box-sizing: border-box;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
}
.navwrap {
  width: 1100px;
  height: 34px;
  margin: 0 auto;
  position: relative;
  zoom: 1;
}
.nav {
  height: 20px;
  padding: 2px 150px;
}
.nav li {
  float: left;
  padding-left: 50px;
}
.nav em {
  display: block;
  border-radius: 50px;
  padding: 3px 13px;
  font-weight: 100;
  font-weight: 100;
  /* width: 38px; */
  font-style: normal;
  color: #fff;
}
.nav a:visited {
  background-color: #9b0909;
}
.nav em:hover {
  background-color: #9b0909;
}
/* 导航栏<<< */
/* 幻灯片样式<<< */
.piclist {
  width: 980px;
  background-color: aquamarine;
  height: 285px;
  margin: 0 auto;
}
.wrap {
  width: 730px;
  float: left;
}
.wrappost {
  width: 250px;
  float: right;
}
/* content>>> */
.content {
  margin: 0 auto;
  position: relative;
  width: 980px;
  height: 1000px;
  background-color: rgb(148, 229, 231);
}
/* left>>> */
.partleft {
  float: left;
  width: 730px;
  height: 500px;
  background-color: #dbe8ed;
  .leftcontent {
    margin: 20px 16px 40px;
    width: 700px;
    height: 100%;
    background-color: #fff;
    overflow: hidden;
    .sec1hot {
      .hothead {
        height: 33px;
        width: 656px;
        padding: 0 10px 0 34px;
        border-bottom: 2px solid #C10D0C;
        display: block;
        .tit {
          padding: 3px 0;
          float: left;
          font-size: 20px;
          font-weight: normal;
          line-height: 28px;
          cursor: pointer;
          color: #333;
        }
        .tab {
          float: left;
          padding: 9px 20px;
        }
        .more {
          float: right;
          padding: 9px 30px;
        }
        li {
          float: left;
          padding: 9px 20px;
        }
      }
      .card {
        position: relative;
        height: 100%;
        ul {
          float: left;
          position: absolute;
          left: -28px;
          top: 20px;
        }
        li {
          width: 140px;
          height: 204px;
          padding-left: 42px;
          float: left;
          background-color: #fff;
          a {
            background: url("../assets/cardpic.jpg");
            width: 140px;
            height: 140px;
            display: block;
            position: relative;
            span {
              position: absolute;
              bottom: 0;
              left: 0;
              box-shadow: inset 0px 0px 20px 0px #c1b1b1;
              width: 140px;
              height: 27px;
            }
          }
        }
      }
    }
  }
}
/* left<<< */
/* right>>> */
.partright {
  float: right;
  width: 250px;
  height: 500px;
  background-color: chartreuse;
}
/* right<<< */
/* content<<< */
</style>
