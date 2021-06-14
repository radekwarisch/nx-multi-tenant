/**
 * @description
 * This should be a whole module that maps Routes to certain modules/components
 */

const ExtraModule = () => (
  <div>AdditionalRoute - inherited on world level</div>
)

export const AdditionalRoutes: any = {
  extra: <ExtraModule />
};
