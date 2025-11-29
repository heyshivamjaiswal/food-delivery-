export interface Root {
  statusCode: number
  data: Data
  tid: string
  sid: string
  deviceId: string
  csrfToken: string
}

export interface Data {
  statusMessage: string
  cards: Card[]
  firstOffsetRequest: boolean
  isQCLink: boolean
}

export interface Card {
  card?: Card2
  groupedCard?: GroupedCard
}

export interface Card2 {
  card: Card3
  relevance?: Relevance
}

export interface Card3 {
  "@type": string
  text?: string
  headerStyling?: HeaderStyling
  tabs?: Tab[]
  info?: Info
  layout?: Layout
  id?: string
  gridElements?: GridElements
}

export interface HeaderStyling {
  textColor: string
  textVariant: string
}

export interface Tab {
  id: string
  title: string
  cta?: string
}

export interface Info {
  id: string
  name: string
  city: string
  slugs: Slugs
  uniqueId: string
  cloudinaryImageId: string
  locality: string
  areaName: string
  costForTwo: string
  costForTwoMessage: string
  cuisines: string[]
  avgRating: number
  feeDetails: FeeDetails
  parentId: string
  avgRatingString: string
  totalRatingsString: string
  sla: Sla
  availability: Availability
  aggregatedDiscountInfo: AggregatedDiscountInfo
  slugString: string
  multiOutlet: boolean
  isOpen: boolean
  labels: Label[]
  logo: string
  totalRatings: number
  aggregatedDiscountInfoV2: AggregatedDiscountInfoV2
  type: string
  headerBanner: HeaderBanner
  generalPurposeInfoListV2: GeneralPurposeInfoListV2[]
  ratingSlab: string
  restaurantCategory: string
  backgroundImage: string
  hasBestsellerItems: boolean
  latLong: string
  dishStyle: DishStyle
}

export interface Slugs {
  restaurant: string
  city: string
}

export interface FeeDetails {
  restaurantId: string
  fees: Fee[]
}

export interface Fee {}

export interface Sla {
  restaurantId: string
  deliveryTime: number
  minDeliveryTime: number
  maxDeliveryTime: number
  lastMileTravel: number
  serviceability: string
  stressFactor: number
  rainMode: string
  longDistance: string
  zoneId: number
  slaString: string
  lastMileTravelString: string
  iconType: string
}

export interface Availability {
  nextCloseTime: string
  visibility: boolean
  opened: boolean
}

export interface AggregatedDiscountInfo {
  header: string
  shortDescriptionList: ShortDescriptionList[]
  descriptionList: DescriptionList[]
  visible: boolean
}

export interface ShortDescriptionList {
  meta: string
  discountType: string
  operationType: string
}

export interface DescriptionList {
  meta: string
  discountType: string
  operationType: string
}

export interface Label {
  title: string
  message: string
}

export interface AggregatedDiscountInfoV2 {
  header: string
  shortDescriptionList: ShortDescriptionList2[]
  descriptionList: DescriptionList2[]
}

export interface ShortDescriptionList2 {
  meta: string
  discountType: string
  operationType: string
}

export interface DescriptionList2 {
  meta: string
  discountType: string
  operationType: string
}

export interface HeaderBanner {
  url: string
}

export interface GeneralPurposeInfoListV2 {}

export interface DishStyle {
  socialMarkerStyle: SocialMarkerStyle[]
}

export interface SocialMarkerStyle {
  socialMarkerType: string
  title: string
  textStyle: string
  textColor: string
}

export interface Layout {
  rows: number
  columns: number
  horizontalScrollEnabled: boolean
  itemSpacing: number
  lineSpacing: number
  containerStyle: ContainerStyle
}

export interface ContainerStyle {
  containerPadding: ContainerPadding
}

export interface ContainerPadding {
  left: number
  right: number
  bottom: number 
}

export interface GridElements {
  infoWithStyle: InfoWithStyle
}

export interface InfoWithStyle {
  "@type": string
  offers: Offer[]
}

export interface Offer {
  info: Info2
  cta: Cta
}

export interface Info2 {
  header: string
  offerTagColor: string
  offerIds: string[]
  expiryTime: string
  couponCode: string
  description: string
  offerType: string
  restId: string
  offerLogo: string
  descriptionTextColor: string
  primaryDescription: string
  logoBottom?: string
}

export interface Cta {
  type: string
}

export interface Relevance {
  type: string
  sectionId: string
}

export interface GroupedCard {
  cardGroupMap: CardGroupMap
}

export interface CardGroupMap {
  REGULAR: Regular
}

export interface Regular {
  cards: Card4[]
}

export interface Card4 {
  card: Card5
}

export interface Card5 {
  card: Card6
  relevance?: Relevance2
}

export interface Card6 {
  "@type": string
  vegOnlyDetails?: VegOnlyDetails
  offersFilter?: OffersFilter
  topRatedFilter?: TopRatedFilter
  kidsCategoryFilter?: KidsCategoryFilter
  vegFilter?: VegFilter
  nonvegFilter?: NonvegFilter
  title?: string
  carousel?: Carousel[]
  categories?: Category[]
  image?: string
  categoryId?: string
  itemCards?: ItemCard2[]
  type?: string
  imageId?: string
  text?: string[]
  name?: string
  area?: string
  completeAddress?: string
}

export interface VegOnlyDetails {
  imageId: string
  title: string
  description: string
}

export interface OffersFilter {
  attributes: Attributes
}

export interface Attributes {
  displayText: string
}

export interface TopRatedFilter {
  attributes: Attributes2
}

