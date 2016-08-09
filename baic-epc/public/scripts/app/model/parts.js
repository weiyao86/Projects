define(['ajax', 'mustache', 'jquery', 'scrollIntoView'], function (ajax, Mustache) {
	
	var defaultOpts = {
		callbacks: {
			onClickedRow: null
		}
	};

	var Parts = function (options) {
		this.opts = $.extend({}, defaultOpts, options || {});
		this.init();
	};

	Parts.prototype = {

		init: function () {
			var self = this;

			self.bindEls();
			self.bindAttr();
			self.bindEvent();			
		},

		bindEls: function () {
			var self = this;

			self.$parts = $('#parts');
			self.$partsBody = $('#parts-body');
		},

		bindAttr: function () {
			var self = this;

			self.template = self.$partsBody.find('script').html();
		},

		bindEvent: function () {
			var self = this;

			self.$partsBody.on("click", "[data-field=row]", function (e) {
                self.clickedRow(this, e);
            });
		},

		clickedRow: function (sender, e) {
			var self = this,
				$row = $(sender),
				callout = $row.attr('data-callout');

			self.linkParts([callout]);
			if(typeof self.opts.callbacks.onClickedRow === 'function') {
				self.opts.callbacks.onClickedRow.apply(null, [callout]);
			}
		},

		load: function (params) {
			var self = this;

			ajax.invoke({
				url: 'model/getParts',
				type: 'GET',
				data: params,
				success: function (root) {
					self.render(self.buildData(root));
				}
			});
		},

		buildData: function (data) {
			var self = this;

			for(var i = 0; i < data.length; i++) {
				data[i]['rowNumber'] = i+1;
			}

			return data;
		},

		render: function (data) {
			var self = this,
				output = Mustache.render(self.template, {records: data});

			self.$partsBody.html(output);
		},

		linkParts: function (callouts) {
	        var self = this,
	            selector = self.getCalloutSelector(callouts),
	            $rows = self.$partsBody.find(selector);

	        if (self.oldRow) {
	            self.oldRow.removeClass("checked");
	        }
	        self.oldRow = $rows.addClass("checked");
	        $rows.size() && self.scrollIntoView($rows);
	    },

	    highlightPartRows: function (partNumber) {
            var self = this,
                $rows = self.$partList.find("tr[data-partnumber='" + partNumber + "']");

            if (self.oldRow) {
                self.oldRow.removeClass("checkedTr");
            }
            self.oldRow = $rows.addClass("checkedTr");
            $rows.size() && self.scrollIntoView($rows);
        },

	    getCalloutSelector: function (callouts) {
            var self = this, selector = [];

            for (var i = 0; i < callouts.length; i++) {
                selector.push("div[data-callout='" + callouts[i] + "']");
            }

            return selector.join(",");
        },

        scrollIntoView: function ($rows) {
            var me = this;

            $rows.scrollIntoView();
        }

	};

	return Parts;

});