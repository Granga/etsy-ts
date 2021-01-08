import { AxiosRequestConfig } from "axios";
import { Token } from "oauth-1.0a";
import { ApiMethod } from "../api/ApiMethod";
import { Avatar } from "../api/Avatar";
import { BillCharge } from "../api/BillCharge";
import { BillingOverview } from "../api/BillingOverview";
import { BillPayment } from "../api/BillPayment";
import { Cart } from "../api/Cart";
import { CartListing } from "../api/CartListing";
import { Country } from "../api/Country";
import { Coupon } from "../api/Coupon";
import { DataType } from "../api/DataType";
import { FavoriteListing } from "../api/FavoriteListing";
import { FavoriteUser } from "../api/FavoriteUser";
import { FeaturedTreasury } from "../api/FeaturedTreasury";
import { Feedback } from "../api/Feedback";
import { FeedbackInfo } from "../api/FeedbackInfo";
import { ForumPost } from "../api/ForumPost";
import { Guest } from "../api/Guest";
import { GuestCart } from "../api/GuestCart";
import { ImageType } from "../api/ImageType";
import { Ledger } from "../api/Ledger";
import { LedgerEntry } from "../api/LedgerEntry";
import { Listing } from "../api/Listing";
import { ListingFile } from "../api/ListingFile";
import { ListingImage } from "../api/ListingImage";
import { ListingInventory } from "../api/ListingInventory";
import { ListingOffering } from "../api/ListingOffering";
import { ListingProduct } from "../api/ListingProduct";
import { ListingTranslation } from "../api/ListingTranslation";
import { ListingVariationImage } from "../api/ListingVariationImage";
import { Money } from "../api/Money";
import { ParamList } from "../api/ParamList";
import { Payment } from "../api/Payment";
import { PaymentAccountLedgerEntry } from "../api/PaymentAccountLedgerEntry";
import { PaymentAdjustment } from "../api/PaymentAdjustment";
import { PaymentAdjustmentItem } from "../api/PaymentAdjustmentItem";
import { PaymentTemplate } from "../api/PaymentTemplate";
import { PropertyValue } from "../api/PropertyValue";
import { Receipt } from "../api/Receipt";
import { ReceiptShipment } from "../api/ReceiptShipment";
import { Region } from "../api/Region";
import { ShippingInfo } from "../api/ShippingInfo";
import { ShippingOption } from "../api/ShippingOption";
import { ShippingTemplate } from "../api/ShippingTemplate";
import { ShippingTemplateEntry } from "../api/ShippingTemplateEntry";
import { ShippingUpgrade } from "../api/ShippingUpgrade";
import { Shop } from "../api/Shop";
import { ShopAbout } from "../api/ShopAbout";
import { ShopAboutImage } from "../api/ShopAboutImage";
import { ShopAboutMember } from "../api/ShopAboutMember";
import { ShopSection } from "../api/ShopSection";
import { ShopSectionTranslation } from "../api/ShopSectionTranslation";
import { ShopTranslation } from "../api/ShopTranslation";
import { StructuredPolicies } from "../api/StructuredPolicies";
import { Style } from "../api/Style";
import { Taxonomy } from "../api/Taxonomy";
import { TaxonomyNodeProperty } from "../api/TaxonomyNodeProperty";
import { TaxonomyPropertyScale } from "../api/TaxonomyPropertyScale";
import { TaxonomyPropertyValue } from "../api/TaxonomyPropertyValue";
import { Team } from "../api/Team";
import { Transaction } from "../api/Transaction";
import { Treasury } from "../api/Treasury";
import { TreasuryCounts } from "../api/TreasuryCounts";
import { TreasuryListing } from "../api/TreasuryListing";
import { TreasuryListingData } from "../api/TreasuryListingData";
import { User } from "../api/User";
import { UserAddress } from "../api/UserAddress";
import { UserProfile } from "../api/UserProfile";

export class Entities {
    constructor(
        private axiosConfig: AxiosRequestConfig,
        private apiKeys: Token
    ) {
    }

