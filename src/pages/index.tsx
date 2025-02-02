import { LeadCapturingForm } from "@/components";
import { useState } from "react";
import { Form as LeadFormResponse } from "@/components";
import { Table, Title } from "@mantine/core";

/**
 TODO:
 - [] mobile responsiveness
 - [] fix text alignment in two sections
 */

export default function Page() {
  const [responses, setResponses] = useState<LeadFormResponse[]>([]);

  const responseTableRows = responses.map((response, index) => (
    <Table.Tr key={index}>
      <Table.Td>{response.fullName}</Table.Td>
      <Table.Td>{response.email}</Table.Td>
      <Table.Td>{response.phone}</Table.Td>
      <Table.Td>{response.address}</Table.Td>
      <Table.Td>{response.preferredService}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <LeadCapturingForm
        onSubmit={(response) => setResponses((prev) => [...prev, response])}
      />
      <div className="container pb-16">
        <Title order={2} className="mt-24">
          Form Submissions
        </Title>
        <Table className="mt-16">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Phone</Table.Th>
              <Table.Th>Address</Table.Th>
              <Table.Th>Preferred Service</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{responseTableRows}</Table.Tbody>
        </Table>
      </div>
    </div>
  );
}
