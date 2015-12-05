var __bookName = "Chand";
var __pageNumber = 1;

////https://rekhta.org/ebooks/kai-chand-the-sar-e-aasman-shamsur-rahman-faruqi-ebooks

function renderEbookPage(data)
{
	try {
		var p = data.PageId;
		originalHeight = data.PageHeight;
		originalWidth = data.PageWidth;
		if(originalHeight <= 0)
		{
			originalHeight = 1100;
		}
		if(originalWidth <= 0)
		{
			originalWidth = 1000;
		}
		var s = 50;
		var m = parseInt(50);

		var h = 50 * parseInt(data.Y);
		var w = 50 * parseInt(data.X);

		if(data.PageHeight>0)
		{
			h=data.PageHeight;
		}
		if(data.PageWidth>0)
		{
			w=data.PageWidth;
		}
		var c = $("[data-pageid='"+p+"'] canvas").get(0);
		c.height = h;
		c.width = w;

		try {
			if(w>550)
			{
				$(".gazal-in1").addClass("hidEbookPanel");
			}
			else{
				$(".gazal-in1").removeClass("hidEbookPanel");
			}
		} catch (e) {

		}

		try {
			$(c).addClass("canvas");
			$(c).addClass("actualmage");
			$(c).addClass(specialClass);
		} catch (e) {
			alert(e);
		}
		var ctx = c.getContext('2d');
		ctx.clearRect(0, 0, w, h);
		for (var i = 0; i < data.Sub.length; i++) {
			ctx.drawImage( $("[data-pageid='"+p+"'] .imgKeeper").get(0), data.Sub[i].X1 * (s + 16), data.Sub[i].Y1 * (s + 16), s, s, data.Sub[i].X2 * m, data.Sub[i].Y2 * m, m, m);
		}
		try {
			for (var i = 0; i < 5; i++) {

				if(i<totalPageCount-1)

					$('<img />').attr('src', '/Images/SiteImages/EBooks/Encrypted/'+bookId+'/'+pages[currentPageIdx+i+1]);

			}

		} catch (e) {

		}
		//region Download
		try {
			if(pageIds.indexOf(data.PageId)){
				__pageNumber = pageIds.indexOf(data.PageId)
			}
			else{
				++__pageNumber;
			}
			var __fileName = __bookName +'_'+ (++__pageNumber) + '.png';
			var c = $("[data-pageid='"+ data.PageId +"'] canvas").get(0);
			var __image__ = c.toDataURL('image/png').replace('image/png','image/octet-stream');                                                    
			$('<a href=\"'+__image__+'\" download=\"'+__fileName+'\" >')[0].click();
		} catch (e) {
				if(console) console.log(e);
		}
		//endRegion Download
		
		// $(c).css("display", "block");
		var c = $("[data-pageid='"+p+"'] .loadingPage").hide();
		HideLoading();
		renderCanvasOnResize();
	}
	catch (e) {

	}
}

setInterval(function(){  next(); }, 60000);
//setTimeout(function(){  next(); }, 10000);
