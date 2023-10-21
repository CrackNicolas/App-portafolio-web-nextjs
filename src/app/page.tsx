'use client'

import { useEffect, useRef, useState } from "react";
import { I18nextProvider } from 'react-i18next'

import i18next from 'i18next'

import en from '@/i18n/translations/en/global.json'
import es from '@/i18n/translations/es/global.json';

import ComponentIntro from "@/components/partials/intro";
import ComponentNav from "@/components/partials/nav";
import ComponentStart from "@/components/layouts/start";
import ComponentAbout from "@/components/layouts/about";
import ComponentServices from "@/components/layouts/services";
import ComponentExperience from "@/components/layouts/experience";
import ComponentProyects from "@/components/layouts/proyects";
import ComponentContact from "@/components/layouts/contact";
import ComponentFooter from "@/components/layouts/footer";

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

  return (
    <main>
      <I18nextProvider i18n={i18next}>
        <ComponentIntro setView={setView} />
        <section ref={sections} className={`${view ? 'visible ' : 'hidden'}`}>
          <ComponentNav paint={paint_icon} />
          <ComponentStart animate={(paint_icon === 'init')} />
          <ComponentAbout animate={(paint_icon === 'about')} />
          <ComponentServices animate={(paint_icon === 'services')} />
          <ComponentExperience animate={(paint_icon === 'experience')} />
          <ComponentProyects animate={(paint_icon === 'proyects')} />
          <ComponentContact animate={(paint_icon === 'contact')} />
          <ComponentFooter />
        </section>
      </I18nextProvider>
    </main>
  )
}