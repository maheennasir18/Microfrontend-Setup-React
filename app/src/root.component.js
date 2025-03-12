export default function Root(props) {
  return (
    <><h1>Welcome!</h1>
    <section>
      App 1 is mounted! {props?.name || "No Name Provided"}
    </section></>
  );
}
