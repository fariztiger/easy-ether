(this.webpackJsonponramp=this.webpackJsonponramp||[]).push([[0],{265:function(e,t,n){e.exports=n.p+"static/media/logo-white.86143c9b.png"},267:function(e,t,n){e.exports=n(671)},276:function(e,t,n){},287:function(e,t){},309:function(e,t){},311:function(e,t){},332:function(e,t){},348:function(e,t){},367:function(e,t){},385:function(e,t){},386:function(e,t){},440:function(e,t){},461:function(e,t){},466:function(e,t){},481:function(e,t){},483:function(e,t){},492:function(e,t){},494:function(e,t){},519:function(e,t){},521:function(e,t){},522:function(e,t){},528:function(e,t){},530:function(e,t){},548:function(e,t){},551:function(e,t){},567:function(e,t){},570:function(e,t){},574:function(e,t){},589:function(e,t){},591:function(e,t){},629:function(e,t){},671:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(48),c=n.n(u),o=n(23),i=n(4),s=n(5),p=n(12),l=n(11),m=(n(276),n(18)),y=n(19),d=(Object(y.a)((function(e){return Object(m.get)(e,"app.ramp",null)}),(function(e){return e})),Object(y.a)((function(e){return Object(m.get)(e,"app.cEthInstance",null)}),(function(e){return e}))),b=Object(y.a)((function(e){return Object(m.get)(e,"account.loggingIn",!1)}),(function(e){return e})),f=Object(y.a)((function(e){return Object(m.get)(e,"account.loggedIn",!1)}),(function(e){return e})),E=Object(y.a)((function(e){return Object(m.get)(e,"account.error",!1)}),(function(e){return e})),O=Object(y.a)((function(e){return Object(m.get)(e,"account.web3",null)}),(function(e){return e})),w=Object(y.a)((function(e){return Object(m.get)(e,"account.account","")}),(function(e){return e})),v=Object(y.a)((function(e){return Object(m.get)(e,"account.balance",null)}),(function(e){return e})),h=Object(y.a)((function(e){return Object(m.get)(e,"account.network",null)}),(function(e){return e})),g=Object(y.a)((function(e){return Object(m.get)(e,"display.page","")}),(function(e){return e})),j=Object(y.a)((function(e){return Object(m.get)(e,"topup.active",!1)}),(function(e){return e})),x=Object(y.a)((function(e){return Object(m.get)(e,"topup.error",!1)}),(function(e){return e})),N=Object(y.a)((function(e){return Object(m.get)(e,"topup.success",!1)}),(function(e){return e})),A=Object(y.a)((function(e){return Object(m.get)(e,"topup.response",null)}),(function(e){return e})),I=Object(y.a)((function(e){return Object(m.get)(e,"save.apy","")}),(function(e){return e})),_=Object(y.a)((function(e){return Object(m.get)(e,"save.cEthBalance",0)}),(function(e){return e})),M=Object(y.a)((function(e){return Object(m.get)(e,"save.underlyingBalance",0)}),(function(e){return e})),T=Object(y.a)((function(e){return Object(m.get)(e,"save.supplyValue",0)}),(function(e){return e})),C=Object(y.a)((function(e){return Object(m.get)(e,"save.depositing",!1)}),(function(e){return e})),R=Object(y.a)((function(e){return Object(m.get)(e,"save.depositConfirmationNumber",0)}),(function(e){return e})),k=Object(y.a)((function(e){return Object(m.get)(e,"save.redeemValue",0)}),(function(e){return e})),S=Object(y.a)((function(e){return Object(m.get)(e,"save.withdrawing",!1)}),(function(e){return e})),D=Object(y.a)((function(e){return Object(m.get)(e,"save.withdrawConfirmationNumber",0)}),(function(e){return e})),B=n(673),L=n(674),P=n(675),F=n(676),G=n(6),H=n.n(G),W=n(20);function U(e){return{type:"LOGGED_IN",web3:e}}function V(e){return{type:"LOGIN_FAILED",error:e}}function Y(e){return{type:"ACCOUNT_LOADED",account:e}}function q(e){return{type:"BALANCE_LOADED",balance:e}}function z(e){return{type:"NETWORK_LOADED",network:e}}function J(e){return{type:"CETH_LOADED",cEthInstance:e}}function K(e){return{type:"RAMP_SUCCESS",response:e}}function X(e){return{type:"RAMP_CLOSED",response:e}}function Q(e){return{type:"RAMP_FAILED",response:e}}function $(e){return{type:"PAGE_SELECTED",page:e}}function Z(e){return{type:"UNDERLYING_BALANCE_SET",underlyingBalance:e}}function ee(e){return{type:"DEPOSITING_CONFIRMATION",number:e}}function te(e){return{type:"WITHDRAWING_CONFIRMATION",number:e}}var ne=n(260),ae=function(e,t){t.on("WIDGET_CLOSE_REQUEST_CONFIRMED",(function(t){he(e,t)})),t.on("PURCHASE_CREATED",(function(e){console.log("purchase created",e)})),t.on("PURCHASE_SUCCESSFUL",(function(t){ve(e,t)})),t.on("PURCHASE_FAILED",(function(t){ge(e,t)}))},re=function(){var e=Object(W.a)(H.a.mark((function e(t,n){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.currentProvider.on("accountsChanged",(function(e){pe(t,n)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ue=n(261),ce=n.n(ue),oe={main:"0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5",kovan:"0x41b5844f4680a8c38fbb695b7f9cfd1f64474a72"},ie=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"mint",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"reserveFactorMantissa",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"account",type:"address"}],name:"borrowBalanceCurrent",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"exchangeRateStored",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"src",type:"address"},{name:"dst",type:"address"},{name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"pendingAdmin",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"owner",type:"address"}],name:"balanceOfUnderlying",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getCash",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newComptroller",type:"address"}],name:"_setComptroller",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalBorrows",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"repayBorrow",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"comptroller",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"reduceAmount",type:"uint256"}],name:"_reduceReserves",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"initialExchangeRateMantissa",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"accrualBlockNumber",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"totalBorrowsCurrent",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"redeemAmount",type:"uint256"}],name:"redeemUnderlying",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalReserves",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"account",type:"address"}],name:"borrowBalanceStored",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"accrueInterest",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"dst",type:"address"},{name:"amount",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"borrowIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"borrower",type:"address"},{name:"cTokenCollateral",type:"address"}],name:"liquidateBorrow",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"supplyRatePerBlock",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"liquidator",type:"address"},{name:"borrower",type:"address"},{name:"seizeTokens",type:"uint256"}],name:"seize",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newPendingAdmin",type:"address"}],name:"_setPendingAdmin",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"exchangeRateCurrent",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"account",type:"address"}],name:"getAccountSnapshot",outputs:[{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"borrowAmount",type:"uint256"}],name:"borrow",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"redeemTokens",type:"uint256"}],name:"redeem",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"borrower",type:"address"}],name:"repayBorrowBehalf",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[],name:"_acceptAdmin",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newInterestRateModel",type:"address"}],name:"_setInterestRateModel",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"interestRateModel",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"admin",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"borrowRatePerBlock",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newReserveFactorMantissa",type:"uint256"}],name:"_setReserveFactor",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"isCToken",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"comptroller_",type:"address"},{name:"interestRateModel_",type:"address"},{name:"initialExchangeRateMantissa_",type:"uint256"},{name:"name_",type:"string"},{name:"symbol_",type:"string"},{name:"decimals_",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"interestAccumulated",type:"uint256"},{indexed:!1,name:"borrowIndex",type:"uint256"},{indexed:!1,name:"totalBorrows",type:"uint256"}],name:"AccrueInterest",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"minter",type:"address"},{indexed:!1,name:"mintAmount",type:"uint256"},{indexed:!1,name:"mintTokens",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"redeemer",type:"address"},{indexed:!1,name:"redeemAmount",type:"uint256"},{indexed:!1,name:"redeemTokens",type:"uint256"}],name:"Redeem",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"borrower",type:"address"},{indexed:!1,name:"borrowAmount",type:"uint256"},{indexed:!1,name:"accountBorrows",type:"uint256"},{indexed:!1,name:"totalBorrows",type:"uint256"}],name:"Borrow",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"payer",type:"address"},{indexed:!1,name:"borrower",type:"address"},{indexed:!1,name:"repayAmount",type:"uint256"},{indexed:!1,name:"accountBorrows",type:"uint256"},{indexed:!1,name:"totalBorrows",type:"uint256"}],name:"RepayBorrow",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"liquidator",type:"address"},{indexed:!1,name:"borrower",type:"address"},{indexed:!1,name:"repayAmount",type:"uint256"},{indexed:!1,name:"cTokenCollateral",type:"address"},{indexed:!1,name:"seizeTokens",type:"uint256"}],name:"LiquidateBorrow",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"oldPendingAdmin",type:"address"},{indexed:!1,name:"newPendingAdmin",type:"address"}],name:"NewPendingAdmin",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"oldAdmin",type:"address"},{indexed:!1,name:"newAdmin",type:"address"}],name:"NewAdmin",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"oldComptroller",type:"address"},{indexed:!1,name:"newComptroller",type:"address"}],name:"NewComptroller",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"oldInterestRateModel",type:"address"},{indexed:!1,name:"newInterestRateModel",type:"address"}],name:"NewMarketInterestRateModel",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"oldReserveFactorMantissa",type:"uint256"},{indexed:!1,name:"newReserveFactorMantissa",type:"uint256"}],name:"NewReserveFactor",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"admin",type:"address"},{indexed:!1,name:"reduceAmount",type:"uint256"},{indexed:!1,name:"newTotalReserves",type:"uint256"}],name:"ReservesReduced",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"error",type:"uint256"},{indexed:!1,name:"info",type:"uint256"},{indexed:!1,name:"detail",type:"uint256"}],name:"Failure",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"amount",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"amount",type:"uint256"}],name:"Approval",type:"event"}],se=function(){var e=Object(W.a)(H.a.mark((function e(t){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOGGING_IN"}),n=null,e.prev=2,e.next=5,new Promise(function(){var e=Object(W.a)(H.a.mark((function e(t,n){var a,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=13;break}return a=new ce.a(window.ethereum),e.prev=2,e.next=5,window.ethereum.enable();case 5:t(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),n(e.t0);case 11:e.next=14;break;case 13:window.web3?(r=window.web3,t(r)):n(new Error("No web3 wallet available"));case 14:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n){return e.apply(this,arguments)}}());case 5:n=e.sent,pe(t,n).then((function(e){le(t,n,e).then((function(a){me(t,n,e,a),t(U(n))})).catch((function(e){t(V(e))}))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t(V(e.t0));case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=Object(W.a)(H.a.mark((function e(t,n){var a,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.eth.getAccounts();case 2:return a=e.sent,r=a[0],t(Y(r)),re(t,n),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),le=function(){var e=Object(W.a)(H.a.mark((function e(t,n,a){var r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.eth.net.getNetworkType();case 2:if((r=e.sent)in oe){e.next=5;break}throw new Error("Network not supported");case 5:return t(z(r)),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),me=function(){var e=Object(W.a)(H.a.mark((function e(t,n,a,r){var u;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.eth.getBalance(a);case 2:return u=e.sent,t(q(u)),ye(t,n,a,r),e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),ye=function(){var e=Object(W.a)(H.a.mark((function e(t,n,a,r){var u,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=oe[r],c=new n.eth.Contract(ie,u),t(J(c)),de(t,c,a),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),de=function(){var e=Object(W.a)(H.a.mark((function e(t,n,a){var r,u,c,o,i;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=1e18,u=5760,c=365,e.next=5,n.methods.supplyRatePerBlock().call();case 5:return o=e.sent,i=100*(Math.pow(o/r*u+1,c-1)-1),t({type:"INTEREST_RATE_SET",apy:i}),be(t,n,a),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),be=function(){var e=Object(W.a)(H.a.mark((function e(t,n,a){var r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.methods.balanceOfUnderlying(a).call();case 2:return r=e.sent,t(Z(r)),fe(t,n,a),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),fe=function(){var e=Object(W.a)(H.a.mark((function e(t,n,a){var r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.methods.balanceOf(a).call();case 2:return r=e.sent,t({type:"CETH_BALANCE_SET",balance:r/=1e8}),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(W.a)(H.a.mark((function e(t,n,a,r,u,c){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.methods.mint().send({from:a,value:r}).once("transactionHash",(function(e){t({type:"DEPOSITING_STARTED"})})).on("confirmation",(function(e,n){e<4&&(t(ee(e+1)),3===e&&(t({type:"DEPOSITING_FINISHED"}),me(t,u,a,c)))})).on("error",(function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a,r,u,c){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(W.a)(H.a.mark((function e(t,n,a,r,u,c){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.methods.redeemUnderlying(r).send({from:a}).once("transactionHash",(function(e){t({type:"WITHDRAWING_STARTED"})})).on("confirmation",(function(e,n){e<4&&(t(te(e+1)),3===e&&(t({type:"WITHDRAWING_FINISHED"}),me(t,u,a,c)))})).on("error",(function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a,r,u,c){return e.apply(this,arguments)}}(),we=function(){var e=Object(W.a)(H.a.mark((function e(t,n){var a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=new ne.a({hostAppName:"Easy Ether",hostLogoUrl:"https://alexroan.github.io/easy-ether/static/media/logo-white.86143c9b.png",variant:"auto",userAddress:n}).show(),t({type:"RAMP_OPENED"}),ae(t,a);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ve=function(){var e=Object(W.a)(H.a.mark((function e(t,n){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Topup success",n),t(K(n));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),he=function(){var e=Object(W.a)(H.a.mark((function e(t,n){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Topup closed",n),t(X(n));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ge=function(){var e=Object(W.a)(H.a.mark((function e(t,n){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Topup fail",n),t(Q(n));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),je=n(22),xe=n.n(je),Ne=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.dispatch,n=e.account;return r.a.createElement(xe.a,null,r.a.createElement(B.a,null,r.a.createElement(L.a,null,r.a.createElement(P.a,{className:"text-center"},r.a.createElement(F.a,{onClick:function(){we(t,n)}},"Topup")),r.a.createElement(P.a,{className:"text-center"},r.a.createElement(F.a,{onClick:function(){t($("Save"))}},"Savings")))))}}]),n}(a.Component);var Ae=Object(o.b)((function(e){return{account:w(e),topupOpen:j(e),topupError:x(e),topupSuccess:N(e),topupResponse:A(e)}}))(Ne),Ie=function(e,t){return t=""===t?0:t,e.utils.fromWei(t.toString(),"ether")},_e=function(e,t){return t=""===t?0:t,e.utils.toWei(t.toString(),"ether")};function Me(e){var t=e.dispatch,n=e.pageName;return r.a.createElement("p",null,r.a.createElement(F.a,{onClick:function(){t($(n))},size:"sm"},"Back"))}var Te=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.dispatch,n=e.apy,a=e.cEthBalance,u=e.balance,c=e.web3,o=e.underlyingBalance,i=Ie(c,o),s=r.a.createElement(P.a,{className:"text-center"},r.a.createElement(F.a,{onClick:function(){t($("Deposit"))}},"Deposit")),p=r.a.createElement(P.a,{className:"text-center"},r.a.createElement(F.a,{onClick:function(){t($("Withdraw"))}},"Withdraw"));return r.a.createElement(xe.a,null,r.a.createElement(B.a,null,r.a.createElement(L.a,null,r.a.createElement(P.a,{className:"text-center"},r.a.createElement(Me,{dispatch:t,pageName:"Account"}),r.a.createElement("p",null,"Savings Balance: ",parseFloat(i).toFixed(5),"~ ETH"),r.a.createElement("p",null,"Current Interest Rate: ",parseFloat(n).toFixed(2),"% APY"))),r.a.createElement(L.a,null,u>0?s:r.a.createElement(r.a.Fragment,null),a>0?p:r.a.createElement(r.a.Fragment,null))))}}]),n}(a.Component);var Ce=Object(o.b)((function(e){return{web3:O(e),balance:v(e),apy:I(e),cEthBalance:_(e),underlyingBalance:M(e)}}))(Te),Re=n(678),ke=n(682),Se=n(677);function De(e){var t=e.confirmationNumber,n=e.message;return r.a.createElement(xe.a,null,r.a.createElement(B.a,null,r.a.createElement(L.a,null,r.a.createElement(P.a,{className:"text-center"},r.a.createElement("p",null,n),r.a.createElement(Se.a,{animation:"border"}),r.a.createElement("p",null,"Confirmations: ",t)))))}var Be=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.dispatch,n=e.apy,a=e.cEthInstance,u=e.account,c=e.balance,o=e.web3,i=e.supplyValue,s=e.network,p=e.depositing,l=e.confirmationNumber,m=_e(o,i),y=Ie(o,c),d=function(e){return t(function(e){return{type:"SUPPLY_VALUE_SET",supplyValue:e}}(e.target.value))},b=function(){Ee(t,a,u,m,o,s)};return p?r.a.createElement(De,{message:"Depositing ".concat(i," ETH"),confirmationNumber:l}):r.a.createElement(xe.a,null,r.a.createElement(B.a,null,r.a.createElement(L.a,null,r.a.createElement(P.a,{className:"text-center"},r.a.createElement(Me,{dispatch:t,pageName:"Save"}),r.a.createElement(Re.a,{className:"mb-3"},r.a.createElement(Re.a.Prepend,null,r.a.createElement(Re.a.Text,{id:"basic-addon1"},"ETH")),r.a.createElement(ke.a,{onChange:d,type:"number",min:"0",max:y,step:"0.001","aria-describedby":"basic-addon1"})),r.a.createElement(F.a,{onClick:b},"Earn ",parseFloat(n).toFixed(2),"% APY")))))}}]),n}(a.Component);var Le=Object(o.b)((function(e){return{web3:O(e),account:w(e),balance:v(e),network:h(e),supplyValue:T(e),apy:I(e),cEthInstance:d(e),depositing:C(e),confirmationNumber:R(e)}}))(Be),Pe=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.dispatch,n=e.web3,a=e.underlyingBalance,u=e.withdrawing,c=e.confirmationNumber,o=e.redeemValue,i=e.cEthInstance,s=e.account,p=e.network,l=_e(n,o),m=Ie(n,a),y=function(e){return t(function(e){return{type:"REDEEM_VALUE_SET",redeemValue:e}}(e.target.value))},d=function(){Oe(t,i,s,l,n,p)};return u?r.a.createElement(De,{message:"Withdrawing ".concat(o," ETH"),confirmationNumber:c}):r.a.createElement(xe.a,null,r.a.createElement(B.a,null,r.a.createElement(L.a,null,r.a.createElement(P.a,{className:"text-center"},r.a.createElement(Me,{dispatch:t,pageName:"Save"}),r.a.createElement("p",null,"Savings Balance: ",parseFloat(m).toFixed(5)," ETH"),r.a.createElement(Re.a,{className:"mb-3"},r.a.createElement(Re.a.Prepend,null,r.a.createElement(Re.a.Text,{id:"basic-addon1"},"ETH")),r.a.createElement(ke.a,{onChange:y,type:"number",min:"0",max:m,step:"0.00001","aria-describedby":"basic-addon1"})),r.a.createElement(F.a,{onClick:d},"Withdraw Savings")))))}}]),n}(a.Component);var Fe=Object(o.b)((function(e){return{web3:O(e),underlyingBalance:M(e),withdrawing:S(e),confirmationNumber:D(e),redeemValue:k(e),cEthInstance:d(e),account:w(e),network:h(e)}}))(Pe),Ge=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){switch(this.props.page){case"Account":return r.a.createElement(Ae,null);case"Save":return r.a.createElement(Ce,null);case"Deposit":return r.a.createElement(Le,null);case"Withdraw":return r.a.createElement(Fe,null);default:return r.a.createElement(r.a.Fragment,null,"ERROR")}}}]),n}(a.Component);var He=Object(o.b)((function(e){return{page:g(e)}}))(Ge),We=n(681),Ue=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.dispatch,n=e.loggingIn,a=e.loggingInError,u=e.loggedIn,c=function(){var e=Object(W.a)(H.a.mark((function e(n){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,se(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return!0===u&&t($("Account")),r.a.createElement(xe.a,null,r.a.createElement(B.a,null,r.a.createElement(L.a,null,r.a.createElement(P.a,{className:"text-center"},r.a.createElement(F.a,{onClick:c},"Connect"),!1!==a&&!1===n?r.a.createElement(xe.a,null,r.a.createElement(We.a,{className:"my-2",variant:"danger"},"Connect to wallet failure: ",a.message)):r.a.createElement(r.a.Fragment,null)))))}}]),n}(a.Component);var Ve=Object(o.b)((function(e){return{loggingInError:E(e),loggingIn:b(e),loggedIn:f(e)}}))(Ue),Ye=n(680),qe=n(679),ze=n(86),Je=n(265),Ke=n.n(Je),Xe=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.page,t="app h-100";return"Account"!==e&&"Deposit"!==e&&"Withdraw"!==e||(t+=" blue"),r.a.createElement("div",{className:t},r.a.createElement(Ye.a,{fixed:"top"},r.a.createElement(xe.a,null,r.a.createElement(Ye.a.Brand,null,r.a.createElement(qe.a,{src:Ke.a,width:"35",height:"35",className:"d-inline-block align-top",alt:"logo"})," ",r.a.createElement("span",null,"Easy Ether")))),""===e?r.a.createElement(Ve,null):r.a.createElement(He,null),r.a.createElement("footer",null,r.a.createElement(B.a,null,r.a.createElement(L.a,null,r.a.createElement(P.a,{className:"text-center pt-4 pb-2"},r.a.createElement(xe.a,null,r.a.createElement("span",null,r.a.createElement("a",{href:"https://alexroan.co.uk"},"Alex Roan"))))),r.a.createElement(xe.a,null,r.a.createElement(L.a,null,r.a.createElement(P.a,{className:"text-center pb-2"},r.a.createElement(ze.SocialIcon,{className:"mx-1",url:"https://twitter.com/alexroan"}),r.a.createElement(ze.SocialIcon,{className:"mx-1",url:"https://github.com/alexroan"}),r.a.createElement(ze.SocialIcon,{className:"mx-1",url:"https://medium.com/@alexroan"}),r.a.createElement(ze.SocialIcon,{className:"mx-1",network:"email",url:"mailto:alex.roan@hotmail.com"})))))))}}]),n}(a.Component);var Qe=Object(o.b)((function(e){return{page:g(e)}}))(Xe),$e=n(49),Ze=n(266),et=n(9);var tt=new $e.c({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RAMP_LOADED":return Object(et.a)(Object(et.a)({},e),{},{ramp:t.ramp});case"CETH_LOADED":return Object(et.a)(Object(et.a)({},e),{},{cEthInstance:t.cEthInstance});default:return e}},account:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGING_IN":return Object(et.a)(Object(et.a)({},e),{},{loggingIn:!0,loggedIn:!1,error:!1});case"LOGGED_IN":return Object(et.a)(Object(et.a)({},e),{},{loggingIn:!1,loggedIn:!0,web3:t.web3});case"LOGIN_FAILED":return Object(et.a)(Object(et.a)({},e),{},{loggingIn:!1,loggedIn:!1,error:t.error});case"ACCOUNT_LOADED":return Object(et.a)(Object(et.a)({},e),{},{account:t.account});case"BALANCE_LOADED":return Object(et.a)(Object(et.a)({},e),{},{balance:t.balance});case"NETWORK_LOADED":return Object(et.a)(Object(et.a)({},e),{},{network:t.network});default:return e}},display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PAGE_SELECTED":return Object(et.a)(Object(et.a)({},e),{},{page:t.page});default:return e}},topup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RAMP_OPENED":return Object(et.a)(Object(et.a)({},e),{},{active:!0});case"RAMP_FAILED":return Object(et.a)(Object(et.a)({},e),{},{active:!1,error:!0,response:t.response});case"RAMP_CLOSED":return Object(et.a)(Object(et.a)({},e),{},{active:!1,response:t.response});case"RAMP_SUCCESS":return Object(et.a)(Object(et.a)({},e),{},{active:!1,success:!0,response:t.response});case"RAMP_RESET":return Object(et.a)(Object(et.a)({},e),{},{active:!1,error:!1,success:!1,response:null});default:return e}},save:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INTEREST_RATE_SET":return Object(et.a)(Object(et.a)({},e),{},{apy:t.apy});case"CETH_BALANCE_SET":return Object(et.a)(Object(et.a)({},e),{},{cEthBalance:t.balance});case"UNDERLYING_BALANCE_SET":return Object(et.a)(Object(et.a)({},e),{},{underlyingBalance:t.underlyingBalance});case"SUPPLY_VALUE_SET":return Object(et.a)(Object(et.a)({},e),{},{supplyValue:t.supplyValue});case"DEPOSITING_STARTED":return Object(et.a)(Object(et.a)({},e),{},{depositing:!0,depositConfirmationNumber:0});case"DEPOSITING_CONFIRMATION":return Object(et.a)(Object(et.a)({},e),{},{depositConfirmationNumber:t.number});case"DEPOSITING_FINISHED":return Object(et.a)(Object(et.a)({},e),{},{depositing:!1});case"REDEEM_VALUE_SET":return Object(et.a)(Object(et.a)({},e),{},{redeemValue:t.redeemValue});case"WITHDRAWING_STARTED":return Object(et.a)(Object(et.a)({},e),{},{withdrawing:!0,withdrawConfirmationNumber:0});case"WITHDRAWING_CONFIRMATION":return Object(et.a)(Object(et.a)({},e),{},{withdrawConfirmationNumber:t.number});case"WITHDRAWING_FINISHED":return Object(et.a)(Object(et.a)({},e),{},{withdrawing:!1});default:return e}}}),nt=Object(Ze.createLogger)(),at=[],rt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$e.d;var ut;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,{store:Object($e.e)(tt,ut,rt($e.a.apply(void 0,at.concat([nt]))))},r.a.createElement(Qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[267,1,2]]]);
//# sourceMappingURL=main.4b9b48bd.chunk.js.map