import Image from "next/image";
import {
  discoveries,
  faqs,
  heroVariants,
  lessons,
  type HeroVariant,
} from "./sales-data";

type SalesPageProps = {
  variant: HeroVariant;
};

export function SalesPage({ variant }: SalesPageProps) {
  const hero = heroVariants[variant];

  return (
    <main className="site-shell">
      <section className="hero">
        <div className="container">
          <div className="brandbar">
            <div className="brand">
              <span className="brand-mark">P</span>
              <span>PIVE Possível</span>
            </div>
            <span className="brand-meta">O Plano do Laboratório Enxuto</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{hero.category}</p>
              <h1 className="hero-title">{hero.title}</h1>
              <p className="hero-support">{hero.support}</p>
              <a className="button" href="#inscricao">
                {hero.button}
              </a>
              <p className="hero-note">
                Aula ao vivo, aproximadamente 8 horas, com Cassiano Filho.
              </p>
            </div>

            <div className="hero-visual">
              <div className="hero-image-frame">
                <Image
                  src="/images/cassiano-hero.png"
                  alt="Cassiano Filho trabalhando em um laboratório de embriões"
                  fill
                  priority
                  sizes="(max-width: 980px) 100vw, 46vw"
                />
              </div>
              <div className="hero-data-card">
                <strong>Clareza antes de gastar</strong>
                <span>Estrutura, investimento, mercado e próximo passo.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Informações principais da aula">
        <div className="container proof-grid">
          <div className="proof-item">
            <strong>8 horas</strong>
            <span>Imersão ao vivo</span>
          </div>
          <div className="proof-item">
            <strong>R$99</strong>
            <span>Investimento na aula</span>
          </div>
          <div className="proof-item">
            <strong>3 bônus</strong>
            <span>Para transformar curiosidade em plano</span>
          </div>
          <div className="proof-item">
            <strong>Replay</strong>
            <span>Por tempo limitado</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">A conta que trava o primeiro passo</p>
            <h2 className="section-title">O sonho não morreu. Ele foi mal orçado.</h2>
            <p className="section-lead">
              Durante anos, muita gente ouviu que produzir embriões bovinos in vitro exigia um laboratório grande, equipamentos caríssimos e anos dentro de uma estrutura que quase ninguém consegue montar.
            </p>
          </div>
          <div className="story-stack">
            <article className="story-card">
              <p>
                Quando tudo o que aparece é microscópio de dezenas de milhares de reais, incubadora gigantesca, sala sofisticada e curso presencial caro, a conclusão parece óbvia: isso não é para mim.
              </p>
            </article>
            <article className="story-card story-card-accent">
              <p>
                Só que Cassiano Filho começou justamente onde disseram que não dava. Ele estudou técnicas anteriores aos grandes equipamentos, conheceu o SIS e construiu uma forma enxuta de pensar a PIVE.
              </p>
            </article>
            <article className="story-card">
              <p>
                Quando a estrutura muda, a conta muda. E quando a conta muda, o sonho deixa de ser fantasia e vira planejamento.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container big-statement">
          <p className="eyebrow">A transformação desta aula</p>
          <h2 className="quote-title">
            Clareza antes de gastar. <em>Plano antes de desistir.</em>
          </h2>
          <p className="section-lead">
            Você não sai desta aula produzindo embriões sozinho. Você sai entendendo se existe um caminho técnico e financeiro real para entrar nesse mercado sem começar pelo jeito mais caro.
          </p>

          <div className="before-after">
            <article className="state-card">
              <strong>Antes</strong>
              <p>PIVE é coisa de laboratório grande.</p>
            </article>
            <span className="state-arrow" aria-hidden="true">→</span>
            <article className="state-card">
              <strong>Depois</strong>
              <p>Eu consigo enxergar a estrutura, o investimento, o mercado e o próximo passo.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">O que você vai descobrir</p>
          <h2 className="section-title">A conta completa, sem pular as perguntas difíceis.</h2>
          <div className="feature-grid">
            {discoveries.map((item, index) => (
              <article className="feature-card" key={item}>
                <span className="feature-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item}</h3>
                  <p>Um ponto essencial para decidir com mais segurança.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split split-reverse">
          <div>
            <p className="eyebrow">O mecanismo</p>
            <h2 className="section-title">Laboratório Escola SIS</h2>
            <p className="section-lead">
              A lógica é o contrário do caminho mais comum. Em vez de aprender poucos dias em uma estrutura sofisticada e voltar para casa sem conseguir repetir, o princípio é começar com uma estrutura que caiba na realidade do aluno e que possa virar ambiente de prática.
            </p>
            <div className="guarantee">
              <strong>Uma analogia simples</strong>
              <p>
                Treinar cinco dias numa Ferrari não resolve se, na segunda feira, você não tem carro para praticar. A evolução acontece quando teoria, equipamento acessível, protocolo e prática continuam juntos.
              </p>
            </div>
          </div>

          <div className="mechanism-diagram" aria-label="Etapas da lógica do Laboratório Escola SIS">
            <article className="mechanism-step">
              <span>01</span>
              <div>
                <h3>Estrutura possível</h3>
                <p>Começar pela função de cada equipamento e pela realidade da operação.</p>
              </div>
            </article>
            <article className="mechanism-step">
              <span>02</span>
              <div>
                <h3>Protocolo compreensível</h3>
                <p>Organizar a técnica desde a base, conectando o que precisa fazer sentido.</p>
              </div>
            </article>
            <article className="mechanism-step">
              <span>03</span>
              <div>
                <h3>Prática que continua</h3>
                <p>Trocar uma semana isolada por um caminho capaz de sustentar o treino.</p>
              </div>
            </article>
            <article className="mechanism-step">
              <span>04</span>
              <div>
                <h3>Decisão guiada por conta</h3>
                <p>Avaliar operação, mercado, regularização e viabilidade antes de investir.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">A estrutura da imersão</p>
          <h2 className="section-title">8 horas para tirar o projeto da gaveta e colocar a conta na mesa.</h2>
          <div className="lesson-list">
            {lessons.map((lesson, index) => (
              <article className="lesson-item" key={lesson.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{lesson.title}</h3>
                <p>{lesson.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-compact" id="autoridade">
        <div className="container split split-reverse">
          <div className="authority-image">
            <Image
              src="/images/cassiano-autoridade.png"
              alt="Cassiano Filho ao lado de um microscópio em laboratório"
              fill
              sizes="(max-width: 980px) 100vw, 48vw"
            />
          </div>
          <div className="authority-copy">
            <p className="eyebrow">Quem conduz a aula</p>
            <h2 className="section-title">Cassiano começou onde disseram que não dava.</h2>
            <p>
              Formado em medicina veterinária, ele foi para Rondônia e passou anos com um sonho que parecia incompatível com a realidade ao redor. Quando tentou contratar laboratórios para poucas doadoras, esperou meses por atendimento e ouviu que aprender PIVE levaria anos.
            </p>
            <p>
              Em vez de aceitar a resposta, estudou artigos antigos, buscou como a técnica era feita antes dos equipamentos modernos e encontrou o SIS, criado pelo Dr. Gábor Vajta. Vieram erros, prejuízos, tentativas ruins e, depois, os resultados.
            </p>
            <p>
              Cassiano relata ter produzido mais de 100 animais de genética de alto valor no próprio rebanho, montado uma operação comercial, treinado outras pessoas e acompanhado a implantação de laboratórios comerciais com a técnica.
            </p>

            <div className="authority-stats">
              <div className="authority-stat">
                <strong>+100</strong>
                <span>Animais de genética de alto valor produzidos no próprio rebanho</span>
              </div>
              <div className="authority-stat">
                <strong>15 anos</strong>
                <span>De experiência como professor, segundo o material fornecido</span>
              </div>
              <div className="authority-stat">
                <strong>SIS</strong>
                <span>Experiência prática com o Sistema de Incubação Submarino</span>
              </div>
              <div className="authority-stat">
                <strong>Rondônia</strong>
                <span>Uma trajetória construída longe dos grandes centros</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <p className="eyebrow">As primeiras coisas que você precisa entender</p>
          <h2 className="section-title">Três crenças que podem estar segurando uma decisão importante.</h2>
          <div className="beliefs">
            <article className="belief">
              <strong>Estrutura</strong>
              <p>Um laboratório grande pode fazer sentido para uma grande operação. Isso não o transforma no único ponto de partida possível.</p>
            </article>
            <article className="belief">
              <strong>Aprendizado</strong>
              <p>Equipamento sofisticado pode ser útil. Isso não significa que cinco dias de curso criem autonomia para continuar treinando.</p>
            </article>
            <article className="belief">
              <strong>Mercado</strong>
              <p>Um setor com empresas grandes não significa que toda demanda, em todas as regiões e propriedades, esteja bem atendida.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Para quem faz sentido</p>
          <h2 className="section-title">Uma aula para quem prefere fazer conta antes de desistir.</h2>
          <div className="audience-grid">
            <article className="audience-card">
              <h3>Esta aula é para você que</h3>
              <ul>
                <li>É veterinário, biólogo, zootecnista, bioquímico, biomédico ou profissional da área e quer entender como entrar na PIVE.</li>
                <li>Já fez curso prático e voltou para casa sem conseguir continuar treinando.</li>
                <li>Quer avaliar um negócio de reprodução bovina antes de colocar dezenas ou centenas de milhares de reais nele.</li>
                <li>É pecuarista e deseja entender se uma estrutura própria pode trazer mais autonomia genética para a fazenda.</li>
              </ul>
            </article>
            <article className="audience-card audience-card-negative">
              <h3>Esta aula não é para você que</h3>
              <ul>
                <li>Espera sair de uma única aula produzindo embriões de forma independente.</li>
                <li>Procura fórmula mágica ou resultado biológico garantido.</li>
                <li>Quer copiar um laboratório grande sem entender por que cada equipamento existe.</li>
                <li>Não deseja avaliar estrutura, mercado e exigências antes da execução.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#f1eee7" }}>
        <div className="container">
          <p className="eyebrow">Bônus da imersão</p>
          <h2 className="section-title">Da curiosidade para um plano que você consegue analisar.</h2>
          <div className="bonus-grid">
            <article className="bonus-card">
              <span>Bônus 01</span>
              <h3>Plano de negócio para laboratório de embriões</h3>
              <p>Uma estrutura para organizar investimento, operação, capacidade e viabilidade antes de colocar dinheiro no projeto.</p>
            </article>
            <article className="bonus-card">
              <span>Bônus 02</span>
              <h3>Parcerias com veterinários e fazendas</h3>
              <p>Como pensar relações com profissionais de campo e fazendas de genética sem depender de um único canal de cliente.</p>
            </article>
            <article className="bonus-card">
              <span>Bônus 03</span>
              <h3>Como captar clientes</h3>
              <p>Uma visão prática para aproximar a tecnologia de quem precisa dela, especialmente fora da disputa das grandes operações.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="inscricao">
        <div className="container offer-wrap">
          <div>
            <p className="eyebrow">A oferta</p>
            <h2 className="section-title">Antes de aceitar que o sonho é impossível, coloque a conta na mesa.</h2>
            <p className="section-lead">
              PIVE Possível existe para mostrar estrutura, lógica, mercado e o próximo passo. Sem vender fantasia e sem confundir clareza com promessa de resultado biológico.
            </p>
            <div className="guarantee">
              <strong>Condições de garantia e reembolso</strong>
              <p>
                As condições aplicáveis à compra serão apresentadas no checkout no momento da inscrição. A entrega inclui acesso ao grupo, aula ao vivo e replay por tempo limitado, conforme as orientações enviadas aos inscritos.
              </p>
            </div>
          </div>

          <article className="offer-card">
            <span className="offer-kicker">Imersão ao vivo</span>
            <h3>PIVE Possível</h3>
            <p>O Plano do Laboratório Enxuto</p>
            <ul className="offer-list">
              <li>Aproximadamente 8 horas de conteúdo ao vivo</li>
              <li>Acesso ao grupo oficial de alunos</li>
              <li>Replay por tempo limitado</li>
              <li>Plano de negócio para laboratório de embriões</li>
              <li>Parcerias com veterinários e fazendas</li>
              <li>Visão prática para captação de clientes</li>
            </ul>
            <div className="price">
              <span>Investimento</span>
              <strong>R$99</strong>
            </div>
            <a className="button button-dark" href="#checkout-pendente">
              Quero minha vaga por R$99
            </a>
            <p className="checkout-note">O link oficial de pagamento será conectado aqui.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="big-statement">
            <p className="eyebrow">Dúvidas frequentes</p>
            <h2 className="section-title">O que você precisa saber antes de decidir.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing" id="checkout-pendente">
        <div className="container">
          <p className="eyebrow">O próximo passo começa com uma conta real</p>
          <h2 className="section-title">Talvez alguém tenha colocado um preço impossível na porta.</h2>
          <p className="section-lead">
            Antes de guardar o sonho outra vez, entenda a estrutura, a lógica, o mercado e o que ainda falta para avançar.
          </p>
          <a className="button" href="#inscricao">Rever tudo que está incluído</a>
          <div className="pending-box">
            <strong>Inscrições em preparação.</strong> O checkout, a data da aula e o grupo oficial ainda não foram informados nos materiais. Esta área está pronta para receber esses dados sem publicar links ou datas inventadas.
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          PIVE Possível com Cassiano Filho. A viabilidade de cada laboratório depende da estrutura, da operação, das condições locais e das exigências profissionais e regulatórias aplicáveis.
        </div>
      </footer>
    </main>
  );
}
