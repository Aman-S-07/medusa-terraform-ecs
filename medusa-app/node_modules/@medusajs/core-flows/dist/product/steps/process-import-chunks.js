"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processImportChunksStep = exports.processImportChunksStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const batch_products_1 = require("../workflows/batch-products");
exports.processImportChunksStepId = "process-import-chunks";
/**
 * This step parses a CSV file holding products to import, returning the products as
 * objects that can be imported.
 *
 * @example
 * const data = parseProductCsvStep("products.csv")
 */
exports.processImportChunksStep = (0, workflows_sdk_1.createStep)(exports.processImportChunksStepId, async (input, { container }) => {
    const file = container.resolve(utils_1.Modules.FILE);
    for (let chunk of input.chunks) {
        const contents = await file.getAsBuffer(chunk);
        await (0, batch_products_1.batchProductsWorkflow)(container).run({
            input: JSON.parse(contents.toString("utf-8")),
        });
    }
    return new workflows_sdk_1.StepResponse({ completed: true });
});
//# sourceMappingURL=process-import-chunks.js.map