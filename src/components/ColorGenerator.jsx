import { useColors } from "./ColorContext";

const ColorGenerator = () => {
  const { regenerateColors } = useColors();
  const { colors } = useColors();


  return (
    <button className="colors" onClick={regenerateColors} style={{ backgroundColor: colors.colors }}>
      Don't like these colors? <br />Press this button!
    </button>
  );
};

export default ColorGenerator;
