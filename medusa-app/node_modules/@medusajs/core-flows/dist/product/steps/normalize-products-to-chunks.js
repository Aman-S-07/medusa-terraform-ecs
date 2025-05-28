"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeCsvToChunksStep = exports.normalizeCsvToChunksStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_2 = require("../utils");
exports.normalizeCsvToChunksStepId = "normalize-product-csv-to-chunks";
/**
 * This step parses a CSV file holding products to import, returning the chunks
 * to be processed. Each chunk is written to a file using the file provider.
 *
 * @example
 * const data = normalizeCsvToChunksStep("products.csv")
 */
exports.normalizeCsvToChunksStep = (0, workflows_sdk_1.createStep)(exports.normalizeCsvToChunksStepId, async (fileKey, { container }) => {
    const file = container.resolve(utils_1.Modules.FILE);
    const contents = await file.getAsBuffer(fileKey);
    const csvProducts = (0, utils_2.convertCsvToJson)(contents.toString("utf-8"));
    const normalizer = new utils_1.CSVNormalizer(csvProducts);
    const products = normalizer.proccess();
    const create = Object.keys(products.toCreate).reduce((result, toCreateHandle) => {
        result.push(utils_1.productValidators.CreateProduct.parse(products.toCreate[toCreateHandle]));
        return result;
    }, []);
    const update = Object.keys(products.toUpdate).reduce((result, toUpdateId) => {
        result.push(utils_1.productValidators.UpdateProduct.parse(products.toUpdate[toUpdateId]));
        return result;
    }, []);
    const { id } = await file.createFiles({
        filename: `${fileKey}.json`,
        content: JSON.stringify({ create, update }),
        mimeType: "application/json",
    });
    return new workflows_sdk_1.StepResponse({
        chunks: [id],
        summary: {
            toCreate: create.length,
            toUpdate: update.length,
        },
    });
});
//# sourceMappingURL=normalize-products-to-chunks.js.map