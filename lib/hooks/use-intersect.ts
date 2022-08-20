import { useEffect, useRef, useState } from "react";

import type {
  DependencyList,
  MutableRefObject,
  Dispatch,
  SetStateAction,
} from "react";

const setupIntersection = (
  setIsIntersecting: Dispatch<SetStateAction<boolean>>,
  threshold: number
) =>
  new IntersectionObserver(
    ([{ isIntersecting }]) => {
      setIsIntersecting(isIntersecting);
    },
    { threshold }
  );

export const useIntersect = <Element extends HTMLElement = HTMLElement>(
  threshold = 0,
  deps: DependencyList = []
) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const ref = useRef<Element>();
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!observer.current) {
      observer.current = setupIntersection(setIsIntersecting, threshold);
    }
    const currentObserver = observer.current;
    const currentElement = ref.current;

    if (currentElement) {
      observer.current.observe(currentElement);
    }

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, threshold]);

  return [ref, isIntersecting] as [MutableRefObject<Element>, boolean];
};
