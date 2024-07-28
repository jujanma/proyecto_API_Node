const excelGenerator = (products, name, res) => {
  const xl = require("excel4node");

  products = products.map((product) => {
    let id = product._id.toString();
    delete product._id;
    return {
      id,
      ...product,
    };
  });
  let workbook = new xl.Workbook();
  let worksheet = workbook.addWorksheet("Inventario");

  for (let i = 1; i <= products.length; i++) {
    for (let j = 1; j <= Object.values(products[0]).length; j++) {
      let dataInventario = Object.values(products[i - 1])[j - 1];
      if (typeof dataInventario === "string") {
        worksheet.cell(i, j).string(dataInventario);
      } else {
        worksheet.cell(i, j).number(dataInventario);
      }
    }
  }
  workbook.write(`${name}.xlsx`, res);
};

module.exports.ProductsUtils = {
  excelGenerator,
};
