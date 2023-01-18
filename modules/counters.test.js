import countComments from "./countComment";
test("[cont1, cont2, cont3, cont4] expect length to be '4'", () => {
    const counts = ['cont1', 'cont2', 'cont3', 'cont4'];
    const emptyCount = countComments([]);
    const result = countComments(counts);
    expect(emptyCount).toBe(0);
    expect(result).toBe(4);
  });