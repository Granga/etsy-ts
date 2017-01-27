import {HttpClient, IHttpClientOptions} from "./HttpClient";
//imports start
import {ApiMethod} from "../api/ApiMethod";
import {Avatar} from "../api/Avatar";
import {BillCharge} from "../api/BillCharge";
import {BillingOverview} from "../api/BillingOverview";
import {BillPayment} from "../api/BillPayment";
import {Cart} from "../api/Cart";
import {CartListing} from "../api/CartListing";
import {Category} from "../api/Category";
import {Country} from "../api/Country";
import {Coupon} from "../api/Coupon";
import {DataType} from "../api/DataType";
import {FavoriteListing} from "../api/FavoriteListing";
import {FavoriteUser} from "../api/FavoriteUser";
import {FeaturedTreasury} from "../api/FeaturedTreasury";
import {Feedback} from "../api/Feedback";
import {FeedbackInfo} from "../api/FeedbackInfo";
import {ForumPost} from "../api/ForumPost";
import {Guest} from "../api/Guest";
import {GuestCart} from "../api/GuestCart";
import {ImageType} from "../api/ImageType";
import {Ledger} from "../api/Ledger";
import {LedgerEntry} from "../api/LedgerEntry";
import {Listing} from "../api/Listing";
import {ListingFile} from "../api/ListingFile";
import {ListingImage} from "../api/ListingImage";
import {ListingInventory} from "../api/ListingInventory";
import {ListingOffering} from "../api/ListingOffering";
import {ListingProduct} from "../api/ListingProduct";
import {ListingTranslation} from "../api/ListingTranslation";
import {Manufacturer} from "../api/Manufacturer";
import {Money} from "../api/Money";
import {ParamList} from "../api/ParamList";
import {Payment} from "../api/Payment";
import {PaymentAdjustment} from "../api/PaymentAdjustment";
import {PaymentAdjustmentItem} from "../api/PaymentAdjustmentItem";
import {PaymentTemplate} from "../api/PaymentTemplate";
import {PropertyValue} from "../api/PropertyValue";
import {Receipt} from "../api/Receipt";
import {ReceiptShipment} from "../api/ReceiptShipment";
import {Region} from "../api/Region";
import {Segment} from "../api/Segment";
import {SegmentPoster} from "../api/SegmentPoster";
import {ShippingInfo} from "../api/ShippingInfo";
import {ShippingOption} from "../api/ShippingOption";
import {ShippingTemplate} from "../api/ShippingTemplate";
import {ShippingTemplateEntry} from "../api/ShippingTemplateEntry";
import {ShippingUpgrade} from "../api/ShippingUpgrade";
import {Shop} from "../api/Shop";
import {ShopAbout} from "../api/ShopAbout";
import {ShopAboutImage} from "../api/ShopAboutImage";
import {ShopAboutMember} from "../api/ShopAboutMember";
import {ShopSection} from "../api/ShopSection";
import {ShopSectionTranslation} from "../api/ShopSectionTranslation";
import {ShopTranslation} from "../api/ShopTranslation";
import {StructuredPolicies} from "../api/StructuredPolicies";
import {Style} from "../api/Style";
import {Taxonomy} from "../api/Taxonomy";
import {TaxonomyNodeProperty} from "../api/TaxonomyNodeProperty";
import {TaxonomyPropertyScale} from "../api/TaxonomyPropertyScale";
import {TaxonomyPropertyValue} from "../api/TaxonomyPropertyValue";
import {Team} from "../api/Team";
import {Transaction} from "../api/Transaction";
import {Treasury} from "../api/Treasury";
import {TreasuryCounts} from "../api/TreasuryCounts";
import {TreasuryListing} from "../api/TreasuryListing";
import {TreasuryListingData} from "../api/TreasuryListingData";
import {User} from "../api/User";
import {UserAddress} from "../api/UserAddress";
import {UserProfile} from "../api/UserProfile";
import {VariationsOption} from "../api/VariationsOption";
import {VariationsProperty} from "../api/VariationsProperty";
import {VariationsPropertyQualifier} from "../api/VariationsPropertyQualifier";
import {VariationsPropertySet} from "../api/VariationsPropertySet";
import {VariationsPropertySetOption} from "../api/VariationsPropertySetOption";
import {VariationsPropertySetOptionModifier} from "../api/VariationsPropertySetOptionModifier";
import {VariationsPropertySetProperty} from "../api/VariationsPropertySetProperty";
import {VariationsSelectedProperty} from "../api/VariationsSelectedProperty";

//imports end

export class EtsyApiClient extends HttpClient {
    constructor(fetch: any, options?: IHttpClientOptions) {
        super(fetch, options);
    }

