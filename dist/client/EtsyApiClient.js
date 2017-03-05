"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpClient_1 = require("./HttpClient");
//imports start
const ApiMethod_1 = require("../api/ApiMethod");
const Avatar_1 = require("../api/Avatar");
const BillCharge_1 = require("../api/BillCharge");
const BillingOverview_1 = require("../api/BillingOverview");
const BillPayment_1 = require("../api/BillPayment");
const Cart_1 = require("../api/Cart");
const CartListing_1 = require("../api/CartListing");
const Category_1 = require("../api/Category");
const Country_1 = require("../api/Country");
const Coupon_1 = require("../api/Coupon");
const DataType_1 = require("../api/DataType");
const FavoriteListing_1 = require("../api/FavoriteListing");
const FavoriteUser_1 = require("../api/FavoriteUser");
const FeaturedTreasury_1 = require("../api/FeaturedTreasury");
const Feedback_1 = require("../api/Feedback");
const FeedbackInfo_1 = require("../api/FeedbackInfo");
const ForumPost_1 = require("../api/ForumPost");
const Guest_1 = require("../api/Guest");
const GuestCart_1 = require("../api/GuestCart");
const ImageType_1 = require("../api/ImageType");
const Ledger_1 = require("../api/Ledger");
const LedgerEntry_1 = require("../api/LedgerEntry");
const Listing_1 = require("../api/Listing");
const ListingFile_1 = require("../api/ListingFile");
const ListingImage_1 = require("../api/ListingImage");
const ListingInventory_1 = require("../api/ListingInventory");
const ListingOffering_1 = require("../api/ListingOffering");
const ListingProduct_1 = require("../api/ListingProduct");
const ListingTranslation_1 = require("../api/ListingTranslation");
const Manufacturer_1 = require("../api/Manufacturer");
const Money_1 = require("../api/Money");
const ParamList_1 = require("../api/ParamList");
const Payment_1 = require("../api/Payment");
const PaymentAdjustment_1 = require("../api/PaymentAdjustment");
const PaymentAdjustmentItem_1 = require("../api/PaymentAdjustmentItem");
const PaymentTemplate_1 = require("../api/PaymentTemplate");
const PropertyValue_1 = require("../api/PropertyValue");
const Receipt_1 = require("../api/Receipt");
const ReceiptShipment_1 = require("../api/ReceiptShipment");
const Region_1 = require("../api/Region");
const Segment_1 = require("../api/Segment");
const SegmentPoster_1 = require("../api/SegmentPoster");
const ShippingInfo_1 = require("../api/ShippingInfo");
const ShippingOption_1 = require("../api/ShippingOption");
const ShippingTemplate_1 = require("../api/ShippingTemplate");
const ShippingTemplateEntry_1 = require("../api/ShippingTemplateEntry");
const ShippingUpgrade_1 = require("../api/ShippingUpgrade");
const Shop_1 = require("../api/Shop");
const ShopAbout_1 = require("../api/ShopAbout");
const ShopAboutImage_1 = require("../api/ShopAboutImage");
const ShopAboutMember_1 = require("../api/ShopAboutMember");
const ShopSection_1 = require("../api/ShopSection");
const ShopSectionTranslation_1 = require("../api/ShopSectionTranslation");
const ShopTranslation_1 = require("../api/ShopTranslation");
const StructuredPolicies_1 = require("../api/StructuredPolicies");
const Style_1 = require("../api/Style");
const Taxonomy_1 = require("../api/Taxonomy");
const TaxonomyNodeProperty_1 = require("../api/TaxonomyNodeProperty");
const TaxonomyPropertyScale_1 = require("../api/TaxonomyPropertyScale");
const TaxonomyPropertyValue_1 = require("../api/TaxonomyPropertyValue");
const Team_1 = require("../api/Team");
const Transaction_1 = require("../api/Transaction");
const Treasury_1 = require("../api/Treasury");
const TreasuryCounts_1 = require("../api/TreasuryCounts");
const TreasuryListing_1 = require("../api/TreasuryListing");
const TreasuryListingData_1 = require("../api/TreasuryListingData");
const User_1 = require("../api/User");
const UserAddress_1 = require("../api/UserAddress");
const UserProfile_1 = require("../api/UserProfile");
const VariationsOption_1 = require("../api/VariationsOption");
const VariationsProperty_1 = require("../api/VariationsProperty");
const VariationsPropertyQualifier_1 = require("../api/VariationsPropertyQualifier");
const VariationsPropertySet_1 = require("../api/VariationsPropertySet");
const VariationsPropertySetOption_1 = require("../api/VariationsPropertySetOption");
const VariationsPropertySetOptionModifier_1 = require("../api/VariationsPropertySetOptionModifier");
const VariationsPropertySetProperty_1 = require("../api/VariationsPropertySetProperty");
const VariationsSelectedProperty_1 = require("../api/VariationsSelectedProperty");
//imports end
class EtsyApiClient extends HttpClient_1.HttpClient {
    constructor(fetch, options) {
        super(fetch, options);
    }
    get ApiMethod() {
        return this._ApiMethod || (this._ApiMethod = new ApiMethod_1.ApiMethod(this));
    }
    get Avatar() {
        return this._Avatar || (this._Avatar = new Avatar_1.Avatar(this));
    }
    get BillCharge() {
        return this._BillCharge || (this._BillCharge = new BillCharge_1.BillCharge(this));
    }
    get BillingOverview() {
        return this._BillingOverview || (this._BillingOverview = new BillingOverview_1.BillingOverview(this));
    }
    get BillPayment() {
        return this._BillPayment || (this._BillPayment = new BillPayment_1.BillPayment(this));
    }
    get Cart() {
        return this._Cart || (this._Cart = new Cart_1.Cart(this));
    }
    get CartListing() {
        return this._CartListing || (this._CartListing = new CartListing_1.CartListing(this));
    }
    get Category() {
        return this._Category || (this._Category = new Category_1.Category(this));
    }
    get Country() {
        return this._Country || (this._Country = new Country_1.Country(this));
    }
    get Coupon() {
        return this._Coupon || (this._Coupon = new Coupon_1.Coupon(this));
    }
    get DataType() {
        return this._DataType || (this._DataType = new DataType_1.DataType(this));
    }
    get FavoriteListing() {
        return this._FavoriteListing || (this._FavoriteListing = new FavoriteListing_1.FavoriteListing(this));
    }
    get FavoriteUser() {
        return this._FavoriteUser || (this._FavoriteUser = new FavoriteUser_1.FavoriteUser(this));
    }
    get FeaturedTreasury() {
        return this._FeaturedTreasury || (this._FeaturedTreasury = new FeaturedTreasury_1.FeaturedTreasury(this));
    }
    get Feedback() {
        return this._Feedback || (this._Feedback = new Feedback_1.Feedback(this));
    }
    get FeedbackInfo() {
        return this._FeedbackInfo || (this._FeedbackInfo = new FeedbackInfo_1.FeedbackInfo(this));
    }
    get ForumPost() {
        return this._ForumPost || (this._ForumPost = new ForumPost_1.ForumPost(this));
    }
    get Guest() {
        return this._Guest || (this._Guest = new Guest_1.Guest(this));
    }
    get GuestCart() {
        return this._GuestCart || (this._GuestCart = new GuestCart_1.GuestCart(this));
    }
    get ImageType() {
        return this._ImageType || (this._ImageType = new ImageType_1.ImageType(this));
    }
    get Ledger() {
        return this._Ledger || (this._Ledger = new Ledger_1.Ledger(this));
    }
    get LedgerEntry() {
        return this._LedgerEntry || (this._LedgerEntry = new LedgerEntry_1.LedgerEntry(this));
    }
    get Listing() {
        return this._Listing || (this._Listing = new Listing_1.Listing(this));
    }
    get ListingFile() {
        return this._ListingFile || (this._ListingFile = new ListingFile_1.ListingFile(this));
    }
    get ListingImage() {
        return this._ListingImage || (this._ListingImage = new ListingImage_1.ListingImage(this));
    }
    get ListingInventory() {
        return this._ListingInventory || (this._ListingInventory = new ListingInventory_1.ListingInventory(this));
    }
    get ListingOffering() {
        return this._ListingOffering || (this._ListingOffering = new ListingOffering_1.ListingOffering(this));
    }
    get ListingProduct() {
        return this._ListingProduct || (this._ListingProduct = new ListingProduct_1.ListingProduct(this));
    }
    get ListingTranslation() {
        return this._ListingTranslation || (this._ListingTranslation = new ListingTranslation_1.ListingTranslation(this));
    }
    get Manufacturer() {
        return this._Manufacturer || (this._Manufacturer = new Manufacturer_1.Manufacturer(this));
    }
    get Money() {
        return this._Money || (this._Money = new Money_1.Money(this));
    }
    get ParamList() {
        return this._ParamList || (this._ParamList = new ParamList_1.ParamList(this));
    }
    get Payment() {
        return this._Payment || (this._Payment = new Payment_1.Payment(this));
    }
    get PaymentAdjustment() {
        return this._PaymentAdjustment || (this._PaymentAdjustment = new PaymentAdjustment_1.PaymentAdjustment(this));
    }
    get PaymentAdjustmentItem() {
        return this._PaymentAdjustmentItem || (this._PaymentAdjustmentItem = new PaymentAdjustmentItem_1.PaymentAdjustmentItem(this));
    }
    get PaymentTemplate() {
        return this._PaymentTemplate || (this._PaymentTemplate = new PaymentTemplate_1.PaymentTemplate(this));
    }
    get PropertyValue() {
        return this._PropertyValue || (this._PropertyValue = new PropertyValue_1.PropertyValue(this));
    }
    get Receipt() {
        return this._Receipt || (this._Receipt = new Receipt_1.Receipt(this));
    }
    get ReceiptShipment() {
        return this._ReceiptShipment || (this._ReceiptShipment = new ReceiptShipment_1.ReceiptShipment(this));
    }
    get Region() {
        return this._Region || (this._Region = new Region_1.Region(this));
    }
    get Segment() {
        return this._Segment || (this._Segment = new Segment_1.Segment(this));
    }
    get SegmentPoster() {
        return this._SegmentPoster || (this._SegmentPoster = new SegmentPoster_1.SegmentPoster(this));
    }
    get ShippingInfo() {
        return this._ShippingInfo || (this._ShippingInfo = new ShippingInfo_1.ShippingInfo(this));
    }
    get ShippingOption() {
        return this._ShippingOption || (this._ShippingOption = new ShippingOption_1.ShippingOption(this));
    }
    get ShippingTemplate() {
        return this._ShippingTemplate || (this._ShippingTemplate = new ShippingTemplate_1.ShippingTemplate(this));
    }
    get ShippingTemplateEntry() {
        return this._ShippingTemplateEntry || (this._ShippingTemplateEntry = new ShippingTemplateEntry_1.ShippingTemplateEntry(this));
    }
    get ShippingUpgrade() {
        return this._ShippingUpgrade || (this._ShippingUpgrade = new ShippingUpgrade_1.ShippingUpgrade(this));
    }
    get Shop() {
        return this._Shop || (this._Shop = new Shop_1.Shop(this));
    }
    get ShopAbout() {
        return this._ShopAbout || (this._ShopAbout = new ShopAbout_1.ShopAbout(this));
    }
    get ShopAboutImage() {
        return this._ShopAboutImage || (this._ShopAboutImage = new ShopAboutImage_1.ShopAboutImage(this));
    }
    get ShopAboutMember() {
        return this._ShopAboutMember || (this._ShopAboutMember = new ShopAboutMember_1.ShopAboutMember(this));
    }
    get ShopSection() {
        return this._ShopSection || (this._ShopSection = new ShopSection_1.ShopSection(this));
    }
    get ShopSectionTranslation() {
        return this._ShopSectionTranslation || (this._ShopSectionTranslation = new ShopSectionTranslation_1.ShopSectionTranslation(this));
    }
    get ShopTranslation() {
        return this._ShopTranslation || (this._ShopTranslation = new ShopTranslation_1.ShopTranslation(this));
    }
    get StructuredPolicies() {
        return this._StructuredPolicies || (this._StructuredPolicies = new StructuredPolicies_1.StructuredPolicies(this));
    }
    get Style() {
        return this._Style || (this._Style = new Style_1.Style(this));
    }
    get Taxonomy() {
        return this._Taxonomy || (this._Taxonomy = new Taxonomy_1.Taxonomy(this));
    }
    get TaxonomyNodeProperty() {
        return this._TaxonomyNodeProperty || (this._TaxonomyNodeProperty = new TaxonomyNodeProperty_1.TaxonomyNodeProperty(this));
    }
    get TaxonomyPropertyScale() {
        return this._TaxonomyPropertyScale || (this._TaxonomyPropertyScale = new TaxonomyPropertyScale_1.TaxonomyPropertyScale(this));
    }
    get TaxonomyPropertyValue() {
        return this._TaxonomyPropertyValue || (this._TaxonomyPropertyValue = new TaxonomyPropertyValue_1.TaxonomyPropertyValue(this));
    }
    get Team() {
        return this._Team || (this._Team = new Team_1.Team(this));
    }
    get Transaction() {
        return this._Transaction || (this._Transaction = new Transaction_1.Transaction(this));
    }
    get Treasury() {
        return this._Treasury || (this._Treasury = new Treasury_1.Treasury(this));
    }
    get TreasuryCounts() {
        return this._TreasuryCounts || (this._TreasuryCounts = new TreasuryCounts_1.TreasuryCounts(this));
    }
    get TreasuryListing() {
        return this._TreasuryListing || (this._TreasuryListing = new TreasuryListing_1.TreasuryListing(this));
    }
    get TreasuryListingData() {
        return this._TreasuryListingData || (this._TreasuryListingData = new TreasuryListingData_1.TreasuryListingData(this));
    }
    get User() {
        return this._User || (this._User = new User_1.User(this));
    }
    get UserAddress() {
        return this._UserAddress || (this._UserAddress = new UserAddress_1.UserAddress(this));
    }
    get UserProfile() {
        return this._UserProfile || (this._UserProfile = new UserProfile_1.UserProfile(this));
    }
    get VariationsOption() {
        return this._VariationsOption || (this._VariationsOption = new VariationsOption_1.VariationsOption(this));
    }
    get VariationsProperty() {
        return this._VariationsProperty || (this._VariationsProperty = new VariationsProperty_1.VariationsProperty(this));
    }
    get VariationsPropertyQualifier() {
        return this._VariationsPropertyQualifier || (this._VariationsPropertyQualifier = new VariationsPropertyQualifier_1.VariationsPropertyQualifier(this));
    }
    get VariationsPropertySet() {
        return this._VariationsPropertySet || (this._VariationsPropertySet = new VariationsPropertySet_1.VariationsPropertySet(this));
    }
    get VariationsPropertySetOption() {
        return this._VariationsPropertySetOption || (this._VariationsPropertySetOption = new VariationsPropertySetOption_1.VariationsPropertySetOption(this));
    }
    get VariationsPropertySetOptionModifier() {
        return this._VariationsPropertySetOptionModifier || (this._VariationsPropertySetOptionModifier = new VariationsPropertySetOptionModifier_1.VariationsPropertySetOptionModifier(this));
    }
    get VariationsPropertySetProperty() {
        return this._VariationsPropertySetProperty || (this._VariationsPropertySetProperty = new VariationsPropertySetProperty_1.VariationsPropertySetProperty(this));
    }
    get VariationsSelectedProperty() {
        return this._VariationsSelectedProperty || (this._VariationsSelectedProperty = new VariationsSelectedProperty_1.VariationsSelectedProperty(this));
    }
}
exports.EtsyApiClient = EtsyApiClient;
