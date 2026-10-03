import React, { useState, useEffect } from 'react';

export default function App() {
  // Dynamic current date formatted for Brazil (DD/MM/YYYY)
  const [currentDateFormatted, setCurrentDateFormatted] = useState('03/10/2026');

  // Interactive countdown timer
  const [timeLeft, setTimeLeft] = useState({ minutes: 13, seconds: 17 });

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    try {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      setCurrentDateFormatted(`${day}/${month}/${year}`);
    } catch {
      setCurrentDateFormatted('03/10/2026');
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 14, seconds: 59 }; // loop timer
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const marqueeImages = [
    'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f90fc880-dd24-4f22-ad70-1328deb7239b/materiais-mat_1-1788546130354.webp',
    'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f90fc880-dd24-4f22-ad70-1328deb7239b/materiais-mat_2-1788546133246.webp',
    'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f90fc880-dd24-4f22-ad70-1328deb7239b/materiais-mat_3-1788546136650.webp',
    'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f90fc880-dd24-4f22-ad70-1328deb7239b/materiais-mat_4-1788546140721.webp',
    'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f90fc880-dd24-4f22-ad70-1328deb7239b/materiais-mat_a3b50399-1788546146854.webp',
    'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f90fc880-dd24-4f22-ad70-1328deb7239b/materiais-mat_0815a7c9-1788546159506.webp',
  ];

  const bonuses = [
    {
      num: 1,
      title: 'GUIA VISUAL DOS MODOS DE ESQUEMA',
      desc: 'Receba um manual complementar em PDF para acabar com a maior confusão dos iniciantes: a diferença entre Esquemas (traços) e Modos (estados). Entenda visualmente o que são os Modos Criança, Pais Disfuncionais e Adulto Saudável, facilitando a identificação imediata do estado emocional do seu paciente durante a sessão.',
      img: 'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f90fc880-dd24-4f22-ad70-1328deb7239b/bonus-bonus_1_img-1788547898132.webp',
    },
    {
      num: 2,
      title: 'MAPA DAS NECESSIDADES EMOCIONAIS BÁSICAS',
      desc: 'Receba um infográfico em PDF conectando cada Domínio de Esquema à sua raiz: as necessidades emocionais que não foram atendidas na infância (como apego seguro, autonomia ou limites). O atalho perfeito para você entender a origem da dor do paciente em vez de apenas decorar teorias.',
      img: 'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f90fc880-dd24-4f22-ad70-1328deb7239b/bonus-bonus_2_img-1788547931010.webp',
    },
    {
      num: 3,
      title: 'TABELA DE ESTILOS DE ENFRENTAMENTO',
      desc: 'Receba uma ficha prática em PDF detalhando como os pacientes reagem quando um esquema é ativado: Resignação, Evitação ou Hipercompensação. Aprenda a identificar rapidamente esses padrões comportamentais no discurso do paciente, destravando a compreensão do caso clínico.',
      img: 'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f90fc880-dd24-4f22-ad70-1328deb7239b/bonus-bonus_3_img-1788547948552.webp',
    },
    {
      num: 4,
      title: 'TEMPLATE DE CONCEITUAÇÃO DE CASO CLÍNICO',
      desc: 'Receba um modelo de conceituação estruturado em PDF, pronto para imprimir ou usar no tablet. Organize as informações do seu paciente de forma lógica e visual, conectando a história de vida aos esquemas ativos, sem se perder em anotações bagunçadas.',
      img: 'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f90fc880-dd24-4f22-ad70-1328deb7239b/bonus-bonus_4_img-1788547961663.webp',
    },
    {
      num: 5,
      title: 'MATRIZ DA ORIGEM DOS ESQUEMAS NA INFÂNCIA',
      desc: 'Receba um mapa visual em PDF que cruza os 18 esquemas com os ambientes familiares mais comuns (famílias superprotetoras, críticas, negligentes, etc.). Uma ferramenta de consulta rápida para ajudar você a formular hipóteses clínicas certeiras logo nas primeiras sessões de avaliação.',
      img: 'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f90fc880-dd24-4f22-ad70-1328deb7239b/bonus-bonus_5_img-1788547973672.webp',
    },
    {
      num: 6,
      title: 'GUIA: TCC TRADICIONAL X TERAPIA DO ESQUEMA',
      desc: 'Receba um quadro comparativo em PDF mostrando de forma direta as diferenças entre a Terapia Cognitivo-Comportamental clássica e a Terapia do Esquema. Entenda exatamente quando e por que migrar da TCC para os Esquemas no tratamento de pacientes mais complexos e crônicos.',
      img: 'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f90fc880-dd24-4f22-ad70-1328deb7239b/bonus-bonus_6_img-1788547989813.webp',
    },
    {
      num: 7,
      title: 'DICIONÁRIO VISUAL DE TÉCNICAS VIVENCIAIS',
      desc: 'Receba um resumo prático em PDF das principais intervenções utilizadas na Terapia do Esquema, como Reparentalização Limitada, Trabalho com Cadeiras (Chairwork) e Ressignificação de Imagens (Imagery Rescripting). Tenha clareza sobre o objetivo de cada técnica sem precisar ler capítulos imensos de livros teóricos.',
      img: 'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f90fc880-dd24-4f22-ad70-1328deb7239b/bonus-bonus_7_img-1788548001048.webp',
    },
    {
      num: 8,
      title: 'MAPA DO INVENTÁRIO DE ESQUEMAS DE YOUNG (YSQ)',
      desc: 'Receba um guia de bolso em PDF explicando a estrutura do principal instrumento de avaliação da Terapia do Esquema. Saiba como ler e interpretar os domínios mapeados no questionário para estruturar o seu plano de tratamento com muito mais segurança e embasamento científico.',
      img: 'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f90fc880-dd24-4f22-ad70-1328deb7239b/bonus-bonus_8_img-1788548009592.webp',
    },
  ];

  const faqs = [
    {
      q: 'Como recebo o material?',
      a: 'Após a compra, você recebe um e-mail com acesso imediato ao material em PDF.',
    },
    {
      q: 'Posso imprimir as fichas?',
      a: 'Sim, as fichas estão em formato PDF e podem ser impressas facilmente.',
    },
    {
      q: 'As fichas são adequadas para iniciantes?',
      a: 'Sim, foram elaboradas de forma didática para facilitar o aprendizado.',
    },
    {
      q: 'E se eu não gostar do material?',
      a: 'Você tem 15 dias para solicitar reembolso, sem burocracia.',
    },
    {
      q: 'O acesso é vitalício?',
      a: 'Sim, você terá acesso vitalício ao material após a compra.',
    },
    {
      q: 'Há suporte disponível?',
      a: 'Sim, você pode entrar em contato a qualquer momento para esclarecer dúvidas.',
    },
  ];

  // SVG Check Icon
  const CheckIcon = ({ className = 'h-4 w-4 shrink-0', color = 'var(--pv-success)' }: { className?: string; color?: string }) => (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className} style={{ fill: color }}>
      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
    </svg>
  );

  const StarIcon = () => (
    <svg aria-hidden="true" viewBox="0 0 1000 1000" className="h-5 w-5" style={{ fill: '#FBB03B' }}>
      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-[var(--pv-bg)] text-[var(--pv-text)] font-[var(--pv-font-body)] text-[18px] leading-[1.6]">
      {/* SEÇÃO 0 - BARRA DE ANÚNCIO */}
      <div id="secao-0" className="scroll-mt-20">
        <div className="w-full text-center text-base sm:text-lg py-3.5 px-4 font-bold tracking-wide bg-[#ff0000] text-white">
          ⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE <span>{currentDateFormatted}</span>
        </div>
      </div>

      {/* SEÇÃO 1 - HERO */}
      <div id="secao-1" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[#f1efef] text-white">
          <div className="max-w-[var(--pv-container)] mx-auto">
            <div className="text-center max-w-3xl mx-auto -mt-6 sm:mt-0">
              <span className="inline-block text-sm sm:text-base font-bold px-6 py-2 rounded-full mb-5 bg-[#00ff11] text-[var(--pv-primary)] shadow-sm">
                <span>🔒 Compra 100% Segura e Protegida</span>
              </span>

              <h1 className="text-[28px] sm:text-[42px] lg:text-[46px] font-extrabold tracking-tight leading-[1.1] mb-4 text-[#ae00ff] font-[var(--pv-font-heading)]">
                18 FICHAS VISUAIS PARA ENTENDER E REVISAR OS ESQUEMAS DA TERAPIA DO ESQUEMA SEM SE PERDER EM CONTEÚDOS LONGOS E FRAGMENTADOS
              </h1>

              <div className="my-[15px]">
                <img
                  src="https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f90fc880-dd24-4f22-ad70-1328deb7239b/hero-mockup_hero-1788540977845.webp"
                  width="699"
                  height="700"
                  alt="Guia Visual da Terapia do Esquema Mockup"
                  className="max-h-[520px] mx-auto object-contain rounded-[var(--pv-radius)] drop-shadow-xl"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mt-4 text-[#000000] font-bold">
                Tenha cada esquema, seu domínio e suas principais características organizados em uma ficha de consulta rápida, clara e direta ao ponto para estudar, revisar e consultar sempre que precisar.
              </p>

              <div className="mt-8 flex justify-center">
                <ul className="space-y-3 text-left inline-block">
                  <li className="flex gap-3 items-center text-lg sm:text-xl font-semibold">
                    <CheckIcon />
                    <span className="text-[#ae00ff]">Esquemas, domínios e características mapeados</span>
                  </li>
                  <li className="flex gap-3 items-center text-lg sm:text-xl font-semibold">
                    <CheckIcon />
                    <span className="text-[#ae00ff]">Frases típicas e pistas clínicas para consulta rápida</span>
                  </li>
                  <li className="flex gap-3 items-center text-lg sm:text-xl font-semibold">
                    <CheckIcon />
                    <span className="text-[#bd00ff]">Estilos de enfrentamento detalhados para cada esquema</span>
                  </li>
                  <li className="flex gap-3 items-center text-lg sm:text-xl font-semibold">
                    <CheckIcon />
                    <span className="text-[#bd00fc]">Ideal para revisar antes de provas, supervisões ou sessões clínicas</span>
                  </li>
                  <li className="flex gap-3 items-center text-lg sm:text-xl font-semibold">
                    <CheckIcon />
                    <span className="text-[#bd00fc]">Sem jargões, direto ao ponto e pronto para imprimir</span>
                  </li>
                </ul>
              </div>

              <div className="mt-9">
                <a
                  href="#planos"
                  className="px-10 py-5 text-[18px] sm:text-[20px] inline-block text-center transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98] bg-[var(--pv-success)] text-white font-semibold rounded-full uppercase tracking-tight shadow-[0_14px_30px_-10px_rgba(57,181,116,0.55)] cursor-pointer"
                >
                  <span>QUERO AS FICHAS DE TERAPIA DO ESQUEMA</span>
                </a>
              </div>

              <p className="text-xs sm:text-sm text-black font-semibold mt-4">
                📲 <span>Você recebe tudo na hora, direto no seu WhatsApp e e-mail.</span>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 2 - MARQUEE CAROUSEL DE MATERIAIS */}
      <div id="secao-2" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[#fce9d8] text-[var(--pv-text)]">
          <div className="max-w-[var(--pv-container)] mx-auto">
            <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] text-center font-extrabold tracking-tight leading-[1.1] font-[var(--pv-font-heading)]">
              VEJA AS FICHAS VISUAIS QUE VOCE JÁ VAI RECEBER
            </h2>

            <div className="mt-10 overflow-hidden relative w-full">
              <div className="mvt-track-scroll py-4">
                {/* 1st set */}
                {marqueeImages.map((src, index) => (
                  <div key={`m1-${index}`} className="flex-none px-3 flex items-center">
                    <img
                      src={src}
                      alt={`Ficha Visual ${index + 1}`}
                      className="h-[280px] sm:h-[420px] w-auto object-contain rounded-lg drop-shadow-md select-none"
                      loading="lazy"
                    />
                  </div>
                ))}
                {/* 2nd set for infinite loop */}
                {marqueeImages.map((src, index) => (
                  <div key={`m2-${index}`} className="flex-none px-3 flex items-center">
                    <img
                      src={src}
                      alt={`Ficha Visual ${index + 1}`}
                      className="h-[280px] sm:h-[420px] w-auto object-contain rounded-lg drop-shadow-md select-none"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 3 - CHECKLIST DE ENTREGA */}
      <div id="secao-3" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[var(--pv-cream)] text-[var(--pv-text)]">
          <div className="max-w-[var(--pv-container)] mx-auto">
            <h2 className="text-[32px] sm:text-[46px] lg:text-[52px] text-center font-extrabold tracking-tight leading-[1.1] font-[var(--pv-font-heading)]">
              AS FICHAS VISUAIS POSSUEM:
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mt-12 max-w-4xl mx-auto">
              <div className="rounded-[14px] p-5 flex gap-4 items-center bg-white border border-black/6 transition-transform duration-300 hover:scale-[1.03] shadow-sm">
                <img src="/mvt/laser.png" alt="Esquemas detalhados" className="h-12 w-12 shrink-0 object-contain" loading="lazy" />
                <span className="font-semibold text-base sm:text-lg leading-snug">Esquemas detalhados — clareza nas características de cada um.</span>
              </div>
              <div className="rounded-[14px] p-5 flex gap-4 items-center bg-white border border-black/6 transition-transform duration-300 hover:scale-[1.03] shadow-sm">
                <img src="/mvt/scale.png" alt="Mapas visuais" className="h-12 w-12 shrink-0 object-contain" loading="lazy" />
                <span className="font-semibold text-base sm:text-lg leading-snug">Mapas visuais — rápida identificação dos domínios.</span>
              </div>
              <div className="rounded-[14px] p-5 flex gap-4 items-center bg-white border border-black/6 transition-transform duration-300 hover:scale-[1.03] shadow-sm">
                <img src="/mvt/manual-book.png" alt="Didática acessível" className="h-12 w-12 shrink-0 object-contain" loading="lazy" />
                <span className="font-semibold text-base sm:text-lg leading-snug">Didática acessível — ideal para revisão e estudo.</span>
              </div>
              <div className="rounded-[14px] p-5 flex gap-4 items-center bg-white border border-black/6 transition-transform duration-300 hover:scale-[1.03] shadow-sm">
                <img src="/mvt/download.png" alt="Pistas clínicas" className="h-12 w-12 shrink-0 object-contain" loading="lazy" />
                <span className="font-semibold text-base sm:text-lg leading-snug">Pistas clínicas — facilite a conceitualização diagnóstica.</span>
              </div>
              <div className="rounded-[14px] p-5 flex gap-4 items-center bg-white border border-black/6 transition-transform duration-300 hover:scale-[1.03] shadow-sm sm:col-span-2 sm:max-w-md sm:mx-auto sm:w-full">
                <img src="/mvt/folders-1.png" alt="Acesso em PDF" className="h-12 w-12 shrink-0 object-contain" loading="lazy" />
                <span className="font-semibold text-base sm:text-lg leading-snug">Acesso em PDF — consulte em qualquer dispositivo.</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 4 - DOR AMPLIFICADA COM TIMER */}
      <div id="secao-4" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[#ae00ff] text-white">
          <div className="max-w-[var(--pv-container)] mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-2xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.15] font-[var(--pv-font-heading)]">
                QUANTAS VEZES VOCÊ SE PERDEU EM CONCEITOS DA TERAPIA DO ESQUEMA?
              </h2>

              <p className="text-lg sm:text-xl lg:text-2xl font-semibold opacity-95">
                Aproveite a oferta por tempo limitado.
              </p>

              <div className="flex gap-6 justify-center pt-2 text-white items-center">
                <div className="text-center bg-black/20 px-5 py-3 rounded-xl min-w-[90px]">
                  <div className="text-4xl sm:text-5xl font-black tabular-nums">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-xs uppercase tracking-wider opacity-80 mt-1 font-semibold">Minutos</div>
                </div>
                <div className="text-4xl sm:text-5xl font-black tabular-nums -mt-4">:</div>
                <div className="text-center bg-black/20 px-5 py-3 rounded-xl min-w-[90px]">
                  <div className="text-4xl sm:text-5xl font-black tabular-nums">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-xs uppercase tracking-wider opacity-80 mt-1 font-semibold">Segundos</div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#planos"
                  className="px-10 py-5 text-[18px] sm:text-[20px] inline-block text-center transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98] bg-[var(--pv-success)] text-white font-semibold rounded-full uppercase tracking-tight shadow-[0_14px_30px_-10px_rgba(57,181,116,0.55)] cursor-pointer"
                >
                  <span>QUERO ACESSAR AGORA E USAR HOJE</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 5 - PARA QUEM É IDEAL */}
      <div id="secao-5" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[var(--pv-bg)] text-[var(--pv-text)]">
          <div className="max-w-[var(--pv-container)] mx-auto">
            <h2 className="text-[30px] sm:text-[46px] lg:text-[54px] text-center font-extrabold tracking-tight leading-[1.1] font-[var(--pv-font-heading)]">
              ESTE GUIA É IDEAL PARA VOCÊ QUE DESEJA
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mt-12">
              <div className="p-6 rounded-[14px] flex gap-3 items-start bg-[var(--pv-mint)] border border-[var(--pv-mint-border)] transition-transform duration-300 hover:scale-[1.03]">
                <span className="shrink-0 mt-1">
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="font-black uppercase text-lg sm:text-xl mb-2 leading-tight tracking-tight">
                    COMPREENDER OS ESQUEMAS DE FORMA ORGANIZADA
                  </h3>
                  <p className="text-base sm:text-lg opacity-85 leading-relaxed font-semibold">
                    Obtenha uma visão organizada e simplificada dos esquemas da Terapia do Esquema.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-[14px] flex gap-3 items-start bg-[var(--pv-mint)] border border-[var(--pv-mint-border)] transition-transform duration-300 hover:scale-[1.03]">
                <span className="shrink-0 mt-1">
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="font-black uppercase text-lg sm:text-xl mb-2 leading-tight tracking-tight">
                    REVISAR RÁPIDO ANTES DAS PROVAS
                  </h3>
                  <p className="text-base sm:text-lg opacity-85 leading-relaxed font-semibold">
                    Tenha um material de consulta rápida para revisar os conceitos principais.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-[14px] flex gap-3 items-start bg-[var(--pv-mint)] border border-[var(--pv-mint-border)] transition-transform duration-300 hover:scale-[1.03]">
                <span className="shrink-0 mt-1">
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="font-black uppercase text-lg sm:text-xl mb-2 leading-tight tracking-tight">
                    APLICAR O CONHECIMENTO NA PRÁTICA
                  </h3>
                  <p className="text-base sm:text-lg opacity-85 leading-relaxed font-semibold">
                    Utilize as fichas para facilitar a conceituação durante as sessões.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-[14px] flex gap-3 items-start bg-[var(--pv-mint)] border border-[var(--pv-mint-border)] transition-transform duration-300 hover:scale-[1.03]">
                <span className="shrink-0 mt-1">
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="font-black uppercase text-lg sm:text-xl mb-2 leading-tight tracking-tight">
                    EVITAR A CONFUSÃO COM CONTEÚDOS LONGOS
                  </h3>
                  <p className="text-base sm:text-lg opacity-85 leading-relaxed font-semibold">
                    Estude de forma direta, sem perder tempo com jargões desnecessários.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-[14px] flex gap-3 items-start bg-[var(--pv-mint)] border border-[var(--pv-mint-border)] transition-transform duration-300 hover:scale-[1.03]">
                <span className="shrink-0 mt-1">
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="font-black uppercase text-lg sm:text-xl mb-2 leading-tight tracking-tight">
                    INICIAR NA TERAPIA DO ESQUEMA
                  </h3>
                  <p className="text-base sm:text-lg opacity-85 leading-relaxed font-semibold">
                    Ideal para estudantes e psicólogos iniciantes que buscam clareza.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-[14px] flex gap-3 items-start bg-[var(--pv-mint)] border border-[var(--pv-mint-border)] transition-transform duration-300 hover:scale-[1.03]">
                <span className="shrink-0 mt-1">
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="font-black uppercase text-lg sm:text-xl mb-2 leading-tight tracking-tight">
                    TER ACESSO IMEDIATO AOS MATERIAIS
                  </h3>
                  <p className="text-base sm:text-lg opacity-85 leading-relaxed font-semibold">
                    Receba tudo no seu e-mail e comece a estudar agora mesmo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 6 - PACOTE COMPLETO DETALHADO */}
      <div id="secao-6" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[var(--pv-pink)] text-[var(--pv-text)]">
          <div className="max-w-[var(--pv-container)] mx-auto">
            <h2 className="text-[32px] sm:text-[48px] lg:text-[56px] text-center font-extrabold tracking-tight leading-[1.1] font-[var(--pv-font-heading)]">
              TUDO O QUE VOCÊ VAI RECEBER
            </h2>

            <div className="max-w-2xl mx-auto mt-10 rounded-[var(--pv-radius)] overflow-hidden p-8 sm:p-10 space-y-6 bg-[#9B59B6] text-white shadow-xl">
              <div className="text-center">
                <span className="inline-block text-base sm:text-lg font-extrabold px-6 py-2.5 rounded-full bg-[var(--pv-success)] text-white shadow">
                  ⚡ ACESSO IMEDIATO
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-center font-extrabold tracking-tight leading-[1.1] font-[var(--pv-font-heading)]">
                TUDO FOI ORGANIZADO PARA SER SIMPLES E FÁCIL DE APLICAR.
              </h3>

              <p className="text-center text-base sm:text-lg opacity-90">
                Você escolhe o modelo e já pode começar na mesma hora.
              </p>

              <img
                src="https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f90fc880-dd24-4f22-ad70-1328deb7239b/pacote-mockup_pacote-1788546491094.webp"
                width="700"
                height="700"
                alt="Pacote completo mockup"
                className="w-full max-h-[420px] object-contain rounded-[12px]"
                loading="lazy"
              />

              <ul className="divide-y divide-white/10">
                <li className="flex gap-3 items-start py-3.5 text-base sm:text-lg">
                  <CheckIcon color="#fff" />
                  <span>18 FICHAS VISUAIS EXPLICADAS</span>
                </li>
                <li className="flex gap-3 items-start py-3.5 text-base sm:text-lg">
                  <CheckIcon color="#fff" />
                  <span>5 DOMÍNIOS DE ESQUEMAS MAPEADOS</span>
                </li>
                <li className="flex gap-3 items-start py-3.5 text-base sm:text-lg">
                  <CheckIcon color="#fff" />
                  <span>PISTAS CLÍNICAS E FRASES TÍPICAS</span>
                </li>
                <li className="flex gap-3 items-start py-3.5 text-base sm:text-lg">
                  <CheckIcon color="#fff" />
                  <span>ESTILOS DE ENFRENTAMENTO DESADAPTATIVOS</span>
                </li>
                <li className="flex gap-3 items-start py-3.5 text-base sm:text-lg">
                  <CheckIcon color="#fff" />
                  <span>DIDÁTICA DIRETA AO PONTO</span>
                </li>
                <li className="flex gap-3 items-start py-3.5 text-base sm:text-lg">
                  <CheckIcon color="#fff" />
                  <span>ACESSO IMEDIATO E VITALÍCIO</span>
                </li>
                <li className="flex gap-3 items-start py-3.5 text-base sm:text-lg">
                  <CheckIcon color="#fff" />
                  <span>GUIA VISUAL DOS MODOS DE ESQUEMA</span>
                </li>
                <li className="flex gap-3 items-start py-3.5 text-base sm:text-lg">
                  <CheckIcon color="#fff" />
                  <span>MAPA DAS NECESSIDADES EMOCIONAIS BÁSICAS</span>
                </li>
                <li className="flex gap-3 items-start py-3.5 text-base sm:text-lg">
                  <CheckIcon color="#fff" />
                  <span>TABELA DE ESTILOS DE ENFRENTAMENTO</span>
                </li>
                <li className="flex gap-3 items-start py-3.5 text-base sm:text-lg">
                  <CheckIcon color="#fff" />
                  <span>E muito mais…</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 7 - 8 BÔNUS EXCLUSIVOS */}
      <div id="secao-7" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[var(--pv-pink)] text-[var(--pv-text)]">
          <div className="max-w-[var(--pv-container)] mx-auto">
            <h2 className="text-[32px] sm:text-[48px] lg:text-[56px] text-center font-extrabold tracking-tight leading-[1.1] font-[var(--pv-font-heading)]">
              E NÃO PARA POR AÍ... TEM MAIS!
            </h2>
            <p className="text-center text-2xl sm:text-3xl italic font-bold opacity-90 mt-5">
              Você também vai receber…
            </p>

            <div className="text-center mt-5 mb-12">
              <span className="inline-block text-base sm:text-lg font-extrabold px-7 py-3 rounded-full bg-[var(--pv-accent)] text-white shadow-md">
                🎁 8 BÔNUS EXCLUSIVOS
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {bonuses.map((bonus) => (
                <div
                  key={bonus.num}
                  className="rounded-[14px] overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.03] bg-[var(--pv-cream)] border border-black/5 shadow-sm"
                >
                  <div className="relative bg-black/[0.04] flex items-center justify-center">
                    <img
                      src={bonus.img}
                      width="700"
                      height="394"
                      alt={bonus.title}
                      className="h-72 sm:h-80 w-full object-contain p-3"
                      loading="lazy"
                    />
                    <span className="absolute top-3 right-3 text-xs sm:text-sm font-extrabold px-3 py-1.5 rounded-md bg-[#FFE08A] text-[#2D1107] shadow-sm">
                      BÔNUS #{bonus.num}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col gap-3">
                    <h3 className="font-black leading-tight text-xl sm:text-2xl font-[var(--pv-font-heading)] text-black">
                      {bonus.title}
                    </h3>
                    <p className="text-sm sm:text-base opacity-85 leading-relaxed">
                      {bonus.desc}
                    </p>
                    <div className="mt-auto pt-3 flex justify-center">
                      <div className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold px-5 py-2.5 rounded-full bg-[#1F1410] text-white">
                        <span className="opacity-80">Valor:</span>
                        <s className="opacity-60">R$27</s>
                        <span className="font-extrabold text-[#FFE08A]">GRÁTIS</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 8 - PLANOS DE PREÇOS */}
      <div id="secao-8" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[var(--pv-bg)] text-[var(--pv-text)]">
          <div className="max-w-[var(--pv-container)] mx-auto">
            <div id="planos" className="scroll-mt-20">
              <div className="text-center mb-12 space-y-5">
                <span className="inline-block text-base sm:text-lg font-extrabold px-7 py-3.5 rounded-full bg-[var(--pv-accent)] text-white shadow-md">
                  🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE
                </span>
                <h2 className="text-[32px] sm:text-[48px] lg:text-[56px] text-center font-extrabold tracking-tight leading-[1.1] font-[var(--pv-font-heading)]">
                  ESCOLHA A MELHOR OPÇÃO PARA VOCÊ
                </h2>
                <div className="mx-auto h-[3px] w-24 rounded-full bg-[var(--pv-text)]" />
              </div>

              <div className="grid gap-8 mx-auto items-stretch md:grid-cols-2 max-w-5xl">
                {/* PLANO BÁSICO */}
                <div className="rounded-[var(--pv-radius)] p-6 sm:p-8 flex flex-col gap-5 overflow-hidden bg-[var(--pv-cream)] text-[var(--pv-text)] border border-black/10 shadow-lg">
                  <h3 className="text-3xl sm:text-4xl text-center font-extrabold tracking-tight leading-[1.1] font-[var(--pv-font-heading)]">
                    PLANO BÁSICO
                  </h3>

                  <img
                    src="https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f90fc880-dd24-4f22-ad70-1328deb7239b/planos-basico_mockup-1788547628223.webp"
                    width="408"
                    height="612"
                    alt="Plano Básico Mockup"
                    className="h-72 sm:h-80 w-full object-contain"
                    loading="lazy"
                  />

                  <p className="text-base font-bold">Você recebe:</p>

                  <ul className="divide-y divide-black/10">
                    <li className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                      <CheckIcon />
                      <span>18 FICHAS VISUAIS EXPLICADAS</span>
                    </li>
                    <li className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                      <CheckIcon />
                      <span>ACESSO IMEDIATO E VITALÍCIO</span>
                    </li>
                    <li className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                      <CheckIcon />
                      <span>DIDÁTICA DIRETA AO PONTO</span>
                    </li>
                    <li className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                      <CheckIcon />
                      <span>IDEAL PARA ESTUDANTES E TERAPEUTAS</span>
                    </li>
                  </ul>

                  <div className="text-center mt-auto pt-4">
                    <p className="text-sm sm:text-base line-through opacity-70 text-[#ff0000] font-bold">
                      de <span>R$97,90</span> por:
                    </p>
                    <p className="text-5xl sm:text-6xl mt-1 font-extrabold tracking-tight text-[var(--pv-success)] font-[var(--pv-font-heading)]">
                      R$ 17,90
                    </p>
                    <p className="text-sm sm:text-base mt-2 font-semibold flex items-center justify-center gap-1.5">
                      <span className="text-[var(--pv-success)] font-bold">●</span> Você economiza <strong>R$80,00</strong>
                    </p>
                  </div>

                  {/* Checkout URL Card 1 */}
                  <a
                    href="https://pay.lowify.com.br/checkout.php?product_id=rcW7yt"
                    className="px-8 py-4 text-[18px] w-full inline-block text-center transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98] bg-[var(--pv-success)] text-white font-semibold rounded-full uppercase tracking-tight shadow-[0_14px_30px_-10px_rgba(57,181,116,0.55)] cursor-pointer"
                  >
                    QUERO O PLANO BÁSICO
                  </a>

                  <div className="md:hidden -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 flex items-center justify-center gap-2 text-sm sm:text-base font-bold px-5 py-3 text-center bg-[#FFD54A] text-[var(--pv-text)]">
                    <span>92% das pessoas aproveitam o plano abaixo</span> 👇
                  </div>
                </div>

                {/* PLANO COMPLETO */}
                <div className="rounded-[var(--pv-radius)] p-6 sm:p-8 flex flex-col gap-5 relative bg-[#7D3C98] text-white shadow-[0_30px_60px_-25px_rgba(0,0,0,0.45)] border-2 border-purple-400">
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-base sm:text-lg font-extrabold px-6 py-2.5 rounded-full whitespace-nowrap bg-[var(--pv-success)] text-white shadow-lg animate-pv-pulse">
                    ⚡ MAIS VENDIDO
                  </span>

                  <div className="text-center pt-2">
                    <span className="inline-block text-sm sm:text-base font-extrabold px-5 py-2 rounded-full bg-[var(--pv-accent)] text-white shadow">
                      🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl text-center font-extrabold tracking-tight leading-[1.1] text-white font-[var(--pv-font-heading)]">
                    PLANO COMPLETO
                  </h3>

                  <img
                    src="https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f90fc880-dd24-4f22-ad70-1328deb7239b/planos-completo_mockup-1788548321043.webp"
                    width="700"
                    height="700"
                    alt="Plano Completo Mockup"
                    className="h-72 sm:h-80 w-full object-contain"
                    loading="lazy"
                  />

                  <div className="text-center text-base sm:text-lg font-extrabold rounded-full py-2.5 bg-[#2ecc71]/25 text-[#4eff98]">
                    ⚡ 2x MAIS CONTEÚDOS
                  </div>

                  <ul className="divide-y divide-white/10">
                    <li className="flex gap-3 text-base sm:text-lg items-start py-3">
                      <CheckIcon color="#4eff98" />
                      <span>18 FICHAS VISUAIS EXPLICADAS</span>
                    </li>
                    <li className="flex gap-3 text-base sm:text-lg items-start py-3">
                      <CheckIcon color="#4eff98" />
                      <span>🎁 GUIA VISUAL DOS MODOS DE ESQUEMA</span>
                    </li>
                    <li className="flex gap-3 text-base sm:text-lg items-start py-3">
                      <CheckIcon color="#4eff98" />
                      <span>🎁 MAPA DAS NECESSIDADES EMOCIONAIS BÁSICAS</span>
                    </li>
                    <li className="flex gap-3 text-base sm:text-lg items-start py-3">
                      <CheckIcon color="#4eff98" />
                      <span>🎁 TABELA DE ESTILOS DE ENFRENTAMENTO</span>
                    </li>
                    <li className="flex gap-3 text-base sm:text-lg items-start py-3">
                      <CheckIcon color="#4eff98" />
                      <span>🎁 TEMPLATE DE CONCEITUAÇÃO DE CASO CLÍNICO</span>
                    </li>
                    <li className="flex gap-3 text-base sm:text-lg items-start py-3">
                      <CheckIcon color="#4eff98" />
                      <span>🎁 MATRIZ DA ORIGEM DOS ESQUEMAS NA INFÂNCIA</span>
                    </li>
                    <li className="flex gap-3 text-base sm:text-lg items-start py-3">
                      <CheckIcon color="#4eff98" />
                      <span>🎁 GUIA: TCC TRADICIONAL X TERAPIA DO ESQUEMA</span>
                    </li>
                    <li className="flex gap-3 text-base sm:text-lg items-start py-3">
                      <CheckIcon color="#4eff98" />
                      <span>🎁 DICIONÁRIO VISUAL DE TÉCNICAS VIVENCIAIS</span>
                    </li>
                    <li className="flex gap-3 text-base sm:text-lg items-start py-3">
                      <CheckIcon color="#4eff98" />
                      <span>🎁 MAPA DO INVENTÁRIO DE ESQUEMAS DE YOUNG (YSQ)</span>
                    </li>
                    <li className="flex gap-3 text-base sm:text-lg items-start py-3">
                      <CheckIcon color="#4eff98" />
                      <span>E MUITO MAIS...</span>
                    </li>
                  </ul>

                  <div className="text-center mt-auto pt-4">
                    <p className="text-sm sm:text-base line-through text-[#ff8080] font-bold">
                      de <strong>R$197,90</strong> por:
                    </p>
                    <p className="text-5xl sm:text-6xl mt-1 font-extrabold tracking-tight text-[#4eff98] font-[var(--pv-font-heading)]">
                      R$ 27,90
                    </p>
                    <p className="text-sm sm:text-base mt-2 font-semibold flex items-center justify-center gap-1.5">
                      <span className="text-[#4eff98] font-bold">●</span> Você economiza <strong>R$170,00</strong>
                    </p>
                  </div>

                  {/* Checkout URL Card 2 */}
                  <a
                    href="https://pay.lowify.com.br/go.php?offer=bd965312"
                    className="px-8 py-4 text-[18px] w-full inline-block text-center transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98] bg-[var(--pv-success)] text-white font-semibold rounded-full uppercase tracking-tight shadow-[0_14px_30px_-10px_rgba(57,181,116,0.55)] cursor-pointer"
                  >
                    QUERO O PLANO COMPLETO
                  </a>

                  <div className="flex justify-center pt-2">
                    <img
                      src="/mvt/icons-meio-de-pagamento-e1738718378460-2-1.png"
                      alt="Meios de pagamento aceitos"
                      className="h-7 object-contain opacity-95"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Callout de garantia dos estudos */}
              <div className="mt-10 max-w-3xl mx-auto rounded-[14px] p-6 flex gap-4 items-center bg-[var(--pv-mint)] border border-[var(--pv-mint-border)] shadow-sm">
                <span className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-lg font-bold bg-[var(--pv-success)] text-white">
                  ✓
                </span>
                <div>
                  <p className="font-extrabold uppercase text-base sm:text-lg">
                    O GUIA PODE GARANTIR O SEUS ESTUDOS.
                  </p>
                  <p className="text-base sm:text-lg opacity-85 mt-0.5">
                    De forma prática e visual
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base mt-6 text-center font-medium opacity-80">
                🔒 <strong>Compra 100% segura e garantida.</strong>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 9 - DEPOIMENTOS */}
      <div id="secao-9" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[var(--pv-bg)] text-[var(--pv-text)]">
          <div className="max-w-[var(--pv-container)] mx-auto">
            <h2 className="text-[32px] sm:text-[46px] lg:text-[54px] text-center font-extrabold tracking-tight leading-[1.1] font-[var(--pv-font-heading)]">
              VEJA O QUE NOSSOS CLIENTES ESTÃO DIZENDO
            </h2>
            <p className="text-center mt-3 text-base sm:text-lg opacity-80 font-bold">
              Leia os depoimentos de quem já tomou a decisão certa.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
              {/* Depoimento 1 */}
              <div className="bg-white/80 p-6 rounded-2xl border border-black/5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-0.5 mb-4" aria-label="5 de 5 estrelas">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed mb-5 italic text-[#2D1107]">
                    "Eu estava desesperada para a prova de TCC e abordagens integrativas. Eram mais de 300 páginas de texto denso e eu sempre confundia Subjugação com Auto-sacrifício e os domínios. As 18 fichas organizaram minha cabeça de um jeito impressionante. Tirei nota máxima e agora levo o PDF para a supervisão do estágio clínico!"
                  </p>
                </div>
                <div>
                  <p className="font-bold text-base sm:text-lg">GABRIELA S.</p>
                  <p className="text-sm opacity-70">Estudante do 9º período de Psicologia (SP)</p>
                </div>
              </div>

              {/* Depoimento 2 */}
              <div className="bg-white/80 p-6 rounded-2xl border border-black/5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-0.5 mb-4" aria-label="5 de 5 estrelas">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed mb-5 italic text-[#2D1107]">
                    "Material cirúrgico e direto ao ponto. Quando comecei a atender na clínica, sentia muita insegurança para identificar os esquemas nas primeiras sessões. Ter esse resumo visual no tablet para consultar entre um paciente e outro me deu muito mais segurança na conceitualização de caso. Recomendo de olhos fechados."
                  </p>
                </div>
                <div>
                  <p className="font-bold text-base sm:text-lg">RODRIGO M.</p>
                  <p className="text-sm opacity-70">Psicólogo Clínico Recém-Formado (RJ)</p>
                </div>
              </div>

              {/* Depoimento 3 */}
              <div className="bg-white/80 p-6 rounded-2xl border border-black/5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-0.5 mb-4" aria-label="5 de 5 estrelas">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed mb-5 italic text-[#2D1107]">
                    "Sensacional! A clareza visual dos 5 domínios e a divisão das crenças centrais é didática pura. O bônus sobre modos esquemáticos e estilos de enfrentamento complementou perfeitamente. Fica salvo no meu celular e sempre reviso antes das sessões de estudo. Valeu muito a pena."
                  </p>
                </div>
                <div>
                  <p className="font-bold text-base sm:text-lg">JULIANA C.</p>
                  <p className="text-sm opacity-70">Psicóloga e Pós-Graduanda em Terapias Cognitivas (PR)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 10 - GARANTIA 15 DIAS */}
      <div id="secao-10" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-white text-[var(--pv-text)]">
          <div className="max-w-[var(--pv-container)] mx-auto">
            <div className="max-w-4xl mx-auto grid sm:grid-cols-[260px_1fr] gap-10 items-center">
              <div className="flex justify-center">
                <img
                  src="/mvt/garantia-15-dias-1.png"
                  alt="Garantia incondicional de 15 dias"
                  className="w-full max-w-[280px] object-contain drop-shadow-md"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-[28px] sm:text-[40px] lg:text-[44px] mb-4 font-extrabold tracking-tight leading-[1.15] font-[var(--pv-font-heading)]">
                  GARANTIA DE 15 DIAS — ZERO RISCO PRA VOCÊ
                </h2>
                <p className="text-base sm:text-lg mb-4 leading-relaxed">
                  <strong>Isso significa que,</strong> a qualquer momento, se você achar que:
                </p>
                <ul className="space-y-3 mb-5">
                  <li className="flex gap-2.5 items-center text-base sm:text-lg font-medium">
                    <span className="h-2 w-2 rounded-full bg-[var(--pv-accent)]" />
                    <span>o material não faz sentido para sua prática</span>
                  </li>
                  <li className="flex gap-2.5 items-center text-base sm:text-lg font-medium">
                    <span className="h-2 w-2 rounded-full bg-[var(--pv-accent)]" />
                    <span>as fichas não atendem suas necessidades</span>
                  </li>
                  <li className="flex gap-2.5 items-center text-base sm:text-lg font-medium">
                    <span className="h-2 w-2 rounded-full bg-[var(--pv-accent)]" />
                    <span>ou simplesmente não quiser continuar</span>
                  </li>
                </ul>
                <p className="opacity-90 text-base sm:text-lg leading-relaxed">
                  Você pode solicitar o reembolso. Sem prazo, sem burocracia. O risco fica todo do nosso lado.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 11 - COMO É O ACESSO */}
      <div id="secao-11" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[var(--pv-bg)] text-[var(--pv-text)]">
          <div className="max-w-[var(--pv-container)] mx-auto">
            <h2 className="text-[32px] sm:text-[46px] lg:text-[54px] text-center font-extrabold tracking-tight leading-[1.1] font-[var(--pv-font-heading)]">
              COMO É O ACESSO
            </h2>
            <p className="text-center opacity-70 mt-3 uppercase text-xs sm:text-sm tracking-[0.25em] font-bold">
              (Veja como é simples receber seu material.)
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
              {/* Passo 1 */}
              <div className="text-center px-3 group bg-white/60 p-6 rounded-2xl border border-black/5 hover:bg-white transition-all shadow-sm">
                <img
                  src="/mvt/order.png"
                  alt="Conclua sua compra"
                  className="h-16 w-16 mx-auto mb-4 object-contain transition-transform duration-300 group-hover:-translate-y-2"
                  loading="lazy"
                />
                <h3 className="font-black mb-2 text-xl sm:text-2xl tracking-tight font-[var(--pv-font-heading)]">
                  Conclua sua compra
                </h3>
                <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                  Após o pagamento, seu acesso é liberado automaticamente.
                </p>
                <ul className="mt-4 space-y-2 text-left text-sm opacity-90">
                  <li className="flex gap-2 items-center">
                    <CheckIcon className="h-3.5 w-3.5" />
                    <span>Você receberá um e-mail</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <CheckIcon className="h-3.5 w-3.5" />
                    <span>Confirme seu acesso</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <CheckIcon className="h-3.5 w-3.5" />
                    <span>Acesse o material no dispositivo</span>
                  </li>
                </ul>
              </div>

              {/* Passo 2 */}
              <div className="text-center px-3 group bg-white/60 p-6 rounded-2xl border border-black/5 hover:bg-white transition-all shadow-sm">
                <img
                  src="/mvt/member-card.png"
                  alt="Entre na área de membros"
                  className="h-16 w-16 mx-auto mb-4 object-contain transition-transform duration-300 group-hover:-translate-y-2"
                  loading="lazy"
                />
                <h3 className="font-black mb-2 text-xl sm:text-2xl tracking-tight font-[var(--pv-font-heading)]">
                  Entre na área de membros
                </h3>
                <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                  Acesse as fichas visuais e bônus.
                </p>
                <ul className="mt-4 space-y-2 text-left text-sm opacity-90">
                  <li className="flex gap-2 items-center">
                    <CheckIcon className="h-3.5 w-3.5" />
                    <span>Acesse diretamente pelo link</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <CheckIcon className="h-3.5 w-3.5" />
                    <span>Navegue pelos conteúdos</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <CheckIcon className="h-3.5 w-3.5" />
                    <span>Baixe o que precisar</span>
                  </li>
                </ul>
              </div>

              {/* Passo 3 */}
              <div className="text-center px-3 group bg-white/60 p-6 rounded-2xl border border-black/5 hover:bg-white transition-all shadow-sm">
                <img
                  src="/mvt/folders-1.png"
                  alt="Baixe os arquivos"
                  className="h-16 w-16 mx-auto mb-4 object-contain transition-transform duration-300 group-hover:-translate-y-2"
                  loading="lazy"
                />
                <h3 className="font-black mb-2 text-xl sm:text-2xl tracking-tight font-[var(--pv-font-heading)]">
                  Baixe os arquivos
                </h3>
                <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                  Salve as fichas no seu dispositivo.
                </p>
                <ul className="mt-4 space-y-2 text-left text-sm opacity-90">
                  <li className="flex gap-2 items-center">
                    <CheckIcon className="h-3.5 w-3.5" />
                    <span>Imprima se preferir</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <CheckIcon className="h-3.5 w-3.5" />
                    <span>Use no tablet ou celular</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <CheckIcon className="h-3.5 w-3.5" />
                    <span>Facilidade de consulta</span>
                  </li>
                </ul>
              </div>

              {/* Passo 4 */}
              <div className="text-center px-3 group bg-white/60 p-6 rounded-2xl border border-black/5 hover:bg-white transition-all shadow-sm">
                <img
                  src="/mvt/digital-drawing.png"
                  alt="Use e aplique"
                  className="h-16 w-16 mx-auto mb-4 object-contain transition-transform duration-300 group-hover:-translate-y-2"
                  loading="lazy"
                />
                <h3 className="font-black mb-2 text-xl sm:text-2xl tracking-tight font-[var(--pv-font-heading)]">
                  Use e aplique
                </h3>
                <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                  Aplique os conhecimentos em suas sessões.
                </p>
                <ul className="mt-4 space-y-2 text-left text-sm opacity-90">
                  <li className="flex gap-2 items-center">
                    <CheckIcon className="h-3.5 w-3.5" />
                    <span>Revise sempre que precisar</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <CheckIcon className="h-3.5 w-3.5" />
                    <span>Consulte durante as sessões</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <CheckIcon className="h-3.5 w-3.5" />
                    <span>Facilite seu aprendizado</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <a
                href="#planos"
                className="px-10 py-5 text-[18px] sm:text-[20px] inline-block text-center transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98] bg-[var(--pv-success)] text-white font-semibold rounded-full uppercase tracking-tight shadow-[0_14px_30px_-10px_rgba(57,181,116,0.55)] cursor-pointer"
              >
                QUERO ACESSAR AGORA
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 12 - PERGUNTAS FREQUENTES (FAQ) */}
      <div id="secao-12" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[var(--pv-bg)] text-[var(--pv-text)]">
          <div className="max-w-[var(--pv-container)] mx-auto">
            <h2 className="text-[32px] sm:text-[46px] lg:text-[54px] text-center font-extrabold tracking-tight leading-[1.1] font-[var(--pv-font-heading)]">
              PERGUNTAS FREQUENTES
            </h2>

            <div className="max-w-3xl mx-auto mt-10 divide-y divide-black/10">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="py-5">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left cursor-pointer text-xl sm:text-2xl font-semibold flex justify-between items-center py-2 focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[#2D1107]">{faq.q}</span>
                      <span
                        className={`ml-4 text-3xl font-light text-gray-500 transition-transform duration-300 select-none ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="mt-3 text-base sm:text-lg opacity-85 leading-relaxed text-[#3B3B3B] pb-2">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 13 - RODAPÉ */}
      <div id="secao-13" className="scroll-mt-20">
        <footer className="px-4 py-14 text-center text-sm sm:text-base space-y-4 bg-[#111111] text-white">
          <p className="font-semibold text-base sm:text-lg">
            ©️ Todos os direitos reservados.
          </p>
          <p className="opacity-75 max-w-3xl mx-auto leading-relaxed text-xs sm:text-sm text-gray-300">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos algum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 ás 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.
          </p>
        </footer>
      </div>
    </div>
  );
}
