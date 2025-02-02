import { LeadCapturingForm } from "@/components";
import { useState } from "react";
import { Form as LeadFormResponse } from "@/components";

/**
 TODO:
 - [] mobile responsiveness
 */

export default function Page() {
  const [responses, setResponses] = useState<LeadFormResponse[]>([]);

  console.log(responses);

  return (
    <div>
      <LeadCapturingForm
        onSubmit={(response) => setResponses((prev) => [...prev, response])}
      />
    </div>
  );
}
