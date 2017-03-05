"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Category {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a top-level Category by tag.
     */
    getCategory(parameters) {
        return this.client.http("/categories/:tag", parameters, "GET");
    }
    /**
     * Retrieves all top-level Categories.
     */
    findAllTopCategory(parameters) {
        return this.client.http("/taxonomy/categories", parameters, "GET");
    }
    /**
     * Retrieves a second-level Category by tag and subtag.
     */
    getSubCategory(parameters) {
        return this.client.http("/categories/:tag/:subtag", parameters, "GET");
    }
    /**
     * Retrieves a third-level Category by tag, subtag and subsubtag.
     */
    getSubSubCategory(parameters) {
        return this.client.http("/categories/:tag/:subtag/:subsubtag", parameters, "GET");
    }
    /**
     * Retrieves children of a top-level Category by tag.
     */
    findAllTopCategoryChildren(parameters) {
        return this.client.http("/taxonomy/categories/:tag", parameters, "GET");
    }
    /**
     * Retrieves children of a second-level Category by tag and subtag.
     */
    findAllSubCategoryChildren(parameters) {
        return this.client.http("/taxonomy/categories/:tag/:subtag", parameters, "GET");
    }
}
exports.Category = Category;
