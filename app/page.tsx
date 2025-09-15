"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Shield,
  Globe,
  Users,
  Coins,
  ArrowRight,
  Copy,
  ExternalLink,
} from "lucide-react";

export default function URSALHomePage() {
  const contractAddress = "0x992561cd77c1b32d94826d833354FcC9C83810fb";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className=" bg-gradient-to-br from-primary/20 via-background to-secondary/10">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-secondary blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              className="mb-6 bg-primary/20 text-primary border-primary/30 text-sm font-medium py-1.5 px-4"
              variant="outline"
            >
              Token de Unificação
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              URSAL – União das Repúblicas Socialistas da América Latina
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-4xl mx-auto leading-relaxed">
              Todo grande projeto democrático começa pela unificação e
              distribuição.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 text-pretty max-w-4xl mx-auto leading-relaxed">
              O URSAL é um token virtual, descentralizado e independente, que
              representa o início da integração e moeda fictícia da União das
              Repúblicas Socialistas da América Latina – URSAL.
            </p>
            <div className="mb-8 p-6 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-red-600 dark:text-red-400 flex items-center justify-center">
                🚩 Mostre seu apoio, garanta já o seu token e faça parte da fase
                inicial do projeto enquanto há disponibilidade.
              </p>
            </div>

            {/* Contract Address */}
            <div className="bg-gradient-to-r from-card to-card/80 border-2 border-border/50 rounded-2xl p-6 max-w-2xl mx-auto shadow-lg">
              <p className="text-sm font-medium text-primary mb-3 flex items-center justify-center">
                <Coins className="h-4 w-4 mr-2" />
                Endereço do Contrato (Polygon)
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-between bg-muted/70 backdrop-blur-sm rounded-xl p-4 border border-border/30">
                <code className="text-sm font-mono text-foreground break-all">
                  {contractAddress}
                </code>
                <div className="flex gap-3 mt-3 sm:mt-0 sm:ml-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={copyToClipboard}
                    className="border-primary/30 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copiar
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="border-secondary/30 hover:bg-secondary/10 transition-all duration-300"
                  >
                    <a
                      href={`https://polygonscan.com/token/${contractAddress}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como garantir o token */}
      <section
        id="como-garantir"
        className="py-24 bg-gradient-to-b from-muted/10 to-muted/40"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
              🔹 1. Como garantir o meu token?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-14">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-10 py-6 rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a
                href="https://info.quickswap.exchange/analytics/v3/pairs/0x75f6f0af00b548b0be0b35d5c11d3b1f9ace6bf4?chainId=137"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium flex items-center"
              >
                👉 Acesse o Pool
                <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary/10 px-10 py-6 rounded-xl bg-transparent transition-all duration-300 hover:scale-105 text-lg font-medium"
              onClick={() => {
                document.getElementById("como-garantir")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Saiba Mais
            </Button>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/80">
              <CardHeader className="pb-8">
                <CardDescription className="text-lg leading-relaxed space-y-4">
                  <p>Estamos em fase inicial de implementação.</p>
                  <p>
                    O token URSAL está disponível na rede Polygon para compra em
                    edição limitada na QuickSwap:
                  </p>
                  <div className="bg-muted/70 p-4 rounded-lg border border-border/30">
                    <p className="font-semibold">👉 Acesse o Pool</p>
                    <p>
                      Clique na opção "Swap" e troque USDT (rede Polygon) por
                      URSAL.
                    </p>
                  </div>
                  <ul className="space-y-2 text-left">
                    <li>
                      • Atualmente, disponível apenas para troca com USDT.
                    </li>
                    <li>
                      • O Pool garante o melhor preço automático no momento da
                      operação.
                    </li>
                    <li>
                      • A disponibilidade é limitada e segue a lógica de ordem
                      de chegada.
                    </li>
                    <li>• Enquanto durarem os estoques.</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Como criar carteira e comprar */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              🔹 2. Como criar uma carteira, comprar USDT e trocar por URSAL?
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-1 gap-8">
              {/* Passo 1 */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Passo 1 – Criar sua carteira
                  </CardTitle>
                  <CardDescription className="text-lg">
                    <ul className="space-y-2">
                      <li>
                        • Baixe e instale a MetaMask (navegador ou celular).
                      </li>
                      <li>
                        • Configure a rede Polygon (Matic) dentro da MetaMask.
                      </li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Passo 2 */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">
                    Passo 2 – Comprar USDT na rede Polygon
                  </CardTitle>
                  <CardDescription className="text-lg">
                    <ul className="space-y-2">
                      <li>
                        • Crie uma conta em uma corretora confiável (ex.:
                        Binance).
                      </li>
                      <li>
                        • Compre USDT e faça a retirada diretamente na rede
                        Polygon (MATIC) para sua MetaMask.
                      </li>
                    </ul>
                    <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                      <p className="font-semibold text-yellow-600 dark:text-yellow-400">
                        ⚠️ Atenção: certifique-se de selecionar rede Polygon
                        (MATIC) na hora de sacar os USDT da Binance.
                      </p>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Passo 3 */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Passo 3 – Conectar à QuickSwap
                  </CardTitle>
                  <CardDescription className="text-lg">
                    <ul className="space-y-2">
                      <li>• Acesse o link do pool oficial.</li>
                      <li>• Conecte sua MetaMask à plataforma.</li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Passo 4 */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">
                    Passo 4 – Realizar a troca
                  </CardTitle>
                  <CardDescription className="text-lg">
                    <ul className="space-y-2">
                      <li>• Selecione USDT → URSAL.</li>
                      <li>• Confirme a transação na MetaMask.</li>
                      <li>
                        • Pronto! Agora você possui tokens URSAL na sua
                        carteira.
                      </li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Passo 5 */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Passo 5 – Visualizar seus tokens
                  </CardTitle>
                  <CardDescription className="text-lg">
                    <ul className="space-y-2">
                      <li>
                        • Caso não apareça automaticamente, adicione manualmente
                        o contrato do token URSAL à MetaMask.
                      </li>
                      <li>• O token URSAL estará visível no seu saldo.</li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* O que é o Token URSAL */}
      <section className="py-24 bg-gradient-to-b from-muted/10 to-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
              🔹 3. O que é o Token URSAL?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/80">
              <CardHeader className="pb-8">
                <CardDescription className="text-lg leading-relaxed">
                  <ul className="space-y-4 text-left">
                    <li>• Um token independente e descentralizado.</li>
                    <li>• Protegido da inflação por sua natureza digital.</li>
                    <li>
                      • Representa uma ideia de integração e apoio comunitário.
                    </li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Informações <span className="text-primary">Técnicas</span>
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Detalhes técnicos e especificações do token URSAL
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Especificações do Token
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Nome</span>
                    <span className="font-semibold">URSAL</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Símbolo</span>
                    <span className="font-semibold">$URSAL</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Rede</span>
                    <span className="font-semibold">Polygon</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Padrão</span>
                    <span className="font-semibold">ERC-20</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Decimais</span>
                    <span className="font-semibold">18</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Vantagens da Polygon
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">Baixas Taxas</p>
                      <p className="text-sm text-muted-foreground">
                        Transações com custo mínimo
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">Alta Velocidade</p>
                      <p className="text-sm text-muted-foreground">
                        Confirmações em segundos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">Compatibilidade Ethereum</p>
                      <p className="text-sm text-muted-foreground">
                        Funciona com carteiras e DApps existentes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">Sustentabilidade</p>
                      <p className="text-sm text-muted-foreground">
                        Rede eco-friendly com baixo consumo energético
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Faça Parte da <span className="text-primary">Revolução</span>{" "}
              URSAL
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Junte-se à comunidade que está construindo o futuro financeiro da
              América do Sul. Invista em URSAL e seja parte desta transformação
              histórica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                asChild
              >
                <a
                  href="https://info.quickswap.exchange/analytics/v3/pairs/0x75f6f0af00b548b0be0b35d5c11d3b1f9ace6bf4?chainId=137"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comprar $URSAL Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10 px-8 py-3 bg-transparent"
                onClick={() => {
                  document.getElementById("como-garantir")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Entrar na Comunidade
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-red-500/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-red-600 dark:text-red-400">
                ⚠️ Disclaimer
              </h2>
            </div>
            <Card className="border-2 border-red-500/20 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl">
              <CardHeader className="pb-8">
                <CardDescription className="text-lg leading-relaxed space-y-4">
                  <p className="font-semibold text-red-600 dark:text-red-400">
                    Este é um projeto de diversão, sem nenhuma promessa de
                    adoção, retorno financeiro ou rentabilidade futura.
                  </p>
                  <p>Você está adquirindo um token e levando apenas o token.</p>
                  <p className="font-semibold text-orange-600 dark:text-orange-400">
                    Existe risco potencial de perda parcial ou integral do valor
                    investido.
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">URSAL</span> – União das Repúblicas
              Socialistas da América Latina
            </h3>
            <p className="text-muted-foreground mb-6">
              Token de unificação da América Latina
            </p>
            <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
              <span>Token: $URSAL</span>
              <span>•</span>
              <span>Rede: Polygon</span>
              <span>•</span>
              <span>Padrão: ERC-20</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
