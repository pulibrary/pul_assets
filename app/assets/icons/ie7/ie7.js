/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'pul_icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'ico-music': '&#xe63e;',
		'ico-cd': '&#xe641;',
		'ico-video': '&#xe011;',
		'ico-video2': '&#xe60c;',
		'ico-image': '&#xe620;',
		'ico-princeton-thesis': '&#xe647;',
		'ico-thesis': '&#xe640;',
		'ico-book': '&#xe602;',
		'ico-book2': '&#xe629;',
		'ico-file': '&#xe625;',
		'ico-documents': '&#xe622;',
		'ico-file2': '&#xe626;',
		'ico-article': '&#xe643;',
		'ico-newspaper': '&#xe009;',
		'ico-search-in-page': '&#xe627;',
		'ico-search-cloud': '&#xe634;',
		'ico-phone': '&#xe603;',
		'ico-user': '&#xe60d;',
		'ico-info': '&#xe639;',
		'ico-collection': '&#xe61e;',
		'ico-archive': '&#xe609;',
		'ico-folders': '&#xe612;',
		'ico-folder': '&#xe613;',
		'ico-object': '&#xe605;',
		'ico-email': '&#xe621;',
		'ico-chart': '&#xe636;',
		'ico-graph': '&#xe018;',
		'ico-piechart': '&#xe050;',
		'ico-calendar': '&#xe63c;',
		'ico-settings': '&#xe02b;',
		'ico-link': '&#xe02e;',
		'ico-chat': '&#xe049;',
		'ico-upload': '&#xe04c;',
		'ico-download': '&#xe04d;',
		'ico-guide': '&#xe053;',
		'ico-search': '&#xe600;',
		'ico-question': '&#xe60a;',
		'ico-alert': '&#xe611;',
		'ico-alert2': '&#xe644;',
		'ico-404': '&#xe607;',
		'ico-location': '&#xe619;',
		'ico-map': '&#xe025;',
		'ico-building': '&#xe601;',
		'ico-web2': '&#xe630;',
		'ico-open': '&#xe606;',
		'ico-hours': '&#xe055;',
		'ico-window': '&#xe62c;',
		'ico-window2': '&#xe62e;',
		'ico-window3': '&#xe62f;',
		'ico-windows': '&#xe62d;',
		'ico-bookmark': '&#xe60f;',
		'ico-bookmark2': '&#xe632;',
		'ico-bookmark3': '&#xe633;',
		'ico-left-arrow': '&#xe637;',
		'ico-right-arrow': '&#xe638;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/ico-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
