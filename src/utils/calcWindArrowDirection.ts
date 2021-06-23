export const calcWindArrowDirection = (direction: string): number => {
  switch (direction) {
    case "N":
      return 0;
    case "NE":
      return 45;
    case "NW":
      return -45;
    case "S":
      return 90;
    case "SE":
      return 135;
    case "SW":
      return -135;
    case "E":
      return 90;
    case "W":
      return -90;
    default:
      return -1;
  }
};
