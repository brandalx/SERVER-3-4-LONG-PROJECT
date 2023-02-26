export const Main = (props) => {
  return (
    <main className="page-body main-strip">
      This is main section
      <div>{props.children}</div>
    </main>
  );
};
