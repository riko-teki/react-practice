type Props = {
	children: React.ReactNode
}

const ChildWithArgsInTag: React.FC<Props> = props => {
	return (
		<p>{ props.children }</p>
	)
}

export default ChildWithArgsInTag