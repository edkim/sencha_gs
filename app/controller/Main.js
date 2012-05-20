Ext.define('GS.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },
        control: {
            'blog list': {
                itemtap: 'showPost'
            }
        }
    },

    showPost: function(list, index, element, record) {
        console.log(record.get('title'));
    }
    
});