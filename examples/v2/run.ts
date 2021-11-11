import Bottleneck from "bottleneck";
import FormData from "form-data";
import fs from "fs-extra";
import unescape from "lodash.unescape";
import OAuth from "oauth-1.0a";
import { Etsy } from "../../src";
import { IListing, IListingImage, IListingInventory, IShop, IUser } from "../../src/v2/api";

(async () => {
    const credentials = await fs.readJSON("./examples/credentials.json");

    let client = new Etsy({
        apiKeys: {
            key: credentials.apiKey,
            secret: credentials.apiSecret
        },
        bottleneck: new Bottleneck({
            maxConcurrent: 1,
            minTime: 1000
        }),
        //axiosInstance
    });

    let token: OAuth.Token = {
        key: credentials.tokenKey,
        secret: credentials.tokenSecret
    };

    // 1. Get user, then user's shop, then shop's listings
    let user = (await client.User.getUser<IUser>({
        user_id: ["rptr"],
        includes: ["Profile", "Shops"]
    }, {token})).data.results[0];

    let shop = (await client.Shop.findAllUserShops<IShop>({
        user_id: user.login_name
    }, {token})).data.results[0];

    let listings = (await client.Listing.findAllShopListingsActive<IListing>({
        shop_id: shop.shop_id
    }, {token})).data.results;

    let listingId = listings[0].listing_id;

    // 2. Uploading image (using node form-data package)
    let formData = new FormData();
    formData.append("listing_id", listingId);
    formData.append("image", fs.createReadStream("./examples/image.png"));

    let image = (await client.ListingImage.uploadListingImage<IListingImage>(
        formData as any,
        {
            axiosConfig: {headers: formData.getHeaders()},
            token: token
        }
    )).data.results[0];

    // 3. Update inventory
    // First get inventory
    let inventory = (await client.ListingInventory.getInventory({
        listing_id: listingId,
        write_missing_inventory: 1 as any
    }, {token})).data.results as any as IListingInventory;

    // We must unescape strings, otherwise Etsy won't accept them back
    let normalizedProducts = inventory.products.map(product => ({
        ...product,
        property_values: product.property_values.map(propertyValue => ({
            ...propertyValue,
            values: propertyValue.values.map(value => unescape(value))
        }))
    }));

    // For example, we increase product price by 0.01
    normalizedProducts.forEach(product => {
        let price = product.offerings[0].price;
        product.offerings[0].price = (price.amount / price.divisor) + 0.01;
    });

    // Send the updated inventory back to Etsy
    inventory = (await client.ListingInventory.updateInventory({
        ...inventory,
        listing_id: listingId,
        products: JSON.stringify(normalizedProducts)
    }, {
        token: token
    })).data.results as any as IListingInventory;

    console.log("User:", user);
    console.log("Shop:", shop);
    console.log("Listings:", listings);
    console.log("Image", image);
    console.log("Inventory", inventory);
})()

