export interface ICategory {
    /**
     * The identifier for this category.
     */
    category_id: number;
    /**
     * The programmatic name for this category.
     */
    name: string;
    /**
     * The "title" meta tag value for the category's landing page (may be null).
     */
    meta_title: string;
    /**
     * The "keywords" meta tag value for the category's landing page (may be null).
     */
    meta_keywords: string;
    /**
     * The "description" meta tag value for the category's landing page (may be null).
     */
    meta_description: string;
    /**
     * A short description of the category from the category' landing page (may be null).
     */
    page_description: string;
    /**
     * The title of the category's landing page (may be null).
     */
    page_title: string;
    /**
     * The category's string ID.
     */
    category_name: string;
    /**
     * A short display name for the category.
     */
    short_name: string;
    /**
     * A longer display name for the category.
     */
    long_name: string;
    /**
     * The number of subcategories below this one. Subcatgories append a new tag to the end of their parent's category_name.
     */
    num_children: number;
}
export declare const Category: {};
