type Props = {
  schema: unknown | unknown[];
};

export function SchemaOrg({ schema }: Props) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {schemas.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          // JSON-LD blocks must be inlined for crawler discovery.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
