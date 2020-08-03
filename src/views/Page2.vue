<template>
  <div class="page2">
    <el-container class="p1content">
      <el-header>
        <div class="p1header">
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6">
              <span>全部</span>
              <el-dropdown>
                <el-button type="primary">
                  更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="6">
              <el-button type="primary">
                更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<style lang="less" scoped>
.page1 {
  width: 980px;
  margin: 0 auto;
}
.p1content {
  border-left-style: groove;
  border-left-color: #ececec;
  border-left-width: thin;
  border-right-style: groove;
  border-right-color: #ececec;
  border-right-width: thin;
}
.p1header {
  height: 50px;
  background-color: rgb(174, 230, 188);
}
</style>
