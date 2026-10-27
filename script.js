const form=document.getElementById('unlockForm');
const input=document.getElementById('password');
const note=document.getElementById('hiddenNote');
const error=document.getElementById('error');
form.addEventListener('submit',function(event){event.preventDefault();if(input.value.trim().toUpperCase()==='JUNGKOOK'){note.hidden=false;error.textContent='';note.scrollIntoView({behavior:'smooth',block:'center'});}else{error.textContent='Not quite—try again 💜';note.hidden=true;}});
