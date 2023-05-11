import SectionTitle from "@/components/SectionTitle";
import Title from "@/components/Title";
import React from "react";

export default function IntrotuctionToOrder() {
  return (
    <section className="relative w-full px-4 py-10 grid place-items-center space-y-8 text-base md:px-16 md:py-16 xl:px-0 xl:py-40">
      <SectionTitle>
        seznámení s řádem, základní body smlouvy a ochrana osobních údajů
      </SectionTitle>
      <div className="space-y-4 xl:w-160">
        <p>
          Jak to u nás v praxi chodí, už z předchozí stránky víte. Nyní se
          pojďme seznámit s teoreticko-právnickými fakty.
        </p>
        <p>
          V momentě, kdy se k nám dostavíte pro vypůjčené elektrokolo, podpisem
          smlouvy s námi vstupujete do právně smluvního vztahu, jehož plnění je
          pro obě smluvní strany závazné a řídí se občanskoprávním zákonem.
        </p>
        <p>
          V rámci uzavření smluvního vztahu si vyhrazujeme právo zkontrolovat
          Váš občanský průkaz či jiný doklad totožnosti a pořídit z něj zápis.
          Způsob nakládání s Vašimi osobními údaji je v souladu s ochranou
          osobních údajů.
        </p>
        <p>
          Identifikace Vaší strany ve smlouvě je důležitá mimo jiné i z toho
          hlediska, že elektrokolo smí používat pouze osoba uvedená ve smlouvě o
          výpůjčce (vypůjčitel). Předávání elektrokola jiné osobě, než je
          uvedena ve smlouvě, je zakázáno.
        </p>
        <p>
          Po podpisu smlouvy nese veškerou zodpovědnost za elektrokolo a
          příslušenství vypůjčitel až do doby, kdy elektrokolo řádně předá zpět
          půjčujícímu.
        </p>
        <p>
          Jízda na námi vypůjčeném elektrokole je na vlastní nebezpečí
          vypůjčitele.
        </p>
        <p>
          Půjčující nenese žádnou zodpovědnost za škody způsobené vypůjčitelem
          daným elektrokolem na jiných předmětech movitých i nemovitých a jiných
          osobách po celou dobu nájmu, ani za zdraví vypůjčitele po celou dobu
          výpůjčky.
        </p>
        <p>
          Vyhrazujeme si právo použít příslušnou část kauce na úhradu případné
          škody na našem majetku způsobené vypůjčitelem.
        </p>
        <p>
          Při ztrátě či odcizení vypůjčených věci hradí vypůjčitel plnou cenu
          konkrétního předmětu.
        </p>
      </div>
      <div className="space-y-4 xl:w-160">
        <Title level={3}>Pravidla ochrany osobních údajů</Title>
        <div className="space-y-2">
          <p>
            Provozovatel webových stránek Půjčovna elektrokol Loket na stránkách{" "}
            <span className="font-bold">www.ebikeloket.cz</span> IČO{" "}
            <span className="font-bold">87444101</span>, sídlo Lužná 622, 357 33
            Loket zpracovává osobní údaje poskytnuté zájemcem o výpůjčku
            elektrokola za účelem plnění a dodatečného podepsání smlouvy o
            výpůjčce věci movité, za účelem zpracování objednávky, potvrzení a
            realizace této služby, zúčtování plateb a nezbytné komunikace mezi
            smluvními stranami po dobu vyžadovanou podle zvláštních právních
            předpisů.
          </p>
          <div className="grid grid-cols-6 gap-x-4 gap-y-2">
            <p className="text-right">1)</p>
            <p className="col-span-5">
              Správcem osobních údajů podle paragrafu 5 písm. o) Zákona č.
              18/2018 O ochraně osobních údajů ve znění pozdějších předpisů
              (dále jen „Zákon“) je Radek Friš; IČO{" "}
              <span className="font-bold">87444101</span> se sídlem Lužná 622,
              357 33 Loket (dále jen „Správce“).
            </p>
            <p className="text-right">2)</p>
            <p className="col-span-5">
              Kontaktní údaje správce jsou: e-mail: info@ebikeloket.cz,
              tel.:&nbsp;
              <span className="font-bold">777&nbsp;117&nbsp;133</span>.
            </p>
            <p className="text-right">3)</p>
            <p className="col-span-5">
              Osobními údaji se rozumí všechny informace identifikující fyzickou
              nebo právnickou osobu.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4 xl:w-160">
        <Title level={4}>Zdroje zpracovávaných osobních údajů</Title>
        <div className="grid grid-cols-6 gap-x-4 gap-y-2">
          <p className="text-right">1)</p>
          <p className="col-span-5">
            Správce zpracovává osobní údaje, které mu se souhlasem poskytl
            zákazník a které správce získal na základě plnění Smlouvy o výpůjčce
            věci movité;
          </p>
          <p className="text-right">2)</p>
          <p className="col-span-5">
            Správce zpracovává jen identifikační a kontaktní údaje kupujícího
            nezbytné pro plnění Smlouvy o výpůjčce věci movité;
          </p>
          <p className="text-right">3)</p>
          <p className="col-span-5">
            Správce zpracovává osobní údaje za účelem plnění poskytnuté služby,
            zúčtování plateb a k nezbytné komunikaci mezi smluvními stranami po
            dobu vyžadovanou podle zvláštních právních předpisů. Osobní údaje
            nebudou zveřejňované a nebude docházet k přenosu do dalších zemí.
          </p>
        </div>
      </div>
      <div className="space-y-4 xl:w-160">
        <Title level={4}>Účel zpracování osobních údajů</Title>
        <p>
          Správce zpracovává osobní údaje kupujícího z následujících důvodů:
        </p>
        <div className="grid grid-cols-6 gap-x-4 gap-y-2">
          <p className="text-right">1)</p>
          <p className="col-span-5">
            Za účelem vytvoření rezervace na výpůjčku elektrokola dle
            zákazníkovo výběru z webové stránky www.ebikeloket.cz podle
            paragrafu 13 odst. 1 písm. a) Zákona č. 18/2018 O ochraně osobních
            údajů;
          </p>
          <p className="text-right">2)</p>
          <p className="col-span-5">
            Za účelem vyřízení poptávky zákazníka (jméno, adresa, e-mail,
            telefonní číslo);
          </p>
          <p className="text-right">3)</p>
          <p className="col-span-5">
            Za účelem plnění práv a povinností vyplývajících ze smluvního vztahu
            mezi kupujícím a Správcem;
          </p>
          <p className="text-right">4)</p>
          <p className="col-span-5">
            Poskytnutí osobních údajů je nezbytným požadavkem pro plnění Smlouvy
            o výpůjčce. Bez poskytnutí osobních údajů nelze smlouvu uzavřít.
          </p>
        </div>
      </div>
      <div className="space-y-4 xl:w-160">
        <Title level={4}>Doba uchovávání osobních údajů</Title>
        <div className="grid grid-cols-6 gap-x-4 gap-y-2">
          <p className="text-right">1)</p>
          <p className="col-span-5">
            Správce uchovává osobní údaje po dobu nezbytnou k výkonu práv a
            povinností vyplývajících ze smluvního vztahu mezi kupujícím a
            Správcem a po dobu 3 let od ukončení smluvního vztahu;
          </p>
          <p className="text-right">2)</p>
          <p className="col-span-5">
            Po uplynutí doby uchovávání osobních údajů je Správce povinen údaje
            smazat.
          </p>
        </div>
      </div>
      <div className="space-y-4 xl:w-160">
        <Title level={4}>Příjemci a zpracovatelé osobních údajů</Title>
        <p>
          Třetí stranou, která přijímá osobní údaje kupujícího, jsou
          subdodavatelé Správce. Služby těchto subdodavatelů bezpodmínečně
          souvisí s úspěšným plněním Smlouvy o výpůjčce věci movité mezi
          správcem a kupujícím.
        </p>
        <p>Subdodavateli správce jsou:</p>
        <div className="grid grid-cols-6 gap-x-4 gap-y-2">
          <p className="text-right">·</p>
          <p className="col-span-5">
            Endora (systém webových stránek www.ebikeloket.cz);
          </p>
          <p className="text-right">·</p>
          <p className="col-span-5">
            Google Analytics (analýza webových stránek);
          </p>
        </div>
      </div>
      <div className="space-y-4 xl:w-160">
        <Title level={4}>Práva kupujícího</Title>
        <p></p>
        <div className="grid grid-cols-6 gap-x-4 gap-y-2">
          <p className="text-right">1)</p>
          <p className="col-span-5">Na přístup ke svým osobním údajům;</p>
          <p className="text-right">2)</p>
          <p className="col-span-5">Na opravu osobních údajů;</p>
          <p className="text-right">3)</p>
          <p className="col-span-5">Na vymazání osobních údajů;</p>
          <p className="text-right">4)</p>
          <p className="col-span-5">Vznést námitku proti zpracování;</p>
          <p className="text-right">5)</p>
          <p className="col-span-5">Na přenositelnost údajů;</p>
          <p className="text-right">6)</p>
          <p className="col-span-5">
            Odvolat souhlas se zpracováním osobních údajů písemně nebo
            elektronicky na e-mailové adrese: info@ebikeloket.cz;
          </p>
        </div>
      </div>
      <div className="space-y-4 xl:w-160">
        <Title level={4}>Zabezpečení osobních údajů</Title>
        <div className="grid grid-cols-6 gap-x-4 gap-y-2">
          <p className="text-right">1)</p>
          <p className="col-span-5">
            Správce prohlašuje, že přijal všechna vhodná technická a organizační
            opatření nutná k zabezpečení osobních údajů kupujícího;
          </p>
          <p className="text-right">2)</p>
          <p className="col-span-5">
            Správce přijal technická opatření k zabezpečení datových úložišť
            osobních údajů, zejména zabezpečení přístupu k počítači heslem,
            používání antivirového programu a pravidelnou údržbu počítačů.
          </p>
        </div>
      </div>
      <div className="space-y-4 xl:w-160">
        <Title level={4}>Závěrečná ustanovení</Title>
        <div className="grid grid-cols-6 gap-x-4 gap-y-2">
          <p className="text-right">1)</p>
          <p className="col-span-5">
            Odesláním elektronické poptávky na webové stránce www.ebikeloket.cz
            potvrzuje zájemce o nabízené služby, že byl obeznámený s podmínkami
            ochrany osobních údajů a že je v celém rozsahu přijímá;
          </p>
          <p className="text-right">2)</p>
          <p className="col-span-5">
            S těmito pravidly souhlasí zájemce o nabízené služby zaškrtnutím
            políčka v poptávce;
          </p>
          <p className="text-right">3)</p>
          <p className="col-span-5">
            Správce je oprávněný tato Pravidla kdykoliv změnit. Novou verzi
            Pravidel je povinný zveřejnit na své webové stránce.
          </p>
        </div>
        <p>
          Tato Pravidla vstupují v platnost{" "}
          <span className="font-bold">1. 4. 2023</span>.
        </p>
      </div>
    </section>
  );
}
