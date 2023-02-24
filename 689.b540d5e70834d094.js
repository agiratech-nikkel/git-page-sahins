"use strict";(self.webpackChunksahins=self.webpackChunksahins||[]).push([[689],{8689:(dt,M,c)=>{c.d(M,{R:()=>ft,X:()=>ut});var v=c(5671),p=c(3144),d=c(4650),I=c(9646),x=c(4968),R=c(5577),D=c(4004),H=c(8505),b=c(9300),U=c(4986),Y=c(4482),C=c(5403),z=c(8421),K={leading:!0,trailing:!1};function N(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K;return(0,Y.e)(function(n,o){var l=e.leading,i=e.trailing,r=!1,u=null,s=null,a=!1,f=function(){s?.unsubscribe(),s=null,i&&(k(),a&&o.complete())},h=function(){s=null,a&&o.complete()},y=function(T){return s=(0,z.Xf)(t(T)).subscribe((0,C.x)(o,f,h))},k=function(){if(r){r=!1;var T=u;u=null,o.next(T),!a&&y(T)}};n.subscribe((0,C.x)(o,function(g){r=!0,u=g,(!s||s.closed)&&(l?k():y(g))},function(){a=!0,(!(i&&r&&s)||s.closed)&&o.complete()}))})}var F=c(5963);function Z(t,e,n,o){var l=window&&!!window.document&&window.document.documentElement,i=l&&e?window:n;if(t&&(i=t&&l&&"string"==typeof t?function V(t,e,n){return(n?window.document:e).querySelector(t)}(t,n.nativeElement,o):t,!i))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return i}function w(t){return t&&!t.firstChange}var X={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},j={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"},G=function(){function t(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];(0,v.Z)(this,t),this.vertical=e,this.propsMap=e?X:j}return(0,p.Z)(t,[{key:"clientHeightKey",value:function(){return this.propsMap.clientHeight}},{key:"offsetHeightKey",value:function(){return this.propsMap.offsetHeight}},{key:"scrollHeightKey",value:function(){return this.propsMap.scrollHeight}},{key:"pageYOffsetKey",value:function(){return this.propsMap.pageYOffset}},{key:"offsetTopKey",value:function(){return this.propsMap.offsetTop}},{key:"scrollTopKey",value:function(){return this.propsMap.scrollTop}},{key:"topKey",value:function(){return this.propsMap.top}}]),t}();function Q(t){return["Window","global"].some(function(n){return Object.prototype.toString.call(t).includes(n)})}function m(t,e){return t?e.document.documentElement:null}function W(t,e){var n=function tt(t){var e=t.container,n=t.isWindow,l=O(t.axis);return E(e,n,l.offsetHeightKey,l.clientHeightKey)}(e);return e.isWindow?function q(t,e,n){var o=n.axis,l=n.container,i=n.isWindow,r=O(o),u=r.offsetHeightKey,s=r.clientHeightKey,a=t+P(m(i,l),o,i),f=E(e.nativeElement,i,u,s),h=function et(t,e,n){var o=e.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[o]+P(t,e,n)}(e.nativeElement,o,i)+f;return{height:t,scrolled:a,totalToScroll:h,isWindow:i}}(n,t,e):function _(t,e,n){var o=n.axis,l=n.container;return{height:t,scrolled:l[o.scrollTopKey()],totalToScroll:l[o.scrollHeightKey()],isWindow:!1}}(n,0,e)}function O(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function E(t,e,n,o){if(isNaN(t[n])){var l=m(e,t);return l?l[o]:0}return t[n]}function P(t,e,n){var o=e.pageYOffsetKey(),l=e.scrollTopKey(),i=e.offsetTopKey();return isNaN(window.pageYOffset)?m(n,t)[l]:t.ownerDocument?t.ownerDocument.defaultView[o]:t[i]}function nt(t,e,n){var o,l;if(t.totalToScroll<=0)return!1;var i=t.isWindow?t.scrolled:t.height+t.scrolled;return n?(o=(t.totalToScroll-i)/t.totalToScroll,l=e.down/10):(o=t.scrolled/(t.scrolled+(t.totalToScroll-i)),l=e.up/10),o<=l}var lt=function(){function t(e){var n=e.totalToScroll;(0,v.Z)(this,t),this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=n}return(0,p.Z)(t,[{key:"updateScrollPosition",value:function(n){return this.lastScrollPosition=n}},{key:"updateTotalToScroll",value:function(n){this.lastTotalToScroll!==n&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=n)}},{key:"updateScroll",value:function(n,o){this.updateScrollPosition(n),this.updateTotalToScroll(o)}},{key:"updateTriggeredFlag",value:function(n,o){o?this.triggered.down=n:this.triggered.up=n}},{key:"isTriggeredScroll",value:function(n,o){return o?this.triggered.down===n:this.triggered.up===n}}]),t}();function rt(t){var e=t.scrollContainer,n=t.scrollWindow,o=t.element,l=t.fromRoot,i=function L(t){var e=t.windowElement;return function $(t,e){var n=t.isWindow||e&&!e.nativeElement?e:e.nativeElement;return Object.assign(Object.assign({},t),{container:n})}({axis:t.axis,isWindow:Q(e)},e)}({axis:new G(!t.horizontal),windowElement:Z(e,n,o,l)}),r=new lt({totalToScroll:W(o,i)}),s={up:t.upDistance,down:t.downDistance};return function at(t){var e=(0,x.R)(t.container,"scroll");return t.throttle&&(e=e.pipe(function A(t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:K,o=(0,F.H)(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:U.z);return N(function(){return o},n)}(t.throttle))),e}({container:i.container,throttle:t.throttle}).pipe((0,R.z)(function(){return(0,I.of)(W(o,i))}),(0,D.U)(function(a){return function st(t,e,n){var o=function it(t,e,n){var o=function ot(t,e){return t<e.scrolled}(t,e);return{fire:nt(e,n,o),scrollDown:o}}(t,e,n);return{scrollDown:o.scrollDown,fire:o.fire,stats:e}}(r.lastScrollPosition,a,s)}),(0,H.b)(function(a){var f=a.stats;return r.updateScroll(f.scrolled,f.totalToScroll)}),(0,b.h)(function(a){return function J(t,e,n){return!!(t&&e||!n&&e)}(t.alwaysCallback,a.fire,r.isTriggeredScroll(a.stats.totalToScroll,a.scrollDown))}),(0,H.b)(function(a){r.updateTriggeredFlag(a.stats.totalToScroll,a.scrollDown)}),(0,D.U)(ct))}function ct(t){return{type:t.scrollDown?"[NGX_ISE] DOWN":"[NGX_ISE] UP",payload:{currentScrollPosition:t.stats.scrolled}}}var ft=function(){var t=function(){function e(n,o){(0,v.Z)(this,e),this.element=n,this.zone=o,this.scrolled=new d.vpe,this.scrolledUp=new d.vpe,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}return(0,p.Z)(e,[{key:"ngAfterViewInit",value:function(){this.infiniteScrollDisabled||this.setup()}},{key:"ngOnChanges",value:function(o){var i=o.infiniteScrollDisabled,r=o.infiniteScrollDistance,u=w(o.infiniteScrollContainer),s=w(i),a=w(r),f=!s&&!this.infiniteScrollDisabled||s&&!i.currentValue||a;(u||s||a)&&(this.destroyScroller(),f&&this.setup())}},{key:"setup",value:function(){var o=this;(function B(){return typeof window<"u"})()&&this.zone.runOutsideAngular(function(){o.disposeScroller=rt({fromRoot:o.fromRoot,alwaysCallback:o.alwaysCallback,disable:o.infiniteScrollDisabled,downDistance:o.infiniteScrollDistance,element:o.element,horizontal:o.horizontal,scrollContainer:o.infiniteScrollContainer,scrollWindow:o.scrollWindow,throttle:o.infiniteScrollThrottle,upDistance:o.infiniteScrollUpDistance}).subscribe(function(l){return o.zone.run(function(){return o.handleOnScroll(l)})})})}},{key:"handleOnScroll",value:function(o){var i=o.payload;switch(o.type){case"[NGX_ISE] DOWN":return this.scrolled.emit(i);case"[NGX_ISE] UP":return this.scrolledUp.emit(i);default:return}}},{key:"ngOnDestroy",value:function(){this.destroyScroller()}},{key:"destroyScroller",value:function(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}]),e}();return t.\u0275fac=function(n){return new(n||t)(d.Y36(d.SBq),d.Y36(d.R0b))},t.\u0275dir=d.lG2({type:t,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[d.TTD]}),t}(),ut=function(){var t=(0,p.Z)(function e(){(0,v.Z)(this,e)});return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({}),t}()}}]);