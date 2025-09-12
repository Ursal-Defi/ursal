"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, Globe, Users, Coins, ArrowRight, Copy, ExternalLink } from "lucide-react"

export default function URSALHomePage() {
  const contractAddress = "0x992561cd77c1b32d94826d833354FcC9C83810fb"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/10">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-secondary blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-sm font-medium py-1.5 px-4" variant="outline">
              Token $URSAL na Polygon Network
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              <span>URSAL</span> <span>Crypto</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 text-pretty max-w-3xl mx-auto leading-relaxed">
              A criptomoeda que representa a união e o futuro da América do Sul. Invista no token que conecta
              comunidades e constrói pontes para um amanhã próspero.
            </p>
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
                  Começar a Investir
                  <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary/10 px-10 py-6 rounded-xl bg-transparent transition-all duration-300 hover:scale-105 text-lg font-medium"
              >
                Saiba Mais
              </Button>
            </div>

            {/* Contract Address */}
            <div className="bg-gradient-to-r from-card to-card/80 border-2 border-border/50 rounded-2xl p-6 max-w-2xl mx-auto shadow-lg">
              <p className="text-sm font-medium text-primary mb-3 flex items-center justify-center">
                <Coins className="h-4 w-4 mr-2" />
                Endereço do Contrato (Polygon)
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-between bg-muted/70 backdrop-blur-sm rounded-xl p-4 border border-border/30">
                <code className="text-sm font-mono text-foreground break-all">{contractAddress}</code>
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

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-muted/10 to-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20 text-sm font-medium py-1.5 px-4" variant="outline">
              Oportunidade de Investimento
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
              Por que Investir em <span className="font-extrabold">$URSAL</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Descubra os incentivos únicos que fazem do URSAL uma oportunidade de investimento promissora para o futuro da América do Sul
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 lg:col-span-3 rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/80">
              <CardHeader className="pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6 mx-auto transform hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <Globe className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
                  Moeda Unificada: O Futuro da Integração
                </CardTitle>
                <CardDescription className="text-center max-w-4xl mx-auto text-lg leading-relaxed">
                  Uma moeda unificada oferece estabilidade econômica, reduz custos de transação entre países, elimina
                  volatilidade cambial e fortalece o poder de negociação regional. Diferente dos sistemas monetários
                  tradicionais fragmentados, o <span className="font-medium text-primary">URSAL</span> representa uma visão integrada que beneficia toda a comunidade
                  sul-americana através da cooperação financeira e desenvolvimento conjunto.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Potencial de Crescimento</CardTitle>
                <CardDescription>
                  Token com fundamentos sólidos e visão de longo prazo para valorização sustentável
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Segurança Blockchain</CardTitle>
                <CardDescription>
                  Construído na rede Polygon, oferecendo transações rápidas, seguras e com baixo custo
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Visão Continental</CardTitle>
                <CardDescription>
                  Projeto focado na integração e desenvolvimento econômico da América do Sul
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Comunidade Ativa</CardTitle>
                <CardDescription>
                  Base sólida de apoiadores comprometidos com os valores e objetivos do projeto
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Coins className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Tokenomics Transparente</CardTitle>
                <CardDescription>
                  Distribuição clara e justa, com foco na sustentabilidade e crescimento orgânico
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <ArrowRight className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Entrada Antecipada</CardTitle>
                <CardDescription>
                  Oportunidade de participar desde o início de um projeto com potencial disruptivo
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
                  <CardTitle className="text-xl">Especificações do Token</CardTitle>
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
                  <CardTitle className="text-xl">Vantagens da Polygon</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">Baixas Taxas</p>
                      <p className="text-sm text-muted-foreground">Transações com custo mínimo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">Alta Velocidade</p>
                      <p className="text-sm text-muted-foreground">Confirmações em segundos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">Compatibilidade Ethereum</p>
                      <p className="text-sm text-muted-foreground">Funciona com carteiras e DApps existentes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">Sustentabilidade</p>
                      <p className="text-sm text-muted-foreground">Rede eco-friendly com baixo consumo energético</p>
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
              Faça Parte da <span className="text-primary">Revolução</span> URSAL
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Junte-se à comunidade que está construindo o futuro financeiro da América do Sul. Invista em URSAL e seja
              parte desta transformação histórica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3" asChild>
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
              >
                Entrar na Comunidade
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">URSAL</span> Crypto
            </h3>
            <p className="text-muted-foreground mb-6">Unindo a América do Sul através da tecnologia blockchain</p>
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
  )
}
