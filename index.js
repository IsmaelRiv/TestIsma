Ext.define('MyApp.view.MyPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mypan',
	xtype: 'layout-border',
    requires: [
        'Ext.layout.container.Border'
    ],

    title: 'Inicio',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
			{
				title: 'Footer',
				region: 'south',
				height: 100,
				minHeight: 75,
				maxHeight: 150,
				html: '<p>Footer content</p>'
			},
			{
				title: 'Navigation',
				region:'west',
				floatable: false,
				margin: '5 0 0 0',
				width: 125,
				minWidth: 100,
				maxWidth: 250,
				html: '<p>Secondary content like navigation links could go here</p>'
			},
			{
				title: 'Main Content',
				collapsible: false,
				region: 'center',
				margin: '5 0 0 0',
				html: '<h2>Main Page</h2><p>This is where the main content would go</p>'
			}           
			]
        });

        me.callParent(arguments);
    }

});

Ext.Loader.setConfig({
    enabled: true
});


Ext.application({
    views: [
        'MyPanel'
    ],
    name: 'MyApp',

    launch: function() {
        Ext.create('Ext.container.Viewport', {
                layout: 'fit',
                items:  [{xtype: 'mypan'}]
            });
    }
});