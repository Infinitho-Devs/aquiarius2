/* Scripts del bundle, generado el 2026-08-09 16:48
   No edites este archivo: edita Cerveceria.html y regeneralo con
     python minificar.py Cerveceria.html -s cerveceria-minificado.html
     python construir-hibrido.py
*/
/* Respaldo: si el HTML pegado en ShoWare todavia no trae esta
   funcion, se define aqui para que los bloques de abajo no se caigan.
   Si el HTML ya la trae, esta copia no se usa. */
if (typeof window.pacoUrlPagina !== 'function') {
  window.pacoUrlPagina = function () {
    var u = (window.location.href || '').toLowerCase();
    if (u.indexOf('rrprc=') !== -1) {
      u = u.replace('eventperformances.asp', 'referenciacompra.asp');
    }
    return u;
  };
}
(function(){
(function(){var enMarco=false;try{enMarco=(window.self!==window.top);}catch(e){enMarco=true;}
window.PACO_EN_FRAME=enMarco;if(enMarco&&document.documentElement){
 document.documentElement.className +=' paco-en-frame';}
})();
})();
;
(function(){
window.pacoUrlPagina=function(){
 var u=(window.location.href||'').toLowerCase();
 if(u.indexOf('127.0.0.1')!==-1||u.indexOf('localhost')!==-1){return 'https://festivalpresidente.tuboleta.com.do/eventperformances.asp?evt=952';}
 if(u.indexOf('rrprc=')!==-1){
 u=u.replace('eventperformances.asp','referenciacompra.asp');}
return u;};
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 var destino='https://\x66estival\x70residente.\x74uboleta.com.do/eventperformances.asp?evt=952';
 var host=(window.location.hostname||'').toLowerCase();
 if(host.indexOf('\x66estival\x70residente.\x74uboleta.com.do')===-1)return;
 var ruta=(window.location.pathname||'').replace(/\/+$/g,'').toLowerCase();
 var esRaiz=(ruta===''||ruta==='/default.asp'||ruta==='/index.asp');if(!esRaiz)return;window.location.replace(destino);})();
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 var faviconUrl="https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/imagenes/favicon.png";function enforceFavicon(){
 var existingIcons=document.querySelectorAll("link[rel*='icon'], link[rel='shortcut icon']");var hasOurIcon=false;existingIcons.forEach(function(icon){
 if(icon.href&&icon.href.indexOf('NMVVBfZB')!==-1){hasOurIcon=true;}else if(icon.parentNode){icon.parentNode.removeChild(icon);}
});if(!hasOurIcon){
['icon','shortcut icon','apple-touch-icon'].forEach(function(relType){
 var link=document.createElement('link');
 link.type='image/png';link.rel=relType;
 link.sizes='192x192';link.href=faviconUrl;if(document.head){document.head.appendChild(link);}
});}
}
enforceFavicon();setInterval(enforceFavicon,500);function enforceColorScheme(){if(!document.head)return;
 var meta=document.querySelector('meta[name="color-scheme"]');if(!meta){
 meta=document.createElement('meta');
 meta.name='color-scheme';document.head.appendChild(meta);}
 if(meta.content!=='only light')meta.content='only light';}
enforceColorScheme();setInterval(enforceColorScheme,1000);})();
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;var u=window.pacoUrlPagina();
 var isTarget=u.includes('eventperformances.asp')||u.includes('default.asp')||
 u.includes('basket.asp')||u.includes('orderticketsvenue.asp')||
 u.includes('ordertickets.asp')||u.endsWith('.com.do')||u.endsWith('.com.do/');if(isTarget){
 document.documentElement.classList.add('paco-theme-active');}
})();
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;var urlCheck=window.pacoUrlPagina();
 if(urlCheck.includes('eventperformances.asp')){
 document.documentElement.classList.add('paco-pg-evento');}else{
 document.documentElement.classList.add('paco-pg-otra');}
 if(urlCheck.includes('checkout_finished.asp')){
 document.documentElement.classList.add('paco-pg-final');}
 if(urlCheck.includes('orderticketsvenue.asp')||urlCheck.includes('ordertickets.asp')){
 document.documentElement.classList.add('paco-pg-mapa');}
 if(urlCheck.includes('patronnew.asp')){
 document.documentElement.classList.add('paco-pg-cuenta');}
 if(urlCheck.includes('myaccount.asp')){
 document.documentElement.classList.add('paco-pg-micuenta');}
 /* patronedit.asp ("Mi informacion") comparte formulario/markup con
    patronnew.asp -> reusa la misma clase paco-pg-cuenta para heredar
    toda la tarjeta/inputs/botones/datepicker ya resueltos ahi, y suma
    su propia clase para el bloque de bienvenida que patronnew.asp no
    tiene. */
 if(urlCheck.includes('patronedit.asp')){
 document.documentElement.classList.add('paco-pg-cuenta');
 document.documentElement.classList.add('paco-pg-patronedit');}
 if(urlCheck.includes('referenciacompra.asp')){
 document.documentElement.classList.add('paco-pg-referencia');}
 /* Aviso / validacion de checkout.asp (ej. "cantidad maxima de boletos").
    Sigue siendo "paco-standard-page" -> ShoWare queda envuelto en
    .paco-native-box, y el CSS de estilo2.css convierte esa caja blanca
    en la tarjeta oscura de marca con el aviso resaltado. checkout.asp NO
    coincide con checkout_streamlined.asp ni checkout_finished.asp. */
 if(urlCheck.includes('checkout.asp')){
 document.documentElement.classList.add('paco-pg-aviso');}
 /* Aviso de OrderTicketsQuickPick.asp ("no es posible hacer una
    Seleccion Rapida" por cantidad maxima / boletos ya en el carrito).
    Mismo patron de "pagina normal" que checkout.asp (queda envuelta
    en .paco-native-box), pero es una pagina distinta con su propio
    marcado, asi que usa su propia clase en vez de paco-pg-aviso. */
 if(urlCheck.includes('orderticketsquickpick.asp')){
 document.documentElement.classList.add('paco-pg-qpaviso');}
 var esEstandar=!(urlCheck.includes('eventperformances.asp')||
 urlCheck.includes('default.asp')||
 urlCheck.includes('basket.asp')||
 urlCheck.includes('orderticketsvenue.asp')||
 urlCheck.includes('ordertickets.asp')||
 urlCheck.endsWith('.com.do')||
 urlCheck.endsWith('.com.do/'));if(esEstandar){
 document.documentElement.classList.add('paco-standard-page');}
})();
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 var btn=document.getElementById('hamburgerBtn');
 var overlay=document.getElementById('mobileNavOverlay');
 var closeBtn=document.getElementById('closeOverlayBtn');function killShoWareNav(){
 var swNavs=document.querySelectorAll('.navigation.sw-nav, #swNavMobile, .sw-nav, .navigation.sw-nav.mobile-only, .showare-nav-wrap, .showare-nav-inner, .showare-nav');swNavs.forEach(function(el){if(el){
 el.style.setProperty('display','none','important');
 el.style.setProperty('visibility','hidden','important');
 el.style.setProperty('pointer-events','none','important');
 el.style.setProperty('opacity','0','important');}
});}
function forceBodyMount(){
 var menu=document.getElementById('menu__paco');
 var overlay=document.getElementById('mobileNavOverlay');if(menu&&menu.parentNode!==document.body){document.body.insertBefore(menu,document.body.firstChild);}
if(overlay&&overlay.parentNode!==document.body){document.body.appendChild(overlay);}
}
function restoreBodyMount(){}
function guardVisibility(){killShoWareNav();forceBodyMount();if(window.innerWidth<=1280){
 var menu=document.getElementById('menu__paco');
 var actions=document.querySelector('.paco-header-actions');
 var btnEl=document.getElementById('hamburgerBtn');
 var logoEl=document.querySelector('.paco-menu__header--logo');var targets=[menu,actions,btnEl,logoEl];targets.forEach(function(el){if(el){
 if(el.style.display==='none'||window.getComputedStyle(el).display==='none'){
 el.style.setProperty('display','flex','important');
 el.style.setProperty('visibility','visible','important');
 el.style.setProperty('opacity','1','important');}
}
});
 var parentContainers=document.querySelectorAll('header, #header, #Header, #HeaderWrap, .header, .header-wrap, .sw-header');parentContainers.forEach(function(p){
 if(p&&p.id!=='menu__paco'&&!p.classList.contains('paco-header')){
 if(p.style.display==='none'||window.getComputedStyle(p).display==='none'){
 p.style.setProperty('display','block','important');
 p.style.setProperty('visibility','visible','important');
 p.style.setProperty('opacity','1','important');}
}
});}else{restoreBodyMount();}
}
guardVisibility();
 window.addEventListener('resize',guardVisibility);
 window.addEventListener('load',guardVisibility);
 document.addEventListener('DOMContentLoaded',guardVisibility);setInterval(guardVisibility,250);
 var btn=document.getElementById('hamburgerBtn');
 var overlay=document.getElementById('mobileNavOverlay');if(!btn||!overlay)return;
 var links=overlay.querySelectorAll('a');function toggleMenu(e){if(e){e.preventDefault();e.stopPropagation();}
 var isOpen=overlay.classList.toggle('paco-abierto');
 btn.classList.toggle('paco-activo');
 btn.setAttribute('aria-expanded',isOpen?'true':'false');
 document.body.style.overflow=isOpen?'hidden':'';}
function closeMenu(e){
 overlay.classList.remove('paco-abierto');
 btn.classList.remove('paco-activo');
 btn.setAttribute('aria-expanded','false');
 document.body.style.overflow='';}
(function(){function removeSafeContainers(){var urlCheck=window.pacoUrlPagina();
 if(!urlCheck.includes('eventperformances.asp'))return;
 var googleElement=document.getElementById('google_translate_element');if(googleElement){
 googleElement.style.display='none';
 if(googleElement.parentElement&&googleElement.parentElement.tagName==='DIV'){
 googleElement.parentElement.style.display='none';}
}
 var links=document.querySelectorAll('a, span');for(var i=0;i<links.length;i++){var el=links[i];
 var text=el.textContent?el.textContent.trim().toLowerCase():'';
 if(text==='inicio'||text==='traducir'){
 el.style.display='none';var parent=el.parentElement;
 if(parent&&parent.tagName!=='BODY'&&parent.id!=='wrapper'){
 parent.style.display='none';}
}
}
 var utilityNav=document.getElementById('utilityNav')||document.querySelector('.utility-nav');
 if(utilityNav)utilityNav.style.display='none';
 var topMenu=document.getElementById('TopMenu')||document.getElementById('divTopMenu');
 if(topMenu)topMenu.style.display='none';}
removeSafeContainers();
 document.addEventListener('DOMContentLoaded',removeSafeContainers);
 window.addEventListener('load',removeSafeContainers);setTimeout(removeSafeContainers,1000);})();
 btn.addEventListener('click',toggleMenu);if(closeBtn){
 closeBtn.addEventListener('click',closeMenu);}
