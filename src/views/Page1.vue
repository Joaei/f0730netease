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
        <div class="wrap" fl>
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
                </div>
                <div class="hotlink">
                </div>
              </div>
              <div class="hotcard">
                <div class="card">
                  <ul>
                    <li><div><a href="#"></a></div></li>
                    <li><div><a href="#"></a></div></li>
                    <li><div><a href="#"></a></div></li>
                    <li><div><a href="#"></a></div></li>
                    <li><div><a href="#"></a></div></li>
                    <li><div><a href="#"></a></div></li>
                    <li><div><a href="#"></a></div></li>
                    <li><div><a href="#"></a></div></li>
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
    height: 300px;
    background-color: coral;
    overflow: hidden;
    .sec1hot {
      .hothead {
        height: 33px;
        width: 656px;
        padding: 0 10px 0 34px;
        border-bottom: 2px solid #C10D0C;
        display: block;
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
          background-color: dodgerblue;
          a {
            background: url("../assets/cardpic.jpg");
            width: 140px;
            height: 140px;
            display: block;
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
