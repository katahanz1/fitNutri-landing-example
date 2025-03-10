"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "¿En qué consiste el servicio de FitNutri?",
    answer: "Ofrecemos planes personalizados de nutrición y entrenamiento para ayudarte a alcanzar tus objetivos de salud y bienestar.",
  },
  {
    question: "¿Los planes son personalizados?",
    answer: "Sí, cada plan se adapta a tus necesidades, estilo de vida y objetivos específicos.",
  },
  {
    question: "¿Cómo recibo mi plan de nutrición y entrenamiento?",
    answer: "Una vez completado el análisis inicial, recibirás tu plan personalizado por correo electrónico o en nuestra plataforma.",
  },
  {
    question: "¿Puedo contactar con un asesor si tengo dudas?",
    answer: "Sí, puedes comunicarte con nuestro equipo de expertos para resolver cualquier duda sobre tu plan.",
  },
];

