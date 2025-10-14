const fs = require("fs");
const path = require("path");

// Caminho para o arquivo index.html gerado pelo build
const indexPath = path.join(__dirname, "..", "build", "index.html");

// Conteúdo SEO que será injetado no HTML
const seoContent = `
    <!-- Conteúdo SEO inicial (visível para crawlers) -->
    <div id="seo-content" style="position: absolute; left: -9999px; top: -9999px;">
      <h1>Pousada Dora Mar - Hospedagem Familiar em Guarapari ES | Praia do Morro</h1>
      <p>
        A Pousada Dora Mar é uma hospedagem familiar aconchegante localizada na Praia do Morro, 
        em Guarapari-ES. Oferecemos ambiente familiar, wi-fi grátis, café da manhã incluso, 
        estacionamento e capacidade para até 50 pessoas. A apenas 5 minutos da Praia do Morro.
      </p>
      <h2>Hospedagem em Guarapari - Pousada Dora Mar</h2>
      <p>
        Nossa pousada em Guarapari oferece quartos confortáveis, ambiente familiar, 
        área de churrasqueira, cozinha disponível e estacionamento. Ideal para famílias 
        e grupos que buscam conforto e tranquilidade na Praia do Morro.
      </p>
      <h2>Por Que Escolher a Pousada Dora Mar em Guarapari?</h2>
      <p>
        Localização privilegiada na Praia do Morro, ambiente familiar aconchegante, 
        wi-fi grátis, café da manhã incluso, estacionamento, área de churrasqueira 
        e capacidade para até 50 pessoas. Tudo para tornar sua estadia inesquecível.
      </p>
      <h3>Localização e Contato</h3>
      <p>
        Endereço: R. Carangola, 292 - Praia do Morro, Guarapari - ES, CEP: 29216-150<br>
        Telefone: (27) 98867-0914<br>
        WhatsApp: (27) 98867-0914<br>
        Localização: A 5 minutos da Praia do Morro<br>
        Capacidade: Até 50 pessoas
      </p>
      <h3>Comodidades da Pousada</h3>
      <ul>
        <li>Wi-fi grátis em toda a pousada</li>
        <li>Café da manhã incluso</li>
        <li>Estacionamento disponível</li>
        <li>Área de churrasqueira</li>
        <li>Cozinha disponível para uso</li>
        <li>Ambiente familiar aconchegante</li>
        <li>Quartos confortáveis</li>
        <li>Localização privilegiada na Praia do Morro</li>
      </ul>
      <h3>Como Chegar à Pousada Dora Mar</h3>
      <p>
        Localizada na R. Carangola, 292, no bairro Praia do Morro, em Guarapari-ES. 
        A pousada fica a apenas 5 minutos de caminhada da Praia do Morro, uma das 
        praias mais belas de Guarapari. Fácil acesso e localização central no bairro.
      </p>
    </div>
`;

try {
  // Verificar se o arquivo index.html existe
  if (!fs.existsSync(indexPath)) {
    console.log(
      "⚠️  Arquivo index.html não encontrado no build. Executando build primeiro..."
    );
    console.log(
      "📝 Execute 'npm run build' ou 'yarn build' antes de rodar este script."
    );
    process.exit(1);
  }

  // Ler o arquivo index.html
  let htmlContent = fs.readFileSync(indexPath, "utf8");

  // Verificar se o conteúdo SEO já foi adicionado
  if (htmlContent.includes('id="seo-content"')) {
    console.log("ℹ️  Conteúdo SEO já foi adicionado anteriormente.");
    console.log("🔄 Atualizando conteúdo SEO...");

    // Remover conteúdo SEO existente
    htmlContent = htmlContent.replace(
      /<div id="seo-content"[^>]*>[\s\S]*?<\/div>/,
      ""
    );
  }

  // Injetar o conteúdo SEO antes do fechamento do body
  htmlContent = htmlContent.replace("</body>", `${seoContent}\n  </body>`);

  // Salvar o arquivo modificado
  fs.writeFileSync(indexPath, htmlContent, "utf8");

  console.log("✅ Conteúdo SEO adicionado ao index.html com sucesso!");
  console.log(
    "📝 O Google agora conseguirá ler o conteúdo sem depender de JavaScript"
  );
  console.log("🚀 Seu site está otimizado para SEO e carregamento rápido!");
  console.log("");
  console.log("📊 Benefícios implementados:");
  console.log("   • Conteúdo visível para crawlers do Google");
  console.log("   • Melhor indexação nos resultados de busca");
  console.log("   • Carregamento mais rápido para usuários");
  console.log(
    "   • SEO otimizado para 'pousada guarapari' e 'hospedagem praia do morro'"
  );
} catch (error) {
  console.error("❌ Erro ao adicionar conteúdo SEO:", error.message);
  console.error("🔧 Verifique se o build foi executado corretamente.");
  process.exit(1);
}
