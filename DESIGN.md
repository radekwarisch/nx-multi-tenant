# Design

## Concepts

* App - NextJS application for particular market. 
  Responsibilities:
  * Base routing
  * Injected routing

* Container - highest importable part of an application. Introduced for encapsulating changes per market in a single exported component, which could be then rebuilded only when needed.
  Responsibilities:
  * Dispatch pages per route
  * Translate route on extension

* Apps inheritance - should be considered accordingly to location

Core App -> Region App (e.g. EU) -> Market App (e.g. PL)

## Challenges

* Adding routes to children apps - NextJS is opinionated on routes - they needs to be reflected in the files structure. Therefore, routes should be anticipated on the particular app level and then interpreted in the code. 