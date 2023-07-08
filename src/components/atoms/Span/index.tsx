interface ISpanProps {
  description: string;
  value: string;
}

export const Span = ({ description, value }: ISpanProps) => {
  return (
    <>
      {value && (
        <span>
          <strong>{`${description}:`}</strong> {value}
        </span>
      )}
    </>
  );
};
