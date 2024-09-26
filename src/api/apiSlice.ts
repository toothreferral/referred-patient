import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const customBaseQuery = fetchBaseQuery({
  baseUrl: 'https://localvenda-c5e66dcf9521.herokuapp.com/v1',

  prepareHeaders: (headers) => {
    // Get your token from wherever you have it stored
    const userToken = Cookies.get('userToken');

    if (userToken) {
      // Set the 'Authorization' header with the token
      headers.set('Authorization', `Bearer ${userToken}`);
      headers.set('x-access-token', userToken);
    }

    return headers;
  },
});

export const apiSLice = createApi({
  baseQuery: customBaseQuery,

  tagTypes: ['User', 'Products', 'widthrawal', 'Orders', 'ChapterList'],

  // All endpoints
  endpoints: (builder) => ({
    // User Endpoints
    updateSellerData: builder.mutation<any, any>({
      query: (formData) => ({
        url: `/sellers/patch`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'User', id: 'List' }],
    }),

    getSellerData: builder.query({
      query: () => '/sellers',
      providesTags: [{ type: 'User', id: 'List' }],
    }),

    getSellerProductCat: builder.query({
      query: () => `/sellerCats`,
    }),

    addSellerProductCat: builder.mutation<any, any>({
      query: (formData) => ({
        url: `/sellerCats`,
        method: 'POST',
        body: formData,
      }),
    }),

    // Categories

    getCategoryList: builder.query({
      query: () => `/vendaCats
      `,
    }),

    getSubCategoryList: builder.query({
      query: (vendaId) => `/vendaCats/sub/${vendaId}`,
    }),

    //  Delivery
    addDeliverySetup: builder.mutation<any, any>({
      query: (formData) => ({
        url: `/delivery`,
        method: 'POST',
        body: formData,
      }),
    }),

    updateDeliverySetup: builder.mutation<any, any>({
      query: (formData) => ({
        url: `/delivery/update`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'User', id: 'List' }],
    }),

    // Banks details
    addBankDetails: builder.mutation<any, any>({
      query: (formData) => ({
        url: `/banks`,
        method: 'POST',
        body: formData,
      }),
    }),

    updateBankDetails: builder.mutation<any, any>({
      query: (formData) => ({
        url: `/banks/update`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'User', id: 'List' }],
    }),

    // Products endpoints
    createProduct: builder.mutation<any, any>({
      query: (formData) => ({
        url: `/products`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'Products', id: 'List' }],
    }),

    getProductById: builder.query<any, any>({
      query: (productId) => `/products/${productId}`,
      providesTags: [{ type: 'Products', id: 'List' }],
    }),

    updateProductById: builder.mutation<any, any>({
      query: ({ formData, productId }) => ({
        url: `/products/${productId}`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'Products', id: 'List' }],
    }),

    deleteProductById: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Products', id: 'List' }],
    }),

    getProductCat: builder.query({
      query: (catId) => `/products/cat/category?categoryId=${catId}`,
      providesTags: [{ type: 'Products', id: 'List' }],
    }),

    getSellerCat: builder.query({
      query: () => '/sellerCats/',
    }),

    getTotalEarnings: builder.query({
      query: () => '/sales/earnings/total/earning',
    }),

    getTotalOrders: builder.query({
      query: () => `/orders/store/total/orders`,
    }),

    getTotalSales: builder.query({
      query: ({ limit, page }) => `/sales/?limit=${limit}&page=${page}`,
    }),

    getTotalProducts: builder.query({
      query: () => '/products/',
    }),

    // =====ORDERS and SALES START====

    getNewOrderReq: builder.query({
      query: ({ limit, page }) =>
        `/orders/new/orders?limit=${limit}&page=${page}`,
      providesTags: [{ type: 'Orders', id: 'List' }],
    }),

    getConfirmedOrders: builder.query({
      query: ({ limit, page }) =>
        `/orders/get/confirm/orders?limit=${limit}&page=${page}`,
      providesTags: [{ type: 'Orders', id: 'List' }],
    }),

    getOrderByOrderId: builder.query({
      query: (orderId) => `/orders/byId/${orderId}`,
    }),

    confirmOrders: builder.mutation({
      query: (orderId) => ({
        url: `/orders/confirm/order/${orderId}`,
        method: 'POST',
      }),

      invalidatesTags: [{ type: 'Orders', id: 'List' }],
    }),

    rejectOrders: builder.mutation({
      query: ({ formData, orderId }) => ({
        url: `/orders/reject/${orderId}`,
        body: formData,
        method: 'DELETE',
      }),

      invalidatesTags: [{ type: 'Orders', id: 'List' }],
    }),

    updateOrderDeliveryStatus: builder.mutation<any, any>({
      query: ({ formData, orderId }) => ({
        url: `/orders/update/${orderId}
`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'Orders', id: 'List' }],
    }),

    // Sales

    getSaleById: builder.query({
      query: (salesId) => `/sales/${salesId}`,
    }),

    filterSalesByDate: builder.query({
      query: (query) => `/sales/filter/search?period=${query}`,
    }),
    // =====ORDERS and SALES END====

    // =====WALLET AND WITHDRAWAL START====

    getWalletBal: builder.query({
      query: () => `/wallets`,
    }),

    getBankDetails: builder.query({
      query: () => `/wallets/bank`,
    }),

    requestWithdrawal: builder.mutation({
      query: (formData) => ({
        url: `/wallets/withdraw`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'widthrawal', id: 'List' }],
    }),

    getWithdrawalReq: builder.query({
      query: () => `/wallets/request`,

      providesTags: [{ type: 'widthrawal', id: 'List' }],
    }),

    getWithdrawalReqById: builder.query({
      query: (reqId) => `/wallets/request${reqId}`,

      providesTags: [{ type: 'widthrawal', id: 'List' }],
    }),
    // =====WALLET AND WITHDRAWAL END====

    // =====REVIEWS START====
    getAllReviews: builder.query({
      query: () => `/reviews`,
    }),

    replyReview: builder.mutation({
      query: ({ formData, reviewId }) => ({
        url: `/reply/${reviewId}`,
        method: 'POST',
        body: formData,
      }),
    }),
    // =====REVIEWS END====

    // =====ADVERTS START====
    getAdsBudget: builder.query({
      query: () => `/budgets`,
    }),

    getAllAdsAnalitics: builder.query({
      query: () => `/ads/analytics/fetch`,
    }),

    getAllAds: builder.query({
      query: () => `/ads`,
    }),

    getAllPaidAds: builder.query({
      query: () => `/ads/all/paid/ads`,
    }),

    getOngoingAds: builder.query({
      query: () => `/ads/all/ongoing/ads`,
    }),

    getCompletedAds: builder.query({
      query: () => `/ads/all/completed/ads`,
    }),

    getAdById: builder.query({
      query: (adId) => `/ads/${adId}`,
    }),

    createAds: builder.mutation({
      query: ({ formData, budgetId, productId }) => ({
        url: `/ads/promote/${productId}/${budgetId} `,
        method: 'POST',
        body: formData,
      }),
    }),
    // =====ADVERTS END====
    updateLoginTime: builder.mutation({
      query: (formData) => ({
        url: `/admins/initial/time`,
        method: 'POST',
        body: formData,
      }),
    }),

    updateLogoutTime: builder.mutation({
      query: (formData) => ({
        url: ` /admins/exit/time`,
        method: 'POST',
        body: formData,
      }),
    }),

    inAppPasswordChange: builder.mutation({
      query: (formData) => ({
        url: `/auth/change/password`,
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const {
  // =====ADVERTS START====
  useGetAdsBudgetQuery,
  useGetAllAdsAnaliticsQuery,
  useGetAllAdsQuery,
  useGetAdByIdQuery,
  useCreateAdsMutation,
  useGetAllPaidAdsQuery,
  useGetCompletedAdsQuery,
  useGetOngoingAdsQuery,
  // =====ADVERTS END====

  // =====RVIEWS START====
  useGetAllReviewsQuery,
  useReplyReviewMutation,
  // =====RVIEWS END====

  // =====ORDERS and SALES START====
  useGetNewOrderReqQuery,
  useGetConfirmedOrdersQuery,
  useGetOrderByOrderIdQuery,
  useGetSaleByIdQuery,
  useConfirmOrdersMutation,
  useFilterSalesByDateQuery,
  useUpdateOrderDeliveryStatusMutation,
  useRejectOrdersMutation,
  // =====ORDERS and SALES END====

  // =====WALLET START====
  useGetWalletBalQuery,
  useGetBankDetailsQuery,
  useGetWithdrawalReqQuery,
  useGetWithdrawalReqByIdQuery,
  useRequestWithdrawalMutation,
  // =====WALLET END====

  useGetProductByIdQuery,
  useUpdateProductByIdMutation,
  useDeleteProductByIdMutation,
  useGetCategoryListQuery,
  useGetSubCategoryListQuery,
  useUpdateBankDetailsMutation,
  useUpdateDeliverySetupMutation,
  useGetProductCatQuery,
  useGetSellerProductCatQuery,
  useGetTotalEarningsQuery,
  useGetTotalOrdersQuery,
  useGetTotalProductsQuery,
  useGetTotalSalesQuery,
  useUpdateSellerDataMutation,
  useGetSellerCatQuery,
  useAddSellerProductCatMutation,
  useAddBankDetailsMutation,
  useAddDeliverySetupMutation,
  useGetSellerDataQuery,
  useCreateProductMutation,
  useUpdateLoginTimeMutation,
  useUpdateLogoutTimeMutation,
  useInAppPasswordChangeMutation,
} = apiSLice;
