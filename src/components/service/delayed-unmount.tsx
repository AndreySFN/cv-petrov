'use client'
import React, { useEffect, useState } from 'react';

import { IWithChildren } from '~src/types';

interface DelayedRenderProps extends IWithChildren {
  delay: number;
  shouldRender: boolean;
}

export const DelayedUnmount: React.FC<DelayedRenderProps> = ({ delay, shouldRender, children }) => {
  const [isVisible, setIsVisible] = useState(shouldRender);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (shouldRender) {
      setIsVisible(true);
    } else {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, delay);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [shouldRender, delay]);

  return isVisible ? <>{children}</> : null;
};
