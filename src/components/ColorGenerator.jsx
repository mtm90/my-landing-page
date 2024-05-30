import { useColors } from "./ColorContext";

const ColorGenerator = () => {
  const { regenerateColors } = useColors();
  const { colors } = useColors();


  return (
    <button className="colors" onClick={regenerateColors} style={{ backgroundColor: colors.colors }}>
      Don't like the colors i picked? <br />Switch it up!
    </button>
  );
};

export default ColorGenerator;
