'use client'

import { useEffect, useRef, useState } from "react";

import ComponentNav from "@/components/partials/nav/container";
import ComponentIntro from "@/components/partials/intro";
import ComponentStart from "@/components/layouts/start";
import ComponentAbout from "@/components/layouts/about";
import ComponentFooter from "@/components/layouts/footer";
import ComponentContact from "@/components/layouts/contact";
import ComponentProyects from "@/components/layouts/proyects";
import ComponentServices from "@/components/layouts/services";
import ComponentEducacion from "@/components/layouts/education";
import ComponentExperience from "@/components/layouts/experience";

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
      <ComponentIntro setView={setView} />
      <section ref={sections} className={`${view ? 'visible ' : 'hidden'}`}>
        <ComponentNav paint={paint_icon} />
        <ComponentStart animate={(paint_icon === 'init')} />
        <ComponentAbout animate={(paint_icon === 'about')} />
        <ComponentServices animate={(paint_icon === 'services')} />
        <ComponentExperience animate={(paint_icon === 'experience')} />
        <ComponentProyects animate={(paint_icon === 'proyects')} />
        <ComponentEducacion animate={(paint_icon === 'education')} />
        <ComponentContact animate={(paint_icon === 'contact')} />
        <ComponentFooter animate={(paint_icon === 'contact')} />
      </section>
    </main>
  )
}