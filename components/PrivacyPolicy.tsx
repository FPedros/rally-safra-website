import React from 'react';

type PolicySection = {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
};

type PrivacyPolicyProps = {
  onNavigate?: (view: 'home' | 'blog' | 'post' | 'historia' | 'privacidade', sectionId?: string) => void;
};

const summaryItems: React.ReactNode[] = [
  <>
    <strong>Que informações pessoais processamos?</strong>{' '}
    Quando você visita, usa ou navega em nossos Serviços, podemos processar informações pessoais dependendo de como você
    interage conosco e com os Serviços, das escolhas que você faz e dos produtos e recursos que você usa. Saiba mais
    sobre as informações pessoais que você nos divulga.
  </>,
  <>
    <strong>Processamos informações pessoais sensíveis?</strong>{' '}
    Algumas dessas informações podem ser consideradas sensíveis: "especial" ou "sensível". Em certas jurisdições, por
    exemplo, sua origem racial ou étnica, orientação sexual ou crenças religiosas. Não processamos informações pessoais
    sensíveis.
  </>,
  <>
    <strong>Coletamos informações de terceiros?</strong>{' '}
    Podemos coletar informações de bancos de dados públicos, parceiros de marketing, plataformas de mídia social e
    outras fontes externas. Saiba mais sobre as informações coletadas de outras fontes.
  </>,
  <>
    <strong>Como processamos suas informações?</strong>{' '}
    Processamos suas informações para fornecer, aprimorar e administrar nossos Serviços, comunicar-nos com você, para
    fins de segurança e prevenção de fraudes e para cumprir a lei. Também podemos processar suas informações para outros
    fins com o seu consentimento. Processamos suas informações somente quando temos uma base legal válida para fazê-lo.
    Saiba mais sobre como processamos suas informações.
  </>,
  <>
    <strong>Em que situações e com quais partes compartilhamos informações pessoais?</strong>{' '}
    Podemos compartilhar informações em situações específicas e com categorias específicas de terceiros. Saiba mais
    sobre quando e com quem compartilhamos suas informações pessoais.
  </>,
  <>
    <strong>Como protegemos suas informações?</strong>{' '}
    Temos medidas adequadas de segurança organizacional e processos e procedimentos técnicos implementados para proteger
    suas informações pessoais. No entanto, nenhuma transmissão eletrônica pela internet ou tecnologia de armazenamento de
    informações pode ser garantida como 100% segura, portanto, não podemos prometer ou garantir que hackers,
    cibercriminosos ou outros não consigam acessar suas informações pessoais. Terceiros não poderão burlar nossa
    segurança e coletar, acessar, roubar ou modificar suas informações indevidamente. Saiba mais sobre como protegemos
    suas informações.
  </>,
  <>
    <strong>Quais são os seus direitos?</strong>{' '}
    Dependendo da sua localização geográfica, a legislação de privacidade aplicável pode lhe conferir certos direitos em
    relação às suas informações pessoais. Saiba mais sobre seus direitos de privacidade.
  </>,
  <>
    <strong>Como você exerce seus direitos?</strong>{' '}
    A maneira mais fácil de exercer seus direitos é através de submeter uma solicitação de acesso do titular dos dados ou
    entrando em contato conosco. Analisaremos e tomaremos as medidas cabíveis em relação a qualquer solicitação, em
    conformidade com as leis de proteção de dados aplicáveis.
  </>,
  <>
    <strong>Quer saber mais sobre o que fazemos com as informações que coletamos?</strong>{' '}
    Leia o Aviso de Privacidade na íntegra.
  </>,
];

