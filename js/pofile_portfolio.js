;(function($){

    var pofile_portfolio = {
        init: function(){
            this.wrapFn();
            this.skipFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
        },
        
        wrapFn:function(){
          var $wrap = $('#wrap');
          var $winW = $(window).innerWidth();
          var $winH = $(window).innerHeight();

          function resizeFn(){
            $winW = $(window).innerWidth();
            $winH = $(window).innerHeight();
            $wrap.css({width:$winW,height:$winH})

          }
          $(window).resize(function(){
            resizeFn();
          })
          setTimeout(resizeFn,20)

        },//wrap 반응형 끝
        skipFn:function(){
          var $section = $('#wrap .section');
          var $skipBtn = $('#skip > li > a');
          var $skipBtnLi = $('#skip > li');
          var cnt = 0;
          var g = 0;
          var $slideView = $('#section3 .slide-view');
          var scrollIf = true;
          var scrollIf2 = true;
          var winW = $(window).innerWidth();

          function resizeFn(){
            winW = $(window).innerWidth();
            
            if(winW > 1150){
              scrollIf2 = true;
            }else if(winW <= 1150){
              scrollIf2 = false;
              $section.css({top:0,opacity:1});
            }


            console.log(scrollIf);
          }
          $(window).resize(function(){
            resizeFn()
          })
          setTimeout(resizeFn,100)

          function skipMenuClickFn(idx){
            $section.css({opacity:1},300);
            $skipBtnLi.removeClass('addCla');
            $skipBtnLi.eq(idx).addClass('addCla');
            if( idx > cnt){
              for(var i = 1; i<=idx; i++){
                $section.eq(i-1).animate({top:'-969px',opacity:0},600);
              }
              cnt = idx;
            }else if( idx < cnt){
              for(var i =cnt; i>=idx; i--){
                $section.eq(i).animate({top:'0px'},300);
              }
              cnt = idx;
            }else if ( idx == cnt){
              console.log('같은값');
            }
          }

          $skipBtn.each(function(idx){
            $(this).on({
              click:function(){
                skipMenuClickFn(idx)
              }
            })
          })

          $slideView.on({
            mouseenter:function(){
              scrollIf = false;
            },
            mouseleave:function(){
              scrollIf = true;
            }
          })
          
          $(window).on({
            wheel:function(e){
                if(!$section.is(':animated') && scrollIf === true && scrollIf2 === true){
                  if(e.originalEvent.deltaY>0){
                    g = cnt + 1;
                  if(g>3){
                    g = 3;
                  }
                  skipMenuClickFn(g)
                }else if(e.originalEvent.deltaY<0){
                  g = cnt - 1;
                  if(g<0){
                    g = 0;
                  }
                  skipMenuClickFn(g)
                }
              }
            }
          })
          

          


        },//스킵메뉴 끝
        section1Fn:function(){
          var palCnt = 0;
          var $palSkip = $('#skip > li');
          var $imgWrap = $('#section1 .img-wrap');
          var $textWrap = $('#section1 .text-wrap');
          var $txtTitle = $('#section1 .txt-title');
          var $section1 = $('#section1');
          var winW = $(window).innerWidth();
          var winH = $(window).innerHeight();
          var $galImg = $('#section1 .gal-content .gal-img');
          var galArr = ['./img/1.jpg','./img/2.jpg','./img/3.jpg','./img/4.jpg'];
          var $frontImgContent = $('#section1 .card-wrap .front-img-content');
          var $imgGap = $('#section1 .img-wrap .img-gap');
          var imgW = $('#section1 .img-wrap .img-gap').width();
          var imgH = imgW*1.159420;
          
          console.log(galArr[0]);
          $galImg.each(function(idx){
            $(this).on({
              click:function(){
                $galImg.removeClass('addImgCla')
                $(this).addClass('addImgCla')
                $frontImgContent.css({'background':'url('+galArr[idx]+') no-repeat 50% 50%','background-size':'cover'});
              }
            })
          })

          function resizeFn(){
            winW = $(window).innerWidth();
            winH = $(window).innerHeight();

            imgW = winW/3.9751552;
            imgH = imgW*1.159420;
            if(winW >=1300){
              $imgGap.css({width:imgW,height:imgH});
            }else{
              $imgGap.css({width:330,height:380});
            }
            if(winW >= 1150){
              $section1.css({width:winW,height:winH});
            }else if(winW < 1150){
              $section1.css({width:winW,height:'auto'});
            }
            
          }
          $(window).resize(function(){
            resizeFn()
          })
          setTimeout(resizeFn,100)
          


          function palalFn(){
          if(palCnt == 0){
            setTimeout(function(){
              $palSkip.eq(0).addClass('palSkip');
              $imgWrap.addClass('addSect1left');
              setTimeout(function(){
                $palSkip.eq(1).addClass('palSkip');
                $textWrap.addClass('addSect1left');
                setTimeout(function(){
                  $palSkip.eq(2).addClass('palSkip');
                  setTimeout(function(){
                    $palSkip.eq(3).addClass('palSkip');
                  },300)
                },300)
              },300)
            },0)
            palCnt = 1;
          }else if(palCnt == 1){
            $palSkip.removeClass('palSkip');
            $imgWrap.removeClass('addSect1left');
            $textWrap.removeClass('addSect1left');
            palCnt = 0;
          }
        }
        setTimeout(palalFn);


        },// 섹션1번 끝
        section2Fn:function(){
          var $slideContent = $('#section2 .skill-wrap .skill-gap .skill-content');
          var slideContentW = $slideContent.innerWidth();
          var moveX = 0;
          var scmoveX = 0;
          var slideLeft = $slideContent.offset().left;
          var $scrollWrap = $('#section2 .scroll-gap .scroll-content .fill');
          var $full = $('#section2 .scroll-gap .scroll-content .full');
          var fullW = $full.outerWidth()-50;
          var $scrollful = $('#section2 .skill-wrap .scroll-wrap');
          var slideGapW = $('#section2 .skill-wrap .skill-gap').innerWidth();
          var slideW = $slideContent.innerWidth()-slideGapW;
          var scrollLeft = $scrollWrap.offset().left-50;
          var $padeP =  $('#section2 .img-wrap > p');
          var $slideP =  $('#section2 .skill-gap .skill-content > p');
          var slidePW =  $slideP.innerWidth();
          var $section2 = $('#section2');
          var winW = $(window).innerWidth();
          var winH = $(window).innerHeight();
          var $imgWrap = $('.skill-content > p > img');

          function resizeFn(){
            winW = $(window).innerWidth();
            winH = $(window).innerHeight();
            slideContentW = (winW*1.375)+400;
            slideGapW = $('#section2 .skill-wrap .skill-gap').innerWidth();
            slidePW = winW*0.171875;
            fullW = winW*0.41875;
            slideW = $slideContent.innerWidth()-slideGapW;
            
            console.log(slideW);
            if(winW <600){
              $imgWrap.css({width:slidePW})
            }else if(winW >=600){
              $imgWrap.css({width:100})
            }
            $slideContent.stop().animate({left:0},300)
            $scrollWrap.stop().animate({left:fullW},300)
            $scrollWrap.css({width:fullW/8.4})
            $full.css({width:fullW})
            $slideP.css({width:slidePW})
            $slideContent.css({width:slideContentW});
            if(winW >= 1150){
              $section2.css({width:winW,height:winH});
            }else if(winW < 1150){
              $section2.css({width:winW,height:700});
            }
          }
          $(window).resize(function(){
            resizeFn()
          })
          setTimeout(resizeFn,100)

          
          $scrollWrap.on({
            mousedown:function(e){
              e.preventDefault();
              $scrollful.on({
                mousemove:function(v){
                  slideW = $slideContent.innerWidth()-slideGapW;
                  moveX =  (v.clientX-e.clientX)*2;
                  if( !$slideContent.is(':animated') && scmoveX+scrollLeft >=50 && scmoveX+scrollLeft <= fullW){
                    $slideContent.stop().animate({left:moveX+slideLeft},0,'easeOutExpo')
                  } // 스킬 슬라이드
                  scmoveX =  v.clientX-e.clientX;
                  if( !$scrollWrap.is(':animated') && scmoveX+scrollLeft >=50 && scmoveX+scrollLeft <= fullW){
                    $scrollWrap.stop().animate({left:scmoveX+scrollLeft},0,'easeOutExpo')
                  } // 스크롤 슬라이드
                }
              })
              slideLeft = moveX+slideLeft;
              if(slideLeft > 0){
                slideLeft = 0;
              }else if(slideLeft <-slideW){
                slideLeft = -slideW;
              }

              scrollLeft = scmoveX+scrollLeft;
              if(scrollLeft < 0){
                scrollLeft = 50;
              }else if(scrollLeft > fullW){
                scrollLeft = fullW;
              }
            },

            mouseup:function(e){
              e.preventDefault();
              if(scmoveX+scrollLeft < 0){
                $scrollWrap.stop().css({left:50})
              }else if(scmoveX+scrollLeft > fullW){
                $scrollWrap.stop().css({left:fullW})
              }
              $scrollful.off('mousemove');
            }
          })
          $scrollful.on({
            mouseup:function(e){
              e.preventDefault();
              if(scmoveX+scrollLeft < 0){
                $scrollWrap.stop().css({left:50})
              }else if(scmoveX+scrollLeft > fullW){
                $scrollWrap.stop().css({left:fullW})
              }
              $scrollful.off('mousemove');
            }
          })

          $slideContent.on({
            mousedown:function(e){
              e.preventDefault();
              $slideContent.on({
                mousemove:function(v){
                  slideW = $slideContent.innerWidth()-slideGapW;
                  console.log(slideLeft);
                  moveX =  v.clientX-e.clientX;
                  if( !$slideContent.is(':animated')){
                    $slideContent.stop().animate({left:moveX+slideLeft},0,'easeOutExpo')
                  } // 스킬 슬라이드
                  scmoveX =  (v.clientX-e.clientX)/2;
                  if( !$scrollWrap.is(':animated') && scmoveX+scrollLeft >=50 && scmoveX+scrollLeft <= fullW){
                    $scrollWrap.stop().animate({left:scmoveX+scrollLeft},0,'easeOutExpo')
                  } // 스크롤 슬라이드
                }
              })
              slideLeft = moveX+slideLeft;
              if(slideLeft > 0){
                slideLeft = 0;
              }else if(slideLeft <-slideW){
                slideLeft = -slideW;
              }

              scrollLeft = scmoveX+scrollLeft;
              if(scrollLeft < 0){
                scrollLeft = 50;
              }else if(scrollLeft > fullW){
                scrollLeft = fullW;
              }
            },

            mouseup:function(e){
              e.preventDefault();
              if(moveX+slideLeft > 0){
                $slideContent.stop().animate({left:0},300)
                $scrollWrap.stop().animate({left:fullW},300)
              }else if(moveX+slideLeft < -slideW){
                console.log('gd');
                $slideContent.stop().animate({left:-slideW},300)
                $scrollWrap.stop().animate({left:50},300)
              }
              $slideContent.off('mousemove');
            }

          });

          $slideP.each(function(idx){
            $(this).on({
              click:function(){
                $slideP.removeClass('addCla');
                $(this).addClass('addCla');
                $padeP.fadeOut(0);
                $padeP.eq(idx).fadeIn(600);
                // 해당 애드클래스가된 idx값을 가져와서 해당 순번의 사진출력
              }
            })
          })

        },//섹션2번 끝
        section3Fn:function(){
          var $nextBtn = $('#section3 .page-btn-content .next-btn');
          var $prevBtn = $('#section3 .page-btn-content .prev-btn');
          var cnt = -1;
          var $slideWrap = $('#section3 .slide-view .slide-wrap');
          var $slideView = $('#section3 .slide-view');
          var slideViewW = $slideView.innerWidth();
          var $slide = $('#section3 .slide-view .slide-wrap .slide');
          var $slide0 = $('#section3 .slide-view .slide-wrap .slide0');
          var slide0H = $('#section3 .slide-view .slide-wrap .slide0').innerHeight();
          var $slide1 = $('#section3 .slide-view .slide-wrap .slide1');
          var slide1H = $('#section3 .slide-view .slide-wrap .slide1').innerHeight();
          var $slide2 = $('#section3 .slide-view .slide-wrap .slide2');
          var slide2H = $('#section3 .slide-view .slide-wrap .slide2').innerHeight();
          var $slide3 = $('#section3 .slide-view .slide-wrap .slide3');
          var slide3H = $('#section3 .slide-view .slide-wrap .slide3').innerHeight();
          var $text = $('#section3 .text-content .text')
          var $roundBar = $('#section3 .page-btn-content .page .round-bar');
          var $section3 = $('#section3');
          var winW = $(window).innerWidth();
          var winH = $(window).innerHeight();

          function resizeFn(){
            winW = $(window).innerWidth();
            winH = $(window).innerHeight();
            slideViewW = winW / 2.4120603;
            slide0H = slideViewW *7.0816582;
            slide1H = slideViewW *5.1721105;
            slide2H = slideViewW *3.7776381;
            slide3H = slideViewW *4.7814070;


            $slideView.css({width:slideViewW});
            $slide0.css({height:slide0H})
            $slide1.css({height:slide1H})
            $slide2.css({height:slide2H})
            $slide3.css({height:slide3H})
            $section3.css({width:winW,height:winH});
          }
          $(window).resize(function(){
            resizeFn()
          })
          setTimeout(resizeFn,100)

          function slideTextFn(cnt){
            if(cnt == -5){ cnt = -1}
            if(cnt == 3){cnt = -1}
            $text.css({left:-20,opacity:0})
            $text.fadeOut(0)
            $text.eq(-cnt-1).stop().fadeIn(600);
            $text.stop().animate({left:0,opacity:1},600);
            // $text.css({opacity:0,'z-index':1})
            // $text.eq(-cnt-1).css({opacity:1,'z-index':3})
          }

          function mainSlideFn(){
            // console.log(cnt);
            if(cnt == -5){ cnt = -1}
            if(cnt == 3){cnt = -1}
            $roundBar.removeClass('addClick');
            $slide.fadeOut(0)
            $slide.eq(-cnt-1).stop().fadeIn(600);
            $roundBar.eq(-cnt-1).addClass('addClick');
            console.log($roundBar);
          }
          function nextSlideFn(){
            cnt--;
            resizeFn();
            mainSlideFn();
            slideTextFn(cnt);
          }
          function prevSlideFn(){
            cnt++;
            resizeFn();
            mainSlideFn();
            slideTextFn(cnt);
          }
          function roundBarClickFn(idx){
            mainSlideFn();
            $roundBar.removeClass('addClick');
            $roundBar.eq(idx).addClass('addClick');
          }

          $nextBtn.on({
            click:function(){
              nextSlideFn();
              if($slideView.scrollTop() >= $slide.offset().top){
                $slideView.scrollTop(0);
              }
            }
          })

          $prevBtn.on({
            click:function(){
              prevSlideFn();
              if($slideView.scrollTop() >= $slide.offset().top){
                $slideView.scrollTop(0);
              }
            }
          })
          $roundBar.each(function(idx){
            $(this).on({
              click:function(){
                cnt = -idx+3;
                roundBarClickFn(idx);
                if($slideView.scrollTop() >= $slide.offset().top){
                  $slideView.scrollTop(0);
                }
              }
            })
          })

          // setId = setInterval(function(){
          //   if(t==4){
          //     prevSlideFn();
          //     clearInterval(setId);
          //   }
          //   t++;
          //   nextSlideFn();
          //   // console.log(t);
          // },10)// 이미지크기가 너무 커서 렉이걸림 시작하자마자 한번 돌려주는게 나은거같다


        },// 섹션3번 끝
        section4Fn:function(){
          var $section4 = $('#section4');
          var winW = $(window).innerWidth();
          var winH = $(window).innerHeight();
          var $sumbBtn = $('#section4 form .button-wrap button');
          var $msg = $('#section4 .msg-wrap .msg-gap p');
          var $frmName = $('#section4 #frm-name');
          var $frmEmail = $('#section4 #frm-email');
          var $frmMessage = $('#section4 #frm-message');

          function resizeFn(){
            winW = $(window).innerWidth();
            winH = $(window).innerHeight();

            $section4.css({width:winW,height:winH});
          }
          $(window).resize(function(){
            resizeFn()
          })
          setTimeout(resizeFn,100)

          $sumbBtn.on({
            click:function(e){
              e.preventDefault();

              var $frmNameVal = $('#section4 #frm-name').val();
              var $frmEmailVal = $('#section4 #frm-email').val();
              var $frmMessageVal = $('#section4 #frm-message').val();
              var $questionVal = $('#question option:selected').val();
                
                $.ajax({
                  url:'./php/response.php',
                  type:'POST',
                  data:{
                    email : $frmEmailVal,
                    name : $frmNameVal,
                    message :$frmMessageVal,
                    question : $questionVal
                  },
                  success: function(result){
                    console.log(result);
                    $msg.html(result);
                    $msg.fadeIn(1000);
                    setTimeout(msgFn, 3000);

                    function msgFn(){
                      $frmName.val('');
                      $frmEmail.val('');
                      $frmMessage.val('');

                      $msg.fadeOut(1000);
                      $frmName.focus();
                    }
                  },
                  error: function(msg){
                    console.log('AJAX 전송 실패!!!');
                    console.log($frmEmailVal);
                    console.log($frmNameVal);
                    console.log($frmMessageVal);
                    console.log($questionVal);
                    $msg.fadeIn(1000);
                    $msg.html(' Validation errors occurred. Please confirm the fields and submit it again.');
                  }
                })
              }
            })

        }// 섹션4번 끝
        

    }
    pofile_portfolio.init();

})(jQuery);