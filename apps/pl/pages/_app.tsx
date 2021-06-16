import "reflect-metadata";
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';
import { useRouter } from 'next/router'
import {AppCore} from '@nx-ioc/app-core';
import { getPlContainer } from '@nx-ioc/pl-container';
import { InjectionProvider } from '@nx-ioc/di-common';

const Post = ({ Component, pageProps }: AppProps) => {
  // consider if handling routes here wouldn't be better
  return (
    <InjectionProvider container={getPlContainer()}>
      <AppCore {...pageProps} Component={Component}/>
    </InjectionProvider>
  )
}

export default Post;


// function CustomApp({ Component, pageProps }: AppProps) {
//   const router = useRouter()
//   const { injected } = router.query

//   return (
//     <InjectionProvider container={getPlContainer()}>
//       <AppCore route={String(injected)} />
//     </InjectionProvider>
//   )

//   return (
//     <>
//       <Head>
//         <title>Welcome to pl!</title>
//       </Head>
//       <div className="app">
//         <header className="flex">
//           <NxLogo width="75" height="50" />
//           <h1>Welcome to pl!</h1>
//         </header>
//         <main>
//           <Component {...pageProps} />
//         </main>
//       </div>
//     </>
//   );
// }

// export default CustomApp;
