import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  FireIcon,
  HeartIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Beneficios de un plan nutricional personalizado",
  desc: "Un plan diseñado a tu medida te ayuda a mejorar tu salud, aumentar tu energía y optimizar tu rendimiento físico. Obtén resultados sin sacrificar tu bienestar.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Alimentación equilibrada",
      desc: "Nuestros planes están diseñados por expertos en nutrición para brindarte los nutrientes que realmente necesitas.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Mejora tu rendimiento",
      desc: "Con el plan adecuado, notarás más energía y mejor desempeño en tu día a día.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Resultados a largo plazo",
      desc: "No se trata de dietas rápidas, sino de crear hábitos saludables y sostenibles.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "¿Por qué FitNutri es la mejor opción?",
  desc: "FitNutri combina tecnología y asesoría profesional para ofrecerte un servicio de nutrición y bienestar único. Con herramientas digitales y seguimiento personalizado, tu éxito está garantizado.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Quema grasa de forma efectiva",
      desc: "Diseñamos planes que optimizan tu metabolismo para una pérdida de grasa saludable.",
      icon: <FireIcon />,
    },
    {
      title: "Cuida tu corazón",
      desc: "Nuestros planes están diseñados para mejorar tu salud cardiovascular y bienestar general.",
      icon: <HeartIcon />,
    },
    {
      title: "Asesoría profesional",
      desc: "Contamos con un equipo de expertos en nutrición y fitness listos para guiarte.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
