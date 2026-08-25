export default function ObrigadoPage() {
  return (
    <main className="thank-you">
      <div className="container">
        <section className="thank-you-card">
          <div className="brand">
            <span className="brand-mark">P</span>
            <span>PIVE Possível</span>
          </div>
          <p className="eyebrow" style={{ marginTop: 42 }}>Inscrição recebida</p>
          <h1 className="section-title">Seu próximo passo começa nas orientações oficiais.</h1>
          <p className="section-lead">
            Obrigado por se inscrever. Para não perder nenhuma informação da aula, siga a sequência abaixo e use somente os canais apresentados na área de membros e nas mensagens oficiais da compra.
          </p>

          <div className="thank-you-steps">
            <article className="thank-you-step">
              <span>01</span>
              <div>
                <h2>Confira a confirmação da compra</h2>
                <p>Verifique o email usado no pagamento e procure a mensagem da plataforma com o acesso à área de membros.</p>
              </div>
            </article>
            <article className="thank-you-step">
              <span>02</span>
              <div>
                <h2>Acesse as boas vindas</h2>
                <p>Na área de membros, procure o vídeo de boas vindas e a orientação para entrar no grupo oficial de alunos.</p>
              </div>
            </article>
            <article className="thank-you-step">
              <span>03</span>
              <div>
                <h2>Entre no grupo oficial</h2>
                <p>É nesse grupo que serão enviados os avisos, os lembretes, a data, o horário e o link de acesso à aula ao vivo.</p>
              </div>
            </article>
            <article className="thank-you-step">
              <span>04</span>
              <div>
                <h2>Fique atento às mensagens</h2>
                <p>O aquecimento começa antes da aula. Acompanhe o grupo para chegar ao encontro com o contexto e as orientações necessárias.</p>
              </div>
            </article>
          </div>

          <div className="thank-you-alert">
            O link do grupo, a data da aula e um contato de suporte ainda não foram fornecidos. Por segurança, esta página não exibe informações inventadas. Quando esses dados forem definidos, os botões podem ser ativados sem alterar a estrutura.
          </div>

          <div className="thank-you-actions">
            <a className="button" href="/a1">Voltar para a página da aula</a>
            <a className="text-link" href="/a1#inscricao">Rever os dados da inscrição</a>
          </div>
        </section>
      </div>
    </main>
  );
}
