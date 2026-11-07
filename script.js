var FNOME = "Minha princesaa";
var NOME = "meu amorrr";
var SEU_NOME = "Eric";

var DATA_CONHECERAM = new Date(2025, 2, 22, 13, 0, 0);
var DATA_NAMORO = new Date(2026, 7, 15, 14, 0, 0);

var FOTOS = [{
    src: "PrimeiraVezQueNosVimos.jpeg",
    data: "22/03/2025",
    frase: "O dia em que tudo começou (Odeio essa foto, mas fazer oque). "
  },
  {
    src: "NaoSeiComoTeOlhar.jpeg",
    data: "24/05/2026",
    frase: "Chega a ser engraçado, eu tenho tanta coisa pra adimirar, que nem sei como devo te olhar."
  },
  {
    src: "DaPraPerceber.jpeg",
    data: "04/07/2026",
    frase: "Acho que dá pra perceber rs."
  },
  {
    src: "FotoDescente.jpeg",
    data: "21/06/2026",
    frase: "Também sabemos tirar fotos descentes aparentemente kakak."
  },
  {
    src: "ReflexoDoAmor.jpeg",
    data: "23/08/2026",
    frase: "Se o reflexo do espelho fossem dimensões, seriam infinitas, como nosso amor, e em absolutamente todas essas dimensões, estamos nos amando."
  },
  {
    src: "Emtodas.jpeg",
    data: "26/09/2026",
    frase: "Em TODAS elas..."
  },
  {
    src: "Namorada.jpeg",
    data: "15/08/2026",
    frase: "O dia em que você virou minha namorada rsrs. "
  },
  {
    src: "voceIncrivel.jpeg",
    data: "25/09/2026",
    frase: "Você me disse que achou essa foto ridicula, mas sinceramente, você tá tão fofa, você está tão você..."
  }
];


var PERGUNTAS = [
  ["Você me ama?", "Seja sincera ", "vira"],
  ["Vai ficar comigo para sempre?", "Pense bem… ", "vira"],
  ["Você sente saudade de mim?", "Pode falar a verdade ", "foge"],
  ["Você vai me dar um abraço bem apertado?", "Só uma opção é a correta ", "vira"],
  ["Eu sou o seu namorado favorito?", "Cuidado com a resposta ", "foge"],
  ["Vamos comer pizza juntos? ", "Última pergunta, juro!", "vira"]
];

var ELOGIOS = ["Você é linda demais ", "Seu sorriso ilumina meu dia ", "Você é meu lugar favorito ", "Amo seu jeitinho ", "Você é incrível ", "Seu abraço é meu cantinho ", "Você me faz rir sem esforço ", "Penso em você o tempo todo ", "Você é a minha alma gemêa hehe", "Sou o cara mais sortudo do mundo", "Você deixa tudo mais grandioso", "Meu coração é completamente seu "];
var FRASES = ["Com você, até o dia mais comum vira especial.", "Meu lugar preferido no mundo é ao seu lado.", "Você é a melhor parte de todos os meus dias.", "Se eu pudesse escolher de novo, escolheria você mil vezes.", "Obrigado por ser meu abrigo e minha alegria.", "Seu sorriso é o meu lugar de paz."];
var POEMA = "Você é o meu lugar favorito Eu não sei se existem palavras suficientes\
para explicar o tamanho do que sinto por você.\
Às vezes, olho para o seu rosto\
e me pergunto como tive tanta sorte\
de encontrar alguém que faz meu mundo\
parecer tão bonito simplesmente por existir.Antes de você, eu sabia o que era sorrir, \
mas não sabia que um sorriso poderia ter endereço.\
Não sabia que um abraço poderia ser abrigo, \
que um olhar poderia acalmar uma tempestade\
ou que ouvir uma voz poderia fazer\
até o pior dos meus dias ficar bem.Você chegou e, sem perceber, \
foi mudando tudo dentro de mim.\
Fez nascer sonhos que eu nem sabia que tinha, \
deu sentido a pequenos momentos\
e me mostrou que o amor não está apenas\
nas grandes declarações, \
mas também nos detalhes que quase ninguém vê.Está no jeito como olho para você\
quando está distraída, \
na vontade de contar qualquer novidade, \
em querer saber como foi seu dia, \
em imaginar nosso futuro\
e desejar que, em cada versão dele, \
vocêcontinue segurando a minha mão.E, meu amor, eu não prometo ser perfeito.\
Prometo que haverá dias difíceis, \
momentos em que faltará coragem\
e situações em que não saberemos o que fazer.\
Mas quero que você saiba de uma coisa: \
  mesmo quando a vida nãofor gentil conosco, \
meu coração ainda vai escolher ficar.Quero ser quem comemora suas conquistas, \
quem enxuga suas lágrimas, \
quem acredita em você quando duvidar de si mesma\
e quem te lembra, quantas vezes forem necessárias, \
o quanto você é especial.Se um dia você esquecer o quanto é amada, \
olhe para mim.\
Porque talvez eu não consiga explicar tudo, \
talvez me faltem palavras, \
mas nunca vai faltar amor\
no jeito como vou olhar para você.E se eu pudesse pedir apenas uma coisa ao tempo, \
não pediria riqueza, sorte ou uma vida sem problemas.\
Pediria mais momentos ao seu lado: \
  mais abraços demorados, \
  mais risadas sem motivo, \
  mais beijos inesperados, \
  mais amanheceres e noites\
em que eu possa olhar para você e pensar:É ela.É com ela que eu quero viver tudo aquilo\
que ainda nem aconteceu.Porque amar você não é apenas querer você hoje.\
É desejar você nos meus planos de amanhã, \
nos meus sonhos de daqui a muitos anos\
e em cada capítulo da história\
que ainda teremos a oportunidade de escrever.Eu não sei quanto tempo a vida nos dará, \
mas sei exatamente o que quero fazer com ele: \
  amar você, todos os dias, \
  de todas as formas que meu coração descobrir.";
