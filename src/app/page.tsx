import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
//import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
//import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />

      <SectionTitle preTitle="¿Por qué elegirnos?" title="Transforma tu vida con FitNutri">
        En FitNutri, creamos planes de nutrición y entrenamiento personalizados 
        para ayudarte a alcanzar tus objetivos de salud y bienestar. Con el respaldo 
        de expertos en fitness y nutrición, tu transformación comienza hoy.  
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      {/* <SectionTitle preTitle="Mira el video" title="Conoce cómo podemos ayudarte">
        Descubre cómo nuestros planes personalizados pueden cambiar tu vida. 
        Con el enfoque adecuado en nutrición y ejercicio, alcanzar tus metas 
        nunca ha sido tan fácil.  
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" /> */}

      <SectionTitle preTitle="Testimonios" title="Nuestros clientes dicen">
        La mejor forma de comprobar nuestro servicio es con la experiencia de 
        quienes ya confiaron en FitNutri. Aquí tienes algunas opiniones reales.  
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="Preguntas Frecuentes" title="Resolvemos tus dudas">
        Respondemos las preguntas más comunes para que tengas toda la información 
        antes de comenzar tu transformación con FitNutri.  
      </SectionTitle>

      <Faq />
   
    </Container>
  );
}
