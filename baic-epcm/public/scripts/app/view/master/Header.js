Ext.define('EPCM.view.master.Header', {
    extend: 'Ext.panel.Panel',
    region: 'north',
    alias: 'widget.masterheader',
    height: 60,
    width: 'auto',
    border: false,
    html: '<h1 class="header-logo"></h1>' +
          '<div class="header-intro">电子配件目录EPC系统管理中心</div>' +
          '<ul class="header-func-box">' +
            '<li style="background: none;"><label> ' + EPCM.header.data.username + '</label><span>，您好！</span></li>' +
            '<li><a href="/">首页</a></li>' +
            '<li class="header-help-box"><div class="header-help">帮助<span class="header-arr-down"></span></div>' +
            '<div class="header-help-list" style="display: none;"><label></label><span><a href="#">帮助手册</a></span></div>' +
            '</li>' +
            '<li><a data-action="logout">退出</a></li>' +
          '</ul>'
});
