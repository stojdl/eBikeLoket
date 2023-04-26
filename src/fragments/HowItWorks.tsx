import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

export default function HowItWorks() {
  return (
    <section className="relative w-full px-4 py-10 grid place-items-center space-y-12 md:px-16 md:py-16 xl:px-0 xl:py-40">
      <SectionTitle>poptávkový formulář, e-mail nebo telefon</SectionTitle>
      <div className="space-y-4 xl:w-160">
        <p>
          Požadavek na rezervaci kola můžete provést přes poptávkový formulář,{" "}
          <span className="whitespace-nowrap">e-mailem</span> nebo telefonicky.
        </p>
        <p>
          V den, na který máte potvrzenou rezervaci, si kolo můžete vyzvednout
          od 8:00. Své zákazníky prosíme o přibližné určení času vyzvednutí
          kola.
        </p>
        <p>
          Mějte s sebou platný občanský průkaz a připravenou kauci v hotovosti.
          Upozorňujeme, že ve smluvním vztahu o výpůjčce může být pouze osoba
          starší 18 let.
        </p>
        <div className="space-y-2">
          <p>Platbu provedete na místě převzetí kola, než vyrazíte na cestu:</p>
          <div className="pl-4 flex items-center space-x-4 sm:pl-8">
            <p>a)</p>
            <p>Hotově</p>
          </div>
          <div className="pl-4 flex space-x-4 sm:pl-8">
            <p>b)</p>
            <p>
              Převodem na náš bankovní účet. U tohoto způsobu platby vyžadujeme
              potvrzení o převodu nebo můžete provést tzv. „;“ (u okamžitého
              převodu Vám může banka naúčtovat dodatečný poplatek).
            </p>
          </div>
        </div>
        <p>
          Po vyřízení formalit budete seznámeni s fungováním a obsluhou
          elektrokola a jeho příslušenstvím a se smlouvou o výpůjčce. Silně
          doporučujeme během jízdy na kole užívat cyklistickou přilbu. Tu můžete
          mít svojí nebo Vám ji bezplatně zapůjčíme. Také budete obeznámeni o
          celkovém stavu kola, které si přebíráte.
        </p>
        <p>
          Při vrácení elektrokola nejdříve zkontrolujeme stav elektrokola. Poté
          Vám vrátíme kauci
        </p>
        <p>
          Nevyšlo Vám počasí? I nám se to často stává. Zrušení rezervace je
          naprosto bezplatné. Pokud byl Váš program narušen něčím neočekávaným,
          určitě nás co nejdříve kontaktujte pro bezproblémové zrušení
          rezervace. Pokud budete mít zájem, můžeme nalézt náhradní termín pro
          výpůjčku.
        </p>
        <p>Těšíme se na Vaší návštěvu!</p>
      </div>
      <Button link="#" icon="placeholder-white">
        Vyplnit nezávaznou poptávku
      </Button>
    </section>
  );
}
