import { useColors } from "./ColorContext";

const ColorGenerator = () => {
  const { regenerateColors } = useColors();
  const { colors } = useColors();

  return (
    <button
      className="colors"
      onClick={regenerateColors}
      style={{ backgroundColor: colors.colors }}>
      Unlock vibrant shades! <br />Tap the button to generate dynamic colors.
    </button>
  );
};

export default ColorGenerator;
