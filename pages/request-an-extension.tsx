import React, { useState } from "react";

function RequestAnExtension() {
  const [name, setName] = useState("Ankur");
  const [email, setEmail] = useState("ankurcool.kumar@gmail.co");
  const [message, setMessage] = useState("Need to publish extension");
  const [number, setNumber] = useState("8697707501");

  const submitHandler = async (e: React.FormEvent) => {
    const payload = [
      {
        name: "name",
        value: name,
      },
      {
        name: "email",
        value: email,
      },
      {
        name: "message",
        value: message,
      },
      {
        name: "number",
        value: number,
      },
    ];
    try {
      const response = await fetch("/api/hubspot", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          Authorization: `Bearer ${process.env.NEXT_HUBSPOT_API_KEY}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={submitHandler}>Sumbit</button>
    </div>
  );
}

export default RequestAnExtension;
