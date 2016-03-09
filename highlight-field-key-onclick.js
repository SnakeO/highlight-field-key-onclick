jQuery(function()
{
	if( typeof acf == 'undefined' || acf.o == null ) {
		return;
	}
	
	jQuery.fn.selectText = function()
	{
	    var range,
	        selection,
	        obj = this[0],
	        type = {
	            func:'function',
	            obj:'object'
	        },
	        // Convenience
	        is = function(type, o){
	            return typeof o === type;
	        };

	    if(is(type.obj, obj.ownerDocument)
	        && is(type.obj, obj.ownerDocument.defaultView)
	        && is(type.func, obj.ownerDocument.defaultView.getSelection)){

	        selection = obj.ownerDocument.defaultView.getSelection();

	        if(is(type.func, selection.setBaseAndExtent)){
	            // Chrome, Safari - nice and easy
	            selection.setBaseAndExtent(obj, 0, obj, jQuery(obj).contents().size());
	        }
	        else if(is(type.func, obj.ownerDocument.createRange)){

	            range = obj.ownerDocument.createRange();

	            if(is(type.func, range.selectNodeContents)
	                && is(type.func, selection.removeAllRanges)
	                && is(type.func, selection.addRange)){
	                // Mozilla
	                range.selectNodeContents(obj);
	                selection.removeAllRanges();
	                selection.addRange(range);
	            }
	        }
	    }
	    else if(is(type.obj, document.body) && is(type.obj, document.body.createTextRange)) {

	        range = document.body.createTextRange();

	        if(is(type.obj, range.moveToElementText) && is(type.obj, range.select)){
	            // IE most likely
	            range.moveToElementText(obj);
	            range.select();
	        }
	    }

	    // Chainable
	    return this;
	}

	jQuery('.pre-field-key').click(function(){ jQuery(this).selectText() })
})