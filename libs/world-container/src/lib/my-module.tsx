const MyModule = ({
  topSlot,
  bottomSlot
}: any) => (
  <>
    <div>Base module</div>
    <div>top slot: {topSlot}</div>
    <div>bottom slot: {bottomSlot}</div>
  </>
);

export default MyModule;

