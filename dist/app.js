(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("main.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;

require('aurelia-loader-fusebox');

require('aurelia-bootstrapper');

require('material-design-lite');

function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging().plugin('aurelia-animator-css').plugin('aurelia-mdl-plugin').feature('shared').feature('home').feature('users');

    aurelia.use.feature('aurelia-fusebox-hmr');

    aurelia.start().then(function () {
        return aurelia.setRoot('shell/app');
    });
}
});
___scope___.file("aurelia-fusebox-hmr/index.js", function(exports, require, module, __filename, __dirname){

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;
function configure(config) {
    FuseBox.addPlugin({ hmrUpdate: hmrUpdate });
}

function hmrUpdate(_ref) {
    var type = _ref.type,
        path = _ref.path,
        content = _ref.content;

    window.location.reload();

    return true;
}
});
___scope___.file("home/index.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;

var _aureliaRouter = require('aurelia-router');

function configure(aureliaConfig) {
    var router = aureliaConfig.container.get(_aureliaRouter.Router);

    var routes = [{ route: '', name: 'home', moduleId: 'home/welcome', title: 'Home' }];

    routes.forEach(function (route) {
        return router.addRoute(route);
    });
}
});
___scope___.file("home/team-card/team.css", function(exports, require, module, __filename, __dirname){

module.exports = ".info-card .mdl-card__actions {\n    display: flex;\n}\n\n.info-card a.mdl-button, .info-card .divider {\n    flex: 1;\n}\n"
});
___scope___.file("home/team-card/team.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n    <require from=\"./team.css\"></require>\n\n    <div class=\"info-card mdl-card mdl-cell mdl-shadow--6dp\">\n            <div class=\"mdl-card__title mdl-card--border\">\n                <h2 class=\"mdl-card__title-text\">${ title }</h2>\n            </div>\n\n            <div class=\"mdl-card__supporting-text\">\n                <div class=\"mdl-list\">\n                    <div class=\"mdl-list__item\" repeat.for=\"user of users | limit:3\">\n                        <span class=\"mdl-list__item-primary-content\">\n                            <i class=\"material-icons mdl-list__item-avatar\">person</i>\n                            <span>${ user.login }</span>\n                        </span>\n                        <a class=\"mdl-list__item-secondary-action\" href=\"${user.html_url}\">\n                            <i class=\"material-icons\">info</i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"mdl-card__actions mdl-card--border\">\n                <a class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\" route-href=\"route: users; params.bind: { org: 'aurelia' }\">\n                    <i class=\"material-icons\">send</i>\n                    View All\n                </a>\n            </div>\n        </div>\n</template>\n"
});
___scope___.file("home/team-card/team.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AureliaTeam = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2;

var _aureliaFramework = require('aurelia-framework');

var _data = require('../../shared/data.service');

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var AureliaTeam = exports.AureliaTeam = (_dec = (0, _aureliaFramework.inject)(_data.DataService), _dec2 = (0, _aureliaFramework.containerless)(), _dec3 = (0, _aureliaFramework.customElement)('team-card'), _dec4 = (0, _aureliaFramework.bindable)(), _dec5 = (0, _aureliaFramework.bindable)(), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
    function AureliaTeam(dataService) {
        _classCallCheck(this, AureliaTeam);

        _initDefineProp(this, 'org', _descriptor, this);

        _initDefineProp(this, 'title', _descriptor2, this);

        this.users = null;

        this.dataService = dataService;
    }

    _createClass(AureliaTeam, [{
        key: 'attached',
        value: function attached() {
            var _this = this;

            this.dataService.getUsers(this.org).then(function (users) {
                return _this.users = users;
            });
        }
    }]);

    return AureliaTeam;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'org', [_dec4], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec5], {
    enumerable: true,
    initializer: null
})), _class2)) || _class) || _class) || _class);
});
___scope___.file("shared/data.service.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DataService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

require('whatwg-fetch');

var _aureliaFramework = require('aurelia-framework');

var _aureliaFetchClient = require('aurelia-fetch-client');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataService = exports.DataService = (_dec = (0, _aureliaFramework.inject)(_aureliaFetchClient.HttpClient), _dec(_class = function () {
    function DataService(http) {
        _classCallCheck(this, DataService);

        http.configure(function (config) {
            config.useStandardConfiguration().withBaseUrl('https://api.github.com/');
        });

        this.http = http;
    }

    _createClass(DataService, [{
        key: 'getUsers',
        value: function getUsers(org) {
            var path = org ? 'orgs/' + org + '/members' : 'users';

            return this.http.fetch(path).then(function (response) {
                return response.json();
            });
        }
    }]);

    return DataService;
}()) || _class);
});
___scope___.file("home/welcome.css", function(exports, require, module, __filename, __dirname){

module.exports = ".spacer {\n    margin: 25px 0;\n}\n\n.welcome-card .mdl-card__actions {\n    display: flex;\n}\n\n.welcome-card button, .welcome-card .divider {\n    flex: 1;\n}\n"
});
___scope___.file("home/welcome.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n    <require from=\"./welcome.css\"></require>\n    <require from=\"./team-card/team\"></require>\n\n    <div class=\"spacer\"></div>\n\n    <section class=\"container mdl-grid au-animate\">\n        <div class=\"welcome-card mdl-card mdl-cell mdl-shadow--6dp\">\n            <div class=\"mdl-card__title mdl-card--border\">\n                <h2 class=\"mdl-card__title-text\">${heading}</h2>\n            </div>\n\n            <div class=\"mdl-card__supporting-text\">\n                <form role=\"form\">\n\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input class=\"mdl-textfield__input\" type=\"text\" id=\"fn\" value.bind=\"firstName\">\n                        <label class=\"mdl-textfield__label\" for=\"fn\">First_Name</label>\n                    </div>\n\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input class=\"mdl-textfield__input\" type=\"text\" id=\"ln\" value.bind=\"lastName\">\n                        <label class=\"mdl-textfield__label\" for=\"ln\">Last Name</label>\n                    </div>\n\n                    <p class=\"help-block\"><label>Full Name:</label> ${fullName | upper}</p>\n                </form>\n            </div>\n\n            <div class=\"divider\"></div>\n\n            <div class=\"mdl-card__actions mdl-card--border\">\n                <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\" click.delegate=\"submit()\">\n                    <i class=\"material-icons\">send</i>\n                    Submit\n                </button>\n            </div>\n        </div>\n\n        <team-card org.one-time=\"'aurelia'\" title.one-time=\"'Aurelia Team'\"></team-card>\n        <!--<team-card org.one-time=\"'fuse-box'\"></team-card>-->\n\n    </section>\n</template>\n"
});
___scope___.file("home/welcome.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UpperValueConverter = exports.Welcome = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _aureliaFramework = require('aurelia-framework');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Welcome = exports.Welcome = (_dec = (0, _aureliaFramework.computedFrom)('firstName', 'lastName'), (_class = function () {
    function Welcome() {
        _classCallCheck(this, Welcome);

        this.heading = 'Aurelia On FuseBox!';
        this.firstName = 'John';
        this.lastName = 'Doe';
        this.previousValue = this.fullName;
    }

    _createClass(Welcome, [{
        key: 'submit',
        value: function submit() {
            this.previousValue = this.fullName;
            alert('Welcome!!, ' + this.fullName + '!');
        }
    }, {
        key: 'canDeactivate',
        value: function canDeactivate() {
            if (this.fullName !== this.previousValue) {
                return confirm('Are you sure you want to leave?');
            }
        }
    }, {
        key: 'fullName',
        get: function get() {
            return this.firstName + ' ' + this.lastName;
        }
    }]);

    return Welcome;
}(), (_applyDecoratedDescriptor(_class.prototype, 'fullName', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'fullName'), _class.prototype)), _class));

