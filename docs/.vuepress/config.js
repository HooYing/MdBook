module.exports = {
    title: '灰灰烟影',
    description: '个人博客',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '首页', link: '/'},
        {text: 'github', link: 'https://github.com/HooYing'}      
      ],
      sidebar: { // 侧边栏配置
        '/CPP/':[
        {
          title: "欢迎",
          children: [
            ''
          ]
        },
        {
          title: "栈帧",
          children:[
            '栈帧'
          ]
        },
		{
          title: "C++多线程",
          children:[
            'C++多线程'
          ]
        }
		],
		'/Note/':[
		{
			title: "Spring、SpringMVC、Mybatis心得与笔记",
			chileren:[
				'笔记'
			]
		}
		]
      },
      sidebarDepth: 3, // 侧边栏显示2级
      logo: '/logo.jpg',
    }
  };