const indexItems = [
  'QUE INFORMAÇÕES COLETAMOS?',
  'COMO PROCESSAMOS SUAS INFORMAÇÕES?',
  'QUANDO E COM QUEM COMPARTILHAMOS SUAS INFORMAÇÕES PESSOAIS?',
  'UTILIZAMOS COOKIES E OUTRAS TECNOLOGIAS DE RASTREAMENTO?',
  'POR QUANTO TEMPO GUARDAMOS SUAS INFORMAÇÕES?',
  'COMO MANTEMOS SUAS INFORMAÇÕES SEGURAS?',
  'COLETAMOS INFORMAÇÕES DE MENORES DE IDADE?',
  'QUAIS SÃO OS SEUS DIREITOS DE PRIVACIDADE?',
  'CONTROLES PARA RECURSOS DE NÃO RASTREAR',
  'ATUALIZAMOS ESTE AVISO?',
  'COMO VOCÊ PODE ENTRAR EM CONTATO CONOSCO SOBRE ESTE AVISO?',
  'COMO VOCÊ PODE REVISAR, ATUALIZAR OU EXCLUIR OS DADOS QUE COLETAMOS DE VOCÊ?',
];

const indexTargets = [
  'informacoes-coletamos',
  'como-processamos',
  'compartilhamos',
  'cookies',
  'retencao',
  'seguranca',
  'menores',
  'direitos-privacidade',
  'nao-rastrear',
  'atualizamos-aviso',
  'contato-aviso',
  'revisar-dados',
];

const summaryClass = 'text-sm italic text-gray-600';
const subheadingClass = 'font-heading text-lg font-semibold text-dark-green';
const linkClass = 'text-raw-umber font-semibold underline underline-offset-4';

