var gRootURL = {
	root : '/STD_LIB/',
}
var gBaseURL = {
	_wsg : gRootURL.root+'_wsg/',
	menu0 : gRootURL.root+'html/_prototype/',
	menu5 : gRootURL.root+'html/general/',
	menu1 : gRootURL.root+'html/elements/',
	menu2 : gRootURL.root+'html/modules/',
	menu3 : gRootURL.root+'html/content/',
	menu4 : gRootURL.root+'html/interactions/',
	//target : 'target="gContentFrame"',
	target : '',
}

var include = {
	meta : function(){
		document.write('<title>Components - Standard UI</title>');
		document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge" />');
		document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />');
		document.write('<link rel="shortcut icon" href="'+gRootURL.root+'favicon.ico" type="image/x-icon" />');
		document.write('<link rel="icon" href="'+gRootURL.root+'favicon.ico" type="image/x-icon" />');
	},
	head : function(){
		document.write('<!-- Front -->');
		document.write('<link href="'+gRootURL.root+'css/standard.ui.css" rel="stylesheet" />');
		document.write('<script src="'+gRootURL.root+'js/libs/jquery.min.js"></script>');
		document.write('<script src="'+gRootURL.root+'js/libs/librarys.min.js"></script>');
		document.write('<script src="'+gRootURL.root+'js/ui/ui.utility.js"></script>');
		document.write('<script src="'+gRootURL.root+'js/ui/ui.common.js"></script>');

		document.write('<!-- Guide -->');
		document.write('<link href="'+gBaseURL._wsg+'css/import.css" rel="stylesheet" />');
		document.write('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons">');
		document.write('<link href="'+gBaseURL._wsg+'codeview/styles/shCoreDefaultWhite.css" rel="stylesheet" />');
		document.write('<script src="'+gBaseURL._wsg+'js/addon/jquery.mCustomScrollbar.min.js"></script>');
		document.write('<script src="'+gBaseURL._wsg+'js/addon/jquery.clipboard.min.js"></script>');
		document.write('<script src="'+gBaseURL._wsg+'js/wsg_guide.js"></script>');
		document.write('<script src="'+gBaseURL._wsg+'codeview/scripts/shCore.js?cb=undefined"></script>');
		document.write('<script src="'+gBaseURL._wsg+'codeview/scripts/shAutoLoader.js?cb=undefined"></script>');
		document.write('<script src="'+gBaseURL._wsg+'codeview/scripts/shBrushjScript.js?cb=undefined"></script>');
		document.write('<script src="'+gBaseURL._wsg+'codeview/scripts/shBrushXml.js?cb=undefined"></script>');
		document.write('<script src="'+gBaseURL._wsg+'codeview/scripts/shBrushCss.js?cb=undefined"></script>');
		document.write('<script>SyntaxHighlighter.all();</script>');
	},
	header : function(){
		document.write('	<header id="g-header">');
		document.write('		<div class="g-header-inner">');
		document.write('			<h1 class="g-logo"><a href="/">라이브러리 API</a></h1>');
		document.write('			<button type="button" class="g-btn-aside"><span>Menu</span></button>');
		document.write('			<nav class="g-lnb">');
		document.write('				<ul>');
		//document.write('					<li><a href="'+gBaseURL.menu0+'_prototype_markup.html" data-aside="g-snbMenu0" data-url="'+gBaseURL.menu0+'">Prototype</a></li>');
		document.write('					<li><a href="'+gBaseURL.menu5+'index.html" data-aside="g-snbMenu5" data-url="'+gBaseURL.menu5+'">General</a></li>');
		document.write('					<li><a href="'+gBaseURL.menu1+'index.html" data-aside="g-snbMenu1" data-url="'+gBaseURL.menu1+'">Elements</a></li>');
		document.write('					<li><a href="'+gBaseURL.menu2+'index.html" data-aside="g-snbMenu2" data-url="'+gBaseURL.menu2+'">Modules</a></li>');
		//document.write('					<li><a href="'+gBaseURL.menu3+'index.html" data-aside="g-snbMenu3" data-url="'+gBaseURL.menu3+'">Petterns</a></li>');
		document.write('					<li><a href="'+gBaseURL.menu4+'index.html" data-aside="g-snbMenu4" data-url="'+gBaseURL.menu4+'">Interactions</a></li>');
		document.write('				</ul>');
		document.write('			</nav>');
		document.write('		</div>');
		document.write('	</header>');
	},
	aside : {
		init : function(){
			this.opneHTML();
			this.menu0();
			this.menu1();
			this.menu2();
			this.menu3();
			this.menu4();
			this.menu5();
			this.closeHTML();
		},
		opneHTML : function(){
			document.write('	<aside id="g-aside">');
			document.write('		<div class="g-js-scroll g-aside-scroll">');
			document.write('			<nav class="g-snb">');
		},
		closeHTML : function(){
			document.write('			</nav>');
			document.write('		</div>');
			document.write('	</aside>');
		},

		//샘플메뉴
		menu0 : function(){
			var baseURL = gBaseURL.menu0;
			document.write('				<!-- Prototype -->');
			document.write('				<ul class="g-depth1 g-snbMenu0">');
			document.write('					<li class="g-node1">');
			document.write('						<a href="javascript:;">가이드 템플릿</a>');
			document.write('						<ul class="g-depth2">');
			document.write('							<li class="g-node2"><a href="'+baseURL+'index.html">Intro</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'_prototype_conventions.html">컨텐츠 템플릿</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'_prototype_standard.html">표준 템플릿</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'_prototype_markup.html">마크업 템플릿</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'_prototype_ui.html">라이브러리 템플릿</a></li>');
			document.write('						</ul>');
			document.write('					</li>');
			document.write('				</ul>');
			document.write('				<!-- //Prototype -->');
		},

		//Elements
		menu1 : function(){
			var baseURL = gBaseURL.menu1;
			document.write('				<!-- Convention -->');
			document.write('				<ul class="g-depth1 g-snbMenu1">');
			document.write('					<li class="g-node1">');
			document.write('						<a href="javascript:;">Elements</a>');
			document.write('						<ul class="g-depth2">');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_basis.html">Basis</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_form.html">Form Elements</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_formGroup.html">Form Group</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_button.html">Buttons</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_icon.html">Icons</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_bullet.html">Bullets</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_list.html">List</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_step.html">Steps</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_table.html">Tables</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_pagination.html">Paginations</a></li>');
			document.write('						</ul>');
			document.write('					</li>');
			document.write('				</ul>');
			document.write('				<!-- //Convention -->');
		},

		//Modules
		menu2 : function(){
			var baseURL = gBaseURL.menu2;
			document.write('				<!-- Globals -->');
			document.write('				<ul class="g-depth1 g-snbMenu2">');
			document.write('					<li class="g-node1">');
			document.write('						<a href="javascript:;">Modules</a>');
			document.write('						<ul class="g-depth2">');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_nav.html">Nav</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_tab.html">Tab</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_accordion.html">Accordion</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_expand.html">Expand</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_tooltip.html">Tooltip</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_dropdown.html">Dropdown</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_popup.html">Popup</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_sticky.html">Sticky</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_spyscroll.html">Spy Scroll</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_customscroll.html">Custom Scroll</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_sidebar.html">Sidebar</a></li>');
			document.write('						</ul>');
			document.write('					</li>');
			//document.write('					<li class="g-node1">');
			//document.write('						<a href="javascript:;">Addons</a>');
			//document.write('						<ul class="g-depth2">');
			//document.write('							<li class="g-node2"><a href="'+baseURL+'modules_carouselBx.html">Carousel BX</a></li>');
			//document.write('							<li class="g-node2"><a href="'+baseURL+'modules_carouselFlex.html">Carousel Flex</a></li>');
			//document.write('							<li class="g-node2"><a href="'+baseURL+'modules_carouselSwiper.html">Carousel Swiper</a></li>');
			//document.write('							<li class="g-node2"><a href="'+baseURL+'modules_carouselSlick.html">Carousel Slick</a></li>');
			//document.write('						</ul>');
			//document.write('					</li>');
			//document.write('					<li class="g-node1">');
			//document.write('						<a href="javascript:;">Behaviors</a>');
			//document.write('						<ul class="g-depth2">');
			//document.write('							<li class="g-node2"><a href="'+baseURL+'behavior_youtube.html">Youtube Player</a></li>');
			//document.write('						</ul>');
			//document.write('					</li>');
			document.write('				</ul>');
			document.write('				<!-- //Globals -->');
		},

		//Contents
		menu3 : function(){
			var baseURL = gBaseURL.menu3;
			document.write('				<!-- library -->');
			document.write('				<ul class="g-depth1 g-snbMenu3">');
			document.write('					<li class="g-node1">');
			document.write('						<a href="javascript:;">Content</a>');
			document.write('						<ul class="g-depth2">');
			document.write('							<li class="g-node2"><a href="'+baseURL+'content_search.html">Search</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'content_board.html">Board</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'content_gallary.html">Gallary</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'content_product.html">Product</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'content_store.html">Store</a></li>');
			document.write('						</ul>');
			document.write('					</li>');
			document.write('				</ul>');
			document.write('				<!-- //library -->');
		},

		//Interactions
		menu4 : function(){
			var baseURL = gBaseURL.menu4;
			document.write('				<!-- Checklist -->');
			document.write('				<ul class="g-depth1 g-snbMenu4">');
			document.write('					<li class="g-node1">');
			document.write('						<a href="javascript:;">Interactions</a>');
			document.write('						<ul class="g-depth2">');
			document.write('							<li class="g-node2"><a href="'+baseURL+'interactions_cubicbezier.html">Cubic Bezier</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'interactions_scrollAnimate.html">Scroll Animate</a></li>');
			//document.write('							<li class="g-node2"><a href="'+baseURL+'interactions_morph.html">Morph</a></li>');
			//document.write('							<li class="g-node2"><a href="'+baseURL+'interactions_canvas.html">Canvas</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'interactions_parallex.html">Parallex</a></li>');
			document.write('						</ul>');
			document.write('					</li>');
			document.write('				</ul>');
			document.write('				<!-- //Checklist -->');
		},

		//Templates
		menu5 : function(){
			var baseURL = gBaseURL.menu5;
			document.write('				<!-- Checklist -->');
			document.write('				<ul class="g-depth1 g-snbMenu5">');
			document.write('					<li class="g-node1">');
			document.write('						<a href="javascript:;">Genaral</a>');
			document.write('						<ul class="g-depth2">');
			document.write('							<li class="g-node2"><a href="'+baseURL+'general_base.html">Base</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'general_grid.html">Grid</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'general_font.html">Fonts</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'general_color.html">Color</a></li>');
			document.write('						</ul>');
			document.write('					</li>');
			document.write('				</ul>');
			document.write('				<!-- //Checklist -->');
		},
	},
	quick : {
		init : function(){
			this.opneHTML();
			this.closeHTML();
		},
		opneHTML : function(){
			//document.write('	<div id="g-quick">');
			//document.write('		<div class="g-js-scroll g-quick-scroll">');
			//document.write('			<nav class="g-qnb">');
		},
		closeHTML : function(){
			//document.write('			</nav>');
			//document.write('		</div>');
			//document.write('	</div>');
		},
	},
	footer : function(){
		document.write('	<a href="#g-wrap" class="g-top" data-role="spy-scroll">TOP</a>');
		document.write('	<div class="g-mask"></div>');
	},
}