export interface Attributes2 {
  displayText: string
}

export interface KidsCategoryFilter {
  attributes: Attributes3
}

export interface Attributes3 {
  displayText: string
  tooltip: Tooltip
}

export interface Tooltip {
  enabled: boolean
  displayText: string
}

export interface VegFilter {
  attributes: Attributes4
}

export interface Attributes4 {
  displayText: string
}

export interface NonvegFilter {
  attributes: Attributes5
}

export interface Attributes5 {
  displayText: string
}

export interface Carousel {
  type: string
  subtype: string
  bannerId: string
  creativeId: string
  title: string
  description: string
  fontColor: string
  dish: Dish
}

export interface Dish {
  info: Info3
  restaurant: Restaurant
  hideRestaurantDetails: boolean
}

export interface Info3 {
  id: string
  name: string
  category: string
  description: string
  imageId: string
  inStock: number
  isVeg: number
  price: number
  finalPrice: number
  itemAttribute: ItemAttribute
  offerTags: OfferTag[]
  itemNudgeType: string
  offerIds: string[]
  parentId: string
}

export interface ItemAttribute {
  vegClassifier: string
}

export interface OfferTag {
  title: string
  textColor: string
  backgroundColor: string
  matchText: string
}

export interface Restaurant {
  info: Info4
}

export interface Info4 {
  dishStyle: DishStyle2
}

export interface DishStyle2 {
  socialMarkerStyle: SocialMarkerStyle2[]
}

export interface SocialMarkerStyle2 {
  socialMarkerType: string
  title: string
  textStyle: string
  textColor: string
}

export interface Category {
  title: string
  itemCards?: ItemCard[]
  categoryId: string
}

export interface ItemCard {
  card: Card7
}
 
export interface Card7 {
  "@type": string
  info: Info5
  hideRestaurantDetails: boolean
}

export interface Info5 {
  id: string
  name: string
  category: string
  description?: string
  imageId?: string
  inStock: number
  isVeg: number
  price?: number
  itemAttribute: ItemAttribute2
  ribbon?: Ribbon
  type: string
  isBestseller?: boolean
  ratings?: Ratings
  parentId: string
  addons?: Addon[]
  finalPrice?: number
  offerTags?: OfferTag2[]
  itemNudgeType?: string
  offerIds?: string[]
  variantsV2?: VariantsV2
  defaultPrice?: number
}

export interface ItemAttribute2 {
  vegClassifier: string
} 

export interface Ribbon {
  text: string
  textColor: string
  topBackgroundColor: string
  bottomBackgroundColor: string
}

export interface Ratings {
  aggregatedRating: AggregatedRating
  ratingsPresentationConfig: RatingsPresentationConfig
}

export interface AggregatedRating {
  rating: string
  ratingCount: string
  ratingCountV2: string
}

export interface RatingsPresentationConfig {
  bgGradient: BgGradient
  ratingIconColor: string
  ratingTextColor: string
  ratingCountTextColor: string
  ratingFontName: string
  ratingCountFontName: string
}

export interface BgGradient {
  colours: string[]
  gradientDirection: string
}

export interface Addon {
  groupId: string
  groupName: string
  choices: Choice[]
  maxAddons: number
  maxFreeAddons: number
  minAddons: number
}

export interface Choice {
  id: string
  name: string
  price: number
  inStock?: number
  isVeg: number
  isEnabled: number
}

export interface OfferTag2 {
  title: string
  textColor: string
  backgroundColor: string
  matchText: string
}

export interface VariantsV2 {
  variantGroups: VariantGroup[]
  pricingModels: PricingModel[]
}

export interface VariantGroup {
  groupId: string
  name: string
  variations: Variation[]
}

export interface Variation {
  name: string
  price: number
  default?: number
  id: string
  inStock?: number
  isVeg: number
  isEnabled: number
}

export interface PricingModel {
  variations: Variation2[]
  price: number
  addonCombinations: AddonCombination[]
}

export interface Variation2 {
  groupId: string
  variationId: string
}

export interface AddonCombination {
  groupId: string
  addonId: string
}

export interface ItemCard2 {
  card: Card8
}

export interface Card8 {
  "@type": string
  info: Info6
  hideRestaurantDetails: boolean
}

export interface Info6 {
  id: string
  name: string
  category: string
  description: string
  imageId?: string
  inStock: number
  isVeg: number
  price: number
  itemAttribute: ItemAttribute3
  type: string
  ratings: Ratings2
  parentId: string
  ribbon?: Ribbon2
  isBestseller?: boolean
  finalPrice?: number
  offerTags?: OfferTag3[]
  itemNudgeType?: string
  offerIds?: string[]
}

export interface ItemAttribute3 {
  vegClassifier: string
}

export interface Ratings2 {
  aggregatedRating: AggregatedRating2
  ratingsPresentationConfig: RatingsPresentationConfig2
}

export interface AggregatedRating2 {
  rating: string
  ratingCount: string
  ratingCountV2: string
}

export interface RatingsPresentationConfig2 {
  bgGradient: BgGradient2
  ratingIconColor: string
  ratingTextColor: string
  ratingCountTextColor: string
  ratingFontName: string
  ratingCountFontName: string
}

export interface BgGradient2 {
  colours: string[]
  gradientDirection: string
}

export interface Ribbon2 {
  text: string
  textColor: string
  topBackgroundColor: string
  bottomBackgroundColor: string
}

export interface OfferTag3 {
  title: string
  textColor: string
  backgroundColor: string
  matchText: string
}

export interface Relevance2 {
  type: string
  sectionId: string
}