var MOTIVOS = ["Seu sorriso", "Seu jeitinho carinhoso", "Sua risada", "Como você cuida de mim", "Seu olhar", "Ser você, simplesmente"];
var FINAL = "Eu te amo, ";
var FMSG = "Obrigado por existir na minha vida. Esse site é só um pedacinho do tanto que eu gosto de você. Com carinho, ";
// =====================================================

function $(i) {
  return document.getElementById(i)
}
document.querySelectorAll('.nome').forEach(function (e) {
  e.textContent = NOME
});
var CORACOES = [
  "Coração1.png",
  "Coração2.png",
  "Coração3.png",
  "Lirio1.png",
  "estrelaCadente.png",
  "Coração1.png",
  "estrelaCadente.png"
];

function rnd(a) {
  return a[Math.floor(Math.random() * a.length)];
}


setInterval(function () {
  var h = document.createElement('div');
  h.className = 'fh';


  var img = document.createElement('img');
  img.src = rnd(CORACOES);


  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'contain';


  h.appendChild(img);

  h.style.left = Math.random() * 100 + '%';


  var tamanho = (14 + Math.random() * 22) + 'px';
  h.style.width = tamanho;
  h.style.height = tamanho;

  h.style.animationDuration = (7 + Math.random() * 6) + 's';

  $('bg').appendChild(h);

  setTimeout(function () {
    h.remove();
  }, 13000);
}, 700);



var io = new IntersectionObserver(function (es) {
  es.forEach(function (e) {
    if (e.isIntersecting) e.target.classList.add('on')
  })
}, {
  threshold: .15
});
document.querySelectorAll('.reveal').forEach(function (s) {
  io.observe(s)
});
$('intro').addEventListener('click', function () {
  $('s1').scrollIntoView({
    behavior: 'smooth'
  })
});

function confete(k) {
  for (var i = 0; i < k; i++) {
    var c = document.createElement('div');
    c.className = 'conf';


    var img = document.createElement('img');
    img.src = rnd(CORACOES);
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';


    c.appendChild(img);

    c.style.left = Math.random() * 100 + '%';


    var tamanho = (18 + Math.random() * 20) + 'px';
    c.style.width = tamanho;
    c.style.height = tamanho;

    c.style.animationDelay = (Math.random() * 1.2) + 's';
    document.body.appendChild(c);

    (function (x) {
      setTimeout(function () {
        x.remove();
      }, 5000);
    })(c);
  }
}


var n = 0,
  ult = -1;
$('bigheart').addEventListener('click', function () {
  var i;
  do {
    i = Math.floor(Math.random() * ELOGIOS.length)
  } while (i === ult);
  ult = i;
  var f = document.createElement('div');
  f.className = 'fall';
  f.textContent = ELOGIOS[i];
  f.style.left = (Math.random() * 40 + 2) + '%';
  f.style.setProperty('--r', (Math.random() * 20 - 10) + 'deg');
  $('rain').appendChild(f);
  setTimeout(function () {
    f.remove()
  }, 4300);
  n++;
  $('cnt').textContent = n + (n === 1 ? ' elogio caiu ' : ' elogios caíram ');
});


var qi = 0,
  no = $('no'),
  yes = $('yes');

function mostrar() {
  var p = PERGUNTAS[qi];
  $('q').textContent = p[0];
  $('qtxt').textContent = p[1];
  no.textContent = 'Não';
  no.classList.remove('yes');
  no.style.transform = '';
  yes.style.transform = '';
}

function viraSim(e) {
  if (e && e.cancelable) e.preventDefault();
  no.textContent = 'Sim ';
  no.classList.add('yes');
  no.style.transform = '';
  yes.style.transform = 'scale(1.1)';
}

