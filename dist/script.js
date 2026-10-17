const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
menu.addEventListener('click', () => {
 const open = menu.getAttribute('aria-expanded') !== 'true';
 menu.setAttribute('aria-expanded', String(open));
 menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
 menu.textContent = open ? '×' : '☰';
 navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
 menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label','Abrir menu'); menu.textContent='☰'; navigation.classList.remove('open');
}));
document.querySelectorAll('[data-service]').forEach(a => a.addEventListener('click', () => {
 document.querySelector('#servico').value = a.dataset.service;
}));
document.querySelector('#briefing').addEventListener('submit', event => {
 event.preventDefault();
 const data = new FormData(event.currentTarget);
 const message = `Olá, PenseCole! Gostaria de conversar sobre um projeto.\n\nNome: ${data.get('nome').trim()}\nEmpresa: ${data.get('empresa').trim()}\nSolução: ${data.get('servico')}\nLocal: ${data.get('local').trim()}\nPrazo: ${data.get('prazo').trim() || 'A combinar'}\n\nSobre o projeto: ${data.get('detalhes').trim()}`;
 const url = `https://wa.me/5511994603488?text=${encodeURIComponent(message)}`;
 const link = document.createElement('a'); link.href=url; link.target='_blank'; link.rel='noopener'; link.click();
 const status = document.querySelector('#form-status'); status.textContent='Briefing preparado. Se o WhatsApp não abriu, ';
 const fallback=document.createElement('a'); fallback.href=url;fallback.target='_blank';fallback.rel='noopener';fallback.textContent='clique aqui para continuar.';fallback.style.textDecoration='underline';status.append(fallback);status.style.marginTop='15px';
});
document.querySelector('#year').textContent = new Date().getFullYear();
