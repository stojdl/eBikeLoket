import Title from "@/components/Title";
import React from "react";

export default function WhereToGo() {
  return (
    <section className="w-full h-screen grid place-items-center bg-primary text-white">
      <div className="px-4 space-y-8 md:px-16 lg:w-128 lg:px-0 lg:space-y-12">
        <div className="space-y-4 lg:space-y-6">
          <Title level={3}>Kam se od nás vydat</Title>
          <div className="space-y-3 lg:space-y-4">
            <p>
              Úplně jednoduše – doleva nebo doprava. Není to žádná věda. Pokud
              jste u nás poprvé, jistě oceníte stručný přehled hlavního tahu
              cyklotrasy.
            </p>
            <p>
              Doleva – směr Svatošské skály – pokračuje na Karlovy Vary,
              lázeňský okruh nebo lze pokračovat až na Klášterec nad Ohří a
              Kadaň.
            </p>
            <p>
              Doprava – se zastávkou na novodobém Statku Bernard v Královském
              Poříčí, směr Sokolov až do Chebu.
            </p>
          </div>
        </div>
        <div className="space-y-4 lg:space-y-6">
          <Title level={4}>Užitečné odkazy:</Title>
          <div className="space-y-3 lg:space-y-4">
            <a
              href="https://www.cykloohre.cz/"
              className="block w-max underline hover:text-gray-400"
            >
              Cyklostezska Ohře
            </a>
            <a
              href="https://zivykraj.cz/aktivity-a-zazitky/cykloturistika/cyklotrasy"
              className="block w-max  underline hover:text-gray-400"
            >
              Cyklotrasy v Karlovarském kraji
            </a>
            <p>
              Můžete si naplánovat trasu rovnou od nás{" "}
              <a
                href="https://mapy.cz/zakladni?planovani-trasy&rc=9dNZTxYbam&rs=addr&rs=&ri=11752350&ri=&rfi=332776868&mrp=%7B%22c%22%3A121%7D&xc=%5B%5D&x=12.7707018&y=50.2142917&z=11 http://cyklotrasy.cz/encyklopedie/objekty1.phtml?id=113913&id_t_oblasti=113913"
                className="underline hover:text-gray-400"
              >
                kliknutím zde
              </a>
              . Budete přesměrováni na Mapy.cz s počátečním bodem trasy od naší
              půjčovny.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
