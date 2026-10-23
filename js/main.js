(function(){
  document.addEventListener('contextmenu',function(e){e.preventDefault();});
  document.addEventListener('dragstart',function(e){if(e.target.tagName==='IMG')e.preventDefault();});
  document.addEventListener('keydown',function(e){
    var k=(e.key||'').toLowerCase();
    if(e.key==='F12'||(e.ctrlKey&&['u','s'].indexOf(k)>-1)||(e.ctrlKey&&e.shiftKey&&['i','j','c'].indexOf(k)>-1)||(e.metaKey&&e.altKey&&['i','j','u'].indexOf(k)>-1)){e.preventDefault();return false;}
  });
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.1});
    document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
  } else document.documentElement.classList.add('no-io');
  var t=document.querySelector('.totop');
  addEventListener('scroll',function(){t&&t.classList.toggle('show',scrollY>400);},{passive:true});
  document.querySelectorAll('.nav a,.toc a').forEach(function(a){a.addEventListener('click',function(){document.body.classList.remove('nav-open');});});
})();
function sendWA(f){
  var msg='Hello JM Snacks!%0AName: '+encodeURIComponent(f.name.value)+'%0APhone: '+encodeURIComponent(f.phone.value)+(f.msg?'%0A'+encodeURIComponent(f.msg.value):'');
  window.open('https://wa.me/918870951989?text='+msg,'_blank');
  return false;
}
(function(){var s=document.querySelectorAll('.slide'),d=document.querySelectorAll('.dots button');if(!s.length)return;var i=0,t;
function go(n){s[i].classList.remove('on');d[i].classList.remove('on');i=(n+s.length)%s.length;s[i].classList.add('on');d[i].classList.add('on');clearInterval(t);t=setInterval(function(){go(i+1)},5000);}
document.querySelector('.sl-next').onclick=function(){go(i+1)};document.querySelector('.sl-prev').onclick=function(){go(i-1)};d.forEach(function(b,k){b.onclick=function(){go(k)}});go(0);})();

