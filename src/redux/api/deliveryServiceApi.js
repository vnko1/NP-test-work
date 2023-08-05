import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const env = import.meta.env;

export const deliveryServiceApi = createApi({
  reducerPath: "deliveryServiceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: env.VITE_NP_URL,
  }),
  tagTypes: ["TrackingStatus", "WareHouses"],
  endpoints: (build) => ({
    getDelivertStatus: build.mutation({
      query: (trackCode) => ({
        method: "POST",
        body: {
          apiKey: env.VITE_API_KEY,
          modelName: "TrackingDocument",
          calledMethod: "getStatusDocuments",
          methodProperties: {
            Documents: trackCode.map((item) => ({ DocumentNumber: item })),
          },
        },
      }),
      invalidatesTags: ["TrackingStatus"],
      transformResponse: (response) => {
        const transformedResponse = {
          isSuccess: response?.success,
          errors: response?.errors,
          errorCodes: response?.errorCodes,
        };
        transformedResponse.data = response?.data.map(
          ({
            WarehouseSender,
            WarehouseSenderAddress,
            CitySender,
            WarehouseRecipient,
            WarehouseRecipientAddress,
            CityRecipient,
            Status,
            Number,
            ActualDeliveryDate,
            StatusCode,
          }) => ({
            WarehouseSender,
            WarehouseSenderAddress,
            CitySender,
            WarehouseRecipient,
            WarehouseRecipientAddress,
            CityRecipient,
            Status,
            Number,
            ActualDeliveryDate,
            StatusCode,
          })
        );

        return transformedResponse;
      },
    }),
    getWareHouses: build.mutation({
      query: ({ city, page = 1, limit = 10 }) => ({
        method: "POST",
        body: {
          apiKey: env.VITE_API_KEY,
          modelName: "Address",
          calledMethod: "getWarehouses",
          methodProperties: {
            CityName: city,
            Page: page,
            Limit: limit,
            Language: "UA",
          },
        },
      }),
      invalidatesTags: ["WareHouses"],
      transformResponse: (response) => {
        const transformedResponse = {
          isSuccess: response?.success,
          errors: response?.errors,
          errorCodes: response?.errorCodes,
        };
        transformedResponse.data = response?.data.map(
          ({
            Description,
            ShortAddress,
            Phone,
            Number,
            CityDescription,
            SettlementDescription,
            SettlementRegionsDescription,
            SettlementTypeDescription,
            Longitude,
            Latitude,
            Schedule,
            RegionCity,
            PostalCodeUA,
          }) => ({
            Description,
            ShortAddress,
            Phone,
            Number,
            CityDescription,
            SettlementDescription,
            SettlementRegionsDescription,
            SettlementTypeDescription,
            Longitude,
            Latitude,
            Schedule,
            RegionCity,
            PostalCodeUA,
          })
        );

        return transformedResponse;
      },
    }),
  }),
});

export const { useGetDelivertStatusMutation, useGetWareHousesMutation } =
  deliveryServiceApi;