function foge(e) {
  if (PERGUNTAS[qi][2] !== 'foge') {
    return viraSim(e)
  }
  if (e.pointerType === 'mouse') {
    var dx = (Math.random() < .5 ? -1 : 1) * (50 + Math.random() * 60),
      dy = (Math.random() - .5) * 50;
    no.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
  } else {
    viraSim(e)
  }
}
no.addEventListener('pointerenter', foge);
no.addEventListener('pointerdown', function (e) {
  viraSim(e)
});

function resp(e) {
  if (e.cancelable) e.preventDefault();
  confete(14);
  qi++;
  if (qi >= PERGUNTAS.length) {
    $('q').textContent = 'Eu sabia! ';
    $('qtxt').textContent = 'Tudo “sim”! Já está registrado, sem direito a desistir ';
    $('btns').innerHTML = '<button id="go">Continuar </button>';
    $('go').addEventListener('click', function () {
      $('s3').scrollIntoView({
        behavior: 'smooth'
      })
    });
    return;
  }
  mostrar();
}
yes.addEventListener('click', resp);
no.addEventListener('click', resp);

function dois(x) {
  return x < 10 ? '0' + x : x
}

function contar(desde, elId, totId) {
  var s = Math.max(0, Math.floor((Date.now() - desde.getTime()) / 1000)),
    tot = s;
  var d = Math.floor(s / 86400);
  s -= d * 86400;
  var h = Math.floor(s / 3600);
  s -= h * 3600;
  var m = Math.floor(s / 60);
  s -= m * 60;
  $(elId).innerHTML = '<div><b>' + d + '</b><small>dias</small></div><div><b>' + dois(h) + '</b><small>horas</small></div><div><b>' + dois(m) + '</b><small>minutos</small></div><div><b>' + dois(s) + '</b><small>segundos</small></div>';
  $(totId).textContent = '= ' + tot.toLocaleString('pt-BR') + ' segundos se amando ';
}

function tick() {
  contar(DATA_CONHECERAM, 't1', 'tot1');
  contar(DATA_NAMORO, 't2', 'tot2')
}
tick();
setInterval(tick, 1000);

var PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="360"><rect width="100%" height="100%" fill="#ffd3e1"/><text x="50%" y="52%" font-size="90" text-anchor="middle">💗</text></svg>');

function criaFoto(f, i) {
  var d = document.createElement('div');
  d.className = 'foto';
  d.style.setProperty('--r', ((i % 3) - 1) * 2 + 'deg');
  var im = document.createElement('img');
  im.src = f.src;
  im.alt = 'Foto ' + (i + 1);
  im.loading = 'lazy';
  im.onerror = function () {
    im.onerror = null;
    im.src = PLACEHOLDER
  };
  d.appendChild(im);
  d.addEventListener('click', function () {
    abrir(f, im.src)
  });
  return d;
}
FOTOS.concat(FOTOS).forEach(function (f, i) {
  $('track').appendChild(criaFoto(f, i))
});

function abrir(f, src) {
  $('mimg').src = src;
  $('mdata').textContent = f.data;
  $('mfrase').textContent = f.frase;
  $('modal').classList.add('on');
  $('track').classList.add('pausa');
}

function fechar() {
  $('modal').classList.remove('on');
  $('track').classList.remove('pausa')
}
$('mx').addEventListener('click', fechar);
$('modal').addEventListener('click', function (e) {
  if (e.target === $('modal')) fechar()
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') fechar()
});

$('poem').textContent = POEMA;
var fi = 0;
$('frase').textContent = FRASES[0];
$('nova').addEventListener('click', function () {
  fi = (fi + 1) % FRASES.length;
  $('frase').textContent = FRASES[fi];
  confete(6)
});

MOTIVOS.forEach(function (m) {
  var d = document.createElement('div');
  d.className = 'flip';
  d.innerHTML = '<div><img class="f" src="CoraçãoEspecial.png" alt="Foto"><span class="b"></span></div>';
  d.querySelector('.b').textContent = m;
  d.addEventListener('click', function () {
    d.classList.toggle('on')
  });
  $('grid').appendChild(d);
});

var fo = new IntersectionObserver(function (es) {
  if (es[0].isIntersecting && !$('fin').textContent) {
    var t = FINAL + FNOME + " ",
      j = 0;
    var iv = setInterval(function () {
      $('fin').textContent = t.slice(0, ++j);
      if (j >= t.length) {
        clearInterval(iv);
        $('fmsg').textContent = FMSG + SEU_NOME + ".";
        confete(30)
      }
    }, 90);
  }
}, {
  threshold: .6
});
fo.observe($('final'));
$('again').addEventListener('click', function () {
  confete(40)
});