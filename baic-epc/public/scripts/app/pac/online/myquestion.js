require(['ajax', 'grid', 'search', 'paging', 'mustache', 'dialog', 'calendar', 'qustionCloseAction', 'jquery', 'select', 'jqExtend'], function(ajax, Grid, Search, Paging, Mustache, Dialog, Calendar, CloseAction) {
	var myquestion = {
		init: function () {
			var self = this;

			self.bindEls();
			self.buildLayerEls();
			self.buildAttrs();
			self.getQuestionsClassify();
			self.getQuestionStatus();
			self.buildComponent();
			self.bindEvent();
		},

		bindEls: function () {
			var self = this;

			self.$tab = $('#tab');
			self.$tabCont = $('#tab-cont');
			self.startDateInput = $('#search-date-start-input');
			self.endDateInput = $('#search-date-end-input');
			self.$questionForm = $('#question-form');
			self.$resetBtn = $('a[data-id="reset"]');
			

			self.statusWrapper = $('#question-status-wrapper');
			self.statusTempl = $('#question-status-template');

			self.deepGroupWrapper = $('#deep-group');
			self.deepGroupTempl = $('#deep-group-template');
		},

		buildLayerEls: function() {
			var self = this;

			self.$questionCommentForm = $('.question-comment-form');
			self.questionId = $('#question-code');
			self.questionCode = $('[data-name="question-number"]');
			self.questionStatus = $('[data-name="question-status"]');
			self.questionSubject = $('[data-name="question-subject"]');
		},

		buildAttrs: function() {
			var self = this;

			self.urlArray = ['/pac/online', '/pac/online/question_search', '/pac/online/myquestion'];
			self.loadCount = 0;
		},

		buildComponent: function() {
			var self = this;

			self.createCalendar();
			self.search = new Search({
				searchWrapId: 'question-form'
			});
			self.paging = new Paging({
				pagingWrapId: 'question-search-paging'
			});
			self.grid = new Grid({
				gridWrapId: 'question-table',
				search: self.search,
				paging: self.paging
			});
			self.grid.load();
			self.qustionCloseAction = new CloseAction({
				callbacks: {
					onConfirm: function() {
						self.closeLayer();
						self.grid.load();
					}
				}
			});
		},

		createCalendar:function(){
            var self = this;

            self.defaultStartDate = self.startDateInput.val() || null;
            self.defaultEndDate = self.endDateInput.val() || null;
            self.currentDate = self.defaultEndDate || new Date().getFullYear() + '-' + (new Date().getMonth() + 1).toString().replace(/^(\d)$/, "0$1") + '-' + new Date().getDate();

            self.startDate = new Calendar({
                id: '#search-date-start-input',
                isSelect: true,
                isPopup: true,
                isPrevBtn: true,
                isNextBtn: true,
                isCloseBtn: true,
                count: 1,
                monthStep: 1,
                isHoliday: true,
                isHolidayTips: false,
                isReadonly: true,
                isDateInfo: true,
                isShowWeek:false,
                selectDate: self.defaultStartDate,
                date: self.newDate(self.defaultStartDate),
                range: {mindate:null, maxdate:self.currentDate},
                inputWidth: 110,
                inputHeight: 28
            });
            self.endDate = new Calendar({
                id: '#search-date-end-input',
                isSelect: true,
                isPopup: true,
                isPrevBtn: true,
                isNextBtn: true,
                isCloseBtn: true,
                count: 1,
                monthStep: 1,
                isHoliday: true,
                isHolidayTips: false,
                isReadonly: true,
                isDateInfo: true,
                isShowWeek:false,
                selectDate: self.defaultEndDate,//默认选中的值(仅影响下拉框中值的选中状态)
                date: self.newDate(self.defaultEndDate),//默认渲染日期(仅影响下拉框渲染)
                range: {mindate:null, maxdate:self.currentDate},
                inputWidth: 110,
                inputHeight: 28
            });

            //设置默认值
            self.resetDateRange();
        },
        newDate: function(str) {
            if(typeof str !== 'string' || str === ''){
                return new Date();
            }
            var arr = str.split('-');
            var date = new Date();
            date.setUTCFullYear(arr[0], arr[1] - 1, arr[2]);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        setCalendarValue:function(calendar,value){
            var self = this;

            if(typeof value !== 'string' || value === ''){
                calendar.selectDate = null;
                calendar.date = self.newDate(self.currentDate);
            }
            calendar.selectDate = value;
            calendar.date = self.newDate(value);
            calendar.triggerNode.value = '';
            calendar.setDateInfo(value);//设置值
        },
        resetDateRange:function(){
            var self = this;

            self.setCalendarValue(self.startDate, self.defaultStartDate);
            self.setCalendarValue(self.endDate, self.defaultEndDate);
        },
        emptyDateRange:function(){
            var self = this;

            self.setCalendarValue(self.startDate, '');
            self.setCalendarValue(self.endDate, '');
        },

		bindEvent: function () {
			var self = this;

			self.$tab.on('click', '[data-field]', function () {
				self.toggleTab($(this));
			});
			self.$resetBtn.on('click', function() {
				self.$questionForm.get(0).reset();
				self.resetSelect(self.$questionForm);
			});
			$(document).on('click', '[data-action="goto-detail"]', function() {
				self.gotoDetail($(this));
			});
			$(document).on('click', '[data-action="close-question"]', function() {
				self.openLayer();
				self.setLayerValue($(this));
			});
			$(document).on('click', '[data-action="cancel"]', function() {
				self.closeLayer();
			});
		},

		toggleTab: function ($this) {
			var self = this;

			var index = $this.attr('data-field');
			if($this.hasClass('checked')) { return; }
			window.location.href = globalConfig.context.path + self.urlArray[index];
		},

		getQuestionsClassify: function() {
			var self = this;

			ajax.invoke({
				url: '/online/questionType',
				type: 'GET',
				success: function (data) {
					self.renderTemplate(data, self.deepGroupTempl, self.deepGroupWrapper);
				}
			 });
		},

		getQuestionStatus: function() {
			var self = this;

			ajax.invoke({
				url: '/online/questionStatus',
				type: 'GET',
				success: function (data) {
					self.renderTemplate(data, self.statusTempl, self.statusWrapper);
				}
			 });
		},

		renderTemplate: function(data, $templ, $dom) {
			var self = this;

			var template = $templ.html(), html;

			html = Mustache.render(template, {data: data});

			$dom.html(html);
		},

		resetSelect: function($form) {
			var self = this;

			$form.find('.form-select').find('.form-select-input').val('').end()
			.find('.form-select-text').text('请选择').attr('title', '请选择');
			
		},

		gotoDetail: function($this) {
			var self = this;

			var code = $this.closest('tr').attr('data-code'),
				url = globalConfig.context.path + '/pac/online/detail?questionCode=' + code;

			window.open(url,'_blank');
		},

		openLayer: function () {
			var self = this;

			$.showBlockUI({
				message: $('#question-close-dialog'),
				name: 'question-close'
			});
		},

		closeLayer: function() {
			var self = this;

			$.hideBlockUI({
				message: $('#question-close-dialog'),
				name: 'question-close'
			});
			self.resetForm();
		},

		setLayerValue: function($this) {
			var self = this;

			var $dom = $this.closest('tr'),
				$domTd = $dom.find('td'),
				questionID = $dom.attr('data-code'),
				questionCode = $domTd.eq(0).text(),
				questionStatus = $domTd.eq(1).text(),
				questionSubject = $domTd.eq(3).text();

			self.questionId.val(questionID);
			self.questionCode.find('.text-block').text(questionCode);
			self.questionStatus.find('.text-block').text(questionSubject);
			self.questionSubject.find('.text-block').text(questionStatus);
		},

		resetForm: function() {
			var self = this;

			self.$questionCommentForm.get(0).reset();
			self.resetSelect(self.$questionCommentForm);

		}
		
	}
	myquestion.init();
})