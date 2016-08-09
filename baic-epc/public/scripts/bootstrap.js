var loadScriptPaths = {
	login: {
		development: ['/login/main.js'],
		release: ['login.min.js']
	},
	home: {
		development: [],
		release: []
	},
	catalog: {
		development: ['catalog/main.js'],
		release: []
	},
	model: {
		development: ['model/main.js'],
		release: []
	},
	usage: {
		development: ['usage/main.js'],
		release: []
	},
	detail: {
		development: ['detail/main.js'],
		release: []
	},
	survey: {
		development: ['pac/survey/main.js'],
		release: []
	},
	online: {
		development: ['pac/online/main.js'],
		release: []
	},
	pac_detail: {
		development: ['pac/online/detail/main.js'],
		release: []
	},
	myquestion: {
		development: ['pac/online/myquestion.js'],
		release: []
	},
	question_search: {
		development: ['pac/online/question_search.js'],
		release: []
	},
	pwdInfo: {
		development: ['/pwdInfo/main.js'],
		release: ['pwdInfo.min.js']
	}
};

(function() {
	var requireConfig = require.s.contexts._.config,
		loadModule = loadScriptPaths[pageConfig.pageCode],
		loadScriptSrc, baseUrl = requireConfig.baseUrl;

	var buildUrl = function(paths) {
		for (var i = 0; i < paths.length; i++) {
			if (pageConfig.isLocal) {
				paths[i] = baseUrl + 'app/' + paths[i];
			} else {
				paths[i] = pageConfig.releaseScripts + paths[i] + "?v=" + pageConfig.releaseVersion;
			}
		}
		return paths;
	};

	if (pageConfig.isLocal) {
		loadScriptSrc = buildUrl(loadModule.development);
		require(loadScriptSrc);
	} else {
		loadScriptSrc = buildUrl(loadModule.release);
		require(["jquery"], function() {
			require(loadScriptSrc);
		});
	}
})();