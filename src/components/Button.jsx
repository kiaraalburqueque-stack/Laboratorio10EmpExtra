// Reusable button.
//   variant: "primary" (default) | "danger" | "ghost"  ->  className="btn btn-<variant>"
//   children: the content (text or elements)
//   type: "button" by default, so it never submits a form by accident
//   ...rest: any other prop (onClick, disabled, aria-label, type="submit"...) reaches the real <button>
export default function Button({ variant = "primary", children, ...rest }) {
  // type="button" goes BEFORE {...rest}: it is only a default, and a type passed by
  // the caller (for example type="submit") overrides it.
  return (
    <button type="button" className={`btn btn-${variant}`} {...rest}>
      {children}
    </button>
  );
}
