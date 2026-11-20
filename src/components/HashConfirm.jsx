import { useState } from "react";
import Button from "./Button";

// Confirmation for destructive plans: the person has to type the plan hash.
//   typed: what the person writes. It lives here because only this field needs it.
//   The "Aprobar" button stays disabled until typed is EXACTLY the hash
//   (not a prefix, not the hash with extra text, not another letter case).
export default function HashConfirm({ hash, onConfirm }) {
  const [typed, setTyped] = useState("");
  // Derived on every render: if the parent passes another hash, it stops matching.
  const matches = typed === hash;

  return (
    <div className="hash-confirm">
      <label>
        Hash del plan
        <input
          type="text"
          autoComplete="off"
          spellCheck={false}
          value={typed}
          onChange={(event) => setTyped(event.target.value)}
        />
      </label>
      <Button variant="danger" disabled={!matches} onClick={() => onConfirm()}>
        Aprobar
      </Button>
    </div>
  );
}
