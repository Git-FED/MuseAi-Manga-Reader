(function(){
  const speakButtons=document.querySelectorAll('[data-speak]');
  let active=null;
  speakButtons.forEach(btn=>btn.addEventListener('click',()=>{if(!('speechSynthesis' in window)){location.href='read.html';return} speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(btn.dataset.speak);u.rate=1;u.pitch=.95;active=btn;btn.classList.add('speaking');btn.querySelector('span').textContent='Speaking…';u.onend=()=>{btn.classList.remove('speaking');btn.querySelector('span').textContent='Play summary';active=null};speechSynthesis.speak(u)}));
  const play=document.querySelector('#reader-play'), stop=document.querySelector('#reader-stop'), text=document.querySelector('#reading-text'), status=document.querySelector('#tts-status'), speed=document.querySelector('#speed'), out=document.querySelector('#speed-out');
  if(speed) speed.addEventListener('input',()=>out.textContent=speed.value+'×');
  if(play) play.addEventListener('click',()=>{if(!('speechSynthesis' in window)){status.textContent='TTS NOT AVAILABLE';return} speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text.textContent);u.rate=Number(speed.value);u.pitch=.95;status.textContent='READING';u.onend=()=>status.textContent='READY';speechSynthesis.speak(u)});
  if(stop) stop.addEventListener('click',()=>{speechSynthesis.cancel();if(status)status.textContent='STOPPED'});
  const gate=document.querySelector('#enter-gate');
  if(gate) gate.addEventListener('click',()=>{const checked=document.querySelector('#age-confirm').checked;const msg=document.querySelector('#gate-message');if(!checked){msg.textContent='Please confirm your age to continue.';return}localStorage.setItem('museAgeGate','passed');location.href='support.html'});
  const style=document.createElement('style');style.textContent='.speaking{color:#fff!important;text-shadow:0 0 15px #e63827}';document.head.appendChild(style);
})();