    //api start
    private _ApiMethod: ApiMethod;
    get ApiMethod(): ApiMethod {
        return this._ApiMethod || (this._ApiMethod = new ApiMethod(this));
    }

    private _Avatar: Avatar;
    get Avatar(): Avatar {
        return this._Avatar || (this._Avatar = new Avatar(this));
    }

    private _BillCharge: BillCharge;
    get BillCharge(): BillCharge {
        return this._BillCharge || (this._BillCharge = new BillCharge(this));
    }

    private _BillingOverview: BillingOverview;
    get BillingOverview(): BillingOverview {
        return this._BillingOverview || (this._BillingOverview = new BillingOverview(this));
    }

    private _BillPayment: BillPayment;
    get BillPayment(): BillPayment {
        return this._BillPayment || (this._BillPayment = new BillPayment(this));
    }

    private _Cart: Cart;
    get Cart(): Cart {
        return this._Cart || (this._Cart = new Cart(this));
    }

    private _CartListing: CartListing;
    get CartListing(): CartListing {
        return this._CartListing || (this._CartListing = new CartListing(this));
    }

    private _Category: Category;
    get Category(): Category {
        return this._Category || (this._Category = new Category(this));
    }

    private _Country: Country;
    get Country(): Country {
        return this._Country || (this._Country = new Country(this));
    }

    private _Coupon: Coupon;
    get Coupon(): Coupon {
        return this._Coupon || (this._Coupon = new Coupon(this));
    }

    private _DataType: DataType;
    get DataType(): DataType {
        return this._DataType || (this._DataType = new DataType(this));
    }

    private _FavoriteListing: FavoriteListing;
    get FavoriteListing(): FavoriteListing {
        return this._FavoriteListing || (this._FavoriteListing = new FavoriteListing(this));
    }

    private _FavoriteUser: FavoriteUser;
    get FavoriteUser(): FavoriteUser {
        return this._FavoriteUser || (this._FavoriteUser = new FavoriteUser(this));
    }

    private _FeaturedTreasury: FeaturedTreasury;
    get FeaturedTreasury(): FeaturedTreasury {
        return this._FeaturedTreasury || (this._FeaturedTreasury = new FeaturedTreasury(this));
    }

    private _Feedback: Feedback;
    get Feedback(): Feedback {
        return this._Feedback || (this._Feedback = new Feedback(this));
    }

    private _FeedbackInfo: FeedbackInfo;
    get FeedbackInfo(): FeedbackInfo {
        return this._FeedbackInfo || (this._FeedbackInfo = new FeedbackInfo(this));
    }

    private _ForumPost: ForumPost;
    get ForumPost(): ForumPost {
        return this._ForumPost || (this._ForumPost = new ForumPost(this));
    }

    private _Guest: Guest;
    get Guest(): Guest {
        return this._Guest || (this._Guest = new Guest(this));
    }

    private _GuestCart: GuestCart;
    get GuestCart(): GuestCart {
        return this._GuestCart || (this._GuestCart = new GuestCart(this));
    }

    private _ImageType: ImageType;
    get ImageType(): ImageType {
        return this._ImageType || (this._ImageType = new ImageType(this));
    }

    private _Ledger: Ledger;
    get Ledger(): Ledger {
        return this._Ledger || (this._Ledger = new Ledger(this));
    }

    private _LedgerEntry: LedgerEntry;
    get LedgerEntry(): LedgerEntry {
        return this._LedgerEntry || (this._LedgerEntry = new LedgerEntry(this));
    }

    private _Listing: Listing;
    get Listing(): Listing {
        return this._Listing || (this._Listing = new Listing(this));
    }

    private _ListingFile: ListingFile;
    get ListingFile(): ListingFile {
        return this._ListingFile || (this._ListingFile = new ListingFile(this));
    }

    private _ListingImage: ListingImage;
    get ListingImage(): ListingImage {
        return this._ListingImage || (this._ListingImage = new ListingImage(this));
    }

    private _ListingInventory: ListingInventory;
    get ListingInventory(): ListingInventory {
        return this._ListingInventory || (this._ListingInventory = new ListingInventory(this));
    }

    private _ListingOffering: ListingOffering;
    get ListingOffering(): ListingOffering {
        return this._ListingOffering || (this._ListingOffering = new ListingOffering(this));
    }

    private _ListingProduct: ListingProduct;
    get ListingProduct(): ListingProduct {
        return this._ListingProduct || (this._ListingProduct = new ListingProduct(this));
    }

    private _ListingTranslation: ListingTranslation;
    get ListingTranslation(): ListingTranslation {
        return this._ListingTranslation || (this._ListingTranslation = new ListingTranslation(this));
    }

