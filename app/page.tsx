"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
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
  const { t } = useTranslation();
  const contractAddress = "0x992561cd77c1b32d94826d833354FcC9C83810fb";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
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
              {t("unification-token")}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {t("title")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-4xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 text-pretty max-w-4xl mx-auto leading-relaxed">
              {t("description")}
            </p>
            <div className="mb-8 p-6 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-red-600 dark:text-red-400 flex items-center justify-center">
                {t("early-support")}
              </p>
            </div>

            {/* Contract Address */}
            <div className="bg-gradient-to-r from-card to-card/80 border-2 border-border/50 rounded-2xl p-6 max-w-2xl mx-auto shadow-lg">
              <p className="text-sm font-medium text-primary mb-3 flex items-center justify-center">
                <Coins className="h-4 w-4 mr-2" />
                {t("contract-address")}
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
                    {t("copy")}
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
                      {t("view")}
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
              {t("how-to-get")}
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
                {t("access-pool")}
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
              {t("learn-more")}
            </Button>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/80">
              <CardHeader className="pb-8">
                <CardDescription className="text-lg leading-relaxed space-y-4">
                  <p>{t("initial-phase")}</p>
                  <p>{t("polygon-limited")}</p>
                  <div className="bg-muted/70 p-4 rounded-lg border border-border/30">
                    <p className="font-semibold">{t("access-pool")}</p>
                    <p>{t("access-pool-instruction")}</p>
                  </div>
                  <ul className="space-y-2 text-left">
                    <li>• {t("bullet-usdt-only")}</li>
                    <li>• {t("bullet-best-price")}</li>
                    <li>• {t("bullet-limited-availability")}</li>
                    <li>• {t("bullet-while-stocks-last")}</li>
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
              {t("how-to-create-wallet")}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-1 gap-8">
              {/* Passo 1 */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {t("step1-title")}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    <ul className="space-y-2">
                      <li>• {t("step1-install-metamask")}</li>
                      <li>• {t("step1-configure-polygon")}</li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Passo 2 */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">
                    {t("step2-title")}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    <ul className="space-y-2">
                      <li>• {t("step2-create-account")}</li>
                      <li>• {t("step2-buy-withdraw")}</li>
                    </ul>
                    <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                      <p className="font-semibold text-yellow-600 dark:text-yellow-400">
                        {t("step2-warning")}
                      </p>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Passo 3 */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {t("step3-title")}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    <ul className="space-y-2">
                      <li>• {t("step3-access-pool")}</li>
                      <li>• {t("step3-connect-metamask")}</li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Passo 4 */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">
                    {t("step4-title")}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    <ul className="space-y-2">
                      <li>• {t("step4-select-swap")}</li>
                      <li>• {t("step4-confirm-transaction")}</li>
                      <li>• {t("step4-success")}</li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Passo 5 */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {t("step5-title")}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    <ul className="space-y-2">
                      <li>• {t("step5-manual-add")}</li>
                      <li>• {t("step5-visible-balance")}</li>
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
              {t("what-is-ursal")}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/80">
              <CardHeader className="pb-8">
                <CardDescription className="text-lg leading-relaxed">
                  <ul className="space-y-4 text-left">
                    <li>• {t("ursal-independent")}</li>
                    <li>• {t("ursal-inflation")}</li>
                    <li>• {t("ursal-community")}</li>
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
                {t("technical-info")}
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                {t("technical-details")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl">{t("token-specs")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">{t("name")}</span>
                    <span className="font-semibold">URSAL</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">{t("symbol")}</span>
                    <span className="font-semibold">$URSAL</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">
                      {t("network")}
                    </span>
                    <span className="font-semibold">Polygon</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">
                      {t("standard")}
                    </span>
                    <span className="font-semibold">ERC-20</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">
                      {t("decimals")}
                    </span>
                    <span className="font-semibold">18</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl">
                    {t("polygon-advantages")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">{t("low-fees")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("low-fees-desc")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">{t("high-speed")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("high-speed-desc")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">{t("eth-compatibility")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("eth-compatibility-desc")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">{t("sustainability")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("sustainability-desc")}
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
              {t("join-revolution")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              {t("join-community-desc")}
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
                  {t("buy-now")}
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
                {t("join-community")}
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
                {t("disclaimer")}
              </h2>
            </div>
            <Card className="border-2 border-red-500/20 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl">
              <CardHeader className="pb-8">
                <CardDescription className="text-lg leading-relaxed space-y-4">
                  <p className="font-semibold text-blue-600 dark:text-blue-400">
                    {t("disclaimer-fun-project")}
                  </p>
                  <p className="text-muted-foreground">
                    {t("disclaimer-dev-website")}
                  </p>
                  <p className="font-semibold text-red-600 dark:text-red-400">
                    {t("disclaimer-fun-no-promise")}
                  </p>
                  <p>{t("disclaimer-token-only")}</p>
                  <p className="font-semibold text-orange-600 dark:text-orange-400">
                    {t("disclaimer-risk")}
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
              <span className="text-primary">URSAL</span> – {t("footer-title").replace("URSAL – ", "")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t("footer-subtitle")}
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
