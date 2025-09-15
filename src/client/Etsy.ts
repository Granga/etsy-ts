import { BuyerTaxonomy } from "../api/BuyerTaxonomy";
import { ApiConfig, HttpClient } from "../api/http-client";
import { LedgerEntry } from "../api/LedgerEntry";
import { Other } from "../api/Other";
import { Payment } from "../api/Payment";
import { Review } from "../api/Review";
import { SellerTaxonomy } from "../api/SellerTaxonomy";
import { Shop } from "../api/Shop";
import { ShopListing } from "../api/ShopListing";
import { ShopListingFile } from "../api/ShopListingFile";
import { ShopListingImage } from "../api/ShopListingImage";
import { ShopListingInventory } from "../api/ShopListingInventory";
import { ShopListingOffering } from "../api/ShopListingOffering";
import { ShopListingProduct } from "../api/ShopListingProduct";
import { ShopListingTranslation } from "../api/ShopListingTranslation";
import { ShopListingVariationImage } from "../api/ShopListingVariationImage";
import { ShopListingVideo } from "../api/ShopListingVideo";
import { ShopProductionPartner } from "../api/ShopProductionPartner";
import { ShopReceipt } from "../api/ShopReceipt";
import { ShopReceiptTransactions } from "../api/ShopReceiptTransactions";
import { ShopReturnPolicy } from "../api/ShopReturnPolicy";
import { ShopSection } from "../api/ShopSection";
import { ShopShippingProfile } from "../api/ShopShippingProfile";
import { User } from "../api/User";
import { UserAddress } from "../api/UserAddress";
import { ISecurityDataStorage } from "../types/ISecurityDataStorage";
import { TokenRefresher } from "./TokenRefresher";

import axiosRetry, { exponentialDelay } from "axios-retry";

export class Etsy {
  httpClient: HttpClient;
  BuyerTaxonomy: BuyerTaxonomy;
  LedgerEntry: LedgerEntry;
  Other: Other;
  Payment: Payment;
  Review: Review;
  SellerTaxonomy: SellerTaxonomy;
  Shop: Shop;
  ShopListing: ShopListing;
  ShopListingFile: ShopListingFile;
  ShopListingImage: ShopListingImage;
  ShopListingInventory: ShopListingInventory;
  ShopListingOffering: ShopListingOffering;
  ShopListingProduct: ShopListingProduct;
  ShopListingTranslation: ShopListingTranslation;
  ShopListingVariationImage: ShopListingVariationImage;
  ShopListingVideo: ShopListingVideo;
  ShopProductionPartner: ShopProductionPartner;
  ShopReceipt: ShopReceipt;
  ShopReceiptTransactions: ShopReceiptTransactions;
  ShopReturnPolicy: ShopReturnPolicy;
  ShopSection: ShopSection;
  ShopShippingProfile: ShopShippingProfile;
  User: User;
  UserAddress: UserAddress;

  constructor(
    {apiKey, securityDataStorage, enableTokenRefresh = true, enableAxiosRetry = false}: {
      apiKey: string,
      securityDataStorage: ISecurityDataStorage,
      enableTokenRefresh?: boolean
      enableAxiosRetry?: boolean
    },
    apiConfig?: ApiConfig
  ) {
    const securityWorker: ApiConfig["securityWorker"] = async filter => {
      const securityData = await securityDataStorage.findAccessToken(filter);
      return {
        headers: {
          ...{"x-api-key": apiKey},
          ...(securityData?.accessToken ? {"Authorization": `Bearer ${securityData.accessToken}`} : undefined),
        }
      }
    };

    this.httpClient = new HttpClient({
      secure: true,
      securityWorker,
      ...apiConfig,
    });

    if (enableTokenRefresh) {
      new TokenRefresher(apiKey, this.httpClient.instance, securityDataStorage).init();
    }
    if (enableAxiosRetry) {
      axiosRetry(this.httpClient.instance, {
        retryDelay: exponentialDelay,
        ...apiConfig?.axiosRetryConfig
      });
    }

    this.BuyerTaxonomy = new BuyerTaxonomy(this.httpClient);
    this.LedgerEntry = new LedgerEntry(this.httpClient);
    this.Other = new Other(this.httpClient);
    this.Payment = new Payment(this.httpClient);
    this.Review = new Review(this.httpClient);
    this.SellerTaxonomy = new SellerTaxonomy(this.httpClient);
    this.Shop = new Shop(this.httpClient);
    this.ShopListing = new ShopListing(this.httpClient);
    this.ShopListingFile = new ShopListingFile(this.httpClient);
    this.ShopListingImage = new ShopListingImage(this.httpClient);
    this.ShopListingInventory = new ShopListingInventory(this.httpClient);
    this.ShopListingOffering = new ShopListingOffering(this.httpClient);
    this.ShopListingProduct = new ShopListingProduct(this.httpClient);
    this.ShopListingTranslation = new ShopListingTranslation(this.httpClient);
    this.ShopListingVariationImage = new ShopListingVariationImage(this.httpClient);
    this.ShopListingVideo = new ShopListingVideo(this.httpClient);
    this.ShopProductionPartner = new ShopProductionPartner(this.httpClient);
    this.ShopReceipt = new ShopReceipt(this.httpClient);
    this.ShopReceiptTransactions = new ShopReceiptTransactions(this.httpClient);
    this.ShopReturnPolicy = new ShopReturnPolicy(this.httpClient);
    this.ShopSection = new ShopSection(this.httpClient);
    this.ShopShippingProfile = new ShopShippingProfile(this.httpClient);
    this.User = new User(this.httpClient);
    this.UserAddress = new UserAddress(this.httpClient);
  }
}
