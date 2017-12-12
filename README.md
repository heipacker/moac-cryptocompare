# 项目说明：
* moac-cryptocompare 墨客的价格工具


# 开发流程：
* git checkout develop
* git checkout -b feature_20161206_1
* 开发feature后执行 git push -u origin feature_20161206_1:feature_20161206_1
* 在gitlab上发起一个merge request等待其他成员合并到develop
* 发布的版本要合并到master


# 部署流程：
* install & run
 - option: npm install nrm -g 
 - npm install
 - cd bin && node www.js
 - nohup `export NODE_ENV=develop && node www.js` &
