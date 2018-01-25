webpackJsonp([2, 0], [function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } } var i = a(111),
        o = n(i),
        s = a(821),
        r = n(s),
        c = a(791),
        l = n(c),
        u = a(401),
        p = n(u),
        d = a(126),
        m = a(52),
        f = n(m),
        v = a(118),
        h = a(338),
        x = a(336),
        g = a(342),
        b = a(348),
        _ = a(396),
        P = a(352),
        k = a(339),
        y = a(350),
        w = a(351);
    window.$ = window.jQuery = a(53), a(758), Object.prototype.watch && (Object.prototype.watch = void 0), o.default.use(r.default), f.default.register(v.applicationPlugin, x.authenticationPlugin, h.dashboardPlugin, g.hubpressPlugin, b.githubPlugin, _.templatePlugin, P.sessionStoragePlugin, k.asciidocPlugin, y.pouchDbPlugin, w.rssPlugin); var S = void 0;
    p.default.initStores().then(function(e) { console.log("Content of the store after initStores", e), window.vue_store = e, e.dispatch(d.APPLICATION_INITIALIZE_ROUTES).then(function() { console.log("Routes of the application", e.state.application.routes), S = new r.default({ routes: [{ path: "/login", component: x.LoginComponent }, { path: "/", component: { template: "<router-view></router-view>" }, redirect: "/posts", meta: { auth: !0 }, children: e.state.application.routes }], mode: "hash", scrollBehavior: function(e, t, a) { return a || { x: 0, y: 0 } } }), S.beforeEach(function(t, a, n) { t.matched.some(function(e) { return e.meta.auth }) ? e.state.authentication.isAuthenticated ? n() : n({ path: "/login", query: { redirect: t.fullPath } }) : n() }), new o.default({ el: "#app", router: S, template: "<App/>", store: e, components: { App: l.default }, strict: !0 }) }).then(function(t) { return e.dispatch(d.APPLICATION_INITIALIZE_CONFIG) }).then(function(t) { return e.dispatch(d.APPLICATION_INITIALIZE_APP) }).then(function(t) { return e.dispatch(d.APPLICATION_INITIALIZE_PLUGINS) }).then(function(e) { return S.push(S.currentRoute.query.redirect || "/") }) }) }, , , , , , , function(e, t, a) { "use strict";

    function n(e) { this._config = {}, this.urlJoin = o.urlJoin, this.urlFor = o.urlFor, this.getBaseUrl = o.getBaseUrl, e && i.isObject(e) && this.set(e) } var i = a(4),
        o = a(354),
        s = {};
    n.prototype.set = function(e) { var t, a, n, s, r = "";
        t = e.config || {}, a = e.theme || {}, console.log("========= Set Config ", t), i.merge(this._config, t), t && t.theme && t.theme.navigation && (this._config.theme.navigation = t.theme.navigation), this._config.paths = this._config.paths || {}, this._config.url = t.urls && t.urls.site, n = "/" === r ? "" : r, i.isEmpty(n) || this._config.slugs.protected.push(n.split("/").pop()), s = Date.now(), i.merge(this._config, { paths: { subdir: "", imagesRelPath: "content/images" }, activeTheme: { url: t.urls && t.urls.theme, name: t.theme && t.theme.name }, theme: { url: t.urls && t.urls.theme, title: t.site && t.site.title }, routeKeywords: { tag: "tag", author: "author", page: "page", preview: "p", private: "private" }, slugs: { reserved: ["admin", "app", "apps", "archive", "archives", "categories", "category", "dashboard", "feed", "ghost-admin", "login", "logout", "page", "pages", "post", "posts", "public", "register", "setup", "signin", "signout", "signup", "user", "users", "wp-admin", "wp-login"], protected: ["ghost", "rss"] }, assetHash: s }), o.setConfig(this._config), i.extend(this, this._config), console.log("ConfigManager ==================", this) }, n.prototype.get = function() { return this._config }, n.prototype.isPrivacyDisabled = function(e) { return !1 }, e.exports = new n(s) }, , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var i = a(417),
        o = n(i),
        s = a(128),
        r = n(s),
        c = a(129),
        l = n(c),
        u = a(9),
        p = n(u),
        d = a(385),
        m = n(d),
        f = a(7),
        v = n(f),
        h = function() {
            function e() {
                (0, r.default)(this, e), this.name = null, this.version = null, this.templateCache = new o.default, this.templateOptions = { data: {} }, m.default.loadCoreHelpers() } return (0, l.default)(e, [{ key: "registerTheme", value: function(e, t) { this.setThemeName(t.name), this.setThemeVersion(t.version), this.registerFiles(t.files); var a = e.site || {};
                    a.url = e.urls.site, a.navigation = [], this.templateOptions = { data: { blog: a } } } }, { key: "registerFiles", value: function(e) { var t = this;
                    console.info("Builder - registerFiles"), console.log("Builder - registerFiles", e); var a = /{{!<\s+([A-Za-z0-9\._\-\/]+)\s*}}/;
                    e.forEach(function(e) { if (0 === e.path.indexOf("partials/")) p.default.registerPartial(e.name, e.content);
                        else { var n = { name: e.name, template: p.default.compile(e.content) },
                                i = e.content.match(a);
                            i && (n.layout = i[1]), t.templateCache.set(e.name, n) } }) } }, { key: "template", value: function(e, t, a) { console.info("Builder - template"), console.log("Builder - template", e, t, a), v.default.set(a); var n = this.templateCache.get(e),
                        i = n.template(t, this.templateOptions); return n.layout && (t.body = i, n = this.templateCache.get(n.layout), i = n.template(t, this.templateOptions)), i } }, { key: "setThemeName", value: function(e) { this.name = e } }, { key: "getThemeName", value: function() { return this.name } }, { key: "getThemeVersion", value: function() { return this.version } }, { key: "setThemeVersion", value: function(e) { this.version = e } }, { key: "isTemplateAvailable", value: function(e) { return this.templateCache.get(e) } }]), e }();
    t.default = new h }, , , , , , , , , , , , , function(e, t, a) { "use strict"; var n, i = a(4);
    n = { assetTemplate: i.template("<%= source %>?v=<%= version %>"), linkTemplate: i.template('<a href="<%= url %>"><%= text %></a>'), scriptTemplate: i.template('<script src="<%= source %>?v=<%= version %>"></script>'), stylesheetTemplate: i.template('<link rel="stylesheet" href="<%= source %>">'), inputTemplate: i.template('<input class="<%= className %>" type="<%= type %>" name="<%= name %>" <%= extras %> />'), isProduction: !0 }, e.exports = n }, , , , , , , , , , function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { return ne.default.fire("requestConfig", e) }

    function o(e) { return ne.default.fire("receiveConfig", e) }

    function s(e) { return ne.default.fire("requestSaveConfig", e) }

    function r(e) { return ne.default.fire("receiveSaveConfig", e) }

    function c(e) { return ne.default.fire("hubpress:request-theme", e) }

    function l(e) { return ne.default.fire("hubpress:receive-theme", e) }

    function u(e) { return ne.default.fire("requestSavedAuth", e) }

    function p(e) { return ne.default.fire("receiveSavedAuth", e) }

    function d(e) { return ne.default.fire("hubpress:request-remote-synchronization", e) }

    function m(e) { return ne.default.fire("hubpress:receive-remote-synchronization", e) }

    function f(e) { return ne.default.fire("requestSaveRemotePost", e) }

    function v(e) { return ne.default.fire("receiveSaveRemotePost", e) }

    function h(e) { return ne.default.fire("requestPublishPost", e) }

    function x(e) { return ne.default.fire("receivePublishPost", e) }

    function g(e) { return ne.default.fire("requestLocalPublishedPosts", e) }

    function b(e) { return ne.default.fire("receiveLocalPublishedPosts", e) }

    function _(e) { return ne.default.fire("hubpress:request-rendering-documents", e) }

    function P(e) { return ne.default.fire("hubpress:receive-rendering-documents", e) }

    function k(e) { return ne.default.fire("requestRenderingPost", e) }

    function y(e) { return ne.default.fire("receiveRenderingPost", e) }

    function w(e) { return ne.default.fire("hubpress:request-local-synchronization", e) }

    function S(e) { return ne.default.fire("hubpress:receive-local-synchronization", e) }

    function j(e) { return ne.default.fire("hubpress:request-local-posts", e) }

    function C(e) { return ne.default.fire("hubpress:receive-local-posts", e) }

    function I(e) { return ne.default.fire("hubpress:request-local-post", e) }

    function T(e) { return ne.default.fire("hubpress:receive-local-post", e) }

    function A(e) { return ne.default.fire("requestDeleteLocalPost", e) }

    function O(e) { return ne.default.fire("receiveDeleteLocalPost", e) }

    function R(e) { return ne.default.fire("requestSaveLocalPost", e) }

    function q(e) { return ne.default.fire("receiveSaveLocalPost", e) }

    function L(e) { return ne.default.fire("requestSelectedPost", e) }

    function E(e) { return ne.default.fire("receiveSelectedPost", e) }

    function N(e) { return ne.default.fire("requestAuthentication", e) }

    function D(e) { return e.nextState.twoFactorRequired ? payload : ne.default.fire("receiveAuthentication", e) }

    function z(e) { return ne.default.fire("requestLogout", e) }

    function $(e) { return ne.default.fire("receiveLogout", e) }

    function M(e) { return ne.default.fire("requestGenerateIndex", e) }

    function G(e) { return ne.default.fire("receiveGenerateIndex", e) }

    function U(e) { return ne.default.fire("requestGeneratePost", e) }

    function F(e) { return ne.default.fire("receiveGeneratePost", e) }

    function B(e) { return ne.default.fire("requestGeneratePosts", e) }

    function H(e) { return ne.default.fire("receiveGeneratePosts", e) }

    function V(e) { return ne.default.fire("requestGenerateTags", e) }

    function Y(e) { return ne.default.fire("receiveGenerateTags", e) }

    function Z(e) { return ne.default.fire("requestGenerateAuthors", e) }

    function W(e) { return ne.default.fire("receiveGenerateAuthors", e) }

    function J(e) { return ne.default.fire("requestSaveRemotePublishedElements", e) }

    function Q(e) { return ne.default.fire("receiveSaveRemotePublishedElements", e) }

    function K(e) { return ne.default.fire("requestDeleteRemotePublishedPost", e) }

    function X(e) { return ne.default.fire("receiveDeleteRemotePublishedPost", e) }

    function ee(e) { return ne.default.fire("requestDeleteRemotePost", e) }

    function te(e) { return ne.default.fire("receiveDeleteRemotePost", e) }
    Object.defineProperty(t, "__esModule", { value: !0 }); var ae = a(52),
        ne = n(ae);
    t.default = { fireRequestConfig: i, fireReceiveConfig: o, fireRequestSaveConfig: s, fireReceiveSaveConfig: r, fireRequestTheme: c, fireReceiveTheme: l, fireRequestSavedAuth: u, fireReceiveSavedAuth: p, fireRequestRemoteSynchronization: d, fireReceiveRemoteSynchronization: m, fireRequestRenderingDocuments: _, fireReceiveRenderingDocuments: P, fireRequestRenderingPost: k, fireReceiveRenderingPost: y, fireRequestLocalSynchronization: w, fireReceiveLocalSynchronization: S, fireRequestLocalPosts: j, fireReceiveLocalPosts: C, fireRequestLocalPost: I, fireReceiveLocalPost: T, fireRequestDeleteLocalPost: A, fireReceiveDeleteLocalPost: O, fireRequestSaveLocalPost: R, fireReceiveSaveLocalPost: q, fireRequestSaveRemotePost: f, fireReceiveSaveRemotePost: v, fireRequestPublishPost: h, fireReceivePublishPost: x, fireRequestLocalPublishedPosts: g, fireReceiveLocalPublishedPosts: b, fireRequestSelectedPost: L, fireReceiveSelectedPost: E, fireRequestAuthentication: N, fireReceiveAuthentication: D, fireRequestLogout: z, fireReceiveLogout: $, fireRequestGenerateIndex: M, fireReceiveGenerateIndex: G, fireRequestGeneratePost: U, fireReceiveGeneratePost: F, fireRequestGeneratePosts: B, fireReceiveGeneratePosts: H, fireRequestGenerateTags: V, fireReceiveGenerateTags: Y, fireRequestGenerateAuthors: Z, fireReceiveGenerateAuthors: W, fireRequestSaveRemotePublishedElements: J, fireReceiveSaveRemotePublishedElements: Q, fireRequestDeleteRemotePublishedPost: K, fireReceiveDeleteRemotePublishedPost: X, fireRequestDeleteRemotePost: ee, fireReceiveDeleteRemotePost: te } }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var i = a(128),
        o = n(i),
        s = a(129),
        r = n(s),
        c = a(4),
        l = n(c),
        u = a(34),
        p = n(u),
        d = a(43),
        m = n(d),
        f = function() {
            function e() {
                (0, o.default)(this, e) } return (0, r.default)(e, [{ key: "generate", value: function(e) { console.info("PaginationGenerator - generate"), console.log("PaginationGenerator - generate", e); var t = e.posts,
                        a = e.opts.rootState.application.config,
                        n = a.site || {};
                    n.url = a.urls.site; var i = 1,
                        o = (e.path || "") + "index.html",
                        s = [],
                        r = [],
                        c = parseInt(n.postsPerPage || 10, 10),
                        u = ({ name: e.opts.nextState.theme.name, version: e.opts.nextState.version, url: a.urls.theme }, a.urls, a.socialnetwork); if (!t || !t.length) { var d = p.default.template(e.template, { pagination: { prev: 0, next: 0, page: 0, pages: 0, total: 0, limit: c }, posts: [], tag: e.tag, author: e.author, socialnetwork: u, title: n.title }, { config: a, theme: e.opts.nextState.theme }); return r.push({ name: "page-" + i, path: o, content: d, message: "Publish page-" + i + " " + e.template }), e.opts.nextState.elementsToPublish = (e.opts.nextState.elementsToPublish || []).concat(r), e.opts } var f = Math.ceil(t.length / c); return l.default.each(t, function(d, v) { var h = 0,
                            x = 0;
                        i > 1 && (o = (e.path || "") + ("page/" + i + "/index.html")), i > 1 && (x = i - 1), i < f && (h = i + 1); var g = void 0;
                        d.tags && (g = l.default.map(d.tags, function(e) { return { name: e, slug: (0, m.default)(e), description: null } })); var b = { id: d.author.id, name: d.author.name || d.author.login, location: d.author.location, website: d.author.blog, image: d.author.avatar_url, slug: d.author.login }; if (s.push({ image: d.image, title: d.title, url: n.url + d.url, excerpt: d.excerpt, html: d.excerpt, tags: g, published_at: d.published_at, relativeUrl: n.url + d.url, author: b }), Math.floor((v + 1) / c) > i - 1 || v + 1 === t.length) { var _ = p.default.template(e.template, { pagination: { prev: x, next: h, page: i, pages: f, total: t.length, limit: c }, context: "index" === e.template && 0 === x ? "home" : e.template, posts: s, tag: e.tag, author: e.author, title: n.title, description: n.description, socialnetwork: u, relativeUrl: "" }, { config: a, theme: e.opts.nextState.theme });
                            r.push({ name: "page-" + i, path: o, content: _, message: "Publish page-" + i + " " + e.template }), s = [], i++ } }), e.opts.nextState.elementsToPublish = (e.opts.nextState.elementsToPublish || []).concat(r), e.opts } }]), e }();
    t.default = new f }, , , , , , , , , , , , , , , function(e, t) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.CORE_LOGIN = "core:login", t.POST_DELETE = "post:delete", t.POST_GET = "post:get", t.POST_REMOTE_SAVE = "post:remote-save", t.POST_PUBLISH = "post:publish", t.POST_UNPUBLISH = "post:unpublish", t.POSTS_GET = "posts:get", t.POST_CHANGE_CONTENT = "post:change-content", t.POSTS_SYNCHRONIZE = "posts:synchronize" }, function(e, t, a) { "use strict";

    function n(e, t) { return i.isPost(e) ? o.urlFor("post", { post: e, secure: e.secure }, t) : i.isTag(e) ? o.urlFor("tag", { tag: e, secure: e.secure }, t) : i.isUser(e) ? o.urlFor("author", { author: e, secure: e.secure }, t) : i.isNav(e) ? o.urlFor("nav", { nav: e, secure: e.secure }, t) : o.urlFor(e, {}, t) } var i = a(371).checks,
        o = a(7);
    e.exports = n }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { e.on("application:routes", function(e) { return console.info("applicationPlugin - application:routes"), console.log("applicationPlugin - application:routes", e), e.nextState.routes.push({ path: "settings", name: "settings", component: p.default }), console.log("applicationPlugin - application:routes - return", e), e }), e.on("application:stores", function(e) { var t, a;
            console.info("applicationPlugin - application:stores"), console.log("applicationPlugin - application:stores", e); var n = { state: { isInitialized: !1, isFetching: !1, isLoading: !1, requireInitilisation: !1, notification: { icon: "save", header: "My Header", message: "A message", level: "default", isVisible: !1 }, routes: [], settingsTabs: [] }, mutations: (t = {}, (0, s.default)(t, l.APPLICATION_INITIALIZE_APP, function(e, t) { _.merge(e, t.application) }), (0, s.default)(t, l.APPLICATION_INITIALIZE_PLUGINS, function(e, t) { _.merge(e, t.application) }), (0, s.default)(t, l.APPLICATION_INITIALIZE_ROUTES, function(e, t) { _.merge(e, t) }), (0, s.default)(t, l.APPLICATION_INITIALIZE_CONFIG, function(e, t) { _.merge(e, t) }), (0, s.default)(t, l.APPLICATION_PREPARE_CONFIG, function(e, t) { _.merge(e, t) }), (0, s.default)(t, l.APPLICATION_SAVE_STARTUP_CONFIG, function(e, t) { _.merge(e, t) }), (0, s.default)(t, l.APPLICATION_SAVE_CONFIG, function(e, t) { _.merge(e, t.application) }), (0, s.default)(t, l.APPLICATION_SAVE_CONFIG_DONE, function(e, t) { _.merge(e, t.application) }), (0, s.default)(t, l.APPLICATION_NOTIFY, function(e, t) { t.isVisible = !0, _.merge(e.notification, t) }), (0, s.default)(t, l.APPLICATION_CLOSE_NOTIFICATION, function(e, t) { e.notification.isVisible = !1 }), (0, s.default)(t, l.APPLICATION_LOADING, function(e, t) { e.isLoading = !0 }), (0, s.default)(t, l.APPLICATION_LOADED, function(e, t) { e.isLoading = !1 }), t), actions: (a = {}, (0, s.default)(a, l.APPLICATION_INITIALIZE_ROUTES, function(e) { var t = e.commit,
                        a = e.rootState,
                        n = e.state,
                        i = { rootState: _.cloneDeep(a), currentState: _.cloneDeep(n) }; return c.default.initializeRoutes(i).then(function(e) { t(l.APPLICATION_INITIALIZE_ROUTES, e.nextState) }) }), (0, s.default)(a, l.APPLICATION_INITIALIZE_CONFIG, function(e) { var t = e.commit,
                        a = e.rootState,
                        n = e.state,
                        i = { rootState: _.cloneDeep(a), currentState: _.cloneDeep(n) }; return c.default.initializeConfig(i).then(function(e) { t(l.APPLICATION_INITIALIZE_CONFIG, e.nextState) }) }), (0, s.default)(a, l.APPLICATION_INITIALIZE_APP, function(e) { var t = e.commit,
                        a = e.rootState,
                        n = (e.state, { rootState: _.cloneDeep(a), currentState: _.cloneDeep(a) }); return c.default.initializeApp(n).then(function(e) { t(l.APPLICATION_INITIALIZE_APP, e.nextState) }) }), (0, s.default)(a, l.APPLICATION_INITIALIZE_PLUGINS, function(e) { var t = e.commit,
                        a = e.rootState,
                        n = (e.state, { rootState: _.cloneDeep(a), currentState: _.cloneDeep(a) }); return c.default.initializePlugins(n).then(function(e) { e.nextState.application.isInitialized = !0, t(l.APPLICATION_INITIALIZE_PLUGINS, e.nextState) }) }), (0, s.default)(a, l.APPLICATION_PREPARE_CONFIG, function(e, t) { var a = e.dispatch,
                        n = e.commit,
                        i = e.rootState,
                        o = e.state,
                        s = { rootState: _.cloneDeep(i), currentState: _.cloneDeep(o), payload: { formData: t } }; return s.currentState.isLoading = !0, a("application:loading").then(function(e) { return c.default.prepareConfig(s) }).then(function(e) { return n(l.APPLICATION_PREPARE_CONFIG, e.nextState), a(l.APPLICATION_SAVE_CONFIG) }) }), (0, s.default)(a, l.APPLICATION_SAVE_STARTUP_CONFIG, function(e, t) { var a = (e.dispatch, e.commit),
                        n = e.rootState,
                        i = e.state,
                        o = { rootState: _.cloneDeep(n), currentState: _.cloneDeep(i), nextState: _.cloneDeep(i) }; return o.nextState.config.meta.username = t.username, o.nextState.config.meta.repositoryName = t.repositoryName, o.nextState.config.meta.branch = t.branch, o.nextState.config.meta.cname = t.cname, o.nextState.requireInitilisation = !1, c.default.startUpConfig(o).then(function(e) { a(l.APPLICATION_SAVE_STARTUP_CONFIG, e.nextState) }) }), (0, s.default)(a, l.APPLICATION_SAVE_CONFIG, function(e, t) { var a = e.dispatch,
                        n = e.commit,
                        i = e.rootState,
                        o = (e.state, { rootState: _.cloneDeep(i), currentState: _.cloneDeep(i) }); return c.default.saveConfig(o).then(function(e) { if (n(l.APPLICATION_SAVE_CONFIG, e.nextState), !t) return a(l.APPLICATION_SAVE_CONFIG_DONE) }) }), (0, s.default)(a, l.APPLICATION_SAVE_CONFIG_DONE, function(e) { var t = e.dispatch,
                        a = e.commit,
                        n = e.rootState,
                        i = (e.state, { rootState: _.cloneDeep(n), currentState: _.cloneDeep(n) }); return c.default.saveConfigDone(i).then(function(e) { a(l.APPLICATION_SAVE_CONFIG_DONE, e.nextState) }).then(function(e) { return t("application:loaded") }).then(function(e) { return t("application:notify", { icon: "save", header: "Settings saved", message: "Your settings have been saved and your blog was rebuild with success. ", level: "success" }) }) }), (0, s.default)(a, l.APPLICATION_NOTIFY, function(e, t) { var a = (e.dispatch, e.commit);
                    e.rootState, e.state;
                    a(l.APPLICATION_NOTIFY, t) }), (0, s.default)(a, l.APPLICATION_CLOSE_NOTIFICATION, function(e) { var t = (e.dispatch, e.commit);
                    e.rootState, e.state;
                    t(l.APPLICATION_CLOSE_NOTIFICATION) }), (0, s.default)(a, l.APPLICATION_LOADING, function(e) { var t = (e.dispatch, e.commit);
                    e.rootState, e.state;
                    t(l.APPLICATION_LOADING) }), (0, s.default)(a, l.APPLICATION_LOADED, function(e) { var t = (e.dispatch, e.commit);
                    e.rootState, e.state;
                    t(l.APPLICATION_LOADED) }), a), getters: { navigations: function(e) { return e.routes.filter(function(e) { return e.label }) } } }; return e.nextState.stores.application = n, console.log("applicationPlugin - application:stores - return", e), e }), e.on("application:prepare-config", function(e) { return console.info("applicationPlugin - application:prepare-config"), console.log("applicationPlugin - application:prepare-config", e), e.nextState.config.meta.cname = e.payload.formData.get("application-cname"), console.log("applicationPlugin - application:prepare-config - return", e), e }), e.on("application:save-config", function(e) { return console.info("applicationPlugin - application:save-config"), console.log("applicationPlugin - application:save-config", e), console.log("applicationPlugin - application:save-config - return", e), e }) }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.constants = void 0; var o = a(76),
        s = n(o);
    t.applicationPlugin = i; var r = a(335),
        c = n(r),
        l = a(126),
        u = a(795),
        p = n(u);
    t.constants = { APPLICATION_PREPARE_CONFIG: l.APPLICATION_PREPARE_CONFIG } }, function(e, t) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.LOGIN_LOGIN = "login:login", t.LOGIN_SUBMIT = "login:submit", t.LOGIN_UPDATE_EMAIL = "login:updateEmail", t.LOGIN_UPDATE_PASSWORD = "login:updatePassword", t.LOGIN_UPDATE_TFC = "login:updateTwoFactorCode", t.AUTHORISATION_REQUEST_LOGIN = "authorisation:request-login", t.AUTHORISATION_RECEIVE_LOGIN = "authorisation:receive-login", t.AUTHORISATION_FAILURE_LOGIN = "authorisation:failure-login", t.AUTHORISATION_AUTHENTICATION_DONE = "authorisation:authentication-done" }, function(e, t, a) { "use strict";

    function n(e, t) { var a = "",
            n = t ? t.context : null; return e.meta_description ? a = e.meta_description : i.includes(n, "paged") ? a = "" : i.includes(n, "home") ? a = o.theme.description : i.includes(n, "author") && e.author ? a = e.author.meta_description || e.author.bio : i.includes(n, "tag") && e.tag ? a = e.tag.meta_description || e.tag.description : (i.includes(n, "post") || i.includes(n, "page")) && e.post && (a = e.post.meta_description), (a || "").trim() } var i = a(4),
        o = a(7);
    e.exports = n }, function(e, t, a) { "use strict";

    function n(e, t) { t = t || {}; var a = e.replace(/<a href="#fn.*?rel="footnote">.*?<\/a>/gi, "");
        a = a.replace(/<div class="footnotes"><ol>.*?<\/ol><\/div>/, ""), a = a.replace(/<\/?[^>]+>/gi, ""), a = a.replace(/(\r\n|\n|\r)+/gm, " "), t.words || t.characters || (t.words = 50); var n = i(a, t); return !t.characters && n.length > 7 * t.words && (t.characters = 7 * t.words, delete t.words, n = i(a, t)), i(a, t) } var i = a(172);
    e.exports = n }, function(e, t, a) { "use strict";

    function n(e, t) { var a = "",
            n = t ? t.context : null,
            s = o.theme,
            r = t ? t.pagination : null,
            c = ""; return r && r.total > 1 && (c = " - Page " + r.page), a = e.meta_title ? e.meta_title : i.includes(n, "home") ? s.title : i.includes(n, "author") && e.author ? e.author.name + c + " - " + s.title : i.includes(n, "tag") && e.tag ? e.tag.meta_title || e.tag.name + c + " - " + s.title : (i.includes(n, "post") || i.includes(n, "page")) && e.post ? e.post.meta_title || e.post.title : s.title + c, (a || "").trim() } var i = a(4),
        o = a(7);
    e.exports = n }, function(e, t, a) { "use strict"; var n, i, o = a(7);
    n = function(e, t) { var a = o.url + o.paths.subdir; return void 0 !== this.tagSlug && (a += "/" + o.routeKeywords.tag + "/" + this.tagSlug), void 0 !== this.authorSlug && (a += "/" + o.routeKeywords.author + "/" + this.authorSlug), e > 1 && (a += "/" + o.routeKeywords.page + "/" + e), a += "/" }, i = function(e, t) { console.warn("warnings.helpers.page_url.isDeprecated"); var a = this; return n.call(a, e, t) }, e.exports = n, e.exports.deprecated = i }, function(e, t, a) { "use strict";

    function n(e) { throw console.log(e), new Error(e) } var i = {},
        o = a(9),
        s = { handlebars: o };
    i.execute = function(e, t, a) { var i = s.handlebars.partials[e]; return void 0 === i ? void n("warnings.helpers.template.templateNotFound" + e) : ("string" == typeof i && (i = o.compile(i)), new s.handlebars.SafeString(i(t, a))) }, e.exports = i }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e, t) { console.info("PostGenerator - generate"), console.log("PostGenerator - generate", e); var a = t,
            n = (0, s.default)({}, a.original);
        n.tags = c.default.map(n.tags, function(e) { return { name: e, slug: (0, d.default)(e) } }); var i = n.author;
        n.author = { id: i.id, name: i.name || i.login, location: i.location, website: i.blog, image: i.avatar_url, bio: i.bio, status: "", slug: i.login }; var o = e.rootState.application.config,
            r = o.urls;
        ({ name: e.nextState.theme.name, version: e.nextState.theme.version, url: o.urls.theme });
        n.urls = r, n.status = "published"; var l = u.default.template("post", { context: "post", socialnetwork: o.socialnetwork, relativeUrl: a.url, post: n, author: n.author }, { config: o, theme: e.nextState.theme }),
            p = []; return p.push({ title: a.title, image: a.image, name: a.name, path: o.urls.getPostGhPath(a.name), url: o.urls.getPostGhPath(a.name), content: l, message: "Publish " + a.name, published_at: a.published_at }), e.nextState.elementsToPublish = (e.nextState.elementsToPublish || []).concat(p), e }
    Object.defineProperty(t, "__esModule", { value: !0 }); var o = a(19),
        s = n(o);
    t.generatePost = i; var r = a(4),
        c = n(r),
        l = a(34),
        u = n(l),
        p = a(43),
        d = n(p) }, function(e, t) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.APPLICATION_INITIALIZE_ROUTES = "application:initialize-routes", t.APPLICATION_INITIALIZE_CONFIG = "application:initialize-config", t.APPLICATION_SAVE_STARTUP_CONFIG = "application:save-startup-config", t.APPLICATION_PREPARE_CONFIG = "application:prepare-config", t.APPLICATION_SAVE_CONFIG = "application:save-config", t.APPLICATION_SAVE_CONFIG_DONE = "application:save-config-done", t.APPLICATION_INITIALIZE_APP = "application:initialize-app", t.APPLICATION_INITIALIZE_PLUGINS = "application:initialize-plugins", t.APPLICATION_NOTIFY = "application:notify", t.APPLICATION_CLOSE_NOTIFICATION = "application:close-notification", t.APPLICATION_LOADING = "application:loading", t.APPLICATION_LOADED = "application:loaded" }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { return g.default.fire("application:routes", e) }

    function o(e) { return g.default.fire("application:request-config", e) }

    function s(e) { return g.default.fire("application:receive-config", e) }

    function r(e) { return g.default.fire("application:request-save-config", e) }

    function c(e) { return console.log("application - initializeConfig", e), o(e).then(s) }

    function l(e) { return console.log("application - startUpConfig", e), s(e) }

    function u(e) { return g.default.fire("application:prepare-config", e) }

    function p(e) { return r(e).then(function(t) { return (0, h.default)({}, e, { nextState: e.nextState.application }) }).then(s).then(function(t) { return e.nextState.application = t.nextState, e }) }

    function d(e) { return g.default.fire("application:save-config-done", e) }

    function m(e, t) { return g.default.fire("application:initialize-app", e, t) }

    function f(e, t) { return g.default.fire("application:initialize-plugins", e, t) }
    Object.defineProperty(t, "__esModule", { value: !0 }); var v = a(19),
        h = n(v),
        x = a(52),
        g = n(x);
    t.default = { initializeRoutes: i, initializeApp: m, initializePlugins: f, initializeConfig: c, startUpConfig: l, prepareConfig: u, saveConfig: p, saveConfigDone: d } }, function(e, t, a) { "use strict";

    function n(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
            for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]); return t.default = e, t }

    function i(e) { return e && e.__esModule ? e : { default: e } }

    function o(e) { e.on("application:stores", function(e) { var t;
            console.info("authenticationPlugin - application:stores"), console.log("authenticationPlugin - application:stores", e); var a = { state: { isAuthenticated: !1, isTwoFactorCodeRequired: !1, credentials: { email: void 0, password: void 0, twoFactorCode: void 0 } }, mutations: (t = {}, (0, r.default)(t, v.LOGIN_UPDATE_EMAIL, function(e, t) { e.credentials.email = t }), (0, r.default)(t, v.LOGIN_UPDATE_PASSWORD, function(e, t) { e.credentials.password = t }), (0, r.default)(t, v.LOGIN_UPDATE_TFC, function(e, t) { e.credentials.twoFactorCode = t }), (0, r.default)(t, v.AUTHORISATION_REQUEST_LOGIN, function(e) { e.isLoading = !0 }), (0, r.default)(t, v.AUTHORISATION_RECEIVE_LOGIN, function(e, t) { l.default.merge(e, t) }), (0, r.default)(t, v.AUTHORISATION_FAILURE_LOGIN, function(e, t) { e.isAuthenticated = !1 }), (0, r.default)(t, h, function(e, t) { l.default.merge(e, t.authentication) }), t), actions: (0, r.default)({}, v.LOGIN_SUBMIT, function(e, t) { var a = e.dispatch,
                        n = e.commit,
                        i = e.rootState,
                        o = e.state;
                    n(v.AUTHORISATION_REQUEST_LOGIN); var s = { rootState: l.default.cloneDeep(i), currentState: l.default.cloneDeep(o) };
                    a("application:loading").then(function(e) { return p.default.authenticate(s) }).then(function(e) { n(v.AUTHORISATION_RECEIVE_LOGIN, e.nextState) }).then(function(e) { if (o.isAuthenticated) { var t = !0; return a(x, t).then(function(e) { a(v.AUTHORISATION_AUTHENTICATION_DONE) }) } return o.isTwoFactorCodeRequired ? a("application:notify", { icon: "unlock", header: "Two factor code", message: "A code is required to complete your authentication.", level: "warning" }) : e }).then(function(e) { return a("application:loaded") }).then(function(e) { return t.push(t.currentRoute.query.redirect || "/") }).catch(function(e) { a("application:loaded").then(function(e) { return a("application:notify", { icon: "warning circle", header: "Authentication failed", message: "A error occured during the authentication.", level: "error" }) }) }) }), getters: {} }; return e.nextState.stores.authentication = a, console.log("authenticationPlugin - application:stores - return", e), e }), e.on("application:routes", function(e) { return e }), e.on("application:initialize-app", function(e) { return console.info("authenticationPlugin - application:initialize-app"), console.log("authenticationPlugin - application:initialize-app", e), p.default.initialize(e).then(function(t) { return e }) }), e.on("authentication:authenticate", function(e) { return console.info("authenticationPlugin - authentication:authenticate"), console.log("authenticationPlugin - authentication:authenticate", e, p.default), p.default.authenticate(e) }) }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.LoginComponent = void 0; var s = a(76),
        r = i(s);
    t.authenticationPlugin = o; var c = a(4),
        l = i(c),
        u = a(337),
        p = i(u),
        d = a(796),
        m = i(d),
        f = a(119),
        v = n(f),
        h = "application:initialize-app",
        x = "application:save-config";
    t.LoginComponent = m.default }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { return p.default.fire("requestSavedAuth", e) }

    function o(e) { return p.default.fire("receiveSavedAuth", e) }

    function s(e) { return p.default.fire("requestAuthentication", e) }

    function r(e) { return e.nextState.twoFactorRequired ? payload : p.default.fire("receiveAuthentication", e) }

    function c(e) { return i(e).then(function(e) { return o(e) }) }

    function l(e) { return s(e).then(function(e) { return r(e) }) }
    Object.defineProperty(t, "__esModule", { value: !0 }); var u = a(52),
        p = n(u);
    t.default = { authenticate: l, initialize: c } }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { e.on("application:routes", function(e) { return console.info("dashboardPlugin - application:routes"), console.log("dashboardPlugin - application:routes", e), e.nextState.routes.push({ path: "dashboard", name: "dashboard", component: s.default }), console.log("dashboardPlugin - application:routes - return", e), e }) }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.dashboardPlugin = i; var o = a(797),
        s = n(o) }, function(e, t, a) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { var t = e.split("pass::[more]"); return { excerpt: t[0], full: t.join("") } }

    function o(e, t) { var a = b.hash({ doctype: "article", backend: "html5", safe: "unsafe", attributes: ["showtitle!", "allow-uri-read", "imagesdir=" + e.urls.site + "/images", "icons=font"] }),
            n = /gist::([0-9]*)\[(lines=[0-9]*\.\.[0-9]*)?,?(type=([\w.]*))?,?(file=([\w.]*))?\]/g,
            o = t.replace(n, "[source,$4]\n----\ninclude::https://gist.githubusercontent.com/raw/$1/$6[$2]\n----\n"),
            s = i(o),
            r = _.$load(s.excerpt, a),
            c = _.$load(s.full, a),
            l = { attributes: m.default.pick(c.attributes, ["$$smap"]), excerpt: r.$convert(), html: c.$convert() }; return l }

    function s(e) { var t = "hp-tags"; return e.$$smap[t] && e.$$smap[t].split(",").map(function(e) { return e.trim() }).filter(function(e) { return "" !== e }) }

    function r(e) { e.on("hubpress:request-rendering-documents", function(e) { console.info("Asciidoc Plugin - hubpress:request-rendering-documents"), console.log("hubpress:request-rendering-documents", e); var t = e.rootState.application.config,
                a = (e.nextState.posts || []).map(function(e) { var a = (0, l.default)({}, e, o(t, e.content), { content: e.content }),
                        n = m.default.pick(a, "attributes", "author", "html", "tags", "content", "name", "path", "sha");
                    a.title = n.title = n.attributes.$$smap.doctitle, a.image = n.image = n.attributes.$$smap["hp-image"], a.tags = n.tags = s(n.attributes), a.url = n.url = t.urls.getPostUrl(n.name); var i = (0, l.default)({}, a, { original: n }); return i.original.published_at = i.published_at = n.name.split("-").slice(0, 3).join("-"), i }); return e.nextState.posts = a, e }), e.on("requestRenderingPost", function(e) { console.info("Asciidoc Plugin - requestRenderingPost"), console.log("requestRenderingPost", e); var t = o(e.rootState.application.config, e.nextState.post.content);
            e.nextState.post = (0, l.default)({}, e.nextState.post, t), e.nextState.post.title = t.attributes.$$smap.doctitle, e.nextState.post.image = t.attributes.$$smap["hp-image"], e.nextState.post.tags = s(t.attributes), e.nextState.post.published_at = t.attributes.$$smap.published_at || e.nextState.post.published_at || (0, v.default)().format("YYYY-MM-DD"); var a = t.attributes.$$smap["hp-alt-title"]; return e.nextState.post.name = (0, x.default)(e.nextState.post.published_at + "-" + (a || e.nextState.post.title)) + ".adoc", e.nextState.post.url = e.rootState.application.config.urls.getPostUrl(e.nextState.post.name), e }) }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var c = a(19),
        l = n(c);
    t.asciidocPlugin = r;
    var u = a(314),
        p = n(u),
        d = a(4),
        m = n(d),
        f = a(2),
        v = n(f),
        h = a(43),
        x = n(h),
        g = (0, p.default)(!1, window.XMLHttpRequest),
        b = g.Opal,
        _ = g.Asciidoctor(!0);
}, function(e, t, a) { var n, i, o;
    (function(e) { "use strict";

        function s(e) { return e && e.__esModule ? e : { default: e } } var r = a(59),
            c = s(r);! function(s) { "object" == (0, c.default)(t) && "object" == (0, c.default)(e) ? s(a(1)): "object" == ("undefined" == typeof brackets ? "undefined" : (0, c.default)(brackets)) && brackets.getModule ? s(brackets.getModule("thirdparty/CodeMirror2/lib/codemirror")) : (i = [a(1)], n = s, o = "function" == typeof n ? n.apply(t, i) : n, !(void 0 !== o && (e.exports = o))) }(function(e) { e.defineMode("asciidoc", function(e, t) { var a = function() {
                        function e(e) { var t = /\w/.test(e) ? "\\b" : "(?:\\B|^)"; return t + e + "[^" + e + "].*?" + e + "(?![\\w*])" } var t = "[a-zA-Z¡-￿]+\\b";
                        this.$rules = { start: [{ token: "empty", regex: /$/ }, { token: "literal", regex: /^\.{4,}\s*$/, next: "listingBlock" }, { token: "literal", regex: /^-{4,}\s*$/, next: "literalBlock" }, { token: "literal", regex: /^\+{4,}\s*$/, next: "passthroughBlock" }, { token: "keyword", regex: /^={4,}\s*$/ }, { token: "text", regex: /^\s*$/ }, { token: "empty", regex: "", next: "dissallowDelimitedBlock" }], dissallowDelimitedBlock: [{ include: "paragraphEnd" }, { token: "comment", regex: "^//.+$" }, { token: "keyword", regex: "^(?:NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s" }, { include: "listStart" }, { token: "literal", regex: /^\s+.+$/, next: "indentedBlock" }, { token: "empty", regex: "", next: "text" }], paragraphEnd: [{ token: "doc.comment", regex: /^\/{4,}\s*$/, next: "commentBlock" }, { token: "tableBlock", regex: /^\s*[|!]=+\s*$/, next: "tableBlock" }, { token: "keyword", regex: /^(?:--|''')\s*$/, next: "start" }, { token: "option", regex: /^\[.*\]\s*$/, next: "start" }, { token: "pageBreak", regex: /^>{3,}$/, next: "start" }, { token: "literal", regex: /^\.{4,}\s*$/, next: "listingBlock" }, { token: "titleUnderline", regex: /^(?:={2,}|-{2,}|~{2,}|\^{2,}|\+{2,})\s*$/, next: "start" }, { token: "singleLineTitle", regex: /^={1}\s+\S.*$/, next: "start" }, { token: "singleLineTitle2", regex: /^={2}\s+\S.*$/, next: "start" }, { token: "singleLineTitle3", regex: /^={3}\s+\S.*$/, next: "start" }, { token: "singleLineTitle4", regex: /^={4}\s+\S.*$/, next: "start" }, { token: "singleLineTitle5", regex: /^={5}\s+\S.*$/, next: "start" }, { token: "singleLineTitle6", regex: /^={6}\s+\S.*$/, next: "start" }, { token: "otherBlock", regex: /^(?:\*{2,}|_{2,})\s*$/, next: "start" }, { token: "optionalTitle", regex: /^\.[^.\s].+$/, next: "start" }], listStart: [{ token: "keyword", regex: /^\s*(?:\d+\.|[a-zA-Z]\.|[ixvmIXVM]+\)|\*{1,5}|-|\.{1,5})\s/, next: "listText" }, { token: "meta.tag", regex: /^.+(?::{2,4}|;;)(?: |$)/, next: "listText" }, { token: "keyword", regex: /^\+\s*$/, next: "start" }], text: [{ token: ["link", "link"], regex: /((?:https?:\/\/|ftp:\/\/|file:\/\/|mailto:|callto:)[^\s\[]+)(\[.*?\])/ }, { token: ["link", "link"], regex: /(?:https?:\/\/|ftp:\/\/|file:\/\/|mailto:|callto:)[^\s\[]+/ }, { token: "link", regex: /\b[\w\.\/\-]+@[\w\.\/\-]+\b/ }, { include: "macros" }, { include: "paragraphEnd" }, { token: "literal", regex: /\+{3,}/, next: "smallPassthrough" }, { token: "escape", regex: /\((?:C|TM|R)\)|\.{3}|->|<-|=>|<=|&#(?:\d+|x[a-fA-F\d]+);|(?: |^)--(?=\s+\S)/ }, { token: "escape", regex: /\\[_*'`+#]|\\{2}[_*'`+#]{2}/ }, { token: "keyword", regex: /\s\+$/ }, { token: "text", regex: t }, { token: ["keyword", "string", "keyword"], regex: /(<<[\w\d\-$]+,)(.*?)(>>|$)/ }, { token: "keyword", regex: /<<[\w\d\-$]+,?|>>/ }, { token: "constant.character", regex: /\({2,3}.*?\){2,3}/ }, { token: "support.function.list.callout", regex: /^(?:<\d+>|\d+>|>) /, next: "text" }, { token: "keyword", regex: /\[\[.+?\]\]/ }, { token: "support", regex: /^\[{3}[\w\d =\-]+\]{3}/ }, { include: "quotes" }, { token: "empty", regex: /^\s*$/, next: "start" }], listText: [{ include: "listStart" }, { include: "text" }], indentedBlock: [{ token: "literal", regex: /^[\s\w].+$/, next: "indentedBlock" }, { token: "literal", regex: "", next: "start" }], listingBlock: [{ token: "literal", regex: /^\.{4,}\s*$/, next: "dissallowDelimitedBlock" }, { token: "constant.numeric", regex: "<\\d+>" }, { token: "literal", regex: "[^<]+" }, { token: "literal", regex: "<" }], literalBlock: [{ token: "literal", regex: /^-{4,}\s*$/, next: "dissallowDelimitedBlock" }, { token: "constant.numeric", regex: "<\\d+>" }, { token: "literal", regex: "[^<]+" }, { token: "literal", regex: "<" }], passthroughBlock: [{ token: "literal", regex: /^\+{4,}\s*$/, next: "dissallowDelimitedBlock" }, { token: "literal", regex: t + "|\\d+" }, { include: "macros" }, { token: "literal", regex: "." }], smallPassthrough: [{ token: "literal", regex: /[+]{3,}/, next: "dissallowDelimitedBlock" }, { token: "literal", regex: /^\s*$/, next: "dissallowDelimitedBlock" }, { token: "literal", regex: t + "|\\d+" }, { include: "macros" }], commentBlock: [{ token: "doc.comment", regex: /^\/{4,}\s*$/, next: "dissallowDelimitedBlock" }, { token: "doc.comment", regex: "^.*$" }], tableBlock: [{ token: "tableBlock", regex: /^\s*\|={3,}\s*$/, next: "dissallowDelimitedBlock" }, { token: "tableBlock", regex: /^\s*!={3,}\s*$/, next: "innerTableBlock" }, { token: "tableBlock", regex: /\|/ }, { include: "text", noEscape: !0 }], innerTableBlock: [{ token: "tableBlock", regex: /^\s*!={3,}\s*$/, next: "tableBlock" }, { token: "tableBlock", regex: /^\s*|={3,}\s*$/, next: "dissallowDelimitedBlock" }, { token: "tableBlock", regex: /\!/ }], macros: [{ token: "macro", regex: /{[\w\-$]+}/ }, { token: ["text", "string", "text", "constant.character", "text"], regex: /({)([\w\-$]+)(:)?(.+)?(})/ }, { token: ["text", "markup.list.macro", "keyword", "string"], regex: /(\w+)(footnote(?:ref)?::?)([^\s\[]+)?(\[.*?\])?/ }, { token: ["markup.list.macro", "keyword", "string"], regex: /([a-zA-Z\-][\w\.\/\-]*::?)([^\s\[]+)(\[.*?\])?/ }, { token: ["markup.list.macro", "keyword"], regex: /([a-zA-Z\-][\w\.\/\-]+::?)(\[.*?\])/ }, { token: "keyword", regex: /^:.+?:(?= |$)/ }], quotes: [{ token: "string.italic", regex: /__[^_\s].*?__/ }, { token: "string.italic", regex: e("_") }, { token: "keyword.bold", regex: /\*\*[^*\s].*?\*\*/ }, { token: "keyword.bold", regex: e("\\*") }, { token: "literal", regex: /\+\+[^+\s].*?\+\+/ }, { token: "literal", regex: e("\\+") }, { token: "literal", regex: /\$\$.+?\$\$/ }, { token: "literal", regex: e("\\$") }, { token: "literal", regex: /``[^`\s].*?``/ }, { token: "literal", regex: e("`") }, { token: "keyword", regex: /\^[^\^].*?\^/ }, { token: "keyword", regex: e("\\^") }, { token: "keyword", regex: /~[^~].*?~/ }, { token: "keyword", regex: e("~") }, { token: "keyword", regex: /##?/ }, { token: "keyword", regex: /(?:\B|^)``|\b''/ }] }; var a = { macro: "constant.character", tableBlock: "doc.comment", titleUnderline: "markup.heading", singleLineTitle: "markup.heading", singleLineTitle2: "markup.heading2", singleLineTitle3: "markup.heading3", singleLineTitle4: "markup.heading4", singleLineTitle5: "markup.heading5", singleLineTitle6: "markup.heading6", pageBreak: "string", option: "string.regexp", otherBlock: "markup.list", literal: "support.function", optionalTitle: "constant.numeric", escape: "constant.language.escape", link: "markup.underline.list" }; for (var n in this.$rules)
                            for (var i = this.$rules[n], o = i.length; o--;) { var s = i[o]; if (s.include || "string" == typeof s) { var r = [o, 1].concat(this.$rules[s.include || s]);
                                    s.noEscape && (r = r.filter(function(e) { return !e.next })), i.splice.apply(i, r) } else s.token in a && (s.token = a[s.token]) } },
                    n = 1e3,
                    i = function(e) { this.states = e, this.regExps = {}, this.matchMappings = {}; for (var t in this.states) { for (var a = this.states[t], n = [], i = 0, o = this.matchMappings[t] = { defaultToken: "text" }, s = "g", r = [], c = 0; c < a.length; c++) { var l = a[c]; if (l.defaultToken && (o.defaultToken = l.defaultToken), l.caseInsensitive && (s = "gi"), null != l.regex) { l.regex instanceof RegExp && (l.regex = l.regex.toString().slice(1, -1)); var u = l.regex,
                                        p = new RegExp("(?:(" + u + ")|(.))").exec("a").length - 2; if (Array.isArray(l.token))
                                        if (1 == l.token.length || 1 == p) l.token = l.token[0];
                                        else { if (p - 1 != l.token.length) throw new Error("number of classes and regexp groups in '" + l.token + "'\n'" + l.regex + "' doesn't match\n" + (p - 1) + "!=" + l.token.length);
                                            l.tokenArray = l.token, l.token = null, l.onMatch = this.$arrayTokens }
                                    else "function" != typeof l.token || l.onMatch || (p > 1 ? l.onMatch = this.$applyToken : l.onMatch = l.token);
                                    p > 1 && (/\\\d/.test(l.regex) ? u = l.regex.replace(/\\([0-9]+)/g, function(e, t) { return "\\" + (parseInt(t, 10) + i + 1) }) : (p = 1, u = this.removeCapturingGroups(l.regex)), l.splitRegex || "string" == typeof l.token || r.push(l)), o[i] = c, i += p, n.push(u), l.onMatch || (l.onMatch = null) } }
                            r.forEach(function(e) { e.splitRegex = this.createSplitterRegexp(e.regex, s) }, this), this.regExps[t] = new RegExp("(" + n.join(")|(") + ")|($)", s) } };
                (function() { this.$setMaxTokenCount = function(e) { n = 0 | e }, this.$applyToken = function(e) { var t = this.splitRegex.exec(e).slice(1),
                            a = this.token.apply(this, t); if ("string" == typeof a) return [{ type: a, value: e }]; for (var n = [], i = 0, o = a.length; i < o; i++) t[i] && (n[n.length] = { type: a[i], value: t[i] }); return n }, this.$arrayTokens = function(e) { if (!e) return []; var t = this.splitRegex.exec(e); if (!t) return "text"; for (var a = [], n = this.tokenArray, i = 0, o = n.length; i < o; i++) t[i + 1] && (a[a.length] = { type: n[i], value: t[i + 1] }); return a }, this.removeCapturingGroups = function(e) { var t = e.replace(/\[(?:\\.|[^\]])*?\]|\\.|\(\?[:=!]|(\()/g, function(e, t) { return t ? "(?:" : e }); return t }, this.createSplitterRegexp = function(e, t) { if (e.indexOf("(?=") != -1) { var a = 0,
                                n = !1,
                                i = {};
                            e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function(e, t, o, s, r, c) { return n ? n = "]" != r : r ? n = !0 : s ? (a == i.stack && (i.end = c + 1, i.stack = -1), a--) : o && (a++, 1 != o.length && (i.stack = a, i.start = c)), e }), null != i.end && /^\)*$/.test(e.substr(i.end)) && (e = e.substring(0, i.start) + e.substr(i.end)) } return new RegExp(e, (t || "").replace("g", "")) }, this.getLineTokens = function(e, t) { if (t && "string" != typeof t) { var a = t.slice(0);
                            t = a[0] } else var a = []; var i = t || "start",
                            o = this.states[i];
                        o || (i = "start", o = this.states[i]); var s = this.matchMappings[i],
                            r = this.regExps[i];
                        r.lastIndex = 0; for (var c, l = [], u = 0, p = { type: null, value: "" }; c = r.exec(e);) { var d = s.defaultToken,
                                m = null,
                                f = c[0],
                                v = r.lastIndex; if (v - f.length > u) { var h = e.substring(u, v - f.length);
                                p.type == d ? p.value += h : (p.type && l.push(p), p = { type: d, value: h }) } for (var x = 0; x < c.length - 2; x++)
                                if (void 0 !== c[x + 1]) { m = o[s[x]], d = m.onMatch ? m.onMatch(f, i, a) : m.token, m.next && (i = "string" == typeof m.next ? m.next : m.next(i, a), o = this.states[i], o || (window.console && console.error && console.error(i, "doesn't exist"), i = "start", o = this.states[i]), s = this.matchMappings[i], u = v, r = this.regExps[i], r.lastIndex = v); break }
                            if (f)
                                if ("string" == typeof d) m && m.merge === !1 || p.type !== d ? (p.type && l.push(p), p = { type: d, value: f }) : p.value += f;
                                else if (d) { p.type && l.push(p), p = { type: null, value: "" }; for (var x = 0; x < d.length; x++) l.push(d[x]) } if (u == e.length) break; if (u = v, l.length > n) { for (; u < e.length;) p.type && l.push(p), p = { value: e.substring(u, u += 2e3), type: "overflow" };
                                i = "start", a = []; break } } return p.type && l.push(p), a.length > 1 && a[0] !== i && a.unshift(i), { tokens: l, state: a.length ? a : i } } }).call(i.prototype); var o = { empty: null, text: null, keyword: "keyword", control: "keyword", operator: "operator", constant: "atom", numeric: "number", character: "atom", escape: "atom", variable: "variable", parameter: "variable-3", language: "variable-2", comment: "comment", line: "comment", "double-slash": "comment", "double-dash": "comment", "number-sign": "comment", percentage: "comment", block: "comment", doc: "comment", string: "string", quoted: "string", single: "string", double: "string", triple: "string", unquoted: "string", interpolated: "string", regexp: "string-2", meta: "keyword", literal: "qualifier", support: "builtin", markup: "tag", underline: "link", link: "link", strong: "strong", heading: "header", heading2: "header-2", heading3: "header-3", heading4: "header-4", heading5: "header-5", heading6: "header-6", em: "em", list: "variable-2", numbered: "variable-2", unnumbered: "variable-2", quote: "quote", raw: "variable-2", invalid: "error", illegal: "invalidchar", deprecated: "error" },
                    s = function(e) { for (var t = null, a = 0; a < e.length; a++) void 0 !== o[e[a]] && (t = o[e[a]]); return t },
                    r = function(e, t) { var a = t.plannedTokens.shift(); if (void 0 === a) return null;
                        e.match(a.value); var n = a.type.split("."); return s(n) },
                    c = function(e, t) { if (t.plannedTokens.length > 0) return r(e, t); var a = t.current,
                            n = e.match(/.*$/, !1)[0],
                            i = u.getLineTokens(n, a); return t.plannedTokens = i.tokens, t.current = i.state, r(e, t) },
                    l = new a,
                    u = new i(l.$rules); return { startState: function() { return { current: "start", plannedTokens: [] } }, blankLine: function(e) { c("", e) }, token: c } }), e.defineMIME("text/x-asciidoc", "asciidoc") }) }).call(t, a(33)(e)) }, function(e, t, a) { var n, i, o;
    (function(e) { "use strict";

        function s(e) { return e && e.__esModule ? e : { default: e } } var r = a(59),
            c = s(r);! function(s) { "object" == (0, c.default)(t) && "object" == (0, c.default)(e) ? s(a(1)): "object" == ("undefined" == typeof brackets ? "undefined" : (0, c.default)(brackets)) && brackets.getModule ? s(brackets.getModule("thirdparty/CodeMirror2/lib/codemirror")) : (i = [a(1)], n = s, o = "function" == typeof n ? n.apply(t, i) : n, !(void 0 !== o && (e.exports = o))) }(function(e) {! function(t) { t(e) }(function(e) { e.overlayMode = function(t, a, n) { return { startState: function() { return { base: e.startState(t), overlay: e.startState(a), basePos: 0, baseCur: null, overlayPos: 0, overlayCur: null, streamSeen: null } }, copyState: function(n) { return { base: e.copyState(t, n.base), overlay: e.copyState(a, n.overlay), basePos: n.basePos, baseCur: null, overlayPos: n.overlayPos, overlayCur: null } }, token: function(e, i) { return (e != i.streamSeen || Math.min(i.basePos, i.overlayPos) < e.start) && (i.streamSeen = e, i.basePos = i.overlayPos = e.start), e.start == i.basePos && (i.baseCur = t.token(e, i.base), i.basePos = e.pos), e.start == i.overlayPos && (e.pos = e.start, i.overlayCur = a.token(e, i.overlay), i.overlayPos = e.pos), e.pos = Math.min(i.basePos, i.overlayPos), null == i.overlayCur ? i.baseCur : null != i.baseCur && i.overlay.combineTokens || n && null == i.overlay.combineTokens ? i.baseCur + " " + i.overlayCur : i.overlayCur }, indent: t.indent && function(e, a) { return t.indent(e.base, a) }, electricChars: t.electricChars, innerMode: function(e) { return { state: e.base, mode: t } }, blankLine: function(e) { t.blankLine && t.blankLine(e.base), a.blankLine && a.blankLine(e.overlay) } } } }) }) }).call(t, a(33)(e)) }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { e.on("application:stores", function(e) { var t, a;
            console.info("hubpressPlugin - application:stores"), console.log("hubpressPlugin - application:stores", e); var n = { state: { post: {}, posts: [], theme: {} }, mutations: (t = {}, (0, c.default)(t, I, function(e, t) { console.log("hubpress-" + I, t), u.default.merge(e, t.hubpress) }), (0, c.default)(t, T, function(e, t) { console.log("hubpress-" + T, t), u.default.merge(e, t) }), (0, c.default)(t, p.POSTS_GET, function(e, t) { console.log(p.POSTS_GET, t), e.posts = t.posts }), (0, c.default)(t, p.POST_GET, function(e, t) { t.post.content || (t.post.content = "// = Your Blog title\n// See https://hubpress.gitbooks.io/hubpress-knowledgebase/content/ for information about the parameters.\n// :hp-image: /covers/cover.png\n// :published_at: 2019-01-31\n// :hp-tags: HubPress, Blog, Open_Source,\n// :hp-alt-title: My English Title\n"), e.post = t.post }), (0, c.default)(t, p.POST_REMOTE_SAVE, function(e, t) { console.log(p.POST_REMOTE_SAVE, t), u.default.merge(e, t) }), (0, c.default)(t, p.POST_PUBLISH, function(e, t) { console.log(p.POST_PUBLISH, t), u.default.merge(e, t) }), (0, c.default)(t, p.POST_UNPUBLISH, function(e, t) { console.log(p.POST_UNPUBLISH, t), u.default.merge(e, t) }), (0, c.default)(t, p.POSTS_SYNCHRONIZE, function(e, t) { console.log(p.POSTS_SYNCHRONIZE, t), u.default.merge(e, t), e.posts = t.posts }), (0, c.default)(t, p.POST_CHANGE_CONTENT, function(e, t) { console.log("Content Changed", t), e.post = t.post }), (0, c.default)(t, p.POST_DELETE, function(e, t) { console.log("Post deleted", t), u.default.merge(e, t), e.posts = t.posts }), t), actions: (a = {}, (0, c.default)(a, A, function(e) { var t = (e.dispatch, e.commit),
                        a = e.rootState,
                        n = e.state,
                        i = { rootState: u.default.cloneDeep(a), currentState: u.default.cloneDeep(n) }; return m.default.initialize(i).then(function(e) { return t(T, e.nextState) }).then(function(e) { return console.info("HubPress initialized and synchronized") }) }), (0, c.default)(a, p.POSTS_SYNCHRONIZE, function(e) { var t = e.dispatch,
                        a = e.commit,
                        n = e.rootState,
                        i = e.state,
                        o = { rootState: u.default.cloneDeep(n), currentState: u.default.cloneDeep(i) }; return t("application:loading").then(function(e) { return m.default.synchronize(o) }).then(function(e) { return a(p.POSTS_SYNCHRONIZE, e.nextState) }).then(function(e) { return t("application:loaded") }).then(function(e) { return t("application:notify", { icon: "refresh", header: "Synchronization", message: "Your content has been synchronized with success.", level: "success" }) }) }), (0, c.default)(a, p.POST_GET, function(e, t) { var a = (e.dispatch, e.commit),
                        n = e.rootState,
                        i = e.state;
                    console.log(p.POST_GET, t); var o = { rootState: u.default.cloneDeep(n), currentState: u.default.cloneDeep(i), nextState: u.default.cloneDeep(i) }; return o.nextState.post._id = t, m.default.getLocalPost(o).then(function(e) { return a(p.POST_GET, e.nextState) }) }), (0, c.default)(a, p.POST_DELETE, function(e, t) { var a = e.dispatch,
                        n = e.commit,
                        i = e.rootState,
                        o = e.state;
                    console.log(p.POST_DELETE, t); var s = { rootState: u.default.cloneDeep(i), currentState: u.default.cloneDeep(o), nextState: u.default.cloneDeep(o) }; return s.nextState.post = { _id: t }, a("application:loading").then(function(e) { return m.default.deletePost(s) }).then(function(e) { return n(p.POST_DELETE, e.nextState) }).then(function(e) { return a("application:loaded") }).then(function(e) { return a("application:notify", { icon: "trash", header: "Post deleted", message: "Your post has been deleted with success.", level: "success" }) }) }), (0, c.default)(a, p.POST_REMOTE_SAVE, function(e, t) { var a = e.dispatch,
                        n = e.commit,
                        i = e.rootState,
                        o = e.state;
                    console.log(p.POST_REMOTE_SAVE, t); var s = { rootState: u.default.cloneDeep(i), currentState: u.default.cloneDeep(o) }; return a("application:loading").then(function(e) { return m.default.remoteSavePost(s) }).then(function(e) { return n(p.POST_REMOTE_SAVE, e.nextState) }).then(function(e) { return a("application:loaded") }).then(function(e) { return a("application:notify", { icon: "save", header: "Post saved", message: "Your post has been saved remotely with success.", level: "success" }) }) }), (0, c.default)(a, p.POST_PUBLISH, function(e, t) { var a = e.dispatch,
                        n = e.commit,
                        i = e.rootState,
                        o = e.state;
                    console.log(p.POST_PUBLISH, t); var s = { rootState: u.default.cloneDeep(i), currentState: u.default.cloneDeep(o) }; return a("application:loading").then(function(e) { return m.default.publishPost(s) }).then(function(e) { return n(p.POST_PUBLISH, e.nextState) }).then(function(e) { return a("application:loaded") }).then(function(e) { return a("application:notify", { icon: "rocket", header: "Post published", message: "Your post has been published with success.", level: "success" }) }) }), (0, c.default)(a, p.POST_UNPUBLISH, function(e, t) { var a = e.dispatch,
                        n = e.commit,
                        i = e.rootState,
                        o = e.state,
                        s = { rootState: u.default.cloneDeep(i), currentState: u.default.cloneDeep(o) }; return a("application:loading").then(function(e) { return m.default.unpublishPost(s) }).then(function(e) { return n(p.POST_UNPUBLISH, e.nextState) }).then(function(e) { return a("application:loaded") }).then(function(e) { return a("application:notify", { icon: "check circle", header: "Post unpublished", message: "Your post has been unpublished with success.", level: "success" }) }) }), (0, c.default)(a, p.POSTS_GET, function(e) { var t = e.dispatch,
                        a = e.commit,
                        n = e.rootState,
                        i = e.state;
                    console.log(p.POSTS_GET); var o = { rootState: u.default.cloneDeep(n), currentState: u.default.cloneDeep(i) }; return t("application:loading").then(function(e) { return m.default.getLocalPosts(o) }).then(function(e) { return a(p.POSTS_GET, e.nextState) }).then(function(e) { return t("application:loaded") }) }), (0, c.default)(a, p.POST_CHANGE_CONTENT, function(e, t) { var a = (e.dispatch, e.commit),
                        n = e.rootState,
                        i = e.state,
                        o = { rootState: u.default.cloneDeep(n), currentState: u.default.cloneDeep(i), payload: { post: t } }; return m.default.renderAndSavePost(o).then(function(e) { a(p.POST_CHANGE_CONTENT, e.nextState) }) }), a), getters: {} }; return e.nextState.stores.hubpress = n, console.log("hubpressPlugin - application:stores - return", e), e }), e.on("application:routes", function(e) { return console.info("hubpressPlugin - application:routes"), console.log("hubpressPlugin - application:routes", e), e.nextState.routes.push({ name: "about", path: "about", component: v.default }, { label: "Posts", name: "posts", path: "posts", item: "Content", component: b.default }, { name: "post", path: "posts/:id", component: x.default }), console.log("hubpressPlugin - application:routes - return", e), e }), e.on("application:initialize-plugins", function(e) { if (console.info("hubpressPlugin - application:initialize-plugins"), console.log("hubpressPlugin - application:initialize-plugins", e), e.nextState.application.settingsTabs.push({ id: "hubpress", label: "HubPress", component: P.default }, { id: "hubpress-social", label: "Social networks", component: y.default }), !e.rootState.authentication.isAuthenticated) return e; var t = (0, s.default)({}, e, { nextState: e.nextState.hubpress }); return m.default.initialize(t).then(function(t) { return e.nextState.hubpress = t.nextState, e }) }), e.on("application:prepare-config", function(e) { return console.info("hubpressPlugin - application:prepare-config"), console.log("hubpressPlugin - application:prepare-config", e), e.nextState.config.site = e.nextState.config.site || {}, e.nextState.config.site.title = e.payload.formData.get("hubpress-title"), e.nextState.config.site.description = e.payload.formData.get("hubpress-description"), e.nextState.config.site.logo = e.payload.formData.get("hubpress-logo"), e.nextState.config.site.cover = e.payload.formData.get("hubpress-cover-image"), e.nextState.config.site.delay = e.payload.formData.get("hubpress-render-delay"), e.nextState.config.site.postsPerPage = e.payload.formData.get("hubpress-posts-per-page"), e.nextState.config.site.googleAnalytics = e.payload.formData.get("hubpress-ga"), e.nextState.config.site.disqus = e.payload.formData.get("hubpress-disqus"), e.nextState.config.theme = e.nextState.config.theme || {}, e.nextState.config.theme.name = e.payload.formData.get("hubpress-theme"), e.nextState.config.socialnetwork = e.nextState.config.socialnetwork || {}, e.nextState.config.socialnetwork.email = e.payload.formData.get("social-email"), e.nextState.config.socialnetwork.twitch = e.payload.formData.get("social-twitch"), e.nextState.config.socialnetwork.youtube = e.payload.formData.get("social-youtube"), e.nextState.config.socialnetwork.twitter = e.payload.formData.get("social-twitter"), e.nextState.config.socialnetwork.facebook = e.payload.formData.get("social-facebook"), e.nextState.config.socialnetwork.instagram = e.payload.formData.get("social-instagram"), e.nextState.config.socialnetwork.discord = e.payload.formData.get("social-discord"), e.nextState.config.socialnetwork.flickr = e.payload.formData.get("social-flickr"), e.nextState.config.socialnetwork.googleplus = e.payload.formData.get("social-googleplus"), e.nextState.config.socialnetwork.pinterest = e.payload.formData.get("social-pinterest"), e.nextState.config.socialnetwork.linkedin = e.payload.formData.get("social-linkedin"), e.nextState.config.socialnetwork.github = e.payload.formData.get("social-github"), e.nextState.config.socialnetwork.stackoverflow = e.payload.formData.get("social-stackoverflow"), console.log("hubpressPlugin - application:prepare-config - return", e), e }), e.on("application:save-config-done", function(e) { console.info("hubpressPlugin - application:save-config-done"), console.log("hubpressPlugin - application:save-config-done", e); var t = (0, s.default)({}, e, { nextState: e.nextState.hubpress }); return m.default.refreshAfterSavedConfig(t).then(function(t) { return e.nextState.hubpress = t.nextState, e }) }) }
    Object.defineProperty(t, "__esModule", { value: !0 }); var o = a(19),
        s = n(o),
        r = a(76),
        c = n(r);
    t.hubpressPlugin = i; var l = a(4),
        u = n(l),
        p = a(73),
        d = a(344),
        m = n(d),
        f = a(798),
        v = n(f),
        h = a(799),
        x = n(h),
        g = a(800),
        b = n(g),
        _ = a(802),
        P = n(_),
        k = a(803),
        y = n(k),
        w = a(111),
        S = n(w),
        j = a(789),
        C = n(j);
    S.default.use(C.default); var I = "application:initialize-plugins",
        T = "hubpress:initialize",
        A = "authorisation:authentication-done" }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { return s.default.fireRequestAuthentication(e).then(function(e) { return s.default.fireReceiveAuthentication(e) }) }
    Object.defineProperty(t, "__esModule", { value: !0 }); var o = a(57),
        s = n(o);
    t.default = { authenticate: i } }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var i = a(130),
        o = n(i),
        s = a(345),
        r = n(s),
        c = a(343),
        l = n(c),
        u = a(346),
        p = n(u),
        d = a(347),
        m = n(d);
    t.default = (0, o.default)({}, r.default, l.default, p.default, m.default) }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { return r.default.fireRequestTheme(e).then(function(e) { return r.default.fireReceiveTheme(e) }).then(function(e) { return localStorage.getItem("hubpress:sync") ? r.default.fireRequestLocalPosts(e).then(function(e) { return r.default.fireReceiveLocalPosts(e) }) : o(e) }) }

    function o(e) { return r.default.fireRequestRemoteSynchronization(e).then(function(e) { return r.default.fireReceiveRemoteSynchronization(e) }).then(function(e) { return r.default.fireRequestRenderingDocuments(e) }).then(function(e) { return r.default.fireReceiveRenderingDocuments(e) }).then(function(e) { return r.default.fireRequestLocalSynchronization(e) }).then(function(e) { return r.default.fireReceiveLocalSynchronization(e) }).then(function(e) { return r.default.fireRequestLocalPosts(e) }).then(function(e) { return r.default.fireReceiveLocalPosts(e) }).then(function(e) { return localStorage.setItem("hubpress:sync", (0, l.default)().format()), e }) }
    Object.defineProperty(t, "__esModule", { value: !0 }); var s = a(57),
        r = n(s),
        c = a(2),
        l = n(c);
    t.default = { initialize: i, synchronize: o } }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { return console.log("getLocalPost", e), d.default.fireRequestLocalPost(e).then(function(e) { return d.default.fireReceiveLocalPost(e) }) }

    function o(e) { return d.default.fireRequestLocalPosts(e).then(function(e) { return d.default.fireReceiveLocalPosts(e) }) }

    function s(e) { return d.default.fireRequestLocalPost(e).then(function(e) { return d.default.fireReceiveLocalPost(e) }).then(function(e) { return e.nextState.post.content = e.payload.post.content, e }).then(function(e) { return d.default.fireRequestRenderingPost(e) }).then(function(e) { return d.default.fireReceiveRenderingPost(e) }).then(function(e) { return e.nextState.post && e.nextState.post.title ? d.default.fireRequestSaveLocalPost(e).then(function(e) { return d.default.fireReceiveSaveLocalPost(e) }) : e }) }

    function r(e) { return e.currentState.elementsToPublish = [], d.default.fireRequestLocalPost(e).then(function(e) { return d.default.fireReceiveLocalPost(e) }).then(function(e) { return d.default.fireRequestSaveRemotePost(e) }).then(function(e) { return d.default.fireReceiveSaveRemotePost(e) }).then(function(e) { return d.default.fireRequestSaveLocalPost(e) }).then(function(e) { return d.default.fireReceiveSaveLocalPost(e) }) }

    function c(e) { return e.currentState.elementsToPublish = [], d.default.fireRequestLocalPost(e).then(function(e) { return d.default.fireReceiveLocalPost(e) }).then(function(e) { var t = e.nextState.post.original && e.nextState.post.original.tags || []; return e.nextState.tags = _.union(e.nextState.post.tags, t), e }).then(function(e) { return d.default.fireRequestSaveRemotePost(e) }).then(function(e) { return d.default.fireReceiveSaveRemotePost(e) }).then(function(e) { return e.nextState.post.original.author = e.nextState.post.original.author || e.nextState.post.author, e.nextState.post.published = 1, e }).then(function(e) { return d.default.fireRequestSaveLocalPost(e) }).then(function(e) { return d.default.fireReceiveSaveLocalPost(e) }).then(function(e) { return d.default.fireRequestLocalPublishedPosts(e) }).then(function(e) { return d.default.fireReceiveLocalPublishedPosts(e) }).then(function(e) { return d.default.fireRequestGenerateIndex(e) }).then(function(e) { return d.default.fireReceiveGenerateIndex(e) }).then(function(e) { return d.default.fireRequestGeneratePost(e) }).then(function(e) { return d.default.fireReceiveGeneratePost(e) }).then(function(e) { return d.default.fireRequestGenerateTags(e) }).then(function(e) { return d.default.fireReceiveGenerateTags(e) }).then(function(e) { return d.default.fireRequestGenerateAuthors(e) }).then(function(e) { return d.default.fireReceiveGenerateAuthors(e) }).then(function(e) { return d.default.fireRequestSaveRemotePublishedElements(e) }).then(function(e) { return d.default.fireReceiveSaveRemotePublishedElements(e) }) }

    function l(e) { return e.currentState.elementsToPublish = [], d.default.fireRequestLocalPost(e).then(function(e) { return d.default.fireReceiveLocalPost(e) }).then(function(e) { var t = e.nextState.post.original && e.nextState.post.original.tags || []; return e.nextState.tags = t, e }).then(function(e) { return d.default.fireRequestDeleteRemotePublishedPost(e) }).then(function(e) { return d.default.fireReceiveDeleteRemotePublishedPost(e) }).then(function(e) { return e.nextState.post.published = 0, e }).then(function(e) { return d.default.fireRequestSaveLocalPost(e) }).then(function(e) { return d.default.fireReceiveSaveLocalPost(e) }).then(function(e) { return d.default.fireRequestLocalPublishedPosts(e) }).then(function(e) { return d.default.fireReceiveLocalPublishedPosts(e) }).then(function(e) { return d.default.fireRequestGenerateIndex(e) }).then(function(e) { return d.default.fireReceiveGenerateIndex(e) }).then(function(e) { return d.default.fireRequestGenerateTags(e) }).then(function(e) { return d.default.fireReceiveGenerateTags(e) }).then(function(e) { return d.default.fireRequestGenerateAuthors(e) }).then(function(e) { return d.default.fireReceiveGenerateAuthors(e) }).then(function(e) { return d.default.fireRequestSaveRemotePublishedElements(e) }).then(function(e) { return d.default.fireReceiveSaveRemotePublishedElements(e) }) }

    function u(e) { return d.default.fireRequestLocalPost(e).then(function(e) { return d.default.fireReceiveLocalPost(e) }).then(function(e) { var t = e.nextState.post.original && e.nextState.post.original.tags || []; return e.nextState.tags = t, e }).then(function(e) { return e.nextState.post.original ? d.default.fireRequestDeleteRemotePost(e).then(function(e) { return d.default.fireReceiveDeleteRemotePost(e) }) : e }).then(function(e) { return d.default.fireRequestDeleteLocalPost(e) }).then(function(e) { return d.default.fireReceiveDeleteLocalPost(e) }).then(function(e) { return e.nextState.post.published ? d.default.fireRequestDeleteRemotePublishedPost(e).then(function(e) { return d.default.fireReceiveDeleteRemotePublishedPost(e) }).then(function(e) { return d.default.fireRequestLocalPublishedPosts(e) }).then(function(e) { return d.default.fireReceiveLocalPublishedPosts(e) }).then(function(e) { return d.default.fireRequestGenerateIndex(e) }).then(function(e) { return d.default.fireReceiveGenerateIndex(e) }).then(function(e) { return d.default.fireRequestGenerateTags(e) }).then(function(e) { return d.default.fireReceiveGenerateTags(e) }).then(function(e) { return d.default.fireRequestGenerateAuthors(e) }).then(function(e) { return d.default.fireReceiveGenerateAuthors(e) }).then(function(e) { return d.default.fireRequestSaveRemotePublishedElements(e) }).then(function(e) { return d.default.fireReceiveSaveRemotePublishedElements(e) }) : e }).then(o) }
    Object.defineProperty(t, "__esModule", { value: !0 }); var p = a(57),
        d = n(p);
    t.default = { deletePost: u, getLocalPost: i, getLocalPosts: o, remoteSavePost: r, renderAndSavePost: s, publishPost: c, unpublishPost: l } }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { return s.default.fireRequestTheme(e).then(function(t) { return s.default.fireReceiveTheme(e) }).then(function(t) { return s.default.fireRequestLocalPublishedPosts(e) }).then(function(t) { return s.default.fireReceiveLocalPublishedPosts(e) }).then(function(e) { return console.time("Build content"), e }).then(function(t) { return s.default.fireRequestGenerateIndex(e) }).then(function(t) { return s.default.fireReceiveGenerateIndex(e) }).then(function(t) { return s.default.fireRequestGeneratePosts(e) }).then(function(t) { return s.default.fireReceiveGeneratePosts(e) }).then(function(t) { return s.default.fireRequestGenerateTags(e) }).then(function(t) { return s.default.fireReceiveGenerateTags(e) }).then(function(t) { return s.default.fireRequestGenerateAuthors(e) }).then(function(t) { return s.default.fireReceiveGenerateAuthors(e) }).then(function(e) { return console.timeEnd("Build content"), e }).then(function(t) { return s.default.fireRequestSaveRemotePublishedElements(e) }).then(function(t) { return s.default.fireReceiveSaveRemotePublishedElements(e) }) }
    Object.defineProperty(t, "__esModule", { value: !0 }); var o = a(57),
        s = n(o);
    t.default = { refreshAfterSavedConfig: i } }, function(e, t, a) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { var t = M.default.defer(); return e.getDetails(function(e, a) { e ? t.reject(e) : t.resolve(a) }), t.promise }

    function o(e) { var t = M.default.defer();
        console.log("getAuthorizations", e); var a = {}; return e.listAuthorizations(a, function(e, a) { e ? t.reject(e) : (console.log("getAuthorizations list", a), t.resolve(a)) }), t.promise }

    function s(e) { return function() { var t = M.default.defer(); return e.getProfile(function(e, a) { e ? t.reject(e) : t.resolve(U.default.pick(a, ["login", "id", "name", "location", "blog", "avatar_url", "bio"])) }), t.promise } }

    function r(e) { return (0, N.default)(e + "-" + R.default.name + "-" + R.default.os) }

    function c(e, t, a) {
        var n = M.default.defer(),
            i = -1,
            o = r(e);
        return t.forEach(function(e) { var t = e.note;
            t === o && (i = e.id) }), i !== -1 ? a.deleteAuthorization(i, function(e, t) {
            e ? n.reject(e) : n.resolve()
        }) : n.resolve(), n.promise
    }

    function l(e, t) { var a = M.default.defer(),
            n = { scopes: ["public_repo"], note: r(e) }; return t.createAuthorization(n, function(e, t) { e ? a.reject(e) : a.resolve(t) }), a.promise }

    function u(e) { console.log("githubPlugin - login", e); var t = M.default.defer(),
            a = e.nextState.credentials,
            n = e.rootState.application.config.meta;
        Q = new z.default({ auth: "basic", username: a.email, password: a.password, twoFactorCode: a.twoFactorCode }); var r = Q.getRepo(n.username, n.repositoryName),
            u = Q.getAuthorization(),
            p = Q.getUser(),
            d = void 0,
            m = void 0; return i(r).then(function(e) { d = e }).then(s(p)).then(function(e) { return m = e, o(u) }).then(function(e) { return c(n.repositoryName, e, u) }).then(function() { return l(n.repositoryName, u) }).then(function(e) { Q = new z.default({ auth: "oauth", token: e.token }), t.resolve({ isAuthenticated: !0, credentials: { token: e.token }, permissions: d.permissions, userInformations: m }) }).catch(function(e) { console.error("githubPlugin - login error", e, e.response); var a, i = { type: "error", title: "Authentication" }; if (e.response) { var o = e.response.headers && e.response.headers["x-github-otp"] || "";
                a = "required" === o.split(";")[0] }
            a ? (l(n.repositoryName, u), console.log("githubPlugin - OTP required : ", a), i.type = "warning", i.content = "A two-factor authentication code is needed.", i.otp = !0, t.resolve({ isAuthenticated: !1, isTwoFactorCodeRequired: !0 })) : (console.error("githubPlugin - login error", e), t.reject({ error: { code: e.error, message: "Unable to authenticate, check your credentials." } })) }), t.promise }

    function p(e, t) { var a = M.default.defer(); return e.getContents(t.meta.branch, "", !0, function(e, t) { if (e) a.reject(e);
            else { var n = void 0;
                t.forEach(function(e) { "_posts" === e.name && (n = e.sha) }), a.resolve(n) } }), a.promise }

    function d(e, t, a) { var n = void 0; if (a === localStorage.postsSha) n = M.default.fcall(function() { return [] });
        else { var i = M.default.defer();
            e.getContents(t.meta.branch, "_posts", !0, function(e, t) { e ? i.reject(e) : i.resolve(t) }), n = i.promise } return n }

    function m(e, t) { var a = M.default.defer(),
            n = e.meta,
            i = Q.getRepo(n.username, n.repositoryName); return i.getSha(e.meta.branch, e.urls.getPostGhPath(t.name), function(e, n) { if (e && e.response && 404 !== e.response.status) a.reject(e);
            else { var i = n ? 1 : 0,
                    o = (0, A.default)({}, t, { published: i });
                a.resolve(o) } }), a.promise }

    function f(e, t, a) { var n = U.default.compact(a),
            i = n.map(function(e) { return m(t, e) }); return M.default.all(i) }

    function v(e, t, a) { var n = M.default.defer(),
            i = e.meta,
            o = Q.getRepo(i.username, i.repositoryName); return console.log("getPostAuthor", t), o.listCommits({ sha: e.meta.branch, path: t.original && t.original.path || t.path }, function(e, i) { if (e && 404 !== e.error) n.reject(e);
            else { var o = i[i.length - 1].author; if (o && o.login !== a.login) { var r = Q.getUser(o.login);
                    s(r)().then(function(e) { o = (0, A.default)({}, e); var a = (0, A.default)({}, t, { author: o });
                        n.resolve(a) }).catch(function(e) { return n.reject(e) }) } else { o = (0, A.default)({}, a); var c = (0, A.default)({}, t, { author: o });
                    n.resolve(c) } } }), n.promise }

    function h(e, t, a, n) { var i = a.map(function(e) { return v(t, e, n) }); return M.default.all(i) }

    function x(e, t, a) { var n = []; return a.forEach(function(a) { var i = M.default.defer();
            n.push(i.promise), e.getContents(t.meta.branch, a.path, !0, function(e, t) { if (e) i.reject(e);
                else { var n = void 0;
                    n = (0, A.default)({}, a, { content: t }), i.resolve(n) } }) }), M.default.all(n) }

    function g(e) { var t = e.application.config;
        console.log("Get posts", t); var a = t.meta,
            n = Q.getRepo(a.username, a.repositoryName); return p(n, t).then(function(e) { return d(n, t, e) }).then(function(e) { return e.map(function(e) { return U.default.pick(e, ["name", "path", "sha", "size"]) }) }).then(function(e) { return f(n, t, e) }).then(function(a) { return h(n, t, a, e.authentication.userInformations) }).then(function(e) { return x(n, t, e) }) }

    function b(e, t, a) { var n = M.default.defer(); return e.deleteFile(t, a, function(e, t) { e ? n.reject(e) : n.resolve(t) }), n.promise }

    function _(e, t, a) { return b(e, t, a) }

    function P(e, t) { var a = e.meta,
            n = Q.getRepo(a.username, a.repositoryName),
            i = void 0; if (t.original && t.name !== t.original.name) { var o = M.default.defer();
            i = o.promise; var s = e.meta.branch,
                r = "_posts/" + t.original.name,
                c = "_posts/" + t.name;
            n.move(s, r, c, function(a, i) { if (a) o.reject(a);
                else if (t.published) { var r = e.urls.getPostGhPath(t.original.name);
                    _(n, s, r).then(function(e) { o.resolve({ post: t, sha: e }) }).catch(function(e) { o.reject(e) }).done() } else o.resolve({ post: t, sha: i }) }) } else i = (0, M.default)({ post: t }); return i }

    function k(e, t) { console.log("Write post", e, t); var a = e.meta,
            n = Q.getRepo(a.username, a.repositoryName),
            i = a.branch,
            o = "_posts/" + t.name,
            s = "Update " + t.name,
            r = M.default.defer(); return n.writeFile(i, o, t.content, s, function(a, n) { a ? r.reject(a) : (t.original = U.default.omit(t, ["original"]), t.original.url = e.urls.getPostUrl(t.original.name), t.original.path = "_posts/" + t.original.name, t.original.sha = n, J = n.commit, console.info("Update lastCacheCommit", J), r.resolve(t)) }), r.promise }

    function y(e) { console.log("Write config", e); var t = M.default.defer(),
            a = e.meta,
            n = Q.getRepo(a.username, a.repositoryName),
            i = a.branch; return n.writeFile(i, "hubpress/config.json", (0, I.default)(e, null, 2), "Update configuration file", function(e, a) { e ? t.reject(e) : (J = a.commit, console.info("Update lastCacheCommit", J), t.resolve(a)) }), t.promise }

    function w(e) { console.log("Github manageCname - ", e); var t = e.meta,
            a = Q.getRepo(t.username, t.repositoryName),
            n = M.default.defer(),
            i = function(e, t) { e && "not found" !== e ? n.reject(e) : n.resolve(t) }; return t.cname && "" !== t.cname ? (console.info("SettingsService - saveAndPublish save CNAME"), a.writeFile(t.branch, "CNAME", t.cname, "Update CNAME with " + t.cname, function(e, t) { e ? n.reject(e) : (J = t.commit, console.info("Update lastCacheCommit", J), n.resolve(t)) })) : (console.info("SettingsService - saveAndPublish delete CNAME"), a.deleteFile(t.branch, "CNAME", i).then(function(e) { console.log("SHA after delete", e), n.resolve(e) }).catch(function(e) { 404 !== e.response.status ? n.reject(e) : n.resolve() })), n.promise }

    function S(e, t) { if (console.error(e, t), !t) return e.sha; var a = (0, B.default)(e.committer.date),
            n = (0, B.default)(t.committer.date); return n.isAfter(a) ? t.sha : e.sha }

    function j(e) { e.on("application:request-config", function(e) { return console.info("githubPlugin - application:request-config"), console.log("githubPlugin - application:request-config", e), (0, L.default)("config.json?dt=" + Date.now()).then(function(e) { return e.json() }).then(function(t) { return e.nextState.config = (0, A.default)({}, e.nextState.config, t), e.nextState.config.theme.name = e.nextState.config.theme.name.toLowerCase(), e }) }), e.on("application:receive-config", function(e) { console.info("githubPlugin - application:receive-config"), console.log("githubPlugin - application:receive-config", e); var t = (0, V.default)(e.nextState.config); return e.nextState.config = (0, A.default)({}, e.nextState.config, { urls: t }), e }), e.on("requestAuthentication", function(e) { return console.info("githubPlugin - requestAuthentication"), console.log("githubPlugin - requestAuthentication", e), u(e).then(function(t) { var a = (0, A.default)({}, e.nextState.credentials, t.credentials); return e.nextState = (0, A.default)({}, e.nextState, t, { credentials: a }), e }) }), e.on("receiveSavedAuth", function(e) { return console.info("githubPlugin - receiveSavedAuth"), console.log("githubPlugin - receiveSavedAuth", e), e.nextState.authentication.isAuthenticated && (Q = new z.default({ auth: "oauth", token: e.nextState.authentication.credentials.token })), e }), e.on("hubpress:request-remote-synchronization", function(e) { return console.info("githubPlugin - hubpress:request-remote-synchronization"), console.log("githubPlugin - hubpress:request-remote-synchronization", e), e.rootState.authentication.isAuthenticated ? g(e.rootState).then(function(t) { return e.nextState = (0, A.default)({}, e.nextState, { posts: t }), e }) : e }), e.on("requestSaveRemotePost", function(e) { console.info("githubPlugin - requestSaveRemotePost"), console.log("githubPlugin - requestSaveRemotePost", e); var t = e.rootState.application.config,
                a = e.nextState.post; return P(t, a).then(function(e) { return k(t, e.post) }).then(function(a) { return v(t, a, e.rootState.authentication.userInformations) }).then(function(t) { return e.nextState.post = t, e }) }), e.on("requestSaveRemotePublishedElements", function(e) { console.info("githubPlugin - requestSaveRemotePublishedElements"), console.log("githubPlugin - requestSaveRemotePublishedElements", e); var t = e.rootState.application.config.meta,
                a = Q.getRepo(t.username, t.repositoryName),
                n = e.nextState.elementsToPublish.length,
                i = U.default.chunk(e.nextState.elementsToPublish, W);
            console.log("Writeall", e.nextState.elementsToPublish); var o = M.default.defer(); return a.getBranch(t.branch, function(s, r) { if (s) { var c = M.default.defer(); return o = c.promise, c.reject(s) } var l = 0,
                    u = i.reduce(function(e, i) { var o = function(e) { var o = M.default.defer(),
                                s = i.map(function(e) { return { path: e.path, mode: "100644", type: "blob", content: e.content } }); return a.createTree(s, e, function(s, r) { return s ? o.reject(s) : void a.commit(e, r.sha, "Published " + (l + i.length) + "/" + n + " elements", function(e, n) { return e ? o.reject(e) : (l += i.length, J = n, void a.updateHead("heads/" + t.branch, n.sha, !1, function(e, t) { return console.log("updateHead", e, t), e ? o.reject(e) : void o.resolve(n.sha) })) }) }), o.promise }; return e.then(o) }, (0, M.default)(S({ committer: r.commit.commit.committer, sha: r.commit.sha }, J)));
                u.then(function(t) { o.resolve(e) }).catch(function(e) { o.reject(e) }) }), o.promise }), e.on("requestDeleteRemotePost", function(e) { console.info("githubPlugin - requestDeleteRemotePost"), console.log("githubPlugin - requestDeleteRemotePost", e); var t = M.default.defer(),
                a = e.rootState.application.config,
                n = a.meta,
                i = Q.getRepo(n.username, n.repositoryName),
                o = e.nextState.post.original.path; return i.deleteFile(n.branch, o, function(a, n) { a && a.response && 404 !== a.response.status ? t.reject(a) : t.resolve(e) }).catch(function(a) { a && a.response && 404 === a.response.status && t.resolve(e) }), t.promise }), e.on("requestDeleteRemotePublishedPost", function(e) { console.info("githubPlugin - requestDeleteRemotePublishedPost"), console.log("githubPlugin - requestDeleteRemotePublishedPost", e); var t = M.default.defer(),
                a = e.rootState.application.config,
                n = a.meta,
                i = Q.getRepo(n.username, n.repositoryName),
                o = a.urls.getPostGhPath(e.nextState.post.original.name); return i.deleteFile(n.branch, o, function(a, n) { a ? t.reject(a) : t.resolve(e) }), t.promise }), e.on("application:request-save-config", function(e) { console.info("githubPlugin - application:request-save-config"), console.log("githubPlugin - application:request-save-config", e); var t = e.nextState.application; return y(t.config).then(function(e) { return w(t.config) }).then(function(t) { return e }) }), e.on("receiveRenderingPost", function(e) { return console.info("githubPlugin - receiveRenderingPost"), console.log("githubPlugin - receiveRenderingPost", e), e }), e.on("application:initialize-plugins", function(e) { console.info("githubPlugin - application:initialize-plugins"), console.log("githubPlugin - application:initialize-plugins", e); var t = "put your repository name here" === e.rootState.application.config.meta.repositoryName || "put your username here" === e.rootState.application.config.meta.username; return e.nextState.application.requireInitilisation = t, e.nextState.application.config.initialisationConfigComponent = Z.default, e }) }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var C = a(75),
        I = n(C),
        T = a(19),
        A = n(T);
    t.githubPlugin = j;
    var O = a(726),
        R = n(O),
        q = a(719),
        L = n(q),
        E = a(43),
        N = n(E),
        D = a(706),
        z = n(D),
        $ = a(107),
        M = n($),
        G = a(4),
        U = n(G),
        F = a(2),
        B = n(F),
        H = a(349),
        V = n(H),
        Y = a(804),
        Z = n(Y),
        W = 50,
        J = null,
        Q = void 0
}, function(e, t) { "use strict";

    function a(e, t) { var a = t.protocol + "//" + t.host; return "localhost" === t.hostname ? (console.log("Local development"), a) : (t.host === e.username + ".github.io" || t.host === e.username + ".github.com" ? "master" !== e.branch && (a = a + "/" + e.repositoryName) : "master" === e.branch || e.cname && "" !== e.cname || (a = a + "/" + e.repositoryName), a) }

    function n(e, t) { var a = void 0; return e.cname && "" !== e.cname ? a = (t === !1 ? "" : "http:") + "//" + e.cname : (a = (t === !1 ? "" : "https:") + ("//" + e.username + ".github.io"), "master" !== e.branch && (a = a + "/" + e.repositoryName)), a }

    function i(e) { return { site: n(e.meta), hubpress: a(e.meta, window.location), theme: n(e.meta, !1) + ("/themes/" + e.theme.name), images: n(e.meta) + "/images", getPostUrl: function(e) { return e.replace(/([\d]{4})-([\d]{2})-([\d]{2})-([\w-]*)\.adoc/, "/$1/$2/$3/$4.html") }, getPostGhPath: function(e) { return e.replace(/([\d]{4})-([\d]{2})-([\d]{2})-([\w-]*)\.adoc/, "$1/$2/$3/$4.html") }, getSiteUrl: n } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = i }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { e.on("hubpress:request-local-synchronization", function(e) { console.info("pouchDbPlugin - hubpress:request-local-synchronization"), console.log("pouchDbPlugin - hubpress:request-local-synchronization", e); var t = e.nextState.posts || [],
                a = t.map(function(e) { return function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            a = c.default.defer(); return delete e._links, g.find({ selector: { type: { $eq: x }, "original.name": { $eq: e.name } }, limit: 1 }).then(function(n) { if (console.log("POST find values", n), n.docs.length) { console.log("pouchDbPlugin - post found", e.name); var i = n.docs[0];
                                i.original && i.original.content !== e.content || i.published !== e.published ? (console.log("pouchDbPlugin - post have changed", e.name), e._id = i._id, e._rev = i._rev, e.type = x, g.put(e).then(function() { e._rev = i._rev, t.push(e), a.resolve(t) }).catch(function(e) { a.reject(e) })) : (console.log("pouchDbPlugin - post have not changed", e.name), e._id = i._id, e._rev = i._rev, e.type = x, t.push(e), a.resolve(t)) } else console.log("pouchDbPlugin - post not found", e.name), e._id = d.default.v4(), e.type = x, g.put(e).then(function(n) { e._rev = n.rev, t.push(e), a.resolve(t) }).catch(function(e) { a.reject(e) }) }), a.promise } }),
                n = (a || []).reduce(function(e, t) { return e.then(t) }, (0, c.default)([])),
                i = t.map(function(e) { return e.name }),
                o = g.find({ selector: { type: { $eq: x }, "original.name": { $nin: i } } }).then(function(e) { if (e.docs.length) { var t = e.docs.map(function(e) { return u.default.pick(e, ["_id", "_rev", "attributes", "content", "excerpt", "html", "name", "path", "title", "type", "url"]) }); return g.bulkDocs(t) } return [] }); return o.then(function() { return n }).then(function(t) { return e.nextState.posts = t, e }) }), e.on("application:receive-config", function(e) { return console.info("pouchDbPlugin - application:receive-config"), console.log("pouchDbPlugin - application:receive-config", e), g ? e : (g = new f.default("hubpress-" + e.nextState.config.meta.username + "-" + e.nextState.config.meta.repositoryName), g.info().then(function(e) { console.log("PouchDB infos", e) }), g.createIndex({ index: { fields: ["name", "type"] } }).then(function() { return g.createIndex({ index: { fields: ["type"] } }) }).then(function() { return g.createIndex({ index: { fields: ["original.name", "type"] } }) }).then(function() { return g.createIndex({ index: { fields: ["published", "type"] } }) }).then(function() { return g.createIndex({ index: { fields: ["original.name", "published", "type"] } }) }).then(function() { return e })) }), e.on("hubpress:request-local-posts", function(e) { return console.info("pouchDbPlugin - hubpress:request-local-posts"), console.log("pouchDbPlugin - hubpress:request-local-posts", e), g.find({ selector: { name: { $gt: null }, type: { $eq: x } }, sort: [{ name: "desc" }] }).then(function(t) { return e.nextState = (0, s.default)({}, e.nextState, { posts: t.docs }), e }) }), e.on("requestSelectedPost", function(e) { return console.info("pouchDbPlugin - requestSelectedPost"), console.log("pouchDbPlugin - requestSelectedPost", e), g.get(e.data.post._id).then(function(t) { var a = (0, s.default)({}, e.data, { selectedPost: t }); return (0, s.default)({}, e, { data: a }) }) }), e.on("hubpress:request-local-post", function(e) { console.info("pouchDbPlugin - hubpress:request-local-post"), console.log("pouchDbPlugin - hubpress:request-local-post", e); var t = c.default.defer(); return g.get(e.nextState.post._id).then(function(a) { e.nextState = (0, s.default)({}, e.nextState, { post: a }), t.resolve(e) }).catch(function(a) { 404 === a.status ? (e.nextState = (0, s.default)({}, e.nextState, { post: { _id: e.nextState.post._id } }), t.resolve(e)) : t.reject(a) }), t.promise }), e.on("requestSaveLocalPost", function(e) { console.info("pouchDbPlugin - requestSaveLocalPost"), console.log("pouchDbPlugin - requestSaveLocalPost", e); var t = c.default.defer(); return g.find({ selector: { _id: { $ne: e.nextState.post._id }, name: { $eq: e.nextState.post.name }, type: { $eq: x } }, limit: 1 }).then(function(t) { if (t.docs.length) throw new Error("Post with the name " + e.nextState.post.name + " already exist"); return e.nextState.post._id }).then(function(e) { return g.get(e) }).then(function(a) { var n = (0, s.default)({}, a, e.nextState.post);
                n._rev = a._rev, n.type = x, g.put(n).then(function(a) { n._rev = a.rev, e.nextState.post = n, t.resolve(e) }).catch(function(e) { return t.reject(e) }) }).catch(function(a) { if (404 === a.status) { var n = e.nextState.post;
                    g.put(n).then(function(a) { n._rev = a.rev, e.nextState.post = n, t.resolve(e) }).catch(function(e) { return t.reject(e) }) } else t.reject(a) }), t.promise }), e.on("requestLocalPublishedPosts", function(e) { return console.info("pouchDbPlugin - requestLocalPublishedPosts"), console.log("pouchDbPlugin - requestLocalPublishedPosts", e), g.find({ selector: { "original.name": { $gt: null }, published: { $eq: 1 }, type: { $eq: x } }, sort: [{ "original.name": "desc" }] }).then(function(t) { return console.log("requestLocalPublishedPosts => ", t), e.nextState.publishedPosts = t.docs, e }) }), e.on("requestDeleteLocalPost", function(e) { return console.info("pouchDbPlugin - requestDeleteLocalPost"), console.log("pouchDbPlugin - requestDeleteLocalPost", e), g.remove(e.nextState.post._id, e.nextState.post._rev).then(function() { return e }) }) }
    Object.defineProperty(t, "__esModule", { value: !0 }); var o = a(19),
        s = n(o);
    t.pouchDbPlugin = i; var r = a(107),
        c = n(r),
        l = a(4),
        u = n(l),
        p = a(290),
        d = n(p),
        m = a(745),
        f = n(m),
        v = a(739),
        h = n(v);
    f.default.plugin(h.default), window.PouchDB = f.default; var x = "post",
        g = void 0 }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { e.on("requestGenerateIndex", function(e) { console.info("rssPlugin - requestGenerateIndex"), console.log("rssPlugin - requestGenerateIndex", e); var t = e.rootState.application.config.site || {},
                a = e.rootState.application.config.urls.site || "",
                n = e.nextState.publishedPosts || [],
                i = new s.default({ title: t.title || "", description: t.description || "", feed_url: a + "/rss/", site_url: a, image_url: t.cover, ttl: "60" });
            n.forEach(function(e) { i.item({ title: e.title, description: e.html, url: "" + a + e.url, categories: e.tags, author: e.author.name, date: e.published_at }) }); var o = i.xml(),
                r = []; return r.push({ name: "RSS", path: "rss/index.xml", content: o, message: "Publish rss feed" }), e.nextState.elementsToPublish = (e.nextState.elementsToPublish || []).concat(r), e }) }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.rssPlugin = i; var o = a(754),
        s = n(o) }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { e.on("receiveAuthentication", function(e) { return console.info("SessionStorage Plugin - receiveAuthentication"), console.log("receiveAuthentication", e), e.nextState.isAuthenticated && sessionStorage.setItem(e.rootState.application.config.meta.repositoryName + "-authentication", (0, c.default)({ credentials: { token: e.nextState.credentials.token }, permissions: e.nextState.permissions, userInformations: e.nextState.userInformations })), e }), e.on("requestSavedAuth", function(e) { console.info("SessionStorage Plugin - requestSavedAuth"), console.log("requestSavedAuth", e); var t = void 0,
                a = sessionStorage.getItem(e.rootState.application.config.meta.repositoryName + "-authentication"); return a ? (t = JSON.parse(a), t.isAuthenticated = !0) : t = { credentials: {}, userInformations: {}, isAuthenticated: !1 }, e.nextState.authentication = (0, s.default)({}, e.nextState.authentication, t), e }), e.on("requestLogout", function(e) { return console.info("SessionStorage Plugin - requestLogout"), console.log("requestLogout", e), sessionStorage.removeItem(e.rootState.application.config.meta.repositoryName + "-authentication"), e }) }
    Object.defineProperty(t, "__esModule", { value: !0 }); var o = a(19),
        s = n(o),
        r = a(75),
        c = n(r);
    t.sessionStoragePlugin = i }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { console.info("AuthorGenerator - generate"), console.log("AuthorGenerator - generate", e); var t = "author",
            a = void 0; if (!u.default.isTemplateAvailable(t)) return e;
        a = e.nextState.author ? e.nextState.publishedPosts.filter(function(t) { return t.author.login === e.nextState.author.login }) : e.nextState.publishedPosts; var n = c.default.reduce(a, function(e, t) { return e[t.author.login] = e[t.author.login] || [], e[t.author.login].push(t), e }, {}),
            i = e; return c.default.each(n, function(e, a) { var n = e[0].author;
            n.name = n.name || n.login, n.slug = a, n.website = n.blog, n.status = "", i = s.default.generate({ opts: i, posts: e, author: n, template: t, path: "author/" + a + "/" }) }), i }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.generateAuthors = i; var o = a(58),
        s = n(o),
        r = a(4),
        c = n(r),
        l = a(34),
        u = n(l),
        p = a(43);
    n(p) }, function(e, t, a) { "use strict";

    function n(e) { d = e }

    function i(e) { return e && d.urlSSL ? d.urlSSL : e ? d.url.replace("http://", "https://") : d.url }

    function o() { var e, t, a = Array.prototype.slice.call(arguments),
            n = !1,
            i = d.paths.subdir.replace(/\//g, ""); return "" === a[0] && a.shift(), 0 === a[0].indexOf("//") && (n = !0), t = a.join("/"), t = t.replace(/(^|[^:])\/\/+/g, "$1/"), n && (t = t.replace(/^\//, "//")), i && (e = new RegExp(i + "/" + i + "/"), t = t.replace(e, i + "/")), t }

    function s(e, t, a) { e = e || "/", t = t || !1; var n; return n = t ? i(a) : d.paths.subdir, o(n, e) }

    function r(e) { var t = "",
            a = d.theme.permalinks,
            n = { year: function() { return u(e.published_at).format("YYYY") }, month: function() { return u(e.published_at).format("MM") }, day: function() { return u(e.published_at).format("DD") }, author: function() { return e.author.slug }, slug: function() { return e.slug }, id: function() { return e.id } }; return t += e.page ? "/:slug/" : a, t = t.replace(/(:[a-z]+)/g, function(e) { if (p.has(n, e.substr(1))) return n[e.substr(1)]() }) }

    function c(e, t, a) { var n, r, c, l, u = "/",
            f = ["post", "tag", "author", "image", "nav"],
            v = { home: "/", rss: "/rss/", api: m, sitemap_xsl: "/sitemap.xsl" }; if (p.isBoolean(t) && (a = t, t = null), n = e && e.secure || t && t.secure, p.isObject(e) && e.relativeUrl) u = e.relativeUrl;
        else if (p.isString(e) && p.indexOf(f, e) !== -1)
            if ("post" === e && t.post) u = o(i(), "/", t.post.url), n = t.secure;
            else if ("tag" === e && t.tag) u = o(i(), "/", d.routeKeywords.tag, t.tag.slug, "/"), n = t.tag.secure;
        else if ("author" === e && t.author) u = o(i(), "/", d.routeKeywords.author, t.author.slug, "/"), n = t.author.secure;
        else { if ("image" === e && t.image) return u = t.image, r = new RegExp("^" + d.paths.subdir + "/" + d.paths.imagesRelPath), a = !!r.test(t.image) && a, n = t.image.secure, a && (u = u.replace(new RegExp("^" + d.paths.subdir), ""), c = i(n).replace(/\/$/, ""), u = c + u), u; "nav" === e && t.nav && (u = t.nav.url, n = t.nav.secure || n, c = i(n), l = c.split("//")[1] + d.paths.subdir, u.indexOf(l) > -1 && u.indexOf("." + l) === -1 && 0 !== u.indexOf("mailto:") && (u = u.split(l)[1], "/" !== u.substring(0, 1) && (u = "/" + u), a = !0)) } else p.isString(e) && p.indexOf(p.keys(v), e) !== -1 && (u = v[e] || "/"); return u && (u.indexOf("://") !== -1 || u.match(/^(\/\/|#|[a-zA-Z0-9\-]+:)/)) ? u : s(u, a, n) }

    function l() { var e; return e = d.forceAdminSSL ? (d.urlSSL || d.url).replace(/^.*?:\/\//g, "https://") : d.urlSSL ? d.urlSSL.replace(/^.*?:\/\//g, "https://") : d.url.match(/^https:/) ? d.url : d.url.replace(/^.*?:\/\//g, "//"), e.replace(/\/$/, "") + m + "/" } var u = a(2),
        p = a(4),
        d = "",
        m = "/ghost/api/v0.1";
    e.exports.setConfig = n, e.exports.urlJoin = o, e.exports.urlFor = c, e.exports.urlPathForPost = r, e.exports.apiUrl = l, e.exports.getBaseUrl = i }, function(e, t, a) { "use strict";

    function n(e, t, a) { var n = ""; return n += e.match(/^favicon\.ico$/) ? i.url + "/" : i.activeTheme.url + "/", e.match(/^favicon\.ico$/) || e.match(/^shared/) || e.match(/^asset/) || (n += t ? "ghost/" : "assets/"), e = e.replace(/^\//, ""), a && (e = e.replace(/\.([^\.]*)$/, ".min.$1")), n += e, e.match(/^favicon\.ico$/) || (n = n + "?v=" + i.assetHash), n } var i = a(7);
    e.exports = n }, function(e, t, a) { "use strict";

    function n(e, t) { var a = e.context,
            n = i.theme,
            o = e[a] || n; return "post" === a && o.author && o.author.image ? i.urlFor("image", { image: o.author.image }, t) : null } var i = a(7);
    e.exports = n }, function(e, t, a) { "use strict";

    function n(e, t) { var a = e.context; return e.author ? i.urlFor("author", { author: e.author }, t) : e[a] && e[a].author ? i.urlFor("author", { author: e[a].author }, t) : null } var i = a(7);
    e.exports = n }, function(e, t, a) { "use strict";

    function n(e) { var t; return t = "author" === e.context ? e.author : "tag" === e.context ? e.tag : e, i.urlJoin(i.getBaseUrl(!1), o(t, !1)) } var i = a(7),
        o = a(74);
    e.exports = n }, function(e, t, a) { "use strict";

    function n(e) { var t = e.context,
            a = i.theme,
            n = e[t] || a; if ("home" === t || "author" === t) { if (n.cover) return i.urlFor("image", { image: n.cover }, !0) } else if (n.image) return i.urlFor("image", { image: n.image }, !0); return null } var i = a(7);
    e.exports = n }, function(e, t, a) { "use strict";

    function n(e, t) { var a, n = i.theme; return a = { url: o(e, !0), canonicalUrl: s(e), previousUrl: r(e, !0), nextUrl: c(e, !0), authorUrl: l(e, !0), rssUrl: u(e, !0), metaTitle: p(e, t), metaDescription: d(e, t), coverImage: m(e, !0), authorImage: f(e, !0), keywords: v(e), publishedDate: h(e), modifiedDate: x(e), ogType: g(e), blog: n }, e.post && e.post.html && (a.excerpt = P(e.post.html, { words: 50 })), a.structuredData = b(a), a.schema = _(a, e), a } var i = a(7),
        o = a(74),
        s = a(358),
        r = a(365),
        c = a(363),
        l = a(357),
        u = a(367),
        p = a(122),
        d = a(120),
        m = a(359),
        f = a(356),
        v = a(361),
        h = a(366),
        x = a(362),
        g = a(364),
        b = a(369),
        _ = a(368),
        P = a(121);
    e.exports = n }, function(e, t) { "use strict";

    function a(e) { return e.post && e.post.tags && e.post.tags.length > 0 ? e.post.tags.map(function(e) { return e.name }) : null }
    e.exports = a }, function(e, t) { "use strict";

    function a(e) { var t, a = e.context; return e[a] && (t = e[a].updated_at || null) ? new Date(t).toISOString() : null }
    e.exports = a }, function(e, t, a) { "use strict";

    function n(e, t) { var a, n; return e.relativeUrl && (a = e.relativeUrl.match(o), e.pagination && e.pagination.next) ? (n = "/page/" + e.pagination.next + "/", a ? n = a + n : s.test(e.relativeUrl) && (n = e.relativeUrl.slice(0, -1) + n), i.urlFor({ relativeUrl: n, secure: e.secure }, t)) : null } var i = a(7),
        o = /.+(?=\/page\/\d*\/)/,
        s = /\/(tag)|(author)\//;
    e.exports = n }, function(e, t) { "use strict";

    function a(e) { var t = e.context; return "author" === t ? "profile" : "post" === t ? "article" : "website" }
    e.exports = a }, function(e, t, a) { "use strict";

    function n(e, t) { var a, n; return e.relativeUrl && (a = e.relativeUrl.match(o), e.pagination && e.pagination.prev) ? (n = e.pagination.prev > 1 ? "/page/" + e.pagination.prev + "/" : "/", n = a ? a + n : n, i.urlFor({ relativeUrl: n, secure: e.secure }, t)) : null } var i = a(7),
        o = /.+(?=\/page\/\d*\/)/;
    e.exports = n }, function(e, t) { "use strict";

    function a(e) { var t, a = e.context; return e[a] && (t = e[a].published_at || e[a].created_at || null) ? new Date(t).toISOString() : null }
    e.exports = a }, function(e, t, a) { "use strict";

    function n(e, t) { return i.urlFor("rss", { secure: e.secure }, t) } var i = a(7);
    e.exports = n }, function(e, t, a) { "use strict";

    function n(e) { var t = {}; return m.each(e, function(e, a) { null !== e && "undefined" != typeof e && (t[a] = e) }), t }

    function i(e, t) { var a, i = e.metaDescription ? d(e.metaDescription) : e.excerpt ? d(e.excerpt) : null; return a = { "@context": "http://schema.org", "@type": "Article", publisher: e.blog.title, author: { "@type": "Person", name: d(t.post.author.name), image: e.authorImage, url: e.authorUrl, sameAs: t.post.author.website || null, description: t.post.author.bio ? d(t.post.author.bio) : null }, headline: d(e.metaTitle), url: e.url, datePublished: e.publishedDate, dateModified: e.modifiedDate, image: e.coverImage, keywords: e.keywords && e.keywords.length > 0 ? e.keywords.join(", ") : null, description: i }, a.author = n(a.author), n(a) }

    function o(e) { var t = { "@context": "http://schema.org", "@type": "Website", publisher: d(e.blog.title), url: e.url, image: e.coverImage, description: e.metaDescription ? d(e.metaDescription) : null }; return n(t) }

    function s(e, t) { var a = { "@context": "http://schema.org", "@type": "Series", publisher: d(e.blog.title), url: e.url, image: e.coverImage, name: t.tag.name, description: e.metaDescription ? d(e.metaDescription) : null }; return n(a) }

    function r(e, t) { var a = { "@context": "http://schema.org", "@type": "Person", sameAs: t.author.website || null, publisher: d(e.blog.title), name: d(t.author.name), url: e.authorUrl, image: e.coverImage, description: e.metaDescription ? d(e.metaDescription) : null }; return n(a) }

    function c(e, t) { if (!l.isPrivacyDisabled("useStructuredData")) { var a = t.context; if ("post" === a) return i(e, t); if ("home" === a) return o(e); if ("tag" === a) return s(e, t); if ("author" === a) return r(e, t) } return null } var l = a(7),
        u = a(9),
        p = { handlebars: u },
        d = p.handlebars.Utils.escapeExpression,
        m = a(4);
    e.exports = c }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { var t, a = "summary"; return e.coverImage && (a = "summary_large_image"), t = { "og:site_name": e.blog.title, "og:type": e.ogType, "og:title": e.metaTitle, "og:description": e.metaDescription || e.excerpt, "og:url": e.canonicalUrl, "og:image": e.coverImage, "article:published_time": e.publishedDate, "article:modified_time": e.modifiedDate, "article:tag": e.keywords, "twitter:card": a, "twitter:title": e.metaTitle, "twitter:description": e.metaDescription || e.excerpt, "twitter:url": e.canonicalUrl, "twitter:image:src": e.coverImage }, (0, s.default)(t).reduce(function(e, a) { var n = t[a]; return null !== n && "undefined" != typeof n && (e[a] = n), e }, {}) } var o = a(418),
        s = n(o);
    e.exports = i }, function(e, t) { "use strict";

    function a(e) { return e.hasOwnProperty("html") && e.hasOwnProperty("title") && "post" === e.type }

    function n(e) { return e.hasOwnProperty("name") && e.hasOwnProperty("slug") && e.hasOwnProperty("description") }

    function i(e) { return e.hasOwnProperty("bio") && e.hasOwnProperty("website") && e.hasOwnProperty("status") && e.hasOwnProperty("location") }

    function o(e) { return e.hasOwnProperty("label") && e.hasOwnProperty("url") && e.hasOwnProperty("slug") && e.hasOwnProperty("current") }
    e.exports = { isPost: a, isTag: n, isUser: i, isNav: o } }, function(e, t, a) { "use strict"; var n = a(370);
    e.exports.checks = n }, function(e, t, a) { "use strict";

    function n(e, t) { var a = !1,
            n = !1; return new s.handlebars.SafeString(i(e, a, n)) } var i = a(355),
        o = a(9),
        s = { handlebars: o };
    e.exports = n }, function(e, t, a) { "use strict"; var n, i = a(9),
        o = { handlebars: i },
        s = a(4),
        r = a(7),
        c = a(47);
    n = function(e, t) { if (s.isUndefined(t) && (t = e), t.fn) return o.handlebars.helpers.with.call(this, this.author, t); var a = !s.isString(t.hash.autolink) || "false" !== t.hash.autolink,
            n = ""; return this.author && this.author.name && (n = a ? c.linkTemplate({ url: r.urlFor("author", { author: this.author }), text: s.escape(this.author.name) }) : s.escape(this.author.name)), new o.handlebars.SafeString(n) }, e.exports = n }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } } var i, o = a(7),
        s = n(o),
        r = a(9),
        c = { handlebars: r },
        l = a(4),
        u = a(380);
    i = function(e) { var t, a = [],
            n = e.data.root.context,
            i = this.post,
            o = this.post && this.post.tags ? this.post.tags : this.tags || [],
            r = this.post && this.post.page ? this.post.page : this.page || !1,
            p = s.default.activeTheme.name; return i && a.push("post-template"), l.includes(n, "home") ? a.push("home-template") : l.includes(n, "page") && r ? (a.push("page-template"), a.push("page")) : l.includes(n, "tag") && this.tag ? (a.push("tag-template"), a.push("tag-" + this.tag.slug)) : l.includes(n, "author") && this.author ? (a.push("author-template"), a.push("author-" + this.author.slug)) : l.includes(n, "private") && a.push("private-template"), o && (a = a.concat(o.map(function(e) { return "tag-" + e.slug }))), l.includes(n, "paged") && (a.push("paged"), a.push("archive-template")), i && r && (t = u.single(p, i).split("-"), "page" === t[0] && t.length > 1 && (a.push(t.join("-")), t.splice(1, 0, "template"), a.push(t.join("-")))), a = l.reduce(a, function(e, t) { return e + " " + t }, ""), new c.handlebars.SafeString(a.trim()) }, e.exports = i }, function(e, t, a) { "use strict"; var n, i = a(9),
        o = { handlebars: i },
        s = a(4),
        r = a(172),
        c = a(400);
    n = function(e) { var t = (e || {}).hash || {}; return t = s.pick(t, ["words", "characters"]), s.keys(t).map(function(e) { t[e] = parseInt(t[e], 10) }), t.hasOwnProperty("words") || t.hasOwnProperty("characters") ? t.hasOwnProperty("words") && 0 === t.words ? new o.handlebars.SafeString(c(this.html)) : new o.handlebars.SafeString(r(this.html, t)) : new o.handlebars.SafeString(this.html) }, e.exports = n }, function(e, t, a) { "use strict"; var n, i = a(2);
    n = function e(t, a) {!a && t.hasOwnProperty("hash") && (a = t, t = void 0, this.published_at && (t = this.published_at)), t = null === t ? void 0 : t; var e, n = a.hash.format || "MMM Do, YYYY",
            o = a.hash.timeago; return e = o ? i(t).fromNow() : i(t).format(n) }, e.exports = n }, function(e, t, a) { "use strict"; var n, i = a(9),
        o = { handlebars: i };
    n = function(e, t) { var a = e || t; return new o.handlebars.SafeString(encodeURIComponent(a)) }, e.exports = n }, function(e, t, a) { "use strict";

    function n(e) { var t = (e || {}).hash || {}; return t = s.pick(t, ["words", "characters"]), s.keys(t).map(function(e) { t[e] = parseInt(t[e], 10) }), new o.handlebars.SafeString(r(String(this.html), t)) } var i = a(9),
        o = { handlebars: i },
        s = a(4),
        r = a(121);
    e.exports = n }, function(e, t, a) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i, o = a(59),
        s = n(o),
        r = a(9),
        c = { handlebars: r },
        l = a(4),
        u = c.handlebars.Utils;
    i = function(e, t) {
        function a(t, a, n) { i && (i.key = t, i.index = a, i.number = a + 1, i.first = a === v - 1, i.last = !!n, i.even = a % 2 === 1, i.odd = !i.even, i.rowStart = a % d === 0, i.rowEnd = a % d === d - 1, o && (i.contextPath = o + t)), x += r(e[t], { data: i, blockParams: u.blockParams([e[t], t], [o + t, null]) }) }

        function n(e) { var t = 1,
                n = 1;
            l.each(e, function(e, i) { return n < v ? void(n += 1) : (n <= h && a(i, n - 1, n === h), t += 1, void(n += 1)) }) }
        t || console.error("Helpers foreach needs an iterator"); var i, o, r = t.fn,
            p = t.inverse,
            d = t.hash.columns,
            m = l.size(e),
            f = parseInt(t.hash.limit, 10) || m,
            v = parseInt(t.hash.from, 10) || 1,
            h = parseInt(t.hash.to, 10) || v - 1 + f,
            x = ""; return t.data && t.ids && (o = u.appendContextPath(t.data.contextPath, t.ids[0]) + "."), u.isFunction(e) && (e = e.call(this)), t.data && (i = c.handlebars.createFrame(t.data)), e && "object" === ("undefined" == typeof e ? "undefined" : (0, s.default)(e)) && n(e), 0 === m && (x = p(this)), x }, e.exports = i
}, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { return l.default.activeTheme.url }

    function o(e) { var t = ["post"],
            a = "post"; return e.page && (t.unshift("page"), a = "page"), t.unshift(a + "-" + e.slug), t }

    function s(e, t) { var a = _.find(t, function(t) { return e.hasOwnProperty(t + ".hbs") }); return a || (a = t[t.length - 1]), a }

    function r(e, t) { return s(i(e), o(t)) } var c = a(7),
        l = n(c);
    e.exports = { single: r } }, function(e, t, a) { "use strict"; var n, i = a(9),
        o = a(4),
        s = a(47);
    n = function(e) { var t = [];
        t.push(s.scriptTemplate({ source: "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js", version: "" })), t.push(s.scriptTemplate({ source: "//cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment-with-locales.min.js", version: "" })), t.push(s.scriptTemplate({ source: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/highlight.min.js", version: "" })), t.push("\n      <script type=\"text/javascript\">\n        jQuery( document ).ready(function() {\n          // change date with ago\n          jQuery('ago.ago').each(function(){\n            var element = jQuery(this).parent();\n            element.html( moment(element.text()).fromNow());\n          });\n        });\n\n        hljs.initHighlightingOnLoad();\n      </script>\n      "); var a = o.reduce(t, function(e, t) { return e + " " + t }, ""); return new i.SafeString(a.trim()) }, e.exports = n }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e, t, a) { return a = a || "twitter" === e.substring(0, 7) ? "name" : "property", "<meta " + a + '="' + e + '" content="' + t + '" />' }

    function o(e) { var t = []; return f.each(e.structuredData, function(a, n) { "article:tag" === n ? (f.each(e.keywords, function(e) { "" !== e && (e = d(e), t.push(i(n, d(e)))) }), t.push("")) : null !== a && void 0 !== a && t.push(i(n, d(a))) }), t }

    function s(e) { if (console.warn("Check ghost_head options", e, this.statusCode, this.context), !(this.statusCode >= 400)) { var t = l(this, e.data.root),
                a = [],
                n = this.context ? Array.isArray(this.context) ? this.context[0] : this.context : null,
                i = !h.isPrivacyDisabled("useStructuredData");
            this.safeVersion; return n && (a.push('<link rel="canonical" href="' + d(t.canonicalUrl) + '" />'), a.push('<meta name="referrer" content="origin" />'), t.previousUrl && a.push('<link rel="prev" href="' + d(t.previousUrl) + '" />'), t.nextUrl && a.push('<link rel="next" href="' + d(t.nextUrl) + '" />'), "paged" !== n && "page" !== n && i && (a.push(""), a.push.apply(a, o(t)), a.push(""), a.push('<script type="application/ld+json">\n' + (0, c.default)(t.schema, null, "    ") + "\n    </script>\n"))), a.push('<meta name="generator" content="HubPress" />'), a.push('<link rel="alternate" type="application/rss+xml" title="' + d(t.blog.title) + '" href="' + d(t.rssUrl) + '" />'), a.push(v.stylesheetTemplate({ source: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atom-one-dark.min.css" })), a.push("\n        <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML'></script>\n        "), new m(a.join("\n    ").trim()) } } var r = a(75),
        c = n(r),
        l = a(360),
        u = a(9),
        p = { handlebars: u },
        d = p.handlebars.Utils.escapeExpression,
        m = p.handlebars.SafeString,
        f = a(4),
        v = a(47),
        h = a(7);
    e.exports = s }, function(e, t, a) { "use strict"; var n, i = a(4);
    n = function(e) {
        function t(e, t) { return e.split(",").map(function(e) { return e.trim() }).reduce(function(e, a) { return e || i.findIndex(t, function(e) { return e = e.replace(/[\-\/\\\^$*+?.()|\[\]{}]/g, "\\$&"), e = new RegExp("^" + e + "$", "i"), e.test(a) }) !== -1 }, !1) }

        function a(e, t) { var a = e.split(",").map(function(e) { return e.trim().toLocaleLowerCase() }); return i.includes(a, t.toLocaleLowerCase()) }
        e = e || {}, e.hash = e.hash || {}; var n, o, s = i.map(this.tags, "name"),
            r = this.author ? this.author.name : null,
            c = e.hash.tag || !1,
            l = e.hash.author || !1; return c || l ? (n = c && t(c, s) || !1, o = l && a(l, r) || !1, n || o ? e.fn(this) : e.inverse(this)) : void console.warn("Helpers has has invalid attribute") }, e.exports = n }, function(e, t, a) { "use strict"; var n, i = a(7);
    n = function(e) { var t = e && e.hash.absolute; if (this.image) return i.urlFor("image", { image: this.image }, t) }, e.exports = n }, function(e, t, a) { "use strict";

    function n(e, t) { s.handlebars.registerHelper(e, t) } var i, o = a(9),
        s = { handlebars: o },
        r = a(47),
        c = {};
    r.isProduction || (s.handlebars.logger.level = 0), c.asset = a(372), c.author = a(373), c.body_class = a(374), c.content = a(375), c.date = a(376), c.encode = a(377), c.excerpt = a(378), c.foreach = a(379), c.ghost_foot = a(381), c.ghost_head = a(382), c.image = a(384), c.is = a(386), c.has = a(383), c.meta_description = a(387), c.meta_title = a(388), c.navigation = a(389), c.pagination = a(390), c.plural = a(391), c.post_class = a(392), c.tags = a(393), c.title = a(394), c.url = a(395), c.page_url = a(123), c.pageUrl = a(123).deprecated, c.helperMissing = function(e) { 2 !== arguments.length && console.error("warnings.helpers.index.missingHelper", e) }, i = function(e) { n("asset", c.asset), n("author", c.author), n("body_class", c.body_class), n("content", c.content), n("date", c.date), n("encode", c.encode), n("excerpt", c.excerpt), n("foreach", c.foreach), n("has", c.has), n("is", c.is), n("image", c.image), n("input_password", c.input_password), n("meta_description", c.meta_description), n("meta_title", c.meta_title), n("navigation", c.navigation), n("page_url", c.page_url), n("pageUrl", c.pageUrl), n("pagination", c.pagination), n("plural", c.plural), n("post_class", c.post_class), n("tags", c.tags), n("title", c.title), n("url", c.url), n("ghost_foot", c.ghost_foot), n("ghost_head", c.ghost_head), n("next_post", c.next_post), n("prev_post", c.prev_post) }, e.exports = c, e.exports.loadCoreHelpers = i, e.exports.registerThemeHelper = n }, function(e, t, a) { "use strict"; var n, i = a(4);
    n = function(e, t) {
        function a(e) { return e.split(",").map(function(e) { return e.trim() }).reduce(function(e, t) { return e || i.includes(n, t) }, !1) }
        t = t || {}; var n = t.data.root.context; return i.isString(e) || console.warn("Helpers is has an invalid attribute"), a(e) ? t.fn(this) : t.inverse(this) }, e.exports = n }, function(e, t, a) { "use strict";

    function n(e) { return e = e || { data: {} }, i(this, e.data.root) || "" } var i = a(120);
    e.exports = n }, function(e, t, a) { "use strict";

    function n(e) { return e = e || { data: {} }, i(this, e.data.root) } var i = a(122);
    e.exports = n }, function(e, t, a) { "use strict";

    function n(e) { throw console.log(e), new Error(e) } var i, o = a(4),
        s = a(9),
        r = { handlebars: s },
        c = a(124);
    i = function(e) {
        function t(e) { return e.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-") }

        function a(e, t) { var a = e.replace(/\/+$/, ""),
                n = t.replace(/\/+$/, ""); return a === n } var i, s, l = e.data.blog.navigation,
            u = e.data.root.relativeUrl,
            p = this; return !o.isObject(l) || o.isFunction(l) ? n("warnings.helpers.navigation.invalidData") : l.filter(function(e) { return o.isUndefined(e.label) || o.isUndefined(e.url) }).length > 0 ? n("warnings.helpers.navigation.valuesMustBeDefined") : l.filter(function(e) { return !o.isNull(e.label) && !o.isString(e.label) || !o.isNull(e.url) && !o.isString(e.url) }).length > 0 ? n("warnings.helpers.navigation.valuesMustBeString") : 0 === l.length ? new r.handlebars.SafeString("") : (i = l.map(function(e) { var n = {}; return n.current = a(e.url, u), n.label = e.label, n.slug = t(e.label), n.url = r.handlebars.Utils.escapeExpression(e.url), n.secure = p.secure, n }), s = o.merge({}, { navigation: i }), c.execute("navigation", s, e)) }, e.exports = i }, function(e, t, a) { "use strict";

    function n(e) { throw console.log(e), new Error(e) } var i, o = a(4),
        s = a(124);
    i = function(e) { if (!o.isObject(this.pagination) || o.isFunction(this.pagination)) return n("warnings.helpers.pagination.invalidData"); if (o.isUndefined(this.pagination.page) || o.isUndefined(this.pagination.pages) || o.isUndefined(this.pagination.total) || o.isUndefined(this.pagination.limit)) return n("warnings.helpers.pagination.valuesMustBeDefined"); if (!o.isNull(this.pagination.next) && !o.isNumber(this.pagination.next) || !o.isNull(this.pagination.prev) && !o.isNumber(this.pagination.prev)) return n("warnings.helpers.pagination.nextPrevValuesMustBeNumeric"); if (!(o.isNumber(this.pagination.page) && o.isNumber(this.pagination.pages) && o.isNumber(this.pagination.total) && o.isNumber(this.pagination.limit))) return n("warnings.helpers.pagination.valuesMustBeNumeric"); var t = o.merge({}, this.pagination); return void 0 !== this.tag && (t.tagSlug = this.tag.slug), void 0 !== this.author && (t.authorSlug = this.author.slug), s.execute("pagination", t, e) }, e.exports = i }, function(e, t, a) { "use strict";

    function n(e) { throw console.log(e), new Error(e) } var i, o = a(9),
        s = { handlebars: o },
        r = a(4);
    i = function(e, t) { return r.isUndefined(t.hash) || r.isUndefined(t.hash.empty) || r.isUndefined(t.hash.singular) || r.isUndefined(t.hash.plural) ? n("warnings.helpers.plural.valuesMustBeDefined") : 0 === e ? new s.handlebars.SafeString(t.hash.empty.replace("%", e)) : 1 === e ? new s.handlebars.SafeString(t.hash.singular.replace("%", e)) : e >= 2 ? new s.handlebars.SafeString(t.hash.plural.replace("%", e)) : void 0 }, e.exports = i }, function(e, t, a) { "use strict"; var n, i = a(9),
        o = { handlebars: i },
        s = a(4);
    n = function(e) { var t = ["post"],
            a = this.post && this.post.tags ? this.post.tags : this.tags || [],
            n = this.post && this.post.featured ? this.post.featured : this.featured || !1,
            i = this.post && this.post.page ? this.post.page : this.page || !1; return a && (t = t.concat(a.map(function(e) { return "tag-" + e.slug }))), n && t.push("featured"), i && t.push("page"), t = s.reduce(t, function(e, t) { return e + " " + t }, ""), new o.handlebars.SafeString(t.trim()) }, e.exports = n }, function(e, t, a) { "use strict"; var n, i = a(9),
        o = { handlebars: i },
        s = a(4),
        r = a(7),
        c = a(47);
    n = function(e) {
        function t(e) { return a ? s.map(e, function(e) { return c.linkTemplate({ url: r.urlFor("tag", { tag: e }), text: s.escape(e.name) }) }) : s(e).map("name").each(s.escape) }
        e = e || {}, e.hash = e.hash || {}; var a = !(s.isString(e.hash.autolink) && "false" === e.hash.autolink),
            n = s.isString(e.hash.separator) ? e.hash.separator : ", ",
            i = s.isString(e.hash.prefix) ? e.hash.prefix : "",
            l = s.isString(e.hash.suffix) ? e.hash.suffix : "",
            u = e.hash.limit ? parseInt(e.hash.limit, 10) : void 0,
            p = e.hash.from ? parseInt(e.hash.from, 10) : 1,
            d = e.hash.to ? parseInt(e.hash.to, 10) : void 0,
            m = ""; return this.tags && this.tags.length && (m = t(this.tags), p -= 1, d = d || u + p || this.tags.length, m = i + m.slice(p, d).join(n) + l), new o.handlebars.SafeString(m) }, e.exports = n }, function(e, t, a) { "use strict"; var n, i = a(9),
        o = { handlebars: i };
    n = function() { return new o.handlebars.SafeString(o.handlebars.Utils.escapeExpression(this.title || "")) }, e.exports = n }, function(e, t, a) { "use strict";

    function n(e) { var t = e && e.hash.absolute; return i(this, t) } var i = a(74);
    e.exports = n }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e, t) { var a = l.default.defer(),
            n = [],
            i = t.urls.hubpress; return p.default.get(i + "/themes/" + e + "/theme.json?dt=" + Date.now()).end(function(t, o) { if (t) return void a.reject(t); var s = o.body,
                r = s.version,
                c = m.default.toPairs(s.files),
                u = !1,
                d = !1,
                f = !1; if (c.forEach(function(t) { var a = l.default.defer();
                    n.push(a.promise), u = u || "pagination" === t[0], d = d || "nav" === t[0], f = f || "navigation" === t[0], p.default.get(i + "/themes/" + e + "/" + t[1] + "?v=" + r).end(function(e, n) { return e ? void a.reject(e) : void a.resolve({ name: t[0], path: t[1], content: n.text }) }) }), !u) { var v = l.default.defer();
                n.push(v.promise), p.default.get(i + "/hubpress/scripts/helpers/tpl/pagination.hbs").end(function(e, t) { return e ? void v.reject(e) : void v.resolve({ name: "pagination", path: "partials/pagination", content: t.text }) }) } if (!d) { var h = l.default.defer();
                n.push(h.promise), p.default.get(i + "/hubpress/scripts/helpers/tpl/nav.hbs").end(function(e, t) { return e ? void h.reject(e) : void h.resolve({ name: "nav", path: "partials/nav", content: t.text }) }) } if (!f) { var x = l.default.defer();
                n.push(x.promise), p.default.get(i + "/hubpress/scripts/helpers/tpl/navigation.hbs").end(function(e, t) { return e ? void x.reject(e) : void x.resolve({ name: "navigation", path: "partials/navigation", content: t.text }) }) }
            l.default.all(n).then(function(e) { a.resolve({ version: r, files: e }) }).catch(function(e) { console.log(e), a.reject(e) }) }), a.promise }

    function o(e) { e.on("hubpress:request-theme", function(e) { console.info("templatePlugin Plugin - hubpress:request-theme"), console.log("hubpress:request-theme", e); var t = e.rootState.application.config.theme.name.toLowerCase(),
                a = e.rootState.application.config; return i(t, a).then(function(n) { var i = { name: t, files: n.files, version: n.version };
                _.default.registerTheme(a, i), _.default.registerFiles(i.files); var o = (0, r.default)({}, i); return e.nextState = (0, r.default)({}, e.nextState, { theme: o }), e }) }), e.on("requestGenerateIndex", function(e) { console.info("Template Plugin - requestGenerateIndex"), console.log("requestGenerateIndex", e); var t = (0, f.generateIndex)(e); return console.log("requestGenerateIndex return", t), t }), e.on("requestGeneratePost", function(e) { console.info("Template Plugin - requestGeneratePost"), console.log("requestGeneratePost", e); var t = (0, v.generatePost)(e, e.nextState.post); return console.log("requestGeneratePost return", t), t }), e.on("requestGeneratePosts", function(e) { console.info("Template Plugin - requestGeneratePosts"), console.log("requestGeneratePosts", e); var t = (0, h.generatePosts)(e); return console.log("requestGeneratePosts return", t), t }), e.on("requestGenerateTags", function(e) { console.info("Template Plugin - requestGenerateTags"), console.log("requestGenerateTags", e); var t = (0, x.generateTags)(e); return console.log("requestGenerateTags return", t), t }), e.on("requestGenerateAuthors", function(e) { console.info("Template Plugin - requestGenerateAuthors"), console.log("requestGenerateAuthors", e); var t = (0, g.generateAuthors)(e); return console.log("requestGenerateAuthors return", t), t }) }
    Object.defineProperty(t, "__esModule", { value: !0 }); var s = a(19),
        r = n(s);
    t.templatePlugin = o; var c = a(107),
        l = n(c),
        u = a(781),
        p = n(u),
        d = a(4),
        m = n(d),
        f = a(397),
        v = a(125),
        h = a(398),
        x = a(399),
        g = a(353),
        b = a(34),
        _ = n(b) }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { return s.default.generate({ opts: e, posts: e.nextState.publishedPosts, template: "index", path: "" }) }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.generateIndex = i; var o = a(58),
        s = n(o) }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { console.info("PostsGenerator - generate"), console.log("PostsGenerator - generate", e); var t = e; return e.nextState.publishedPosts.forEach(function(e) { t = (0, r.generatePost)(t, e) }), t }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.generatePosts = i; var o = a(58),
        s = (n(o), a(34)),
        r = (n(s), a(125)) }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e) { console.info("TagsGenerator - generate"), console.log("TagsGenerator - generate", e); var t = "tag",
            a = void 0; if (!u.default.isTemplateAvailable(t)) return e; if (e.nextState.post && !e.nextState.post.tags && !e.nextState.tags) return e;
        a = e.nextState.tags ? e.nextState.publishedPosts.filter(function(t) { var a = e.nextState.tags.map(function(e) { return e.trim() }),
                n = (t.tags || []).map(function(e) { return e.trim() }); return c.default.intersection(a, n).length }) : e.nextState.publishedPosts; var n = c.default.reduce(a, function(t, a) { if (!a.tags) return t; var n = c.default.reduce(a.tags, function(t, a) { var n = (0, d.default)(a); return e.nextState.post && e.nextState.post.tags && e.nextState.post.tags.indexOf(a) === -1 || t.push(n), t }, []); return c.default.uniq(n).forEach(function(e) { t[e] = t[e] || [], t[e].push(a) }), t }, {}),
            i = e; return c.default.each(n, function(e, a) { var n = { name: a, slug: (0, d.default)(a), description: null };
            i = s.default.generate({ opts: i, posts: e, tag: n, template: t, path: "tag/" + a + "/" }) }), i }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.generateTags = i; var o = a(58),
        s = n(o),
        r = a(4),
        c = n(r),
        l = a(34),
        u = n(l),
        p = a(43),
        d = n(p) }, function(e, t) { "use strict";

    function a(e) { var t = (e || "").match(/<\/*([a-z0-9\:\-\_]+)/i); return t ? t[1] : null }

    function n(e) { var t = a(e) ? "</" + a(e) + ">" : ""; return t }

    function i(e) { for (o = [], s = "", r = "", c = "", l = 0, u = 0; u < e.length; u += 1) { switch (l !== p.unitialized && (r += e[u]), e[u]) {
                case "<":
                    l === p.unitialized && e[u + 1].match(/[a-z0-9\-\_\/\!]/) && (l = p.tag_commenced, r += e[u]); break;
                case "!":
                    l === p.tag_commenced && "<" === e[u - 1] && (l = p.comment); break;
                case '"':
                    if (l === p.tag_string) l = p.tag_commenced;
                    else { if (l === p.tag_string_single) break;
                        l !== p.unitialized && (l = p.tag_string) } break;
                case "'":
                    if (l === p.tag_string_single) l = p.tag_commenced;
                    else { if (l === p.tag_string) break;
                        l !== p.unitialized && (l = p.tag_string_single) } break;
                case ">":
                    if (l === p.tag_commenced) { l = p.unitialized, c += r, s = a(r), r.match(/<\s*\//) && a(o[o.length - 1]) === s ? o.pop() : d.indexOf(s) < 0 && !r.match(/\/\s*>$/) && o.push(r), r = ""; continue } if (l === p.comment && "--" === e.substring(u - 2, u)) { l = p.unitialized, c += r, r = ""; continue } break;
                case "-":
            } if (!l) break } for (c += r; o.length;) c += n(o.pop()); return c } var o, s, r, c, l, u, p = { unitialized: 0, tag_commenced: 1, tag_string: -1, tag_string_single: -2, comment: -3 },
        d = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];
    e.exports = i }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var i = a(111),
        o = n(i),
        s = a(313),
        r = n(s),
        c = a(4),
        l = n(c),
        u = a(402);
    o.default.use(r.default); var p = { stores: {} },
        d = {},
        m = {};
    t.default = { initStores: function() { var e = { rootState: l.default.cloneDeep(p), currentState: l.default.cloneDeep(p) }; return (0, u.initializeStores)(e).then(function(e) { l.default.merge(p, e.nextState); var t = { state: p, actions: d, mutations: m, modules: e.nextState.stores },
                    a = new r.default.Store(t); return a }) } } }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }

    function i(e, t) { return s.default.fire("application:stores", e, t) }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.initializeStores = i; var o = a(52),
        s = n(o) }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var i = a(59),
        o = n(i),
        s = a(1),
        r = a(790);
    a(640), a(637), a(458), t.default = { data: function() { return { content: "" } }, props: { hint: Boolean, code: String, value: String, unseenLines: Array, marker: Function, options: { type: Object, default: function() { return { styleActiveLine: !0, lineNumbers: !0, mode: "text/javascript", lineWrapping: !0 } } } }, created: function() { this.options = this.options || {}; var e = this.options.mode || "text/javascript",
                t = this.options.theme,
                n = this.hint || !1,
                i = ["css", "html", "javascript", "sql", "xml"]; if ("string" == typeof e) { var s = r.findModeByMIME(e);
                e = s ? s.mode : s } else if ("object" == ("undefined" == typeof e ? "undefined" : (0, o.default)(e))) { var c = r.findModeByName(e.name); if (!c) return console.error("CodeMirror language mode: " + e.name + " configuration error (CodeMirror语言模式配置错误，或者不支持此语言) See http://codemirror.net/mode/ for more details.");
                e = c.mode } if (n) { a(142), a(639); var l = i.indexOf(e) == -1;
                a(466)("./" + (l ? "anyword" : e) + "-hint.js") }
            this.options.styleActiveLine && a(474), this.options.autoCloseBrackets && a(459), this.options.autoCloseTags && a(460), this.options.styleSelectedText && (a(475), a(26)), this.options.highlightSelectionMatches && (a(144), a(145), a(26), a(472)), this.options.keyMap && ["emacs", "sublime", "vim"].indexOf(this.options.keyMap) > -1 && (a(61), a(81), a(457), a(80), a(636), a(26), a(473), a(476)("./" + this.options.keyMap + ".js")), this.options.foldGutter && (a(638), a(461), a(462), a(140), a(463), a(464), a(465), a(141)), e = e || "javascript", "null" !== e && a(480)("./" + e + "/" + e + ".js"), t && "solarized light" == t && (t = "solarized"), t && "default" != t && a(584)("./" + t + ".css") }, ready: function() { var e = this;
            this.editor = s.fromTextArea(this.$el, this.options), this.editor.setValue(this.code || this.value || this.content), this.editor.on("change", function(t) { e.content = t.getValue(), e.code = t.getValue() }) }, mounted: function() { var e = this;
            this.editor = s.fromTextArea(this.$el, this.options), this.editor.setValue(this.code || this.value || this.content), this.editor.on("change", function(t) { e.content = t.getValue(), e.$emit && (e.$emit("changed", e.content), e.$emit("input", e.content)) }), this.unseenLineMarkers() }, watch: { code: function(e, t) { var a = this.editor.getValue(); if (e !== a) { var n = this.editor.getScrollInfo();
                    this.editor.setValue(e), this.content = e, this.editor.scrollTo(n.left, n.top) }
                this.unseenLineMarkers() }, value: function(e, t) { var a = this.editor.getValue(); if (e !== a) { var n = this.editor.getScrollInfo();
                    this.editor.setValue(e), this.content = e, this.editor.scrollTo(n.left, n.top) }
                this.unseenLineMarkers() } }, methods: { unseenLineMarkers: function() { var e = this;
                void 0 !== e.unseenLines && void 0 !== e.marker && e.unseenLines.forEach(function(t) { var a = e.editor.lineInfo(t);
                    e.editor.setGutterMarker(t, "breakpoints", a.gutterMarkers ? null : e.marker()) }) } } } }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var i = a(793),
        o = n(i),
        s = a(792),
        r = n(s),
        c = a(794),
        l = n(c);
    t.default = { name: "app", components: { Navigation: o.default, MenuButton: r.default, MainContainer: l.default }, mounted: function() { var e = this;
            this.$store.watch(function(e) { return e.application.notification.isVisible }, function(t, a) { if (t) { $(".message .close").removeClass("hidden");
                    setTimeout(function() { e.$store.state.application.notification.isVisible && e.closeNotification() }, 4e3);
                    $(".message .close").on("click", function() { return e.closeNotification() }) } else $(".message .close").off("click") }) }, methods: { closeNotification: function() { this.$store.dispatch("application:close-notification") } }, computed: { isAuthenticatedAndReady: function() { return this.$store.state.application.isInitialized && this.$store.state.authentication.isAuthenticated && "/login" !== this.$route.path }, isInitializing: function() { return !this.$store.state.application.isInitialized }, isInitialized: function() { return this.$store.state.application.isInitialized }, isLoading: function() { return this.$store.state.application.isLoading }, notification: function() { return this.$store.state.application.notification } } } }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var i = a(53),
        o = n(i);
    t.default = { name: "menuButton", methods: { toggleNavigation: function() {
                (0, o.default)(".ui.sidebar").sidebar("toggle") } } } }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var i = a(53),
        o = n(i);
    t.default = { name: "navigation", mounted: function() {
            (0, o.default)("#app .ui.sidebar").sidebar({ context: (0, o.default)("#app") }).sidebar("setting", "transition", "overlay") }, methods: { toggleMenu: function() {
                (0, o.default)(".ui.sidebar").sidebar("toggle") } }, computed: { navigations: function() { return this.$store.getters.navigations }, currentUser: function() { return this.$store.state.authentication.userInformations }, hubpressVersion: function() { return "0.8.1" }, upgrade: function() { return "https://github.com/" + this.$store.state.application.config.meta.username + "/" + this.$store.state.application.config.meta.repositoryName + "/compare/" + this.$store.state.application.config.meta.branch + "...HubPress:" + this.$store.state.application.config.meta.branch } } } }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var i = a(53),
        o = n(i),
        s = a(118);
    t.default = { name: "application-settings", beforeCreate: function() { var e = this;
            this.$store.state.application.settingsTabs.forEach(function(t) { e.$options.components[t.id] = t.component }) }, mounted: function() {
            (0, o.default)(".settings-content .menu .item").tab() }, methods: { submit: function() { var e = new FormData(document.getElementById("mainForm"));
                this.$store.dispatch(s.constants.APPLICATION_PREPARE_CONFIG, e) } }, computed: { tabs: function() { return this.$store.state.application.settingsTabs.sort(function(e) { return e.label }) }, config: function() { return this.$store.state.application.config || { meta: {} } } } } }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var i = a(130),
        o = n(i),
        s = a(313),
        r = a(119);
    t.default = { name: "login", beforeCreate: function() { this.$options.components["initialisation-component"] = this.$store.state.application.config.initialisationConfigComponent }, computed: (0, o.default)({}, (0, s.mapState)({ email: function(e) { return e.authentication.credentials.email }, password: function(e) { return e.authentication.credentials.password }, twoFactorCode: function(e) { return e.authentication.credentials.twoFactorCode }, isTwoFactorCodeRequired: function(e) { return e.authentication.isTwoFactorCodeRequired }, requireInitilisation: function(e) { return e.application.requireInitilisation } })), methods: { updateEmail: function(e) { this.$store.commit(r.LOGIN_UPDATE_EMAIL, e.target.value) }, updatePassword: function(e) { this.$store.commit(r.LOGIN_UPDATE_PASSWORD, e.target.value) }, updateTwoFactorCode: function(e) { this.$store.commit(r.LOGIN_UPDATE_TFC, e.target.value) }, login: function() { this.$store.dispatch(r.LOGIN_SUBMIT, this.$router) } } } }, function(e, t) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "dashboard", beforeCreate: function() { console.log("dashboard beforeCreate") }, created: function() { console.log("dashboard created") } } }, function(e, t) { "use strict" }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var i = a(340),
        o = (n(i), a(341)),
        s = (n(o), a(801)),
        r = n(s),
        c = a(73);
    t.default = { name: "posts", data: function() { return { content: void 0, timeout: void 0, isDark: !0, isPreviewVisible: !1, editorOption: { tabSize: 4, mode: "asciidoc", theme: "zenburn", lineNumbers: !1, line: !0, lineWrapping: !0, fixedGutter: !0, keyMap: "sublime", extraKeys: { Ctrl: "autocomplete" }, foldGutter: !0, gutters: ["CodeMirror-linenumbers"], styleSelectedText: !0, highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: !0 } } } }, methods: { contentChange: function(e) { var t = this; if (this.post.content !== e) { var a = this.$store.state.application.config.meta.delay ? this.$store.state.application.config.meta.delay : 200;
                    this.timeout && window.clearTimeout(this.timeout), this.timeout = window.setTimeout(function() { t.$store.dispatch(c.POST_CHANGE_CONTENT, { _id: t.post._id, content: e }) }, a ? a : 200) } }, showAsciidocHelp: function() { $("#asciidoc-help").modal("show") }, switchLight: function() { this.isDark = !this.isDark, this.$refs.codeEditor.editor.setOption("theme", this.isDark ? "zenburn" : "base16-light") }, switchPreview: function() { this.isPreviewVisible = !this.isPreviewVisible }, remoteSave: function() { this.post.published ? this.$store.dispatch(c.POST_PUBLISH, this.post._id) : this.$store.dispatch(c.POST_REMOTE_SAVE, this.post._id) }, publish: function() { this.post.published ? this.$store.dispatch(c.POST_UNPUBLISH, this.post._id) : this.$store.dispatch(c.POST_PUBLISH, this.post._id) }, unpublish: function() { this.$store.dispatch(c.POST_UNPUBLISH, this.post._id) } }, beforeMount: function() { this.$store.dispatch(c.POST_GET, this.$route.params.id) }, mounted: function() { $(".ui.dropdown.item.themes").dropdown(), $("#asciidoc-help").modal({ closable: !0 }) }, beforeUpdate: function() { this.content || (this.content = this.post.content) }, computed: { id: function() { return this.$route.params.id }, post: function() { return this.$store.state.hubpress.post }, previewLabel: function() { return this.isPreviewVisible ? "Hide preview" : "Show preview" }, lightLabel: function() { return this.isDark ? "Light mode" : "Dark mode" }, publishLabel: function() { return this.$store.state.hubpress.post.published ? "Unpublish post" : "Publish post" }, isRemoteActionVisible: function() { return !!this.$store.state.hubpress.post.title } }, beforeCreate: function() {}, created: function() {}, components: { Preview: r.default } } }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var i = a(2),
        o = n(i),
        s = a(290),
        r = n(s),
        c = a(73);
    t.default = { name: "posts", data: function() { return { postToDelete: {}, filterValue: "" } }, beforeCreate: function() {}, beforeMount: function() { this.$store.dispatch(c.POSTS_GET) }, beforeDestroy: function() { $(".ui.basic.modal").remove() }, mounted: function() { var e = this;
            $(".ui.basic.modal").modal({ closable: !1, onDeny: function() {}, onApprove: function() { e.$store.dispatch(c.POST_DELETE, e.postToDelete._id) } }) }, methods: { status: function(e) { return !!e.published && "Published" || "Draft" }, publishedAt: function(e) { return !!e.published && (0, o.default)(e.published_at).fromNow() || "" }, postCoverUrl: function(e) { var t = e.image || "http://hubpress.io/img/logo.png"; return t = t.startsWith("http") ? t : e.attributes.$$smap.imagesdir + "/" + e.image }, getPostStatusColor: function(e) { return e.original ? e.original.content !== e.content ? "orange" : "green" : "red" }, displayConfirmMessage: function(e) { this.postToDelete = e, $(".ui.basic.modal").modal("show") }, navigateToPost: function(e) { this.$router.push({ name: "post", params: { id: e._id } }) }, newPost: function() { this.$router.push({ name: "post", params: { id: r.default.v4() } }) }, getPostTags: function(e) { return e.tags || [] }, getPostAuthor: function(e) { return e.author || this.$store.state.authentication.userInformations }, synchronize: function() { this.$store.dispatch(c.POSTS_SYNCHRONIZE) } }, computed: { posts: function() { var e = this.filterValue.trim(); return "" === e ? this.$store.state.hubpress.posts : this.$store.state.hubpress.posts.filter(function(t) { return t.title.toLowerCase().indexOf(e.toLowerCase()) >= 0 || t.tags && t.tags.filter(function(t) { return t.toLowerCase().indexOf(e.toLowerCase()) >= 0 }).length }) } } } }, function(module, exports) { "use strict";

    function applyScript(hasChanged) { if (hasChanged) { for (var element = document.getElementById("html-rendering"), scripts = element.getElementsByTagName("script"), addedScripts = [], i = 0; i < scripts.length; i++)
                if ("" != scripts[i].src && addedScripts.indexOf(scripts[i].src) === -1) { var tag = document.createElement("script");
                    tag.src = scripts[i].src, addedScripts.push(tag.src), document.getElementsByTagName("head")[0].appendChild(tag) } else eval(scripts[i].innerHTML);
            if (!window.MathJax) { var _tag = document.createElement("script");
                _tag.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML", document.getElementsByTagName("head")[0].appendChild(_tag) }
            window.MathJax && window.MathJax.Hub.Queue(["Typeset", MathJax.Hub]), window.instgrm && window.instgrm.Embeds.process() } }
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = { name: "preview", props: ["post"], mounted: function() { applyScript(this.post.content && this.post.content.trim().length) }, updated: function(e, t) { applyScript(!0) } } }, function(e, t) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "hubpress-settings", computed: { meta: function() { return this.$store.state.application.config.meta || {} }, site: function() { return this.$store.state.application.config.site || {} }, theme: function() { return this.$store.state.application.config.theme || {} } } } }, function(e, t) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "hubpress-settings-social", computed: { social: function() { return this.$store.state.application.config.socialnetwork || {} } } } }, function(e, t, a) { "use strict";

    function n(e) { return e && e.__esModule ? e : { default: e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var i = a(53),
        o = n(i),
        s = "application:save-startup-config";
    t.default = { name: "initialise-configuration", data: function() { return { username: "", repositoryName: "hubpress.io", branch: "master", cname: void 0 } }, mounted: function() {
            (0, o.default)("div.dropdown").dropdown() }, computed: { isValid: function() { return "" != this.username.trim() && "" != this.repositoryName.trim() } }, methods: { submit: function() { var e = { username: this.username, repositoryName: this.repositoryName, branch: this.branch, cname: this.cname };
                this.$store.dispatch(s, e) } } } }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) {
    function n(e) { return a(i(e)) }

    function i(e) { return o[e] || function() { throw new Error("Cannot find module '" + e + "'.") }() } var o = { "./anyword-hint.js": 467, "./css-hint.js": 468, "./html-hint.js": 469, "./javascript-hint.js": 470, "./show-hint.js": 142, "./sql-hint.js": 471, "./xml-hint.js": 143 };
    n.keys = function() { return Object.keys(o) }, n.resolve = i, e.exports = n, n.id = 466 }, , , , , , , , , , function(e, t, a) {
    function n(e) { return a(i(e)) }

    function i(e) { return o[e] || function() { throw new Error("Cannot find module '" + e + "'.") }() }
    var o = { "./emacs.js": 477, "./sublime.js": 478, "./vim.js": 479 };
    n.keys = function() { return Object.keys(o) }, n.resolve = i, e.exports = n, n.id = 476
}, , , , function(e, t, a) {
    function n(e) { return a(i(e)) }

    function i(e) { return o[e] || function() { throw new Error("Cannot find module '" + e + "'.") }() } var o = { "./apl/apl.js": 481, "./asciiarmor/asciiarmor.js": 482, "./asn.1/asn.1.js": 483, "./asterisk/asterisk.js": 484, "./brainfuck/brainfuck.js": 485, "./clike/clike.js": 61, "./clojure/clojure.js": 486, "./cmake/cmake.js": 487, "./cobol/cobol.js": 488, "./coffeescript/coffeescript.js": 146, "./commonlisp/commonlisp.js": 489, "./crystal/crystal.js": 490, "./css/css.js": 37, "./cypher/cypher.js": 491, "./d/d.js": 492, "./dart/dart.js": 493, "./diff/diff.js": 494, "./django/django.js": 495, "./dockerfile/dockerfile.js": 496, "./dtd/dtd.js": 497, "./dylan/dylan.js": 498, "./ebnf/ebnf.js": 499, "./ecl/ecl.js": 500, "./eiffel/eiffel.js": 501, "./elm/elm.js": 502, "./erlang/erlang.js": 503, "./factor/factor.js": 504, "./fcl/fcl.js": 505, "./forth/forth.js": 506, "./fortran/fortran.js": 507, "./gas/gas.js": 508, "./gfm/gfm.js": 509, "./gherkin/gherkin.js": 510, "./go/go.js": 511, "./groovy/groovy.js": 512, "./haml/haml.js": 513, "./handlebars/handlebars.js": 147, "./haskell-literate/haskell-literate.js": 514, "./haskell/haskell.js": 148, "./haxe/haxe.js": 515, "./htmlembedded/htmlembedded.js": 516, "./htmlmixed/htmlmixed.js": 20, "./http/http.js": 517, "./idl/idl.js": 518, "./javascript/javascript.js": 38, "./jinja2/jinja2.js": 519, "./jsx/jsx.js": 520, "./julia/julia.js": 521, "./livescript/livescript.js": 522, "./lua/lua.js": 523, "./markdown/markdown.js": 149, "./mathematica/mathematica.js": 524, "./mbox/mbox.js": 525, "./meta.js": 150, "./mirc/mirc.js": 526, "./mllike/mllike.js": 527, "./modelica/modelica.js": 528, "./mscgen/mscgen.js": 529, "./mumps/mumps.js": 530, "./nginx/nginx.js": 531, "./nsis/nsis.js": 532, "./ntriples/ntriples.js": 533, "./octave/octave.js": 534, "./oz/oz.js": 535, "./pascal/pascal.js": 536, "./pegjs/pegjs.js": 537, "./perl/perl.js": 538, "./php/php.js": 539, "./pig/pig.js": 540, "./powershell/powershell.js": 541, "./properties/properties.js": 542, "./protobuf/protobuf.js": 543, "./pug/pug.js": 151, "./puppet/puppet.js": 544, "./python/python.js": 152, "./q/q.js": 545, "./r/r.js": 546, "./rpm/rpm.js": 547, "./rst/rst.js": 548, "./ruby/ruby.js": 83, "./rust/rust.js": 549, "./sas/sas.js": 550, "./sass/sass.js": 153, "./scheme/scheme.js": 551, "./shell/shell.js": 552, "./sieve/sieve.js": 553, "./slim/slim.js": 554, "./smalltalk/smalltalk.js": 555, "./smarty/smarty.js": 556, "./solr/solr.js": 557, "./soy/soy.js": 558, "./sparql/sparql.js": 559, "./spreadsheet/spreadsheet.js": 560, "./sql/sql.js": 154, "./stex/stex.js": 155, "./stylus/stylus.js": 156, "./swift/swift.js": 561, "./tcl/tcl.js": 562, "./textile/textile.js": 563, "./tiddlywiki/tiddlywiki.js": 564, "./tiki/tiki.js": 565, "./toml/toml.js": 566, "./tornado/tornado.js": 567, "./troff/troff.js": 568, "./ttcn-cfg/ttcn-cfg.js": 569, "./ttcn/ttcn.js": 570, "./turtle/turtle.js": 571, "./twig/twig.js": 572, "./vb/vb.js": 573, "./vbscript/vbscript.js": 574, "./velocity/velocity.js": 575, "./verilog/verilog.js": 576, "./vhdl/vhdl.js": 577, "./vue/vue.js": 578, "./webidl/webidl.js": 579, "./xml/xml.js": 50, "./xquery/xquery.js": 580, "./yacas/yacas.js": 581, "./yaml-frontmatter/yaml-frontmatter.js": 582, "./yaml/yaml.js": 157, "./z80/z80.js": 583 };
    n.keys = function() { return Object.keys(o) }, n.resolve = i, e.exports = n, n.id = 480 }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) {
    function n(e) { return a(i(e)) }

    function i(e) { return o[e] || function() { throw new Error("Cannot find module '" + e + "'.") }() } var o = { "./3024-day.css": 641, "./3024-night.css": 642, "./abcdef.css": 643, "./ambiance-mobile.css": 644, "./ambiance.css": 645, "./base16-dark.css": 646, "./base16-light.css": 647, "./bespin.css": 648, "./blackboard.css": 649, "./cobalt.css": 650, "./colorforth.css": 651, "./dracula.css": 652, "./duotone-dark.css": 653, "./duotone-light.css": 654, "./eclipse.css": 655, "./elegant.css": 656, "./erlang-dark.css": 657, "./hopscotch.css": 658, "./icecoder.css": 659, "./isotope.css": 660, "./lesser-dark.css": 661, "./liquibyte.css": 662, "./material.css": 663, "./mbo.css": 664, "./mdn-like.css": 665, "./midnight.css": 666, "./monokai.css": 667, "./neat.css": 668, "./neo.css": 669, "./night.css": 670, "./panda-syntax.css": 671, "./paraiso-dark.css": 672, "./paraiso-light.css": 673, "./pastel-on-dark.css": 674, "./railscasts.css": 675, "./rubyblue.css": 676, "./seti.css": 677, "./solarized.css": 678, "./the-matrix.css": 679, "./tomorrow-night-bright.css": 680, "./tomorrow-night-eighties.css": 681, "./ttcn.css": 682, "./twilight.css": 683, "./vibrant-ink.css": 684, "./xq-dark.css": 685, "./xq-light.css": 686, "./yeti.css": 687, "./zenburn.css": 688 };
    n.keys = function() { return Object.keys(o) }, n.resolve = i, e.exports = n, n.id = 584 }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, , , , , , , , , , , , , , , , , , function(e, t) {
    e.exports = {
        "application/1d-interleaved-parityfec": { source: "iana" },
        "application/3gpdash-qoe-report+xml": { source: "iana" },
        "application/3gpp-ims+xml": { source: "iana" },
        "application/a2l": { source: "iana" },
        "application/activemessage": { source: "iana" },
        "application/alto-costmap+json": { source: "iana", compressible: !0 },
        "application/alto-costmapfilter+json": { source: "iana", compressible: !0 },
        "application/alto-directory+json": { source: "iana", compressible: !0 },
        "application/alto-endpointcost+json": { source: "iana", compressible: !0 },
        "application/alto-endpointcostparams+json": { source: "iana", compressible: !0 },
        "application/alto-endpointprop+json": { source: "iana", compressible: !0 },
        "application/alto-endpointpropparams+json": { source: "iana", compressible: !0 },
        "application/alto-error+json": { source: "iana", compressible: !0 },
        "application/alto-networkmap+json": { source: "iana", compressible: !0 },
        "application/alto-networkmapfilter+json": { source: "iana", compressible: !0 },
        "application/aml": { source: "iana" },
        "application/andrew-inset": { source: "iana", extensions: ["ez"] },
        "application/applefile": { source: "iana" },
        "application/applixware": { source: "apache", extensions: ["aw"] },
        "application/atf": { source: "iana" },
        "application/atfx": { source: "iana" },
        "application/atom+xml": { source: "iana", compressible: !0, extensions: ["atom"] },
        "application/atomcat+xml": { source: "iana", extensions: ["atomcat"] },
        "application/atomdeleted+xml": { source: "iana" },
        "application/atomicmail": { source: "iana" },
        "application/atomsvc+xml": { source: "iana", extensions: ["atomsvc"] },
        "application/atxml": { source: "iana" },
        "application/auth-policy+xml": { source: "iana" },
        "application/bacnet-xdd+zip": { source: "iana" },
        "application/batch-smtp": { source: "iana" },
        "application/bdoc": { compressible: !1, extensions: ["bdoc"] },
        "application/beep+xml": { source: "iana" },
        "application/calendar+json": { source: "iana", compressible: !0 },
        "application/calendar+xml": { source: "iana" },
        "application/call-completion": { source: "iana" },
        "application/cals-1840": { source: "iana" },
        "application/cbor": { source: "iana" },
        "application/ccmp+xml": { source: "iana" },
        "application/ccxml+xml": { source: "iana", extensions: ["ccxml"] },
        "application/cdfx+xml": { source: "iana" },
        "application/cdmi-capability": { source: "iana", extensions: ["cdmia"] },
        "application/cdmi-container": { source: "iana", extensions: ["cdmic"] },
        "application/cdmi-domain": { source: "iana", extensions: ["cdmid"] },
        "application/cdmi-object": { source: "iana", extensions: ["cdmio"] },
        "application/cdmi-queue": { source: "iana", extensions: ["cdmiq"] },
        "application/cdni": { source: "iana" },
        "application/cea": { source: "iana" },
        "application/cea-2018+xml": { source: "iana" },
        "application/cellml+xml": { source: "iana" },
        "application/cfw": { source: "iana" },
        "application/clue_info+xml": { source: "iana" },
        "application/cms": { source: "iana" },
        "application/cnrp+xml": { source: "iana" },
        "application/coap-group+json": { source: "iana", compressible: !0 },
        "application/commonground": { source: "iana" },
        "application/conference-info+xml": { source: "iana" },
        "application/cpl+xml": { source: "iana" },
        "application/csrattrs": { source: "iana" },
        "application/csta+xml": { source: "iana" },
        "application/cstadata+xml": { source: "iana" },
        "application/csvm+json": { source: "iana", compressible: !0 },
        "application/cu-seeme": { source: "apache", extensions: ["cu"] },
        "application/cybercash": { source: "iana" },
        "application/dart": { compressible: !0 },
        "application/dash+xml": { source: "iana", extensions: ["mpd"] },
        "application/dashdelta": { source: "iana" },
        "application/davmount+xml": { source: "iana", extensions: ["davmount"] },
        "application/dca-rft": { source: "iana" },
        "application/dcd": { source: "iana" },
        "application/dec-dx": { source: "iana" },
        "application/dialog-info+xml": { source: "iana" },
        "application/dicom": { source: "iana" },
        "application/dicom+json": { source: "iana", compressible: !0 },
        "application/dicom+xml": { source: "iana" },
        "application/dii": { source: "iana" },
        "application/dit": { source: "iana" },
        "application/dns": { source: "iana" },
        "application/docbook+xml": { source: "apache", extensions: ["dbk"] },
        "application/dskpp+xml": { source: "iana" },
        "application/dssc+der": { source: "iana", extensions: ["dssc"] },
        "application/dssc+xml": { source: "iana", extensions: ["xdssc"] },
        "application/dvcs": { source: "iana" },
        "application/ecmascript": { source: "iana", compressible: !0, extensions: ["ecma"] },
        "application/edi-consent": { source: "iana" },
        "application/edi-x12": { source: "iana", compressible: !1 },
        "application/edifact": { source: "iana", compressible: !1 },
        "application/efi": { source: "iana" },
        "application/emergencycalldata.comment+xml": { source: "iana" },
        "application/emergencycalldata.deviceinfo+xml": { source: "iana" },
        "application/emergencycalldata.providerinfo+xml": { source: "iana" },
        "application/emergencycalldata.serviceinfo+xml": { source: "iana" },
        "application/emergencycalldata.subscriberinfo+xml": { source: "iana" },
        "application/emma+xml": { source: "iana", extensions: ["emma"] },
        "application/emotionml+xml": { source: "iana" },
        "application/encaprtp": { source: "iana" },
        "application/epp+xml": { source: "iana" },
        "application/epub+zip": { source: "iana", extensions: ["epub"] },
        "application/eshop": { source: "iana" },
        "application/exi": { source: "iana", extensions: ["exi"] },
        "application/fastinfoset": { source: "iana" },
        "application/fastsoap": { source: "iana" },
        "application/fdt+xml": { source: "iana" },
        "application/fits": { source: "iana" },
        "application/font-sfnt": { source: "iana" },
        "application/font-tdpfr": { source: "iana", extensions: ["pfr"] },
        "application/font-woff": { source: "iana", compressible: !1, extensions: ["woff"] },
        "application/font-woff2": { compressible: !1, extensions: ["woff2"] },
        "application/framework-attributes+xml": { source: "iana" },
        "application/geo+json": { source: "iana", compressible: !0 },
        "application/gml+xml": { source: "apache", extensions: ["gml"] },
        "application/gpx+xml": { source: "apache", extensions: ["gpx"] },
        "application/gxf": { source: "apache", extensions: ["gxf"] },
        "application/gzip": { source: "iana", compressible: !1 },
        "application/h224": { source: "iana" },
        "application/held+xml": { source: "iana" },
        "application/http": { source: "iana" },
        "application/hyperstudio": { source: "iana", extensions: ["stk"] },
        "application/ibe-key-request+xml": { source: "iana" },
        "application/ibe-pkg-reply+xml": { source: "iana" },
        "application/ibe-pp-data": { source: "iana" },
        "application/iges": { source: "iana" },
        "application/im-iscomposing+xml": { source: "iana" },
        "application/index": { source: "iana" },
        "application/index.cmd": { source: "iana" },
        "application/index.obj": { source: "iana" },
        "application/index.response": { source: "iana" },
        "application/index.vnd": { source: "iana" },
        "application/inkml+xml": { source: "iana", extensions: ["ink", "inkml"] },
        "application/iotp": { source: "iana" },
        "application/ipfix": { source: "iana", extensions: ["ipfix"] },
        "application/ipp": { source: "iana" },
        "application/isup": { source: "iana" },
        "application/its+xml": { source: "iana" },
        "application/java-archive": { source: "apache", compressible: !1, extensions: ["jar", "war", "ear"] },
        "application/java-serialized-object": { source: "apache", compressible: !1, extensions: ["ser"] },
        "application/java-vm": { source: "apache", compressible: !1, extensions: ["class"] },
        "application/javascript": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["js"] },
        "application/jose": { source: "iana" },
        "application/jose+json": { source: "iana", compressible: !0 },
        "application/jrd+json": { source: "iana", compressible: !0 },
        "application/json": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["json", "map"] },
        "application/json-patch+json": { source: "iana", compressible: !0 },
        "application/json-seq": { source: "iana" },
        "application/json5": { extensions: ["json5"] },
        "application/jsonml+json": { source: "apache", compressible: !0, extensions: ["jsonml"] },
        "application/jwk+json": { source: "iana", compressible: !0 },
        "application/jwk-set+json": { source: "iana", compressible: !0 },
        "application/jwt": { source: "iana" },
        "application/kpml-request+xml": { source: "iana" },
        "application/kpml-response+xml": { source: "iana" },
        "application/ld+json": { source: "iana", compressible: !0, extensions: ["jsonld"] },
        "application/lgr+xml": { source: "iana" },
        "application/link-format": { source: "iana" },
        "application/load-control+xml": { source: "iana" },
        "application/lost+xml": { source: "iana", extensions: ["lostxml"] },
        "application/lostsync+xml": { source: "iana" },
        "application/lxf": { source: "iana" },
        "application/mac-binhex40": { source: "iana", extensions: ["hqx"] },
        "application/mac-compactpro": { source: "apache", extensions: ["cpt"] },
        "application/macwriteii": { source: "iana" },
        "application/mads+xml": { source: "iana", extensions: ["mads"] },
        "application/manifest+json": { charset: "UTF-8", compressible: !0, extensions: ["webmanifest"] },
        "application/marc": { source: "iana", extensions: ["mrc"] },
        "application/marcxml+xml": { source: "iana", extensions: ["mrcx"] },
        "application/mathematica": { source: "iana", extensions: ["ma", "nb", "mb"] },
        "application/mathml+xml": { source: "iana", extensions: ["mathml"] },
        "application/mathml-content+xml": { source: "iana" },
        "application/mathml-presentation+xml": { source: "iana" },
        "application/mbms-associated-procedure-description+xml": { source: "iana" },
        "application/mbms-deregister+xml": { source: "iana" },
        "application/mbms-envelope+xml": { source: "iana" },
        "application/mbms-msk+xml": { source: "iana" },
        "application/mbms-msk-response+xml": { source: "iana" },
        "application/mbms-protection-description+xml": { source: "iana" },
        "application/mbms-reception-report+xml": { source: "iana" },
        "application/mbms-register+xml": { source: "iana" },
        "application/mbms-register-response+xml": { source: "iana" },
        "application/mbms-schedule+xml": { source: "iana" },
        "application/mbms-user-service-description+xml": { source: "iana" },
        "application/mbox": { source: "iana", extensions: ["mbox"] },
        "application/media-policy-dataset+xml": { source: "iana" },
        "application/media_control+xml": { source: "iana" },
        "application/mediaservercontrol+xml": { source: "iana", extensions: ["mscml"] },
        "application/merge-patch+json": { source: "iana", compressible: !0 },
        "application/metalink+xml": { source: "apache", extensions: ["metalink"] },
        "application/metalink4+xml": { source: "iana", extensions: ["meta4"] },
        "application/mets+xml": { source: "iana", extensions: ["mets"] },
        "application/mf4": { source: "iana" },
        "application/mikey": { source: "iana" },
        "application/mods+xml": { source: "iana", extensions: ["mods"] },
        "application/moss-keys": { source: "iana" },
        "application/moss-signature": { source: "iana" },
        "application/mosskey-data": { source: "iana" },
        "application/mosskey-request": { source: "iana" },
        "application/mp21": { source: "iana", extensions: ["m21", "mp21"] },
        "application/mp4": { source: "iana", extensions: ["mp4s", "m4p"] },
        "application/mpeg4-generic": { source: "iana" },
        "application/mpeg4-iod": { source: "iana" },
        "application/mpeg4-iod-xmt": { source: "iana" },
        "application/mrb-consumer+xml": { source: "iana" },
        "application/mrb-publish+xml": { source: "iana" },
        "application/msc-ivr+xml": { source: "iana" },
        "application/msc-mixer+xml": { source: "iana" },
        "application/msword": { source: "iana", compressible: !1, extensions: ["doc", "dot"] },
        "application/mxf": { source: "iana", extensions: ["mxf"] },
        "application/nasdata": { source: "iana" },
        "application/news-checkgroups": { source: "iana" },
        "application/news-groupinfo": { source: "iana" },
        "application/news-transmission": { source: "iana" },
        "application/nlsml+xml": { source: "iana" },
        "application/nss": { source: "iana" },
        "application/ocsp-request": { source: "iana" },
        "application/ocsp-response": { source: "iana" },
        "application/octet-stream": { source: "iana", compressible: !1, extensions: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"] },
        "application/oda": { source: "iana", extensions: ["oda"] },
        "application/odx": { source: "iana" },
        "application/oebps-package+xml": { source: "iana", extensions: ["opf"] },
        "application/ogg": { source: "iana", compressible: !1, extensions: ["ogx"] },
        "application/omdoc+xml": { source: "apache", extensions: ["omdoc"] },
        "application/onenote": { source: "apache", extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"] },
        "application/oxps": { source: "iana", extensions: ["oxps"] },
        "application/p2p-overlay+xml": { source: "iana" },
        "application/parityfec": { source: "iana" },
        "application/patch-ops-error+xml": { source: "iana", extensions: ["xer"] },
        "application/pdf": { source: "iana", compressible: !1, extensions: ["pdf"] },
        "application/pdx": { source: "iana" },
        "application/pgp-encrypted": { source: "iana", compressible: !1, extensions: ["pgp"] },
        "application/pgp-keys": { source: "iana" },
        "application/pgp-signature": { source: "iana", extensions: ["asc", "sig"] },
        "application/pics-rules": { source: "apache", extensions: ["prf"] },
        "application/pidf+xml": { source: "iana" },
        "application/pidf-diff+xml": { source: "iana" },
        "application/pkcs10": { source: "iana", extensions: ["p10"] },
        "application/pkcs12": { source: "iana" },
        "application/pkcs7-mime": { source: "iana", extensions: ["p7m", "p7c"] },
        "application/pkcs7-signature": { source: "iana", extensions: ["p7s"] },
        "application/pkcs8": { source: "iana", extensions: ["p8"] },
        "application/pkix-attr-cert": { source: "iana", extensions: ["ac"] },
        "application/pkix-cert": { source: "iana", extensions: ["cer"] },
        "application/pkix-crl": { source: "iana", extensions: ["crl"] },
        "application/pkix-pkipath": { source: "iana", extensions: ["pkipath"] },
        "application/pkixcmp": { source: "iana", extensions: ["pki"] },
        "application/pls+xml": { source: "iana", extensions: ["pls"] },
        "application/poc-settings+xml": { source: "iana" },
        "application/postscript": { source: "iana", compressible: !0, extensions: ["ai", "eps", "ps"] },
        "application/ppsp-tracker+json": { source: "iana", compressible: !0 },
        "application/problem+json": { source: "iana", compressible: !0 },
        "application/problem+xml": { source: "iana" },
        "application/provenance+xml": { source: "iana" },
        "application/prs.alvestrand.titrax-sheet": { source: "iana" },
        "application/prs.cww": { source: "iana", extensions: ["cww"] },
        "application/prs.hpub+zip": { source: "iana" },
        "application/prs.nprend": { source: "iana" },
        "application/prs.plucker": { source: "iana" },
        "application/prs.rdf-xml-crypt": { source: "iana" },
        "application/prs.xsf+xml": { source: "iana" },
        "application/pskc+xml": { source: "iana", extensions: ["pskcxml"] },
        "application/qsig": { source: "iana" },
        "application/raptorfec": { source: "iana" },
        "application/rdap+json": { source: "iana", compressible: !0 },
        "application/rdf+xml": { source: "iana", compressible: !0, extensions: ["rdf"] },
        "application/reginfo+xml": { source: "iana", extensions: ["rif"] },
        "application/relax-ng-compact-syntax": { source: "iana", extensions: ["rnc"] },
        "application/remote-printing": { source: "iana" },
        "application/reputon+json": { source: "iana", compressible: !0 },
        "application/resource-lists+xml": { source: "iana", extensions: ["rl"] },
        "application/resource-lists-diff+xml": { source: "iana", extensions: ["rld"] },
        "application/rfc+xml": { source: "iana" },
        "application/riscos": { source: "iana" },
        "application/rlmi+xml": { source: "iana" },
        "application/rls-services+xml": { source: "iana", extensions: ["rs"] },
        "application/rpki-ghostbusters": { source: "iana", extensions: ["gbr"] },
        "application/rpki-manifest": { source: "iana", extensions: ["mft"] },
        "application/rpki-roa": { source: "iana", extensions: ["roa"] },
        "application/rpki-updown": { source: "iana" },
        "application/rsd+xml": { source: "apache", extensions: ["rsd"] },
        "application/rss+xml": { source: "apache", compressible: !0, extensions: ["rss"] },
        "application/rtf": { source: "iana", compressible: !0, extensions: ["rtf"] },
        "application/rtploopback": { source: "iana" },
        "application/rtx": { source: "iana" },
        "application/samlassertion+xml": { source: "iana" },
        "application/samlmetadata+xml": { source: "iana" },
        "application/sbml+xml": { source: "iana", extensions: ["sbml"] },
        "application/scaip+xml": { source: "iana" },
        "application/scim+json": { source: "iana", compressible: !0 },
        "application/scvp-cv-request": { source: "iana", extensions: ["scq"] },
        "application/scvp-cv-response": { source: "iana", extensions: ["scs"] },
        "application/scvp-vp-request": { source: "iana", extensions: ["spq"] },
        "application/scvp-vp-response": { source: "iana", extensions: ["spp"] },
        "application/sdp": { source: "iana", extensions: ["sdp"] },
        "application/sep+xml": { source: "iana" },
        "application/sep-exi": { source: "iana" },
        "application/session-info": { source: "iana" },
        "application/set-payment": { source: "iana" },
        "application/set-payment-initiation": { source: "iana", extensions: ["setpay"] },
        "application/set-registration": { source: "iana" },
        "application/set-registration-initiation": { source: "iana", extensions: ["setreg"] },
        "application/sgml": { source: "iana" },
        "application/sgml-open-catalog": { source: "iana" },
        "application/shf+xml": { source: "iana", extensions: ["shf"] },
        "application/sieve": { source: "iana" },
        "application/simple-filter+xml": { source: "iana" },
        "application/simple-message-summary": { source: "iana" },
        "application/simplesymbolcontainer": { source: "iana" },
        "application/slate": { source: "iana" },
        "application/smil": { source: "iana" },
        "application/smil+xml": { source: "iana", extensions: ["smi", "smil"] },
        "application/smpte336m": { source: "iana" },
        "application/soap+fastinfoset": { source: "iana" },
        "application/soap+xml": { source: "iana", compressible: !0 },
        "application/sparql-query": { source: "iana", extensions: ["rq"] },
        "application/sparql-results+xml": { source: "iana", extensions: ["srx"] },
        "application/spirits-event+xml": { source: "iana" },
        "application/sql": { source: "iana" },
        "application/srgs": { source: "iana", extensions: ["gram"] },
        "application/srgs+xml": { source: "iana", extensions: ["grxml"] },
        "application/sru+xml": { source: "iana", extensions: ["sru"] },
        "application/ssdl+xml": { source: "apache", extensions: ["ssdl"] },
        "application/ssml+xml": { source: "iana", extensions: ["ssml"] },
        "application/tamp-apex-update": { source: "iana" },
        "application/tamp-apex-update-confirm": { source: "iana" },
        "application/tamp-community-update": { source: "iana" },
        "application/tamp-community-update-confirm": { source: "iana" },
        "application/tamp-error": { source: "iana" },
        "application/tamp-sequence-adjust": { source: "iana" },
        "application/tamp-sequence-adjust-confirm": { source: "iana" },
        "application/tamp-status-query": { source: "iana" },
        "application/tamp-status-response": { source: "iana" },
        "application/tamp-update": { source: "iana" },
        "application/tamp-update-confirm": { source: "iana" },
        "application/tar": { compressible: !0 },
        "application/tei+xml": { source: "iana", extensions: ["tei", "teicorpus"] },
        "application/thraud+xml": { source: "iana", extensions: ["tfi"] },
        "application/timestamp-query": { source: "iana" },
        "application/timestamp-reply": { source: "iana" },
        "application/timestamped-data": { source: "iana", extensions: ["tsd"] },
        "application/ttml+xml": { source: "iana" },
        "application/tve-trigger": { source: "iana" },
        "application/ulpfec": { source: "iana" },
        "application/urc-grpsheet+xml": { source: "iana" },
        "application/urc-ressheet+xml": { source: "iana" },
        "application/urc-targetdesc+xml": { source: "iana" },
        "application/urc-uisocketdesc+xml": { source: "iana" },
        "application/vcard+json": { source: "iana", compressible: !0 },
        "application/vcard+xml": { source: "iana" },
        "application/vemmi": { source: "iana" },
        "application/vividence.scriptfile": { source: "apache" },
        "application/vnd.3gpp-prose+xml": { source: "iana" },
        "application/vnd.3gpp-prose-pc3ch+xml": { source: "iana" },
        "application/vnd.3gpp.access-transfer-events+xml": { source: "iana" },
        "application/vnd.3gpp.bsf+xml": { source: "iana" },
        "application/vnd.3gpp.mid-call+xml": { source: "iana" },
        "application/vnd.3gpp.pic-bw-large": { source: "iana", extensions: ["plb"] },
        "application/vnd.3gpp.pic-bw-small": { source: "iana", extensions: ["psb"] },
        "application/vnd.3gpp.pic-bw-var": { source: "iana", extensions: ["pvb"] },
        "application/vnd.3gpp.sms": { source: "iana" },
        "application/vnd.3gpp.sms+xml": { source: "iana" },
        "application/vnd.3gpp.srvcc-ext+xml": { source: "iana" },
        "application/vnd.3gpp.srvcc-info+xml": { source: "iana" },
        "application/vnd.3gpp.state-and-event-info+xml": { source: "iana" },
        "application/vnd.3gpp.ussd+xml": { source: "iana" },
        "application/vnd.3gpp2.bcmcsinfo+xml": { source: "iana" },
        "application/vnd.3gpp2.sms": { source: "iana" },
        "application/vnd.3gpp2.tcap": { source: "iana", extensions: ["tcap"] },
        "application/vnd.3lightssoftware.imagescal": { source: "iana" },
        "application/vnd.3m.post-it-notes": { source: "iana", extensions: ["pwn"] },
        "application/vnd.accpac.simply.aso": { source: "iana", extensions: ["aso"] },
        "application/vnd.accpac.simply.imp": { source: "iana", extensions: ["imp"] },
        "application/vnd.acucobol": { source: "iana", extensions: ["acu"] },
        "application/vnd.acucorp": { source: "iana", extensions: ["atc", "acutc"] },
        "application/vnd.adobe.air-application-installer-package+zip": { source: "apache", extensions: ["air"] },
        "application/vnd.adobe.flash.movie": { source: "iana" },
        "application/vnd.adobe.formscentral.fcdt": { source: "iana", extensions: ["fcdt"] },
        "application/vnd.adobe.fxp": { source: "iana", extensions: ["fxp", "fxpl"] },
        "application/vnd.adobe.partial-upload": { source: "iana" },
        "application/vnd.adobe.xdp+xml": { source: "iana", extensions: ["xdp"] },
        "application/vnd.adobe.xfdf": { source: "iana", extensions: ["xfdf"] },
        "application/vnd.aether.imp": { source: "iana" },
        "application/vnd.ah-barcode": { source: "iana" },
        "application/vnd.ahead.space": { source: "iana", extensions: ["ahead"] },
        "application/vnd.airzip.filesecure.azf": { source: "iana", extensions: ["azf"] },
        "application/vnd.airzip.filesecure.azs": { source: "iana", extensions: ["azs"] },
        "application/vnd.amazon.ebook": { source: "apache", extensions: ["azw"] },
        "application/vnd.amazon.mobi8-ebook": { source: "iana" },
        "application/vnd.americandynamics.acc": { source: "iana", extensions: ["acc"] },
        "application/vnd.amiga.ami": { source: "iana", extensions: ["ami"] },
        "application/vnd.amundsen.maze+xml": { source: "iana" },
        "application/vnd.android.package-archive": { source: "apache", compressible: !1, extensions: ["apk"] },
        "application/vnd.anki": { source: "iana" },
        "application/vnd.anser-web-certificate-issue-initiation": { source: "iana", extensions: ["cii"] },
        "application/vnd.anser-web-funds-transfer-initiation": { source: "apache", extensions: ["fti"] },
        "application/vnd.antix.game-component": { source: "iana", extensions: ["atx"] },
        "application/vnd.apache.thrift.binary": { source: "iana" },
        "application/vnd.apache.thrift.compact": { source: "iana" },
        "application/vnd.apache.thrift.json": { source: "iana" },
        "application/vnd.api+json": { source: "iana", compressible: !0 },
        "application/vnd.apple.installer+xml": { source: "iana", extensions: ["mpkg"] },
        "application/vnd.apple.mpegurl": { source: "iana", extensions: ["m3u8"] },
        "application/vnd.apple.pkpass": { compressible: !1, extensions: ["pkpass"] },
        "application/vnd.arastra.swi": { source: "iana" },
        "application/vnd.aristanetworks.swi": { source: "iana", extensions: ["swi"] },
        "application/vnd.artsquare": { source: "iana" },
        "application/vnd.astraea-software.iota": { source: "iana", extensions: ["iota"] },
        "application/vnd.audiograph": { source: "iana", extensions: ["aep"] },
        "application/vnd.autopackage": { source: "iana" },
        "application/vnd.avistar+xml": { source: "iana" },
        "application/vnd.balsamiq.bmml+xml": { source: "iana" },
        "application/vnd.balsamiq.bmpr": { source: "iana" },
        "application/vnd.bekitzur-stech+json": { source: "iana", compressible: !0 },
        "application/vnd.biopax.rdf+xml": { source: "iana" },
        "application/vnd.blueice.multipass": { source: "iana", extensions: ["mpm"] },
        "application/vnd.bluetooth.ep.oob": { source: "iana" },
        "application/vnd.bluetooth.le.oob": { source: "iana" },
        "application/vnd.bmi": { source: "iana", extensions: ["bmi"] },
        "application/vnd.businessobjects": { source: "iana", extensions: ["rep"] },
        "application/vnd.cab-jscript": { source: "iana" },
        "application/vnd.canon-cpdl": { source: "iana" },
        "application/vnd.canon-lips": { source: "iana" },
        "application/vnd.cendio.thinlinc.clientconf": { source: "iana" },
        "application/vnd.century-systems.tcp_stream": { source: "iana" },
        "application/vnd.chemdraw+xml": { source: "iana", extensions: ["cdxml"] },
        "application/vnd.chess-pgn": { source: "iana" },
        "application/vnd.chipnuts.karaoke-mmd": { source: "iana", extensions: ["mmd"] },
        "application/vnd.cinderella": { source: "iana", extensions: ["cdy"] },
        "application/vnd.cirpack.isdn-ext": { source: "iana" },
        "application/vnd.citationstyles.style+xml": { source: "iana" },
        "application/vnd.claymore": { source: "iana", extensions: ["cla"] },
        "application/vnd.cloanto.rp9": { source: "iana", extensions: ["rp9"] },
        "application/vnd.clonk.c4group": { source: "iana", extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"] },
        "application/vnd.cluetrust.cartomobile-config": { source: "iana", extensions: ["c11amc"] },
        "application/vnd.cluetrust.cartomobile-config-pkg": { source: "iana", extensions: ["c11amz"] },
        "application/vnd.coffeescript": { source: "iana" },
        "application/vnd.collection+json": { source: "iana", compressible: !0 },
        "application/vnd.collection.doc+json": { source: "iana", compressible: !0 },
        "application/vnd.collection.next+json": { source: "iana", compressible: !0 },
        "application/vnd.comicbook+zip": { source: "iana" },
        "application/vnd.commerce-battelle": { source: "iana" },
        "application/vnd.commonspace": { source: "iana", extensions: ["csp"] },
        "application/vnd.contact.cmsg": { source: "iana", extensions: ["cdbcmsg"] },
        "application/vnd.coreos.ignition+json": { source: "iana", compressible: !0 },
        "application/vnd.cosmocaller": { source: "iana", extensions: ["cmc"] },
        "application/vnd.crick.clicker": { source: "iana", extensions: ["clkx"] },
        "application/vnd.crick.clicker.keyboard": { source: "iana", extensions: ["clkk"] },
        "application/vnd.crick.clicker.palette": { source: "iana", extensions: ["clkp"] },
        "application/vnd.crick.clicker.template": { source: "iana", extensions: ["clkt"] },
        "application/vnd.crick.clicker.wordbank": { source: "iana", extensions: ["clkw"] },
        "application/vnd.criticaltools.wbs+xml": { source: "iana", extensions: ["wbs"] },
        "application/vnd.ctc-posml": { source: "iana", extensions: ["pml"] },
        "application/vnd.ctct.ws+xml": { source: "iana" },
        "application/vnd.cups-pdf": { source: "iana" },
        "application/vnd.cups-postscript": { source: "iana" },
        "application/vnd.cups-ppd": { source: "iana", extensions: ["ppd"] },
        "application/vnd.cups-raster": { source: "iana" },
        "application/vnd.cups-raw": { source: "iana" },
        "application/vnd.curl": { source: "iana" },
        "application/vnd.curl.car": { source: "apache", extensions: ["car"] },
        "application/vnd.curl.pcurl": { source: "apache", extensions: ["pcurl"] },
        "application/vnd.cyan.dean.root+xml": { source: "iana" },
        "application/vnd.cybank": { source: "iana" },
        "application/vnd.d2l.coursepackage1p0+zip": { source: "iana" },
        "application/vnd.dart": { source: "iana", compressible: !0, extensions: ["dart"] },
        "application/vnd.data-vision.rdz": { source: "iana", extensions: ["rdz"] },
        "application/vnd.debian.binary-package": { source: "iana" },
        "application/vnd.dece.data": { source: "iana", extensions: ["uvf", "uvvf", "uvd", "uvvd"] },
        "application/vnd.dece.ttml+xml": { source: "iana", extensions: ["uvt", "uvvt"] },
        "application/vnd.dece.unspecified": { source: "iana", extensions: ["uvx", "uvvx"] },
        "application/vnd.dece.zip": { source: "iana", extensions: ["uvz", "uvvz"] },
        "application/vnd.denovo.fcselayout-link": { source: "iana", extensions: ["fe_launch"] },
        "application/vnd.desmume-movie": { source: "iana" },
        "application/vnd.desmume.movie": { source: "apache" },
        "application/vnd.dir-bi.plate-dl-nosuffix": { source: "iana" },
        "application/vnd.dm.delegation+xml": { source: "iana" },
        "application/vnd.dna": { source: "iana", extensions: ["dna"] },
        "application/vnd.document+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.dolby.mlp": { source: "apache", extensions: ["mlp"] },
        "application/vnd.dolby.mobile.1": { source: "iana" },
        "application/vnd.dolby.mobile.2": { source: "iana" },
        "application/vnd.doremir.scorecloud-binary-document": { source: "iana" },
        "application/vnd.dpgraph": { source: "iana", extensions: ["dpg"] },
        "application/vnd.dreamfactory": { source: "iana", extensions: ["dfac"] },
        "application/vnd.drive+json": { source: "iana", compressible: !0 },
        "application/vnd.ds-keypoint": { source: "apache", extensions: ["kpxx"] },
        "application/vnd.dtg.local": { source: "iana" },
        "application/vnd.dtg.local.flash": { source: "iana" },
        "application/vnd.dtg.local.html": { source: "iana" },
        "application/vnd.dvb.ait": { source: "iana", extensions: ["ait"] },
        "application/vnd.dvb.dvbj": { source: "iana" },
        "application/vnd.dvb.esgcontainer": { source: "iana" },
        "application/vnd.dvb.ipdcdftnotifaccess": { source: "iana" },
        "application/vnd.dvb.ipdcesgaccess": { source: "iana" },
        "application/vnd.dvb.ipdcesgaccess2": { source: "iana" },
        "application/vnd.dvb.ipdcesgpdd": { source: "iana" },
        "application/vnd.dvb.ipdcroaming": { source: "iana" },
        "application/vnd.dvb.iptv.alfec-base": { source: "iana" },
        "application/vnd.dvb.iptv.alfec-enhancement": { source: "iana" },
        "application/vnd.dvb.notif-aggregate-root+xml": { source: "iana" },
        "application/vnd.dvb.notif-container+xml": { source: "iana" },
        "application/vnd.dvb.notif-generic+xml": { source: "iana" },
        "application/vnd.dvb.notif-ia-msglist+xml": { source: "iana" },
        "application/vnd.dvb.notif-ia-registration-request+xml": { source: "iana" },
        "application/vnd.dvb.notif-ia-registration-response+xml": { source: "iana" },
        "application/vnd.dvb.notif-init+xml": { source: "iana" },
        "application/vnd.dvb.pfr": { source: "iana" },
        "application/vnd.dvb.service": { source: "iana", extensions: ["svc"] },
        "application/vnd.dxr": { source: "iana" },
        "application/vnd.dynageo": { source: "iana", extensions: ["geo"] },
        "application/vnd.dzr": { source: "iana" },
        "application/vnd.easykaraoke.cdgdownload": { source: "iana" },
        "application/vnd.ecdis-update": { source: "iana" },
        "application/vnd.ecowin.chart": { source: "iana", extensions: ["mag"] },
        "application/vnd.ecowin.filerequest": { source: "iana" },
        "application/vnd.ecowin.fileupdate": { source: "iana" },
        "application/vnd.ecowin.series": { source: "iana" },
        "application/vnd.ecowin.seriesrequest": { source: "iana" },
        "application/vnd.ecowin.seriesupdate": { source: "iana" },
        "application/vnd.emclient.accessrequest+xml": { source: "iana" },
        "application/vnd.enliven": { source: "iana", extensions: ["nml"] },
        "application/vnd.enphase.envoy": { source: "iana" },
        "application/vnd.eprints.data+xml": { source: "iana" },
        "application/vnd.epson.esf": { source: "iana", extensions: ["esf"] },
        "application/vnd.epson.msf": { source: "iana", extensions: ["msf"] },
        "application/vnd.epson.quickanime": { source: "iana", extensions: ["qam"] },
        "application/vnd.epson.salt": { source: "iana", extensions: ["slt"] },
        "application/vnd.epson.ssf": { source: "iana", extensions: ["ssf"] },
        "application/vnd.ericsson.quickcall": { source: "iana" },
        "application/vnd.espass-espass+zip": { source: "iana" },
        "application/vnd.eszigno3+xml": { source: "iana", extensions: ["es3", "et3"] },
        "application/vnd.etsi.aoc+xml": { source: "iana" },
        "application/vnd.etsi.asic-e+zip": { source: "iana" },
        "application/vnd.etsi.asic-s+zip": { source: "iana" },
        "application/vnd.etsi.cug+xml": { source: "iana" },
        "application/vnd.etsi.iptvcommand+xml": { source: "iana" },
        "application/vnd.etsi.iptvdiscovery+xml": { source: "iana" },
        "application/vnd.etsi.iptvprofile+xml": { source: "iana" },
        "application/vnd.etsi.iptvsad-bc+xml": { source: "iana" },
        "application/vnd.etsi.iptvsad-cod+xml": { source: "iana" },
        "application/vnd.etsi.iptvsad-npvr+xml": { source: "iana" },
        "application/vnd.etsi.iptvservice+xml": { source: "iana" },
        "application/vnd.etsi.iptvsync+xml": { source: "iana" },
        "application/vnd.etsi.iptvueprofile+xml": { source: "iana" },
        "application/vnd.etsi.mcid+xml": { source: "iana" },
        "application/vnd.etsi.mheg5": { source: "iana" },
        "application/vnd.etsi.overload-control-policy-dataset+xml": { source: "iana" },
        "application/vnd.etsi.pstn+xml": { source: "iana" },
        "application/vnd.etsi.sci+xml": { source: "iana" },
        "application/vnd.etsi.simservs+xml": { source: "iana" },
        "application/vnd.etsi.timestamp-token": { source: "iana" },
        "application/vnd.etsi.tsl+xml": { source: "iana" },
        "application/vnd.etsi.tsl.der": { source: "iana" },
        "application/vnd.eudora.data": { source: "iana" },
        "application/vnd.ezpix-album": { source: "iana", extensions: ["ez2"] },
        "application/vnd.ezpix-package": { source: "iana", extensions: ["ez3"] },
        "application/vnd.f-secure.mobile": { source: "iana" },
        "application/vnd.fastcopy-disk-image": { source: "iana" },
        "application/vnd.fdf": { source: "iana", extensions: ["fdf"] },
        "application/vnd.fdsn.mseed": { source: "iana", extensions: ["mseed"] },
        "application/vnd.fdsn.seed": { source: "iana", extensions: ["seed", "dataless"] },
        "application/vnd.ffsns": { source: "iana" },
        "application/vnd.filmit.zfc": { source: "iana" },
        "application/vnd.fints": { source: "iana" },
        "application/vnd.firemonkeys.cloudcell": { source: "iana" },
        "application/vnd.flographit": { source: "iana", extensions: ["gph"] },
        "application/vnd.fluxtime.clip": { source: "iana", extensions: ["ftc"] },
        "application/vnd.font-fontforge-sfd": { source: "iana" },
        "application/vnd.framemaker": { source: "iana", extensions: ["fm", "frame", "maker", "book"] },
        "application/vnd.frogans.fnc": { source: "iana", extensions: ["fnc"] },
        "application/vnd.frogans.ltf": { source: "iana", extensions: ["ltf"] },
        "application/vnd.fsc.weblaunch": { source: "iana", extensions: ["fsc"] },
        "application/vnd.fujitsu.oasys": { source: "iana", extensions: ["oas"] },
        "application/vnd.fujitsu.oasys2": { source: "iana", extensions: ["oa2"] },
        "application/vnd.fujitsu.oasys3": { source: "iana", extensions: ["oa3"] },
        "application/vnd.fujitsu.oasysgp": { source: "iana", extensions: ["fg5"] },
        "application/vnd.fujitsu.oasysprs": { source: "iana", extensions: ["bh2"] },
        "application/vnd.fujixerox.art-ex": { source: "iana" },
        "application/vnd.fujixerox.art4": { source: "iana" },
        "application/vnd.fujixerox.ddd": { source: "iana", extensions: ["ddd"] },
        "application/vnd.fujixerox.docuworks": { source: "iana", extensions: ["xdw"] },
        "application/vnd.fujixerox.docuworks.binder": { source: "iana", extensions: ["xbd"] },
        "application/vnd.fujixerox.docuworks.container": { source: "iana" },
        "application/vnd.fujixerox.hbpl": { source: "iana" },
        "application/vnd.fut-misnet": { source: "iana" },
        "application/vnd.fuzzysheet": { source: "iana", extensions: ["fzs"] },
        "application/vnd.genomatix.tuxedo": { source: "iana", extensions: ["txd"] },
        "application/vnd.geo+json": { source: "iana", compressible: !0 },
        "application/vnd.geocube+xml": { source: "iana" },
        "application/vnd.geogebra.file": { source: "iana", extensions: ["ggb"] },
        "application/vnd.geogebra.tool": { source: "iana", extensions: ["ggt"] },
        "application/vnd.geometry-explorer": { source: "iana", extensions: ["gex", "gre"] },
        "application/vnd.geonext": { source: "iana", extensions: ["gxt"] },
        "application/vnd.geoplan": { source: "iana", extensions: ["g2w"] },
        "application/vnd.geospace": { source: "iana", extensions: ["g3w"] },
        "application/vnd.gerber": { source: "iana" },
        "application/vnd.globalplatform.card-content-mgt": { source: "iana" },
        "application/vnd.globalplatform.card-content-mgt-response": { source: "iana" },
        "application/vnd.gmx": { source: "iana", extensions: ["gmx"] },
        "application/vnd.google-apps.document": { compressible: !1, extensions: ["gdoc"] },
        "application/vnd.google-apps.presentation": { compressible: !1, extensions: ["gslides"] },
        "application/vnd.google-apps.spreadsheet": { compressible: !1, extensions: ["gsheet"] },
        "application/vnd.google-earth.kml+xml": { source: "iana", compressible: !0, extensions: ["kml"] },
        "application/vnd.google-earth.kmz": { source: "iana", compressible: !1, extensions: ["kmz"] },
        "application/vnd.gov.sk.e-form+xml": { source: "iana" },
        "application/vnd.gov.sk.e-form+zip": { source: "iana" },
        "application/vnd.gov.sk.xmldatacontainer+xml": { source: "iana" },
        "application/vnd.grafeq": { source: "iana", extensions: ["gqf", "gqs"] },
        "application/vnd.gridmp": { source: "iana" },
        "application/vnd.groove-account": { source: "iana", extensions: ["gac"] },
        "application/vnd.groove-help": { source: "iana", extensions: ["ghf"] },
        "application/vnd.groove-identity-message": { source: "iana", extensions: ["gim"] },
        "application/vnd.groove-injector": { source: "iana", extensions: ["grv"] },
        "application/vnd.groove-tool-message": { source: "iana", extensions: ["gtm"] },
        "application/vnd.groove-tool-template": { source: "iana", extensions: ["tpl"] },
        "application/vnd.groove-vcard": { source: "iana", extensions: ["vcg"] },
        "application/vnd.hal+json": { source: "iana", compressible: !0 },
        "application/vnd.hal+xml": { source: "iana", extensions: ["hal"] },
        "application/vnd.handheld-entertainment+xml": { source: "iana", extensions: ["zmm"] },
        "application/vnd.hbci": { source: "iana", extensions: ["hbci"] },
        "application/vnd.hcl-bireports": { source: "iana" },
        "application/vnd.hdt": { source: "iana" },
        "application/vnd.heroku+json": { source: "iana", compressible: !0 },
        "application/vnd.hhe.lesson-player": { source: "iana", extensions: ["les"] },
        "application/vnd.hp-hpgl": { source: "iana", extensions: ["hpgl"] },
        "application/vnd.hp-hpid": { source: "iana", extensions: ["hpid"] },
        "application/vnd.hp-hps": { source: "iana", extensions: ["hps"] },
        "application/vnd.hp-jlyt": { source: "iana", extensions: ["jlt"] },
        "application/vnd.hp-pcl": { source: "iana", extensions: ["pcl"] },
        "application/vnd.hp-pclxl": { source: "iana", extensions: ["pclxl"] },
        "application/vnd.httphone": { source: "iana" },
        "application/vnd.hydrostatix.sof-data": { source: "iana", extensions: ["sfd-hdstx"] },
        "application/vnd.hyperdrive+json": { source: "iana", compressible: !0 },
        "application/vnd.hzn-3d-crossword": { source: "iana" },
        "application/vnd.ibm.afplinedata": { source: "iana" },
        "application/vnd.ibm.electronic-media": { source: "iana" },
        "application/vnd.ibm.minipay": { source: "iana", extensions: ["mpy"] },
        "application/vnd.ibm.modcap": { source: "iana", extensions: ["afp", "listafp", "list3820"] },
        "application/vnd.ibm.rights-management": { source: "iana", extensions: ["irm"] },
        "application/vnd.ibm.secure-container": { source: "iana", extensions: ["sc"] },
        "application/vnd.iccprofile": { source: "iana", extensions: ["icc", "icm"] },
        "application/vnd.ieee.1905": { source: "iana" },
        "application/vnd.igloader": { source: "iana", extensions: ["igl"] },
        "application/vnd.immervision-ivp": { source: "iana", extensions: ["ivp"] },
        "application/vnd.immervision-ivu": { source: "iana", extensions: ["ivu"] },
        "application/vnd.ims.imsccv1p1": { source: "iana" },
        "application/vnd.ims.imsccv1p2": { source: "iana" },
        "application/vnd.ims.imsccv1p3": { source: "iana" },
        "application/vnd.ims.lis.v2.result+json": { source: "iana", compressible: !0 },
        "application/vnd.ims.lti.v2.toolconsumerprofile+json": { source: "iana", compressible: !0 },
        "application/vnd.ims.lti.v2.toolproxy+json": { source: "iana", compressible: !0 },
        "application/vnd.ims.lti.v2.toolproxy.id+json": { source: "iana", compressible: !0 },
        "application/vnd.ims.lti.v2.toolsettings+json": { source: "iana", compressible: !0 },
        "application/vnd.ims.lti.v2.toolsettings.simple+json": { source: "iana", compressible: !0 },
        "application/vnd.informedcontrol.rms+xml": { source: "iana" },
        "application/vnd.informix-visionary": { source: "iana" },
        "application/vnd.infotech.project": { source: "iana" },
        "application/vnd.infotech.project+xml": { source: "iana" },
        "application/vnd.innopath.wamp.notification": { source: "iana" },
        "application/vnd.insors.igm": { source: "iana", extensions: ["igm"] },
        "application/vnd.intercon.formnet": { source: "iana", extensions: ["xpw", "xpx"] },
        "application/vnd.intergeo": { source: "iana", extensions: ["i2g"] },
        "application/vnd.intertrust.digibox": { source: "iana" },
        "application/vnd.intertrust.nncp": { source: "iana" },
        "application/vnd.intu.qbo": { source: "iana", extensions: ["qbo"] },
        "application/vnd.intu.qfx": { source: "iana", extensions: ["qfx"] },
        "application/vnd.iptc.g2.catalogitem+xml": { source: "iana" },
        "application/vnd.iptc.g2.conceptitem+xml": { source: "iana" },
        "application/vnd.iptc.g2.knowledgeitem+xml": { source: "iana" },
        "application/vnd.iptc.g2.newsitem+xml": { source: "iana" },
        "application/vnd.iptc.g2.newsmessage+xml": { source: "iana" },
        "application/vnd.iptc.g2.packageitem+xml": { source: "iana" },
        "application/vnd.iptc.g2.planningitem+xml": { source: "iana" },
        "application/vnd.ipunplugged.rcprofile": { source: "iana", extensions: ["rcprofile"] },
        "application/vnd.irepository.package+xml": { source: "iana", extensions: ["irp"] },
        "application/vnd.is-xpr": { source: "iana", extensions: ["xpr"] },
        "application/vnd.isac.fcs": { source: "iana", extensions: ["fcs"] },
        "application/vnd.jam": { source: "iana", extensions: ["jam"] },
        "application/vnd.japannet-directory-service": { source: "iana" },
        "application/vnd.japannet-jpnstore-wakeup": { source: "iana" },
        "application/vnd.japannet-payment-wakeup": { source: "iana" },
        "application/vnd.japannet-registration": { source: "iana" },
        "application/vnd.japannet-registration-wakeup": { source: "iana" },
        "application/vnd.japannet-setstore-wakeup": { source: "iana" },
        "application/vnd.japannet-verification": { source: "iana" },
        "application/vnd.japannet-verification-wakeup": { source: "iana" },
        "application/vnd.jcp.javame.midlet-rms": { source: "iana", extensions: ["rms"] },
        "application/vnd.jisp": { source: "iana", extensions: ["jisp"] },
        "application/vnd.joost.joda-archive": { source: "iana", extensions: ["joda"] },
        "application/vnd.jsk.isdn-ngn": { source: "iana" },
        "application/vnd.kahootz": { source: "iana", extensions: ["ktz", "ktr"] },
        "application/vnd.kde.karbon": { source: "iana", extensions: ["karbon"] },
        "application/vnd.kde.kchart": { source: "iana", extensions: ["chrt"] },
        "application/vnd.kde.kformula": { source: "iana", extensions: ["kfo"] },
        "application/vnd.kde.kivio": { source: "iana", extensions: ["flw"] },
        "application/vnd.kde.kontour": { source: "iana", extensions: ["kon"] },
        "application/vnd.kde.kpresenter": { source: "iana", extensions: ["kpr", "kpt"] },
        "application/vnd.kde.kspread": { source: "iana", extensions: ["ksp"] },
        "application/vnd.kde.kword": { source: "iana", extensions: ["kwd", "kwt"] },
        "application/vnd.kenameaapp": { source: "iana", extensions: ["htke"] },
        "application/vnd.kidspiration": { source: "iana", extensions: ["kia"] },
        "application/vnd.kinar": { source: "iana", extensions: ["kne", "knp"] },
        "application/vnd.koan": { source: "iana", extensions: ["skp", "skd", "skt", "skm"] },
        "application/vnd.kodak-descriptor": { source: "iana", extensions: ["sse"] },
        "application/vnd.las.las+xml": { source: "iana", extensions: ["lasxml"] },
        "application/vnd.liberty-request+xml": { source: "iana" },
        "application/vnd.llamagraphics.life-balance.desktop": { source: "iana", extensions: ["lbd"] },
        "application/vnd.llamagraphics.life-balance.exchange+xml": { source: "iana", extensions: ["lbe"] },
        "application/vnd.lotus-1-2-3": { source: "iana", extensions: ["123"] },
        "application/vnd.lotus-approach": { source: "iana", extensions: ["apr"] },
        "application/vnd.lotus-freelance": { source: "iana", extensions: ["pre"] },
        "application/vnd.lotus-notes": { source: "iana", extensions: ["nsf"] },
        "application/vnd.lotus-organizer": { source: "iana", extensions: ["org"] },
        "application/vnd.lotus-screencam": { source: "iana", extensions: ["scm"] },
        "application/vnd.lotus-wordpro": { source: "iana", extensions: ["lwp"] },
        "application/vnd.macports.portpkg": { source: "iana", extensions: ["portpkg"] },
        "application/vnd.mapbox-vector-tile": { source: "iana" },
        "application/vnd.marlin.drm.actiontoken+xml": { source: "iana" },
        "application/vnd.marlin.drm.conftoken+xml": { source: "iana" },
        "application/vnd.marlin.drm.license+xml": { source: "iana" },
        "application/vnd.marlin.drm.mdcf": { source: "iana" },
        "application/vnd.mason+json": { source: "iana", compressible: !0 },
        "application/vnd.maxmind.maxmind-db": { source: "iana" },
        "application/vnd.mcd": { source: "iana", extensions: ["mcd"] },
        "application/vnd.medcalcdata": { source: "iana", extensions: ["mc1"] },
        "application/vnd.mediastation.cdkey": { source: "iana", extensions: ["cdkey"] },
        "application/vnd.meridian-slingshot": { source: "iana" },
        "application/vnd.mfer": { source: "iana", extensions: ["mwf"] },
        "application/vnd.mfmp": { source: "iana", extensions: ["mfm"] },
        "application/vnd.micro+json": { source: "iana", compressible: !0 },
        "application/vnd.micrografx.flo": { source: "iana", extensions: ["flo"] },
        "application/vnd.micrografx.igx": { source: "iana", extensions: ["igx"] },
        "application/vnd.microsoft.portable-executable": { source: "iana" },
        "application/vnd.miele+json": { source: "iana", compressible: !0 },
        "application/vnd.mif": { source: "iana", extensions: ["mif"] },
        "application/vnd.minisoft-hp3000-save": { source: "iana" },
        "application/vnd.mitsubishi.misty-guard.trustweb": { source: "iana" },
        "application/vnd.mobius.daf": { source: "iana", extensions: ["daf"] },
        "application/vnd.mobius.dis": { source: "iana", extensions: ["dis"] },
        "application/vnd.mobius.mbk": { source: "iana", extensions: ["mbk"] },
        "application/vnd.mobius.mqy": { source: "iana", extensions: ["mqy"] },
        "application/vnd.mobius.msl": { source: "iana", extensions: ["msl"] },
        "application/vnd.mobius.plc": { source: "iana", extensions: ["plc"] },
        "application/vnd.mobius.txf": { source: "iana", extensions: ["txf"] },
        "application/vnd.mophun.application": { source: "iana", extensions: ["mpn"] },
        "application/vnd.mophun.certificate": { source: "iana", extensions: ["mpc"] },
        "application/vnd.motorola.flexsuite": { source: "iana" },
        "application/vnd.motorola.flexsuite.adsi": { source: "iana" },
        "application/vnd.motorola.flexsuite.fis": { source: "iana" },
        "application/vnd.motorola.flexsuite.gotap": { source: "iana" },
        "application/vnd.motorola.flexsuite.kmr": { source: "iana" },
        "application/vnd.motorola.flexsuite.ttc": { source: "iana" },
        "application/vnd.motorola.flexsuite.wem": { source: "iana" },
        "application/vnd.motorola.iprm": { source: "iana" },
        "application/vnd.mozilla.xul+xml": { source: "iana", compressible: !0, extensions: ["xul"] },
        "application/vnd.ms-3mfdocument": { source: "iana" },
        "application/vnd.ms-artgalry": { source: "iana", extensions: ["cil"] },
        "application/vnd.ms-asf": { source: "iana" },
        "application/vnd.ms-cab-compressed": { source: "iana", extensions: ["cab"] },
        "application/vnd.ms-color.iccprofile": { source: "apache" },
        "application/vnd.ms-excel": { source: "iana", compressible: !1, extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"] },
        "application/vnd.ms-excel.addin.macroenabled.12": { source: "iana", extensions: ["xlam"] },
        "application/vnd.ms-excel.sheet.binary.macroenabled.12": { source: "iana", extensions: ["xlsb"] },
        "application/vnd.ms-excel.sheet.macroenabled.12": { source: "iana", extensions: ["xlsm"] },
        "application/vnd.ms-excel.template.macroenabled.12": { source: "iana", extensions: ["xltm"] },
        "application/vnd.ms-fontobject": { source: "iana", compressible: !0, extensions: ["eot"] },
        "application/vnd.ms-htmlhelp": { source: "iana", extensions: ["chm"] },
        "application/vnd.ms-ims": { source: "iana", extensions: ["ims"] },
        "application/vnd.ms-lrm": { source: "iana", extensions: ["lrm"] },
        "application/vnd.ms-office.activex+xml": { source: "iana" },
        "application/vnd.ms-officetheme": { source: "iana", extensions: ["thmx"] },
        "application/vnd.ms-opentype": { source: "apache", compressible: !0 },
        "application/vnd.ms-package.obfuscated-opentype": { source: "apache" },
        "application/vnd.ms-pki.seccat": { source: "apache", extensions: ["cat"] },
        "application/vnd.ms-pki.stl": { source: "apache", extensions: ["stl"] },
        "application/vnd.ms-playready.initiator+xml": { source: "iana" },
        "application/vnd.ms-powerpoint": { source: "iana", compressible: !1, extensions: ["ppt", "pps", "pot"] },
        "application/vnd.ms-powerpoint.addin.macroenabled.12": { source: "iana", extensions: ["ppam"] },
        "application/vnd.ms-powerpoint.presentation.macroenabled.12": { source: "iana", extensions: ["pptm"] },
        "application/vnd.ms-powerpoint.slide.macroenabled.12": { source: "iana", extensions: ["sldm"] },
        "application/vnd.ms-powerpoint.slideshow.macroenabled.12": { source: "iana", extensions: ["ppsm"] },
        "application/vnd.ms-powerpoint.template.macroenabled.12": { source: "iana", extensions: ["potm"] },
        "application/vnd.ms-printdevicecapabilities+xml": { source: "iana" },
        "application/vnd.ms-printing.printticket+xml": { source: "apache" },
        "application/vnd.ms-printschematicket+xml": { source: "iana" },
        "application/vnd.ms-project": { source: "iana", extensions: ["mpp", "mpt"] },
        "application/vnd.ms-tnef": { source: "iana" },
        "application/vnd.ms-windows.devicepairing": { source: "iana" },
        "application/vnd.ms-windows.nwprinting.oob": { source: "iana" },
        "application/vnd.ms-windows.printerpairing": { source: "iana" },
        "application/vnd.ms-windows.wsd.oob": { source: "iana" },
        "application/vnd.ms-wmdrm.lic-chlg-req": { source: "iana" },
        "application/vnd.ms-wmdrm.lic-resp": { source: "iana" },
        "application/vnd.ms-wmdrm.meter-chlg-req": { source: "iana" },
        "application/vnd.ms-wmdrm.meter-resp": { source: "iana" },
        "application/vnd.ms-word.document.macroenabled.12": { source: "iana", extensions: ["docm"] },
        "application/vnd.ms-word.template.macroenabled.12": { source: "iana", extensions: ["dotm"] },
        "application/vnd.ms-works": { source: "iana", extensions: ["wps", "wks", "wcm", "wdb"] },
        "application/vnd.ms-wpl": { source: "iana", extensions: ["wpl"] },
        "application/vnd.ms-xpsdocument": { source: "iana", compressible: !1, extensions: ["xps"] },
        "application/vnd.msa-disk-image": { source: "iana" },
        "application/vnd.mseq": { source: "iana", extensions: ["mseq"] },
        "application/vnd.msign": { source: "iana" },
        "application/vnd.multiad.creator": { source: "iana" },
        "application/vnd.multiad.creator.cif": { source: "iana" },
        "application/vnd.music-niff": { source: "iana" },
        "application/vnd.musician": { source: "iana", extensions: ["mus"] },
        "application/vnd.muvee.style": { source: "iana", extensions: ["msty"] },
        "application/vnd.mynfc": { source: "iana", extensions: ["taglet"] },
        "application/vnd.ncd.control": { source: "iana" },
        "application/vnd.ncd.reference": { source: "iana" },
        "application/vnd.nearst.inv+json": { source: "iana", compressible: !0 },
        "application/vnd.nervana": { source: "iana" },
        "application/vnd.netfpx": { source: "iana" },
        "application/vnd.neurolanguage.nlu": { source: "iana", extensions: ["nlu"] },
        "application/vnd.nintendo.nitro.rom": { source: "iana" },
        "application/vnd.nintendo.snes.rom": { source: "iana" },
        "application/vnd.nitf": { source: "iana", extensions: ["ntf", "nitf"] },
        "application/vnd.noblenet-directory": { source: "iana", extensions: ["nnd"] },
        "application/vnd.noblenet-sealer": { source: "iana", extensions: ["nns"] },
        "application/vnd.noblenet-web": { source: "iana", extensions: ["nnw"] },
        "application/vnd.nokia.catalogs": { source: "iana" },
        "application/vnd.nokia.conml+wbxml": { source: "iana" },
        "application/vnd.nokia.conml+xml": { source: "iana" },
        "application/vnd.nokia.iptv.config+xml": { source: "iana" },
        "application/vnd.nokia.isds-radio-presets": { source: "iana" },
        "application/vnd.nokia.landmark+wbxml": { source: "iana" },
        "application/vnd.nokia.landmark+xml": { source: "iana" },
        "application/vnd.nokia.landmarkcollection+xml": { source: "iana" },
        "application/vnd.nokia.n-gage.ac+xml": { source: "iana" },
        "application/vnd.nokia.n-gage.data": { source: "iana", extensions: ["ngdat"] },
        "application/vnd.nokia.n-gage.symbian.install": { source: "iana", extensions: ["n-gage"] },
        "application/vnd.nokia.ncd": { source: "iana" },
        "application/vnd.nokia.pcd+wbxml": { source: "iana" },
        "application/vnd.nokia.pcd+xml": { source: "iana" },
        "application/vnd.nokia.radio-preset": { source: "iana", extensions: ["rpst"] },
        "application/vnd.nokia.radio-presets": { source: "iana", extensions: ["rpss"] },
        "application/vnd.novadigm.edm": { source: "iana", extensions: ["edm"] },
        "application/vnd.novadigm.edx": { source: "iana", extensions: ["edx"] },
        "application/vnd.novadigm.ext": { source: "iana", extensions: ["ext"] },
        "application/vnd.ntt-local.content-share": { source: "iana" },
        "application/vnd.ntt-local.file-transfer": { source: "iana" },
        "application/vnd.ntt-local.ogw_remote-access": { source: "iana" },
        "application/vnd.ntt-local.sip-ta_remote": { source: "iana" },
        "application/vnd.ntt-local.sip-ta_tcp_stream": { source: "iana" },
        "application/vnd.oasis.opendocument.chart": { source: "iana", extensions: ["odc"] },
        "application/vnd.oasis.opendocument.chart-template": { source: "iana", extensions: ["otc"] },
        "application/vnd.oasis.opendocument.database": { source: "iana", extensions: ["odb"] },
        "application/vnd.oasis.opendocument.formula": { source: "iana", extensions: ["odf"] },
        "application/vnd.oasis.opendocument.formula-template": { source: "iana", extensions: ["odft"] },
        "application/vnd.oasis.opendocument.graphics": { source: "iana", compressible: !1, extensions: ["odg"] },
        "application/vnd.oasis.opendocument.graphics-template": { source: "iana", extensions: ["otg"] },
        "application/vnd.oasis.opendocument.image": { source: "iana", extensions: ["odi"] },
        "application/vnd.oasis.opendocument.image-template": { source: "iana", extensions: ["oti"] },
        "application/vnd.oasis.opendocument.presentation": { source: "iana", compressible: !1, extensions: ["odp"] },
        "application/vnd.oasis.opendocument.presentation-template": { source: "iana", extensions: ["otp"] },
        "application/vnd.oasis.opendocument.spreadsheet": { source: "iana", compressible: !1, extensions: ["ods"] },
        "application/vnd.oasis.opendocument.spreadsheet-template": { source: "iana", extensions: ["ots"] },
        "application/vnd.oasis.opendocument.text": { source: "iana", compressible: !1, extensions: ["odt"] },
        "application/vnd.oasis.opendocument.text-master": { source: "iana", extensions: ["odm"] },
        "application/vnd.oasis.opendocument.text-template": { source: "iana", extensions: ["ott"] },
        "application/vnd.oasis.opendocument.text-web": { source: "iana", extensions: ["oth"] },
        "application/vnd.obn": { source: "iana" },
        "application/vnd.oftn.l10n+json": { source: "iana", compressible: !0 },
        "application/vnd.oipf.contentaccessdownload+xml": { source: "iana" },
        "application/vnd.oipf.contentaccessstreaming+xml": { source: "iana" },
        "application/vnd.oipf.cspg-hexbinary": { source: "iana" },
        "application/vnd.oipf.dae.svg+xml": { source: "iana" },
        "application/vnd.oipf.dae.xhtml+xml": { source: "iana" },
        "application/vnd.oipf.mippvcontrolmessage+xml": { source: "iana" },
        "application/vnd.oipf.pae.gem": { source: "iana" },
        "application/vnd.oipf.spdiscovery+xml": { source: "iana" },
        "application/vnd.oipf.spdlist+xml": { source: "iana" },
        "application/vnd.oipf.ueprofile+xml": { source: "iana" },
        "application/vnd.oipf.userprofile+xml": { source: "iana" },
        "application/vnd.olpc-sugar": { source: "iana", extensions: ["xo"] },
        "application/vnd.oma-scws-config": { source: "iana" },
        "application/vnd.oma-scws-http-request": { source: "iana" },
        "application/vnd.oma-scws-http-response": { source: "iana" },
        "application/vnd.oma.bcast.associated-procedure-parameter+xml": { source: "iana" },
        "application/vnd.oma.bcast.drm-trigger+xml": { source: "iana" },
        "application/vnd.oma.bcast.imd+xml": { source: "iana" },
        "application/vnd.oma.bcast.ltkm": { source: "iana" },
        "application/vnd.oma.bcast.notification+xml": { source: "iana" },
        "application/vnd.oma.bcast.provisioningtrigger": { source: "iana" },
        "application/vnd.oma.bcast.sgboot": { source: "iana" },
        "application/vnd.oma.bcast.sgdd+xml": { source: "iana" },
        "application/vnd.oma.bcast.sgdu": { source: "iana" },
        "application/vnd.oma.bcast.simple-symbol-container": { source: "iana" },
        "application/vnd.oma.bcast.smartcard-trigger+xml": { source: "iana" },
        "application/vnd.oma.bcast.sprov+xml": { source: "iana" },
        "application/vnd.oma.bcast.stkm": { source: "iana" },
        "application/vnd.oma.cab-address-book+xml": { source: "iana" },
        "application/vnd.oma.cab-feature-handler+xml": { source: "iana" },
        "application/vnd.oma.cab-pcc+xml": { source: "iana" },
        "application/vnd.oma.cab-subs-invite+xml": { source: "iana" },
        "application/vnd.oma.cab-user-prefs+xml": { source: "iana" },
        "application/vnd.oma.dcd": { source: "iana" },
        "application/vnd.oma.dcdc": { source: "iana" },
        "application/vnd.oma.dd2+xml": { source: "iana", extensions: ["dd2"] },
        "application/vnd.oma.drm.risd+xml": { source: "iana" },
        "application/vnd.oma.group-usage-list+xml": { source: "iana" },
        "application/vnd.oma.lwm2m+json": { source: "iana", compressible: !0 },
        "application/vnd.oma.lwm2m+tlv": { source: "iana" },
        "application/vnd.oma.pal+xml": { source: "iana" },
        "application/vnd.oma.poc.detailed-progress-report+xml": { source: "iana" },
        "application/vnd.oma.poc.final-report+xml": { source: "iana" },
        "application/vnd.oma.poc.groups+xml": { source: "iana" },
        "application/vnd.oma.poc.invocation-descriptor+xml": { source: "iana" },
        "application/vnd.oma.poc.optimized-progress-report+xml": { source: "iana" },
        "application/vnd.oma.push": { source: "iana" },
        "application/vnd.oma.scidm.messages+xml": { source: "iana" },
        "application/vnd.oma.xcap-directory+xml": { source: "iana" },
        "application/vnd.omads-email+xml": { source: "iana" },
        "application/vnd.omads-file+xml": { source: "iana" },
        "application/vnd.omads-folder+xml": { source: "iana" },
        "application/vnd.omaloc-supl-init": { source: "iana" },
        "application/vnd.onepager": { source: "iana" },
        "application/vnd.openblox.game+xml": { source: "iana" },
        "application/vnd.openblox.game-binary": { source: "iana" },
        "application/vnd.openeye.oeb": { source: "iana" },
        "application/vnd.openofficeorg.extension": { source: "apache", extensions: ["oxt"] },
        "application/vnd.openstreetmap.data+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.custom-properties+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.drawing+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.extended-properties+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.presentationml-template": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.presentationml.presentation": { source: "iana", compressible: !1, extensions: ["pptx"] },
        "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.presentationml.slide": { source: "iana", extensions: ["sldx"] },
        "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.presentationml.slideshow": { source: "iana", extensions: ["ppsx"] },
        "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.presentationml.template": { source: "apache", extensions: ["potx"] },
        "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml-template": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
            source: "iana",
            compressible: !1,
            extensions: ["xlsx"]
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.template": { source: "apache", extensions: ["xltx"] },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.theme+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.themeoverride+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.vmldrawing": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.wordprocessingml-template": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { source: "iana", compressible: !1, extensions: ["docx"] },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.template": { source: "apache", extensions: ["dotx"] },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": { source: "iana" },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": { source: "iana" },
        "application/vnd.openxmlformats-package.core-properties+xml": { source: "iana" },
        "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": { source: "iana" },
        "application/vnd.openxmlformats-package.relationships+xml": { source: "iana" },
        "application/vnd.oracle.resource+json": { source: "iana", compressible: !0 },
        "application/vnd.orange.indata": { source: "iana" },
        "application/vnd.osa.netdeploy": { source: "iana" },
        "application/vnd.osgeo.mapguide.package": { source: "iana", extensions: ["mgp"] },
        "application/vnd.osgi.bundle": { source: "iana" },
        "application/vnd.osgi.dp": { source: "iana", extensions: ["dp"] },
        "application/vnd.osgi.subsystem": { source: "iana", extensions: ["esa"] },
        "application/vnd.otps.ct-kip+xml": { source: "iana" },
        "application/vnd.oxli.countgraph": { source: "iana" },
        "application/vnd.pagerduty+json": { source: "iana", compressible: !0 },
        "application/vnd.palm": { source: "iana", extensions: ["pdb", "pqa", "oprc"] },
        "application/vnd.panoply": { source: "iana" },
        "application/vnd.paos+xml": { source: "iana" },
        "application/vnd.paos.xml": { source: "apache" },
        "application/vnd.pawaafile": { source: "iana", extensions: ["paw"] },
        "application/vnd.pcos": { source: "iana" },
        "application/vnd.pg.format": { source: "iana", extensions: ["str"] },
        "application/vnd.pg.osasli": { source: "iana", extensions: ["ei6"] },
        "application/vnd.piaccess.application-licence": { source: "iana" },
        "application/vnd.picsel": { source: "iana", extensions: ["efif"] },
        "application/vnd.pmi.widget": { source: "iana", extensions: ["wg"] },
        "application/vnd.poc.group-advertisement+xml": { source: "iana" },
        "application/vnd.pocketlearn": { source: "iana", extensions: ["plf"] },
        "application/vnd.powerbuilder6": { source: "iana", extensions: ["pbd"] },
        "application/vnd.powerbuilder6-s": { source: "iana" },
        "application/vnd.powerbuilder7": { source: "iana" },
        "application/vnd.powerbuilder7-s": { source: "iana" },
        "application/vnd.powerbuilder75": { source: "iana" },
        "application/vnd.powerbuilder75-s": { source: "iana" },
        "application/vnd.preminet": { source: "iana" },
        "application/vnd.previewsystems.box": { source: "iana", extensions: ["box"] },
        "application/vnd.proteus.magazine": { source: "iana", extensions: ["mgz"] },
        "application/vnd.publishare-delta-tree": { source: "iana", extensions: ["qps"] },
        "application/vnd.pvi.ptid1": { source: "iana", extensions: ["ptid"] },
        "application/vnd.pwg-multiplexed": { source: "iana" },
        "application/vnd.pwg-xhtml-print+xml": { source: "iana" },
        "application/vnd.qualcomm.brew-app-res": { source: "iana" },
        "application/vnd.quarantainenet": { source: "iana" },
        "application/vnd.quark.quarkxpress": { source: "iana", extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"] },
        "application/vnd.quobject-quoxdocument": { source: "iana" },
        "application/vnd.radisys.moml+xml": { source: "iana" },
        "application/vnd.radisys.msml+xml": { source: "iana" },
        "application/vnd.radisys.msml-audit+xml": { source: "iana" },
        "application/vnd.radisys.msml-audit-conf+xml": { source: "iana" },
        "application/vnd.radisys.msml-audit-conn+xml": { source: "iana" },
        "application/vnd.radisys.msml-audit-dialog+xml": { source: "iana" },
        "application/vnd.radisys.msml-audit-stream+xml": { source: "iana" },
        "application/vnd.radisys.msml-conf+xml": { source: "iana" },
        "application/vnd.radisys.msml-dialog+xml": { source: "iana" },
        "application/vnd.radisys.msml-dialog-base+xml": { source: "iana" },
        "application/vnd.radisys.msml-dialog-fax-detect+xml": { source: "iana" },
        "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": { source: "iana" },
        "application/vnd.radisys.msml-dialog-group+xml": { source: "iana" },
        "application/vnd.radisys.msml-dialog-speech+xml": { source: "iana" },
        "application/vnd.radisys.msml-dialog-transform+xml": { source: "iana" },
        "application/vnd.rainstor.data": { source: "iana" },
        "application/vnd.rapid": { source: "iana" },
        "application/vnd.rar": { source: "iana" },
        "application/vnd.realvnc.bed": { source: "iana", extensions: ["bed"] },
        "application/vnd.recordare.musicxml": { source: "iana", extensions: ["mxl"] },
        "application/vnd.recordare.musicxml+xml": { source: "iana", extensions: ["musicxml"] },
        "application/vnd.renlearn.rlprint": { source: "iana" },
        "application/vnd.rig.cryptonote": { source: "iana", extensions: ["cryptonote"] },
        "application/vnd.rim.cod": { source: "apache", extensions: ["cod"] },
        "application/vnd.rn-realmedia": { source: "apache", extensions: ["rm"] },
        "application/vnd.rn-realmedia-vbr": { source: "apache", extensions: ["rmvb"] },
        "application/vnd.route66.link66+xml": { source: "iana", extensions: ["link66"] },
        "application/vnd.rs-274x": { source: "iana" },
        "application/vnd.ruckus.download": { source: "iana" },
        "application/vnd.s3sms": { source: "iana" },
        "application/vnd.sailingtracker.track": { source: "iana", extensions: ["st"] },
        "application/vnd.sbm.cid": { source: "iana" },
        "application/vnd.sbm.mid2": { source: "iana" },
        "application/vnd.scribus": { source: "iana" },
        "application/vnd.sealed.3df": { source: "iana" },
        "application/vnd.sealed.csf": { source: "iana" },
        "application/vnd.sealed.doc": { source: "iana" },
        "application/vnd.sealed.eml": { source: "iana" },
        "application/vnd.sealed.mht": { source: "iana" },
        "application/vnd.sealed.net": { source: "iana" },
        "application/vnd.sealed.ppt": { source: "iana" },
        "application/vnd.sealed.tiff": { source: "iana" },
        "application/vnd.sealed.xls": { source: "iana" },
        "application/vnd.sealedmedia.softseal.html": { source: "iana" },
        "application/vnd.sealedmedia.softseal.pdf": { source: "iana" },
        "application/vnd.seemail": { source: "iana", extensions: ["see"] },
        "application/vnd.sema": { source: "iana", extensions: ["sema"] },
        "application/vnd.semd": { source: "iana", extensions: ["semd"] },
        "application/vnd.semf": { source: "iana", extensions: ["semf"] },
        "application/vnd.shana.informed.formdata": { source: "iana", extensions: ["ifm"] },
        "application/vnd.shana.informed.formtemplate": { source: "iana", extensions: ["itp"] },
        "application/vnd.shana.informed.interchange": { source: "iana", extensions: ["iif"] },
        "application/vnd.shana.informed.package": { source: "iana", extensions: ["ipk"] },
        "application/vnd.simtech-mindmapper": { source: "iana", extensions: ["twd", "twds"] },
        "application/vnd.siren+json": { source: "iana", compressible: !0 },
        "application/vnd.smaf": { source: "iana", extensions: ["mmf"] },
        "application/vnd.smart.notebook": { source: "iana" },
        "application/vnd.smart.teacher": { source: "iana", extensions: ["teacher"] },
        "application/vnd.software602.filler.form+xml": { source: "iana" },
        "application/vnd.software602.filler.form-xml-zip": { source: "iana" },
        "application/vnd.solent.sdkm+xml": { source: "iana", extensions: ["sdkm", "sdkd"] },
        "application/vnd.spotfire.dxp": { source: "iana", extensions: ["dxp"] },
        "application/vnd.spotfire.sfs": { source: "iana", extensions: ["sfs"] },
        "application/vnd.sss-cod": { source: "iana" },
        "application/vnd.sss-dtf": { source: "iana" },
        "application/vnd.sss-ntf": { source: "iana" },
        "application/vnd.stardivision.calc": { source: "apache", extensions: ["sdc"] },
        "application/vnd.stardivision.draw": { source: "apache", extensions: ["sda"] },
        "application/vnd.stardivision.impress": { source: "apache", extensions: ["sdd"] },
        "application/vnd.stardivision.math": { source: "apache", extensions: ["smf"] },
        "application/vnd.stardivision.writer": { source: "apache", extensions: ["sdw", "vor"] },
        "application/vnd.stardivision.writer-global": { source: "apache", extensions: ["sgl"] },
        "application/vnd.stepmania.package": { source: "iana", extensions: ["smzip"] },
        "application/vnd.stepmania.stepchart": { source: "iana", extensions: ["sm"] },
        "application/vnd.street-stream": { source: "iana" },
        "application/vnd.sun.wadl+xml": { source: "iana" },
        "application/vnd.sun.xml.calc": { source: "apache", extensions: ["sxc"] },
        "application/vnd.sun.xml.calc.template": { source: "apache", extensions: ["stc"] },
        "application/vnd.sun.xml.draw": { source: "apache", extensions: ["sxd"] },
        "application/vnd.sun.xml.draw.template": { source: "apache", extensions: ["std"] },
        "application/vnd.sun.xml.impress": { source: "apache", extensions: ["sxi"] },
        "application/vnd.sun.xml.impress.template": { source: "apache", extensions: ["sti"] },
        "application/vnd.sun.xml.math": { source: "apache", extensions: ["sxm"] },
        "application/vnd.sun.xml.writer": { source: "apache", extensions: ["sxw"] },
        "application/vnd.sun.xml.writer.global": { source: "apache", extensions: ["sxg"] },
        "application/vnd.sun.xml.writer.template": { source: "apache", extensions: ["stw"] },
        "application/vnd.sus-calendar": { source: "iana", extensions: ["sus", "susp"] },
        "application/vnd.svd": { source: "iana", extensions: ["svd"] },
        "application/vnd.swiftview-ics": { source: "iana" },
        "application/vnd.symbian.install": { source: "apache", extensions: ["sis", "sisx"] },
        "application/vnd.syncml+xml": { source: "iana", extensions: ["xsm"] },
        "application/vnd.syncml.dm+wbxml": { source: "iana", extensions: ["bdm"] },
        "application/vnd.syncml.dm+xml": { source: "iana", extensions: ["xdm"] },
        "application/vnd.syncml.dm.notification": { source: "iana" },
        "application/vnd.syncml.dmddf+wbxml": { source: "iana" },
        "application/vnd.syncml.dmddf+xml": { source: "iana" },
        "application/vnd.syncml.dmtnds+wbxml": { source: "iana" },
        "application/vnd.syncml.dmtnds+xml": { source: "iana" },
        "application/vnd.syncml.ds.notification": { source: "iana" },
        "application/vnd.tao.intent-module-archive": { source: "iana", extensions: ["tao"] },
        "application/vnd.tcpdump.pcap": { source: "iana", extensions: ["pcap", "cap", "dmp"] },
        "application/vnd.tmd.mediaflex.api+xml": { source: "iana" },
        "application/vnd.tml": { source: "iana" },
        "application/vnd.tmobile-livetv": { source: "iana", extensions: ["tmo"] },
        "application/vnd.tri.onesource": { source: "iana" },
        "application/vnd.trid.tpt": { source: "iana", extensions: ["tpt"] },
        "application/vnd.triscape.mxs": { source: "iana", extensions: ["mxs"] },
        "application/vnd.trueapp": { source: "iana", extensions: ["tra"] },
        "application/vnd.truedoc": { source: "iana" },
        "application/vnd.ubisoft.webplayer": { source: "iana" },
        "application/vnd.ufdl": { source: "iana", extensions: ["ufd", "ufdl"] },
        "application/vnd.uiq.theme": { source: "iana", extensions: ["utz"] },
        "application/vnd.umajin": { source: "iana", extensions: ["umj"] },
        "application/vnd.unity": { source: "iana", extensions: ["unityweb"] },
        "application/vnd.uoml+xml": { source: "iana", extensions: ["uoml"] },
        "application/vnd.uplanet.alert": { source: "iana" },
        "application/vnd.uplanet.alert-wbxml": { source: "iana" },
        "application/vnd.uplanet.bearer-choice": { source: "iana" },
        "application/vnd.uplanet.bearer-choice-wbxml": { source: "iana" },
        "application/vnd.uplanet.cacheop": { source: "iana" },
        "application/vnd.uplanet.cacheop-wbxml": { source: "iana" },
        "application/vnd.uplanet.channel": { source: "iana" },
        "application/vnd.uplanet.channel-wbxml": { source: "iana" },
        "application/vnd.uplanet.list": { source: "iana" },
        "application/vnd.uplanet.list-wbxml": { source: "iana" },
        "application/vnd.uplanet.listcmd": { source: "iana" },
        "application/vnd.uplanet.listcmd-wbxml": { source: "iana" },
        "application/vnd.uplanet.signal": { source: "iana" },
        "application/vnd.uri-map": { source: "iana" },
        "application/vnd.valve.source.material": { source: "iana" },
        "application/vnd.vcx": { source: "iana", extensions: ["vcx"] },
        "application/vnd.vd-study": { source: "iana" },
        "application/vnd.vectorworks": { source: "iana" },
        "application/vnd.vel+json": { source: "iana", compressible: !0 },
        "application/vnd.verimatrix.vcas": { source: "iana" },
        "application/vnd.vidsoft.vidconference": { source: "iana" },
        "application/vnd.visio": { source: "iana", extensions: ["vsd", "vst", "vss", "vsw"] },
        "application/vnd.visionary": { source: "iana", extensions: ["vis"] },
        "application/vnd.vividence.scriptfile": { source: "iana" },
        "application/vnd.vsf": { source: "iana", extensions: ["vsf"] },
        "application/vnd.wap.sic": { source: "iana" },
        "application/vnd.wap.slc": { source: "iana" },
        "application/vnd.wap.wbxml": { source: "iana", extensions: ["wbxml"] },
        "application/vnd.wap.wmlc": { source: "iana", extensions: ["wmlc"] },
        "application/vnd.wap.wmlscriptc": { source: "iana", extensions: ["wmlsc"] },
        "application/vnd.webturbo": { source: "iana", extensions: ["wtb"] },
        "application/vnd.wfa.p2p": { source: "iana" },
        "application/vnd.wfa.wsc": { source: "iana" },
        "application/vnd.windows.devicepairing": { source: "iana" },
        "application/vnd.wmc": { source: "iana" },
        "application/vnd.wmf.bootstrap": { source: "iana" },
        "application/vnd.wolfram.mathematica": { source: "iana" },
        "application/vnd.wolfram.mathematica.package": { source: "iana" },
        "application/vnd.wolfram.player": { source: "iana", extensions: ["nbp"] },
        "application/vnd.wordperfect": { source: "iana", extensions: ["wpd"] },
        "application/vnd.wqd": { source: "iana", extensions: ["wqd"] },
        "application/vnd.wrq-hp3000-labelled": { source: "iana" },
        "application/vnd.wt.stf": { source: "iana", extensions: ["stf"] },
        "application/vnd.wv.csp+wbxml": { source: "iana" },
        "application/vnd.wv.csp+xml": { source: "iana" },
        "application/vnd.wv.ssp+xml": { source: "iana" },
        "application/vnd.xacml+json": { source: "iana", compressible: !0 },
        "application/vnd.xara": { source: "iana", extensions: ["xar"] },
        "application/vnd.xfdl": { source: "iana", extensions: ["xfdl"] },
        "application/vnd.xfdl.webform": { source: "iana" },
        "application/vnd.xmi+xml": { source: "iana" },
        "application/vnd.xmpie.cpkg": { source: "iana" },
        "application/vnd.xmpie.dpkg": { source: "iana" },
        "application/vnd.xmpie.plan": { source: "iana" },
        "application/vnd.xmpie.ppkg": { source: "iana" },
        "application/vnd.xmpie.xlim": { source: "iana" },
        "application/vnd.yamaha.hv-dic": { source: "iana", extensions: ["hvd"] },
        "application/vnd.yamaha.hv-script": { source: "iana", extensions: ["hvs"] },
        "application/vnd.yamaha.hv-voice": { source: "iana", extensions: ["hvp"] },
        "application/vnd.yamaha.openscoreformat": { source: "iana", extensions: ["osf"] },
        "application/vnd.yamaha.openscoreformat.osfpvg+xml": { source: "iana", extensions: ["osfpvg"] },
        "application/vnd.yamaha.remote-setup": { source: "iana" },
        "application/vnd.yamaha.smaf-audio": { source: "iana", extensions: ["saf"] },
        "application/vnd.yamaha.smaf-phrase": { source: "iana", extensions: ["spf"] },
        "application/vnd.yamaha.through-ngn": { source: "iana" },
        "application/vnd.yamaha.tunnel-udpencap": { source: "iana" },
        "application/vnd.yaoweme": { source: "iana" },
        "application/vnd.yellowriver-custom-menu": { source: "iana", extensions: ["cmp"] },
        "application/vnd.zul": { source: "iana", extensions: ["zir", "zirz"] },
        "application/vnd.zzazz.deck+xml": { source: "iana", extensions: ["zaz"] },
        "application/voicexml+xml": { source: "iana", extensions: ["vxml"] },
        "application/vq-rtcpxr": { source: "iana" },
        "application/watcherinfo+xml": { source: "iana" },
        "application/whoispp-query": { source: "iana" },
        "application/whoispp-response": { source: "iana" },
        "application/widget": { source: "iana", extensions: ["wgt"] },
        "application/winhlp": { source: "apache", extensions: ["hlp"] },
        "application/wita": { source: "iana" },
        "application/wordperfect5.1": { source: "iana" },
        "application/wsdl+xml": { source: "iana", extensions: ["wsdl"] },
        "application/wspolicy+xml": { source: "iana", extensions: ["wspolicy"] },
        "application/x-7z-compressed": { source: "apache", compressible: !1, extensions: ["7z"] },
        "application/x-abiword": { source: "apache", extensions: ["abw"] },
        "application/x-ace-compressed": { source: "apache", extensions: ["ace"] },
        "application/x-amf": { source: "apache" },
        "application/x-apple-diskimage": { source: "apache", extensions: ["dmg"] },
        "application/x-authorware-bin": { source: "apache", extensions: ["aab", "x32", "u32", "vox"] },
        "application/x-authorware-map": { source: "apache", extensions: ["aam"] },
        "application/x-authorware-seg": { source: "apache", extensions: ["aas"] },
        "application/x-bcpio": { source: "apache", extensions: ["bcpio"] },
        "application/x-bdoc": { compressible: !1, extensions: ["bdoc"] },
        "application/x-bittorrent": { source: "apache", extensions: ["torrent"] },
        "application/x-blorb": { source: "apache", extensions: ["blb", "blorb"] },
        "application/x-bzip": { source: "apache", compressible: !1, extensions: ["bz"] },
        "application/x-bzip2": { source: "apache", compressible: !1, extensions: ["bz2", "boz"] },
        "application/x-cbr": { source: "apache", extensions: ["cbr", "cba", "cbt", "cbz", "cb7"] },
        "application/x-cdlink": { source: "apache", extensions: ["vcd"] },
        "application/x-cfs-compressed": { source: "apache", extensions: ["cfs"] },
        "application/x-chat": { source: "apache", extensions: ["chat"] },
        "application/x-chess-pgn": { source: "apache", extensions: ["pgn"] },
        "application/x-chrome-extension": { extensions: ["crx"] },
        "application/x-cocoa": { source: "nginx", extensions: ["cco"] },
        "application/x-compress": { source: "apache" },
        "application/x-conference": { source: "apache", extensions: ["nsc"] },
        "application/x-cpio": { source: "apache", extensions: ["cpio"] },
        "application/x-csh": { source: "apache", extensions: ["csh"] },
        "application/x-deb": { compressible: !1 },
        "application/x-debian-package": { source: "apache", extensions: ["deb", "udeb"] },
        "application/x-dgc-compressed": { source: "apache", extensions: ["dgc"] },
        "application/x-director": { source: "apache", extensions: ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"] },
        "application/x-doom": { source: "apache", extensions: ["wad"] },
        "application/x-dtbncx+xml": { source: "apache", extensions: ["ncx"] },
        "application/x-dtbook+xml": { source: "apache", extensions: ["dtb"] },
        "application/x-dtbresource+xml": { source: "apache", extensions: ["res"] },
        "application/x-dvi": { source: "apache", compressible: !1, extensions: ["dvi"] },
        "application/x-envoy": { source: "apache", extensions: ["evy"] },
        "application/x-eva": { source: "apache", extensions: ["eva"] },
        "application/x-font-bdf": { source: "apache", extensions: ["bdf"] },
        "application/x-font-dos": { source: "apache" },
        "application/x-font-framemaker": { source: "apache" },
        "application/x-font-ghostscript": { source: "apache", extensions: ["gsf"] },
        "application/x-font-libgrx": { source: "apache" },
        "application/x-font-linux-psf": { source: "apache", extensions: ["psf"] },
        "application/x-font-otf": { source: "apache", compressible: !0, extensions: ["otf"] },
        "application/x-font-pcf": { source: "apache", extensions: ["pcf"] },
        "application/x-font-snf": { source: "apache", extensions: ["snf"] },
        "application/x-font-speedo": { source: "apache" },
        "application/x-font-sunos-news": { source: "apache" },
        "application/x-font-ttf": { source: "apache", compressible: !0, extensions: ["ttf", "ttc"] },
        "application/x-font-type1": { source: "apache", extensions: ["pfa", "pfb", "pfm", "afm"] },
        "application/x-font-vfont": { source: "apache" },
        "application/x-freearc": { source: "apache", extensions: ["arc"] },
        "application/x-futuresplash": { source: "apache", extensions: ["spl"] },
        "application/x-gca-compressed": { source: "apache", extensions: ["gca"] },
        "application/x-glulx": { source: "apache", extensions: ["ulx"] },
        "application/x-gnumeric": { source: "apache", extensions: ["gnumeric"] },
        "application/x-gramps-xml": { source: "apache", extensions: ["gramps"] },
        "application/x-gtar": { source: "apache", extensions: ["gtar"] },
        "application/x-gzip": { source: "apache" },
        "application/x-hdf": { source: "apache", extensions: ["hdf"] },
        "application/x-httpd-php": { compressible: !0, extensions: ["php"] },
        "application/x-install-instructions": { source: "apache", extensions: ["install"] },
        "application/x-iso9660-image": { source: "apache", extensions: ["iso"] },
        "application/x-java-archive-diff": { source: "nginx", extensions: ["jardiff"] },
        "application/x-java-jnlp-file": { source: "apache", compressible: !1, extensions: ["jnlp"] },
        "application/x-javascript": { compressible: !0 },
        "application/x-latex": { source: "apache", compressible: !1, extensions: ["latex"] },
        "application/x-lua-bytecode": { extensions: ["luac"] },
        "application/x-lzh-compressed": { source: "apache", extensions: ["lzh", "lha"] },
        "application/x-makeself": { source: "nginx", extensions: ["run"] },
        "application/x-mie": { source: "apache", extensions: ["mie"] },
        "application/x-mobipocket-ebook": { source: "apache", extensions: ["prc", "mobi"] },
        "application/x-mpegurl": { compressible: !1 },
        "application/x-ms-application": { source: "apache", extensions: ["application"] },
        "application/x-ms-shortcut": { source: "apache", extensions: ["lnk"] },
        "application/x-ms-wmd": { source: "apache", extensions: ["wmd"] },
        "application/x-ms-wmz": { source: "apache", extensions: ["wmz"] },
        "application/x-ms-xbap": { source: "apache", extensions: ["xbap"] },
        "application/x-msaccess": { source: "apache", extensions: ["mdb"] },
        "application/x-msbinder": { source: "apache", extensions: ["obd"] },
        "application/x-mscardfile": { source: "apache", extensions: ["crd"] },
        "application/x-msclip": { source: "apache", extensions: ["clp"] },
        "application/x-msdos-program": { extensions: ["exe"] },
        "application/x-msdownload": { source: "apache", extensions: ["exe", "dll", "com", "bat", "msi"] },
        "application/x-msmediaview": { source: "apache", extensions: ["mvb", "m13", "m14"] },
        "application/x-msmetafile": { source: "apache", extensions: ["wmf", "wmz", "emf", "emz"] },
        "application/x-msmoney": { source: "apache", extensions: ["mny"] },
        "application/x-mspublisher": { source: "apache", extensions: ["pub"] },
        "application/x-msschedule": { source: "apache", extensions: ["scd"] },
        "application/x-msterminal": { source: "apache", extensions: ["trm"] },
        "application/x-mswrite": { source: "apache", extensions: ["wri"] },
        "application/x-netcdf": { source: "apache", extensions: ["nc", "cdf"] },
        "application/x-ns-proxy-autoconfig": { compressible: !0, extensions: ["pac"] },
        "application/x-nzb": { source: "apache", extensions: ["nzb"] },
        "application/x-perl": { source: "nginx", extensions: ["pl", "pm"] },
        "application/x-pilot": { source: "nginx", extensions: ["prc", "pdb"] },
        "application/x-pkcs12": { source: "apache", compressible: !1, extensions: ["p12", "pfx"] },
        "application/x-pkcs7-certificates": { source: "apache", extensions: ["p7b", "spc"] },
        "application/x-pkcs7-certreqresp": { source: "apache", extensions: ["p7r"] },
        "application/x-rar-compressed": { source: "apache", compressible: !1, extensions: ["rar"] },
        "application/x-redhat-package-manager": { source: "nginx", extensions: ["rpm"] },
        "application/x-research-info-systems": { source: "apache", extensions: ["ris"] },
        "application/x-sea": { source: "nginx", extensions: ["sea"] },
        "application/x-sh": { source: "apache", compressible: !0, extensions: ["sh"] },
        "application/x-shar": { source: "apache", extensions: ["shar"] },
        "application/x-shockwave-flash": { source: "apache", compressible: !1, extensions: ["swf"] },
        "application/x-silverlight-app": { source: "apache", extensions: ["xap"] },
        "application/x-sql": { source: "apache", extensions: ["sql"] },
        "application/x-stuffit": { source: "apache", compressible: !1, extensions: ["sit"] },
        "application/x-stuffitx": { source: "apache", extensions: ["sitx"] },
        "application/x-subrip": { source: "apache", extensions: ["srt"] },
        "application/x-sv4cpio": { source: "apache", extensions: ["sv4cpio"] },
        "application/x-sv4crc": { source: "apache", extensions: ["sv4crc"] },
        "application/x-t3vm-image": { source: "apache", extensions: ["t3"] },
        "application/x-tads": { source: "apache", extensions: ["gam"] },
        "application/x-tar": { source: "apache", compressible: !0, extensions: ["tar"] },
        "application/x-tcl": { source: "apache", extensions: ["tcl", "tk"] },
        "application/x-tex": { source: "apache", extensions: ["tex"] },
        "application/x-tex-tfm": { source: "apache", extensions: ["tfm"] },
        "application/x-texinfo": { source: "apache", extensions: ["texinfo", "texi"] },
        "application/x-tgif": { source: "apache", extensions: ["obj"] },
        "application/x-ustar": { source: "apache", extensions: ["ustar"] },
        "application/x-wais-source": { source: "apache", extensions: ["src"] },
        "application/x-web-app-manifest+json": { compressible: !0, extensions: ["webapp"] },
        "application/x-www-form-urlencoded": { source: "iana", compressible: !0 },
        "application/x-x509-ca-cert": { source: "apache", extensions: ["der", "crt", "pem"] },
        "application/x-xfig": { source: "apache", extensions: ["fig"] },
        "application/x-xliff+xml": { source: "apache", extensions: ["xlf"] },
        "application/x-xpinstall": { source: "apache", compressible: !1, extensions: ["xpi"] },
        "application/x-xz": { source: "apache", extensions: ["xz"] },
        "application/x-zmachine": { source: "apache", extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"] },
        "application/x400-bp": { source: "iana" },
        "application/xacml+xml": { source: "iana" },
        "application/xaml+xml": { source: "apache", extensions: ["xaml"] },
        "application/xcap-att+xml": { source: "iana" },
        "application/xcap-caps+xml": { source: "iana" },
        "application/xcap-diff+xml": { source: "iana", extensions: ["xdf"] },
        "application/xcap-el+xml": { source: "iana" },
        "application/xcap-error+xml": { source: "iana" },
        "application/xcap-ns+xml": { source: "iana" },
        "application/xcon-conference-info+xml": { source: "iana" },
        "application/xcon-conference-info-diff+xml": { source: "iana" },
        "application/xenc+xml": { source: "iana", extensions: ["xenc"] },
        "application/xhtml+xml": { source: "iana", compressible: !0, extensions: ["xhtml", "xht"] },
        "application/xhtml-voice+xml": { source: "apache" },
        "application/xml": { source: "iana", compressible: !0, extensions: ["xml", "xsl", "xsd", "rng"] },
        "application/xml-dtd": { source: "iana", compressible: !0, extensions: ["dtd"] },
        "application/xml-external-parsed-entity": { source: "iana" },
        "application/xml-patch+xml": { source: "iana" },
        "application/xmpp+xml": { source: "iana" },
        "application/xop+xml": { source: "iana", compressible: !0, extensions: ["xop"] },
        "application/xproc+xml": { source: "apache", extensions: ["xpl"] },
        "application/xslt+xml": { source: "iana", extensions: ["xslt"] },
        "application/xspf+xml": { source: "apache", extensions: ["xspf"] },
        "application/xv+xml": { source: "iana", extensions: ["mxml", "xhvml", "xvml", "xvm"] },
        "application/yang": { source: "iana", extensions: ["yang"] },
        "application/yang-data+json": { source: "iana", compressible: !0 },
        "application/yang-data+xml": { source: "iana" },
        "application/yin+xml": { source: "iana", extensions: ["yin"] },
        "application/zip": { source: "iana", compressible: !1, extensions: ["zip"] },
        "application/zlib": { source: "iana" },
        "audio/1d-interleaved-parityfec": { source: "iana" },
        "audio/32kadpcm": { source: "iana" },
        "audio/3gpp": { source: "iana", compressible: !1, extensions: ["3gpp"] },
        "audio/3gpp2": { source: "iana" },
        "audio/ac3": { source: "iana" },
        "audio/adpcm": { source: "apache", extensions: ["adp"] },
        "audio/amr": { source: "iana" },
        "audio/amr-wb": { source: "iana" },
        "audio/amr-wb+": { source: "iana" },
        "audio/aptx": { source: "iana" },
        "audio/asc": { source: "iana" },
        "audio/atrac-advanced-lossless": { source: "iana" },
        "audio/atrac-x": { source: "iana" },
        "audio/atrac3": { source: "iana" },
        "audio/basic": { source: "iana", compressible: !1, extensions: ["au", "snd"] },
        "audio/bv16": { source: "iana" },
        "audio/bv32": { source: "iana" },
        "audio/clearmode": { source: "iana" },
        "audio/cn": { source: "iana" },
        "audio/dat12": { source: "iana" },
        "audio/dls": { source: "iana" },
        "audio/dsr-es201108": { source: "iana" },
        "audio/dsr-es202050": { source: "iana" },
        "audio/dsr-es202211": { source: "iana" },
        "audio/dsr-es202212": { source: "iana" },
        "audio/dv": { source: "iana" },
        "audio/dvi4": { source: "iana" },
        "audio/eac3": { source: "iana" },
        "audio/encaprtp": { source: "iana" },
        "audio/evrc": { source: "iana" },
        "audio/evrc-qcp": { source: "iana" },
        "audio/evrc0": { source: "iana" },
        "audio/evrc1": { source: "iana" },
        "audio/evrcb": { source: "iana" },
        "audio/evrcb0": { source: "iana" },
        "audio/evrcb1": { source: "iana" },
        "audio/evrcnw": { source: "iana" },
        "audio/evrcnw0": { source: "iana" },
        "audio/evrcnw1": { source: "iana" },
        "audio/evrcwb": { source: "iana" },
        "audio/evrcwb0": { source: "iana" },
        "audio/evrcwb1": { source: "iana" },
        "audio/evs": { source: "iana" },
        "audio/fwdred": { source: "iana" },
        "audio/g711-0": { source: "iana" },
        "audio/g719": { source: "iana" },
        "audio/g722": { source: "iana" },
        "audio/g7221": { source: "iana" },
        "audio/g723": { source: "iana" },
        "audio/g726-16": { source: "iana" },
        "audio/g726-24": { source: "iana" },
        "audio/g726-32": { source: "iana" },
        "audio/g726-40": { source: "iana" },
        "audio/g728": { source: "iana" },
        "audio/g729": { source: "iana" },
        "audio/g7291": { source: "iana" },
        "audio/g729d": { source: "iana" },
        "audio/g729e": { source: "iana" },
        "audio/gsm": { source: "iana" },
        "audio/gsm-efr": { source: "iana" },
        "audio/gsm-hr-08": { source: "iana" },
        "audio/ilbc": { source: "iana" },
        "audio/ip-mr_v2.5": { source: "iana" },
        "audio/isac": { source: "apache" },
        "audio/l16": { source: "iana" },
        "audio/l20": { source: "iana" },
        "audio/l24": { source: "iana", compressible: !1 },
        "audio/l8": { source: "iana" },
        "audio/lpc": { source: "iana" },
        "audio/midi": { source: "apache", extensions: ["mid", "midi", "kar", "rmi"] },
        "audio/mobile-xmf": { source: "iana" },
        "audio/mp3": { compressible: !1, extensions: ["mp3"] },
        "audio/mp4": { source: "iana", compressible: !1, extensions: ["m4a", "mp4a"] },
        "audio/mp4a-latm": { source: "iana" },
        "audio/mpa": { source: "iana" },
        "audio/mpa-robust": { source: "iana" },
        "audio/mpeg": { source: "iana", compressible: !1, extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"] },
        "audio/mpeg4-generic": { source: "iana" },
        "audio/musepack": { source: "apache" },
        "audio/ogg": { source: "iana", compressible: !1, extensions: ["oga", "ogg", "spx"] },
        "audio/opus": { source: "iana" },
        "audio/parityfec": { source: "iana" },
        "audio/pcma": { source: "iana" },
        "audio/pcma-wb": { source: "iana" },
        "audio/pcmu": { source: "iana" },
        "audio/pcmu-wb": { source: "iana" },
        "audio/prs.sid": { source: "iana" },
        "audio/qcelp": { source: "iana" },
        "audio/raptorfec": { source: "iana" },
        "audio/red": { source: "iana" },
        "audio/rtp-enc-aescm128": { source: "iana" },
        "audio/rtp-midi": { source: "iana" },
        "audio/rtploopback": { source: "iana" },
        "audio/rtx": { source: "iana" },
        "audio/s3m": { source: "apache", extensions: ["s3m"] },
        "audio/silk": { source: "apache", extensions: ["sil"] },
        "audio/smv": { source: "iana" },
        "audio/smv-qcp": { source: "iana" },
        "audio/smv0": { source: "iana" },
        "audio/sp-midi": { source: "iana" },
        "audio/speex": { source: "iana" },
        "audio/t140c": { source: "iana" },
        "audio/t38": { source: "iana" },
        "audio/telephone-event": { source: "iana" },
        "audio/tone": { source: "iana" },
        "audio/uemclip": { source: "iana" },
        "audio/ulpfec": { source: "iana" },
        "audio/vdvi": { source: "iana" },
        "audio/vmr-wb": { source: "iana" },
        "audio/vnd.3gpp.iufp": { source: "iana" },
        "audio/vnd.4sb": { source: "iana" },
        "audio/vnd.audiokoz": { source: "iana" },
        "audio/vnd.celp": { source: "iana" },
        "audio/vnd.cisco.nse": { source: "iana" },
        "audio/vnd.cmles.radio-events": { source: "iana" },
        "audio/vnd.cns.anp1": { source: "iana" },
        "audio/vnd.cns.inf1": { source: "iana" },
        "audio/vnd.dece.audio": { source: "iana", extensions: ["uva", "uvva"] },
        "audio/vnd.digital-winds": { source: "iana", extensions: ["eol"] },
        "audio/vnd.dlna.adts": { source: "iana" },
        "audio/vnd.dolby.heaac.1": { source: "iana" },
        "audio/vnd.dolby.heaac.2": { source: "iana" },
        "audio/vnd.dolby.mlp": { source: "iana" },
        "audio/vnd.dolby.mps": { source: "iana" },
        "audio/vnd.dolby.pl2": { source: "iana" },
        "audio/vnd.dolby.pl2x": { source: "iana" },
        "audio/vnd.dolby.pl2z": { source: "iana" },
        "audio/vnd.dolby.pulse.1": { source: "iana" },
        "audio/vnd.dra": { source: "iana", extensions: ["dra"] },
        "audio/vnd.dts": { source: "iana", extensions: ["dts"] },
        "audio/vnd.dts.hd": { source: "iana", extensions: ["dtshd"] },
        "audio/vnd.dvb.file": { source: "iana" },
        "audio/vnd.everad.plj": { source: "iana" },
        "audio/vnd.hns.audio": { source: "iana" },
        "audio/vnd.lucent.voice": { source: "iana", extensions: ["lvp"] },
        "audio/vnd.ms-playready.media.pya": { source: "iana", extensions: ["pya"] },
        "audio/vnd.nokia.mobile-xmf": { source: "iana" },
        "audio/vnd.nortel.vbk": { source: "iana" },
        "audio/vnd.nuera.ecelp4800": {
            source: "iana",
            extensions: ["ecelp4800"]
        },
        "audio/vnd.nuera.ecelp7470": { source: "iana", extensions: ["ecelp7470"] },
        "audio/vnd.nuera.ecelp9600": { source: "iana", extensions: ["ecelp9600"] },
        "audio/vnd.octel.sbc": { source: "iana" },
        "audio/vnd.qcelp": { source: "iana" },
        "audio/vnd.rhetorex.32kadpcm": { source: "iana" },
        "audio/vnd.rip": { source: "iana", extensions: ["rip"] },
        "audio/vnd.rn-realaudio": { compressible: !1 },
        "audio/vnd.sealedmedia.softseal.mpeg": { source: "iana" },
        "audio/vnd.vmx.cvsd": { source: "iana" },
        "audio/vnd.wave": { compressible: !1 },
        "audio/vorbis": { source: "iana", compressible: !1 },
        "audio/vorbis-config": { source: "iana" },
        "audio/wav": { compressible: !1, extensions: ["wav"] },
        "audio/wave": { compressible: !1, extensions: ["wav"] },
        "audio/webm": { source: "apache", compressible: !1, extensions: ["weba"] },
        "audio/x-aac": { source: "apache", compressible: !1, extensions: ["aac"] },
        "audio/x-aiff": { source: "apache", extensions: ["aif", "aiff", "aifc"] },
        "audio/x-caf": { source: "apache", compressible: !1, extensions: ["caf"] },
        "audio/x-flac": { source: "apache", extensions: ["flac"] },
        "audio/x-m4a": { source: "nginx", extensions: ["m4a"] },
        "audio/x-matroska": { source: "apache", extensions: ["mka"] },
        "audio/x-mpegurl": { source: "apache", extensions: ["m3u"] },
        "audio/x-ms-wax": { source: "apache", extensions: ["wax"] },
        "audio/x-ms-wma": { source: "apache", extensions: ["wma"] },
        "audio/x-pn-realaudio": { source: "apache", extensions: ["ram", "ra"] },
        "audio/x-pn-realaudio-plugin": { source: "apache", extensions: ["rmp"] },
        "audio/x-realaudio": { source: "nginx", extensions: ["ra"] },
        "audio/x-tta": { source: "apache" },
        "audio/x-wav": { source: "apache", extensions: ["wav"] },
        "audio/xm": { source: "apache", extensions: ["xm"] },
        "chemical/x-cdx": { source: "apache", extensions: ["cdx"] },
        "chemical/x-cif": { source: "apache", extensions: ["cif"] },
        "chemical/x-cmdf": { source: "apache", extensions: ["cmdf"] },
        "chemical/x-cml": { source: "apache", extensions: ["cml"] },
        "chemical/x-csml": { source: "apache", extensions: ["csml"] },
        "chemical/x-pdb": { source: "apache" },
        "chemical/x-xyz": { source: "apache", extensions: ["xyz"] },
        "font/opentype": { compressible: !0, extensions: ["otf"] },
        "image/bmp": { source: "iana", compressible: !0, extensions: ["bmp"] },
        "image/cgm": { source: "iana", extensions: ["cgm"] },
        "image/dicom-rle": { source: "iana" },
        "image/emf": { source: "iana" },
        "image/fits": { source: "iana" },
        "image/g3fax": { source: "iana", extensions: ["g3"] },
        "image/gif": { source: "iana", compressible: !1, extensions: ["gif"] },
        "image/ief": { source: "iana", extensions: ["ief"] },
        "image/jls": { source: "iana" },
        "image/jp2": { source: "iana" },
        "image/jpeg": { source: "iana", compressible: !1, extensions: ["jpeg", "jpg", "jpe"] },
        "image/jpm": { source: "iana" },
        "image/jpx": { source: "iana" },
        "image/ktx": { source: "iana", extensions: ["ktx"] },
        "image/naplps": { source: "iana" },
        "image/pjpeg": { compressible: !1 },
        "image/png": { source: "iana", compressible: !1, extensions: ["png"] },
        "image/prs.btif": { source: "iana", extensions: ["btif"] },
        "image/prs.pti": { source: "iana" },
        "image/pwg-raster": { source: "iana" },
        "image/sgi": { source: "apache", extensions: ["sgi"] },
        "image/svg+xml": { source: "iana", compressible: !0, extensions: ["svg", "svgz"] },
        "image/t38": { source: "iana" },
        "image/tiff": { source: "iana", compressible: !1, extensions: ["tiff", "tif"] },
        "image/tiff-fx": { source: "iana" },
        "image/vnd.adobe.photoshop": { source: "iana", compressible: !0, extensions: ["psd"] },
        "image/vnd.airzip.accelerator.azv": { source: "iana" },
        "image/vnd.cns.inf2": { source: "iana" },
        "image/vnd.dece.graphic": { source: "iana", extensions: ["uvi", "uvvi", "uvg", "uvvg"] },
        "image/vnd.djvu": { source: "iana", extensions: ["djvu", "djv"] },
        "image/vnd.dvb.subtitle": { source: "iana", extensions: ["sub"] },
        "image/vnd.dwg": { source: "iana", extensions: ["dwg"] },
        "image/vnd.dxf": { source: "iana", extensions: ["dxf"] },
        "image/vnd.fastbidsheet": { source: "iana", extensions: ["fbs"] },
        "image/vnd.fpx": { source: "iana", extensions: ["fpx"] },
        "image/vnd.fst": { source: "iana", extensions: ["fst"] },
        "image/vnd.fujixerox.edmics-mmr": { source: "iana", extensions: ["mmr"] },
        "image/vnd.fujixerox.edmics-rlc": { source: "iana", extensions: ["rlc"] },
        "image/vnd.globalgraphics.pgb": { source: "iana" },
        "image/vnd.microsoft.icon": { source: "iana" },
        "image/vnd.mix": { source: "iana" },
        "image/vnd.mozilla.apng": { source: "iana" },
        "image/vnd.ms-modi": { source: "iana", extensions: ["mdi"] },
        "image/vnd.ms-photo": { source: "apache", extensions: ["wdp"] },
        "image/vnd.net-fpx": { source: "iana", extensions: ["npx"] },
        "image/vnd.radiance": { source: "iana" },
        "image/vnd.sealed.png": { source: "iana" },
        "image/vnd.sealedmedia.softseal.gif": { source: "iana" },
        "image/vnd.sealedmedia.softseal.jpg": { source: "iana" },
        "image/vnd.svf": { source: "iana" },
        "image/vnd.tencent.tap": { source: "iana" },
        "image/vnd.valve.source.texture": { source: "iana" },
        "image/vnd.wap.wbmp": { source: "iana", extensions: ["wbmp"] },
        "image/vnd.xiff": { source: "iana", extensions: ["xif"] },
        "image/vnd.zbrush.pcx": { source: "iana" },
        "image/webp": { source: "apache", extensions: ["webp"] },
        "image/wmf": { source: "iana" },
        "image/x-3ds": { source: "apache", extensions: ["3ds"] },
        "image/x-cmu-raster": { source: "apache", extensions: ["ras"] },
        "image/x-cmx": { source: "apache", extensions: ["cmx"] },
        "image/x-freehand": { source: "apache", extensions: ["fh", "fhc", "fh4", "fh5", "fh7"] },
        "image/x-icon": { source: "apache", compressible: !0, extensions: ["ico"] },
        "image/x-jng": { source: "nginx", extensions: ["jng"] },
        "image/x-mrsid-image": { source: "apache", extensions: ["sid"] },
        "image/x-ms-bmp": { source: "nginx", compressible: !0, extensions: ["bmp"] },
        "image/x-pcx": { source: "apache", extensions: ["pcx"] },
        "image/x-pict": { source: "apache", extensions: ["pic", "pct"] },
        "image/x-portable-anymap": { source: "apache", extensions: ["pnm"] },
        "image/x-portable-bitmap": { source: "apache", extensions: ["pbm"] },
        "image/x-portable-graymap": { source: "apache", extensions: ["pgm"] },
        "image/x-portable-pixmap": { source: "apache", extensions: ["ppm"] },
        "image/x-rgb": { source: "apache", extensions: ["rgb"] },
        "image/x-tga": { source: "apache", extensions: ["tga"] },
        "image/x-xbitmap": { source: "apache", extensions: ["xbm"] },
        "image/x-xcf": { compressible: !1 },
        "image/x-xpixmap": { source: "apache", extensions: ["xpm"] },
        "image/x-xwindowdump": { source: "apache", extensions: ["xwd"] },
        "message/cpim": { source: "iana" },
        "message/delivery-status": { source: "iana" },
        "message/disposition-notification": { source: "iana" },
        "message/external-body": { source: "iana" },
        "message/feedback-report": { source: "iana" },
        "message/global": { source: "iana" },
        "message/global-delivery-status": { source: "iana" },
        "message/global-disposition-notification": { source: "iana" },
        "message/global-headers": { source: "iana" },
        "message/http": { source: "iana", compressible: !1 },
        "message/imdn+xml": { source: "iana", compressible: !0 },
        "message/news": { source: "iana" },
        "message/partial": { source: "iana", compressible: !1 },
        "message/rfc822": { source: "iana", compressible: !0, extensions: ["eml", "mime"] },
        "message/s-http": { source: "iana" },
        "message/sip": { source: "iana" },
        "message/sipfrag": { source: "iana" },
        "message/tracking-status": { source: "iana" },
        "message/vnd.si.simp": { source: "iana" },
        "message/vnd.wfa.wsc": { source: "iana" },
        "model/gltf+json": { source: "iana", compressible: !0 },
        "model/iges": { source: "iana", compressible: !1, extensions: ["igs", "iges"] },
        "model/mesh": { source: "iana", compressible: !1, extensions: ["msh", "mesh", "silo"] },
        "model/vnd.collada+xml": { source: "iana", extensions: ["dae"] },
        "model/vnd.dwf": { source: "iana", extensions: ["dwf"] },
        "model/vnd.flatland.3dml": { source: "iana" },
        "model/vnd.gdl": { source: "iana", extensions: ["gdl"] },
        "model/vnd.gs-gdl": { source: "apache" },
        "model/vnd.gs.gdl": { source: "iana" },
        "model/vnd.gtw": { source: "iana", extensions: ["gtw"] },
        "model/vnd.moml+xml": { source: "iana" },
        "model/vnd.mts": { source: "iana", extensions: ["mts"] },
        "model/vnd.opengex": { source: "iana" },
        "model/vnd.parasolid.transmit.binary": { source: "iana" },
        "model/vnd.parasolid.transmit.text": { source: "iana" },
        "model/vnd.rosette.annotated-data-model": { source: "iana" },
        "model/vnd.valve.source.compiled-map": { source: "iana" },
        "model/vnd.vtu": { source: "iana", extensions: ["vtu"] },
        "model/vrml": { source: "iana", compressible: !1, extensions: ["wrl", "vrml"] },
        "model/x3d+binary": { source: "apache", compressible: !1, extensions: ["x3db", "x3dbz"] },
        "model/x3d+fastinfoset": { source: "iana" },
        "model/x3d+vrml": { source: "apache", compressible: !1, extensions: ["x3dv", "x3dvz"] },
        "model/x3d+xml": { source: "iana", compressible: !0, extensions: ["x3d", "x3dz"] },
        "model/x3d-vrml": { source: "iana" },
        "multipart/alternative": { source: "iana", compressible: !1 },
        "multipart/appledouble": { source: "iana" },
        "multipart/byteranges": { source: "iana" },
        "multipart/digest": { source: "iana" },
        "multipart/encrypted": { source: "iana", compressible: !1 },
        "multipart/form-data": { source: "iana", compressible: !1 },
        "multipart/header-set": { source: "iana" },
        "multipart/mixed": { source: "iana", compressible: !1 },
        "multipart/parallel": { source: "iana" },
        "multipart/related": { source: "iana", compressible: !1 },
        "multipart/report": { source: "iana" },
        "multipart/signed": { source: "iana", compressible: !1 },
        "multipart/voice-message": { source: "iana" },
        "multipart/x-mixed-replace": { source: "iana" },
        "text/1d-interleaved-parityfec": { source: "iana" },
        "text/cache-manifest": { source: "iana", compressible: !0, extensions: ["appcache", "manifest"] },
        "text/calendar": { source: "iana", extensions: ["ics", "ifb"] },
        "text/calender": { compressible: !0 },
        "text/cmd": { compressible: !0 },
        "text/coffeescript": { extensions: ["coffee", "litcoffee"] },
        "text/css": { source: "iana", compressible: !0, extensions: ["css"] },
        "text/csv": { source: "iana", compressible: !0, extensions: ["csv"] },
        "text/csv-schema": { source: "iana" },
        "text/directory": { source: "iana" },
        "text/dns": { source: "iana" },
        "text/ecmascript": { source: "iana" },
        "text/encaprtp": { source: "iana" },
        "text/enriched": { source: "iana" },
        "text/fwdred": { source: "iana" },
        "text/grammar-ref-list": { source: "iana" },
        "text/hjson": { extensions: ["hjson"] },
        "text/html": { source: "iana", compressible: !0, extensions: ["html", "htm", "shtml"] },
        "text/jade": { extensions: ["jade"] },
        "text/javascript": { source: "iana", compressible: !0 },
        "text/jcr-cnd": { source: "iana" },
        "text/jsx": { compressible: !0, extensions: ["jsx"] },
        "text/less": { extensions: ["less"] },
        "text/markdown": { source: "iana" },
        "text/mathml": { source: "nginx", extensions: ["mml"] },
        "text/mizar": { source: "iana" },
        "text/n3": { source: "iana", compressible: !0, extensions: ["n3"] },
        "text/parameters": { source: "iana" },
        "text/parityfec": { source: "iana" },
        "text/plain": { source: "iana", compressible: !0, extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"] },
        "text/provenance-notation": { source: "iana" },
        "text/prs.fallenstein.rst": { source: "iana" },
        "text/prs.lines.tag": { source: "iana", extensions: ["dsc"] },
        "text/prs.prop.logic": { source: "iana" },
        "text/raptorfec": { source: "iana" },
        "text/red": { source: "iana" },
        "text/rfc822-headers": { source: "iana" },
        "text/richtext": { source: "iana", compressible: !0, extensions: ["rtx"] },
        "text/rtf": { source: "iana", compressible: !0, extensions: ["rtf"] },
        "text/rtp-enc-aescm128": { source: "iana" },
        "text/rtploopback": { source: "iana" },
        "text/rtx": { source: "iana" },
        "text/sgml": { source: "iana", extensions: ["sgml", "sgm"] },
        "text/slim": { extensions: ["slim", "slm"] },
        "text/stylus": { extensions: ["stylus", "styl"] },
        "text/t140": { source: "iana" },
        "text/tab-separated-values": { source: "iana", compressible: !0, extensions: ["tsv"] },
        "text/troff": { source: "iana", extensions: ["t", "tr", "roff", "man", "me", "ms"] },
        "text/turtle": { source: "iana", extensions: ["ttl"] },
        "text/ulpfec": { source: "iana" },
        "text/uri-list": { source: "iana", compressible: !0, extensions: ["uri", "uris", "urls"] },
        "text/vcard": { source: "iana", compressible: !0, extensions: ["vcard"] },
        "text/vnd.a": { source: "iana" },
        "text/vnd.abc": { source: "iana" },
        "text/vnd.ascii-art": { source: "iana" },
        "text/vnd.curl": { source: "iana", extensions: ["curl"] },
        "text/vnd.curl.dcurl": { source: "apache", extensions: ["dcurl"] },
        "text/vnd.curl.mcurl": { source: "apache", extensions: ["mcurl"] },
        "text/vnd.curl.scurl": { source: "apache", extensions: ["scurl"] },
        "text/vnd.debian.copyright": { source: "iana" },
        "text/vnd.dmclientscript": { source: "iana" },
        "text/vnd.dvb.subtitle": { source: "iana", extensions: ["sub"] },
        "text/vnd.esmertec.theme-descriptor": { source: "iana" },
        "text/vnd.fly": { source: "iana", extensions: ["fly"] },
        "text/vnd.fmi.flexstor": { source: "iana", extensions: ["flx"] },
        "text/vnd.graphviz": { source: "iana", extensions: ["gv"] },
        "text/vnd.in3d.3dml": { source: "iana", extensions: ["3dml"] },
        "text/vnd.in3d.spot": { source: "iana", extensions: ["spot"] },
        "text/vnd.iptc.newsml": { source: "iana" },
        "text/vnd.iptc.nitf": { source: "iana" },
        "text/vnd.latex-z": { source: "iana" },
        "text/vnd.motorola.reflex": { source: "iana" },
        "text/vnd.ms-mediapackage": { source: "iana" },
        "text/vnd.net2phone.commcenter.command": { source: "iana" },
        "text/vnd.radisys.msml-basic-layout": { source: "iana" },
        "text/vnd.si.uricatalogue": { source: "iana" },
        "text/vnd.sun.j2me.app-descriptor": { source: "iana", extensions: ["jad"] },
        "text/vnd.trolltech.linguist": { source: "iana" },
        "text/vnd.wap.si": { source: "iana" },
        "text/vnd.wap.sl": { source: "iana" },
        "text/vnd.wap.wml": { source: "iana", extensions: ["wml"] },
        "text/vnd.wap.wmlscript": { source: "iana", extensions: ["wmls"] },
        "text/vtt": { charset: "UTF-8", compressible: !0, extensions: ["vtt"] },
        "text/x-asm": { source: "apache", extensions: ["s", "asm"] },
        "text/x-c": { source: "apache", extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"] },
        "text/x-component": { source: "nginx", extensions: ["htc"] },
        "text/x-fortran": { source: "apache", extensions: ["f", "for", "f77", "f90"] },
        "text/x-gwt-rpc": { compressible: !0 },
        "text/x-handlebars-template": { extensions: ["hbs"] },
        "text/x-java-source": { source: "apache", extensions: ["java"] },
        "text/x-jquery-tmpl": { compressible: !0 },
        "text/x-lua": { extensions: ["lua"] },
        "text/x-markdown": { compressible: !0, extensions: ["markdown", "md", "mkd"] },
        "text/x-nfo": { source: "apache", extensions: ["nfo"] },
        "text/x-opml": { source: "apache", extensions: ["opml"] },
        "text/x-pascal": { source: "apache", extensions: ["p", "pas"] },
        "text/x-processing": { compressible: !0, extensions: ["pde"] },
        "text/x-sass": { extensions: ["sass"] },
        "text/x-scss": { extensions: ["scss"] },
        "text/x-setext": { source: "apache", extensions: ["etx"] },
        "text/x-sfv": { source: "apache", extensions: ["sfv"] },
        "text/x-suse-ymp": { compressible: !0, extensions: ["ymp"] },
        "text/x-uuencode": { source: "apache", extensions: ["uu"] },
        "text/x-vcalendar": { source: "apache", extensions: ["vcs"] },
        "text/x-vcard": { source: "apache", extensions: ["vcf"] },
        "text/xml": { source: "iana", compressible: !0, extensions: ["xml"] },
        "text/xml-external-parsed-entity": { source: "iana" },
        "text/yaml": { extensions: ["yaml", "yml"] },
        "video/1d-interleaved-parityfec": { source: "apache" },
        "video/3gpp": { source: "apache", extensions: ["3gp", "3gpp"] },
        "video/3gpp-tt": { source: "apache" },
        "video/3gpp2": { source: "apache", extensions: ["3g2"] },
        "video/bmpeg": { source: "apache" },
        "video/bt656": { source: "apache" },
        "video/celb": { source: "apache" },
        "video/dv": { source: "apache" },
        "video/encaprtp": { source: "apache" },
        "video/h261": { source: "apache", extensions: ["h261"] },
        "video/h263": { source: "apache", extensions: ["h263"] },
        "video/h263-1998": { source: "apache" },
        "video/h263-2000": { source: "apache" },
        "video/h264": { source: "apache", extensions: ["h264"] },
        "video/h264-rcdo": { source: "apache" },
        "video/h264-svc": { source: "apache" },
        "video/h265": { source: "apache" },
        "video/iso.segment": { source: "apache" },
        "video/jpeg": { source: "apache", extensions: ["jpgv"] },
        "video/jpeg2000": { source: "apache" },
        "video/jpm": { source: "apache", extensions: ["jpm", "jpgm"] },
        "video/mj2": { source: "apache", extensions: ["mj2", "mjp2"] },
        "video/mp1s": { source: "apache" },
        "video/mp2p": { source: "apache" },
        "video/mp2t": { source: "apache", extensions: ["ts"] },
        "video/mp4": { source: "apache", compressible: !1, extensions: ["mp4", "mp4v", "mpg4"] },
        "video/mp4v-es": { source: "apache" },
        "video/mpeg": { source: "apache", compressible: !1, extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"] },
        "video/mpeg4-generic": { source: "apache" },
        "video/mpv": { source: "apache" },
        "video/nv": { source: "apache" },
        "video/ogg": { source: "apache", compressible: !1, extensions: ["ogv"] },
        "video/parityfec": { source: "apache" },
        "video/pointer": { source: "apache" },
        "video/quicktime": { source: "apache", compressible: !1, extensions: ["qt", "mov"] },
        "video/raptorfec": { source: "apache" },
        "video/raw": { source: "apache" },
        "video/rtp-enc-aescm128": { source: "apache" },
        "video/rtploopback": { source: "apache" },
        "video/rtx": { source: "apache" },
        "video/smpte292m": { source: "apache" },
        "video/ulpfec": { source: "apache" },
        "video/vc1": { source: "apache" },
        "video/vnd.cctv": { source: "apache" },
        "video/vnd.dece.hd": { source: "apache", extensions: ["uvh", "uvvh"] },
        "video/vnd.dece.mobile": { source: "apache", extensions: ["uvm", "uvvm"] },
        "video/vnd.dece.mp4": { source: "apache" },
        "video/vnd.dece.pd": { source: "apache", extensions: ["uvp", "uvvp"] },
        "video/vnd.dece.sd": { source: "apache", extensions: ["uvs", "uvvs"] },
        "video/vnd.dece.video": { source: "apache", extensions: ["uvv", "uvvv"] },
        "video/vnd.directv.mpeg": { source: "apache" },
        "video/vnd.directv.mpeg-tts": { source: "apache" },
        "video/vnd.dlna.mpeg-tts": { source: "apache" },
        "video/vnd.dvb.file": { source: "apache", extensions: ["dvb"] },
        "video/vnd.fvt": { source: "apache", extensions: ["fvt"] },
        "video/vnd.hns.video": { source: "apache" },
        "video/vnd.iptvforum.1dparityfec-1010": { source: "apache" },
        "video/vnd.iptvforum.1dparityfec-2005": { source: "apache" },
        "video/vnd.iptvforum.2dparityfec-1010": { source: "apache" },
        "video/vnd.iptvforum.2dparityfec-2005": { source: "apache" },
        "video/vnd.iptvforum.ttsavc": { source: "apache" },
        "video/vnd.iptvforum.ttsmpeg2": { source: "apache" },
        "video/vnd.motorola.video": { source: "apache" },
        "video/vnd.motorola.videop": { source: "apache" },
        "video/vnd.mpegurl": { source: "apache", extensions: ["mxu", "m4u"] },
        "video/vnd.ms-playready.media.pyv": { source: "apache", extensions: ["pyv"] },
        "video/vnd.nokia.interleaved-multimedia": { source: "apache" },
        "video/vnd.nokia.videovoip": { source: "apache" },
        "video/vnd.objectvideo": { source: "apache" },
        "video/vnd.radgamettools.bink": { source: "apache" },
        "video/vnd.radgamettools.smacker": { source: "apache" },
        "video/vnd.sealed.mpeg1": { source: "apache" },
        "video/vnd.sealed.mpeg4": { source: "apache" },
        "video/vnd.sealed.swf": { source: "apache" },
        "video/vnd.sealedmedia.softseal.mov": { source: "apache" },
        "video/vnd.uvvu.mp4": { source: "apache", extensions: ["uvu", "uvvu"] },
        "video/vnd.vivo": { source: "apache", extensions: ["viv"] },
        "video/vp8": { source: "apache" },
        "video/webm": { source: "apache", compressible: !1, extensions: ["webm"] },
        "video/x-f4v": { source: "apache", extensions: ["f4v"] },
        "video/x-fli": { source: "apache", extensions: ["fli"] },
        "video/x-flv": { source: "apache", compressible: !1, extensions: ["flv"] },
        "video/x-m4v": { source: "apache", extensions: ["m4v"] },
        "video/x-matroska": { source: "apache", compressible: !1, extensions: ["mkv", "mk3d", "mks"] },
        "video/x-mng": { source: "apache", extensions: ["mng"] },
        "video/x-ms-asf": { source: "apache", extensions: ["asf", "asx"] },
        "video/x-ms-vob": { source: "apache", extensions: ["vob"] },
        "video/x-ms-wm": { source: "apache", extensions: ["wm"] },
        "video/x-ms-wmv": { source: "apache", compressible: !1, extensions: ["wmv"] },
        "video/x-ms-wmx": { source: "apache", extensions: ["wmx"] },
        "video/x-ms-wvx": { source: "apache", extensions: ["wvx"] },
        "video/x-msvideo": { source: "apache", extensions: ["avi"] },
        "video/x-sgi-movie": { source: "apache", extensions: ["movie"] },
        "video/x-smv": { source: "apache", extensions: ["smv"] },
        "x-conference/x-cooltalk": { source: "apache", extensions: ["ice"] },
        "x-shader/x-fragment": { compressible: !0 },
        "x-shader/x-vertex": { compressible: !0 }
    }
}, function(e, t, a) {
    function n(e) { return a(i(e)) }

    function i(e) { return o[e] || function() { throw new Error("Cannot find module '" + e + "'.") }() } var o = { "./af": 175, "./af.js": 175, "./ar": 182, "./ar-dz": 176, "./ar-dz.js": 176, "./ar-kw": 177, "./ar-kw.js": 177, "./ar-ly": 178, "./ar-ly.js": 178, "./ar-ma": 179, "./ar-ma.js": 179, "./ar-sa": 180, "./ar-sa.js": 180, "./ar-tn": 181, "./ar-tn.js": 181, "./ar.js": 182, "./az": 183, "./az.js": 183, "./be": 184, "./be.js": 184, "./bg": 185, "./bg.js": 185, "./bn": 186, "./bn.js": 186, "./bo": 187, "./bo.js": 187, "./br": 188, "./br.js": 188, "./bs": 189, "./bs.js": 189, "./ca": 190, "./ca.js": 190, "./cs": 191, "./cs.js": 191, "./cv": 192, "./cv.js": 192, "./cy": 193, "./cy.js": 193, "./da": 194, "./da.js": 194, "./de": 197, "./de-at": 195, "./de-at.js": 195, "./de-ch": 196, "./de-ch.js": 196, "./de.js": 197, "./dv": 198, "./dv.js": 198, "./el": 199, "./el.js": 199, "./en-au": 200, "./en-au.js": 200, "./en-ca": 201, "./en-ca.js": 201, "./en-gb": 202, "./en-gb.js": 202, "./en-ie": 203, "./en-ie.js": 203, "./en-nz": 204, "./en-nz.js": 204, "./eo": 205, "./eo.js": 205, "./es": 207, "./es-do": 206, "./es-do.js": 206, "./es.js": 207, "./et": 208, "./et.js": 208, "./eu": 209, "./eu.js": 209, "./fa": 210, "./fa.js": 210, "./fi": 211, "./fi.js": 211, "./fo": 212, "./fo.js": 212, "./fr": 215, "./fr-ca": 213, "./fr-ca.js": 213, "./fr-ch": 214, "./fr-ch.js": 214, "./fr.js": 215, "./fy": 216, "./fy.js": 216, "./gd": 217, "./gd.js": 217, "./gl": 218, "./gl.js": 218, "./gom-latn": 219, "./gom-latn.js": 219, "./he": 220, "./he.js": 220, "./hi": 221, "./hi.js": 221, "./hr": 222, "./hr.js": 222, "./hu": 223, "./hu.js": 223, "./hy-am": 224, "./hy-am.js": 224, "./id": 225, "./id.js": 225, "./is": 226, "./is.js": 226, "./it": 227, "./it.js": 227, "./ja": 228, "./ja.js": 228, "./jv": 229, "./jv.js": 229, "./ka": 230, "./ka.js": 230, "./kk": 231, "./kk.js": 231, "./km": 232, "./km.js": 232, "./kn": 233, "./kn.js": 233, "./ko": 234, "./ko.js": 234, "./ky": 235, "./ky.js": 235, "./lb": 236, "./lb.js": 236, "./lo": 237, "./lo.js": 237, "./lt": 238, "./lt.js": 238, "./lv": 239, "./lv.js": 239, "./me": 240, "./me.js": 240, "./mi": 241, "./mi.js": 241, "./mk": 242, "./mk.js": 242, "./ml": 243, "./ml.js": 243, "./mr": 244, "./mr.js": 244, "./ms": 246, "./ms-my": 245, "./ms-my.js": 245, "./ms.js": 246, "./my": 247, "./my.js": 247, "./nb": 248, "./nb.js": 248, "./ne": 249, "./ne.js": 249, "./nl": 251, "./nl-be": 250, "./nl-be.js": 250, "./nl.js": 251, "./nn": 252, "./nn.js": 252, "./pa-in": 253, "./pa-in.js": 253, "./pl": 254, "./pl.js": 254, "./pt": 256, "./pt-br": 255, "./pt-br.js": 255, "./pt.js": 256, "./ro": 257, "./ro.js": 257, "./ru": 258, "./ru.js": 258, "./sd": 259, "./sd.js": 259, "./se": 260, "./se.js": 260, "./si": 261, "./si.js": 261, "./sk": 262, "./sk.js": 262, "./sl": 263, "./sl.js": 263, "./sq": 264, "./sq.js": 264, "./sr": 266, "./sr-cyrl": 265, "./sr-cyrl.js": 265, "./sr.js": 266, "./ss": 267, "./ss.js": 267, "./sv": 268, "./sv.js": 268, "./sw": 269, "./sw.js": 269, "./ta": 270, "./ta.js": 270, "./te": 271, "./te.js": 271, "./tet": 272, "./tet.js": 272, "./th": 273, "./th.js": 273, "./tl-ph": 274, "./tl-ph.js": 274, "./tlh": 275, "./tlh.js": 275, "./tr": 276, "./tr.js": 276, "./tzl": 277, "./tzl.js": 277, "./tzm": 279, "./tzm-latn": 278, "./tzm-latn.js": 278, "./tzm.js": 279, "./uk": 280, "./uk.js": 280, "./ur": 281, "./ur.js": 281, "./uz": 283, "./uz-latn": 282, "./uz-latn.js": 282, "./uz.js": 283, "./vi": 284, "./vi.js": 284, "./x-pseudo": 285, "./x-pseudo.js": 285, "./yo": 286, "./yo.js": 286, "./zh-cn": 287, "./zh-cn.js": 287, "./zh-hk": 288, "./zh-hk.js": 288, "./zh-tw": 289, "./zh-tw.js": 289 };
    n.keys = function() { return Object.keys(o) }, n.resolve = i, e.exports = n, n.id = 722 }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) { a(698); var n = a(10)(a(404), a(815), null, null);
    e.exports = n.exports }, function(e, t, a) { a(693); var n = a(10)(a(405), a(810), "data-v-419d3242", null);
    e.exports = n.exports }, function(e, t, a) { a(700); var n = a(10)(a(406), a(817), "data-v-858ffbfc", null);
    e.exports = n.exports }, function(e, t, a) { a(695); var n = a(10)(null, a(812), "data-v-4f111846", null);
    e.exports = n.exports }, function(e, t, a) { a(692); var n = a(10)(a(407), a(809), null, null);
    e.exports = n.exports }, function(e, t, a) { a(702); var n = a(10)(a(408), a(819), "data-v-e42b0866", null);
    e.exports = n.exports }, function(e, t, a) { a(701); var n = a(10)(a(409), a(818), null, null);
    e.exports = n.exports }, function(e, t, a) { a(689); var n = a(10)(a(410), a(806), null, null);
    e.exports = n.exports }, function(e, t, a) { a(690); var n = a(10)(a(411), a(807), null, null);
    e.exports = n.exports }, function(e, t, a) { a(696); var n = a(10)(a(412), a(813), null, null);
    e.exports = n.exports }, function(e, t, a) { a(697); var n = a(10)(a(413), a(814), null, null);
    e.exports = n.exports }, function(e, t, a) { a(703); var n = a(10)(a(414), a(820), null, null);
    e.exports = n.exports }, function(e, t, a) { a(691); var n = a(10)(a(415), a(808), null, null);
    e.exports = n.exports }, function(e, t, a) { a(694); var n = a(10)(a(416), a(811), null, null);
    e.exports = n.exports }, function(e, t, a) { a(699); var n = a(10)(a(403), a(816), null, null);
    e.exports = n.exports }, function(e, t) { e.exports = { render: function() { var e = this,
                t = e.$createElement;
            e._self._c || t; return e._m(0) }, staticRenderFns: [function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "about-container" }, [a("div", { staticClass: "ui fixed inverted menu" }, [a("div", { staticClass: "right menu" }, [a("a", { staticClass: "item", attrs: { href: "https://twitter.com/HubPressIO", target: "_blank" } }, [a("div", { staticClass: "ui icon", attrs: { "data-tooltip": "Follow us on twitter", "data-position": "bottom right" } }, [a("i", { staticClass: "twitter large icon" })])]), e._v(" "), a("a", { staticClass: "item", attrs: { href: "https://hubpressio-slack.herokuapp.com/", target: "_blank" } }, [a("div", { staticClass: "ui icon", attrs: { "data-tooltip": "Wanna chat with us?", "data-position": "bottom right" } }, [a("i", { staticClass: "slack large icon" })])]), e._v(" "), a("a", { staticClass: "item", attrs: { href: "https://github.com/HubPress", target: "_blank" } }, [a("div", { staticClass: "ui icon", attrs: { "data-tooltip": "HubPress is opensource :)", "data-position": "bottom right" } }, [a("i", { staticClass: "github large icon" })])])])]), e._v(" "), a("div", { staticClass: "about-content" }, [a("div", { staticClass: "ui container" }, [a("h2", { staticClass: "ui center aligned icon header" }, [a("i", { staticClass: "circular users icon" }), e._v("\n            The HubPress Team\n          ")]), e._v(" "), a("div", { staticClass: "ui divider" }), e._v(" "), a("div", { staticClass: "row" }, [a("div", { staticClass: "ui items divided" }, [a("div", { staticClass: "item" }, [a("div", { staticClass: "image" }, [a("img", { attrs: { src: "https://avatars1.githubusercontent.com/u/2006548?v=3&s=460" } })]), e._v(" "), a("div", { staticClass: "content" }, [a("a", { staticClass: "header" }, [e._v("Anthonny Quérouil")]), e._v(" "), a("div", { staticClass: "meta" }, [a("span", [e._v("The creator of HubPress")])]), e._v(" "), a("div", { staticClass: "description" }, [a("p", [e._v("Anthonny is a freelance developer and the creator of HubPress")]), e._v(" "), a("p", [e._v("He started HubPress two years ago")])]), e._v(" "), a("div", { staticClass: "extra" }, [a("a", { staticClass: "ui label", attrs: { href: "https://twitter.com/anthonny_q", target: "_blank" } }, [a("i", { staticClass: "twitter icon" }), e._v(" Twitter\n                              ")]), e._v(" "), a("a", { staticClass: "ui label", attrs: { href: "https://github.com/anthonny", target: "_blank" } }, [a("i", { staticClass: "github icon" }), e._v(" GitHub\n                              ")]), e._v(" "), a("a", { staticClass: "ui label", attrs: { href: "http://anthonnyquerouil.fr/", target: "_blank" } }, [a("i", { staticClass: "home icon" }), e._v(" Website\n                              ")])])])]), e._v(" "), a("div", { staticClass: "item" }, [a("div", { staticClass: "image" }, [a("img", { attrs: { src: "https://avatars0.githubusercontent.com/u/952793?v=3&s=460" } })]), e._v(" "), a("div", { staticClass: "content" }, [a("a", { staticClass: "header" }, [e._v("Jared Morgan")]), e._v(" "), a("div", { staticClass: "meta" }, [a("span", [e._v("The Docs guy")])]), e._v(" "), a("div", { staticClass: "description" }, [a("p", [e._v("By day, Jared is a Certified Scrum Product Owner (CSPO) and Technical Writer for Ladbrokes in Brisbane, Australia.")]), e._v(" "), a("p", [e._v("By night, he uses his craft to improve open source software products one README at a time.")]), e._v(" "), a("p", [e._v("In between, he uses his expertise in Pinball machines and knowledge of Android beta testing to improve digital pinball apps.")])]), e._v(" "), a("div", { staticClass: "extra" }, [a("a", { staticClass: "ui label", attrs: { href: "https://twitter.com/jaredmorgs", target: "_blank" } }, [a("i", { staticClass: "twitter icon" }), e._v(" Twitter\n                              ")]), e._v(" "), a("a", { staticClass: "ui label", attrs: { href: "https://github.com/jaredmorgs", target: "_blank" } }, [a("i", { staticClass: "github icon" }), e._v(" GitHub\n                              ")]), e._v(" "), a("a", { staticClass: "ui label", attrs: { href: "http://jaredleonmorgan.net/", target: "_blank" } }, [a("i", { staticClass: "home icon" }), e._v(" Website\n                              ")])])])])])])])])]) }] } }, function(e, t) { e.exports = { render: function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "post-container" }, [a("div", { staticClass: "ui fixed inverted menu" }, [a("div", { staticClass: "right menu" }, [a("a", { staticClass: "item", attrs: { href: "#" }, on: { click: function(t) { t.stopPropagation(), t.preventDefault(), e.showAsciidocHelp() } } }, [e._m(0)]), e._v(" "), a("a", { staticClass: "item", attrs: { href: "#" }, on: { click: function(t) { t.stopPropagation(), t.preventDefault(), e.switchLight() } } }, [a("div", { staticClass: "ui icon", attrs: { "data-tooltip": e.lightLabel, "data-position": "bottom right" } }, [a("i", { staticClass: "large icon", class: { sun: e.isDark, moon: !e.isDark } })])]), e._v(" "), a("a", { staticClass: "item", attrs: { href: "#" }, on: { click: function(t) { t.stopPropagation(), t.preventDefault(), e.switchPreview() } } }, [a("div", { staticClass: "ui icon", attrs: { "data-tooltip": e.previewLabel, "data-position": "bottom right" } }, [a("i", { staticClass: "large icon", class: { unhide: !e.isPreviewVisible, hide: e.isPreviewVisible } })])]), e._v(" "), e.isRemoteActionVisible ? a("a", { staticClass: "item", attrs: { href: "#" }, on: { click: function(t) { t.stopPropagation(), t.preventDefault(), e.remoteSave() } } }, [e._m(1)]) : e._e(), e._v(" "), e.isRemoteActionVisible ? a("a", { staticClass: "item", attrs: { href: "#" }, on: { click: function(t) { t.stopPropagation(), t.preventDefault(), e.publish() } } }, [a("div", { staticClass: "ui icon", attrs: { "data-tooltip": e.publishLabel, "data-position": "bottom right" } }, [a("i", { staticClass: "icons" }, [a("i", { staticClass: "cloud large icon", class: { download: e.post.published, upload: !e.post.published } })])])]) : e._e()])]), e._v(" "), e._m(2), e._v(" "), a("div", { staticClass: "post-editor" }, [a("div", { staticClass: "ui grid", class: { dark: e.isDark, light: !e.isDark } }, [a("div", { staticClass: "row" }, [a("div", { staticClass: "column", class: { "sixteen wide mobile height wide computer is-preview-visible": e.isPreviewVisible, "sixteen wide": !e.isPreviewVisible }, attrs: { id: "asciidoc-content" } }, [a("codemirror", { ref: "codeEditor", staticClass: "container", attrs: { code: e.content, options: e.editorOption }, on: { changed: e.contentChange } })], 1), e._v(" "), e.isPreviewVisible ? a("div", { staticClass: "column", class: { "sixteen wide mobile height wide computer is-preview-visible": e.isPreviewVisible }, attrs: { id: "asciidoc-preview" } }, [a("preview", { attrs: { post: e.post } })], 1) : e._e()])])])]) }, staticRenderFns: [function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "ui icon", attrs: { "data-tooltip": "Need some help?", "data-position": "bottom right" } }, [a("i", { staticClass: "help large icon" })]) }, function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "ui icon", attrs: { "data-tooltip": "Save your post remotely", "data-position": "bottom right" } }, [a("i", { staticClass: "save large icon" })]) }, function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "ui modal", attrs: { id: "asciidoc-help" } }, [a("i", { staticClass: "close icon" }), e._v(" "), a("div", { staticClass: "header" }, [e._v("\n      Asciidoc syntax help\n    ")]), e._v(" "), a("div", { staticClass: "content" }, [a("table", { staticClass: "ui table" }, [a("thead", [a("tr", [a("th", { staticClass: "heigth wide" }, [e._v("Result")]), e._v(" "), a("th", { staticClass: "heigth wide" }, [e._v("Asciidoc")])])]), e._v(" "), a("tbody", [a("tr", [a("td", [e._v("H1")]), e._v(" "), a("td", [e._v("= Title")])]), e._v(" "), a("tr", [a("td", [e._v("H2")]), e._v(" "), a("td", [e._v("== Title")])]), e._v(" "), a("tr", [a("td", [e._v("H3")]), e._v(" "), a("td", [e._v("=== Title")])]), e._v(" "), a("tr", [a("td", [a("strong", [e._v("Bold")])]), e._v(" "), a("td", [e._v("*content*")])]), e._v(" "), a("tr", [a("td", [a("i", [e._v("Emphasize")])]), e._v(" "), a("td", [e._v("_content_")])]), e._v(" "), a("tr", [a("td", [a("a", { attrs: { href: "#" } }, [e._v("Link")])]), e._v(" "), a("td", [e._v("http://asciidoctor.org[Asciidoctor]")])]), e._v(" "), a("tr", [a("td", [e._v("Image Block")]), e._v(" "), a("td", [e._v("image::sunset.jpg[]")])]), e._v(" "), a("tr", [a("td", [e._v("Image Inline")]), e._v(" "), a("td", [e._v('Click image:icons/pause.png[title="Pause"] when you need a break.')])]), e._v(" "), a("tr", [a("td", [e._v("Video")]), e._v(" "), a("td", [e._v("video::video_file.mp4[]")])]), e._v(" "), a("tr", [a("td", [e._v("Unordered list")]), e._v(" "), a("td", [e._v("* item")])]), e._v(" "), a("tr", [a("td", [e._v("Ordered list")]), e._v(" "), a("td", [e._v(". item")])]), e._v(" "), a("tr", [a("td", [a("code", [e._v("Inline code")])]), e._v(" "), a("td", [e._v("`code`")])])])]), e._v(" "), a("p", [e._v("\n        More informations about the Asciidoc syntax here: "), a("a", { attrs: { href: "http://asciidoctor.org/docs/asciidoc-syntax-quick-reference/", target: "_blank" } }, [e._v("AsciiDoc Syntax Quick Reference")])])])]) }] } }, function(e, t) {
    e.exports = {
        render: function() {
            var e = this,
                t = e.$createElement,
                a = e._self._c || t;
            return a("div", {}, [a("div", { staticClass: "field" }, [a("label", [e._v("Email")]), e._v(" "), a("input", {
                attrs: { type: "email", name: "social-email", placeholder: "Email" },
                domProps: { value: e.social.email }
            })]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Twitch")]), e._v(" "), a("div", { staticClass: "ui left icon input" }, [a("input", { attrs: { type: "text", name: "social-twitch", placeholder: "Twitch" }, domProps: { value: e.social.twitch } }), e._v(" "), a("i", { staticClass: "twitch icon" })])]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Youtube")]), e._v(" "), a("div", { staticClass: "ui left icon input" }, [a("input", { attrs: { type: "text", name: "social-youtube", placeholder: "Youtube" }, domProps: { value: e.social.youtube } }), e._v(" "), a("i", { staticClass: "youtube icon" })])]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Twitter")]), e._v(" "), a("div", { staticClass: "ui left icon input" }, [a("input", { attrs: { type: "text", name: "social-twitter", placeholder: "Twitter" }, domProps: { value: e.social.twitter } }), e._v(" "), a("i", { staticClass: "twitter icon" })])]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Facebook")]), e._v(" "), a("div", { staticClass: "ui left icon input" }, [a("input", { attrs: { type: "text", name: "social-facebook", placeholder: "Facebook" }, domProps: { value: e.social.facebook } }), e._v(" "), a("i", { staticClass: "facebook icon" })])]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Instagram")]), e._v(" "), a("div", { staticClass: "ui left icon input" }, [a("input", { attrs: { type: "text", name: "social-instagram", placeholder: "Instagram" }, domProps: { value: e.social.instagram } }), e._v(" "), a("i", { staticClass: "instagram icon" })])]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Discord")]), e._v(" "), a("div", { staticClass: "ui left icon input" }, [a("input", { attrs: { type: "text", name: "social-discord", placeholder: "Discord" }, domProps: { value: e.social.discord } }), e._v(" "), a("i", { staticClass: "discord icon" })])]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Flickr")]), e._v(" "), a("div", { staticClass: "ui left icon input" }, [a("input", { attrs: { type: "text", name: "social-flickr", placeholder: "Flickr" }, domProps: { value: e.social.flickr } }), e._v(" "), a("i", { staticClass: "flickr icon" })])]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Google Plus")]), e._v(" "), a("div", { staticClass: "ui left icon input" }, [a("input", { attrs: { type: "text", name: "social-googleplus", placeholder: "Google Plus" }, domProps: { value: e.social.googleplus } }), e._v(" "), a("i", { staticClass: "google plus icon" })])]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Pinterest")]), e._v(" "), a("div", { staticClass: "ui left icon input" }, [a("input", { attrs: { type: "text", name: "social-pinterest", placeholder: "Pinterest" }, domProps: { value: e.social.pinterest } }), e._v(" "), a("i", { staticClass: "pinterest icon" })])]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Linkedin")]), e._v(" "), a("div", { staticClass: "ui left icon input" }, [a("input", { attrs: { type: "text", name: "social-linkedin", placeholder: "Linkedin" }, domProps: { value: e.social.linkedin } }), e._v(" "), a("i", { staticClass: "linkedin icon" })])]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Github")]), e._v(" "), a("div", { staticClass: "ui left icon input" }, [a("input", { attrs: { type: "text", name: "social-github", placeholder: "Github" }, domProps: { value: e.social.github } }), e._v(" "), a("i", { staticClass: "github icon" })])]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Stack Overflow")]), e._v(" "), a("div", { staticClass: "ui left icon input" }, [a("input", { attrs: { type: "text", name: "social-stackoverflow", placeholder: "Stack Overflow" }, domProps: { value: e.social.stackoverflow } }), e._v(" "), a("i", { staticClass: "stack overflow icon" })])])])
        },
        staticRenderFns: []
    }
}, function(e, t) { e.exports = { render: function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "settings-container" }, [a("div", { staticClass: "ui fixed inverted menu" }, [a("div", { staticClass: "right menu" }, [a("a", { staticClass: "item", on: { click: function(t) { t.stopPropagation(), t.preventDefault(), e.submit(t) } } }, [e._m(0)])])]), e._v(" "), a("div", { staticClass: "ui container settings-content" }, [e._m(1), e._v(" "), a("div", { staticClass: "ui divider" }), e._v(" "), a("form", { staticClass: "ui form", attrs: { id: "mainForm" } }, [a("div", { staticClass: "ui secondary pointing menu" }, [a("div", { staticClass: "item active", attrs: { "data-tab": "application", id: "application-tab" } }, [e._v("Application")]), e._v(" "), e._l(e.tabs, function(t) { return a("div", { staticClass: "item", attrs: { "data-tab": t.id } }, [e._v(e._s(t.label))]) })], 2), e._v(" "), a("div", { staticClass: "ui bottom attached tab segment active", attrs: { "data-tab": "application" } }, [a("h4", { staticClass: "ui dividing header" }, [e._v("Domain")]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("CNAME")]), e._v(" "), a("input", { attrs: { type: "text", name: "application-cname", placeholder: "CNAME" }, domProps: { value: e.config.meta.cname } })]), e._v(" "), a("h4", { staticClass: "ui dividing header" }, [e._v("Metadata (set in config.json)")]), e._v(" "), a("div", { staticClass: "disabled field" }, [a("label", [e._v("GitHub username")]), e._v(" "), a("input", { attrs: { type: "text", disabled: "", name: "application-github-username", placeholder: "Github username" }, domProps: { value: e.config.meta.username } })]), e._v(" "), a("div", { staticClass: "disabled field" }, [a("label", [e._v("GitHub repository name")]), e._v(" "), a("input", { attrs: { type: "text", disabled: "", name: "application-github-repository-name", placeholder: "GitHub repository name" }, domProps: { value: e.config.meta.repositoryName } })]), e._v(" "), a("div", { staticClass: "disabled field" }, [a("label", [e._v("GitHub branch")]), e._v(" "), a("input", { attrs: { type: "text", disabled: "", name: "application-github-branch", placeholder: "GitHub branch" }, domProps: { value: e.config.meta.branch } })]), e._v(" "), e._m(2)]), e._v(" "), e._l(e.tabs, function(e) { return a("div", { staticClass: "ui bottom attached tab segment ", attrs: { "data-tab": e.id } }, [a(e.id, { tag: "component" })], 1) })], 2)])]) }, staticRenderFns: [function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "ui icon", attrs: { "data-tooltip": "Save your settings", "data-position": "bottom right" } }, [a("i", { staticClass: "save large icon" })]) }, function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("h2", { staticClass: "ui center aligned icon header" }, [a("i", { staticClass: "circular settings icon" }), e._v("\n      Settings\n    ")]) }, function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "disabled field" }, [a("label", [e._v("Blog URL")]), e._v(" "), a("input", { attrs: { type: "text", disabled: "", name: "application-blog-url", placeholder: "Blog URL" } })]) }] } }, function(e, t) { e.exports = { render: function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "ui black launch right attached fixed button", attrs: { id: "menu-button" }, on: { click: e.toggleNavigation } }, [a("i", { staticClass: "content large icon" })]) }, staticRenderFns: [] } }, function(e, t) { e.exports = { render: function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "initialise-configuration" }, [e._m(0), e._v(" "), a("div", { staticClass: "ui divider" }), e._v(" "), a("div", { staticClass: "content" }, [e._v("\n    We need to initialize your configuration before a first use.\n  ")]), e._v(" "), a("div", { staticClass: "ui divider" }), e._v(" "), a("form", { staticClass: "ui form", attrs: { id: "configurationForm" }, on: { submit: function(t) { t.preventDefault(), e.submit() } } }, [a("div", { staticClass: "required field" }, [a("label", [e._v("Username")]), e._v(" "), a("input", { directives: [{ name: "model", rawName: "v-model", value: e.username, expression: "username" }], attrs: { type: "text", name: "configuration-username", placeholder: "Your github username" }, domProps: { value: e.username }, on: { input: function(t) { t.target.composing || (e.username = t.target.value) } } })]), e._v(" "), a("div", { staticClass: "required field" }, [a("label", [e._v("Repository name")]), e._v(" "), a("input", { directives: [{ name: "model", rawName: "v-model", value: e.repositoryName, expression: "repositoryName" }], attrs: { type: "text", name: "configuration-cname", placeholder: "The name of your repository" }, domProps: { value: e.repositoryName }, on: { input: function(t) { t.target.composing || (e.repositoryName = t.target.value) } } })]), e._v(" "), a("div", { staticClass: "required field" }, [a("label", [e._v("Branch")]), e._v(" "), a("div", { staticClass: "ui selection dropdown" }, [a("input", { directives: [{ name: "model", rawName: "v-model", value: e.branch, expression: "branch" }], attrs: { type: "hidden", name: "branch" }, domProps: { value: e.branch }, on: { input: function(t) { t.target.composing || (e.branch = t.target.value) } } }), e._v(" "), a("i", { staticClass: "dropdown icon" }), e._v(" "), a("div", { staticClass: "default text" }, [e._v("master")]), e._v(" "), e._m(1)])]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Domain name")]), e._v(" "), a("input", { directives: [{ name: "model", rawName: "v-model", value: e.cname, expression: "cname" }], attrs: { type: "text", name: "configuration-cname", placeholder: "Your domain name if you have one" }, domProps: { value: e.cname }, on: { input: function(t) { t.target.composing || (e.cname = t.target.value) } } })]), e._v(" "), a("button", { staticClass: "ui fluid large submit button", attrs: { type: "submit", name: "button", disabled: !e.isValid } }, [e._v("Ok, let's go!")])]), e._v(" "), e._m(2)]) }, staticRenderFns: [function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("h2", { staticClass: "ui center aligned icon header" }, [a("i", { staticClass: "circular configure icon" }), e._v("\n    Configuration\n  ")]) }, function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "menu" }, [a("div", { staticClass: "item", attrs: { "data-value": "master" } }, [e._v("master")]), e._v(" "), a("div", { staticClass: "item", attrs: { "data-value": "gh-pages" } }, [e._v("gh-pages")])]) }, function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "ui message" }, [e._v("\n    If you have questions about how to use HubPress, "), a("a", { attrs: { href: "https://hubpress.gitbooks.io/hubpress-knowledgebase/content/" } }, [e._v("here is the right place.")])]) }] } }, function(e, t) { e.exports = { render: function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "pusher" }, [a("router-view")], 1) }, staticRenderFns: [] } }, function(e, t) { e.exports = { render: function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "posts-container" }, [a("div", { staticClass: "ui fixed inverted menu" }, [a("div", { staticClass: "right menu" }, [a("div", { staticClass: "ui right aligned category search item" }, [a("div", { staticClass: "ui transparent icon input inverted" }, [a("input", { directives: [{ name: "model", rawName: "v-model", value: e.filterValue, expression: "filterValue" }], attrs: { type: "text", placeholder: "Filter by title or tag..." }, domProps: { value: e.filterValue }, on: { input: function(t) { t.target.composing || (e.filterValue = t.target.value) } } }), e._v(" "), a("i", { staticClass: "filter link icon" })]), e._v(" "), a("div", { staticClass: "results" })]), e._v(" "), a("a", { staticClass: "item", attrs: { href: "#" }, on: { click: function(t) { t.stopPropagation(), t.preventDefault(), e.synchronize() } } }, [e._m(0)]), e._v(" "), a("a", { staticClass: "item", attrs: { href: "#" }, on: { click: function(t) { t.stopPropagation(), t.preventDefault(), e.newPost() } } }, [e._m(1)])])]), e._v(" "), a("div", { staticClass: "ui basic modal" }, [a("div", { staticClass: "ui icon header" }, [a("i", { staticClass: "trash icon" }), e._v(' Delete the post "' + e._s(e.postToDelete.title) + '"\n        ')]), e._v(" "), e._m(2), e._v(" "), e._m(3)]), e._v(" "), a("div", { staticClass: "posts ui container centered" }, [a("h2", { staticClass: "ui center aligned icon header" }, [a("i", { staticClass: "circular unordered list icon" }), e._v("\n        " + e._s(e.posts.length) + " post(s)\n        "), e.filterValue.trim().length ? a("span", {}, [e._v("\n          filtered by "), a("span", { staticClass: "ui tiny header orange" }, [e._v(e._s(e.filterValue))])]) : e._e()]), e._v(" "), a("div", { staticClass: "ui divider" }), e._v(" "), a("div", { staticClass: "ui cards centered aligned" }, e._l(e.posts, function(t) { return a("div", { staticClass: "ui card", class: e.getPostStatusColor(t) }, [a("div", { staticClass: "content" }, [a("div", { staticClass: "header" }, [e._v(e._s(t.title))]), e._v(" "), a("div", { staticClass: "meta" }, [a("span", { staticClass: "right floated time" }, [e._v(e._s(e.publishedAt(t)))]), e._v(" "), a("span", { staticClass: "status" }, [e._v(e._s(e.status(t)))])])]), e._v(" "), a("div", { staticClass: "image cover" }, [a("div", { style: "background-image: url('" + e.postCoverUrl(t) + "')" })]), e._v(" "), a("div", { staticClass: "extra content" }, [a("i", { staticClass: "right floated large edit link icon", on: { click: function(a) { e.navigateToPost(t) } } }), e._v(" "), a("i", { staticClass: "right floated large trash link icon", on: { click: function(a) { e.displayConfirmMessage(t) } } }), e._v(" "), a("div", { staticClass: "author" }, [a("img", { staticClass: "ui avatar image", attrs: { src: e.getPostAuthor(t).avatar_url } }), e._v(" " + e._s(e.getPostAuthor(t).name || e.getPostAuthor(t).login) + "\n                    ")])]), e._v(" "), a("div", { staticClass: "extra content" }, [e._l(t.tags, function(t) { return a("a", { staticClass: "ui tiny label" }, [a("i", { staticClass: "tag icon" }), e._v(" " + e._s(t) + "\n                    ")]) }), e._v(" "), t.tags && t.tags.length ? e._e() : a("div", {}, [e._v("\n                        No tag\n                    ")])], 2)]) }))])]) }, staticRenderFns: [function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "ui icon", attrs: { "data-tooltip": "Synchronize content", "data-position": "bottom right" } }, [a("i", { staticClass: "refresh large icon" })]) }, function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "ui icon", attrs: { "data-tooltip": "Create a post", "data-position": "bottom right" } }, [a("i", { staticClass: "add large icon" })]) }, function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "content" }, [a("p", [e._v("Are you sure you want to delete this post?")])]) }, function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "actions" }, [a("div", { staticClass: "ui red basic cancel inverted button" }, [a("i", { staticClass: "remove icon" }), e._v(" No\n            ")]), e._v(" "), a("div", { staticClass: "ui green ok inverted button" }, [a("i", { staticClass: "checkmark icon" }), e._v(" Yes\n            ")])]) }] } }, function(e, t) { e.exports = { render: function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", {}, [a("h1", { staticClass: "ui header" }, [e._v(e._s(e.post.title))]), e._v(" "), a("div", { attrs: { id: "html-rendering" }, domProps: { innerHTML: e._s(e.post.html) } })]) }, staticRenderFns: [] } }, function(e, t) { e.exports = { render: function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "pushable", attrs: { id: "app" } }, [e.isInitializing ? a("div", { staticClass: "ui active inverted dimmer" }, [a("div", { staticClass: "ui text loader" }, [e._v("Initializing...")])]) : e._e(), e._v(" "), e.isLoading ? a("div", { staticClass: "ui active inverted dimmer" }, [a("div", { staticClass: "ui text loader" })]) : e._e(), e._v(" "), a("div", { staticClass: "ui icon message transition", class: (n = { hidden: !e.notification.isVisible }, n[e.notification.level] = e.notification.level, n), attrs: { id: "global-notification" } }, [e.notification.icon ? a("i", { staticClass: "icon", class: e.notification.icon }) : e._e(), e._v(" "), a("i", { staticClass: "close icon" }), e._v(" "), a("div", { staticClass: "content" }, [a("div", { staticClass: "header" }, [e._v("\n        " + e._s(e.notification.header) + "\n      ")]), e._v(" "), a("p", [e._v(e._s(e.notification.message))])])]), e._v(" "), e.isAuthenticatedAndReady ? a("menu-button") : e._e(), e._v(" "), e.isAuthenticatedAndReady ? a("navigation") : e._e(), e._v(" "), e.isInitialized ? a("main-container") : e._e()], 1); var n }, staticRenderFns: [] } }, function(e, t) { e.exports = { render: function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("textarea") }, staticRenderFns: [] } }, function(e, t) { e.exports = { render: function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "ui vertical inverted sidebar menu left" }, [a("div", { staticClass: "item user" }, [a("img", { staticClass: "ui tiny centered bordered circular image", attrs: { src: e.currentUser.avatar_url } }), e._v(" "), a("div", { staticClass: "header" }, [e._v("\n      " + e._s(e.currentUser.name) + "\n    ")]), e._v(" "), a("div", { staticClass: "subheader centered" }, [e._v("@" + e._s(e.currentUser.login))])]), e._v(" "), e._l(e.navigations, function(t) { return a("router-link", { staticClass: "item", attrs: { "active-class": "active", to: "/" + t.path, replace: "" }, nativeOn: { click: function(t) { e.toggleMenu(t) } } }, [e._v("\n    " + e._s(t.label) + "\n  ")]) }), e._v(" "), a("router-link", { staticClass: "item", attrs: { "active-class": "active", to: "/settings", replace: "" }, nativeOn: { click: function(t) { e.toggleMenu(t) } } }, [e._v("\n    Settings\n  ")]), e._v(" "), e._m(0), e._v(" "), a("div", { staticClass: "item" }, [a("div", { staticClass: "header" }, [e._v("About HubPress")]), e._v(" "), a("div", { staticClass: "menu" }, [a("router-link", { staticClass: "item", attrs: { "active-class": "active", to: "/about", replace: "" }, nativeOn: { click: function(t) { e.toggleMenu(t) } } }, [e._v("\n        Team"), a("i", { staticClass: "users icon" })]), e._v(" "), e._m(1), e._v(" "), a("a", { staticClass: "item", attrs: { href: e.upgrade, target: "_blank" } }, [e._v("Check for upgrade"), a("i", { staticClass: "checkmark icon" })]), e._v(" "), a("div", { staticClass: "item" }, [a("img", { staticClass: "ui centered logo image", attrs: { src: "http://hubpress.io/img/freeze/logo.png" } }), e._v(" "), a("div", { staticClass: "version" }, [e._v("\n          v" + e._s(e.hubpressVersion) + "\n        ")])])], 1)])], 2) }, staticRenderFns: [function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "item" }, [a("div", { staticClass: "header" }, [e._v("Help us")]), e._v(" "), a("div", { staticClass: "menu" }, [a("a", { staticClass: "item", attrs: { href: "https://hubpress.gitbooks.io/contributing-to-hubpress/content/", target: "_blank" } }, [e._v("Contribute"), a("i", { staticClass: "smile icon" })]), e._v(" "), a("a", { staticClass: "item", attrs: { href: "https://gratipay.com/hubpress/", target: "_blank" } }, [e._v("Donation Gratipay"), a("i", { staticClass: "payment icon" })]), e._v(" "), a("a", { staticClass: "item", attrs: { href: "https://www.paypal.me/anthonny/5", target: "_blank" } }, [e._v("Donation PayPal"), a("i", { staticClass: "paypal icon" })])])]) }, function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("a", { staticClass: "item", attrs: { href: "https://github.com/orgs/HubPress/people", target: "_blank" } }, [e._v("Contributors"), a("i", { staticClass: "heart icon" })]) }] } }, function(e, t) { e.exports = { render: function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", [e._v("\n  Dashboard\n")]) }, staticRenderFns: [] } }, function(e, t) { e.exports = { render: function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "ui middle aligned center aligned grid" }, [e.requireInitilisation ? a("div", { staticClass: "column" }, [a("div", { staticClass: "ui segment" }, [a("initialisation-component", { tag: "component" })], 1)]) : e._e(), e._v(" "), e.requireInitilisation ? e._e() : a("div", { staticClass: "column", attrs: { id: "loginForm" } }, [a("div", { staticClass: "ui segment" }, [a("img", { staticClass: "image", attrs: { src: "http://hubpress.io/img/freeze/logo.png" } }), e._v(" "), a("h2", { staticClass: "ui header" }, [e._v("\n        Welcome!\n      ")]), e._v(" "), a("div", { staticClass: "content" }), e._v(" "), a("form", { staticClass: "ui medium form", on: { submit: function(t) { t.preventDefault(), e.login({ email: e.email, password: e.password }) } } }, [a("div", { staticClass: "field" }, [a("div", { staticClass: "ui left icon input" }, [a("i", { staticClass: "user icon" }), e._v(" "), a("input", { attrs: { type: "text", name: "email", placeholder: "Username or e-mail address" }, domProps: { value: e.email }, on: { input: e.updateEmail } })])]), e._v(" "), a("div", { staticClass: "field" }, [a("div", { staticClass: "ui left icon input" }, [a("i", { staticClass: "lock icon" }), e._v(" "), a("input", { attrs: { type: "password", name: "password", placeholder: "Password" }, domProps: { value: e.password }, on: { input: e.updatePassword } })])]), e._v(" "), e.isTwoFactorCodeRequired ? a("div", { staticClass: "field" }, [a("div", { staticClass: "ui left icon input" }, [a("i", { staticClass: "key icon" }), e._v(" "), a("input", { attrs: { type: "text", name: "twoFactorCode", placeholder: "Two factor code" }, domProps: { value: e.twoFactorCode }, on: { input: e.updateTwoFactorCode } })])]) : e._e(), e._v(" "), a("button", { staticClass: "ui fluid large submit button", attrs: { type: "submit", name: "button" } }, [e._v("Login")])]), e._v(" "), e._m(0)])])]) }, staticRenderFns: [function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", { staticClass: "ui message" }, [e._v("\n        If you have questions about how to use HubPress, "), a("a", { attrs: { href: "https://hubpress.gitbooks.io/hubpress-knowledgebase/content/" } }, [e._v("here is the right place.")])]) }] } }, function(e, t) { e.exports = { render: function() { var e = this,
                t = e.$createElement,
                a = e._self._c || t; return a("div", {}, [a("h4", { staticClass: "ui dividing header" }, [e._v("Informations")]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Title")]), e._v(" "), a("input", { attrs: { type: "text", name: "hubpress-title", placeholder: "Title" }, domProps: { value: e.site.title } })]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Description")]), e._v(" "), a("input", { attrs: { type: "text", name: "hubpress-description", placeholder: "Description" }, domProps: { value: e.site.description } })]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Logo")]), e._v(" "), a("input", { attrs: { type: "text", name: "hubpress-logo", placeholder: "Logo" }, domProps: { value: e.site.logo } })]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Cover image")]), e._v(" "), a("input", { attrs: { type: "text", name: "hubpress-cover-image", placeholder: "Cover image" }, domProps: { value: e.site.cover } })]), e._v(" "), a("h4", { staticClass: "ui dividing header" }, [e._v("Rendering")]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Live preview render delay (ms)")]), e._v(" "), a("input", { attrs: { type: "text", name: "hubpress-render-delay", placeholder: "300" }, domProps: { value: e.meta.delay } })]), e._v(" "), a("h4", { staticClass: "ui dividing header" }, [e._v("Generation")]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Theme")]), e._v(" "), a("input", { attrs: { type: "text", name: "hubpress-theme", placeholder: "Theme" }, domProps: { value: e.theme.name } })]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Posts per page")]), e._v(" "), a("input", { attrs: { type: "text", name: "hubpress-posts-per-page", placeholder: "Posts per page" }, domProps: { value: e.site.postsPerPage } })]), e._v(" "), a("h4", { staticClass: "ui dividing header" }, [e._v("Services")]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Google analytics")]), e._v(" "), a("input", { attrs: { type: "text", name: "hubpress-ga", placeholder: "Google analytics" }, domProps: { value: e.site.googleAnalytics } })]), e._v(" "), a("div", { staticClass: "field" }, [a("label", [e._v("Disqus shortname")]), e._v(" "), a("input", { attrs: { type: "text", name: "hubpress-disqus", placeholder: "Disqus shortname" }, domProps: { value: e.site.disqus } })])]) }, staticRenderFns: [] } }, , , , , , , , function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}]);
//# sourceMappingURL=app.7cfac74f13156077d935.js.map