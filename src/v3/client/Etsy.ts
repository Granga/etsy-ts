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
import { ShopProductionPartner } from "../api/ShopProductionPartner";
import { ShopReceipt } from "../api/ShopReceipt";
import { ShopReceiptTransactions } from "../api/ShopReceiptTransactions";
import { ShopSection } from "../api/ShopSection";
import { ShopShippingProfile } from "../api/ShopShippingProfile";
import { User } from "../api/User";
import { UserAddress } from "../api/UserAddress";
import { SecurityData } from "../types/SecurityData";


export class Etsy {
    httpClient: HttpClient;
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
    ShopProductionPartner: ShopProductionPartner;
    ShopReceipt: ShopReceipt;
    ShopReceiptTransactions: ShopReceiptTransactions;
    ShopSection: ShopSection;
    ShopShippingProfile: ShopShippingProfile;
    User: User;
    UserAddress: UserAddress;

    constructor(securityData: SecurityData, apiConfig?: ApiConfig<SecurityData>) {
        let securityWorker = apiConfig?.securityWorker;
        if (!securityWorker) {
            securityWorker = securityData => ({
                headers: {
                    ...(securityData.apiKey ? {"x-api-key": securityData.apiKey} : undefined),
                    ...(securityData.accessToken ? {"Authorization": `Bearer ${securityData.accessToken}`} : undefined),
                },
            });
        }

        this.httpClient = new HttpClient<SecurityData>({
            securityWorker,
            ...apiConfig
        });
        this.httpClient.setSecurityData(securityData);

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
        this.ShopProductionPartner = new ShopProductionPartner(this.httpClient);
        this.ShopReceipt = new ShopReceipt(this.httpClient);
        this.ShopReceiptTransactions = new ShopReceiptTransactions(this.httpClient);
        this.ShopSection = new ShopSection(this.httpClient);
        this.ShopShippingProfile = new ShopShippingProfile(this.httpClient);
        this.User = new User(this.httpClient);
        this.UserAddress = new UserAddress(this.httpClient);
    }
}
