/*! For license information please see frontend-shortcut.js.LICENSE.txt */
(()=>{"use strict";var t={"./src/frontend/frontend-shared.ts":(t,e,a)=>{a.r(e),a.d(e,{PaypalPayments:()=>r});class r{static scrollTop(){jQuery("html, body").animate({scrollTop:0},300)}static setNotices(t){jQuery(".woocommerce-notices-wrapper:first").html(t)}static makeRequest(t,e){const a={async:!0,crossDomain:!0,url:r.replaceVars(paypal_brasil_settings.paypal_brasil_handler_url,{ACTION:t}),method:"POST",dataType:"json",contentType:"application/json; charset=utf-8",data:JSON.stringify(e)};return jQuery.ajax(a)}static showDefaultButton(){jQuery("#paypal-brasil-button-container .default-submit-button").show(),jQuery("#paypal-brasil-button-container .paypal-submit-button").hide()}static showPaypalButton(){jQuery("#paypal-brasil-button-container .default-submit-button").hide(),jQuery("#paypal-brasil-button-container .paypal-submit-button").show()}static isPaypalPaymentsSelected(){return!!jQuery("#payment_method_paypal-brasil-spb-gateway:checked").length}static triggerUpdateCheckout(){jQuery(document.body).trigger("update_checkout")}static triggerUpdateCart(){jQuery(document.body).trigger("wc_update_cart")}static submitForm(){jQuery("form.woocommerce-checkout, form#order_review").submit()}static replaceVars(t,e){let a=t;for(let t in e)e.hasOwnProperty(t)&&(a=a.replace(new RegExp("{"+t+"}","g"),e[t]));return a}}},"./src/frontend/frontend-shortcut/frontend-shortcut-api.ts":(t,e,a)=>{a.r(e),a.d(e,{paymentShortcut:()=>o});var r=a("./src/frontend/frontend-shared.ts");const o={miniCart:{create:()=>new Promise(((t,e)=>{r.PaypalPayments.makeRequest("shortcut",{nonce:paypal_brasil_settings.nonce}).done((function(e){t(e.data.ec)})).fail((function(t){e(t.responseJSON)}))})),approve:t=>{window.location=r.PaypalPayments.replaceVars(paypal_brasil_settings.checkout_review_page_url,{PAY_ID:t.paymentID,PAYER_ID:t.payerID})},error:t=>{t&&(r.PaypalPayments.setNotices(t.data.error_notice),r.PaypalPayments.scrollTop())},cancel:()=>{r.PaypalPayments.setNotices(paypal_brasil_shortcut_settings.cancel_message),r.PaypalPayments.scrollTop()}},cart:{create:()=>new Promise(((t,e)=>{r.PaypalPayments.makeRequest("shortcut-cart",{nonce:paypal_brasil_settings.nonce}).done((function(e){t(e.data.ec)})).fail((function(t){e(t.responseJSON)}))})),approve:t=>{window.location=r.PaypalPayments.replaceVars(paypal_brasil_settings.checkout_review_page_url,{PAY_ID:t.paymentID,PAYER_ID:t.payerID})},error:t=>{t&&(r.PaypalPayments.setNotices(t.data.error_notice),r.PaypalPayments.scrollTop())},cancel:()=>{r.PaypalPayments.triggerUpdateCart(),r.PaypalPayments.setNotices(paypal_brasil_shortcut_settings.cancel_message),r.PaypalPayments.scrollTop()}}}}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,a),n.exports}a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{a.r({});var t=a("./src/frontend/frontend-shared.ts"),e=a("./src/frontend/frontend-shortcut/frontend-shortcut-api.ts");class r extends t.PaypalPayments{constructor(){super(),jQuery("body").on("updated_shipping_method",this.renderCartButton).on("updated_wc_div",this.renderCartButton).on("updated_mini_cart",this.renderMiniCartButton),this.renderCartButton(),this.renderMiniCartButton()}renderMiniCartButton(){jQuery(".shortcut-button-mini-cart").each(((t,a)=>{paypal.Buttons({locale:"pt_BR",style:{size:"responsive",color:paypal_brasil_settings.style.color,shape:paypal_brasil_settings.style.format,label:"buynow"},createOrder:e.paymentShortcut.miniCart.create,onApprove:e.paymentShortcut.miniCart.approve,onError:e.paymentShortcut.miniCart.error,onCancel:e.paymentShortcut.miniCart.cancel}).render(a)}))}renderCartButton(){jQuery(".wc-proceed-to-checkout .shortcut-button").each(((t,a)=>{paypal.Buttons({locale:"pt_BR",style:{size:"responsive",color:paypal_brasil_settings.style.color,shape:paypal_brasil_settings.style.format,label:"buynow"},createOrder:e.paymentShortcut.cart.create,onApprove:e.paymentShortcut.cart.approve,onError:e.paymentShortcut.cart.error,onCancel:e.paymentShortcut.cart.cancel}).render(a)}))}}new r})(),a.r(r)})();
//# sourceMappingURL=frontend-shortcut.js.map