import React, { useContext, useMemo } from 'react';

import { Container, interfaces } from 'inversify';

const InversifyContext = React.createContext<{ container: Container | null }>({
  container: null,
});

type Props = {
  container: Container;
};

export const InjectionProvider: React.FC<Props> = (props) => {
  const value = useMemo(() => ({ container: props.container }), [
    props.container,
  ]);

  return (
    <InversifyContext.Provider value={value}>
      {props.children}
    </InversifyContext.Provider>
  );
};

export function useInjection<T>(identifier: interfaces.ServiceIdentifier<T>) {
  const { container } = useContext(InversifyContext);

  if (!container) {
    throw new Error(
      'DI context not found. Is your component wrapped in <InversifyContext.Provider />?'
    );
  }

  return container.get<T>(identifier);
}

export const createContainer = () => {
  const container = new Container();

  return container;
};

export const extendContainer = (extendFn: (container: any) => any) => (
  container: any
) => {
  return extendFn(container);
};
