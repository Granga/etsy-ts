import * as fs from "fs-extra";
import { Etsy } from "../src";
import { SecurityDataStorage } from "./SecurityDataStorage";
// import { createImageStream } from "./upload-image-from-buffer";  // Workaround for when image is a buffer

(async () => {
  try {
    const apiCredentials = await fs.readJSON("./examples/api-credentials.json");
    const client = new Etsy({
      apiKey: apiCredentials.apiKey,
      securityDataStorage: new SecurityDataStorage()
    });

    const etsyUserId = 92841371;

    let {data: ping} = await client.Other.ping();
    let {data: user} = await client.User.getMe({etsyUserId});
    let {data: shop} = await client.Shop.getShopByOwnerUserId(user.user_id!, {etsyUserId});
    let {data: {results: listings}} = await client.ShopListing.getListingsByShop({shopId: shop.shop_id!}, {etsyUserId});

    if (listings && listings.length > 0) {
      // Update listing title
      await client.ShopListing.updateListing({
        shopId: shop.shop_id!,
        listingId: listings[0].listing_id!
      }, {
        title: `Test listing. Please DO NOT purchase. ${new Date().toISOString().slice(0, 19).replace(/[-:]/g, '-').replace('T', '-')}`,
      }, {etsyUserId});

      // Upload image
      await client.ShopListingImage.uploadListingImage(
        shop.shop_id!,
        listings[0].listing_id!,
        { image: fs.createReadStream("./examples/image.png")},
        // {image: await createImageStream()}, // Workaround for when image is a buffer
        {etsyUserId}
      );
    }

    console.log("Ping:", ping);
    console.log("User:", user);
    console.log("Shop:", shop);
    console.log("Listings:", listings);
  }
  catch (e) {
    console.error(e);
  }
})()

