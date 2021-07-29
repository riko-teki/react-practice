type Props = {
  message: string;
};

const ChildWithArgs: React.FC<Props> = (props) => {
  return <p>{props.message}</p>;
};

export default ChildWithArgs;