    ApiMethod = new ApiMethod(this.axiosConfig, this.apiKeys);
    Avatar = new Avatar(this.axiosConfig, this.apiKeys);
    BillCharge = new BillCharge(this.axiosConfig, this.apiKeys);
    BillingOverview = new BillingOverview(this.axiosConfig, this.apiKeys);
    BillPayment = new BillPayment(this.axiosConfig, this.apiKeys);
    Cart = new Cart(this.axiosConfig, this.apiKeys);
    CartListing = new CartListing(this.axiosConfig, this.apiKeys);
    Country = new Country(this.axiosConfig, this.apiKeys);
    Coupon = new Coupon(this.axiosConfig, this.apiKeys);
    DataType = new DataType(this.axiosConfig, this.apiKeys);
    FavoriteListing = new FavoriteListing(this.axiosConfig, this.apiKeys);
    FavoriteUser = new FavoriteUser(this.axiosConfig, this.apiKeys);
    FeaturedTreasury = new FeaturedTreasury(this.axiosConfig, this.apiKeys);
    Feedback = new Feedback(this.axiosConfig, this.apiKeys);
    FeedbackInfo = new FeedbackInfo(this.axiosConfig, this.apiKeys);
    ForumPost = new ForumPost(this.axiosConfig, this.apiKeys);
    Guest = new Guest(this.axiosConfig, this.apiKeys);
    GuestCart = new GuestCart(this.axiosConfig, this.apiKeys);
    ImageType = new ImageType(this.axiosConfig, this.apiKeys);
    Ledger = new Ledger(this.axiosConfig, this.apiKeys);
    LedgerEntry = new LedgerEntry(this.axiosConfig, this.apiKeys);
    Listing = new Listing(this.axiosConfig, this.apiKeys);
    ListingFile = new ListingFile(this.axiosConfig, this.apiKeys);
    ListingImage = new ListingImage(this.axiosConfig, this.apiKeys);
    ListingInventory = new ListingInventory(this.axiosConfig, this.apiKeys);
    ListingOffering = new ListingOffering(this.axiosConfig, this.apiKeys);
    ListingProduct = new ListingProduct(this.axiosConfig, this.apiKeys);
    ListingTranslation = new ListingTranslation(this.axiosConfig, this.apiKeys);
    ListingVariationImage = new ListingVariationImage(this.axiosConfig, this.apiKeys);
    Money = new Money(this.axiosConfig, this.apiKeys);
    ParamList = new ParamList(this.axiosConfig, this.apiKeys);
    Payment = new Payment(this.axiosConfig, this.apiKeys);
    PaymentAccountLedgerEntry = new PaymentAccountLedgerEntry(this.axiosConfig, this.apiKeys);
    PaymentAdjustment = new PaymentAdjustment(this.axiosConfig, this.apiKeys);
    PaymentAdjustmentItem = new PaymentAdjustmentItem(this.axiosConfig, this.apiKeys);
    PaymentTemplate = new PaymentTemplate(this.axiosConfig, this.apiKeys);
    PropertyValue = new PropertyValue(this.axiosConfig, this.apiKeys);
    Receipt = new Receipt(this.axiosConfig, this.apiKeys);
    ReceiptShipment = new ReceiptShipment(this.axiosConfig, this.apiKeys);
    Region = new Region(this.axiosConfig, this.apiKeys);
    ShippingInfo = new ShippingInfo(this.axiosConfig, this.apiKeys);
    ShippingOption = new ShippingOption(this.axiosConfig, this.apiKeys);
    ShippingTemplate = new ShippingTemplate(this.axiosConfig, this.apiKeys);
    ShippingTemplateEntry = new ShippingTemplateEntry(this.axiosConfig, this.apiKeys);
    ShippingUpgrade = new ShippingUpgrade(this.axiosConfig, this.apiKeys);
    Shop = new Shop(this.axiosConfig, this.apiKeys);
    ShopAbout = new ShopAbout(this.axiosConfig, this.apiKeys);
    ShopAboutImage = new ShopAboutImage(this.axiosConfig, this.apiKeys);
    ShopAboutMember = new ShopAboutMember(this.axiosConfig, this.apiKeys);
    ShopSection = new ShopSection(this.axiosConfig, this.apiKeys);
    ShopSectionTranslation = new ShopSectionTranslation(this.axiosConfig, this.apiKeys);
    ShopTranslation = new ShopTranslation(this.axiosConfig, this.apiKeys);
    StructuredPolicies = new StructuredPolicies(this.axiosConfig, this.apiKeys);
    Style = new Style(this.axiosConfig, this.apiKeys);
    Taxonomy = new Taxonomy(this.axiosConfig, this.apiKeys);
    TaxonomyNodeProperty = new TaxonomyNodeProperty(this.axiosConfig, this.apiKeys);
    TaxonomyPropertyScale = new TaxonomyPropertyScale(this.axiosConfig, this.apiKeys);
    TaxonomyPropertyValue = new TaxonomyPropertyValue(this.axiosConfig, this.apiKeys);
    Team = new Team(this.axiosConfig, this.apiKeys);
    Transaction = new Transaction(this.axiosConfig, this.apiKeys);
    Treasury = new Treasury(this.axiosConfig, this.apiKeys);
    TreasuryCounts = new TreasuryCounts(this.axiosConfig, this.apiKeys);
    TreasuryListing = new TreasuryListing(this.axiosConfig, this.apiKeys);
    TreasuryListingData = new TreasuryListingData(this.axiosConfig, this.apiKeys);
    User = new User(this.axiosConfig, this.apiKeys);
    UserAddress = new UserAddress(this.axiosConfig, this.apiKeys);
    UserProfile = new UserProfile(this.axiosConfig, this.apiKeys);
}
