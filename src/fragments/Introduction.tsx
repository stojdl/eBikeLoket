import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

export default function Introduction() {
  return (
    <section className="relative w-full h-no-header-mobile grid place-items-center sm:h-no-header-small xl:h-no-header xl:items-end">
      <SectionTitle>elektrokolo bez starostí</SectionTitle>
      <div className="px-4 py-20 space-y-4 sm:space-y-6 sm:w-160">
        <p>
          Jedete do Lokte jako turista a nechcete se trápit s převozem Vašich
          kol? Nebo se chcete vydat s přáteli na jednorázový cyklovýlet a nemáte
          doma elektrokolo? Nejpohodlněji to vyřešíte právě s námi!
        </p>
        <p>
          Půjčte si elektrokolo přímo na cyklostezce! Můžete se tak ihned vydat
          na váš výlet po zajímavých místech v okolí, užít si skvělou jízdu
          přírodní krajinou a strávit příjemný den na čerstvém vzduchu. Přitom
          pohodlně a s velkou dojezdovou vzdáleností. Parkování přímo v místě
          půjčovny.
        </p>
        <div className="w-full pt-6 grid place-items-center">
          <Button link="#" icon="placeholder-white">
            Vyplnit nezávaznou poptávku
          </Button>
        </div>
      </div>
    </section>
  );
}
