document.addEventListener("DOMContentLoaded", () => {
  const calculateWinner = (dolphins, koalas) => {
    const avgDolphins =
      dolphins.reduce((acc, cur) => acc + cur, 0) / dolphins.length;
    const avgKoalas = koalas.reduce((acc, cur) => acc + cur, 0) / koalas.length;

    if (avgDolphins > avgKoalas && avgDolphins >= 100) {
      return "Dolphins win the trophy";
    } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
      return "Koalas win the trophy";
    } else if (
      avgDolphins === avgKoalas &&
      avgDolphins >= 100 &&
      avgKoalas >= 100
    ) {
      return "Both win the trophy!";
    } else {
      return "No one wins the trophy";
    }
  };

  const dolphinsScores = [
    [96, 108, 89],
    [97, 112, 101],
    [97, 112, 101],
  ];

  const koalasScores = [
    [88, 91, 110],
    [109, 95, 106],
    [109, 95, 123],
  ];

  const buttons = [
    document.getElementById("btn"),
    document.getElementById("btn2"),
    document.getElementById("btn3"),
  ];

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const result = calculateWinner(
        dolphinsScores[index],
        koalasScores[index]
      );
      document.querySelector(".select").textContent = result;
      console.log(result);
    });
  });
});