const sections: PolicySection[] = [
  {
    id: 'informacoes-coletamos',
    number: '1',
    title: 'Que informações coletamos?',
    content: (
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <div className="space-y-3">
          <h3 className={subheadingClass}>Informações pessoais que você nos divulga</h3>
          <p className={summaryClass}>
            <span className="font-semibold not-italic">Resumindo:</span> Coletamos informações pessoais que você nos
            fornece.
          </p>
          <p>
            Coletamos informações pessoais que você nos fornece voluntariamente quando você se registra nos Serviços. Ao
            participar de atividades nos Serviços ou ao entrar em contato conosco, você demonstra interesse em obter
            informações sobre nós, nossos produtos e serviços.
          </p>
          <p>
            <strong>Informações pessoais fornecidas por você.</strong> As informações pessoais que coletamos dependem do
            contexto de suas interações conosco e com os Serviços, das escolhas que você faz e dos produtos e recursos
            que você utiliza. As informações pessoais que coletamos podem incluir o seguinte:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>nomes</li>
            <li>endereços de e-mail</li>
            <li>títulos de cargos</li>
          </ul>
          <p>
            <strong>Informação sensível.</strong> Não processamos informações sensíveis.
          </p>
          <p>
            Todas as informações pessoais que você nos fornecer devem ser verdadeiras, completas e precisas, e você deve
            nos notificar sobre quaisquer alterações nessas informações pessoais.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className={subheadingClass}>Informações coletadas automaticamente</h3>
          <p className={summaryClass}>
            <span className="font-semibold not-italic">Resumindo:</span> Algumas informações — como seu endereço de
            Protocolo de Internet (IP) e/ou características do navegador e do dispositivo — são coletadas automaticamente
            quando você visita nossos Serviços.
          </p>
          <p>
            Coletamos automaticamente certas informações quando você visita, usa ou navega pelos Serviços. Essas
            informações não revelam sua identidade específica (como seu nome ou informações de contato), mas podem
            incluir informações sobre o dispositivo e o uso, como seu endereço IP, características do navegador e do
            dispositivo, sistema operacional, preferências de idioma, URLs de referência, nome do dispositivo, país,
            localização, informações sobre como e quando você usa nossos Serviços e outras informações técnicas. Essas
            informações são necessárias principalmente para manter a segurança e a operação de nossos Serviços e para
            fins de análise e relatórios internos.
          </p>
          <p>As informações que coletamos incluem:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Dados de registro e uso.</strong> Os dados de registro e uso são informações relacionadas ao
              serviço, diagnóstico, uso e desempenho que nossos servidores coletam automaticamente quando você acessa ou
              usa nossos Serviços e que registramos em arquivos de log. Dependendo de como você interage conosco, esses
              dados de registro podem incluir seu endereço IP, informações do dispositivo, tipo e configuração do
              navegador e informações sobre sua atividade nos Serviços (como os registros de data e hora associados ao
              seu uso, páginas e arquivos visualizados, pesquisas e outras ações que você realiza, como quais recursos
              você usa), informações sobre eventos do dispositivo (como atividade do sistema, relatórios de erros (às
              vezes chamados de "despejos de falha") e configurações de hardware).
            </li>
            <li>
              <strong>Dados do dispositivo.</strong> Coletamos dados do dispositivo, como informações sobre seu
              computador, telefone, tablet ou outro dispositivo que você usa para acessar os Serviços. Dependendo do
              dispositivo usado, esses dados podem incluir informações como seu endereço IP (ou servidor proxy), números
              de identificação do dispositivo e do aplicativo, localização, tipo de navegador, modelo de hardware,
              provedor de serviços de Internet e/ou operadora de celular, sistema operacional e informações de
              configuração do sistema.
            </li>
            <li>
              <strong>Dados de localização.</strong> Coletamos dados de localização, como informações sobre a localização
              do seu dispositivo, que podem ser precisas ou imprecisas. A quantidade de informações coletadas depende do
              tipo e das configurações do dispositivo que você usa para acessar os Serviços. Por exemplo, podemos usar
              GPS e outras tecnologias para coletar dados de geolocalização que nos informam sua localização atual (com
              base no seu endereço IP). Você pode optar por não permitir a coleta dessas informações, recusando o acesso
              a elas ou desativando a configuração de localização no seu dispositivo. No entanto, se optar por não
              permitir a coleta, poderá não conseguir usar certos recursos dos Serviços.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className={subheadingClass}>API do Google</h3>
          <p>
            O uso que fizermos das informações recebidas das APIs do Google estará em conformidade com a{' '}
            <a
              className={linkClass}
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noreferrer"
            >
              Política de Dados do Usuário dos Serviços de API do Google
            </a>
            , incluindo os{' '}
            <a
              className={linkClass}
              href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
              target="_blank"
              rel="noreferrer"
            >
              requisitos de Uso Limitado
            </a>
            .
          </p>
        </div>

        <div className="space-y-3">
          <h3 className={subheadingClass}>Informações coletadas de outras fontes</h3>
          <p className={summaryClass}>
            <span className="font-semibold not-italic">Resumindo:</span> Podemos coletar dados limitados de bancos de
            dados públicos, parceiros de marketing e outras fontes externas.
          </p>
          <p>
            Para melhorar nossa capacidade de fornecer marketing, ofertas e serviços relevantes para você e atualizar
            nossos registros, podemos obter informações sobre você de outras fontes, como bancos de dados públicos,
            parceiros de marketing conjunto, programas de afiliados e provedores de dados de terceiros. Essas informações
            incluem endereços postais, cargos, endereços de e-mail, números de telefone, dados de intenção (ou do
            usuário), comportamentais, endereços de Protocolo de Internet (IP), perfis de redes sociais, URLs de redes
            sociais e perfis personalizados, para fins de publicidade direcionada e promoção de eventos.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'como-processamos',
    number: '2',
    title: 'Como processamos suas informações?',
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p className={summaryClass}>
          <span className="font-semibold not-italic">Resumindo:</span> Processamos suas informações para fornecer,
          aprimorar e administrar nossos Serviços, comunicar-nos com você, para fins de segurança e prevenção de fraudes
          e para cumprir a lei. Também podemos processar suas informações para outros fins com o seu consentimento.
        </p>
        <p>
          Processamos suas informações pessoais por diversos motivos, dependendo de como você interage com nossos
          Serviços, incluindo:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Para facilitar a criação e autenticação de contas e para gerenciar contas de usuário,</strong>{' '}
            podemos processar suas informações para que você possa criar e acessar sua conta, bem como para mantê-la em
            funcionamento.
          </li>
          <li>
            <strong>Para enviar comunicações de marketing e promocionais.</strong> Podemos processar as informações
            pessoais que você nos envia para fins de marketing, desde que esteja de acordo com suas preferências de
            marketing. Você pode cancelar o recebimento de nossos e-mails de marketing a qualquer momento. Para mais
            informações, consulte [link para a política de privacidade]. "Quais são os seus direitos de privacidade?"
            abaixo.
          </li>
          <li>
            <strong>Para lhe apresentar publicidade direcionada.</strong> Podemos processar as suas informações para
            desenvolver e exibir anúncios, conteúdo e publicidade personalizados de acordo com seus interesses,
            localização e muito mais.
          </li>
          <li>
            <strong>Para avaliar e melhorar nossos Serviços, produtos, marketing e sua experiência.</strong> Podemos
            processar suas informações quando acreditarmos ser necessário para identificar tendências de uso, determinar
            a eficácia de nossas campanhas promocionais e para avaliar e melhorar nossos Serviços, produtos, marketing e
            sua experiência.
          </li>
          <li>
            <strong>Para identificar tendências de uso.</strong> Podemos processar informações sobre como você usa nossos
            Serviços para entender melhor como eles estão sendo usados e, assim, aprimorá-los.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'compartilhamos',
    number: '3',
    title: 'Quando e com quem compartilhamos suas informações pessoais?',
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p className={summaryClass}>
          <span className="font-semibold not-italic">Resumindo:</span> Podemos compartilhar informações em situações
          específicas descritas nesta seção e/ou com as seguintes categorias de terceiros.
        </p>
        <p>
          <strong>Fornecedores, consultores e outros prestadores de serviços terceirizados.</strong> Podemos compartilhar
          seus dados com fornecedores, prestadores de serviços, contratados ou agentes terceirizados ("terceiros") que
          prestam serviços para nós ou em nosso nome e precisam acessar essas informações para realizar esse trabalho.
          Temos contratos em vigor com terceiros, concebidos para ajudar a proteger as suas informações pessoais. Isso
          significa que eles não podem fazer nada com as suas informações pessoais a menos que os instruamos a fazê-lo.
          Eles também não compartilharão as suas informações pessoais com ninguém. Além de nós, eles também se comprometem
          a proteger os dados que detêm em nosso nome e a retê-los pelo período que instruirmos.
        </p>
        <p>Categorias de terceiros com os quais podemos compartilhar informações pessoais são as seguintes:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Programas de marketing de afiliados</li>
          <li>Ferramentas de monitoramento de desempenho</li>
          <li>Ferramentas de Vendas e Marketing</li>
          <li>
            A todos os patrocinadores do projeto em 2026 (BASF, Credenz, SoyTech, xarvio, Santander, John Deere, OCP
            Brasil, Agrivalle, JDT Seguros, TIM e Mitsubishi)
          </li>
        </ul>
        <p>Nós também poderemos precisar compartilhar suas informações pessoais nas seguintes situações:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Transferências de Negócios.</strong> Podemos compartilhar ou transferir suas informações em conexão
            com, ou durante negociações de, qualquer fusão, venda de ativos da empresa, financiamento ou aquisição de
            toda ou parte de nossa empresa por outra empresa.
          </li>
          <li>
            <strong>Afiliados.</strong> Podemos compartilhar suas informações com nossos afiliados, caso em que
            exigiremos que esses afiliados honrem este Aviso de Privacidade. As empresas afiliadas incluem nossa empresa
            controladora e quaisquer subsidiárias, parceiros de joint venture ou outras empresas que controlamos ou que
            estão sob controle comum conosco.
          </li>
          <li>
            <strong>Parceiros comerciais.</strong> Podemos compartilhar suas informações com nossos parceiros comerciais
            para oferecer a você determinados produtos, serviços ou promoções.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'cookies',
    number: '4',
    title: 'Utilizamos cookies e outras tecnologias de rastreamento?',
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p className={summaryClass}>
          <span className="font-semibold not-italic">Resumindo:</span> Podemos usar cookies e outras tecnologias de
          rastreamento para coletar e armazenar suas informações.
        </p>
        <p>
          Podemos usar cookies e tecnologias de rastreamento semelhantes (como web beacons e pixels) para coletar
          informações quando você interage com nossos Serviços.
        </p>
        <p>
          Algumas tecnologias de rastreamento online nos ajudam a manter a segurança de nossos Serviços e sua conta,
          previnem falhas, corrigem erros, salvam suas preferências e auxiliam nas funções básicas do site.
        </p>
        <p>
          Também permitimos que terceiros e prestadores de serviços usem tecnologias de rastreamento online em nossos
          Serviços para fins de análise e publicidade, incluindo para ajudar a gerenciar e exibir anúncios, personalizar
          anúncios de acordo com seus interesses ou enviar lembretes de carrinho de compras abandonado (dependendo de suas
          preferências de comunicação). Os terceiros e prestadores de serviços usam essa tecnologia para fornecer
          publicidade sobre produtos e serviços de seu interesse, que podem aparecer em nossos Serviços ou em outros
          sites.
        </p>
        <p>
          Informações específicas sobre como utilizamos essas tecnologias e como você pode recusar determinados cookies
          estão descritas em nosso Aviso de Cookies.
        </p>
        <div className="space-y-3">
          <h3 className={subheadingClass}>Google Analytics</h3>
          <p>
            Podemos compartilhar suas informações com o Google Analytics para rastrear e analisar a utilização dos
            Serviços. Para desativar o rastreamento do Google Analytics em todos os Serviços, acesse{' '}
            <a className={linkClass} href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">
              https://tools.google.com/dlpage/gaoptout
            </a>
            . Para obter mais informações sobre as práticas de privacidade do Google, visite a{' '}
            <a className={linkClass} href="https://policies.google.com/" target="_blank" rel="noreferrer">
              página Privacidade e Termos do Google
            </a>
            .
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'retencao',
    number: '5',
    title: 'Por quanto tempo guardamos suas informações?',
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p className={summaryClass}>
          <span className="font-semibold not-italic">Resumindo:</span> Mantemos suas informações pelo tempo necessário
          para completar as finalidades descritas neste Aviso de Privacidade, a menos que exigido de outra forma por lei.
        </p>
        <p>
          Conservaremos suas informações pessoais apenas pelo tempo necessário para os fins descritos neste Aviso de
          Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei (como para fins
          fiscais, contábeis ou outros requisitos legais).
        </p>
        <p>
          Nenhuma finalidade deste aviso exigirá que mantenhamos suas informações pessoais por mais tempo do que o período
          de tempo em que os usuários possuem uma conta conosco.
        </p>
        <p>
          Quando não houver mais necessidade comercial legítima de processar suas informações pessoais, iremos excluí-las
          ou anonimizar as informações ou, caso isso não seja possível (por exemplo, porque suas informações pessoais
          foram armazenadas em backups), armazenaremos suas informações pessoais com segurança e as isolaremos de qualquer
          processamento adicional até que a exclusão seja possível.
        </p>
      </div>
    ),
  },
  {
    id: 'seguranca',
    number: '6',
    title: 'Como mantemos suas informações seguras?',
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p className={summaryClass}>
          <span className="font-semibold not-italic">Resumindo:</span> Nosso objetivo é proteger suas informações
          pessoais por meio de um sistema de segurança organizacional e medidas de segurança técnica.
        </p>
        <p>
          Implementamos medidas técnicas apropriadas e razoáveis, organizacionais e medidas de segurança para proteger a
          segurança de todas as informações pessoais que processamos. No entanto, apesar de nossas medidas de segurança e
          esforços para proteger suas informações, nenhuma transmissão eletrônica pela Internet ou tecnologia de
          armazenamento de informações pode ser garantida como 100% segura. Portanto, não podemos prometer ou garantir
          que hackers, cibercriminosos ou outros agentes maliciosos não consigam acessar suas informações. Terceiros não
          poderão burlar nossa segurança e coletar, acessar, roubar ou modificar suas informações pessoais indevidamente.
          Embora façamos o possível para proteger suas informações pessoais, a transmissão de informações pessoais de e
          para nossos Serviços é sua inteira responsabilidade. Você deve acessar os Serviços somente em um ambiente
          seguro.
        </p>
      </div>
    ),
  },
  {
    id: 'menores',
    number: '7',
    title: 'Coletamos informações de menores de idade?',
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p className={summaryClass}>
          <span className="font-semibold not-italic">Resumindo:</span> Não coletamos dados de crianças menores de 18 anos
          nem realizamos marketing direcionado a elas.
        </p>
        <p>
          Não coletamos, solicitamos dados ou direcionamos marketing a crianças menores de 18 anos de idade, de forma
          consciente. Nem vendemos intencionalmente essas informações pessoais. Ao usar os Serviços, você declara ter
          pelo menos 18 anos de idade, ou que você é o pai ou responsável legal de um menor de idade e consente com o uso
          dos Serviços por esse menor. Se tomarmos conhecimento de que informações pessoais de usuários menores de 18
          anos foram obtidas, desativaremos a conta e tomaremos as medidas cabíveis para excluir esses dados prontamente
          de nossos registros. Se você tomar conhecimento de quaisquer dados que possamos ter coletado de crianças
          menores de 18 anos, entre em contato conosco imediatamente em{' '}
          <a className={linkClass} href="mailto:jpereira@agroconsult.com.br">
            jpereira@agroconsult.com.br
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    id: 'direitos-privacidade',
    number: '8',
    title: 'Quais são os seus direitos de privacidade?',
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p className={summaryClass}>
          <span className="font-semibold not-italic">Resumidamente:</span> Você pode revisar, alterar ou encerrar sua
          conta a qualquer momento, dependendo do seu país, província ou estado de residência.
        </p>
        <p>
          <strong>Retirada do seu consentimento:</strong> Se estivermos dependendo do seu consentimento para processar
          suas informações pessoais, que pode ser consentimento expresso e/ou implícito, dependendo da legislação
          aplicável. Você tem o direito de retirar seu consentimento a qualquer momento. Você pode retirar seu
          consentimento a qualquer momento entrando em contato conosco através dos dados de contato fornecidos na seção
          "Como você pode entrar em contato conosco sobre este aviso?" abaixo.
        </p>
        <p>
          No entanto, observe que isso não afetará a legalidade de processamento antes desta sua retirada, nem, quando a
          legislação aplicável o permitir, isso afetará o processamento de suas informações pessoais realizado com base
          em fundamentos legais de processamento que não sejam o consentimento.
        </p>
        <p>
          <strong>Cancelamento do recebimento de comunicações de marketing e promocionais:</strong> Você pode cancelar a
          assinatura de nossas comunicações de marketing e promocionais a qualquer momento clicando no link de
          cancelamento de inscrição nos e-mails que enviamos, ou entrando em contato conosco através dos dados fornecidos
          na seção "Como você pode entrar em contato conosco sobre este aviso?" abaixo. Você será então removido das
          listas de marketing. No entanto, ainda poderemos entrar em contato com você - por exemplo, para enviar mensagens
          relacionadas ao serviço que sejam necessárias para a administração e uso da sua conta, para responder a
          solicitações de serviço ou para outros fins não relacionados a marketing.
        </p>
        <div className="space-y-2">
          <p className="font-semibold text-dark-green">Informações da conta</p>
          <p>Se, a qualquer momento, desejar rever ou alterar as informações da sua conta ou encerrá-la, você pode:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Faça login nas configurações da sua conta e atualize seu perfil de usuário.</li>
          </ul>
          <p>
            Após sua solicitação de encerramento da conta, desativaremos ou excluiremos sua conta e suas informações de
            nossos bancos de dados ativos. No entanto, poderemos reter algumas informações em nossos arquivos para
            prevenir fraudes, solucionar problemas, auxiliar investigações, fazer cumprir nossos termos legais e/ou
            cumprir exigências legais aplicáveis.
          </p>
        </div>
        <p>
          Se você tiver dúvidas ou comentários sobre seus direitos de privacidade, pode nos enviar um e-mail para{' '}
          <a className={linkClass} href="mailto:agroconsult@agroconsult.com.br">
            agroconsult@agroconsult.com.br
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    id: 'nao-rastrear',
    number: '9',
    title: 'Controles para recursos de não rastrear',
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          A maioria dos navegadores da web e alguns sistemas operacionais móveis e aplicativos móveis incluem um recurso
          "Não rastrear" (Do-Not-Track, "DNT") ou configuração que você pode ativar para sinalizar sua preferência de
          privacidade de não ter seus dados sobre suas atividades de navegação online monitorados e coletados.
        </p>
        <p>
          Nesta fase, não existe um padrão tecnológico uniforme para reconhecer e implementar sinais DNT. Sendo assim,
          atualmente não respondemos a sinais DNT (Do Not Track) do navegador ou a qualquer outro mecanismo que comunique
          automaticamente sua escolha de não ser rastreado online. Caso seja adotado um padrão para rastreamento online
          que devamos seguir no futuro, informaremos você sobre essa prática em uma versão revisada deste Aviso de
          Privacidade.
        </p>
      </div>
    ),
  },
  {
    id: 'atualizamos-aviso',
    number: '10',
    title: 'Atualizamos este aviso?',
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p className={summaryClass}>
          <span className="font-semibold not-italic">Resumindo:</span> Sim, atualizaremos este aviso conforme necessário
          para cumprir as leis aplicáveis.
        </p>
        <p>
          Podemos atualizar este Aviso de Privacidade periodicamente. A versão atualizada será indicada por um novo aviso
          "Revisado" e a data estará no topo deste Aviso de Privacidade. Caso façamos alterações substanciais a este Aviso
          de Privacidade, poderemos notificá-lo publicando um aviso dessas alterações em local visível ou enviando uma
          notificação diretamente a você. Recomendamos que você revise este Aviso de Privacidade com frequência para se
          manter informado sobre como protegemos suas informações.
        </p>
      </div>
    ),
  },
  {
    id: 'contato-aviso',
    number: '11',
    title: 'Como você pode entrar em contato conosco sobre este aviso?',
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Se você tiver dúvidas ou comentários sobre este aviso, pode entrar em contato conosco. Entre em contato com
          nosso Encarregado de Proteção de Dados (DPO) por e-mail em{' '}
          <a className={linkClass} href="mailto:jpereira@agroconsult.com.br">
            jpereira@agroconsult.com.br
          </a>
          , por telefone em (48) 3209-1650, ou entre em contato conosco por correio no seguinte endereço:
        </p>
        <div className="space-y-1 text-gray-700 leading-relaxed">
          <p className="font-semibold">AGROCONSULT EVENTOS LTDA.</p>
          <p>Encarregado de Proteção de Dados</p>
          <p>Rodovia SC 401, nº 4.756 - Sala Comercial 02, 1º andar - Bloco B - Centro</p>
          <p>Florianópolis (SC), 88032-005</p>
          <p>Brasil</p>
        </div>
      </div>
    ),
  },
  {
    id: 'revisar-dados',
    number: '12',
    title: 'Como você pode revisar, atualizar ou excluir os dados que coletamos de você?',
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Com base nas leis aplicáveis do seu país, você tem o direito de solicitar acesso às informações pessoais que
          coletamos sobre você, detalhes sobre como as processamos, corrigir imprecisões ou excluir suas informações
          pessoais.
        </p>
        <p>
          Você também pode ter o direito de retirar o seu consentimento para o processamento das suas informações
          pessoais. Estes direitos podem ser limitados em algumas circunstâncias pela legislação aplicável.
        </p>
        <p>
          Para solicitar a revisão, atualização ou eliminação das suas informações pessoais, por favor, preencha e envie
          uma solicitação de acesso do titular dos dados.
        </p>
      </div>
    ),
  },
];

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  return (
    <section id="privacidade" className="relative min-h-screen overflow-hidden bg-light-sand text-dark-green pt-28 pb-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(202,186,156,0.25),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(76,100,68,0.15),transparent_40%),radial-gradient(circle_at_10%_80%,rgba(138,98,64,0.18),transparent_45%)]" />
      <div className="absolute -top-20 right-[-10%] w-[28rem] h-[28rem] bg-khaki/30 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-20%] left-[-12%] w-[30rem] h-[30rem] bg-emerald-300/20 blur-[160px] rounded-full" />

      <div className="relative container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 border border-khaki/40 text-xs font-bold uppercase tracking-[0.35em] text-raw-umber shadow-sm">
            Aviso de Privacidade
          </div>
          <h1 className="mt-5 font-heading text-4xl md:text-5xl font-bold text-dark-green leading-tight">
            Aviso de Privacidade
          </h1>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gray-500">Última atualização 05 de janeiro de 2026</p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Este Aviso de Privacidade para AGROCONSULT EVENTOS LTDA. ("nós", "nos" ou "nosso"), descreve como e por que
            podemos acessar, coletar, armazenar, usar e/ou compartilhar ("processo") suas informações pessoais quando você
            usa nossos serviços ("Serviços"), inclusive quando você:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
            <li>
              Visite nosso site{' '}
              <a className={linkClass} href="https://www.rallydasafra.com.br/" target="_blank" rel="noreferrer">
                https://www.rallydasafra.com.br/
              </a>{' '}
              ou qualquer site nosso que contenha um link para este Aviso de Privacidade.
            </li>
            <li>
              Use o Rally da Safra. O Rally da Safra é uma expedição que percorre as principais fazendas agrícolas de soja
              e milho do Brasil coletando informações das culturas.
            </li>
            <li>Interaja conosco de outras maneiras relacionadas, incluindo ações de marketing ou eventos.</li>
          </ul>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Tem dúvidas ou preocupações? A leitura deste Aviso de Privacidade ajudará você a entender seus direitos e
            opções em relação à privacidade. Somos responsáveis por tomar decisões sobre como suas informações pessoais
            são processadas. Se você não concordar com nossas políticas e práticas, por favor, não utilize nossos
            Serviços. Caso ainda tenha dúvidas ou preocupações, entre em contato conosco pelo endereço:{' '}
            <a className={linkClass} href="mailto:agroconsult@agroconsult.com.br">
              agroconsult@agroconsult.com.br
            </a>
            .
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6">
          <article className="bg-white/90 border border-khaki/30 rounded-3xl p-6 md:p-7 shadow-[0_24px_60px_-40px_rgba(16,40,32,0.4)]">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark-green">Resumo dos pontos principais</h2>
            <p className="mt-2 text-sm italic text-gray-600 leading-relaxed">
              Este resumo apresenta os pontos principais do nosso Aviso de Privacidade, mas você pode obter mais detalhes
              sobre qualquer um desses tópicos clicando no link após cada ponto principal ou usando nosso índice abaixo
              para encontrar a seção desejada.
            </p>
            <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
              {summaryItems.map((item, index) => (
                <p key={`summary-${index}`}>{item}</p>
              ))}
            </div>
          </article>

          <article className="bg-white/90 border border-khaki/30 rounded-3xl p-6 md:p-7 shadow-[0_24px_60px_-40px_rgba(16,40,32,0.4)]">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark-green">Índice</h2>
            <ol className="mt-3 space-y-1 text-sm text-gray-700 list-decimal pl-5 leading-relaxed uppercase">
              {indexItems.map((item, index) => {
                const target = indexTargets[index] || 'privacidade';
                return (
                  <li key={`${target}-${index}`}>
                    <a href={`#${target}`} className="transition-colors hover:text-raw-umber">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ol>
          </article>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6">
          {sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="bg-white/90 border border-khaki/30 rounded-3xl p-6 md:p-7 shadow-[0_24px_60px_-40px_rgba(16,40,32,0.4)] scroll-mt-24 md:scroll-mt-28"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-raw-umber to-hunter-green text-white font-bold flex items-center justify-center shadow-lg">
                  {section.number}
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark-green">{section.title}</h2>
              </div>
              {section.content}
            </article>
          ))}
        </div>

        <div
          id="contato-privacidade"
          className="mt-12 bg-dark-green text-white rounded-3xl p-6 md:p-8 shadow-[0_30px_70px_-40px_rgba(16,40,32,0.6)]"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-heading text-2xl font-bold">Contato para privacidade</h3>
              <p className="mt-2 text-gray-200 text-sm leading-relaxed">
                Se você tiver dúvidas ou comentários sobre seus direitos de privacidade, envie um e-mail para{' '}
                <a className="text-khaki underline underline-offset-4" href="mailto:agroconsult@agroconsult.com.br">
                  agroconsult@agroconsult.com.br
                </a>
                .
              </p>
            </div>
            {onNavigate ? (
              <button
                type="button"
                onClick={() => onNavigate('home', 'contato')}
                className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold tracking-wide hover:bg-white/20 transition-colors"
              >
                Fale com a gente
              </button>
            ) : (
              <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold tracking-wide">
                Fale com a gente
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
