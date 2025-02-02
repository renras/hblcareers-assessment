import { LeadCapturingForm } from "@/components";
import { useState } from "react";
import { Form as LeadFormResponse } from "@/components";
import { Table, Title, Button } from "@mantine/core";
import { CSVLink } from "react-csv";

/**
 TODO:
 - [] mobile responsiveness
 - [] fix text alignment in two sections
 - [] export as csv
 */

export default function Page() {
  const [responses, setResponses] = useState<LeadFormResponse[]>([]);

  const responsesStringArray = responses.map((response) =>
    Object.values(response)
  );

  const csvData = [
    ["Name", "Email", "Phone", "Address", "Preferred Service"],
    ...responsesStringArray,
  ];

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

        <div className="mt-16 flex">
          <Button
            color="dark"
            variant="outline"
            className="ms-auto"
            component={CSVLink}
            data={csvData}
            target="_blank"
            filename="responses.csv"
          >
            Download CSV
          </Button>
        </div>
        <Table className="mt-8">
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
