import { ReviewItem } from '../types/index';

export interface GoogleReviewItem {
  id: string;
  authorName: string;
  authorPhoto?: string;
  rating: number;
  relativeTimeText?: string;
  text: string;
  vehicle?: string;
  branch?: string;
  ownerResponse?: string;
  verified: boolean;
}

export interface GoogleBusinessData {
  placeName: string;
  rating: number;
  totalReviews: number;
  ratingDistribution: { [key: number]: number };
  googleMapsUrl: string;
  writeReviewUrl: string;
  source: string;
  reviews: GoogleReviewItem[];
}

export const staticCustomerReviews: GoogleReviewItem[] = [
  {
    id: 'rev-1',
    authorName: 'Kashif Hussain',
    authorPhoto: '',
    rating: 5,
    relativeTimeText: 'Verified Customer',
    text: 'I am satisfied by Hypertune schedule maintenance service for my Daihatsu move custom turbo. cooperative staff.',
    ownerResponse: "Thank you so much, Kashif Hussain, for your valuable 5-star review! ⭐ We're delighted to know that you're satisfied with our service.",
    verified: true,
  },
  {
    id: 'rev-2',
    authorName: 'Ahsan Butt (AB Traveller)',
    authorPhoto: '',
    rating: 5,
    relativeTimeText: 'Verified Customer',
    text: 'Very cooperative and professional staff, One of the best auto shop in pwd.',
    ownerResponse: 'Thank you so much, Ahsan Butt, for your wonderful 5-star review! We truly appreciate your kind words.',
    verified: true,
  },
  {
    id: 'rev-3',
    authorName: 'Ch Shakeel',
    authorPhoto: '',
    rating: 5,
    relativeTimeText: 'Verified Customer',
    text: 'V.good service I done my car ppf extra comparative staff and next level service 100% recommend from my side',
    ownerResponse: "Thank you, Ch Shakeel, for your fantastic 5-star review! We're delighted to know you were satisfied with our PPF service.",
    verified: true,
  },
  {
    id: 'rev-4',
    authorName: 'Ali 447',
    authorPhoto: '',
    rating: 5,
    relativeTimeText: 'Verified Customer',
    text: 'Excellent service, Good attitude and very cheap rates. I am very happy with this service',
    ownerResponse: "Thank you, Ali, for your wonderful 5-star review! We're thrilled to hear that you were happy with our service.",
    verified: true,
  },
  {
    id: 'rev-5',
    authorName: 'Hikmatyar malik',
    authorPhoto: '',
    rating: 5,
    relativeTimeText: 'Verified Customer',
    text: "Had my alto's complete tuning from Hyper tune. The place is well equiped with modern machinery, staff is experienced and knowledgeable.",
    ownerResponse: "Thank you so much for the kind words, Hikmatyar! We're glad the team could get your Alto tuned up and that our equipment impressed you.",
    verified: true,
  },
  {
    id: 'rev-6',
    authorName: 'Abbas Rasheed',
    authorPhoto: '',
    rating: 5,
    relativeTimeText: 'Verified Customer',
    text: 'Satisfied with the work💯',
    ownerResponse: "Thank you, Abbas, for the perfect rating and for choosing Hypertune Garage! We're glad you're satisfied with the work. We look forward to serving you again!",
    verified: true,
  },
  {
    id: 'rev-7',
    authorName: 'Talal Ather (Local Guide)',
    authorPhoto: '',
    rating: 5,
    relativeTimeText: 'Local Guide • Verified Customer',
    text: 'Very good services at Hypertune Garage, Ali did interior and exterior detailing work on my car, highly recommended!',
    ownerResponse: "Thank you so much, Talal, for the great review and for trusting us with your car! We're thrilled to hear Ali took great care of your detailing.",
    verified: true,
  },
  {
    id: 'rev-8',
    authorName: 'CherrY SherrY',
    authorPhoto: '',
    rating: 5,
    relativeTimeText: 'Verified Customer',
    text: 'Appreciated Staff, Work, And Management.. Totally Satisfied.. Excellent Work 💓',
    ownerResponse: "Thank you so much, Cherry, for your wonderful review! 💓 We're thrilled to hear you're totally satisfied with our staff, work, and management.",
    verified: true,
  },
  {
    id: 'rev-9',
    authorName: 'Hamid Tanveer',
    authorPhoto: '',
    rating: 5,
    relativeTimeText: 'Verified Customer',
    text: 'Excellent experience, very professional team. PPF & UV protection sheet installation from hypertune garage.',
    ownerResponse: "Thank you so much, Hamid! We're thrilled you had a great experience with our team. It was a pleasure taking care of your car's PPF and UV protection.",
    verified: true,
  },
  {
    id: 'rev-10',
    authorName: 'Muhammed Abdullah Umer',
    authorPhoto: '',
    rating: 5,
    relativeTimeText: 'Verified Customer',
    text: "I recently had my Suzuki Alto 2005 completely detailed at Hypertune Garage, and I couldn't be happier with the results.",
    ownerResponse: "Thank you so much for your kind words and for taking the time to share your experience with us. We're truly delighted to hear you couldn't be happier with the results.",
    verified: true,
  },
  {
    id: 'rev-11',
    authorName: 'nauman saleemi',
    authorPhoto: '',
    rating: 5,
    relativeTimeText: 'Verified Customer',
    text: 'Very co operative well acknowledged and fully skilled crew for automobiles. I highly recommend hypertune garage for all type of automobile users for mechanical electrical and interior decor queries.',
    ownerResponse: 'Thank you, Nauman, for your kind words and recommendation. We\'re glad to hear that you had a positive experience with our team.',
    verified: true,
  },
  {
    id: 'rev-12',
    authorName: 'AMK (Local Guide)',
    authorPhoto: '',
    rating: 5,
    relativeTimeText: 'Local Guide • Verified Customer',
    text: 'Great service highly recommend best prices and value for money',
    ownerResponse: "Thank you so much for your kind words and recommendation. We're glad you found our service great and our prices and value for money to your satisfaction.",
    verified: true,
  },
  {
    id: 'rev-13',
    authorName: 'Muhammad Ali (Local Guide)',
    authorPhoto: '',
    rating: 5,
    relativeTimeText: 'Local Guide • Verified Customer',
    text: 'Excellent experience at HyperTune Garage, Police Foundation Road, Rawalpindi. I recently got the engine oil and radiator work done on my Mercedes.',
    ownerResponse: 'Thank you Muhammad Ali for your wonderful review and for choosing HyperTune Garage for your Mercedes maintenance.',
    verified: true,
  },
  {
    id: 'rev-14',
    authorName: 'Awais Khattak',
    authorPhoto: '',
    rating: 5,
    relativeTimeText: 'Verified Customer',
    text: 'Well educated staff, reasonable charges, on Point services!!!',
    ownerResponse: "Thank you, Awais! We're happy you noticed our team's expertise and fair pricing. Always here to help!",
    verified: true,
  },
  {
    id: 'rev-15',
    authorName: 'Zayed Khawaja (Local Guide)',
    authorPhoto: '',
    rating: 5,
    relativeTimeText: 'Local Guide • Verified Customer',
    text: 'Guy knows his stuff. Car drives significantly better after tuning and Oil Change.',
    ownerResponse: "Thanks, Zayed! Great to hear your car is performing better. We're always here to keep it running at its best.",
    verified: true,
  },
];

export const googleBusinessData: GoogleBusinessData = {
  placeName: 'HyperTune Garage - PPF, Ceramic & German Automotive Specialists',
  rating: 4.8,
  totalReviews: 28,
  ratingDistribution: { 5: 26, 4: 2, 3: 0, 2: 0, 1: 0 },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=HyperTune+Garage',
  writeReviewUrl: 'https://search.google.com/local/writereview',
  source: 'static-curated-reviews',
  reviews: staticCustomerReviews,
};

// Legacy reviewsData array mapped directly from the static customer reviews
export const reviewsData: ReviewItem[] = staticCustomerReviews.map((r) => ({
  id: r.id,
  customerName: r.authorName,
  vehicle: r.vehicle || 'Customer Vehicle',
  location: r.branch || 'Islamabad & Rawalpindi',
  rating: r.rating,
  date: 'Verified Review',
  comment: r.text,
  service: 'Automotive Maintenance & Tuning',
  ownerResponse: r.ownerResponse,
  verified: r.verified,
}));
