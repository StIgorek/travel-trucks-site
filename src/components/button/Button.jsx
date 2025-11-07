import css from "./Button.module.css";

export default function Button({ type, children }) {
  return (
    <button className={css.button} type={type}>
      {children}
    </button>
  );
}