links.forEach(function(link){
 link.addEventListener('click',closeMenu);});
 document.addEventListener('keydown',function(e){
 if(e.key==='Escape'&&overlay.classList.contains('paco-abierto')){closeMenu();}
});})();
})();
;
(function(){
window.PACO_POPUP={mostrarPopup:true,
 titulo:'Descuento Visa',
 texto:'Aplica 15% de descuento pagando con tu tarjeta Visa.',pasos:[
'Escribe tu código en el carrito (o los primeros 6 dígitos de tu tarjeta).',
'Haz clic en "Habilitar descuento".',
'Verifica el descuento y continúa al pago.'
],
 porcentaje:'15% DE DESCUENTO',
 textoBoton:'Entendido',soloUnaVezPorSesion:false,ocultarSiYaAplicado:true,forzar:false
};window.PACO_DESCUENTO={
 textoDetector:'visa',
 textoTarjeta:'Descuento Visa',
 logo:'https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/PATROCINADORES/logo7.png',
 logoVisa:'',
 logoVisaClaro:'',
 tarjeta:''
};window.PACO_PROMO={mostrar:true,
 titulo:'Descuento exclusivo para tarjetas Visa',
 subtitulo:'Aplica 15% de descuento en tu compra. Solo tarjetas Visa emitidas en República Dominicana.',
 porcentaje:'15%',
 etiqueta:'PREVENTA EXCLUSIVA VISA',
 preventaTexto:'PREVENTA EXCLUSIVA <span class="paco-brsv-presale-accent">VISA</span>',
 preventaSubtexto:'Aplica solo con tarjetas Visa participantes.',
 campoTitulo:'Ingresa los primeros 6 dígitos de tu tarjeta participante',
 campoPlaceholder:'Código o primeros 6 dígitos de tu tarjeta',
 campoBoton:'Habilitar descuento',longitudMax:0,pasos:[
'Escribe tu código',
'Haz clic en Habilitar descuento',
'Continúa al pago'
],
 legal:'Descuento exclusivo para tarjetas emitidas en República Dominicana. Una vez finalizada la venta no se permiten reembolsos ni cambios. Si no visualizas el descuento, no realices el pago y contáctanos.',forzar:true,debug:false
};window.PACO_DEBUG_CARRITO=true;
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;function cleanupPage(){
 var footers=document.querySelectorAll('.fp-footer-section');if(footers.length>0){document.body.appendChild(footers[0]);for(var i=1;i<footers.length;i++){footers[i].remove();}
}
 var landingWrapper=document.querySelector('.paco-landing-wrapper');
 var pacoHeader=document.querySelector('#menu__paco');var urlCheck=window.pacoUrlPagina();
 var isCartPage=urlCheck.includes('basket.asp')||document.querySelector('form#basket')!==null;
 var isHomePage=urlCheck.includes('eventperformances.asp')||urlCheck.includes('default.asp');if(isCartPage){
 document.documentElement.classList.add('paco-pg-carrito');if(!window.pacoCartProgramado){window.pacoCartProgramado=true;setTimeout(renderCustomCart,500);setTimeout(pacoShowDiscountPopup,800);}
}
 if(!isHomePage&&urlCheck.includes('.asp')){if(landingWrapper&&!isCartPage)landingWrapper.remove();}else{if(landingWrapper&&pacoHeader&&landingWrapper.parentElement!==document.body){
 pacoHeader.insertAdjacentElement('afterend',landingWrapper);}
}
 var isStandardPage=!(urlCheck.includes('eventperformances.asp')||urlCheck.includes('default.asp')||urlCheck.includes('basket.asp')||urlCheck.includes('orderticketsvenue.asp')||urlCheck.includes('ordertickets.asp')||urlCheck.endsWith('.com.do')||urlCheck.endsWith('.com.do/'));if(isStandardPage){
 document.documentElement.classList.add('paco-standard-page');function pacoWrapElements(){
 var wrapper=document.getElementById('paco-native-box-wrapper');if(!wrapper){
 wrapper=document.createElement('div');
 wrapper.id='paco-native-box-wrapper';
 wrapper.className='paco-native-box';
 var refBox=document.querySelector('.fp-footer-section');if(refBox&&refBox.parentNode===document.body){document.body.insertBefore(wrapper,refBox);}else{document.body.appendChild(wrapper);}
}
 var ignoreIds=['menu__paco','paco-custom-cart-container','mobileNavOverlay','paco-native-box-wrapper','utilityNav','swNavMobile'];
 var ignoreClasses=['paco-landing-wrapper','fp-footer-section','fp-resp-bar','utility-nav','sw-top-bar','navigation','skiptranslate'];var children=Array.from(document.body.children);children.forEach(function(child){
 if(child.tagName==='SCRIPT'||child.tagName==='STYLE'||child.tagName==='LINK'||child.tagName==='NOSCRIPT'||child.tagName==='IFRAME')return;if(child.id&&ignoreIds.includes(child.id))return;var hasIgnoreClass=false;ignoreClasses.forEach(function(cls){if(child.classList&&child.classList.contains(cls))hasIgnoreClass=true;});if(hasIgnoreClass)return;wrapper.appendChild(child);});
 var navSelectors=['.utility-nav','#utilityNav','.sw-top-bar','#swNavMobile'];navSelectors.forEach(function(sel){var els=wrapper.querySelectorAll(sel);els.forEach(function(el){if(el.parentNode){document.body.insertBefore(el,wrapper);}
});});}
try{pacoWrapElements();}catch(e){}
if(!window.pacoObserverSetup){window.pacoObserverSetup=true;var observer=new MutationObserver(function(mutations){var needsWrap=false;for(var i=0;i<mutations.length;i++){for(var j=0;j<mutations[i].addedNodes.length;j++){var node=mutations[i].addedNodes[j];
 if(node.nodeType===1&&node.parentNode===document.body&&node.id!=='paco-native-box-wrapper'){needsWrap=true;}
}
}
if(needsWrap){try{pacoWrapElements();}catch(e){}}
});observer.observe(document.body,{childList:true});}
}
 if(!isHomePage&&urlCheck.includes('.asp')&&!isCartPage)return;function pacoEsc(txt){
 return String(txt==null?'':txt)
 .replace(/&/g,'&amp;')
 .replace(/</g,'&lt;')
 .replace(/>/g,'&gt;')
 .replace(/"/g,'&quot;')
 .replace(/'/g,'&#39;');}
function pacoCuponNativo(){return{
 input:document.getElementById('couponCode'),
 btn:document.querySelector('#addCouponCode .add-coupon')||document.querySelector('.add-coupon'),
 lista:document.getElementById('couponList')
};}
function pacoLog(){try{if(!(window.PACO_PROMO&&window.PACO_PROMO.debug))return;
 var args=['[PACO cupón]'].concat(Array.prototype.slice.call(arguments));console.log.apply(console,args);}catch(e){}
}
function pacoCuponesAplicados(){var codigos=[];
 var lista=document.getElementById('couponList');if(!lista)return codigos;
 var vals=lista.querySelectorAll('.coupon-value');for(var i=0;i<vals.length;i++){
 var txt=(vals[i].innerText||vals[i].textContent||'').trim();if(txt&&codigos.indexOf(txt)===-1)codigos.push(txt);}
return codigos;}
function pacoDetectores(){var cfgD=window.PACO_DESCUENTO||{};
 return String(cfgD.textoDetector||'visa')
.toLowerCase()
 .split(',')
.map(function(s){return s.trim();})
.filter(function(s){return s.length>0;});}
function pacoItemTieneDescuento(item){var dets=pacoDetectores();var i;
 var sel=item.querySelector('select.pricingcode-dropdown');if(sel){var opt=(sel.options&&sel.selectedIndex>=0)?sel.options[sel.selectedIndex]:null;
 var txtSel=((opt?(opt.text||opt.textContent||''):'')+' '+
(sel.value||'')).toLowerCase();for(i=0;i<dets.length;i++){if(txtSel.indexOf(dets[i])!==-1)return true;}
return false;}
 var txt=(item.innerText||item.textContent||'').toLowerCase();for(i=0;i<dets.length;i++){if(txt.indexOf(dets[i])!==-1)return true;}
return false;}
function pacoPrecioItem(item){function limpio(el){
 var t=el?(el.textContent||'').replace(/\s+/g,' ').trim():'';return t;}
 var tot=limpio(item.querySelector('.basket-cell.ticket-total'));if(tot)return tot;
 var sel=item.querySelector('select.pricingcode-dropdown');if(sel&&sel.options&&sel.selectedIndex>=0){var opt=sel.options[sel.selectedIndex];
 var m=(opt?(opt.text||opt.textContent||''):'').match(/\$\s*[\d.,]+/);
 if(m)return m[0].replace(/\s+/g,'');}
 var boleto=limpio(item.querySelector('.ticket-actual-price .fees-item'));if(boleto)return boleto;
 return limpio(item.querySelector('.pricing-code-price'));}
function pacoDescuentoInfo(){var nat=pacoCuponNativo();var codigos=pacoCuponesAplicados();
 var items=document.querySelectorAll('.basket-ticket-item');var itemConDesc=false;for(var i=0;i<items.length;i++){if(pacoItemTieneDescuento(items[i])){itemConDesc=true;break;}
}
var hayCampo=!!(nat.input&&nat.btn);return{campo:hayCampo,disponible:hayCampo||!!nat.lista||codigos.length>0||itemConDesc,aplicado:codigos.length>0||itemConDesc,codigos:codigos,hayItems:items.length>0
};}
function pacoNormalizarCodigo(valor){
 return String(valor==null?'':valor).trim();}
function pacoMensajeCupon(texto,tipo){
 var el=document.querySelector('.paco-brsv-msg');if(!el)return;
 el.className='paco-brsv-msg'+(tipo?' paco-'+ tipo:'');
 el.innerHTML=texto||'';}
function pacoAplicarCupon(){
 var input=document.getElementById('paco-coupon-input');
 var btn=document.getElementById('paco-coupon-btn');if(!input)return;var codigo=pacoNormalizarCodigo(input.value);window.pacoCouponDraft=codigo;if(!codigo){
 pacoMensajeCupon('Escribe el código de descuento.','err');input.focus();return;}
var nat=pacoCuponNativo();if(!nat.input||!nat.btn){
 pacoLog('esta página no tiene #couponCode / .add-coupon');
 pacoMensajeCupon('El descuento no está disponible en este momento. Contáctanos y te ayudamos.','err');return;}
 if(btn)btn.setAttribute('disabled','disabled');
 pacoMensajeCupon('Aplicando descuento…');nat.input.value=codigo;
 pacoLog('#couponCode = "'+ codigo +'" -> clic en .add-coupon');nat.btn.click();setTimeout(function(){
 var b=document.getElementById('paco-coupon-btn');
 if(b)b.removeAttribute('disabled');},6000);}
function pacoQuitarCupon(indice){
 var lista=document.getElementById('couponList');
 var vals=lista?lista.querySelectorAll('.coupon-value'):[];var val=vals[parseInt(indice,10)];
 var del=(val&&val.parentNode)?val.parentNode.querySelector('.delete-coupon'):null;if(!del)return;
 pacoMensajeCupon('Quitando el descuento…');del.click();}
function pacoShowDiscountPopup(){try{var cfg=window.PACO_POPUP||{};if(!cfg.mostrarPopup)return;if(window.pacoPopupYaMostrado)return;
 if(document.getElementById('paco-popup-overlay'))return;
 if(cfg.soloUnaVezPorSesion&&sessionStorage.getItem('pacoPopupVisto'))return;if(!cfg.forzar){var info=pacoDescuentoInfo();
 var soloSiDetectaPopup=(cfg.mostrarPopup==='auto');if(!info.campo){window.pacoPopupIntentos=(window.pacoPopupIntentos||0)+ 1;if(window.pacoPopupIntentos<=8)setTimeout(pacoShowDiscountPopup,700);return;}
if(cfg.ocultarSiYaAplicado!==false&&info.aplicado)return;if(!info.hayItems||(soloSiDetectaPopup&&!info.disponible)){window.pacoPopupIntentos=(window.pacoPopupIntentos||0)+ 1;if(window.pacoPopupIntentos<=8)setTimeout(pacoShowDiscountPopup,700);return;}
}
window.pacoPopupYaMostrado=true;
 var pasosHTML='';if(cfg.pasos&&cfg.pasos.length){
 pasosHTML='<ul class="paco-popup-steps">';for(var p=0;p<cfg.pasos.length;p++){
 pasosHTML +='<li><i>'+(p + 1)+'</i><span>'+ cfg.pasos[p]+'</span></li>';}
 pasosHTML +='</ul>';}
 var logo=(window.PACO_DESCUENTO&&window.PACO_DESCUENTO.logo)||'';
 var logoVisaPop=(window.PACO_DESCUENTO&&(window.PACO_DESCUENTO.logoVisaClaro||window.PACO_DESCUENTO.logoVisa))||'';
 var popupLogos=(logo||logoVisaPop)?('<div class="paco-popup-logos">'+
(logo?'<span class="paco-popup-logo paco-popup-logo--visa"><img src="'+ logo +'" alt="Visa"></span>':'')+
(logoVisaPop?'<span class="paco-popup-logo paco-popup-logo--visa"><img src="'+ logoVisaPop +'" alt="Visa"></span>':'')+
'</div>'):'';
 var overlay=document.createElement('div');
 overlay.id='paco-popup-overlay';
 overlay.innerHTML=''+
'<div class="paco-popup-card" role="dialog" aria-modal="true">'+
'<button class="paco-popup-close" aria-label="Cerrar" type="button">&times;</button>'+
 popupLogos +
(cfg.porcentaje?'<span class="paco-popup-off" style="background: #DFBA53 !important; color: #06251a !important;">'+ cfg.porcentaje +'</span>':'')+
'<h3>'+(cfg.titulo||'')+'</h3>'+
'<p>'+(cfg.texto||'')+'</p>'+
pasosHTML +
'<button class="paco-popup-btn" type="button">'+(cfg.textoBoton||'Entendido')+'</button>'+
'</div>';document.body.appendChild(overlay);function cerrarPopup(){
 overlay.classList.remove('paco-abierto');setTimeout(function(){if(overlay.parentNode)overlay.parentNode.removeChild(overlay);},300);
 try{if(cfg.soloUnaVezPorSesion)sessionStorage.setItem('pacoPopupVisto','1');}catch(e){}
}
 overlay.querySelector('.paco-popup-close').addEventListener('click',cerrarPopup);
 overlay.querySelector('.paco-popup-btn').addEventListener('click',cerrarPopup);
 overlay.addEventListener('click',function(e){if(e.target===overlay)cerrarPopup();});
 document.addEventListener('keydown',function escHandler(e){
 if(e.key==='Escape'){cerrarPopup();document.removeEventListener('keydown',escHandler);}
});
 requestAnimationFrame(function(){overlay.classList.add('paco-abierto');});}catch(e){}
}
function pacoDebug(){if(!window.PACO_DEBUG_CARRITO)return;try{if(!window.pacoT0)window.pacoT0=Date.now();var seg=((Date.now()- window.pacoT0)/1000).toFixed(2);
 var caja=document.querySelector('.paco-cart-summary');
 var alto=caja?Math.round(caja.getBoundingClientRect().height):'—';console.log.apply(console,[
'%c[carrito '+ seg +'s · alto '+ alto +'px]',
'color:#DFBA53;font-weight:bold'
].concat(Array.prototype.slice.call(arguments)));}catch(e){}
}
function pacoVigilarAlto(motivo){if(!window.PACO_DEBUG_CARRITO)return;try{
 var caja=document.querySelector('.paco-cart-summary');if(!caja)return;var alto=Math.round(caja.getBoundingClientRect().height);var antes=window.pacoAltoResumen;if(antes!==undefined&&Math.abs(alto - antes)>2){
 console.log('%c⚠ EL RESUMEN SALTÓ: '+ antes +'px → '+ alto +
'px  ('+(alto - antes>0?'+':'')+(alto - antes)+'px)  '+
(motivo||''),'color:#ff6b6b;font-weight:bold');}
window.pacoAltoResumen=alto;}catch(e){}
}
function pacoUsdDeVerdad(t){
 return!!t&&String(t).toUpperCase().indexOf('USD')!==-1;}
function pacoReabrirBloqueUSD(){window.pacoBloqueFijado=false;window.pacoRelojUSD=Date.now();window.pacoLecturaUSD=null;}
function pacoAbrirAyuda(){try{
 var previo=document.getElementById('paco-help-overlay');if(previo&&previo.parentNode)previo.parentNode.removeChild(previo);
 var helpIcon='<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
 var telIcon='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
 var mailIcon='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>';
 var waIcon='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>';
 var igIcon='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>';
 var fbIcon='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.22.19 2.22.19v2.44h-1.25c-1.23 0-1.62.77-1.62 1.56V12h2.77l-.44 3h-2.33v6.8C18.56 20.87 22 16.84 22 12z"/></svg>';
 var xIcon='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';
 var overlay=document.createElement('div');
 overlay.id='paco-help-overlay';overlay.innerHTML=
'<div class="paco-help-modal" role="dialog" aria-modal="true" aria-labelledby="paco-help-title">'+
'<button class="paco-help-close" type="button" aria-label="Cerrar">&times;</button>'+
'<div class="paco-help-icon">'+ helpIcon +'</div>'+
'<h3 id="paco-help-title">¿Necesitas ayuda?</h3>'+
'<p class="paco-help-sub">Estamos para ayudarte con tu compra. Contáctanos por cualquiera de estas vías:</p>'+
'<ul class="paco-help-list">'+
'<li><span class="paco-help-ico">'+ telIcon +'</span><span class="paco-help-txt"><strong>Teléfono</strong><a href="tel:+18297330404" style="display:block">829-733-0404</a><a href="tel:+18097322928" style="display:block">(809) 732-9298 Ext. 504 o 505</a></span></li>'+
'<li><span class="paco-help-ico">'+ mailIcon +'</span><span class="paco-help-txt"><strong>Correo</strong><a href="mailto:servicio@\x74uboleta.com.do">servicio@\x74uboleta.com.do</a></span></li>'+
'</ul>'+
'<a class="paco-help-wa" href="https://wa.me/18295208207" target="_blank" rel="noopener">'+ waIcon +'Contáctanos por WhatsApp</a>'+
'<p class="paco-help-note">Nuestro equipo de atención está disponible para ayudarte.</p>'+
'<div class="paco-help-social">'+
'<span class="paco-help-social-lbl">Síguenos</span>'+
'<div class="paco-help-social-row">'+
'<a href="https://www.instagram.com/\x74uboleta.com.do/" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">'+ igIcon +'</a>'+
'<a href="https://www.facebook.com/\x74uboleta.com.do" target="_blank" rel="noopener" aria-label="Facebook" title="Facebook">'+ fbIcon +'</a>'+
'<a href="https://twitter.com/\x74uboletacomdo" target="_blank" rel="noopener" aria-label="X / Twitter" title="X / Twitter">'+ xIcon +'</a>'+
'</div>'+
'</div>'+
'</div>';document.body.appendChild(overlay);function cerrar(){
 overlay.classList.remove('paco-abierto');setTimeout(function(){if(overlay.parentNode)overlay.parentNode.removeChild(overlay);},300);
 document.removeEventListener('keydown',escHandler);}
 function escHandler(e){if(e.key==='Escape')cerrar();}
 overlay.querySelector('.paco-help-close').addEventListener('click',cerrar);
 overlay.addEventListener('click',function(e){if(e.target===overlay)cerrar();});
 document.addEventListener('keydown',escHandler);
 requestAnimationFrame(function(){overlay.classList.add('paco-abierto');});
}catch(e){console.error('Error al abrir el modal de ayuda:',e);}
}
function renderCustomCart(){try{window.pacoNumRender=(window.pacoNumRender||0)+ 1;
 pacoDebug('▶ RE-DIBUJO COMPLETO del carrito nº'+ window.pacoNumRender);if(!window.pacoRelojUSD)window.pacoRelojUSD=Date.now();
 var customWrapper=document.getElementById('paco-custom-cart-container');if(!customWrapper){
 customWrapper=document.createElement('div');
 customWrapper.id='paco-custom-cart-container';
 customWrapper.className='paco-custom-cart';
 var pieRef=document.querySelector('.fp-footer-section');if(pieRef&&pieRef.parentNode===document.body){document.body.insertBefore(customWrapper,pieRef);}else{document.body.appendChild(customWrapper);}
}
 var itemsHTML='';
 var basket=document.getElementById('basket');
 var items=basket?basket.querySelectorAll('.basket-ticket-item'):[];window.pacoUltimoConteo=items.length;if(items.length===0){
 itemsHTML='<div class="paco-cart-empty">'+
'<h2>TU CARRITO ESTÁ VACÍO</h2>'+
'<p>Para agregar nuevos artículos a tu Carrito de Compras, haz click en &quot;Continuar&quot;.</p>'+
'<p class="paco-cart-empty-nota">Si tu Carrito de Compras ha sido inesperadamente vaciado al intentar comprar boletos, '+
'por favor, verifica las configuraciones de tu navegador para asegurar que las Cookies de sesión estén habilitadas.</p>'+
'<button type="button" class="paco-cart-checkout" id="paco-empty-continue">CONTINUAR</button>'+
'</div>';}else{items.forEach(function(item,itemIdx){
 var nameWrap=item.querySelector('.seatmap-name-wrap');
 var title=nameWrap?nameWrap.innerHTML.replace(/<a[^>]*>.*?<\/a>/gi,'').trim():'Boleta';
 var sectionWrap=item.querySelector('.seatmap-section-wrap');
 var section=sectionWrap?sectionWrap.innerText.trim():'';if(sectionWrap&&sectionWrap.nextSibling){
 section +=' '+ sectionWrap.nextSibling.textContent.trim();}
 if(!section)section='Asiento/Admisión General';
 var price=pacoPrecioItem(item).replace(/\$/g,'RD$ ');
 var removeBtn=item.querySelector('.item-remove')||item.querySelector('.mobile-remove');
 var removeId=removeBtn?removeBtn.getAttribute('data-removeid'):'';
 var expireSpan=item.querySelector('.reserved-time-wrap span[id^="expire-"]');
 var expireId=expireSpan?expireSpan.id:'';
 var expireTxt=expireSpan?expireSpan.innerText.trim():'';
 var discountHTML='';try{var cfgD=window.PACO_DESCUENTO||{};if(pacoItemTieneDescuento(item)){var dets=pacoDetectores();
 var nativeTxt='';
 var nodos=item.querySelectorAll('span, div, p, td, b, strong, em, label');for(var k=0;k<nodos.length&&!nativeTxt;k++){
 var nt=(nodos[k].innerText||'').trim();if(!nt||nodos[k].children.length!==0)continue;for(var d=0;d<dets.length;d++){if(nt.toLowerCase().indexOf(dets[d])!==-1){nativeTxt=nt;break;}
}
}
 var cardTxt=cfgD.textoTarjeta||nativeTxt||'Descuento Visa';
 var logoVisaTag=cfgD.logoVisa||'';
 var logosTag='';if(cfgD.logo||logoVisaTag){
 logosTag='<span class="paco-banre-tag-logos">'+
(cfgD.logo?'<span class="paco-banre-tag-logo paco-banre-tag-logo--marca"><img src="'+ cfgD.logo +'" alt="Visa"></span>':'')+
(logoVisaTag?'<span class="paco-banre-tag-logo paco-banre-tag-logo--visa"><img src="'+ logoVisaTag +'" alt="Visa"></span>':'')+
'</span>';}
 discountHTML='<div class="paco-banre-tag" style="background-color: rgba(20,52,203,0.18) !important; border-color: rgba(20,52,203,0.6) !important;">'+
 logosTag +
'<p class="paco-banre-tag-txt" style="color: #ffffff !important;">'+ pacoEsc(cardTxt)+'</p>'+
'<span class="paco-banre-tag-check" style="color: #4ade80 !important;">&#10003; APLICADO</span>'+
'</div>';}
}catch(e){}
 itemsHTML +=`
                                <div class="paco-cart-item">
                                    <div class="paco-cart-info">
                                        <div class="paco-cart-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                                        </div>
                                        <div class="paco-cart-details">
                                            <h4>${title}</h4>
                                            <p>${section}</p>
                                            ${expireId ? `<p class="paco-cart-expire"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="vertical-align:-1px;margin-right:4px;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>Expira en: <span class="paco-expire-val" data-expire-src="${expireId}">${expireTxt}</span></p>` : ''}
                                        </div>
                                    </div>
                                    <div class="paco-cart-price" data-price-idx="${itemIdx}">${price}</div>
                                    ${removeId ? `<button class="paco-cart-remove" data-target="${removeId}" title="Quitar">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                    </button>` : ''}
                                    ${discountHTML}
                                </div>
                            `;});
 var listHTML=`<div class="paco-cart-list">${itemsHTML}</div>`;
 var promoHTML='';try{var cfgP=window.PACO_PROMO||{};var infoD=pacoDescuentoInfo();window.pacoUltimoAplicado=infoD.aplicado;
 var soloSiDetecta=(cfgP.mostrar==='auto');
 // infoD.aplicado se agrega a ambas condiciones: ShoWare a veces retira
 // #couponCode/.add-coupon del DOM una vez el descuento ya fue aplicado,
 // lo que apagaba infoD.campo y hacía desaparecer toda la caja justo
 // cuando más útil es (confirmando que el descuento sí quedó aplicado).
 if(cfgP.mostrar&&(cfgP.forzar||infoD.campo||infoD.aplicado)&&
(!soloSiDetecta||cfgP.forzar||infoD.disponible||infoD.aplicado)){
 var logoBrsv=(window.PACO_DESCUENTO&&window.PACO_DESCUENTO.logo)||'';
 var logoVisaBrsv=(window.PACO_DESCUENTO&&window.PACO_DESCUENTO.logoVisa)||'';
 var tarjetaBrsv=(window.PACO_DESCUENTO&&window.PACO_DESCUENTO.tarjeta)||'';
 var marksBrsv='';if(logoBrsv||logoVisaBrsv){
 marksBrsv='<div class="paco-brsv-marks">'+
(logoBrsv?'<span class="paco-brsv-mark paco-brsv-mark--visa"><img src="'+ logoBrsv +'" alt="Visa"></span>':'')+
(logoVisaBrsv?'<span class="paco-brsv-mark paco-brsv-mark--visa"><img src="'+ logoVisaBrsv +'" alt="Visa"></span>':'')+
'</div>';}
 var codesHTML='';if(infoD.codigos.length){
 codesHTML='<div class="paco-brsv-codes">';for(var c=0;c<infoD.codigos.length;c++){
 codesHTML +='<span class="paco-brsv-code"><b>&#10003;</b> '+ pacoEsc(infoD.codigos[c])+
'<button type="button" class="paco-brsv-code-del" data-idx="'+ c +'" title="Quitar este código" aria-label="Quitar código">&times;</button></span>';}
 codesHTML +='</div>';}
 var pasosHTML='';if(cfgP.pasos&&cfgP.pasos.length){
 pasosHTML='<ul class="paco-brsv-steps">';for(var s=0;s<cfgP.pasos.length;s++){
 pasosHTML +='<li><i>'+(s + 1)+'</i><span>'+ cfgP.pasos[s]+'</span></li>';}
 pasosHTML +='</ul>';}
 var draft=window.pacoCouponDraft||'';
 var maxAttr=(parseInt(cfgP.longitudMax,10)>0)?' maxlength="'+ parseInt(cfgP.longitudMax,10)+'"':'';
 promoHTML='<div class="paco-brsv'+(infoD.aplicado?' paco-aplicado':'')+'">'+
'<div class="paco-brsv-inner" style="background-color: #01150b !important;">'+
'<div class="paco-brsv-head">'+
 marksBrsv +
'<div class="paco-brsv-headtxt">'+
'<span class="paco-brsv-eyebrow">'+(infoD.aplicado?'&#10003; DESCUENTO APLICADO':(cfgP.etiqueta||'DESCUENTO BANCARIO'))+'</span>'+
'<h3 style="color: #ffffff !important;">'+(cfgP.titulo||'')+'</h3>'+
(cfgP.subtitulo?'<p>'+ cfgP.subtitulo +'</p>':'')+
'</div>'+
(cfgP.porcentaje?'<div class="paco-brsv-off" style="background-color: #DFBA53 !important; background-image: radial-gradient(circle at 32% 28%, #f7e29c 0%, #DFBA53 55%, #b8923a 100%) !important; color: #06251a !important;"><strong>'+ cfgP.porcentaje +'</strong><small>OFF</small></div>':'')+
'</div>'+
'<div class="paco-brsv-body">'+
'<div class="paco-brsv-card">'+
(tarjetaBrsv?'<img class="paco-brsv-cardimg" src="'+ tarjetaBrsv +'" alt="Tarjeta Visa" loading="lazy">':'')+
(logoBrsv?'<span class="paco-brsv-card-visa"><img src="'+ logoBrsv +'" alt="Visa"></span>':'')+
'<span class="paco-brsv-dots"><b>'+(draft?pacoEsc(pacoNormalizarCodigo(draft).substring(0,4)):'&bull;&bull;&bull;&bull;')+'</b>&nbsp;&bull;&bull;&bull;&bull;&nbsp;&bull;&bull;&bull;&bull;</span>'+
'</div>'+
(cfgP.preventaTexto?'<div class="paco-brsv-presale"><span class="paco-brsv-presale-line"></span><p class="paco-brsv-presale-txt">'+ cfgP.preventaTexto +'</p>'+(cfgP.preventaSubtexto?'<p class="paco-brsv-presale-sub">'+ cfgP.preventaSubtexto +'</p>':'')+'</div>':'')+
'<div class="paco-brsv-form paco-brsv-form--desactivado">'+
'<label class="paco-brsv-label" for="paco-coupon-input">'+(cfgP.campoTitulo||'Ingresa los primeros 6 dígitos de tu tarjeta participante')+'</label>'+
'<div class="paco-brsv-inputrow">'+
'<input id="paco-coupon-input" class="paco-brsv-input" type="text" autocomplete="off" spellcheck="false" disabled="disabled" readonly="readonly" aria-disabled="true"'+ maxAttr +
' placeholder="'+ pacoEsc(cfgP.campoPlaceholder||'Tu código')+'" value="'+ pacoEsc(draft)+'" aria-label="Código de descuento (deshabilitado)" style="background: rgba(0,0,0,0.45) !important; color: #ffffff !important;">'+
'<button type="button" id="paco-coupon-btn" class="paco-brsv-btn" disabled="disabled" aria-disabled="true" style="background-color: #DFBA53 !important; color: #06251a !important;">'+(cfgP.campoBoton||'Habilitar descuento')+'</button>'+
'</div>'+
'<p class="paco-brsv-msg'+(infoD.aplicado?' paco-ok':'')+'">'+
(infoD.aplicado?'&#10003; Descuento aplicado a las boletas que participan.':'')+
'</p>'+
codesHTML +
pasosHTML +
'</div>'+
'</div>'+
(cfgP.legal?'<p class="paco-brsv-legal">'+ cfgP.legal +'</p>':'')+
'</div>'+
'</div>';}
}catch(e){}
 var totalEl=document.querySelector('#basketTotalCell');
 var total=totalEl?totalEl.innerText.trim().replace(/\$/g,'RD$ '):'';
 var usdIni=window.pacoUltimoUSD||'Cargando…';
 var tipoIni=window.pacoUltimoTipo||'Cargando…';
 var natDelivery=document.querySelector('.basket-delivery-options');
 var natFeeDesc=document.querySelector('.basket-ticket-fee-desc');if(natDelivery&&natDelivery.innerHTML.trim()){window.pacoUltimoDelivery=natDelivery.innerHTML;}
if(natFeeDesc&&natFeeDesc.innerHTML.trim()){window.pacoUltimoFee=natFeeDesc.innerHTML;}
 var deliveryIni=window.pacoUltimoDelivery||'';
 var feeIni=window.pacoUltimoFee||'';
 var feesCls=deliveryIni?'':' paco-cargando';
 var rightHTML=`
                            <div class="paco-cart-summary">
                                <div class="paco-cart-row paco-cart-total"><span>TOTAL:</span> <span id="paco-total-val">${total}</span></div>
                                <div class="paco-cart-row paco-cart-usd" style="font-size: 14px; color: #ccc; margin-top: 10px; display: flex; justify-content: space-between;">
                                    <span>Equivalente (USD):</span>
                                    <span id="paco-usd-val">${usdIni}</span>
                                </div>
                                <div class="paco-cart-row paco-cart-tipo" style="font-size: 14px; color: #ccc; display: flex; justify-content: space-between;">
                                    <span>Tipo de cambio:</span>
                                    <span id="paco-tipo-val">${tipoIni}</span>
                                </div>

                                <div class="paco-cart-fees${feesCls}" style="margin-top: 20px; font-size: 12px; color: #aaa; text-align: left; background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px;">
                                    <div id="paco-delivery-options">${deliveryIni}</div>
                                    <div id="paco-fee-desc" style="margin-top: 10px;">${feeIni}</div>
                                </div>

                                <button class="paco-cart-checkout" id="paco-checkout-trigger" style="margin-top: 20px;">
                                    PROCEDER AL PAGO
                                </button>
                                
                                <div class="paco-cart-actions" style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">
                                    <button class="paco-cart-action-btn" id="paco-continue-shopping">SEGUIR COMPRANDO</button>
                                    <button class="paco-cart-action-btn" id="paco-empty-cart">VACIAR CARRITO</button>
                                    <button class="paco-cart-action-btn" id="paco-help-btn">AYUDA</button>
                                </div>
                            </div>
                            <div class="paco-cart-contact">
                                <h2>¿Necesitas ayuda?</h2>
                                <p><a href="tel:+18297330404"><strong>Tel:</strong> 829-733-0404</a></p>
                                <p><a href="tel:+18097322928">(809) 732-9298 Ext. 504 o 505</a></p>
                                <p><a href="mailto:servicio@\x74uboleta.com.do"><strong>Correo:</strong> servicio@\x74uboleta.com.do</a></p>
                                <a class="paco-cart-whatsapp" href="https://wa.me/18295208207" target="_blank" rel="noopener">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                                    Contáctanos por WhatsApp
                                </a>
                                <p class="paco-cart-note">Nuestro equipo de atención está disponible para ayudarte.</p>
                            </div>
                        `;
 itemsHTML=`
                            ${promoHTML}
                            <div class="paco-cart-grid">
                                <div class="paco-cart-left">${listHTML}</div>
                                <div class="paco-cart-right">${rightHTML}</div>
                            </div>
                        `;}
 customWrapper.innerHTML=`
                        <h2 class="paco-cart-title">RESUMEN DE COMPRA</h2>
                        ${itemsHTML}
                    `;
 var couponInput=customWrapper.querySelector('#paco-coupon-input');
 var couponBtn=customWrapper.querySelector('#paco-coupon-btn');if(couponInput){
 couponInput.addEventListener('input',function(){window.pacoCouponDraft=couponInput.value;
 var dots=customWrapper.querySelector('.paco-brsv-dots b');if(dots){var vista=pacoNormalizarCodigo(couponInput.value).substring(0,4);
 dots.innerHTML=vista?pacoEsc(vista):'&bull;&bull;&bull;&bull;';}
});
 couponInput.addEventListener('keydown',function(e){
 if(e.key==='Enter'||e.keyCode===13){e.preventDefault();pacoAplicarCupon();}
});}
if(couponBtn){
 couponBtn.addEventListener('click',function(e){e.preventDefault();pacoAplicarCupon();});}
 customWrapper.querySelectorAll('.paco-brsv-code-del').forEach(function(delBtn){
 delBtn.addEventListener('click',function(e){e.preventDefault();
 pacoQuitarCupon(delBtn.getAttribute('data-idx'));});});if(basket){
 var removeBtns=customWrapper.querySelectorAll('.paco-cart-remove');removeBtns.forEach(function(btn){
 btn.addEventListener('click',function(e){e.preventDefault();
 var tid=btn.getAttribute('data-target');
 var origBtn=basket.querySelector('.item-remove[data-removeid="'+ tid +'"]')||basket.querySelector('.mobile-remove[data-removeid="'+ tid +'"]');if(origBtn)origBtn.click();setTimeout(renderCustomCart,1000);});});}
 var checkoutTrigger=customWrapper.querySelector('#paco-checkout-trigger');if(checkoutTrigger){
 checkoutTrigger.addEventListener('click',function(e){e.preventDefault();
 var origCheckout=document.querySelector('#checkout-button');if(origCheckout)origCheckout.click();});}
if(window.pacoSyncInterval)clearInterval(window.pacoSyncInterval);window.pacoSyncInterval=setInterval(function(){
 pacoVigilarAlto('(sin acción nuestra: lo movió algo externo)');try{
 var natDel=document.querySelector('.basket-delivery-options');
 var natFee2=document.querySelector('.basket-ticket-fee-desc');
 var elDelivery=document.getElementById('paco-delivery-options');
 var elFeeDesc=document.getElementById('paco-fee-desc');if(natDel&&natDel.innerHTML.trim()){window.pacoUltimoDelivery=natDel.innerHTML;if(elDelivery&&elDelivery.innerHTML!==window.pacoUltimoDelivery){elDelivery.innerHTML=window.pacoUltimoDelivery;
 var cajaF=document.querySelector('.paco-cart-fees');
 if(cajaF)cajaF.classList.remove('paco-cargando');
 pacoDebug('se escribió ENTREGA (métodos de entrega)');
 pacoVigilarAlto('(escritura de entrega)');}
}
if(natFee2&&natFee2.innerHTML.trim()){window.pacoUltimoFee=natFee2.innerHTML;if(elFeeDesc&&elFeeDesc.innerHTML!==window.pacoUltimoFee){elFeeDesc.innerHTML=window.pacoUltimoFee;
 pacoDebug('se escribió CARGOS (descripción de cargos)');
 pacoVigilarAlto('(escritura de cargos)');}
}
}catch(e){}
if(!window.pacoBloqueFijado){
 var oldUsd=document.getElementById('basketTotalCellUSD');
 var oldTipo=document.getElementById('basketTipoCambio');
 var esperaUSD=(typeof window.PACO_USD_ESPERA==='number')
?window.PACO_USD_ESPERA:1000;var transcurrido=Date.now()-(window.pacoRelojUSD||0);
 var vUsd=oldUsd?(oldUsd.innerText||'').trim():'';
 var vTipo=oldTipo?(oldTipo.innerText||'').trim():'';var seRindio=transcurrido>=(esperaUSD + 6000);var hayTodo=pacoUsdDeVerdad(vUsd)&&pacoUsdDeVerdad(vTipo);
 var lectura=vUsd +'|'+ vTipo;var estable=hayTodo&&window.pacoLecturaUSD===lectura;window.pacoLecturaUSD=lectura;if(transcurrido>=esperaUSD&&(estable||seRindio)){
 var elUsd=document.getElementById('paco-usd-val');
 var elTipo=document.getElementById('paco-tipo-val');
 window.pacoUltimoUSD=pacoUsdDeVerdad(vUsd)?vUsd:'—';
 window.pacoUltimoTipo=pacoUsdDeVerdad(vTipo)?vTipo:'—';if(elUsd)elUsd.innerHTML=window.pacoUltimoUSD;if(elTipo)elTipo.innerHTML=window.pacoUltimoTipo;window.pacoBloqueFijado=true;
 pacoDebug('✔ USD escrito UNA sola vez: "'+ window.pacoUltimoUSD +
'" / tipo: "'+ window.pacoUltimoTipo +'"'+
(estable?'':'  (se agotó la espera, el dato no se asentó)'));
 pacoVigilarAlto('(escritura del dólar)');}
}
 var expireEls=document.querySelectorAll('.paco-expire-val');expireEls.forEach(function(ev){
 var src=document.getElementById(ev.getAttribute('data-expire-src'));if(src){var t=src.innerText.trim();if(t&&ev.innerText!==t)ev.innerText=t;
 if(t==='expirado')ev.classList.add('paco-expired');}
});try{
 var natMsg=document.getElementById('coupon-notify')||document.getElementById('error-messages');
 var natTxt=natMsg?(natMsg.innerText||'').trim():'';if(natTxt){
 var esError=(String(natMsg.className||'')).indexOf('error')!==-1;
 pacoMensajeCupon(pacoEsc(natTxt),esError?'err':'ok');}
}catch(e){}
try{
 var natBasket=document.getElementById('basket');
 var natItems=natBasket?natBasket.querySelectorAll('.basket-ticket-item'):[];
 var precios=document.querySelectorAll('.paco-cart-price[data-price-idx]');
 var focoEnCupon=document.activeElement&&document.activeElement.id==='paco-coupon-input';var huboCambio=false;if(window.pacoUltimoConteo!==undefined&&
natItems.length!==window.pacoUltimoConteo){if(window.pacoConteoRaro!==natItems.length){window.pacoConteoRaro=natItems.length;
 pacoDebug('conteo distinto ('+ window.pacoUltimoConteo +
' → '+ natItems.length +'); NO se re-dibuja todavía, '+
'esperando que se confirme en la siguiente lectura');return;}
if(!focoEnCupon){
 pacoDebug('conteo confirmado ('+ window.pacoUltimoConteo +
' → '+ natItems.length +'), re-dibujando el carrito');pacoReabrirBloqueUSD();renderCustomCart();
 pacoVigilarAlto('(re-dibujo por cambio de boletas)');}
return;}
window.pacoConteoRaro=undefined;for(var pi2=0;pi2<precios.length;pi2++){
 var natItem=natItems[parseInt(precios[pi2].getAttribute('data-price-idx'),10)];if(!natItem)continue;
 var natPrecio=pacoPrecioItem(natItem).replace(/\$/g,'RD$ ');if(!natPrecio)continue;if(precios[pi2].innerText.trim()!==natPrecio.trim()){precios[pi2].innerText=natPrecio;huboCambio=true;}
}
 var natTotal=document.getElementById('basketTotalCell');
 var pacoTotal=document.getElementById('paco-total-val');if(natTotal&&pacoTotal){
 var tNuevo=natTotal.innerText.trim().replace(/\$/g,'RD$ ');if(pacoTotal.innerText.trim()!==tNuevo.trim()){pacoTotal.innerText=tNuevo;huboCambio=true;}
}
if(huboCambio){var aplicadoAhora=false;try{aplicadoAhora=pacoDescuentoInfo().aplicado;}catch(e){}
var cambioDescuento=(window.pacoUltimoAplicado!==undefined&&
window.pacoUltimoAplicado!==aplicadoAhora);window.pacoUltimoAplicado=aplicadoAhora;pacoReabrirBloqueUSD();if(cambioDescuento&&!focoEnCupon){
 pacoDebug('el descuento cambió de estado, re-dibujando');renderCustomCart();
 pacoVigilarAlto('(re-dibujo por cambio de descuento)');}else{
 pacoDebug('precios actualizados EN SITIO (sin re-dibujar; '+
'el resumen no debería moverse)');
 pacoVigilarAlto('(retoque de precios en sitio)');}
}
}catch(e){}
},500);
 var btnContinueShopping=customWrapper.querySelector('#paco-continue-shopping');if(btnContinueShopping){
 btnContinueShopping.addEventListener('click',function(e){e.preventDefault();
 var origBtns=document.querySelectorAll('button.sw-button-muted');var clicked=false;for(var i=0;i<origBtns.length;i++){
 if(origBtns[i].textContent.toLowerCase().includes('seguir comprando')){origBtns[i].click();clicked=true;break;}
}
if(!clicked){window.history.back();}
});}
 var btnEmptyContinue=customWrapper.querySelector('#paco-empty-continue');if(btnEmptyContinue){
 btnEmptyContinue.addEventListener('click',function(e){e.preventDefault();
 var nativos=document.querySelectorAll('#basket button, #basket a.button, button.sw-button-muted, a.sw-button-muted');for(var i=0;i<nativos.length;i++){
 var t=(nativos[i].textContent||'').toLowerCase();
 if(t.indexOf('continuar')!==-1||t.indexOf('seguir comprando')!==-1){nativos[i].click();return;}
}
 window.location.href='https://\x66estival\x70residente.\x74uboleta.com.do/eventperformances.asp?evt=952';});}
 var btnEmptyCart=customWrapper.querySelector('#paco-empty-cart');if(btnEmptyCart){
 btnEmptyCart.addEventListener('click',function(e){e.preventDefault();
 var origEmpty=document.getElementById('delete-basket');if(origEmpty)origEmpty.click();});}
 var btnHelp=customWrapper.querySelector('#paco-help-btn');if(btnHelp){
 btnHelp.addEventListener('click',function(e){e.preventDefault();pacoAbrirAyuda();});}
}catch(err){
 console.error("Error en renderCustomCart:",err);}
}
 var merchSect=document.getElementById('merch');if(merchSect&&merchSect.parentNode!==document.body){document.body.appendChild(merchSect);}
 var footerSect=document.querySelector('.fp-footer-section');if(footerSect&&footerSect.parentNode!==document.body){document.body.appendChild(footerSect);}
if(!isCartPage){var showareIds=[
'EventInformationWrap','eventCalendarLabelAndOptions',
'swPerformanceList','footerWrap','bottomNav','footer-container'
];showareIds.forEach(function(id){var el=document.getElementById(id);if(el){if(el.parentElement){
 el.parentElement.style.minHeight='0';
 el.parentElement.style.paddingBottom='0';}
el.remove();}
});
 var showareClasses=['.sw-datepicker','.performance-list-calendar','.sw-performance-list','.performance-list','.site-footer','.footer-wrap'];showareClasses.forEach(function(cls){var els=document.querySelectorAll(cls);els.forEach(function(el){if(el.parentElement){
 el.parentElement.style.minHeight='0';
 el.parentElement.style.paddingBottom='0';}
el.remove();});});}
 var wrappers=document.querySelectorAll('body, html, form, #wrapper, .content-wrap, #content, .container, .main-content');wrappers.forEach(function(w){
 w.style.minHeight='0px';
 w.style.paddingBottom='0px';
 w.style.marginBottom='0px';});
 var merchLinks=document.querySelectorAll('a[href*="#merch"]');merchLinks.forEach(function(link){if(!link.dataset.scrollBound){
 link.dataset.scrollBound="true";
 link.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();
 var overlay=document.getElementById('mobileNavOverlay');
 var hamburgerBtn=document.getElementById('hamburgerBtn');
 if(overlay&&overlay.classList.contains('paco-abierto')){
 overlay.classList.remove('paco-abierto');if(hamburgerBtn){
 hamburgerBtn.classList.remove('paco-activo');
 hamburgerBtn.setAttribute('aria-expanded','false');}
 document.body.style.overflow='';}
 var merchSection=document.getElementById('merch');if(merchSection){
 merchSection.scrollIntoView({behavior:'smooth',block:'start'});}
},true);}
});}
 document.addEventListener('DOMContentLoaded',cleanupPage);
 window.addEventListener('load',cleanupPage);setTimeout(cleanupPage,100);setTimeout(cleanupPage,500);setTimeout(cleanupPage,1500);setTimeout(cleanupPage,2500);setTimeout(cleanupPage,4000);})();
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 if(window.location.href.toLowerCase().indexOf('login.asp')!==-1){
 document.documentElement.classList.add('paco-pg-login');}
})();
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 if(window.location.href.toLowerCase().indexOf('patron_forgotpassword.asp')!==-1){
 document.documentElement.classList.add('paco-pg-recuperar');}
})();
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 if(window.location.href.toLowerCase().indexOf('changepassword.asp')!==-1){
 document.documentElement.classList.add('paco-pg-clave');}
})();
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;function detectar(){
 var hay=document.querySelector('.access-restricted-wrap')||
(document.body&&document.body.classList&&
 document.body.classList.contains('accessdenied'))||
(window.location.href.toLowerCase().indexOf('accessdenied.asp')!==-1);if(hay){
 document.documentElement.classList.add('paco-pg-bloqueo');return true;}
return false;}
if(!detectar()){
 document.addEventListener('DOMContentLoaded',detectar);
 window.addEventListener('load',detectar);var n=0,t=setInterval(function(){if(detectar()||++n>20)clearInterval(t);},300);}
})();
})();
;
(function(){
(function(){
 var css=`
    /* La clase se duplica (.paco-pg-bloqueo dos veces) para ganarle en
       especificidad a la regla móvil de .paco-pg-otra, que en accessdenied.asp
       convive en el mismo <html> y pone background-image:none — por eso el
       fondo malla desaparecía SOLO en móvil (en escritorio esa regla otra
       está tras un @media y no aplica). */
    html.paco-pg-bloqueo.paco-pg-bloqueo,
    html.paco-pg-bloqueo.paco-pg-bloqueo body {
        background-color: #001a10 !important;
        background-image: url('https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/imagenes/malla-original-2171x4096.png') !important;
        background-repeat: repeat !important;
        background-position: center top !important;
        margin: 0 !important;
    }

    html.paco-pg-bloqueo .showare-nav-wrap,
    html.paco-pg-bloqueo .showare-nav,
    html.paco-pg-bloqueo .control-wrap,
    html.paco-pg-bloqueo .ads-control,
    html.paco-pg-bloqueo #utilityNav,
    html.paco-pg-bloqueo .utility-nav,
    html.paco-pg-bloqueo #TopMenu,
    html.paco-pg-bloqueo #divTopMenu,
    html.paco-pg-bloqueo #google_translate_element,
    html.paco-pg-bloqueo .goog-te-gadget,
    html.paco-pg-bloqueo .skiptranslate {
        display: none !important;
    }

    /* La línea blanca de arriba viene del contenedor nativo
       .content-inner.center-div.site-width (tiene border-top). Se quita
       todo borde/fondo/línea de esos contenedores y sus pseudo-elementos. */
    html.paco-pg-bloqueo .content-wrap,
    html.paco-pg-bloqueo .content-inner,
    html.paco-pg-bloqueo .center-div,
    html.paco-pg-bloqueo .site-width,
    html.paco-pg-bloqueo .main-container,
    html.paco-pg-bloqueo .main-constrain-width,
    html.paco-pg-bloqueo #page-wrap,
    html.paco-pg-bloqueo .head-wrap,
    html.paco-pg-bloqueo .foot-wrap,
    html.paco-pg-bloqueo #EventInformationWrap {
        background: transparent !important;
        background-color: transparent !important;
        background-image: none !important;
        border: none !important;
        border-top: none !important;
        box-shadow: none !important;
        outline: none !important;
    }

    html.paco-pg-bloqueo .content-inner::before,
    html.paco-pg-bloqueo .content-inner::after,
    html.paco-pg-bloqueo .center-div::before,
    html.paco-pg-bloqueo .center-div::after,
    html.paco-pg-bloqueo .site-width::before,
    html.paco-pg-bloqueo .site-width::after {
        content: none !important;
        border: none !important;
        background: none !important;
    }

    html.paco-pg-bloqueo .access-restricted-wrap hr,
    html.paco-pg-bloqueo .access-denied-wrap hr {
        display: none !important;
    }

    /* La línea blanca de arriba es un border-top (a veces box-shadow) que
       ShoWare pinta en el contenedor nativo .content-inner.center-div.site-width
       y/o en .main-container, con una regla de varias clases y !important.
       Para ganarle SIEMPRE se duplica la clase de <html> (.paco-pg-bloqueo
       dos veces): sube la especificidad de forma barata sin depender de
       cuántas clases use la regla nativa. */
    html.paco-pg-bloqueo.paco-pg-bloqueo .content-wrap,
    html.paco-pg-bloqueo.paco-pg-bloqueo .content-inner,
    html.paco-pg-bloqueo.paco-pg-bloqueo .content-inner.center-div.site-width,
    html.paco-pg-bloqueo.paco-pg-bloqueo .content-inner.center-div,
    html.paco-pg-bloqueo.paco-pg-bloqueo .content-inner.site-width,
    html.paco-pg-bloqueo.paco-pg-bloqueo .center-div.site-width,
    html.paco-pg-bloqueo.paco-pg-bloqueo .main-container,
    html.paco-pg-bloqueo.paco-pg-bloqueo .main-container.main-container {
        border: 0 !important;
        border-top: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
    }

    /* Y por si la línea viniera de un pseudo-elemento o de un <hr> nativo
       entre el encabezado y el recuadro, se apagan también. */
    html.paco-pg-bloqueo .content-wrap::before,
    html.paco-pg-bloqueo .content-wrap::after,
    html.paco-pg-bloqueo .main-container::before,
    html.paco-pg-bloqueo .main-container::after,
    html.paco-pg-bloqueo .access-denied-wrap::before,
    html.paco-pg-bloqueo .access-denied-wrap::after {
        content: none !important;
        border: none !important;
        background: none !important;
    }

    html.paco-pg-bloqueo hr {
        display: none !important;
    }

    /* Si cae en accessdenied.asp (página estándar) el contenido viene
       envuelto en la caja blanca; la volvemos transparente para que se
       vean nuestras tarjetas. */
    html.paco-pg-bloqueo .paco-native-box {
        background: transparent !important;
        background-color: transparent !important;
        background-image: none !important;
        border: none !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        width: 100% !important;
        max-width: 620px !important;
        margin: 26px auto 80px !important;
        padding: 0 22px !important;
        min-height: 0 !important;
    }

    html.paco-pg-bloqueo .paco-native-box::after,
    html.paco-pg-bloqueo .paco-native-box::before {
        content: none !important;
    }

    /* ── Chip con los datos del evento (va encima del recuadro) ── */
    html.paco-pg-bloqueo .access-denied-wrap {
        box-sizing: border-box !important;
        width: 100% !important;
        max-width: 560px !important;
        margin: 30px auto 14px !important;
        padding: 0 !important;
    }

    html.paco-pg-bloqueo .access-denied-wrap .info-box {
        position: relative !important;
        box-sizing: border-box !important;
        margin: 0 !important;
        padding: 15px 20px 15px 56px !important;
        border: 1px solid rgba(223, 186, 83, 0.28) !important;
        border-radius: 16px !important;
        background-color: #01150B !important;
        background-image:
            radial-gradient(130% 160% at 0% 0%, rgba(223, 186, 83, 0.13) 0%, rgba(223, 186, 83, 0) 55%),
            linear-gradient(160deg, #06251a 0%, #01150B 72%) !important;
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4) !important;
        color: #cfd6d1 !important;
        font-family: "Montserrat", sans-serif !important;
        font-size: 13px !important;
        line-height: 1.6 !important;
        text-align: left !important;
    }

    /* Icono de calendario a la izquierda del chip */
    html.paco-pg-bloqueo .access-denied-wrap .info-box::before {
        content: "" !important;
        position: absolute !important;
        top: 15px !important;
        left: 16px !important;
        width: 28px !important;
        height: 28px !important;
        border-radius: 9px !important;
        border: 1px solid rgba(223, 186, 83, 0.45) !important;
        background-color: rgba(223, 186, 83, 0.12) !important;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23DFBA53' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2'/%3E%3Cline x1='16' y1='2' x2='16' y2='6'/%3E%3Cline x1='8' y1='2' x2='8' y2='6'/%3E%3Cline x1='3' y1='10' x2='21' y2='10'/%3E%3C/svg%3E") !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
        background-size: 16px 16px !important;
    }

    html.paco-pg-bloqueo .access-denied-wrap .info-box .heading-text {
        display: block !important;
        margin: 0 0 6px !important;
        color: #ffffff !important;
        font-family: "OVERTURE", "Montserrat", sans-serif !important;
        font-size: 15px !important;
        font-weight: 800 !important;
        letter-spacing: 0.4px !important;
        line-height: 1.35 !important;
        text-shadow: none !important;
    }

    html.paco-pg-bloqueo .access-denied-wrap .info-box a {
        color: #DFBA53 !important;
        text-decoration: none !important;
        font-weight: 700 !important;
        transition: color 0.2s ease !important;
    }

    html.paco-pg-bloqueo .access-denied-wrap .info-box a:hover {
        color: #ffffff !important;
        text-decoration: underline !important;
    }

    /* ── Tarjeta principal: formulario de contraseña ── */
    html.paco-pg-bloqueo .access-restricted-wrap {
        position: relative !important;
        box-sizing: border-box !important;
        width: 100% !important;
        max-width: 560px !important;
        margin: 0 auto 70px !important;
        padding: 42px 36px 34px !important;
        border: none !important;
        border-radius: 22px !important;
        background-color: #01150B !important;
        background-image:
            radial-gradient(120% 85% at 50% -15%, rgba(223, 186, 83, 0.16) 0%, rgba(223, 186, 83, 0) 58%),
            linear-gradient(165deg, #06251a 0%, #01150B 66%, #010a06 100%) !important;
        box-shadow:
            0 26px 64px rgba(0, 0, 0, 0.6),
            0 0 40px rgba(223, 186, 83, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
        color: #dfe4e0 !important;
        font-family: "Montserrat", sans-serif !important;
        overflow: hidden !important;
        text-align: center !important;
    }

    /* @property deja animar el ángulo del gradiente cónico. Donde no se
       soporte (Firefox viejo), el borde queda dorado tenue fijo: degrada bien. */
    @property --paco-bloqueo-ang {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
    }

    /* Borde dorado EN MOVIMIENTO: un degradado cónico que gira, recortado
       a la orilla con la máscara. Base dorada tenue + un brillo que viaja. */
    html.paco-pg-bloqueo .access-restricted-wrap::after {
        content: "" !important;
        position: absolute !important;
        inset: 0 !important;
        border-radius: inherit !important;
        padding: 1.6px !important;
        background: conic-gradient(from var(--paco-bloqueo-ang),
            rgba(223, 186, 83, 0.22) 0deg,
            rgba(223, 186, 83, 0.22) 70deg,
            #f7e29c 118deg,
            #DFBA53 140deg,
            rgba(223, 186, 83, 0.22) 188deg,
            rgba(223, 186, 83, 0.22) 360deg) !important;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0) !important;
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0) !important;
        -webkit-mask-composite: xor !important;
        mask-composite: exclude !important;
        pointer-events: none !important;
        animation: pacoBloqueoBorde 4.5s linear infinite !important;
    }

    @keyframes pacoBloqueoBorde {
        to {
            --paco-bloqueo-ang: 360deg;
        }
    }

    html.paco-pg-bloqueo .access-restricted-wrap form {
        position: relative !important;
        z-index: 1 !important;
        margin: 0 !important;
        padding: 0 !important;
    }

    /* Eyebrow de marca encima del encabezado */
    html.paco-pg-bloqueo .access-restricted-wrap form::before {
        content: "\x46estival \x50residente" !important;
        display: block !important;
        margin: 0 0 14px !important;
        color: rgba(255, 255, 255, 0.45) !important;
        font-family: "Montserrat", sans-serif !important;
        font-size: 10px !important;
        font-weight: 800 !important;
        letter-spacing: 3.4px !important;
        text-transform: uppercase !important;
    }

    /* Encabezado "Acceso restringido" con candado dorado */
    html.paco-pg-bloqueo .accessdenied-headingtext {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        gap: 14px !important;
        margin: 0 0 6px !important;
        color: #DFBA53 !important;
        font-family: "OVERTURE", "Montserrat", sans-serif !important;
        font-size: 22px !important;
        font-weight: 800 !important;
        letter-spacing: 2px !important;
        line-height: 1.2 !important;
        text-transform: uppercase !important;
        text-shadow: none !important;
    }

    /* extractIcons() reconvierte el <img> de alerta en <svg>/<i>, así que
       se oculta el icono nativo en cualquier forma (queda solo el candado). */
    html.paco-pg-bloqueo .accessdenied-headingtext img,
    html.paco-pg-bloqueo .accessdenied-headingtext svg,
    html.paco-pg-bloqueo .accessdenied-headingtext i,
    html.paco-pg-bloqueo .accessdenied-headingtext .sw-icon,
    html.paco-pg-bloqueo .accessdenied-headingtext .sw-icon-alert {
        display: none !important;
    }

    html.paco-pg-bloqueo .accessdenied-headingtext::before {
        content: "" !important;
        display: block !important;
        width: 66px !important;
        height: 66px !important;
        border-radius: 50% !important;
        border: none !important;
        background-color: #DFBA53 !important;
        background-image:
            url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2306251a' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='11' width='18' height='11' rx='2' ry='2'/%3E%3Cpath d='M7 11V7a5 5 0 0 1 10 0v4'/%3E%3C/svg%3E"),
            radial-gradient(circle at 32% 26%, #f7e29c 0%, #DFBA53 56%, #b8923a 100%) !important;
        background-repeat: no-repeat, no-repeat !important;
        background-position: center, center !important;
        background-size: 30px 30px, cover !important;
        box-shadow:
            0 0 0 8px rgba(223, 186, 83, 0.1),
            0 12px 28px rgba(0, 0, 0, 0.45),
            inset 0 1px 0 rgba(255, 255, 255, 0.5) !important;
        animation: pacoBloqueoLock 2.8s ease-in-out infinite !important;
    }

    @keyframes pacoBloqueoLock {
        0%, 100% {
            box-shadow:
                0 0 0 8px rgba(223, 186, 83, 0.1),
                0 12px 28px rgba(0, 0, 0, 0.45),
                inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }
        50% {
            box-shadow:
                0 0 0 15px rgba(223, 186, 83, 0),
                0 14px 32px rgba(223, 186, 83, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }
    }

    /* Divisor corto bajo el título */
    html.paco-pg-bloqueo .accessdenied-headingtext::after {
        content: "" !important;
        width: 54px !important;
        height: 3px !important;
        border-radius: 3px !important;
        background: linear-gradient(90deg, rgba(223, 186, 83, 0) 0%, #DFBA53 50%, rgba(223, 186, 83, 0) 100%) !important;
    }

    @media (prefers-reduced-motion: reduce) {
        html.paco-pg-bloqueo .access-restricted-wrap::after,
        html.paco-pg-bloqueo .accessdenied-headingtext::before {
            animation: none !important;
        }
    }

    html.paco-pg-bloqueo .password-warning-description {
        margin: 8px auto 22px !important;
        max-width: 420px !important;
        color: #a9b3ad !important;
        font-family: "Montserrat", sans-serif !important;
        font-size: 13px !important;
        line-height: 1.6 !important;
    }

    html.paco-pg-bloqueo .password-warning-description b {
        color: #ffffff !important;
        font-weight: 700 !important;
    }

    /* Campo de contraseña */
    html.paco-pg-bloqueo .access-password-form-wrap {
        display: flex !important;
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 8px !important;
        max-width: 360px !important;
        margin: 0 auto 4px !important;
        text-align: left !important;
    }

    html.paco-pg-bloqueo .labelfor-textinput {
        color: #DFBA53 !important;
        font-family: "Montserrat", sans-serif !important;
        font-size: 10.5px !important;
        font-weight: 800 !important;
        letter-spacing: 1.2px !important;
        text-transform: uppercase !important;
    }

    html.paco-pg-bloqueo .access-restricted-wrap input.showare-text,
    html.paco-pg-bloqueo .access-restricted-wrap input[type="text"],
    html.paco-pg-bloqueo .access-restricted-wrap input[type="password"] {
        display: block !important;
        width: 100% !important;
        max-width: 360px !important;
        height: 48px !important;
        padding: 0 16px !important;
        margin: 0 auto !important;
        border-radius: 11px !important;
        border: 1.5px solid rgba(255, 255, 255, 0.16) !important;
        background: #ffffff !important;
        background-image: none !important;
        color: #01150B !important;
        font-family: "Montserrat", sans-serif !important;
        font-size: 15px !important;
        font-weight: 600 !important;
        letter-spacing: 1px !important;
        text-align: center !important;
        box-shadow: none !important;
        outline: none !important;
        box-sizing: border-box !important;
        -webkit-appearance: none;
        appearance: none;
        transition: border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease !important;
    }

    html.paco-pg-bloqueo .access-restricted-wrap input.showare-text::placeholder {
        color: rgba(1, 21, 11, 0.4) !important;
    }

    html.paco-pg-bloqueo .access-restricted-wrap input.showare-text:focus,
    html.paco-pg-bloqueo .access-restricted-wrap input[type="text"]:focus {
        border-color: #DFBA53 !important;
        background: #ffffff !important;
        box-shadow: 0 0 0 3.5px rgba(223, 186, 83, 0.16) !important;
    }

    /* Variante "código de acceso" (BIN de tarjeta, sin clases propias en
       ShoWare): el texto, el input y el botón no traían separación nativa
       y salían pegados. Se añade el mismo aire que ya tiene la variante
       de contraseña. */
    html.paco-pg-bloqueo .access-code-message {
        max-width: 420px !important;
        margin: 8px auto 22px !important;
        color: #a9b3ad !important;
        font-family: "Montserrat", sans-serif !important;
        font-size: 13px !important;
        line-height: 1.6 !important;
    }

    html.paco-pg-bloqueo .accesscode-text {
        display: block !important;
        margin: 0 0 10px !important;
    }

    html.paco-pg-bloqueo .access-restricted-wrap input.accesscodefield {
        margin: 0 auto 18px !important;
    }

    /* El label espaciador transparente del layout nativo sobra aquí */
    html.paco-pg-bloqueo .restrict-button-wrap .no-mobile {
        display: none !important;
    }

    html.paco-pg-bloqueo .restrict-button-wrap {
        margin-top: 22px !important;
        text-align: center !important;
    }

    /* Botón "Continuar" */
    html.paco-pg-bloqueo .access-restricted-wrap input.restrict-button-continue,
    html.paco-pg-bloqueo .access-restricted-wrap .sw-button-primary,
    html.paco-pg-bloqueo .access-restricted-wrap input[type="submit"] {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 100% !important;
        max-width: 360px !important;
        min-height: 52px !important;
        padding: 15px 30px !important;
        margin: 0 auto !important;
        border: none !important;
        border-radius: 12px !important;
        background-color: #1ebe5d !important;
        background-image: linear-gradient(180deg, #29d46d 0%, #1ebe5d 100%) !important;
        color: #ffffff !important;
        font-family: "OVERTURE", "Montserrat", sans-serif !important;
        font-size: 13px !important;
        font-weight: 800 !important;
        letter-spacing: 1.6px !important;
        line-height: 1.2 !important;
        text-transform: uppercase !important;
        text-align: center !important;
        cursor: pointer !important;
        box-sizing: border-box !important;
        box-shadow: 0 8px 22px rgba(30, 190, 93, 0.28) !important;
        -webkit-appearance: none;
        appearance: none;
        transition: transform 0.2s ease, box-shadow 0.2s ease, background-image 0.2s ease !important;
    }

    html.paco-pg-bloqueo .access-restricted-wrap input.restrict-button-continue:hover,
    html.paco-pg-bloqueo .access-restricted-wrap .sw-button-primary:hover,
    html.paco-pg-bloqueo .access-restricted-wrap input[type="submit"]:hover {
        background-image: linear-gradient(180deg, #35e07c 0%, #25d366 100%) !important;
        box-shadow: 0 0 26px rgba(30, 190, 93, 0.5) !important;
        transform: translateY(-2px) !important;
    }

    html.paco-pg-bloqueo .access-restricted-wrap input.restrict-button-continue:active,
    html.paco-pg-bloqueo .access-restricted-wrap input[type="submit"]:active {
        transform: translateY(0) !important;
    }

    /* Mensajes de error nativos (contraseña incorrecta) */
    html.paco-pg-bloqueo .access-restricted-wrap .error-message,
    html.paco-pg-bloqueo .access-restricted-wrap .sw-error {
        display: block !important;
        box-sizing: border-box !important;
        max-width: 420px !important;
        margin: 16px auto 0 !important;
        padding: 10px 13px !important;
        border: 1px solid rgba(255, 77, 77, 0.35) !important;
        border-left: 3px solid #ff4d4d !important;
        border-radius: 9px !important;
        background: rgba(255, 77, 77, 0.08) !important;
        color: #ff9b9b !important;
        font-size: 12.5px !important;
        line-height: 1.45 !important;
    }

    @media (max-width: 760px) {
        html.paco-pg-bloqueo .access-restricted-wrap {
            padding: 28px 20px 26px !important;
            border-radius: 16px !important;
        }

        html.paco-pg-bloqueo .accessdenied-headingtext {
            font-size: 19px !important;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        html.paco-pg-bloqueo .access-restricted-wrap input.restrict-button-continue,
        html.paco-pg-bloqueo .access-restricted-wrap input.showare-text {
            transition: none !important;
        }
    }
`;
function poner(){var destino=document.head||document.documentElement;if(!destino)return false;
 if(document.getElementById('paco-bloqueo-css'))return true;
 var st=document.createElement('style');
 st.id='paco-bloqueo-css';st.textContent=css;destino.appendChild(st);return true;}
if(!poner()){
 document.addEventListener('DOMContentLoaded',poner);}
})();
})();
;
/* ====== checkout_ticketinfo.asp — "Informacion Adicional" ======
   Detecta la pagina de datos de boleto y le aplica el tema del
   festival (verde/dorado) igual que el resto del sitio. La pagina
   ya es "standard-page" (se envuelve en .paco-native-box); aqui solo
   la marcamos como paco-pg-ticketinfo y le inyectamos su CSS. */
(function(){
(function(){if(window.PACO_EN_FRAME)return;function detectar(){
 var esUrl=(window.location.href.toLowerCase().indexOf('checkout_ticketinfo.asp')!==-1);
 var esBody=!!(document.body&&document.body.classList&&document.body.classList.contains('checkout_ticketinfo'));
 if(esUrl||esBody){document.documentElement.classList.add('paco-pg-ticketinfo');return true;}
 return false;}
if(!detectar()){
 document.addEventListener('DOMContentLoaded',detectar);
 window.addEventListener('load',detectar);var n=0,t=setInterval(function(){if(detectar()||++n>20)clearInterval(t);},300);}
})();
})();
;
(function(){
(function(){
 var css=`
    /* Fondo malla + verde. Se duplica la clase para ganarle en
       especificidad a la regla de .paco-pg-otra (que pinta blanco). */
    html.paco-pg-ticketinfo.paco-pg-ticketinfo,
    html.paco-pg-ticketinfo.paco-pg-ticketinfo body {
        background-color: #001a10 !important;
        background-image: url('https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/imagenes/malla-original-2171x4096.png') !important;
        background-repeat: repeat !important;
        background-position: center top !important;
        margin: 0 !important;
        padding-top: 0 !important;
    }

    /* Ruido nativo fuera: buscador de fechas, info, anuncios, traductor,
       navegacion de ShoWare, corazon de favoritos, etc. */
    html.paco-pg-ticketinfo .control-wrap,
    html.paco-pg-ticketinfo .ads-control,
    html.paco-pg-ticketinfo #calendarWidget,
    html.paco-pg-ticketinfo #infoWidget,
    html.paco-pg-ticketinfo .reporting-link,
    html.paco-pg-ticketinfo #swFavoritelistWrap,
    html.paco-pg-ticketinfo #epImage2,
    html.paco-pg-ticketinfo .showare-nav-wrap,
    html.paco-pg-ticketinfo .showare-nav,
    html.paco-pg-ticketinfo #utilityNav,
    html.paco-pg-ticketinfo .utility-nav,
    html.paco-pg-ticketinfo #TopMenu,
    html.paco-pg-ticketinfo #divTopMenu,
    html.paco-pg-ticketinfo #google_translate_element,
    html.paco-pg-ticketinfo .goog-te-gadget,
    html.paco-pg-ticketinfo .goog-te-banner-frame,
    html.paco-pg-ticketinfo .skiptranslate {
        display: none !important;
    }

    /* Contenedores nativos: transparentes y a todo el ancho de la tarjeta. */
    html.paco-pg-ticketinfo #page-wrap,
    html.paco-pg-ticketinfo .head-wrap,
    html.paco-pg-ticketinfo .foot-wrap,
    html.paco-pg-ticketinfo #EventInformationWrap,
    html.paco-pg-ticketinfo .content-wrap,
    html.paco-pg-ticketinfo .content-inner,
    html.paco-pg-ticketinfo .center-div,
    html.paco-pg-ticketinfo .site-width,
    html.paco-pg-ticketinfo .main-container {
        background: transparent !important;
        background-color: transparent !important;
        background-image: none !important;
        border: none !important;
        border-top: none !important;
        box-shadow: none !important;
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        float: none !important;
    }

    html.paco-pg-ticketinfo .content-inner::before,
    html.paco-pg-ticketinfo .content-inner::after,
    html.paco-pg-ticketinfo .main-container::before,
    html.paco-pg-ticketinfo .main-container::after {
        content: none !important;
        border: none !important;
        background: none !important;
    }

    /* Tarjeta principal (recuadro dorado sobre verde). */
    html.paco-pg-ticketinfo .paco-native-box {
        background-color: #01150B !important;
        background-image:
            radial-gradient(120% 150% at 100% 0%, rgba(223, 186, 83, 0.13) 0%, rgba(223, 186, 83, 0) 60%),
            linear-gradient(165deg, #06251a 0%, #01150B 66%, #010a06 100%) !important;
        width: 94% !important;
        max-width: 680px !important;
        margin: 46px auto 80px !important;
        padding: 40px 40px 34px !important;
        border: none !important;
        border-radius: 20px !important;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5) !important;
        min-height: 0 !important;
        color: #dfe4e0 !important;
        font-family: "Montserrat", sans-serif !important;
        position: relative !important;
        overflow: visible !important;
    }

    /* Filo dorado del recuadro. */
    html.paco-pg-ticketinfo .paco-native-box::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 1.5px;
        background: linear-gradient(135deg, rgba(223, 186, 83, 1) 0%, rgba(223, 186, 83, 0) 42%, rgba(223, 186, 83, 0) 58%, rgba(223, 186, 83, 1) 100%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
        z-index: 1;
    }

    html.paco-pg-ticketinfo .main-container,
    html.paco-pg-ticketinfo .heading-text.sub-head-text,
    html.paco-pg-ticketinfo .theme-container-wrap {
        position: relative !important;
        z-index: 2 !important;
    }

    /* Encabezado "Informacion Adicional". */
    html.paco-pg-ticketinfo .heading-text.sub-head-text {
        display: block !important;
        margin: 0 !important;
        padding: 0 !important;
        color: #DFBA53 !important;
        font-family: "OVERTURE", "Montserrat", sans-serif !important;
        font-size: 23px !important;
        font-weight: 800 !important;
        letter-spacing: 2.2px !important;
        line-height: 1.15 !important;
        text-transform: uppercase !important;
        text-shadow: none !important;
        -webkit-text-stroke: 0 !important;
        background: transparent !important;
        float: none !important;
    }

    html.paco-pg-ticketinfo .heading-text.sub-head-text::before {
        content: "Festival Presidente";
        display: block;
        margin: 0 0 9px;
        color: rgba(255, 255, 255, 0.45);
        font-family: "Montserrat", sans-serif;
        font-size: 9.5px;
        font-weight: 800;
        letter-spacing: 3px;
        line-height: 1;
        text-transform: uppercase;
    }

    html.paco-pg-ticketinfo .heading-text.sub-head-text::after {
        content: "";
        display: block;
        height: 1px;
        width: 100%;
        margin: 16px 0 4px;
        background: linear-gradient(90deg, rgba(223, 186, 83, 0.55) 0%, rgba(223, 186, 83, 0) 100%);
    }

    /* El <hr> nativo bajo el encabezado sobra (ya hay linea dorada). */
    html.paco-pg-ticketinfo .main-container hr {
        display: none !important;
    }

    /* Contenedor del formulario (quita el width:50% en linea). */
    html.paco-pg-ticketinfo .theme-container-wrap {
        width: 100% !important;
        max-width: 100% !important;
        margin: 18px 0 0 !important;
        padding: 0 !important;
    }

    html.paco-pg-ticketinfo .theme-container-wrap form {
        margin: 0 !important;
    }

    html.paco-pg-ticketinfo .theme-description {
        display: none !important;
    }

    /* Nota "* indica un campo requerido" (venia en rojo en linea). */
    html.paco-pg-ticketinfo form > span[style*="color:red"] {
        display: block !important;
        margin: 0 0 18px !important;
        color: #a9b3ad !important;
        font-family: "Montserrat", sans-serif !important;
        font-size: 11px !important;
        font-weight: 600 !important;
        letter-spacing: 0.3px !important;
    }

    /* Cabecera del evento. */
    html.paco-pg-ticketinfo .ticket-info-performance {
        box-sizing: border-box !important;
        margin: 0 0 20px !important;
        padding: 15px 18px !important;
        border: 1px solid rgba(223, 186, 83, 0.28) !important;
        border-radius: 14px !important;
        background: rgba(0, 0, 0, 0.28) !important;
        color: #dfe4e0 !important;
        font-family: "Montserrat", sans-serif !important;
        font-size: 12.5px !important;
        line-height: 1.5 !important;
        letter-spacing: 0.3px !important;
    }

    html.paco-pg-ticketinfo .ticket-info-performance h5 {
        margin: 0 0 3px !important;
        color: #ffffff !important;
        font-family: "OVERTURE", "Montserrat", sans-serif !important;
        font-size: 16px !important;
        font-weight: 800 !important;
        letter-spacing: 0.6px !important;
        text-transform: uppercase !important;
        text-shadow: none !important;
    }

    /* Cabecera por asiento (Seccion / Tipo de boleto). */
    html.paco-pg-ticketinfo .theme-ticket-info-notes {
        display: block !important;
        box-sizing: border-box !important;
        margin: 22px 0 0 !important;
        padding: 12px 16px !important;
        border: 1px solid rgba(223, 186, 83, 0.22) !important;
        border-bottom: none !important;
        border-radius: 13px 13px 0 0 !important;
        background: linear-gradient(180deg, rgba(223, 186, 83, 0.10) 0%, rgba(223, 186, 83, 0.03) 100%) !important;
    }

    html.paco-pg-ticketinfo .theme-ticket-info-section {
        display: block !important;
        color: #DFBA53 !important;
        font-family: "OVERTURE", "Montserrat", sans-serif !important;
        font-size: 12.5px !important;
        font-weight: 800 !important;
        letter-spacing: 1px !important;
        text-transform: uppercase !important;
        line-height: 1.4 !important;
    }

    html.paco-pg-ticketinfo .theme-ticket-info-type {
        display: block !important;
        margin-top: 3px !important;
        color: #a9b3ad !important;
        font-family: "Montserrat", sans-serif !important;
        font-size: 11.5px !important;
        font-weight: 600 !important;
        letter-spacing: 0.3px !important;
    }

    /* Panel con los campos del asiento (va pegado a la cabecera de arriba). */
    html.paco-pg-ticketinfo .theme-custom-field-set {
        box-sizing: border-box !important;
        margin: 0 0 4px !important;
        padding: 18px 18px 4px !important;
        border: 1px solid rgba(255, 255, 255, 0.10) !important;
        border-top: 1px solid rgba(223, 186, 83, 0.22) !important;
        border-radius: 0 0 13px 13px !important;
        background: rgba(0, 0, 0, 0.24) !important;
    }

    /* Etiquetas de cada campo. */
    html.paco-pg-ticketinfo .theme-label.custom-field-label,
    html.paco-pg-ticketinfo .theme-custom-field-set label.theme-label {
        display: block !important;
        margin: 0 0 7px !important;
        padding: 0 !important;
        color: #DFBA53 !important;
        font-family: "Montserrat", sans-serif !important;
        font-size: 10.5px !important;
        font-weight: 800 !important;
        letter-spacing: 1.1px !important;
        line-height: 1.5 !important;
        text-transform: uppercase !important;
        text-shadow: none !important;
    }

    /* Asterisco de requerido: se pinta en la etiqueta y se oculta el <em>
       nativo (quedaba suelto en su propia linea bajo cada campo). */
    html.paco-pg-ticketinfo .theme-label.custom-field-label::after {
        content: " *";
        color: #DFBA53 !important;
        font-weight: 800 !important;
    }

    html.paco-pg-ticketinfo .theme-custom-field-set em {
        display: none !important;
    }

    /* Inputs y selects. */
    html.paco-pg-ticketinfo .theme-select,
    html.paco-pg-ticketinfo input.showare-select,
    html.paco-pg-ticketinfo select.showare-select {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        height: 48px !important;
        padding: 0 15px !important;
        margin: 0 0 15px !important;
        border-radius: 11px !important;
        border: 1.5px solid rgba(255, 255, 255, 0.16) !important;
        background-color: rgba(0, 0, 0, 0.42) !important;
        background-image: none !important;
        color: #ffffff !important;
        font-family: "Montserrat", sans-serif !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        line-height: 48px !important;
        text-align: left !important;
        box-shadow: none !important;
        outline: none !important;
        box-sizing: border-box !important;
        -webkit-appearance: none;
        appearance: none;
        transition: border-color .25s ease, box-shadow .25s ease, background-color .25s ease !important;
    }

    html.paco-pg-ticketinfo select.theme-select,
    html.paco-pg-ticketinfo select.showare-select {
        padding: 0 38px 0 15px !important;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23DFBA53' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E") !important;
        background-repeat: no-repeat !important;
        background-position: right 14px center !important;
        background-size: 16px 16px !important;
        cursor: pointer !important;
    }

    html.paco-pg-ticketinfo .theme-select:focus,
    html.paco-pg-ticketinfo input.showare-select:focus,
    html.paco-pg-ticketinfo select.showare-select:focus {
        border-color: #DFBA53 !important;
        background-color: rgba(0, 0, 0, 0.6) !important;
        box-shadow: 0 0 0 3.5px rgba(223, 186, 83, 0.16) !important;
    }

    html.paco-pg-ticketinfo .theme-select::placeholder {
        color: rgba(255, 255, 255, 0.3) !important;
        font-weight: 500 !important;
    }

    /* Las opciones del desplegable se ven en fondo del sistema: texto oscuro. */
    html.paco-pg-ticketinfo select.theme-select option,
    html.paco-pg-ticketinfo select.showare-select option {
        color: #01150B !important;
        background: #ffffff !important;
    }

    html.paco-pg-ticketinfo input.theme-select:-webkit-autofill,
    html.paco-pg-ticketinfo input.theme-select:-webkit-autofill:hover,
    html.paco-pg-ticketinfo input.theme-select:-webkit-autofill:focus {
        -webkit-text-fill-color: #ffffff !important;
        caret-color: #ffffff !important;
        box-shadow: 0 0 0 1000px #0a2016 inset !important;
        transition: background-color 9999s ease-in-out 0s;
    }

    /* Mensajes de validacion (los muestra el JS nativo al enviar). */
    html.paco-pg-ticketinfo .required-text,
    html.paco-pg-ticketinfo .invalid-text,
    html.paco-pg-ticketinfo .validation {
        display: block !important;
        margin: -8px 0 12px !important;
        color: #ff9b9b !important;
        font-family: "Montserrat", sans-serif !important;
        font-size: 11px !important;
        font-weight: 700 !important;
    }

    /* Botonera (regresar / continuar). */
    html.paco-pg-ticketinfo form > div[style*="text-align:center"],
    html.paco-pg-ticketinfo form > div[align="center"] {
        display: flex !important;
        flex-wrap: wrap !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 12px !important;
        width: 100% !important;
        margin: 26px 0 0 !important;
        padding: 22px 0 0 !important;
        border-top: 1px solid rgba(223, 186, 83, 0.18) !important;
        box-sizing: border-box !important;
    }

    html.paco-pg-ticketinfo .theme-container-wrap input.button,
    html.paco-pg-ticketinfo .theme-container-wrap input[type="button"],
    html.paco-pg-ticketinfo .theme-container-wrap input[type="submit"] {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        min-height: 52px !important;
        width: auto !important;
        min-width: 180px !important;
        max-width: 100% !important;
        padding: 15px 30px !important;
        margin: 0 !important;
        border: 1.5px solid transparent !important;
        border-radius: 12px !important;
        font-family: "OVERTURE", "Montserrat", sans-serif !important;
        font-size: 12.5px !important;
        font-weight: 800 !important;
        letter-spacing: 1.4px !important;
        line-height: 1.2 !important;
        text-transform: uppercase !important;
        text-align: center !important;
        text-decoration: none !important;
        text-shadow: none !important;
        white-space: normal !important;
        cursor: pointer !important;
        box-sizing: border-box !important;
        box-shadow: none !important;
        outline: none !important;
        transition: transform .2s ease, box-shadow .2s ease, background .2s ease, color .2s ease, border-color .2s ease !important;
    }

    html.paco-pg-ticketinfo .theme-container-wrap input.sw-button-primary,
    html.paco-pg-ticketinfo .theme-container-wrap input#submit {
        background-color: #DFBA53 !important;
        background-image: linear-gradient(180deg, #f0cf72 0%, #DFBA53 100%) !important;
        border-color: transparent !important;
        color: #06251a !important;
        min-width: 200px !important;
        box-shadow: 0 8px 22px rgba(223, 186, 83, 0.28) !important;
    }

    html.paco-pg-ticketinfo .theme-container-wrap input.sw-button-primary:hover,
    html.paco-pg-ticketinfo .theme-container-wrap input#submit:hover {
        background-image: linear-gradient(180deg, #f7dd8f 0%, #f1cd68 100%) !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 10px 26px rgba(223, 186, 83, 0.4) !important;
    }

    html.paco-pg-ticketinfo .theme-container-wrap input.sw-button-muted {
        background-color: transparent !important;
        background-image: none !important;
        border-color: rgba(223, 186, 83, 0.5) !important;
        color: #DFBA53 !important;
    }

    html.paco-pg-ticketinfo .theme-container-wrap input.sw-button-muted:hover {
        background-color: #DFBA53 !important;
        border-color: #DFBA53 !important;
        color: #01150B !important;
        transform: translateY(-2px) !important;
    }

    html.paco-pg-ticketinfo .theme-container-wrap input.button:active {
        transform: translateY(0) !important;
    }

    @media (max-width: 760px) {
        html.paco-pg-ticketinfo .paco-native-box {
            padding: 26px 18px 24px !important;
            margin: 26px auto 56px !important;
            border-radius: 16px !important;
        }
        html.paco-pg-ticketinfo .heading-text.sub-head-text {
            font-size: 20px !important;
        }
        html.paco-pg-ticketinfo form > div[style*="text-align:center"] {
            flex-direction: column-reverse !important;
        }
        html.paco-pg-ticketinfo .theme-container-wrap input.button {
            width: 100% !important;
            min-width: 0 !important;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        html.paco-pg-ticketinfo .theme-select,
        html.paco-pg-ticketinfo .theme-container-wrap input.button {
            transition: none !important;
        }
    }
`;
function poner(){var destino=document.head||document.documentElement;if(!destino)return false;
 if(document.getElementById('paco-ticketinfo-css'))return true;
 var st=document.createElement('style');
 st.id='paco-ticketinfo-css';st.textContent=css;destino.appendChild(st);return true;}
if(!poner()){
 document.addEventListener('DOMContentLoaded',poner);}
})();
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 if(document.documentElement.className.indexOf('paco-pg-login')===-1)return;function pacoLimpiarErroresLogin(){try{
 var user=document.getElementById('username');
 if(user&&user.value.trim()===''){
 var fila=user.closest?user.closest('.login-form-row'):user.parentNode;if(fila){
 fila.querySelectorAll('.error-message').forEach(function(el){if(el.parentNode)el.parentNode.removeChild(el);});}
 user.classList.remove('has-error');}
 document.querySelectorAll('.login-form-row').forEach(function(fila){
 var errs=fila.querySelectorAll('.error-message');for(var i=1;i<errs.length;i++){if(errs[i].parentNode)errs[i].parentNode.removeChild(errs[i]);}
});}catch(e){}
}
 document.addEventListener('blur',function(e){
 if(e.target&&e.target.id==='username')setTimeout(pacoLimpiarErroresLogin,0);},true);
 document.addEventListener('input',function(e){
 if(e.target&&(e.target.id==='username'||e.target.id==='password')){pacoLimpiarErroresLogin();}
},true);if(window.MutationObserver&&document.body){new MutationObserver(pacoLimpiarErroresLogin)
.observe(document.body,{childList:true,subtree:true});}
 document.addEventListener('DOMContentLoaded',pacoLimpiarErroresLogin);
 window.addEventListener('load',pacoLimpiarErroresLogin);pacoLimpiarErroresLogin();})();
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 if(window.location.href.toLowerCase().indexOf('checkout_finished.asp')===-1)return;function pacoMarcarResultado(){try{
 var head=document.getElementById('checkout-finished-header')||
 document.getElementById('checkout-finished-message');if(!head)return;
 var txt=(head.innerText||'').toLowerCase();if(!txt.trim())return;
 var malas=['rechazad','declinad','denegad','no aprobad','error','fallid','no se pudo','no fue posible'];var esMala=false;for(var i=0;i<malas.length;i++){if(txt.indexOf(malas[i])!==-1){esMala=true;break;}
}
 document.documentElement.classList.toggle('paco-fin-rechazada',esMala);}catch(e){}
}
var PACO_FACT_MIN=340;var PACO_FACT_RESERVA=900;var PACO_CSS_FACTURA=[
'html,body{width:100%!important;max-width:none!important;min-width:0!important;',
'height:auto!important;min-height:0!important;',
'margin:0!important;overflow-x:hidden!important;background:#fff!important}',
'body{box-sizing:border-box!important;padding:22px 28px 26px!important;',
'font-family:"Montserrat",Arial,Helvetica,sans-serif!important;',
'font-size:15px!important;line-height:1.55!important;color:#16241d!important}',
'#page-wrap,.content-wrap,.content-inner,.main-container,.main-content,',
'.site-width,.center-div,.container,form,fieldset{width:100%!important;',
'max-width:none!important;margin-left:0!important;margin-right:0!important;',
'padding-left:0!important;padding-right:0!important;float:none!important}',
'table{width:100%!important;max-width:none!important;table-layout:auto!important;',
'border-collapse:collapse!important}',
'td,th{padding:7px 10px!important;vertical-align:middle!important}',
'img{max-width:100%!important;height:auto!important}',
'label,td,th,span,p,div{font-size:15px!important;line-height:1.55!important}',
'input[type=text],input[type=email],input[type=tel],input[type=number],',
'input[type=search],input[type=password],input:not([type]),select,textarea{',
'width:100%!important;max-width:100%!important;box-sizing:border-box!important;',
'min-height:44px!important;font-size:15px!important;padding:10px 12px!important;',
'border:1px solid #c3cec8!important;border-radius:8px!important;',
'background:#fff!important;color:#16241d!important}',
'textarea{min-height:110px!important}',
'input[type=text]:focus,input[type=email]:focus,input[type=tel]:focus,',
'input[type=number]:focus,select:focus,textarea:focus{',
'border-color:#1ebe5d!important;outline:none!important;',
'box-shadow:0 0 0 3px rgba(30,190,93,.16)!important}',
'input[type=checkbox],input[type=radio]{width:auto!important;min-height:0!important;',
'transform:scale(1.15)!important;margin-right:6px!important}',
'input[type=submit],input[type=button],button,.button{width:auto!important;',
'min-height:46px!important;padding:12px 26px!important;font-size:14px!important;',
'font-weight:700!important;border-radius:9px!important;cursor:pointer!important}',
'@media (max-width:760px){body{padding:16px 14px 20px!important}',
'td,th{padding:5px 4px!important}}'
].join('');function pacoEstilarMarco(doc){try{
 if(!doc||doc.getElementById('paco-estilo-factura'))return;
 var destino=doc.head||doc.getElementsByTagName('head')[0]||doc.body;if(!destino)return;
 var st=doc.createElement('style');
 st.id='paco-estilo-factura';
 st.type='text/css';st.appendChild(doc.createTextNode(PACO_CSS_FACTURA));destino.appendChild(st);}catch(e){}
}
function pacoEnsancharCajaFactura(){try{
 var cont=document.querySelector('.embed-container');if(!cont)return;
 var caja=document.getElementById('paco-native-box-wrapper');
 var heading=cont.closest?cont.closest('h1,h2,h3,h4,h5,h6'):null;if(heading&&heading.parentNode){
 var btns=document.querySelector('.checkout-finished-button-wrap');
 var header=document.getElementById('checkout-finished-header');if(btns&&btns.parentNode){btns.parentNode.insertBefore(cont,btns);}else if(header&&header.parentNode){header.parentNode.insertBefore(cont,header.nextSibling);}else if(caja){caja.appendChild(cont);}
}
var n=cont.parentElement,pasos=0;while(n&&n!==caja&&n!==document.body&&
n!==document.documentElement&&pasos++<15){
 n.style.setProperty('width','100%','important');
 n.style.setProperty('max-width','none','important');
 n.style.setProperty('min-width','0','important');
 n.style.setProperty('float','none','important');
 n.style.setProperty('box-sizing','border-box','important');var t=n.tagName;
 if(t==='TABLE'||t==='TBODY'||t==='TR'||
 t==='TD'||t==='TH'){
 n.style.setProperty('display','block','important');}
 n.style.setProperty('flex','1 1 100%','important');
 n.style.setProperty('grid-column','1 / -1','important');n=n.parentElement;}
 cont.style.setProperty('width','85%','important');
 cont.style.setProperty('max-width','85%','important');
 cont.style.setProperty('margin-left','auto','important');
 cont.style.setProperty('margin-right','auto','important');
 cont.style.setProperty('flex','0 1 85%','important');
 cont.style.setProperty('grid-column','1 / -1','important');if(!caja||cont.parentElement===caja)return;var anchoCaja=caja.clientWidth||0;if(!anchoCaja||cont.clientWidth>=anchoCaja*0.72)return;caja.appendChild(cont);}catch(e){}
}
function pacoMedirMarco(doc){if(!doc)return 0;var b=doc.body,d=doc.documentElement;if(!b&&!d)return 0;return Math.max(
b?b.scrollHeight:0,d?d.scrollHeight:0,b?b.offsetHeight:0,d?d.offsetHeight:0,d?d.getBoundingClientRect().height:0
);}
function pacoAjustarFactura(){
 var f=document.getElementById('ifrmFactura')||
 document.querySelector('.embed-container iframe');if(!f)return;
 try{f.removeAttribute('height');}catch(e){}
pacoEnsancharCajaFactura();var doc=null;try{doc=f.contentDocument||(f.contentWindow&&f.contentWindow.document);}catch(e){doc=null;}
if(!doc){
 f.setAttribute('data-paco-alto','reserva');
 f.style.setProperty('height',PACO_FACT_RESERVA +'px','important');return;}
pacoEstilarMarco(doc);var alto=Math.ceil(pacoMedirMarco(doc));if(!alto)return;alto=Math.max(alto + 12,PACO_FACT_MIN);
 var actual=parseInt(f.getAttribute('data-paco-alto'),10)||0;if(Math.abs(actual - alto)<3)return;
 f.setAttribute('data-paco-alto',alto);
 f.style.setProperty('height',alto +'px','important');}
function pacoEngancharFactura(){
 var f=document.getElementById('ifrmFactura')||
 document.querySelector('.embed-container iframe');
 if(!f||f.getAttribute('data-paco-enganchado'))return;
 f.setAttribute('data-paco-enganchado','1');
 f.addEventListener('load',function(){pacoAjustarFactura();setTimeout(pacoAjustarFactura,350);setTimeout(pacoAjustarFactura,1200);try{var doc=f.contentDocument;if(!doc)return;pacoEstilarMarco(doc);if(!window.ResizeObserver)return;var ro=new ResizeObserver(function(){pacoAjustarFactura();});if(doc.body)ro.observe(doc.body);if(doc.documentElement)ro.observe(doc.documentElement);
 doc.addEventListener('input',pacoAjustarFactura,true);
 doc.addEventListener('change',pacoAjustarFactura,true);
 doc.addEventListener('click',function(){setTimeout(pacoAjustarFactura,250);},true);}catch(e){}
});}
function pacoPegarHeaderArriba(){try{
 var h=document.getElementById('menu__paco');if(!h)return;var scroll=window.pageYOffset||document.documentElement.scrollTop||0;if(scroll>2)return;
 h.style.removeProperty('margin-top');var desfase=h.getBoundingClientRect().top;if(desfase>0.5&&desfase<200){
 h.style.setProperty('margin-top',(-desfase)+'px','important');}
}catch(e){}
}
 var PACO_FIN_INICIO='https://\x66estival\x70residente.\x74uboleta.com.do/eventperformances.asp?evt=952';function pacoBotonInicio(){try{
 var wraps=document.querySelectorAll('.checkout-finished-button-wrap');for(var w=0;w<wraps.length;w++){
 var cands=wraps[w].querySelectorAll('a, input.button, input[type="button"], input[type="submit"], button');for(var i=0;i<cands.length;i++){var el=cands[i];
 var txt=((el.textContent||'')+' '+(el.value||'')).toLowerCase();
 if(txt.indexOf('regresar')===-1||txt.indexOf('principal')===-1)continue;
 if(el.getAttribute('data-paco-inicio'))continue;
 el.setAttribute('data-paco-inicio','1');
 if(el.tagName==='A'){
 el.setAttribute('href',PACO_FIN_INICIO);
 el.removeAttribute('onclick');
 el.removeAttribute('target');}
 el.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();window.location.href=PACO_FIN_INICIO;},true);}
}
}catch(e){}
}
/* Tarjeta rechazada: el boton "Regresar a la Pagina Principal" no
   siempre viene dentro de .checkout-finished-button-wrap (la pantalla
   de rechazo lo imprime suelto), asi que aqui se le pone su propia
   clase por texto para poder pintarlo igual que el resto de botones
   dorados del sitio sin afectar los botones de la pantalla de exito. */
function pacoEstilarBotonRegresar(){try{
 var cands=document.querySelectorAll('.paco-native-box input.button, .paco-native-box input[type="button"], .paco-native-box input[type="submit"], .paco-native-box a.button, .paco-native-box button');
 for(var i=0;i<cands.length;i++){var el=cands[i];
 var txt=((el.textContent||'')+' '+(el.value||'')).toLowerCase();
 if(txt.indexOf('regresar')===-1||txt.indexOf('principal')===-1)continue;
 el.classList.add('paco-fin-btn-regresar');}
}catch(e){}
}
/* Tarjeta rechazada: ShoWare imprime el aviso como un solo bloque de
   texto plano dentro de .error-message. Se separa en titulo + cuerpo
   + advertencia ("NO des clic hacia atras...") para que cada parte
   se pueda resaltar por separado, igual que en checkout.asp. */
function pacoPersonalizarErrorFinal(){try{
 var cajas=document.querySelectorAll('.paco-native-box .error-message');for(var c=0;c<cajas.length;c++){var caja=cajas[c];
 if(caja.getAttribute('data-paco-personalizado'))continue;
 var texto=(caja.textContent||'').replace(/^[\s-]+/,'').trim();if(!texto)continue;
 caja.setAttribute('data-paco-personalizado','1');
 var partes=texto.split(/(?=no des clic)/i);
 caja.textContent='';
 var titulo=document.createElement('strong');
 titulo.className='paco-fin-error-title';
 titulo.textContent='Pago no procesado';
 caja.appendChild(titulo);
 var cuerpo=document.createElement('span');
 cuerpo.className='paco-fin-error-cuerpo';
 cuerpo.textContent=partes[0].trim();
 caja.appendChild(cuerpo);
 if(partes[1]){
 var aviso=document.createElement('strong');
 aviso.className='paco-fin-error-warn';
 aviso.textContent=partes[1].trim();
 caja.appendChild(aviso);}
}
}catch(e){}
}
function pacoFinPasada(){pacoMarcarResultado();pacoEngancharFactura();pacoEnsancharCajaFactura();pacoAjustarFactura();pacoPegarHeaderArriba();pacoBotonInicio();pacoPersonalizarErrorFinal();pacoEstilarBotonRegresar();}
 document.addEventListener('DOMContentLoaded',pacoFinPasada);
 window.addEventListener('load',pacoFinPasada);
 window.addEventListener('resize',pacoPegarHeaderArriba);
 window.addEventListener('resize',pacoAjustarFactura);
 window.addEventListener('orientationchange',pacoPegarHeaderArriba);[300,800,1600,2600,4200].forEach(function(ms){setTimeout(pacoFinPasada,ms);});setInterval(function(){pacoEngancharFactura();pacoAjustarFactura();},1000);pacoFinPasada();})();
})();
;
/* OrderTicketsQuickPick.asp: reconstruye el aviso ("no es posible
   hacer una Seleccion Rapida...") a partir de su TEXTO, no de su
   posicion en el DOM. ShoWare a veces mete cada razon en su propio
   <div>/<p> dentro de .error-message, y eso hacia que el CSS
   ".error-message b:first-child" pescara el <b> de la primera razon
   (el numero, ej. "4") en vez del titulo, dejandolo gigante y
   centrado por error -- exactamente lo que se veia en produccion. */
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 if(document.documentElement.className.indexOf('paco-pg-qpaviso')===-1)return;
function pacoEscQP(t){
 return String(t==null?'':t)
 .replace(/&/g,'&amp;')
 .replace(/</g,'&lt;')
 .replace(/>/g,'&gt;');}
function pacoArmarAvisoQP(caja){
 if(caja.querySelector('input,button,select,textarea,a'))return;
 var texto=(caja.textContent||'').replace(/\s+/g,' ').trim();if(!texto)return;
 var partes=texto.split(/:\s*/);
 var titulo=partes.length>1?(partes[0]+':'):texto;
 var resto=partes.length>1?partes.slice(1).join(':').trim():'';
 /* El texto de cada razon lo redacta ShoWare (varia segun el motivo:
    cantidad maxima superada, boletos que ya estan en el carrito, etc.).
    Se reemplaza por un mensaje fijo y mas claro; el unico dato que se
    conserva de ShoWare es el numero del limite (el primero que aparece
    en el texto original, ej. el "4" de "4 es la cantidad maxima..."). */
 var m=resto.match(/\d+/);
 var limite=m?m[0]:'';
 caja.innerHTML='';
 var h=document.createElement('b');
 h.className='paco-qp-titulo';
 h.textContent=titulo;
 caja.appendChild(h);
 var lista=document.createElement('div');
 lista.className='paco-qp-razones';
 var p1=document.createElement('p');
 p1.className='paco-qp-razon';
 p1.textContent='Has excedido el límite de boletos que se pueden comprar para esta función.';
 lista.appendChild(p1);
 if(limite){
 var p2=document.createElement('p');
 p2.className='paco-qp-razon';
 p2.innerHTML='Límite: <b>'+pacoEscQP(limite)+'</b> boletos';
 lista.appendChild(p2);}
 caja.appendChild(lista);
}
function pacoPasadaAvisoQP(){try{
 var cajas=document.querySelectorAll('.paco-native-box .error-message');for(var i=0;i<cajas.length;i++){var caja=cajas[i];
 if(caja.getAttribute('data-paco-qp'))continue;
 var texto=(caja.textContent||'').trim();if(!texto)continue;
 caja.setAttribute('data-paco-qp','1');
 pacoArmarAvisoQP(caja);}
}catch(e){}
}
pacoPasadaAvisoQP();
 document.addEventListener('DOMContentLoaded',pacoPasadaAvisoQP);
 window.addEventListener('load',pacoPasadaAvisoQP);[300,800,1600,2600].forEach(function(ms){setTimeout(pacoPasadaAvisoQP,ms);});setInterval(pacoPasadaAvisoQP,1000);})();
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;var u=window.location.href.toLowerCase();
 if(u.indexOf('checkout_streamlined')!==-1){
 document.documentElement.classList.add('paco-pg-pago');}
})();
})();
;
(function(){
window.PACO_CHECKOUT_LOGOS=[
{nombre:'Visa',marca:'visa',src:'https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/imagenes/visa.jpg'},
{nombre:'Mastercard',marca:'mastercard',activo:false,src:'https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/imagenes/mastercard.jpg'},
{nombre:'American Express',marca:'amex',activo:false,src:'https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/imagenes/amex.jpg'}
];
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 if(window.location.href.toLowerCase().indexOf('checkout_streamlined')===-1)return;function pacoPintarLogosTarjetas(){try{var lista=window.PACO_CHECKOUT_LOGOS||[];if(!lista.length)return;
 var huecos=document.querySelectorAll('[id="AcceptedCCTypesContainer"]');if(!huecos.length)return;var elegido=null;for(var i=0;i<huecos.length;i++){if(huecos[i].offsetParent!==null){elegido=huecos[i];break;}
}
if(!elegido)elegido=huecos[0];var destino=elegido.parentElement||elegido;
 var todas=document.querySelectorAll('.paco-cc-logos');for(var k=0;k<todas.length;k++){if(todas[k].parentNode===destino)continue;if(todas[k].parentNode)todas[k].parentNode.removeChild(todas[k]);}
 if(destino.querySelector('.paco-cc-logos'))return;
 var fila=document.createElement('span');
 fila.className='paco-cc-logos';for(var j=0;j<lista.length;j++){var marca=lista[j]||{};if(!marca.src)continue;if(marca.activo===false)continue;
 var nombre=marca.nombre||'';
 var item=document.createElement('span');
 var slugMarca=(marca.marca||nombre||'')
 .toString().toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
 item.className='paco-cc-item'+(slugMarca?' paco-cc-item--'+ slugMarca:'');
 item.setAttribute('title',nombre);
 var img=document.createElement('img');
 img.className='paco-cc-logo';img.alt=nombre;
 img.setAttribute('loading','lazy');img.onerror=function(){var caja=this.parentNode;if(caja&&caja.parentNode)caja.parentNode.removeChild(caja);};img.src=marca.src;item.appendChild(img);if(nombre){
 var etiqueta=document.createElement('span');
 etiqueta.className='paco-cc-name';etiqueta.textContent=nombre;item.appendChild(etiqueta);}
fila.appendChild(item);}
destino.appendChild(fila);}catch(e){}
}
pacoPintarLogosTarjetas();
 document.addEventListener('DOMContentLoaded',pacoPintarLogosTarjetas);
 window.addEventListener('load',pacoPintarLogosTarjetas);setInterval(pacoPintarLogosTarjetas,700);})();
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 if(window.location.href.toLowerCase().indexOf('checkout_streamlined')===-1)return;var PASOS=[
{id:'checkoutDelivery',num:'1',etiqueta:'Entrega',boton:'#changeDeliveryMethodButton'},
{id:'checkoutPayment',num:'2',etiqueta:'Pago',boton:'#paymentChangeType'},
{id:'checkoutComplete',num:'3',etiqueta:'Confirmar',boton:''}
];function seVe(el){if(!el)return false;if(el.offsetParent===null)return false;var r=el.getBoundingClientRect();return(r.height>2&&r.width>2);}
function crearBanda(wrap){
 var banda=document.createElement('div');
 banda.className='paco-co-hero';
 var arriba=document.createElement('div');
 arriba.className='paco-co-hero-top';
 var candado=document.createElement('span');
 candado.className='paco-co-hero-lock';
 candado.setAttribute('aria-hidden','true');
 var txt=document.createElement('div');
 txt.className='paco-co-hero-txt';
 var kicker=document.createElement('span');
 kicker.className='paco-co-kicker';
 kicker.textContent='\x46estival \x50residente';
 var titulo=document.createElement('span');
 titulo.className='paco-co-title';
 titulo.textContent='Pago seguro';txt.appendChild(kicker);txt.appendChild(titulo);arriba.appendChild(candado);arriba.appendChild(txt);banda.appendChild(arriba);
 var riel=document.createElement('ol');
 riel.className='paco-co-steps';for(var i=0;i<PASOS.length;i++){var p=PASOS[i];
 var li=document.createElement('li');
 li.className='paco-co-step';
 li.setAttribute('data-paso',p.id);
 var dot=document.createElement('span');
 dot.className='paco-co-step-dot';dot.textContent=p.num;
 var lbl=document.createElement('span');
 lbl.className='paco-co-step-lbl';lbl.textContent=p.etiqueta;li.appendChild(dot);li.appendChild(lbl);riel.appendChild(li);}
banda.appendChild(riel);
 riel.addEventListener('click',function(e){
 var li=e.target.closest?e.target.closest('.paco-co-step'):null;
 if(!li||!li.classList.contains('paco-clic'))return;
 var cual=li.getAttribute('data-paso');for(var n=0;n<PASOS.length;n++){if(PASOS[n].id!==cual||!PASOS[n].boton)continue;var btn=document.querySelector(PASOS[n].boton);if(seVe(btn))btn.click();return;}
});wrap.insertBefore(banda,wrap.firstChild);return banda;}
function pintar(){try{
 var wrap=document.getElementById('checkoutWrap');if(!wrap)return;
 var banda=wrap.querySelector('.paco-co-hero');if(!banda||banda.parentNode!==wrap)banda=crearBanda(wrap);if(banda!==wrap.firstChild)wrap.insertBefore(banda,wrap.firstChild);for(var i=0;i<PASOS.length;i++){var p=PASOS[i];
 var li=banda.querySelector('.paco-co-step[data-paso="'+ p.id +'"]');if(!li)continue;var seccion=document.getElementById(p.id);
 var contenido=seccion?seccion.querySelector('.checkout-form-item-content'):null;
 var resumen=seccion?seccion.querySelector('.checkout-selection-summary'):null;var cl=seccion?seccion.classList:null;var hecho,abierto;
 if(cl&&(cl.contains('active')||cl.contains('is-set')||cl.contains('is-validated'))){
 abierto=cl.contains('active');
 hecho=!abierto&&(cl.contains('is-set')||cl.contains('is-validated'));}else{hecho=seVe(resumen);abierto=!hecho&&seVe(contenido);}
 li.classList.toggle('paco-hecho',hecho);
 li.classList.toggle('paco-actual',abierto);
 li.classList.toggle('paco-clic',hecho&&!!p.boton&&seVe(document.querySelector(p.boton)));}
}catch(e){}
}
var CAMPOS_TARJETA=[
{id:'CardNumber',autocomplete:'cc-number',inputmode:'numeric',maxlength:23},
{id:'cvv2',autocomplete:'cc-csc',inputmode:'numeric',maxlength:4},
{id:'CardName',autocomplete:'cc-name'},
{id:'monthExp',autocomplete:'cc-exp-month'},
{id:'yearExp',autocomplete:'cc-exp-year'}
];function arreglarTarjeta(){try{for(var i=0;i<CAMPOS_TARJETA.length;i++){var c=CAMPOS_TARJETA[i];var el=document.getElementById(c.id);if(!el)continue;
 if(c.autocomplete&&el.getAttribute('autocomplete')!==c.autocomplete){
 el.setAttribute('autocomplete',c.autocomplete);}
 if(c.inputmode&&el.getAttribute('inputmode')!==c.inputmode){
 el.setAttribute('inputmode',c.inputmode);}
if(c.maxlength){
 var actual=parseInt(el.getAttribute('maxlength'),10);if(!(actual>=c.maxlength)){
 el.setAttribute('maxlength',String(c.maxlength));}
}
}
}catch(e){}
}
function pasadaCheckout(){pintar();arreglarTarjeta();}
pasadaCheckout();
 document.addEventListener('DOMContentLoaded',pasadaCheckout);
 window.addEventListener('load',pasadaCheckout);setInterval(pasadaCheckout,500);})();
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 if(window.location.href.toLowerCase().indexOf('checkout_streamlined')===-1)return;
 var NUEVO='¿Desea factura con comprobante fiscal?';
 var VIEJO=/desea\s+realizar\s+factura\s+con\s+datos/i;function corregir(nodo){try{if(!nodo||nodo.nodeType!==1)return;
 var cajas=nodo.classList&&nodo.classList.contains('divDialog')
?[nodo]
:nodo.querySelectorAll?nodo.querySelectorAll('.divDialog'):[];for(var i=0;i<cajas.length;i++){var caja=cajas[i];
 var txt=(caja.textContent||'');if(VIEJO.test(txt)&&caja.textContent!==NUEVO){caja.textContent=NUEVO;}
}
}catch(e){}
}
function pasada(){corregir(document.body);}
pasada();
 document.addEventListener('DOMContentLoaded',pasada);
 window.addEventListener('load',pasada);if(window.MutationObserver&&document.body){new MutationObserver(function(muts){for(var m=0;m<muts.length;m++){for(var n=0;n<muts[m].addedNodes.length;n++){corregir(muts[m].addedNodes[n]);}
}
}).observe(document.body,{childList:true,subtree:true});}
setInterval(pasada,500);})();
})();
;
(function(){
window.PACO_ZONA_NATIVA=[
'#google_translate_element',
'.goog-te-gadget',
'.skiptranslate',
'.g-recaptcha',
'#checkout-recaptcha',
'#recaptcha-container-inner',
'#paypal-button-container',
'.paypal-buttons'
];
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;function pacoMarcarZonaNativa(){try{var lista=window.PACO_ZONA_NATIVA||[];if(!lista.length)return;for(var i=0;i<lista.length;i++){var raices;try{raices=document.querySelectorAll(lista[i]);}catch(e){continue;}
for(var r=0;r<raices.length;r++){var raiz=raices[r];
 raiz.classList.add('paco-nt');
 var hijos=raiz.querySelectorAll('*');for(var h=0;h<hijos.length;h++){
 hijos[h].classList.add('paco-nt');}
}
}
}catch(e){}
}
pacoMarcarZonaNativa();
 document.addEventListener('DOMContentLoaded',pacoMarcarZonaNativa);
 window.addEventListener('load',pacoMarcarZonaNativa);setInterval(pacoMarcarZonaNativa,700);})();
})();
;
(function(){
(function(){var TRIANGULO=
'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '+
'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+
'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>'+
'<line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';var CHECK=
'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" '+
'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+
'<polyline points="20 6 9 17 4 12"/></svg>';function cerrar(cont,msg){
 msg.style.animation='pacoAvisoOut .2s ease-in forwards';
 var quedan=cont.querySelectorAll('.error-message, .sw-error').length;
 if(quedan<=1)cont.classList.add('paco-cerrando');setTimeout(function(){if(msg.parentNode)msg.parentNode.removeChild(msg);
 cont.classList.remove('paco-cerrando');},190);}
function mejora(cont,msg){if(msg.dataset.pacoAviso)return;
 msg.dataset.pacoAviso='1';
 var ico=document.createElement('div');
 ico.className='paco-aviso-ico';ico.innerHTML=TRIANGULO;msg.insertBefore(ico,msg.firstChild);
 var txt=document.createElement('div');
 txt.className='paco-aviso-txt';var n=ico.nextSibling;while(n){var sig=n.nextSibling;
 if(!(n.nodeType===1&&n.tagName==='I'))txt.appendChild(n);n=sig;}
msg.appendChild(txt);
 var btn=document.createElement('button');
 btn.type='button';
 btn.className='paco-aviso-ok';
 btn.innerHTML=CHECK +'<span>Entendido</span>';
 btn.addEventListener('click',function(){cerrar(cont,msg);});msg.appendChild(btn);}
function escanea(cont){
 var list=cont.querySelectorAll('.error-message, .sw-error');for(var i=0;i<list.length;i++)mejora(cont,list[i]);}
function init(){
 var cont=document.getElementById('ErrorMessages');if(!cont)return false;escanea(cont);new MutationObserver(function(){escanea(cont);})
.observe(cont,{childList:true});
 document.addEventListener('keydown',function(e){
 if(e.key!=='Escape'&&e.keyCode!==27)return;
 var abiertos=cont.querySelectorAll('.error-message, .sw-error');if(abiertos.length)cerrar(cont,abiertos[abiertos.length - 1]);});return true;}
 if(!init())document.addEventListener('DOMContentLoaded',init);})();
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 if(document.documentElement.className.indexOf('paco-pg-mapa')===-1)return;var ultimoW=0,ultimoH=0,pendiente=null;function avisarAShoWare(){try{
 window.dispatchEvent(new Event('resize'));}catch(e){try{
 var ev=document.createEvent('UIEvents');
 ev.initUIEvent('resize',true,false,window,0);window.dispatchEvent(ev);}catch(e2){}
}
}
function pedirRemedida(){if(pendiente)return;pendiente=window.requestAnimationFrame(function(){pendiente=null;avisarAShoWare();});}
function vigilarWrapper(){
 var wrap=document.getElementById('SeatmapCanvasWrapper');
 if(!wrap||wrap.getAttribute('data-paco-observado'))return;var w=wrap.clientWidth,h=wrap.clientHeight;if(!w||!h)return;
 wrap.setAttribute('data-paco-observado','1');ultimoW=w;ultimoH=h;if(!window.ResizeObserver)return;new ResizeObserver(function(){var nw=wrap.clientWidth,nh=wrap.clientHeight;if(!nw||!nh)return;if(Math.abs(nw - ultimoW)<2&&Math.abs(nh - ultimoH)<2)return;ultimoW=nw;ultimoH=nh;pedirRemedida();}).observe(wrap);}
var cfgScroll=window.PACO_MAPA_SCROLL=window.PACO_MAPA_SCROLL||{};if(cfgScroll.ruedaDesplazaPagina===undefined)cfgScroll.ruedaDesplazaPagina=false;if(cfgScroll.avisar===undefined)cfgScroll.avisar=true;
 if(!cfgScroll.textoAviso)cfgScroll.textoAviso='Usa Ctrl + rueda, o los botones + / −, para acercar el mapa';function guardarRueda(){if(!cfgScroll.ruedaDesplazaPagina)return;
 var wrap=document.getElementById('SeatmapCanvasWrapper');
 if(!wrap||wrap.getAttribute('data-paco-rueda'))return;
 wrap.setAttribute('data-paco-rueda','1');
 wrap.addEventListener('wheel',function(e){if(e.ctrlKey||e.metaKey)return;e.stopPropagation();avisarZoom();},true);}
var avisoPuesto=0;function avisarZoom(){if(!cfgScroll.avisar)return;var ahora=Date.now();if(ahora - avisoPuesto<2500)return;avisoPuesto=ahora;
 var mapa=document.getElementById('SeatmapMain');if(!mapa)return;
 var av=mapa.querySelector('.paco-mapa-aviso');if(!av){
 av=document.createElement('div');
 av.className='paco-mapa-aviso';av.textContent=cfgScroll.textoAviso;mapa.appendChild(av);}
 av.classList.add('paco-visible');clearTimeout(av._t);av._t=setTimeout(function(){
 av.classList.remove('paco-visible');},1800);}
function ponerAyuda(){
 if(document.querySelector('.paco-mapa-ayuda'))return;
 var mapa=document.getElementById('SeatmapMain');if(!mapa||!mapa.parentNode)return;var pasos=[
['1','Arrastra el mapa y usa <b>+ / −</b> para acercar.'],
['2','Toca la zona o el asiento que quieras.'],
['3','Revisa tu selección y pulsa <b>Agregar al carrito</b>.']
];
 var ul=document.createElement('ul');
 ul.className='paco-mapa-ayuda';for(var i=0;i<pasos.length;i++){
 var li=document.createElement('li');
 var ico=document.createElement('i');ico.textContent=pasos[i][0];
 var txt=document.createElement('span');txt.innerHTML=pasos[i][1];li.appendChild(ico);li.appendChild(txt);ul.appendChild(li);}
 var cupon=document.querySelector('.seatmapCouponWrap');var ancla=(cupon&&cupon.parentNode===mapa.parentNode)?cupon:mapa;ancla.parentNode.insertBefore(ul,ancla);}
function ponerBadgeRapida(){
 var heading=document.getElementById('SeatmapQuickPickHeading');
 if(!heading||heading.querySelector('.paco-quickpick-badge'))return;
 heading.textContent='';
 var badge=document.createElement('span');
 badge.className='paco-quickpick-badge';
 badge.textContent='SELECCIÓN RÁPIDA - TERRENO VIP Y TERRENO';
 heading.appendChild(badge);}
function marcarPanel(){
 var panel=document.getElementById('SelectedSeats');
 var abierto=!!(panel&&panel.classList.contains('has-seats'));
 document.documentElement.classList.toggle('paco-mapa-panel',abierto);}
function convertirCantidadSelect(){
 var input=document.getElementById('qpqty');
 if(!input||input.tagName!=='INPUT')return;
 var MAX=4;
 var actual=parseInt(input.value,10);if(isNaN(actual)||actual<1)actual=1;if(actual>MAX)actual=MAX;
 var sel=document.createElement('select');
 sel.id='qpqty';sel.name='qpqty';sel.className=input.className;
 var aria=input.getAttribute('aria-label');if(aria)sel.setAttribute('aria-label',aria);
 for(var i=1;i<=MAX;i++){
 var opt=document.createElement('option');
 opt.value=String(i);opt.textContent=String(i);if(i===actual)opt.selected=true;
 sel.appendChild(opt);}
 input.parentNode.replaceChild(sel,input);}
function ponerAvisoRapidaProximamente(){
 var aviso=document.getElementById('paco-quickpick-proximamente');
 if(document.getElementById('SeatmapQuickPickForm')){
 if(aviso&&aviso.parentNode)aviso.parentNode.removeChild(aviso);
 return;}
 if(aviso)return;
 var info=document.getElementById('PerformanceInfoBox');
 var ancla=document.querySelector('.seatmapCouponWrap')||document.getElementById('SeatmapMain');
 if(!info||!ancla||!ancla.parentNode)return;
 aviso=document.createElement('div');
 aviso.id='paco-quickpick-proximamente';
 aviso.className='paco-quickpick-proximamente';
 aviso.textContent='SELECCIÓN RÁPIDA DISPONIBLE PRONTO';
 ancla.parentNode.insertBefore(aviso,ancla);}
function pasada(){vigilarWrapper();guardarRueda();ponerBadgeRapida();convertirCantidadSelect();ponerAvisoRapidaProximamente();ponerAyuda();marcarPanel();}
pasada();
 document.addEventListener('DOMContentLoaded',pasada);
 window.addEventListener('load',function(){pasada();setTimeout(pedirRemedida,400);setTimeout(pedirRemedida,1200);});
 window.addEventListener('orientationchange',function(){setTimeout(pedirRemedida,250);setTimeout(pedirRemedida,800);});setInterval(pasada,700);})();
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 if(document.documentElement.className.indexOf('paco-pg-mapa')===-1)return;var CORTE=1025;var AIRE_ARRIBA=14;var AIRE_ABAJO=20;var ALTO_MINIMO=220;var raiz=document.documentElement;var pendiente=null;var padreOriginal=null;var hermanoOriginal=null;var ultimo=null;function pintar(el,arriba,derecha,alto){
 el.style.setProperty('position','fixed','important');
 el.style.setProperty('top',arriba +'px','important');
 el.style.setProperty('right',derecha +'px','important');
 el.style.setProperty('left','auto','important');
 el.style.setProperty('bottom','auto','important');
 el.style.setProperty('width','350px','important');
 el.style.setProperty('max-width','350px','important');
 el.style.setProperty('height','auto','important');
 el.style.setProperty('max-height',alto +'px','important');
 el.style.setProperty('z-index','45','important');ultimo={arriba:arriba,derecha:derecha,alto:alto};}
function despintar(el){
 var props=['position','top','right','left','bottom',
'width','max-width','height','max-height','z-index'];for(var i=0;i<props.length;i++){el.style.removeProperty(props[i]);}
ultimo=null;}
var desenganchado=false;function desengancharShoWare(){if(desenganchado)return;var jq=window.jQuery||window.$;if(!jq||!jq._data)return;var eventos;
 try{eventos=jq._data(window,'events');}catch(e){return;}
if(!eventos||!eventos.scroll)return;var lista=eventos.scroll.slice();var quitados=0;for(var i=0;i<lista.length;i++){var fn=lista[i]&&lista[i].handler;if(!fn)continue;
 var fuente='';try{fuente=String(fn);}catch(e){continue;}
 if(fuente.indexOf('SelectedSeats')===-1)continue;
 try{jq(window).off('scroll',fn);quitados++;}catch(e){}
}
if(quitados)desenganchado=true;}
var vigilante=null;function vigilar(panel){if(vigilante||!window.MutationObserver)return;vigilante=new MutationObserver(function(){if(!ultimo)return;if(window.innerWidth<CORTE)return;
 if(panel.style.position==='fixed'&&
 panel.style.top===ultimo.arriba +'px'&&
 panel.style.height==='auto')return;pintar(panel,ultimo.arriba,ultimo.derecha,ultimo.alto);});vigilante.observe(panel,{attributes:true,
 attributeFilter:['style']
});}
function medir(){pendiente=null;
 var panel=document.getElementById('SelectedSeats');if(!panel)return;desengancharShoWare();vigilar(panel);if(!padreOriginal&&panel.parentNode&&
panel.parentNode!==document.body){padreOriginal=panel.parentNode;hermanoOriginal=panel.nextSibling;}
if(window.innerWidth<CORTE){despintar(panel);if(padreOriginal&&panel.parentNode===document.body){padreOriginal.insertBefore(panel,hermanoOriginal);}
return;}
 var mapa=document.getElementById('SeatmapMain');if(!mapa)return;var caja=mapa.getBoundingClientRect();if(!caja.width)return;var derecha=Math.round(window.innerWidth - caja.right);if(!(derecha>=0))derecha=0;
 var header=document.getElementById('menu__paco');var hCaja=header?header.getBoundingClientRect():null;var linea=hCaja?hCaja.bottom + AIRE_ARRIBA:AIRE_ARRIBA;if(!(linea>AIRE_ARRIBA))linea=AIRE_ARRIBA;var altoReal=panel.offsetHeight||ALTO_MINIMO;var alto=window.innerHeight - linea - AIRE_ABAJO;if(alto>caja.height)alto=caja.height;if(alto<ALTO_MINIMO)alto=ALTO_MINIMO;var altoVisible=Math.min(altoReal,alto);var arriba=Math.max(linea,caja.top);var tope=caja.bottom - altoVisible;if(arriba>tope)arriba=tope;arriba=Math.round(arriba);alto=Math.round(alto);if(panel.parentNode!==document.body){document.body.appendChild(panel);}
pintar(panel,arriba,derecha,alto);}
function pedir(){if(pendiente)return;if(window.requestAnimationFrame){pendiente=window.requestAnimationFrame(medir);}else{pendiente=setTimeout(medir,16);}
}
medir();
 document.addEventListener('DOMContentLoaded',medir);
 window.addEventListener('resize',pedir);
 window.addEventListener('scroll',pedir,{passive:true});
 window.addEventListener('orientationchange',function(){setTimeout(medir,250);setTimeout(medir,800);});
 window.addEventListener('load',function(){medir();setTimeout(medir,400);setTimeout(medir,1200);});setInterval(medir,700);})();
})();
;
(function(){
window.PACO_DISPONIBILIDAD={activo:true,
 textoComprobando:'COMPROBANDO DISPONIBILIDAD',
 textoAgotado:'SIN DISPONIBILIDAD - INTENTAR MAS TARDE',
 etiquetaAgotado:'AGOTADO',
 mensajeAgotado:'No quedan boletas de esta experiencia por ahora. Vuelve a intentarlo más tarde.',
 paginaVenta:'orderticketsvenue.asp,ordertickets.asp',
 paginaVerificacion:'wordverification',
 paginaAgotado:'eventperformances.asp',reintentarAgotado:true,esperaReintento:1800,tiempoLimite:12000,recordar:true,debug:false
};
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;var cfg=window.PACO_DISPONIBILIDAD||{};if(cfg.activo===false)return;var memoria={};function log(){if(!cfg.debug)return;try{
 console.log.apply(console,['[PACO disponibilidad]'].concat(
Array.prototype.slice.call(arguments)));}catch(e){}
}
function urlTiene(url,marcas){
 var u=String(url||'').toLowerCase();
 var lista=String(marcas||'').toLowerCase().split(',');for(var i=0;i<lista.length;i++){var m=lista[i].trim();if(m&&u.indexOf(m)!==-1)return true;}
return false;}
function esEnlaceDeVenta(url){
 return urlTiene(url,cfg.paginaVenta||'orderticketsvenue.asp,ordertickets.asp');}
function veredicto(destino){
 if(esEnlaceDeVenta(destino))return'hay';
 if(urlTiene(destino,cfg.paginaVerificacion||'wordverification'))return'hay';
 if(urlTiene(destino,cfg.paginaAgotado||'eventperformances.asp'))return'agotado';
 return'desconocido';}
function preguntar(url){
 if(!window.fetch||!window.Promise)return Promise.resolve('desconocido');var ctrl=window.AbortController?new window.AbortController():null;var corte=setTimeout(function(){if(ctrl){try{ctrl.abort();}catch(e){}}
},parseInt(cfg.tiempoLimite,10)||12000);var opciones={
 method:'HEAD',
 credentials:'same-origin',
 redirect:'follow',
 cache:'no-store'
};if(ctrl)opciones.signal=ctrl.signal;return fetch(url,opciones).then(function(res){clearTimeout(corte);
 if(!res.ok){log('respuesta',res.status,'-> se deja pasar');return'desconocido';}
 var destino=res.url||'';
 if(!destino){log('sin url final -> se deja pasar');return'desconocido';}
var v=veredicto(destino);
 log(url,'->',destino,'=>',v);return v;}).catch(function(e){clearTimeout(corte);
 log('falló la consulta, se deja pasar:',e&&e.message);
 return'desconocido';});}
function comprobar(url,permitirReintento){if(cfg.recordar!==false&&memoria[url]){return Promise.resolve(memoria[url]);}
return preguntar(url).then(function(v){
 if(v==='agotado'&&permitirReintento!==false&&cfg.reintentarAgotado!==false){
 log('agotado a la primera; se reintenta una vez');return new Promise(function(ok){setTimeout(function(){preguntar(url).then(ok);},parseInt(cfg.esperaReintento,10)||1800);});}
return v;}).then(function(v){
 if(cfg.recordar!==false&&v!=='desconocido')memoria[url]=v;return v;});}
function ponerMensaje(tarjeta,texto,aviso){if(!tarjeta)return;
 var p=tarjeta.querySelector('.paco-disp-msg');if(!p){if(!texto)return;
 p=document.createElement('p');
 p.className='paco-disp-msg';tarjeta.appendChild(p);}
 p.className='paco-disp-msg'+(aviso?' paco-aviso':'');
 p.textContent=texto||'';}
function marcarAgotado(btn,tarjeta){
 btn.classList.remove('paco-comprobando');
 btn.classList.add('paco-agotado');
 btn.textContent=cfg.textoAgotado||'SIN DISPONIBILIDAD';
 btn.setAttribute('aria-disabled','true');if(tarjeta){
 tarjeta.classList.add('paco-agotado');
 if(!tarjeta.querySelector('.paco-disp-badge')){
 var badge=document.createElement('span');
 badge.className='paco-disp-badge';
 badge.textContent=cfg.etiquetaAgotado||'AGOTADO';tarjeta.appendChild(badge);}
}
 ponerMensaje(tarjeta,cfg.mensajeAgotado||'');}
function devolverBoton(btn){
 btn.classList.remove('paco-comprobando');
 var original=btn.getAttribute('data-paco-texto');if(original)btn.textContent=original;}
function tarjetaDe(btn){
 return btn.closest?btn.closest('.pmf-planes__card'):null;}
 document.addEventListener('click',function(e){
 var btn=e.target&&e.target.closest?e.target.closest('.pmf-planes__btn'):null;if(!btn)return;
 if(btn.classList.contains('paco-comprobando')){e.preventDefault();return;}
 if(btn.classList.contains('paco-agotado')){e.preventDefault();return;}
 var url=btn.getAttribute('href');if(!url||!esEnlaceDeVenta(url))return;e.preventDefault();e.stopPropagation();var tarjeta=tarjetaDe(btn);
 if(memoria[url]==='agotado'){marcarAgotado(btn,tarjeta);return;}
 if(memoria[url]==='hay'){window.location.href=url;return;}
 if(!btn.getAttribute('data-paco-texto')){
 btn.setAttribute('data-paco-texto',btn.textContent.trim());}
 btn.classList.add('paco-comprobando');
 btn.textContent=cfg.textoComprobando||'COMPROBANDO DISPONIBILIDAD';
 ponerMensaje(tarjeta,'',true);comprobar(url).then(function(v){
 if(v==='agotado'){marcarAgotado(btn,tarjeta);return;}
devolverBoton(btn);window.location.href=url;}).catch(function(){devolverBoton(btn);window.location.href=url;});},true);})();
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 if(document.documentElement.className.indexOf('paco-pg-cuenta')===-1)return;
 /* patronedit.asp tambien carga paco-pg-cuenta (para heredar la tarjeta/
    inputs/datepicker), pero su markup NO es igual al de patronnew.asp
    (columnas distintas, sin Sexo/password, <hr> en otro orden). Esta
    limpieza de kicker/secciones/paco-f-* asume la forma de patronnew.asp,
    asi que se restringe a esa pagina exclusivamente. */
 if((window.pacoUrlPagina()||'').toLowerCase().indexOf('patronnew.asp')===-1)return;
function fila(el){var n=el;while(n&&n.parentElement&&
!n.parentElement.classList.contains('patron-column')){n=n.parentElement;}
return(n&&n.parentElement&&
 n.parentElement.classList.contains('patron-column'))?n:null;}
function marcar(el,clase){var f=fila(el);if(f)f.classList.add(clase);return f;}
function seccion(antesDe,texto,icono){if(!antesDe||!antesDe.parentNode)return;var prev=antesDe.previousElementSibling;
 if(prev&&prev.classList.contains('paco-cuenta-sec'))return;
 var h=document.createElement('div');
 h.className='paco-cuenta-sec';
 h.setAttribute('data-ico',icono);
 var s=document.createElement('span');s.textContent=texto;h.appendChild(s);antesDe.parentNode.insertBefore(h,antesDe);}
function envolverIntro(form){
 if(form.querySelector('.paco-cuenta-intro'))return;
 var info=form.querySelector('.patron-info');
 var hr=form.querySelector('hr');if(!info||!hr)return;
 /* En patronedit.asp el <hr> queda DESPUES de .patron-info (separa el
    formulario del pie), no antes como en patronnew.asp. Sin este freno
    el barrido de "hr.nextSibling hasta info" nunca encuentra info y se
    lleva por delante el pie del formulario completo. */
 if(!(hr.compareDocumentPosition(info)&Node.DOCUMENT_POSITION_FOLLOWING))return;
 var caja=document.createElement('div');
 caja.className='paco-cuenta-intro';var n=hr.nextSibling;var hayAlgo=false;while(n&&n!==info){var sig=n.nextSibling;
 if(n.nodeType!==3||n.nodeValue.trim()!=='')hayAlgo=true;caja.appendChild(n);n=sig;}
if(!hayAlgo)return;info.parentNode.insertBefore(caja,info);ponerRedes(caja);}
var REDES=[
{
 clave:'instagram',etiqueta:'Instagram',
 d:'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
},{
 clave:'twitter',etiqueta:'X / Twitter',
 d:'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
},{
 clave:'facebook',etiqueta:'Facebook',
 d:'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.22.19 2.22.19v2.44h-1.25c-1.23 0-1.62.77-1.62 1.56V12h2.77l-.44 3h-2.33v6.8C18.56 20.87 22 16.84 22 12z'
}
];function ponerRedes(caja){
 var enlaces=caja.querySelectorAll('a');for(var i=0;i<enlaces.length;i++){var a=enlaces[i];
 if(a.getAttribute('data-paco-red'))continue;
 var href=(a.getAttribute('href')||'').toLowerCase();var red=null;for(var r=0;r<REDES.length;r++){if(href.indexOf(REDES[r].clave)!==-1){red=REDES[r];break;}
}
if(!red)continue;
 a.setAttribute('data-paco-red',red.clave);
 a.setAttribute('aria-label',red.etiqueta);
 a.setAttribute('title',red.etiqueta);
 var svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
 svg.setAttribute('viewBox','0 0 24 24');
 svg.setAttribute('aria-hidden','true');
 svg.setAttribute('focusable','false');
 var p=document.createElementNS('http://www.w3.org/2000/svg','path');
 p.setAttribute('d',red.d);svg.appendChild(p);
 a.innerHTML='';a.appendChild(svg);}
}
function ponerKicker(form){
 var titulo=form.querySelector('.heading-text.sub-head-text');if(!titulo||!titulo.parentNode)return;var prev=titulo.previousElementSibling;
 if(prev&&prev.classList.contains('paco-cuenta-kicker'))return;
 var k=document.createElement('span');
 k.className='paco-cuenta-kicker';
 k.textContent='\x46estival \x50residente';titulo.parentNode.insertBefore(k,titulo);}
function marcarRequeridos(form){
 var pie=form.querySelector('.patron-form-footer');if(!pie)return;var hijos=pie.children;for(var i=0;i<hijos.length;i++){
 var t=(hijos[i].textContent||'').toLowerCase();
 if(t.indexOf('campos requeridos')!==-1){
 hijos[i].classList.add('paco-cuenta-req');return;}
}
}
function pasada(){
 var form=document.querySelector('form.patron-form');
 if(!form||form.getAttribute('data-paco-cuenta'))return;
 var info=form.querySelector('.patron-info');if(!info)return;
 form.setAttribute('data-paco-cuenta','1');ponerKicker(form);envolverIntro(form);
 var fUser=marcar(form.querySelector('#UserName'),'paco-f-user');
 marcar(form.querySelector('#ConfUserName'),'paco-f-confuser');
 marcar(form.querySelector('#password'),'paco-f-pass');
 marcar(form.querySelector('[name="ConfirmPassword"]'),'paco-f-confpass');
 var fSexo=marcar(form.querySelector('[name="Sexo"]'),'paco-f-sexo');
 marcar(form.querySelector('#cedulainfo'),'paco-f-cedula');
 marcar(form.querySelector('#FirstName'),'paco-f-nombres');
 marcar(form.querySelector('#Fechadenacimiento_10'),'paco-f-fecha');
 marcar(form.querySelector('[name="IDoIdentificacion_15"]'),'paco-f-id');
 var fPais=marcar(form.querySelector('#Country'),'paco-f-pais');
 marcar(form.querySelector('#State'),'paco-f-estado');
 marcar(form.querySelector('#txtCellPhone'),'paco-f-cel');
 seccion(fUser,'Acceso a tu cuenta','acceso');
 seccion(fSexo,'Datos personales','datos');
 seccion(fPais,'Ubicación y contacto','contacto');marcarRequeridos(form);}
pasada();
 document.addEventListener('DOMContentLoaded',pasada);
 window.addEventListener('load',pasada);var intentos=0;var reloj=setInterval(function(){pasada();if(++intentos>20)clearInterval(reloj);},400);})();
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 if(document.documentElement.className.indexOf('paco-pg-micuenta')===-1)return;var cfg=window.PACO_MICUENTA=window.PACO_MICUENTA||{};
 if(!cfg.kicker)cfg.kicker='\x46estival \x50residente';
 if(!cfg.titulo)cfg.titulo='Mi cuenta';
 if(!cfg.vacioTitulo)cfg.vacioTitulo='No tienes eventos próximos';if(!cfg.vacioTexto)cfg.vacioTexto=
'Cuando compres boletas, aquí verás tus próximos eventos con su fecha y su lugar.';
 if(!cfg.vacioBoton)cfg.vacioBoton='Ver experiencias';if(!cfg.vacioEnlace)cfg.vacioEnlace=
'https://\x66estival\x70residente.\x74uboleta.com.do/eventperformances.asp?evt=952';function rescatarLista(raiz){
 var lista=raiz.querySelector('.account-links-list');if(!lista)return;
 var saludo=raiz.querySelector('.account-control .heading-text');if(!saludo||!saludo.contains(lista))return;saludo.parentNode.insertBefore(lista,saludo.nextSibling);}
function marcarSalir(raiz){
 var enlaces=raiz.querySelectorAll('.account-links-list a.button');for(var i=0;i<enlaces.length;i++){var a=enlaces[i];
 var pista=((a.getAttribute('onclick')||'')+' '+
(a.getAttribute('href')||'')).toLowerCase();
 if(pista.indexOf('logoff')===-1)continue;var li=a.parentElement;
 if(li&&li.tagName==='LI')li.classList.add('paco-mc-salir');}
}
function avisarVacio(raiz){
 var caja=raiz.querySelector('.account-recent-orders .item-details');if(!caja)return;
 if(caja.querySelector('.paco-mc-vacio'))return;
 var texto=(caja.textContent||'').trim();if(texto)return;
 if(caja.querySelector('table, ul, li, a, img, input'))return;
 var d=document.createElement('div');
 d.className='paco-mc-vacio';
 var b=document.createElement('b');b.textContent=cfg.vacioTitulo;
 var s=document.createElement('span');s.textContent=cfg.vacioTexto;d.appendChild(b);d.appendChild(s);if(cfg.vacioEnlace){
 var a=document.createElement('a');a.href=cfg.vacioEnlace;a.textContent=cfg.vacioBoton;d.appendChild(a);}
caja.appendChild(d);}
function ponerCabecera(layout){if(!layout||!layout.parentNode)return;var prev=layout.previousElementSibling;
 if(prev&&prev.classList.contains('paco-mc-cab'))return;
 var cab=document.createElement('div');
 cab.className='paco-mc-cab';
 var k=document.createElement('span');
 k.className='paco-mc-kicker';k.textContent=cfg.kicker;
 var t=document.createElement('span');
 t.className='paco-mc-titulo';t.textContent=cfg.titulo;cab.appendChild(k);cab.appendChild(t);layout.parentNode.insertBefore(cab,layout);}
function pasada(){
 var layout=document.querySelector('.myaccount-layout');
 if(!layout||layout.getAttribute('data-paco-micuenta'))return;
 layout.setAttribute('data-paco-micuenta','1');ponerCabecera(layout);rescatarLista(layout);marcarSalir(layout);avisarVacio(layout);}
pasada();
 document.addEventListener('DOMContentLoaded',pasada);
 window.addEventListener('load',pasada);var intentos=0;var reloj=setInterval(function(){pasada();if(++intentos>20)clearInterval(reloj);},400);})();
})();
;
(function(){
window.PACO_CART_HOVER={detalle:true,maxItems:4,
 urlCarrito:'/basket.asp',
 textoCargando:'Cargando tu carrito…'
};
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 var SEL_BOTONES='.paco-cart-btn, .paco-mobile-cart-item';var cfgHover=window.PACO_CART_HOVER||{};
 var detalle={clave:null,items:null,estado:'nada'};function esc(t){
 return String(t==null?'':t)
 .replace(/&/g,'&amp;')
 .replace(/</g,'&lt;')
 .replace(/>/g,'&gt;')
 .replace(/"/g,'&quot;')
 .replace(/'/g,'&#39;');}
function num(v){var n=parseFloat(v);return isFinite(n)?n:0;}
function siNo(v){
 var s=String(v==null?'':v).trim().toLowerCase();
 return(s==='true'||s==='1'||s==='yes'||s==='si'||s==='sí');}
function dosDec(v){
 if(typeof window.twoDigit==='function'){try{var r=window.twoDigit(v);
 if(typeof r==='string'&&r&&r.indexOf('NaN')===-1)return r;}catch(e){}
}
return num(v).toFixed(2);}
function contarArticulos(d){if(d&&d.TotalNumerItems!==undefined&&d.TotalNumerItems!==null&&
 String(d.TotalNumerItems).trim()!==''){return Math.max(0,parseInt(d.TotalNumerItems,10)||0);}
 var desc=document.querySelector('#ShoWareBasketWidget .cart-item-desc');if(desc){
 var t=(desc.textContent||'').replace(/[^\d]/g,'');
 if(t!=='')return Math.max(0,parseInt(t,10)||0);}
 var movil=document.getElementById('mobileBasketItemsQty');if(movil){
 var m=(movil.textContent||'').replace(/[^\d]/g,'');
 if(m!=='')return Math.max(0,parseInt(m,10)||0);}
return -1;}
function moneda(d){
 var s=(d&&d.SystemCurrencySymbol)||'';
 var a=(d&&d.SystemCurrencyAbbr)||'';if(a&&s&&s.indexOf(a)===-1)return a + s;return s||a;}
function limpio(el){
 return el?(el.textContent||'').replace(/\s+/g,' ').trim():'';}
function precioDeItem(it){
 var t=limpio(it.querySelector('.basket-cell.ticket-total'));if(t)return t;
 var sel=it.querySelector('select.pricingcode-dropdown');if(sel){
 var op=sel.querySelector('option[selected]');if(!op&&sel.options&&sel.selectedIndex>=0)op=sel.options[sel.selectedIndex];
 var m=op?(op.textContent||'').match(/\$\s*[\d.,]+/):null;
 if(m)return m[0].replace(/\s+/g,'');}
 t=limpio(it.querySelector('.ticket-actual-price .fees-item'));if(t)return t;
 return limpio(it.querySelector('.pricing-code-price'));}
function leerItemsDe(doc){var out=[];if(!doc||!doc.querySelectorAll)return out;var items;
 try{items=doc.querySelectorAll('.basket-ticket-item');}catch(e){return out;}
for(var i=0;i<items.length;i++){var it=items[i];
 var nom=limpio(it.querySelector('.seatmap-name-wrap'));
 var sec='';
 var sw=it.querySelector('.seatmap-section-wrap');if(sw){sec=limpio(sw);if(sw.nextSibling){
 sec=(sec +' '+(sw.nextSibling.textContent||''))
 .replace(/\s+/g,' ').trim();}
}
var pre=precioDeItem(it);
 if(pre&&pre.indexOf('RD$')===-1)pre=pre.replace(/\$/g,'RD$');
 out.push({nom:nom||'Boleta',sec:sec,precio:pre});}
return out;}
function pedirDetalle(){if(cfgHover.detalle===false)return;var d=window.ShoWareBasketData;if(d&&d.GrandTotal===undefined&&d.TotalNumerItems===undefined)d=null;var n=contarArticulos(d);if(n<=0)return;
 var clave=String(n)+'|'+((d&&d.GrandTotal!==undefined)?d.GrandTotal:'');if(detalle.clave===clave&&
(detalle.estado==='listo'||detalle.estado==='cargando'))return;var local=leerItemsDe(document);if(local.length){
 detalle={clave:clave,items:local,estado:'listo'};pintar();return;}
if(!window.fetch||!window.DOMParser)return;
 detalle={clave:clave,items:null,estado:'cargando'};pintar();
 fetch(cfgHover.urlCarrito||'/basket.asp',{
 credentials:'same-origin',
 cache:'no-store'
}).then(function(res){if(!res.ok)throw new Error(res.status);return res.text();}).then(function(html){try{
 var doc=new DOMParser().parseFromString(html,'text/html');var its=leerItemsDe(doc);detalle={clave:clave,items:its,
 estado:its.length?'listo':'falla'
};}catch(e){
 detalle={clave:clave,items:null,estado:'falla'};}
pintar();},function(){
 detalle={clave:clave,items:null,estado:'falla'};pintar();});}
function htmlItems(){
 if(cfgHover.detalle===false)return'';
 if(detalle.estado==='cargando'){
 return'<div class="paco-cart-pop-items">'+
'<span class="paco-cart-pop-cargando">'+
 esc(cfgHover.textoCargando||'Cargando tu carrito…')+
'</span></div>';}
 if(detalle.estado!=='listo'||!detalle.items||!detalle.items.length)return'';var max=parseInt(cfgHover.maxItems,10);if(!(max>0))max=4;
 var h='<div class="paco-cart-pop-items">';for(var i=0;i<detalle.items.length&&i<max;i++){var it=detalle.items[i];
 h +='<div class="paco-cart-pop-item">'+
'<span class="paco-cart-pop-item-txt">'+
'<b>'+ esc(it.nom)+'</b>'+
(it.sec?'<i>'+ esc(it.sec)+'</i>':'')+
'</span>'+
(it.precio?'<span class="paco-cart-pop-item-precio">'+ esc(it.precio)+'</span>':'')+
'</div>';}
var resto=detalle.items.length - max;if(resto>0){
 h +='<span class="paco-cart-pop-mas">y '+ resto +
(resto===1?' boleta más':' boletas más')+'</span>';}
 h +='</div>';return h;}
function resumen(d,n){if(!d||d.GrandTotal===undefined)return null;var mon=moneda(d);var filas=[];function fila(etq,valor){filas.push({etq:etq,val:mon + dosDec(valor)});}
if(num(d.NumberOfTickets)>0){
 fila('Boletos',d.TicketsAmount);
 fila('Cargo por boletos',d.TicketFeesAmount);
 fila('Cargo por orden',d.OrderFeeAmount);if(siNo(d.hasDeliveryOptionSet)){
 fila('Cargo por envío',d.DeliveryFeeAmount);if(d.DeliveryMethodName){filas.push({nota:d.DeliveryMethodName});}
}
}
 if(num(d.NumberOfDonations)>0)fila('Donaciones',d.DonationsAmount);if(num(d.NumberOfMemberships)>0){
 fila(d.MembershipsAlias||'Membresías',d.MembershipsAmount);}
return{filas:filas,total:mon + dosDec(d.GrandTotal),n:n
};}
function mensaje(n){if(n>0){
 return'Hay '+ n +(n===1?' artículo':' artículos')+' en tu carrito';}
 return'Tu carrito de compras está vacío';}
function htmlPanel(r){
 var h='<div class="paco-cart-pop-card">';
 h +='<span class="paco-cart-pop-head">'+ esc(mensaje(r.n))+'</span>';h +=htmlItems();for(var i=0;i<r.filas.length;i++){var f=r.filas[i];if(f.nota){
 h +='<span class="paco-cart-pop-nota">'+ esc(f.nota)+'</span>';continue;}
 h +='<div class="paco-cart-pop-fila">'+
'<span class="paco-cart-pop-lbl">'+ esc(f.etq)+'</span>'+
'<span class="paco-cart-pop-val">'+ esc(f.val)+'</span>'+
'</div>';}
 h +='<div class="paco-cart-pop-fila paco-total">'+
'<span class="paco-cart-pop-lbl">Total</span>'+
'<span class="paco-cart-pop-val">'+ esc(r.total)+'</span>'+
'</div>';
 h +='<span class="paco-cart-pop-pie">Clic para abrir el carrito</span>';
 h +='</div>';return h;}
function montar(btn){
 var badge=btn.querySelector('.paco-cart-badge');if(!badge){
 badge=document.createElement('b');
 badge.className='paco-cart-badge paco-vacio';
 badge.setAttribute('aria-hidden','true');btn.appendChild(badge);}
 var pop=btn.querySelector('.paco-cart-pop');if(!pop){
 pop=document.createElement('div');
 pop.className='paco-cart-pop';
 pop.setAttribute('aria-hidden','true');btn.appendChild(pop);}
 if(!btn.getAttribute('data-paco-hover')){
 btn.setAttribute('data-paco-hover','1');
 btn.addEventListener('mouseenter',pedirDetalle);
 btn.addEventListener('focus',pedirDetalle);}
return{badge:badge,pop:pop};}
var ultimoN=null;function pintar(){var botones=document.querySelectorAll(SEL_BOTONES);if(!botones.length)return;var datos=window.ShoWareBasketData;
 if(datos&&typeof datos==='object'&&
datos.GrandTotal===undefined&&datos.TotalNumerItems===undefined){datos=null;}
var n=contarArticulos(datos);if(n<0)return;var r=resumen(datos,n);var msg=mensaje(n);
 var texto=(n>99)?'99+':String(n);var cambio=(ultimoN!==null&&ultimoN!==n);for(var i=0;i<botones.length;i++){var btn=botones[i];var piezas=montar(btn);if(piezas.badge.textContent!==texto){piezas.badge.textContent=texto;}
 piezas.badge.classList.toggle('paco-vacio',n<=0);
 piezas.badge.classList.toggle('paco-cart-badge--ancha',texto.length>2);
 piezas.badge.setAttribute('title',msg);
 btn.classList.toggle('paco-tiene-items',n>0&&!!r);if(r&&n>0){var nuevo=htmlPanel(r);
 if(piezas.pop.getAttribute('data-paco-firma')!==nuevo){piezas.pop.innerHTML=nuevo;
 piezas.pop.setAttribute('data-paco-firma',nuevo);}
}else if(piezas.pop.innerHTML!==''){
 piezas.pop.innerHTML='';
 piezas.pop.removeAttribute('data-paco-firma');}
 var base=btn.getAttribute('data-paco-arialabel');if(!base){
 base=(btn.getAttribute('aria-label')||btn.getAttribute('title')||
'Ir a Mi Carrito').trim();
 btn.setAttribute('data-paco-arialabel',base);}
 btn.setAttribute('aria-label',base +'. '+ msg);if(cambio&&n>0){(function(b){
 b.classList.remove('paco-late');void b.offsetWidth;
 b.classList.add('paco-late');
 setTimeout(function(){b.classList.remove('paco-late');},700);})(piezas.badge);}
}
ultimoN=n;}
pintar();
 document.addEventListener('DOMContentLoaded',pintar);
 window.addEventListener('load',function(){pintar();setTimeout(pintar,300);setTimeout(pintar,900);setTimeout(pintar,2000);});setInterval(pintar,700);})();
})();

;
(function(){
window.PACO_PAGO_AVISO=window.PACO_PAGO_AVISO||{activo:true,
 frases:['tarjetas participantes'],
 titulo:'Tarjetas participantes',
 textoBoton:'Entendido'
};
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 if(window.location.href.toLowerCase().indexOf('checkout_streamlined')===-1)return;
 var cfg=window.PACO_PAGO_AVISO||{};if(cfg.activo===false)return;
 var FRASES=(cfg.frases&&cfg.frases.length)?cfg.frases:['tarjetas participantes'];
 var TITULO=cfg.titulo||'Aviso';
 var BOTON=cfg.textoBoton||'Entendido';var abierto=false;var descartado='';
 var ICO='<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>';
 var CHECK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
 function escHtml(t){return String(t==null?'':t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
 function tieneFrase(t){t=(t||'').toLowerCase();for(var i=0;i<FRASES.length;i++){if(t.indexOf(String(FRASES[i]).toLowerCase())!==-1)return true;}return false;}
 function visible(el){if(!el)return false;if(el.offsetParent!==null)return true;var r=el.getClientRects&&el.getClientRects();return!!(r&&r.length);}
 function buscar(){var nodos;try{nodos=document.querySelectorAll('.error-message,.sw-error,.floating-error,[class*="error-"],[id*="rror"]');}catch(e){return null;}
 var mejor=null,mejorLen=Infinity;for(var i=0;i<nodos.length;i++){var el=nodos[i];
 if(el.tagName==='SCRIPT'||el.tagName==='STYLE')continue;
 if(el.id==='paco-pago-aviso-overlay')continue;
 if(el.closest&&el.closest('#paco-pago-aviso-overlay'))continue;
 var t=(el.innerText||el.textContent||'');if(!t.trim()||!tieneFrase(t))continue;if(!visible(el))continue;
 if(t.length<mejorLen){mejor=el;mejorLen=t.length;}}
 return mejor;}
 function cerrar(overlay,handler){
 overlay.classList.remove('paco-abierto');abierto=false;
 if(handler)document.removeEventListener('keydown',handler);
 setTimeout(function(){if(overlay.parentNode)overlay.parentNode.removeChild(overlay);},300);}
 function abrir(texto){if(document.getElementById('paco-pago-aviso-overlay'))return;abierto=true;
 var overlay=document.createElement('div');
 overlay.id='paco-pago-aviso-overlay';
 overlay.innerHTML='<div class="paco-pago-aviso-card" role="alertdialog" aria-modal="true" aria-labelledby="paco-pago-aviso-tit">'+
'<button class="paco-pago-aviso-close" type="button" aria-label="Cerrar">&times;</button>'+
'<div class="paco-pago-aviso-ico">'+ ICO +'</div>'+
'<h3 id="paco-pago-aviso-tit">'+ escHtml(TITULO)+'</h3>'+
'<p>'+(texto?escHtml(texto):'')+'</p>'+
'<button class="paco-pago-aviso-btn" type="button">'+ CHECK +'<span>'+ escHtml(BOTON)+'</span></button>'+
'</div>';document.body.appendChild(overlay);function fin(){descartado=texto;cerrar(overlay,esc);}
 function esc(e){if(e.key==='Escape'||e.keyCode===27)fin();}
 overlay.querySelector('.paco-pago-aviso-close').addEventListener('click',fin);
 overlay.querySelector('.paco-pago-aviso-btn').addEventListener('click',fin);
 overlay.addEventListener('click',function(e){if(e.target===overlay)fin();});
 document.addEventListener('keydown',esc);
 requestAnimationFrame(function(){overlay.classList.add('paco-abierto');});}
 function pasar(){var el=buscar();if(!el)return;
 var texto=(el.innerText||el.textContent||'').trim();
 el.style.setProperty('display','none','important');
 el.setAttribute('data-paco-pago-aviso','1');
 if(abierto)return;if(descartado===texto)return;abrir(texto);}
 pasar();
 document.addEventListener('DOMContentLoaded',pasar);
 window.addEventListener('load',pasar);
 if(window.MutationObserver&&document.body){new MutationObserver(function(){pasar();}).observe(document.body,{childList:true,subtree:true});}
 setInterval(pasar,700);})();
})();

;
(function(){
/* Terminos de uso / Aviso de privacidad -> popup con iframe (checkout_streamlined.asp,
   basket.asp y cualquier otra pagina donde ShoWare muestre el mismo checkbox).
   El footer (footer.html) ya viene inyectado por ShoWare en TODAS las
   paginas -> ya trae su propio #paco-docpopup-overlay y window.pacoAbrirDocPopup
   (usado por "TERMINOS Y CONDICIONES" / "PREGUNTAS FRECUENTES" del pie).
   Aqui NO se crea un popup nuevo (eso duplicaba el id y rompia el click);
   se reusa exactamente esa misma funcion, igual que hace el footer. */
window.PACO_TERMINOS_POPUP=window.PACO_TERMINOS_POPUP||{activo:true,
 enlaces:[
  {coincide:'termsofuse.asp',url:'https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/tc-2026-3.html'},
  {coincide:'privacystatement.asp',url:'https://cdn.jsdelivr.net/gh/Infinitho-Devs/aquiarius@main/politicas-2026.html'}
 ]
};
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 var cfg=window.PACO_TERMINOS_POPUP||{};if(cfg.activo===false)return;
 var LISTA=(cfg.enlaces&&cfg.enlaces.length)?cfg.enlaces:[];if(!LISTA.length)return;
 function destino(a){
 var href=(a.getAttribute('href')||'').toLowerCase();
 var txt=(a.textContent||'').toLowerCase();
 for(var i=0;i<LISTA.length;i++){var e=LISTA[i];
 if(!e||!e.url||!e.coincide)continue;
 var c=String(e.coincide).toLowerCase();
 if(href.indexOf(c)!==-1||txt.indexOf(c)!==-1)return e.url;}
 return null;}
 function pasar(){var nodos;
 try{nodos=document.querySelectorAll('.checkout-agree-container a,#checkoutWrap a[href*="termsofuse"],#checkoutWrap a[href*="privacystatement"]');}catch(e){return;}
 for(var i=0;i<nodos.length;i++){var a=nodos[i];
 if(a.getAttribute('data-paco-terminos')==='1')continue;
 var url=destino(a);if(!url)continue;
 a.setAttribute('data-paco-terminos','1');
 a.setAttribute('href',url);
 a.setAttribute('target','_blank');
 a.setAttribute('rel','noopener noreferrer');
 (function(u){a.addEventListener('click',function(e){
 if(window.pacoAbrirDocPopup){e.preventDefault();window.pacoAbrirDocPopup(u);}
 });})(url);}}
 pasar();
 document.addEventListener('DOMContentLoaded',pasar);
 window.addEventListener('load',function(){pasar();setTimeout(pasar,300);setTimeout(pasar,900);});
 if(window.MutationObserver&&document.body){new MutationObserver(function(){pasar();}).observe(document.body,{childList:true,subtree:true});}
 setInterval(pasar,700);})();
})();

;
(function(){
/* Aviso "Terreno / Terreno VIP arriba en Selección Rápida" (orderticketsvenue.asp,
   ordertickets.asp -> el mapa de asientos). Mismo estilo visual que el aviso de
   tarjetas participantes / Términos y Condiciones (tarjeta verde oscuro, filo
   dorado, cierre con X y botón de acción). DESACTIVADO por defecto: para
   habilitarlo, poner activo:true (o window.PACO_TERRENO_AVISO.activo=true
   antes de que corra este bloque). */
window.PACO_TERRENO_AVISO=window.PACO_TERRENO_AVISO||{activo:true,
 titulo:'Selección de Terreno VIP y Terreno',
 texto:'Te informamos que la selección de boletos para Terreno VIP y Terreno se encuentra dentro de la sección "Selección Rápida".',
 textoBoton:'Aceptar',
 soloUnaVezPorSesion:false
};
})();
;
(function(){
(function(){if(window.PACO_EN_FRAME)return;
 var cfg=window.PACO_TERRENO_AVISO||{};if(!cfg.activo)return;
 var u=window.pacoUrlPagina();
 if(u.indexOf('orderticketsvenue.asp')===-1&&u.indexOf('ordertickets.asp')===-1)return;
 if(cfg.soloUnaVezPorSesion){try{if(sessionStorage.getItem('pacoTerrenoAvisoVisto'))return;}catch(e){}}
 var TITULO=cfg.titulo||'Aviso';
 var TEXTO=cfg.texto||'';
 if(window.innerWidth>600)TEXTO+=' Para gradas, selecciona tu asiento directamente en el mapa.';
 var BOTON=cfg.textoBoton||'Aceptar';
 var ICO='<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>';
 var CHECK='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>';
 function escHtml(t){return String(t==null?'':t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
 function cerrar(overlay,handler){
 overlay.classList.remove('paco-abierto');
 if(handler)document.removeEventListener('keydown',handler);
 setTimeout(function(){if(overlay.parentNode)overlay.parentNode.removeChild(overlay);},300);}
 function abrir(){if(document.getElementById('paco-terreno-aviso-overlay'))return;
 window.pacoTerrenoAvisoMostrado=true;
 var overlay=document.createElement('div');
 overlay.id='paco-terreno-aviso-overlay';
 overlay.innerHTML='<div class="paco-terreno-aviso-card" role="alertdialog" aria-modal="true" aria-labelledby="paco-terreno-aviso-tit">'+
'<button class="paco-terreno-aviso-close" type="button" aria-label="Cerrar">&times;</button>'+
'<div class="paco-terreno-aviso-ico">'+ ICO +'</div>'+
'<h3 id="paco-terreno-aviso-tit">'+ escHtml(TITULO)+'</h3>'+
'<p>'+ escHtml(TEXTO)+'</p>'+
'<button class="paco-terreno-aviso-btn" type="button">'+ CHECK +'<span>'+ escHtml(BOTON)+'</span></button>'+
'</div>';document.body.appendChild(overlay);function fin(){
 cerrar(overlay,esc);
 try{if(cfg.soloUnaVezPorSesion)sessionStorage.setItem('pacoTerrenoAvisoVisto','1');}catch(e){}}
 function esc(e){if(e.key==='Escape'||e.keyCode===27)fin();}
 overlay.querySelector('.paco-terreno-aviso-close').addEventListener('click',fin);
 overlay.querySelector('.paco-terreno-aviso-btn').addEventListener('click',fin);
 overlay.addEventListener('click',function(e){if(e.target===overlay)fin();});
 document.addEventListener('keydown',esc);
 requestAnimationFrame(function(){overlay.classList.add('paco-abierto');});}
 function intentar(){if(window.pacoTerrenoAvisoMostrado)return;
 if(!document.body){setTimeout(intentar,100);return;}
 abrir();}
 intentar();
 document.addEventListener('DOMContentLoaded',intentar);
 window.addEventListener('load',function(){setTimeout(intentar,300);});})();
})();
