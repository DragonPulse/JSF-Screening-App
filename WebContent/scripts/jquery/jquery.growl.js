

/*globals jQuery,clearTimeout,document,navigator,setTimeout
*/
(function($) {

/**
 * This is based on the jQuery UI $.widget code. I would have just made this
 * a $.widget but I didn't want the jQuery UI dependency.
 */
$.fn.growl = function(options)
{
	var isMethodCall = (typeof options === 'string'),
		args = Array.prototype.slice.call(arguments, 0),
		name = 'growl';

	// handle initialization and non-getter methods
	return this.each(function() {
		var instance = $.data(this, name);

		// prevent calls to internal methods
		if (isMethodCall && options.substring(0, 1) === '_') {
			return this;
		}

		// constructor
		(!instance && !isMethodCall &&
			$.data(this, name, new $.growl(this))._init(args));

		// method call
		(instance && isMethodCall && $.isFunction(instance[options]) &&
			instance[options].apply(instance, args.slice(1)));
	});
};

$.growl = function(element)
{
    var args = Array.prototype.slice.call(arguments, 0), $el;

    if (!element || !element.nodeType) {
        $el = $('<div />');
        return $el.growl.apply($el, args);
    }
    
    this.$container = $(element);
};


/**
 * Static members
 **/
$.extend($.growl, {
    version: '0.3.0',
    $overlay: false,
    defaults: {
        timeout: 10,
        disableClose: false,
        icon: false,
        className: '',
        animateClassSwitch: false,
        showEffects: {'opacity':'toggle','height':'toggle'},
        hideEffects: {'opacity':'toggle','height':'toggle'},
        showEffectDuration: 500,
        hideEffectDuration: 700
    }
});

/**
 * Non-static members
 **/
$.extend($.growl.prototype, {
    $container: false,
    closeTimer: false,
    options: {},
    
    _init: function(args)
    {
        var o, self = this;

        args = $.isArray(args) ? args : [];

        
        args.unshift($.growl.defaults);
        args.unshift({});

        o = this.options = $.extend.apply($, args);

        if (!$.growl.$overlay) {
    	    $.growl.$overlay = $('<div id="growl-overlay"></div>').appendTo(document.body);
        }
      
        if (!o.disableClose) {
            $('<span class="growl-close-button ui-icon ui-icon-close" />')
                .click(function () {  self.close();  })
                .hover(function () { $(this).addClass('growl-close-button-hover'); },
                       function () { $(this).removeClass('growl-close-button-hover'); })
                .prependTo(this.$container);
        }

        this.changeIcon(o.icon, true);

        if (o.message) {
            this.$container.append($('<span class="growl-message">' + o.message + '</span>'));
        }

        (o.className && this.$container.addClass(o.className));
        (o.css && this.$container.css(o.css));

        this.$container
            .addClass('growl')
            .appendTo($.growl.$overlay);

        if (o.showEffects) {
            this.$container.animate(o.showEffects, o.showEffectDuration);
        } else {
            this.$container.show();
        }

        if (o.timeout > 0) {
            this.timeout(o.timeout);
        }
    },
    
    timeout: function(timeout)
    {
        var self = this;

        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
        }

        this.closeTimer = setTimeout(function() { self.close(); }, timeout * 1000);
        this.options.timeout = timeout;
    },

    /**
     * Change the CSS class associated with this message, using
     * a transition if available (not availble in Safari/Webkit).
     * If no transition is available, the switch is immediate.
     * 
     * #LATER Check if this has been corrected in Webkit or jQuery UI
     * #TODO Make transition time configurable
     * @param newClass string Name of new class to associate
     */
    changeClass: function(newClass)
    {
        var self = this;

        if (this.options.className === newClass) {
            return;
        }

        this.$container.queue(function() {
            if (!self.options.animateClassSwitch ||
                /webkit/.test(navigator.userAgent.toLowerCase()) ||
                !$.isFunction($.fn.switchClass)) {
                self.$container.removeClass(self.options.className);
                self.$container.addClass(newClass);
            } else {
                self.$container.switchClass(self.options.className, newClass, 500);
            }

            self.options.className = newClass;
            self.$container.dequeue();
        });
    },

    changeIcon: function(newIcon, force)
    {
        var self = this;

        if ((force !== true || newIcon === false) && this.options.icon === newIcon) {
            return;
        }

        if (force || this.options.icon === false) {
            this.$container.prepend($('<span class="growl-message-icon ui-icon ' + newIcon + '" />'));
            this.options.icon = newIcon;
            return;
        } else if (newIcon === false) {
            this.$container.find('.growl-message-icon').remove();
            this.options.icon = false;
            return;
        }

        this.$container.queue(function() {
            var $span = $('.growl-message-icon', self.$container);

            if (!self.options.animateClassSwitch ||
                /webkit/.test(navigator.userAgent.toLowerCase()) ||
                !$.isFunction($.fn.switchClass)) {
                $span.removeClass(self.options.icon);
                $span.addClass(newIcon);
            } else {
                $span.switchClass(self.options.icon, newIcon, 500);
            }

            self.options.icon = newIcon;
            self.$container.dequeue();
        });
    },


    changeMessage: function(newMessage)
    {
        this.$container.queue(function() {
            $('.growl-message', $(this)).html(newMessage);
            $(this).dequeue();
        });
    },


    update: function(options)
    {
        (options.className && this.changeClass(options.className));
        (options.css && this.$container.css(options.css));
        (typeof(options.icon) !== 'undefined' && this.changeIcon(options.icon));
        (options.message && this.changeMessage(options.message));
        (options.timeout && this.timeout(options.timeout));
    },

    close: function() 
    {
        var o = this.options, $container = this.$container;

        if (o.hideEffects) {
            this.$container.animate(o.hideEffects, o.hideEffectDuration);
        } else {
            this.$container.hide();
        }

        $container.queue(function() {
            $container.removeData('growl');
            $container.remove();
            
            if ($.growl.$overlay && $.growl.$overlay.is(':empty')) {
                $.growl.$overlay.remove();
                $.growl.$overlay = false;
            }
            
            $container.dequeue();
        });
    }
});

})(jQuery);