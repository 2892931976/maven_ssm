#说明
java和react集成
#框架
前端:react+redux<br/>
后端:maven+springmvc+spring+mybatis<br/>
#执行
bower install(可以没有,已经放入了webapp/public/static文件中,方便下载)<br/>
npm install<br/>
npm run build<br/>
npm run start<br/>
server start => localhost:8080<br/>
#主要功能:
1.登录<br/>
2.查询(列表查询,个人查询:支持模糊查询)<br/>
3.分页<br/>
4.后续会继续完善<br/>
#关键问题
我觉得主要问题只有一个,就是springmvc对于前端路由的拦截问题,配置url-pattern的时候,对于前端路由应该单独找一个servlet来负责转发。具体查看com.hd.servlet/UrlServlet
#项目截图











