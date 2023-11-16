'use client'

import { useEffect, useRef, useState } from "react";
import { I18nextProvider } from 'react-i18next'

import i18next from 'i18next'

import en from '@/i18n/translations/en/global.json'
import es from '@/i18n/translations/es/global.json';

import ComponentIntro from "@/components/partials/intro";
import ComponentNav from "@/components/partials/nav/container";
import ComponentStart from "@/components/layouts/start";
import ComponentAbout from "@/components/layouts/about";
import ComponentServices from "@/components/layouts/services";
import ComponentExperience from "@/components/layouts/experience";
import ComponentProyects from "@/components/layouts/proyects";
import ComponentContact from "@/components/layouts/contact";
import ComponentFooter from "@/components/layouts/footer";
import ComponentEducacion from "@/components/layouts/education";

import { Detect_theme } from "@/logic/style/detect_theme";

i18next.init({
  interpolation: {
    escapeValue: false
  },
  lng: "es",
  resources: {
    es: {
      global: es
    },
    en: {
      global: en
    }
  }
})

export default function Home() {
  const [view, setView] = useState<boolean>(false);
  const [paint_icon, setPaint_icon] = useState<string>('init');
  const [theme, setTheme] = useState<string>(Detect_theme());
  const [lenguaje, setLenguaje] = useState<boolean>(true);

  const sections = useRef<any>(null);

  const handle_scroll = () => {
    let top = window.scrollY;

    for (let section of sections.current.children) {
      let offset = section.offsetTop - 400;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');
      if (top >= offset && top < offset + height) {
        setPaint_icon(id);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handle_scroll);
    return () => window.removeEventListener('scroll', handle_scroll);
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html')?.classList.add('dark')
    }
    if (theme === 'light') {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [theme]);

  return (
    <main>
      <I18nextProvider i18n={i18next}>
        <ComponentIntro setView={setView} />
        <section ref={sections} className={`${view ? 'visible ' : 'hidden'}`}>
          <ComponentNav paint={paint_icon} lenguaje={lenguaje} setLenguaje={setLenguaje} theme={theme} setTheme={setTheme} />
          <ComponentStart animate={(paint_icon === 'init')} theme={theme} />
          <ComponentAbout animate={(paint_icon === 'about')} />
          <ComponentServices animate={(paint_icon === 'services')} />
          <ComponentExperience animate={(paint_icon === 'experience')} />
          <ComponentProyects animate={(paint_icon === 'proyects')} />
          <ComponentEducacion animate={(paint_icon === 'education')} />
          <ComponentContact animate={(paint_icon === 'contact')} lenguaje={lenguaje} />
          <ComponentFooter animate={(paint_icon === 'contact')} />
        </section>
      </I18nextProvider>
    </main>
  )
}