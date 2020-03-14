

  // 搜索框
  var oKeywordList = document.getElementsByClassName("keywordList")[0];
  var oKeyword=oKeywordList.getElementsByTagName("a");
  var oSearchText = document.getElementsByClassName("search-text")[0];
  var oSearchHotWords = document.getElementsByClassName("search-hot-words")[0];
  var oSearchBtn = document.getElementsByClassName("search-btn")[0];
  oSearchText.onfocus = function () {
    oSearchHotWords.style.opacity=0;
    if(oSearchHotWords.style.opacity==0){
        oSearchHotWords.classList.add("hide");
    }
      if(this.value==""){
        oKeywordList.classList.remove("hide");
      }
      
      oSearchText.classList.add("border-ff6700");
      oSearchBtn.classList.add("border-ff6700");
  }
  for(var i=0;i<oKeyword.length;i++){
    oKeyword[i].onclick=function(){
      oSearchText.value=this.innerText;
        console.log(this.innerText)
    }
}

  oSearchText.onblur = function () {
    
      if(this.value==""){
          oSearchHotWords.classList.remove("hide");
        oSearchHotWords.style.opacity=1;
      }
      oKeywordList.classList.add("hide");
      oSearchText.classList.remove("border-ff6700");
      oSearchBtn.classList.remove("border-ff6700");
  }

 
// 购物车
var oTopbarCart = document.getElementsByClassName("topbar-cart")[0];
var oCartMenu = document.getElementsByClassName("cart-menu")[0];
var oMini = document.getElementsByClassName("mini")[0];
oTopbarCart.onmouseover = function () {
    oCartMenu.style.display = "block"
    oMini.classList.add("mini-hover");
}
oTopbarCart.onmouseout = function () {
    oCartMenu.style.display = "none"
    oMini.classList.remove("mini-hover")
}
// 切换商品栏
var oManiBannerLi = document.getElementsByClassName("main-banner")[0].getElementsByTagName("li");
var oMainConUl = document.getElementsByClassName("main-con")[0].getElementsByTagName("ul");
for (var i = 0; i < oManiBannerLi.length; i++) {
    oManiBannerLi[i].index = i;

    oManiBannerLi[i].onclick = function (e) {
        for (var i = 0; i < oManiBannerLi.length; i++) {
            oManiBannerLi[i].className = "";
            oMainConUl[i].classList.remove("active");
        }
        // console.log(e.currentTarget)
        e.currentTarget.className = "active";
        oMainConUl[this.index].classList.add("active")
    }
}
// 滚动时main-banner栏固定
var oMainBanner = document.getElementsByClassName("main-banner")[0];
var oMainBannerUl = oMainBanner.getElementsByTagName("ul")[0];

window.onscroll = function () {
    // 滚动的距离
    // console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop >= $(".main-banner").offset().top) {
        oMainBannerUl.classList.add("fixed")
    } else {
        oMainBannerUl.classList.remove("fixed")
    }
}

