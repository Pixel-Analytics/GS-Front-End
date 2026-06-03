# Front-end

## Prompt utlizado:
Claude, analise o codigo CSS e veja o que pode ser melhorado na responsividade do site.

## Retorno:

```css
/* ANTES — altura do header hardcoded em vários lugares */
/* DEPOIS */
:root {
    --header-height: 70px; /* Valor centralizado, reutilizado em padding-top do hero */
}
```

```css
/* ANTES */
.titulo        { font-size: 35px; }
.titulo-card   { font-size: 20px; }
.text-hero     { font-size: 30px; }
.text-hero h1  { /* sem definição explícita */ }
.text-hero p   { font-size: 20px; }
 
/* DEPOIS — clamp(mínimo, fluido, máximo) */
.titulo        { font-size: clamp(24px, 4vw, 35px); }
.titulo-card   { font-size: clamp(16px, 2vw, 20px); }
.text-hero     { font-size: clamp(18px, 2.5vw, 30px); }
.text-hero h1  { font-size: clamp(26px, 4vw, 42px); line-height: 1.3; }
.text-hero p   { font-size: clamp(14px, 1.5vw, 18px); }
```

```css
/* ANTES — larguras fixas que transbordavam em mobile */
.slider           { width: 800px; height: 600px; }
.text-problema    { width: 1300px; }
.text-tecnologia  { width: 1300px; }
/* (idem para todas as seções de texto) */
 
/* DEPOIS — fluidos com limite máximo */
.slider {
    width: min(600px, 100%);          /* nunca passa de 600px, mas encolhe */
    height: clamp(250px, 40vw, 500px); /* altura proporcional à tela */
}
 
/* Todas as caixas de texto das seções unificadas em uma regra só */
.text-problema,
.text-tecnologia,
.text-objetivo,
.text-publico-alvo,
.text-beneficios,
.text-cotidiano {
    width: min(1300px, 90%);           /* máx 1300px, senão 90% da tela */
    padding: clamp(20px, 4vw, 50px);  /* padding fluido */
    font-size: clamp(15px, 1.5vw, 20px);
}
```

```css
/* ANTES */
.card            { width: 300px; }
.card-beneficio  { width: 400px; }
.card-mapa       { width: 400px; }
 
/* DEPOIS */
.card            { width: clamp(200px, 22vw, 300px); }
.card-beneficio  { width: clamp(260px, 35vw, 400px); }
.card-mapa       { width: clamp(260px, 35vw, 420px); }
```

```css
/* ANTES */
.hero {
    padding: 100px;
    /* sem flex-wrap — o slider transbordava em telas menores */
}
 
/* DEPOIS */
.hero {
    padding: 120px 80px 80px;
    flex-wrap: wrap; /* permite empilhar texto + slider */
    gap: 40px;
}
 
.text-hero {
    flex: 1;
    min-width: 280px; /* garante largura mínima antes de quebrar linha */
}
```

```css
/* ANTES */
footer {
    display: flex;
    justify-content: space-around;
    padding: 80px;
    /* sem flex-wrap — nomes dos alunos transbordavam */
}
 
/* DEPOIS */
footer {
    flex-wrap: wrap;      /* empilha em telas pequenas */
    gap: 20px;
    padding: 40px 30px;   /* padding menor */
    background-color: var(--header-color); /* usa a cor do tema */
    text-align: center;
}
 
.footer-credits {
    font-size: clamp(10px, 1.2vw, 13px);
    max-width: 700px;
    line-height: 1.6;
}
```

# Web Development

## Prompt Utilizado: 

Claude, analise o codigo JS e veja o que pode ser alterado para melhorar o codigo do slideshow, pois durante a responsividade o slideshow está quebrando.

## Retorno:

```js
// ANTES — cálculo único no carregamento
let sliderWidth = document.querySelector('.slider').clientWidth;
document.querySelector('.slider--width').style.width = `${sliderWidth * totalSlides}px`;
 
// DEPOIS — função reutilizável + listener de resize
const initSlider = () => {
    const w = getSlideWidth();
    sliderWidth.style.width = `${w * totalSlides}px`;
    sliderItems.forEach(item => item.style.width = `${w}px`);
    updateMargin();
};
 
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initSlider, 150); // debounce de 150ms
});
```


```js
// ANTES — setInterval simples sem reset
setInterval(goNext, 4000);
 
// DEPOIS — reset do timer ao clicar nas setas manualmente
const resetAutoSlide = () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(goNext, 4000);
};
 
const goNext = () => {
    currentSlide = currentSlide >= totalSlides - 1 ? 0 : currentSlide + 1;
    updateMargin();
    resetAutoSlide(); // reinicia o timer após clique manual
};
```

