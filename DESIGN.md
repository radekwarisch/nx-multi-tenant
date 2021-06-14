# Design

## Concepts

1. Each market as an separate app + corresponding lib. This allows for rebuilding only modified pieces.
2. App-layer should be limited to passing the lib component to the NextJS API with the current route.
3. As routes in NextJS should be anticipated, all of them could be treated as dynamic on app side and then interpreted on the lib side.
4. Lib-layer is responsible for creating new DI container with bindings or overriding the one from parent market.
5. Markets inheritance:

```
World -> Region -> Market
```

E.g.

```
World -> EU -> PL
(creates container) -> (modifies container) -> (modifies container)
```

6. Hierarchical injection is implemented accordingly to https://github.com/inversify/InversifyJS/blob/master/wiki/hierarchical_di.md
Requires further development on memoizing current scope.

7. Example app:

```
<WorldDIProvider> // creates DI bindings
  <RegionDIProvider> // modifies World DI bindings
    <MarketDIProvider> // modifies Region DI bindings
      <AppCore> // All UI and logic that is not bindable, uses Market DI binding - SPA with usage of container.get() could be an example
    </MarketDIProvider>
  </RegionDIProvider>
</WorldDIProvider>
```

## Challenges

* Adding routes to children apps - NextJS is opinionated on routes - they needs to be reflected in the files structure. Therefore, routes should be anticipated on the particular app level and then interpreted in the code. 

* Hierarchical DI - there should be an opportunity to create a local scope of injections (e.g. only for particular module). Then, ask for particular key should ask up to the container providers tree. https://github.com/inversify/InversifyJS/blob/master/wiki/hierarchical_di.md