    private _Manufacturer: Manufacturer;
    get Manufacturer(): Manufacturer {
        return this._Manufacturer || (this._Manufacturer = new Manufacturer(this));
    }

    private _Money: Money;
    get Money(): Money {
        return this._Money || (this._Money = new Money(this));
    }

    private _ParamList: ParamList;
    get ParamList(): ParamList {
        return this._ParamList || (this._ParamList = new ParamList(this));
    }

    private _Payment: Payment;
    get Payment(): Payment {
        return this._Payment || (this._Payment = new Payment(this));
    }

    private _PaymentAdjustment: PaymentAdjustment;
    get PaymentAdjustment(): PaymentAdjustment {
        return this._PaymentAdjustment || (this._PaymentAdjustment = new PaymentAdjustment(this));
    }

    private _PaymentAdjustmentItem: PaymentAdjustmentItem;
    get PaymentAdjustmentItem(): PaymentAdjustmentItem {
        return this._PaymentAdjustmentItem || (this._PaymentAdjustmentItem = new PaymentAdjustmentItem(this));
    }

    private _PaymentTemplate: PaymentTemplate;
    get PaymentTemplate(): PaymentTemplate {
        return this._PaymentTemplate || (this._PaymentTemplate = new PaymentTemplate(this));
    }

    private _PropertyValue: PropertyValue;
    get PropertyValue(): PropertyValue {
        return this._PropertyValue || (this._PropertyValue = new PropertyValue(this));
    }

    private _Receipt: Receipt;
    get Receipt(): Receipt {
        return this._Receipt || (this._Receipt = new Receipt(this));
    }

    private _ReceiptShipment: ReceiptShipment;
    get ReceiptShipment(): ReceiptShipment {
        return this._ReceiptShipment || (this._ReceiptShipment = new ReceiptShipment(this));
    }

    private _Region: Region;
    get Region(): Region {
        return this._Region || (this._Region = new Region(this));
    }

    private _Segment: Segment;
    get Segment(): Segment {
        return this._Segment || (this._Segment = new Segment(this));
    }

    private _SegmentPoster: SegmentPoster;
    get SegmentPoster(): SegmentPoster {
        return this._SegmentPoster || (this._SegmentPoster = new SegmentPoster(this));
    }

    private _ShippingInfo: ShippingInfo;
    get ShippingInfo(): ShippingInfo {
        return this._ShippingInfo || (this._ShippingInfo = new ShippingInfo(this));
    }

    private _ShippingOption: ShippingOption;
    get ShippingOption(): ShippingOption {
        return this._ShippingOption || (this._ShippingOption = new ShippingOption(this));
    }

    private _ShippingTemplate: ShippingTemplate;
    get ShippingTemplate(): ShippingTemplate {
        return this._ShippingTemplate || (this._ShippingTemplate = new ShippingTemplate(this));
    }

    private _ShippingTemplateEntry: ShippingTemplateEntry;
    get ShippingTemplateEntry(): ShippingTemplateEntry {
        return this._ShippingTemplateEntry || (this._ShippingTemplateEntry = new ShippingTemplateEntry(this));
    }

    private _ShippingUpgrade: ShippingUpgrade;
    get ShippingUpgrade(): ShippingUpgrade {
        return this._ShippingUpgrade || (this._ShippingUpgrade = new ShippingUpgrade(this));
    }

    private _Shop: Shop;
    get Shop(): Shop {
        return this._Shop || (this._Shop = new Shop(this));
    }

    private _ShopAbout: ShopAbout;
    get ShopAbout(): ShopAbout {
        return this._ShopAbout || (this._ShopAbout = new ShopAbout(this));
    }

    private _ShopAboutImage: ShopAboutImage;
    get ShopAboutImage(): ShopAboutImage {
        return this._ShopAboutImage || (this._ShopAboutImage = new ShopAboutImage(this));
    }

    private _ShopAboutMember: ShopAboutMember;
    get ShopAboutMember(): ShopAboutMember {
        return this._ShopAboutMember || (this._ShopAboutMember = new ShopAboutMember(this));
    }

    private _ShopSection: ShopSection;
    get ShopSection(): ShopSection {
        return this._ShopSection || (this._ShopSection = new ShopSection(this));
    }

    private _ShopSectionTranslation: ShopSectionTranslation;
    get ShopSectionTranslation(): ShopSectionTranslation {
        return this._ShopSectionTranslation || (this._ShopSectionTranslation = new ShopSectionTranslation(this));
    }

    private _ShopTranslation: ShopTranslation;
    get ShopTranslation(): ShopTranslation {
        return this._ShopTranslation || (this._ShopTranslation = new ShopTranslation(this));
    }

    private _StructuredPolicies: StructuredPolicies;
    get StructuredPolicies(): StructuredPolicies {
        return this._StructuredPolicies || (this._StructuredPolicies = new StructuredPolicies(this));
    }