var UpperValueConverter = exports.UpperValueConverter = function () {
    function UpperValueConverter() {
        _classCallCheck(this, UpperValueConverter);
    }

    _createClass(UpperValueConverter, [{
        key: 'toView',
        value: function toView(value) {
            return value && value.toUpperCase();
        }
    }]);

    return UpperValueConverter;
}();
});
___scope___.file("shared/drawer/au-drawer.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n    <div class=\"mdl-layout__drawer\">\n        <span class=\"mdl-layout-title\">${router.title}</span>\n        <nav class=\"mdl-navigation\">\n            <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n            <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n            <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n            <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n        </nav>\n    </div>\n</template>\n"
});
___scope___.file("shared/drawer/au-drawer.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuDrawer = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

var _aureliaFramework = require('aurelia-framework');

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var AuDrawer = exports.AuDrawer = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.customElement)('au-drawer'), _dec(_class = _dec2(_class = (_class2 = function AuDrawer() {
    _classCallCheck(this, AuDrawer);

    _initDefineProp(this, 'router', _descriptor, this);
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'router', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
})), _class2)) || _class) || _class);
});
___scope___.file("shared/footer/au-footer.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n    <footer class=\"mdl-mini-footer\">\n        <div class=\"mdl-mini-footer__left-section\">\n            <div class=\"mdl-logo\">Title</div>\n            <ul class=\"mdl-mini-footer__link-list\">\n                <li><a href=\"#\">Help</a></li>\n                <li><a href=\"#\">Privacy & Terms</a></li>\n            </ul>\n        </div>\n    </footer>\n</template>\n"
});
___scope___.file("shared/footer/au-footer.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuFooter = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

var _aureliaFramework = require('aurelia-framework');

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var AuFooter = exports.AuFooter = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.customElement)('au-footer'), _dec(_class = _dec2(_class = (_class2 = function AuFooter() {
    _classCallCheck(this, AuFooter);

    _initDefineProp(this, 'router', _descriptor, this);
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'router', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
})), _class2)) || _class) || _class);
});
___scope___.file("shared/header/au-header.css", function(exports, require, module, __filename, __dirname){

module.exports = ".au-header .au-title {\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n}\n\n.au-title span {\n    padding-left: 6px;\n}\n\n.au-header .mdl-navigation__link {\n    padding: 0 12px;\n    text-transform: uppercase;\n    transition: box-shadow 0.4s cubic-bezier(.25, .8, .25, 1), background-color 0.4s cubic-bezier(.25, .8, .25, 1);\n}\n\n.au-header .mdl-navigation__link:hover,\n.au-header .mdl-navigation__link.is-active {\n    background: rgba(232, 232, 232, .1);\n    border-bottom: 1px solid #f5f5f5;\n}\n"
});
___scope___.file("shared/header/au-header.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n    <require from=\"./au-header.css\"></require>\n\n    <header class=\"au-header mdl-layout__header mdl-layout__header--scroll\">\n        <div class=\"mdl-layout__header-row\">\n            <span class=\"mdl-layout-title\">\n                <a route-href=\"route: home\" class=\"au-title mdl-color-text--grey-100\">\n                    <i class=\"material-icons\">home</i>\n                    <span>${ router.title }</span>\n                </a>\n            </span>\n            <div class=\"mdl-layout-spacer\"></div>\n\n            <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\n                <a class=\"mdl-navigation__link\" route-href=\"route: users\">Github Users</a>\n            </nav>\n        </div>\n    </header>\n</template>\n"
});
___scope___.file("shared/header/au-header.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuHeader = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

var _aureliaFramework = require('aurelia-framework');

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var AuHeader = exports.AuHeader = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.customElement)('au-header'), _dec(_class = _dec2(_class = (_class2 = function AuHeader() {
    _classCallCheck(this, AuHeader);

    _initDefineProp(this, 'router', _descriptor, this);
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'router', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
})), _class2)) || _class) || _class);
});
___scope___.file("shared/index.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;
function configure(config) {
    config.globalResources(['./header/au-header', './drawer/au-drawer', './footer/au-footer', './limit.vc']);
}
});
___scope___.file("shared/limit.vc.js", function(exports, require, module, __filename, __dirname){

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LimitValueConverter = exports.LimitValueConverter = function () {
    function LimitValueConverter() {
        _classCallCheck(this, LimitValueConverter);
    }

    _createClass(LimitValueConverter, [{
        key: "toView",
        value: function toView(value, max) {
            return value && value.slice(0, max);
        }
    }]);

    return LimitValueConverter;
}();
});
___scope___.file("shell/app.css", function(exports, require, module, __filename, __dirname){

module.exports = "body {\n    font-family: Roboto, sans-serif;\n}\n\n.container {\n    max-width: 1170px;\n}\n\n/* animate page transitions */\n.au-enter-active {\n    animation: fadeInRight .5s;\n}\n\n@-webkit-keyframes fadeInRight {\n    0% {\n        opacity: 0;\n        transform: translate3d(100%, 0, 0)\n    }\n    100% {\n        opacity: 1;\n        transform: none\n    }\n}\n\n@keyframes fadeInRight {\n    0% {\n        opacity: 0;\n        transform: translate3d(100%, 0, 0)\n    }\n    100% {\n        opacity: 1;\n        transform: none\n    }\n}\n"
});
___scope___.file("shell/app.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n    <require from=\"material-design-lite/material.min.css\"></require>\n    <require from=\"./app.css\"></require>\n\n    <div class=\"mdl-layout mdl-js-layout\">\n\n        <au-header router.bind=\"router\"></au-header>\n        <au-drawer router.bind=\"router\"></au-drawer>\n\n        <main class=\"mdl-layout__content mdl-color--grey-200\">\n            <router-view swap-order=\"after\"></router-view>\n        </main>\n\n        <au-footer router.bind=\"router\"></au-footer>\n    </div>\n</template>\n"
});
___scope___.file("shell/app.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = exports.App = function () {
    function App() {
        _classCallCheck(this, App);
    }

    _createClass(App, [{
        key: 'configureRouter',
        value: function configureRouter(config, router) {
            config.title = 'Aurelia & FuseBox';
            config.options.pushState = true;
            config.options.root = '/';

            this.router = router;
        }
    }]);

    return App;
}();
});
___scope___.file("users/card/user-card.css", function(exports, require, module, __filename, __dirname){

module.exports = ".user-card .avatar {\n    width: 100%;\n    vertical-align: middle;\n}\n"
});
___scope___.file("users/card/user-card.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n    <require from=\"./user-card.css\"></require>\n\n    <!--<div class=\"user-card mdl-card mdl-shadow--4dp\">\n\t\t<div class=\"mdl-card__title\">\n\t    \t<h2 class=\"mdl-card__title-text\">${ user.login }</h2>\n\t    </div>\n\t\t<div class=\"mdl-card__supporting-text\">\n\t\t    ${ user.description }\n\t\t</div>\n\t\t<div class=\"mdl-card__actions mdl-card--border\">\n\t\t    <a href=\"/users/${user.slug}\"\n\t\t\t\tclass=\"mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect\">\n\t\t        View details\n\t\t    </a>\n\t\t\t<div class=\"mdl-layout-spacer\"></div>\n\t\t\t<span class=\"mdl-chip mdl-chip--contact\">\n\t\t\t    <span class=\"mdl-chip__contact mdl-color--teal mdl-color-text--white\">\n\t\t\t    \t${ user.lessons.length }\n\t\t\t    </span>\n\t\t\t    <span class=\"mdl-chip__text\">Videos</span>\n\t\t\t</span>\n\t\t</div>\n    </div>-->\n    <div class=\"user-card mdl-card mdl-shadow--4dp\">\n        <div class=\"mdl-card__title\">\n            <h2 class=\"mdl-card__title-text\">${ user.login }</h2>\n        </div>\n        <div class=\"mdl-card__media\">\n            <img class=\"avatar\" src=\"${ user.avatar_url }\" border=\"0\" alt=\"\">\n        </div>\n        <div class=\"mdl-card__actions\">\n            <a class=\"mdl-button\" href=\"${ user.html_url }\">Contact</a>\n        </div>\n    </div>\n</template>\n"
});
___scope___.file("users/card/user-card.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserCard = undefined;

var _dec, _class, _desc, _value, _class2, _descriptor;

var _aureliaFramework = require('aurelia-framework');

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var UserCard = exports.UserCard = (_dec = (0, _aureliaFramework.customElement)('user-card'), _dec(_class = (_class2 = function UserCard() {
    _classCallCheck(this, UserCard);

    _initDefineProp(this, 'user', _descriptor, this);
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'user', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
})), _class2)) || _class);
});
___scope___.file("users/index.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;

var _aureliaRouter = require('aurelia-router');

function configure(aureliaConfig) {
    var router = aureliaConfig.container.get(_aureliaRouter.Router);

    var routes = [{ route: 'users', name: 'users', moduleId: 'users/users', title: 'Users' }];

    routes.forEach(function (route) {
        return router.addRoute(route);
    });
}
});
___scope___.file("users/users.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\n    <require from=\"./card/user-card\"></require>\n\n    <div if.bind=\"isBusy\" class=\"wait-indicator\">\n        <div class=\"mdl-spinner mdl-js-spinner is-active\"></div>\n        <p>Loading...</p>\n    </div>\n\n    <section if.bind=\"!isBusy\" class=\"container mdl-grid au-animate\">\n        <user-card class=\"mdl-cell\" repeat.for=\"user of users\" user.bind=\"user\"></user-card>\n    </section>\n\n    <!--<section class=\"au-animate\">\n    <h2>${heading}</h2>\n    <div class=\"row au-stagger\">\n      <div class=\"col-sm-6 col-md-3 card-container au-animate\" repeat.for=\"user of users\">\n        <div class=\"card\">\n          <canvas class=\"header-bg\" width=\"250\" height=\"70\" blur-image.bind=\"image\"></canvas>\n          <div class=\"avatar\">\n            <img src.bind=\"user.avatar_url\" crossorigin ref=\"image\"/>\n          </div>\n          <div class=\"content\">\n            <p class=\"name\">${user.login}</p>\n            <p><a target=\"_blank\" class=\"btn btn-default\" href.bind=\"user.html_url\">Contact</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>-->\n</template>\n"
});
___scope___.file("users/users.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Users = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _aureliaFramework = require('aurelia-framework');

var _data = require('../shared/data.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Users = exports.Users = (_dec = (0, _aureliaFramework.inject)(_data.DataService), _dec(_class = function () {
    function Users(dataService) {
        _classCallCheck(this, Users);

        this.heading = 'Github Users';
        this.users = [];
        this.isBusy = false;

        this.dataService = dataService;
    }

    _createClass(Users, [{
        key: 'activate',
        value: function activate(params) {
            var _this = this;

            this.dataService.getUsers(params.org).then(function (users) {
                return _this.users = users;
            });
        }
    }]);

    return Users;
}()) || _class);
});
});
FuseBox.pkg("fusebox-hot-reload", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

/**
 * @module listens to `source-changed` socket events and actions hot reload
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client = require('fusebox-websocket').SocketClient;
exports.connect = function (port, uri) {
    if (FuseBox.isServer) {
        return;
    }
    port = port || window.location.port;
    var client = new Client({
        port: port,
        uri: uri,
    });
    client.connect();
    client.on('source-changed', function (data) {
        console.info("%cupdate \"" + data.path + "\"", 'color: #237abe');
        /**
         * If a plugin handles this request then we don't have to do anything
         **/
        for (var index = 0; index < FuseBox.plugins.length; index++) {
            var plugin = FuseBox.plugins[index];
            if (plugin.hmrUpdate && plugin.hmrUpdate(data)) {
                return;
            }
        }
        if (data.type === 'js') {
            FuseBox.flush();
            FuseBox.dynamic(data.path, data.content);
            if (FuseBox.mainFile) {
                try {
                    FuseBox.import(FuseBox.mainFile);
                }
                catch (e) {
                    if (typeof e === 'string') {
                        if (/not found/.test(e)) {
                            return window.location.reload();
                        }
                    }
                    console.error(e);
                }
            }
        }
        if (data.type === 'css' && __fsbx_css) {
            __fsbx_css(data.path, data.content);
        }
    });
    client.on('error', function (error) {
        console.log(error);
    });
};

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("fusebox-websocket", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events = require('events');
var SocketClient = (function () {
    function SocketClient(opts) {
        opts = opts || {};
        var port = opts.port || window.location.port;
        var protocol = location.protocol === 'https:' ? 'wss://' : 'ws://';
        var domain = location.hostname || 'localhost';
        this.url = opts.host || "" + protocol + domain + ":" + port;
        if (opts.uri) {
            this.url = opts.uri;
        }
        this.authSent = false;
        this.emitter = new events.EventEmitter();
    }
    SocketClient.prototype.reconnect = function (fn) {
        var _this = this;
        setTimeout(function () {
            _this.emitter.emit('reconnect', { message: 'Trying to reconnect' });
            _this.connect(fn);
        }, 5000);
    };
    SocketClient.prototype.on = function (event, fn) {
        this.emitter.on(event, fn);
    };
    SocketClient.prototype.connect = function (fn) {
        var _this = this;
        console.log('%cConnecting to fusebox HMR at ' + this.url, 'color: #237abe');
        setTimeout(function () {
            _this.client = new WebSocket(_this.url);
            _this.bindEvents(fn);
        }, 0);
    };
    SocketClient.prototype.close = function () {
        this.client.close();
    };
    SocketClient.prototype.send = function (eventName, data) {
        if (this.client.readyState === 1) {
            this.client.send(JSON.stringify({ event: eventName, data: data || {} }));
        }
    };
    SocketClient.prototype.error = function (data) {
        this.emitter.emit('error', data);
    };
    /** Wires up the socket client messages to be emitted on our event emitter */
    SocketClient.prototype.bindEvents = function (fn) {
        var _this = this;
        this.client.onopen = function (event) {
            console.log('%cConnected', 'color: #237abe');
            if (fn) {
                fn(_this);
            }
        };
        this.client.onerror = function (event) {
            _this.error({ reason: event.reason, message: 'Socket error' });
        };
        this.client.onclose = function (event) {
            _this.emitter.emit('close', { message: 'Socket closed' });
            if (event.code !== 1011) {
                _this.reconnect(fn);
            }
        };
        this.client.onmessage = function (event) {
            var data = event.data;
            if (data) {
                var item = JSON.parse(data);
                _this.emitter.emit(item.type, item.data);
                _this.emitter.emit('*', item);
            }
        };
    };
    return SocketClient;
}());
exports.SocketClient = SocketClient;

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("events", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
if (FuseBox.isServer) {
    module.exports = global.require("events");
} else {
    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
    }
    module.exports = EventEmitter;

    // Backwards-compat with node 0.10.x
    EventEmitter.EventEmitter = EventEmitter;

    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;

    // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
    EventEmitter.defaultMaxListeners = 10;

    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError("n must be a positive number");
        this._maxListeners = n;
        return this;
    };

    EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;

        if (!this._events)
            this._events = {};

        // If there is no 'error' event listener then throw.
        if (type === "error") {
            if (!this._events.error ||
                (isObject(this._events.error) && !this._events.error.length)) {
                er = arguments[1];
                if (er instanceof Error) {
                    throw er; // Unhandled 'error' event
                }
                throw TypeError("Uncaught, unspecified \"error\" event.");
            }
        }

        handler = this._events[type];

        if (isUndefined(handler))
            return false;

        if (isFunction(handler)) {
            switch (arguments.length) {
                // fast cases
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                    // slower
                default:
                    args = Array.prototype.slice.call(arguments, 1);
                    handler.apply(this, args);
            }
        } else if (isObject(handler)) {
            args = Array.prototype.slice.call(arguments, 1);
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++)
                listeners[i].apply(this, args);
        }

        return true;
    };

    EventEmitter.prototype.addListener = function(type, listener) {
        var m;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events)
            this._events = {};

        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (this._events.newListener)
            this.emit("newListener", type,
                isFunction(listener.listener) ?
                listener.listener : listener);

        if (!this._events[type])
        // Optimize the case of one listener. Don't need the extra array object.
            this._events[type] = listener;
        else if (isObject(this._events[type]))
        // If we've already got an array, just append.
            this._events[type].push(listener);
        else
        // Adding the second element, need to change to array.
            this._events[type] = [this._events[type], listener];

        // Check for listener leak
        if (isObject(this._events[type]) && !this._events[type].warned) {
            if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners;
            } else {
                m = EventEmitter.defaultMaxListeners;
            }

            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " +
                    "leak detected. %d listeners added. " +
                    "Use emitter.setMaxListeners() to increase limit.",
                    this._events[type].length);
                if (typeof console.trace === "function") {
                    // not supported in IE 10
                    console.trace();
                }
            }
        }

        return this;
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        var fired = false;

        function g() {
            this.removeListener(type, g);

            if (!fired) {
                fired = true;
                listener.apply(this, arguments);
            }
        }

        g.listener = listener;
        this.on(type, g);

        return this;
    };

    // emits a 'removeListener' event iff the listener was removed
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events || !this._events[type])
            return this;

        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener ||
            (isFunction(list.listener) && list.listener === listener)) {
            delete this._events[type];
            if (this._events.removeListener)
                this.emit("removeListener", type, listener);

        } else if (isObject(list)) {
            for (i = length; i-- > 0;) {
                if (list[i] === listener ||
                    (list[i].listener && list[i].listener === listener)) {
                    position = i;
                    break;
                }
            }

            if (position < 0)
                return this;

            if (list.length === 1) {
                list.length = 0;
                delete this._events[type];
            } else {
                list.splice(position, 1);
            }

            if (this._events.removeListener)
                this.emit("removeListener", type, listener);
        }

        return this;
    };

    EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;

        if (!this._events)
            return this;

        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) {
            if (arguments.length === 0)
                this._events = {};
            else if (this._events[type])
                delete this._events[type];
            return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
            for (key in this._events) {
                if (key === "removeListener") continue;
                this.removeAllListeners(key);
            }
            this.removeAllListeners("removeListener");
            this._events = {};
            return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
            this.removeListener(type, listeners);
        } else if (listeners) {
            // LIFO order
            while (listeners.length)
                this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];

        return this;
    };

    EventEmitter.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type])
            ret = [];
        else if (isFunction(this._events[type]))
            ret = [this._events[type]];
        else
            ret = this._events[type].slice();
        return ret;
    };

    EventEmitter.prototype.listenerCount = function(type) {
        if (this._events) {
            var evlistener = this._events[type];

            if (isFunction(evlistener))
                return 1;
            else if (evlistener)
                return evlistener.length;
        }
        return 0;
    };

    EventEmitter.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type);
    };

    function isFunction(arg) {
        return typeof arg === "function";
    }

    function isNumber(arg) {
        return typeof arg === "number";
    }

    function isObject(arg) {
        return typeof arg === "object" && arg !== null;
    }

    function isUndefined(arg) {
        return arg === void 0;
    }
}

});
return ___scope___.entry = "index.js";
});
FuseBox.import("fusebox-hot-reload").connect(4444, "")

FuseBox.import("default/main.js");
FuseBox.main("default/main.js");
})
(FuseBox)
//# sourceMappingURL=app.js.map