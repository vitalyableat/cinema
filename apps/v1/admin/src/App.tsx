export const test = {};

export const App = () => {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <div key={i}>{i}</div>
      ))}
    </>
  );
};
