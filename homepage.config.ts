// 存储 nuxt.config 和 app.config 共用的配置

import type { NitroConfig } from 'nitropack'

const author = {
	name: 'fixhcro',
	avatar: 'https://file.furrys.im/img/logo.webp',
	email: 'lpcay@qq.com',
	homepage: 'https://www.furrys.im/',
}

const homepageConfig = {
	title: 'Fixhcro的主页',
	subtitle: '在平凡中点燃微光，照亮自己的远方',
	description: 'Fixhcro的主页。',
	author,
	language: 'zh-CN',
	timezone: 'Asia/Shanghai',
	favicon: 'https://file.furrys.im/img/logo.webp',
	url: 'https://www.furrys.im/',
	blogAtom: 'https://blog.furrys.im/atom.xml',
}

// https://nitro.build/config#routerules
export const routeRules: NitroConfig['routeRules'] = {
	'/api/avatar.png': { redirect: author.avatar },
	'/api/icon.png': { redirect: homepageConfig.favicon },
	'/favicon.ico': { redirect: homepageConfig.favicon },
}

export default homepageConfig
