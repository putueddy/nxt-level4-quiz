interface Props {
  ml: number
}

const Separators = ({ ml }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        overflow: "hidden",
        marginLeft: ml,
        marginTop: 46.5,
        backgroundColor: "#4A3AFF",
        width: 62,
        height: 6,
        borderRadius: 40,
      }}
    />
  )
}

export default Separators