    private _Style: Style;
    get Style(): Style {
        return this._Style || (this._Style = new Style(this));
    }

    private _Taxonomy: Taxonomy;
    get Taxonomy(): Taxonomy {
        return this._Taxonomy || (this._Taxonomy = new Taxonomy(this));
    }

    private _TaxonomyNodeProperty: TaxonomyNodeProperty;
    get TaxonomyNodeProperty(): TaxonomyNodeProperty {
        return this._TaxonomyNodeProperty || (this._TaxonomyNodeProperty = new TaxonomyNodeProperty(this));
    }

    private _TaxonomyPropertyScale: TaxonomyPropertyScale;
    get TaxonomyPropertyScale(): TaxonomyPropertyScale {
        return this._TaxonomyPropertyScale || (this._TaxonomyPropertyScale = new TaxonomyPropertyScale(this));
    }

    private _TaxonomyPropertyValue: TaxonomyPropertyValue;
    get TaxonomyPropertyValue(): TaxonomyPropertyValue {
        return this._TaxonomyPropertyValue || (this._TaxonomyPropertyValue = new TaxonomyPropertyValue(this));
    }

    private _Team: Team;
    get Team(): Team {
        return this._Team || (this._Team = new Team(this));
    }

    private _Transaction: Transaction;
    get Transaction(): Transaction {
        return this._Transaction || (this._Transaction = new Transaction(this));
    }

    private _Treasury: Treasury;
    get Treasury(): Treasury {
        return this._Treasury || (this._Treasury = new Treasury(this));
    }

    private _TreasuryCounts: TreasuryCounts;
    get TreasuryCounts(): TreasuryCounts {
        return this._TreasuryCounts || (this._TreasuryCounts = new TreasuryCounts(this));
    }

    private _TreasuryListing: TreasuryListing;
    get TreasuryListing(): TreasuryListing {
        return this._TreasuryListing || (this._TreasuryListing = new TreasuryListing(this));
    }

    private _TreasuryListingData: TreasuryListingData;
    get TreasuryListingData(): TreasuryListingData {
        return this._TreasuryListingData || (this._TreasuryListingData = new TreasuryListingData(this));
    }

    private _User: User;
    get User(): User {
        return this._User || (this._User = new User(this));
    }

    private _UserAddress: UserAddress;
    get UserAddress(): UserAddress {
        return this._UserAddress || (this._UserAddress = new UserAddress(this));
    }

    private _UserProfile: UserProfile;
    get UserProfile(): UserProfile {
        return this._UserProfile || (this._UserProfile = new UserProfile(this));
    }

    private _VariationsOption: VariationsOption;
    get VariationsOption(): VariationsOption {
        return this._VariationsOption || (this._VariationsOption = new VariationsOption(this));
    }

    private _VariationsProperty: VariationsProperty;
    get VariationsProperty(): VariationsProperty {
        return this._VariationsProperty || (this._VariationsProperty = new VariationsProperty(this));
    }

    private _VariationsPropertyQualifier: VariationsPropertyQualifier;
    get VariationsPropertyQualifier(): VariationsPropertyQualifier {
        return this._VariationsPropertyQualifier || (this._VariationsPropertyQualifier = new VariationsPropertyQualifier(this));
    }

    private _VariationsPropertySet: VariationsPropertySet;
    get VariationsPropertySet(): VariationsPropertySet {
        return this._VariationsPropertySet || (this._VariationsPropertySet = new VariationsPropertySet(this));
    }

    private _VariationsPropertySetOption: VariationsPropertySetOption;
    get VariationsPropertySetOption(): VariationsPropertySetOption {
        return this._VariationsPropertySetOption || (this._VariationsPropertySetOption = new VariationsPropertySetOption(this));
    }

    private _VariationsPropertySetOptionModifier: VariationsPropertySetOptionModifier;
    get VariationsPropertySetOptionModifier(): VariationsPropertySetOptionModifier {
        return this._VariationsPropertySetOptionModifier || (this._VariationsPropertySetOptionModifier = new VariationsPropertySetOptionModifier(this));
    }

    private _VariationsPropertySetProperty: VariationsPropertySetProperty;
    get VariationsPropertySetProperty(): VariationsPropertySetProperty {
        return this._VariationsPropertySetProperty || (this._VariationsPropertySetProperty = new VariationsPropertySetProperty(this));
    }

    private _VariationsSelectedProperty: VariationsSelectedProperty;
    get VariationsSelectedProperty(): VariationsSelectedProperty {
        return this._VariationsSelectedProperty || (this._VariationsSelectedProperty = new VariationsSelectedProperty(this));
    }

//api end
}
