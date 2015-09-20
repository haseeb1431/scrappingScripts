var __bookName = "Manto";
var __pageNumber = 1;
 
function RenderPage(page) {
        $.getJSON('/Api_GetEBookPageById/?pageId='+ page , function (data, status) {
                try {
                        var p = data.PageId;
                        var s = 50;
                        var m = parseInt(50 * ratio);
                        var h = 50 * ratio * parseInt(data.Y);
                        var w = 50 * ratio * parseInt(data.X);
 
                        if(data.PageHeight>0)
                        {
                                h=data.PageHeight*ratio;
                        }
                        if(data.PageWidth>0)
                        {
                                w=data.PageWidth*ratio;
                        }
                        $('#bookContainer').width(w);
 
                        $('#bookContainer').height(h);
 
 
                        //$('#myCanvas').height(h);
                        //$('#myCanvas').width(w);
 
                   // ApplyScroll();
                        var c = $("[data-pageid='"+p+"'] canvas").get(0);
 
                        c.height = h;
                        c.width = w;
 
                        try {
                                if(w>550)
                                {
                                        $(".gazal-in1").addClass("hidEbookPanel");
                                   // ApplyScroll();
                                        $('#bookContainer').closest('.bookContainer').addClass("col-lg-18");
                                        $('#bookContainer').closest('.bookContainer').addClass("col-md-18");
                                        $('#bookContainer').closest('.bookContainer').removeClass("col-lg-12");
                                        $('#bookContainer').closest('.bookContainer').removeClass("col-md-12");
                                }
                                else{
                                        $(".gazal-in1").removeClass("hidEbookPanel");
                                   // ApplyScroll();
                                        $('#bookContainer').closest('.bookContainer').addClass("col-lg-12");
                                        $('#bookContainer').closest('.bookContainer').addClass("col-md-12");
                                        $('#bookContainer').closest('.bookContainer').removeClass("col-lg-18");
                                        $('#bookContainer').closest('.bookContainer').removeClass("col-md-18");
                                }
                        } catch (e) {
 
                        }
                                  $('#bookContainer').css('margin-left',(($('#bookContainer').closest('.bookContainer').width()-(w+20))/2)+'px');
 
                        try {
                                $(c).addClass("canvas");
                        } catch (e) {
                                alert(e);
                        }
                        var ctx = c.getContext('2d');
 
 
 
                        ctx.clearRect(0, 0, w, h);
                        // ctx.clearRect(0, 0, 800, 1100);
 
                        //ctx.beginPath();
                        //ctx.rect(0,0,w2*ratio,h2*ratio);
                        //ctx.clip();
 
                        for (var i = 0; i < data.Sub.length; i++) {
                                ctx.drawImage( $("[data-pageid='"+p+"'] .imgKeeper").get(0), data.Sub[i].X1 * (s + 16), data.Sub[i].Y1 * (s + 16), s, s, data.Sub[i].X2 * m, data.Sub[i].Y2 * m, m, m);
 
                        }
                        try {
                                if(currentPageIdx <=pages.length-2)
                                {$('<img />').attr('src', '/Images/SiteImages/EBooks/Encrypted/5928b168-eb56-4c8a-92d3-dafcbf361ee0/'+pages[currentPageIdx+1]);
                                        $('<img />').attr('src', '/Images/SiteImages/EBooks/Encrypted/5928b168-eb56-4c8a-92d3-dafcbf361ee0/'+pages[currentPageIdx+2]);
                                }
                        } catch (e) {
 
                        }
 
                }
                catch (e) {
                }
                try {
                        var __fileName = __bookName +'_'+ (++__pageNumber) + '.png';
                        var c = $("[data-pageid='"+page+"'] canvas").get(0);
                        var __image__ = c.toDataURL('image/png').replace('image/png','image/octet-stream');                                                    
                        $('<a href=\"'+__image__+'\" download=\"'+__fileName+'\" >')[0].click();
                        setTimeout(function(){  next(); }, 5000);
                } catch (e) {
                        if(console) console.log(e);
                }
               
                //loadImages();
                var c = $("[data-pageid='"+p+"'] .loadingPage").hide();
                // manageSelection();
                //hidePageLoading();
 
                HideLoading();
        });
}
 
//start execution of the script
next();