import { FieldContainer } from "../styles";

type Props = {
  children: React.ReactNode;
};

function ResultField({ children }: Props): React.ReactElement {
  return <FieldContainer>{children}</FieldContainer>;
}

export default ResultField;
