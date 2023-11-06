'use client'

import { Fragment, useEffect, useState, ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

export default function ClientOnly({ children }: Props) {
  const [has_mounted, setHas_mounted] = useState<boolean>(false);

  useEffect(() => {
    setHas_mounted(true);
  }, []);

  if (!has_mounted) return null;

  return <Fragment>
    {children}
  </Fragment>
}